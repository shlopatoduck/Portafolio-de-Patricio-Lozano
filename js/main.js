(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  function onMQ(mq, fn) {
    if (mq.addEventListener) mq.addEventListener('change', fn);
    else if (mq.addListener) mq.addListener(fn);
  }

  /* ---------- Scroll compartido (nav, brasas) ---------- */
  var nav = document.getElementById('nav');
  var hero = document.getElementById('inicio');
  var scrollFactor = 1; // 1 en el hero, baja a 0.35 al pasarlo

  function onScroll() {
    var y = window.pageYOffset;
    if (nav) nav.classList.toggle('is-scrolled', y > 40);
    var h = hero ? hero.offsetHeight : window.innerHeight;
    var t = Math.min(1, Math.max(0, (y - h * 0.3) / (h * 0.7)));
    scrollFactor = 1 - 0.65 * t;
  }
  var scrollQueued = false;
  window.addEventListener('scroll', function () {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(function () { scrollQueued = false; onScroll(); });
  }, { passive: true });

  /* ---------- Navegación ---------- */
  if (nav) {
    var toggle = nav.querySelector('.nav__toggle');
    var menu = nav.querySelector('.nav__menu');

    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    if (toggle) {
      toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('is-open'));
      });
    }
    if (menu) {
      menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        if (toggle) toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target)) setOpen(false);
    });
  }

  /* ---------- Reveal ---------- */
  var reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          rev.unobserve(en.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { rev.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Brasas ---------- */
  var canvas = document.getElementById('embers');
  if (canvas && canvas.getContext) {
    (function () {
      var ctx = canvas.getContext('2d');
      var sprites = [];
      ['#d9763a', '#c6a562'].forEach(function (c) {
        var s = document.createElement('canvas');
        s.width = s.height = 32;
        var g = s.getContext('2d');
        var gr = g.createRadialGradient(16, 16, 0, 16, 16, 16);
        gr.addColorStop(0, c);
        gr.addColorStop(0.25, c);
        gr.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = gr;
        g.fillRect(0, 0, 32, 32);
        sprites.push(s);
      });

      var W = 0, H = 0, dpr = 1, parts = [], raf = 0, last = 0, running = false;
      var coarse = window.matchMedia('(max-width: 720px)');

      function make(initial) {
        return {
          x: Math.random() * W,
          y: initial ? Math.random() * H : H + 20,
          v: 10 + Math.random() * 22,
          size: 6 + Math.random() * 12,
          amp: 8 + Math.random() * 22,
          freq: 0.3 + Math.random() * 0.6,
          ph: Math.random() * 6.28,
          a: 0.35 + Math.random() * 0.55,
          s: Math.random() < 0.6 ? 0 : 1,
          t: 0
        };
      }

      function size(force) {
        var w = window.innerWidth, h = window.innerHeight;
        // En móvil la barra de URL cambia el alto al hacer scroll: se ignora si el ancho es igual.
        if (!force && w === W && Math.abs(h - H) < 150) return;
        W = w; H = h;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var n = coarse.matches ? 20 : 45;
        parts = [];
        for (var i = 0; i < n; i++) parts.push(make(true));
      }

      function frame(now) {
        if (!running) return;
        var dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        ctx.clearRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'lighter';
        // Menos partículas visibles al bajar, además de menor opacidad.
        var show = Math.ceil(parts.length * (0.5 + 0.5 * ((scrollFactor - 0.35) / 0.65)));
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i];
          p.t += dt;
          p.y -= p.v * dt;
          if (p.y < -20) { parts[i] = make(false); continue; }
          if (i >= show) continue;
          var x = p.x + Math.sin(p.t * p.freq + p.ph) * p.amp;
          var life = p.y / H; // 1 abajo, 0 arriba: se desvanece al subir
          var top = 0.55 + 0.45 * (1 - life); // algo más brillantes arriba
          var fade = Math.min(1, life * 4, (H - p.y) / 60);
          var alpha = p.a * scrollFactor * Math.max(0, fade) * top;
          if (alpha <= 0.01) continue;
          ctx.globalAlpha = alpha;
          ctx.drawImage(sprites[p.s], x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        }
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(frame);
      }

      function start() {
        if (running || reduceMQ.matches || document.hidden) return;
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
      function stop() {
        running = false;
        cancelAnimationFrame(raf);
      }
      function sync() {
        if (reduceMQ.matches) {
          stop();
          ctx.clearRect(0, 0, W, H);
        } else start();
      }

      size(true);
      onScroll();
      sync();

      var rt;
      window.addEventListener('resize', function () {
        clearTimeout(rt);
        rt = setTimeout(function () { size(false); }, 200);
      });
      onMQ(coarse, function () { size(true); });
      onMQ(reduceMQ, sync);
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) stop(); else sync();
      });
    })();
  } else {
    onScroll();
  }

  /* ---------- Parallax del hero ---------- */
  (function () {
    var art = document.querySelector('.hero__art');
    var hoverMQ = window.matchMedia('(hover: hover)');
    if (!art || !hero) return;
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;

    function ok() { return hoverMQ.matches && !reduceMQ.matches; }
    function tick() {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      // 'translate' individual para no pisar un transform definido en CSS.
      art.style.translate = cx.toFixed(2) + 'px ' + cy.toFixed(2) + 'px';
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) raf = requestAnimationFrame(tick);
      else raf = 0;
    }
    function kick() { if (!raf) raf = requestAnimationFrame(tick); }

    hero.addEventListener('pointermove', function (e) {
      if (!ok() || e.pointerType === 'touch') return;
      var r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * -20;
      ty = ((e.clientY - r.top) / r.height - 0.5) * -20;
      kick();
    });
    hero.addEventListener('pointerleave', function () { tx = ty = 0; kick(); });
    onMQ(reduceMQ, function () { if (!ok()) { tx = ty = cx = cy = 0; art.style.translate = ''; } });
  })();

  /* ---------- Lightbox ---------- */
  (function () {
    var dlg = document.getElementById('lightbox');
    if (!dlg || typeof dlg.showModal !== 'function') return;
    var img = dlg.querySelector('img');
    var closeBtn = dlg.querySelector('.lightbox__close');
    var list = [], idx = -1, trigger = null, prevOverflow = '', prevPad = '';

    function show(i) {
      idx = i;
      trigger = list[i];
      var src = trigger.querySelector('img');
      if (!src) return;
      img.src = src.getAttribute('src');
      img.alt = src.alt;
      dlg.__srcImg = src;
    }

    function lock() {
      var sb = window.innerWidth - root.clientWidth;
      prevOverflow = root.style.overflow;
      prevPad = root.style.paddingRight;
      root.style.overflow = 'hidden';
      if (sb > 0) root.style.paddingRight = sb + 'px';
    }
    function unlock() {
      root.style.overflow = prevOverflow;
      root.style.paddingRight = prevPad;
    }

    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-lightbox]') : null;
      if (!btn) return;
      var scope = btn.closest('ul, .honors') || document;
      list = Array.prototype.slice.call(scope.querySelectorAll('[data-lightbox]'));
      show(list.indexOf(btn));
      lock();
      dlg.showModal();
    });

    dlg.addEventListener('keydown', function (e) {
      if (list.length < 2) return;
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      show((idx + d + list.length) % list.length);
    });

    dlg.addEventListener('click', function (e) {
      if (e.target === dlg || e.target === closeBtn) dlg.close();
    });

    dlg.addEventListener('close', function () {
      unlock();
      img.removeAttribute('src');
      dlg.__srcImg = null;
      if (trigger) trigger.focus();
    });
  })();

  /* ---------- Videos: solo uno suena a la vez ---------- */
  document.addEventListener('play', function (e) {
    document.querySelectorAll('video').forEach(function (v) { if (v !== e.target) v.pause(); });
  }, true);
})();
