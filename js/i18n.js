(function () {
  'use strict';

  var DICT = {
    es: {
      'pager.label': 'Otras secciones',
      'pager.prev': 'Anterior',
      'pager.next': 'Siguiente',
      'name.projects': 'Proyectos en equipo',
      'meta.title': 'Patricio Lozano Bozikian | Portafolio',
      'meta.desc': 'Portafolio de Patricio Lozano Bozikian, generalista 3D y editor de audio.',
      'skip': 'Saltar al contenido',
      'nav.menu': 'Menú',
      'nav.label': 'Principal',
      'nav.3d': '3D',
      'nav.audio': 'Audio',
      'nav.dir': 'Dirección',
      'nav.games': 'Videojuegos',
      'nav.craft': 'Oficio',
      'nav.contact': 'Contacto',
      'lang.label': 'Idioma',
      'hero.role': 'Generalista 3D y editor de audio',
      'hero.menuLabel': 'Secciones',
      'hero.m1': 'Mundos en 3D',
      'hero.m2': 'Audio',
      'hero.m3': 'Dirección',
      'hero.m4': 'Videojuegos',
      'hero.m5': 'Contacto',
      'hero.alt': 'Knia-Knia, un gecko bufón en 3D, en equilibrio sobre una esfera con su cetro',
      'd3.title': 'Mundos en 3D',
      'd3.intro': 'Del concepto al render: personajes, escenarios, luz, texturas, ropa, cabello y efectos.',
      'knia.cta': 'Ver Knia-Knia',
      'knia.alt1': 'Escenario rojo de Knia-Knia: una tarima con estandartes de rombos entre colmillos gigantes',
      'knia.text': 'Un personaje y su mundo, hechos de principio a fin: concepto, modelado, texturas, ropa, cabello y rig. Vive en un lugar fuera del tiempo y el espacio, donde todo es ridículo, absurdo y caótico.',
      'knia.gallery': 'Imágenes de Knia-Knia',
      'knia.alt2': 'Retrato de Knia-Knia con la lengua de fuera',
      'knia.alt3': 'Vista amplia del escenario de Knia-Knia',
      'knia.alt4': 'Foso circular en el escenario de Knia-Knia',
      'knia.alt5': 'Knia-Knia con la mano levantada',
      'knia.alt6': 'Tiendas y columnas en el escenario de Knia-Knia',
      'light.alt': 'Oficina oscura iluminada por persianas',
      'light.title': 'Iluminación y texturas',
      'light.text': 'Materiales y luz en Maya y Substance Painter',
      'model.alt': 'Escultura de un personaje con ropa',
      'model.title': 'Modelado 3D',
      'model.text': 'Orgánico e inorgánico, en Maya y ZBrush',
      'cfx.alt': 'Traje con chaleco azul y capa negra',
      'cfx.text': 'Ropa, cabello y simulación',
      'rig.alt': 'Personaje 3D con controles de rig',
      'rig.text': 'Cuerpo completo y expresión facial',
      'vfx.alt': 'Banquete con frutas, barriles y velas en Unreal Engine',
      'vfx.text': 'Fuego, humo, partículas y portales en Unreal Engine',
      'audio.title': 'Audio',
      'audio.intro': 'Sonidos, foleys y efectos creados por Patricio en estudio de grabación y en programas de audio.',
      'audio.alt1': 'Cartel de Un amigo caído del cielo',
      'audio.h1': 'Mejores efectos de sonido',
      'audio.t1': 'Festival de Animación Parallax',
      'audio.alt2': 'Pantalla de título de Trial of the Mask',
      'audio.h2': 'Ganador de Game Jam',
      'audio.cta': 'Ver audio',
      'audio.reel': 'Reproducir el audio reel',
      'dir.cta': 'Ver dirección',
      'dir.alt': 'Fotograma de Endless Party: una persona dormida junto a una lámpara',
      'dir.title': 'Dirección',
      'dir.text': 'Cortometraje creado y dirigido por Patricio. Su idea fue la más votada en una clase de 36 personas, y todo el grupo trabajó en la producción.',
      'games.title': 'Videojuegos',
      'games.intro': 'Proyectos en equipo, hechos en game jams de 48 y 72 horas.',
      'game1.alt': 'Logo de Wambazos',
      'game1.award': 'Ganador, Game Jam UDEM 2024',
      'game1.text': 'Tema: lucha libre mexicana. Audio, voz y modelado 3D.',
      'game2.alt': 'Máscara de Trial of the Mask',
      'game2.award': 'Ganador, Game Jam UDEM 2025',
      'game2.text': 'Tema: máscaras. Audio y voz.',
      'game3.alt': 'Portada de Sparky the Windawg',
      'game3.text': 'Tema: chispa. Audio, voz, modelado 3D, arte y animación 2D.',
      'games.cta': 'Ver todos los proyectos',
      'craft.title': 'Oficio',
      'craft.intro': 'Licenciatura en Animación y Efectos Digitales',
      'craft.c1': 'Imagen',
      'craft.s1': 'Modelado y escultura 3D',
      'craft.s2': 'Creación de personajes',
      'craft.s3': 'Iluminación y texturizado',
      'craft.c2': 'Sonido e historia',
      'craft.s4': 'Edición y diseño de audio',
      'craft.s5': 'Actuación de voz',
      'craft.s6': 'Narrativa',
      'craft.s7': 'Dirección',
      'craft.s8': 'Edición de video',
      'craft.c3': 'Herramientas',
      'contact.title': 'Contacto',
      'lightbox.label': 'Imagen ampliada',
      'lightbox.close': 'Cerrar'
    },
    en: {
      'pager.label': 'Other sections',
      'pager.prev': 'Previous',
      'pager.next': 'Next',
      'name.projects': 'Team projects',
      'meta.title': 'Patricio Lozano Bozikian | Portfolio',
      'meta.desc': 'Portfolio of Patricio Lozano Bozikian, 3D generalist and audio editor.',
      'skip': 'Skip to content',
      'nav.menu': 'Menu',
      'nav.label': 'Main',
      'nav.3d': '3D',
      'nav.audio': 'Audio',
      'nav.dir': 'Directing',
      'nav.games': 'Games',
      'nav.craft': 'Craft',
      'nav.contact': 'Contact',
      'lang.label': 'Language',
      'hero.role': '3D generalist and audio editor',
      'hero.menuLabel': 'Sections',
      'hero.m1': '3D Worlds',
      'hero.m2': 'Audio',
      'hero.m3': 'Directing',
      'hero.m4': 'Games',
      'hero.m5': 'Contact',
      'hero.alt': 'Knia-Knia, a 3D jester gecko, balancing on a sphere, scepter in hand',
      'd3.title': '3D Worlds',
      'd3.intro': 'From concept to render: characters, environments, lighting, textures, clothing, hair and effects.',
      'knia.cta': 'View Knia-Knia',
      'knia.alt1': 'Knia-Knia’s red stage: a platform with diamond-pattern banners between giant fangs',
      'knia.text': 'A character and their world, made from start to finish: concept, modeling, textures, clothing, hair and rig. They live in a place outside of time and space, where everything is ridiculous, absurd and chaotic.',
      'knia.gallery': 'Images of Knia-Knia',
      'knia.alt2': 'Portrait of Knia-Knia with tongue out',
      'knia.alt3': 'Wide view of Knia-Knia’s stage',
      'knia.alt4': 'Circular pit on Knia-Knia’s stage',
      'knia.alt5': 'Knia-Knia with a raised hand',
      'knia.alt6': 'Tents and columns on Knia-Knia’s stage',
      'light.alt': 'Dark office lit through blinds',
      'light.title': 'Lighting and textures',
      'light.text': 'Materials and light in Maya and Substance Painter',
      'model.alt': 'Sculpt of a character wearing clothes',
      'model.title': '3D modeling',
      'model.text': 'Organic and hard-surface, in Maya and ZBrush',
      'cfx.alt': 'Suit with a blue vest and black cape',
      'cfx.text': 'Clothing, hair and simulation',
      'rig.alt': '3D character with rig controls',
      'rig.text': 'Full body and facial expression',
      'vfx.alt': 'Banquet with fruit, barrels and candles in Unreal Engine',
      'vfx.text': 'Fire, smoke, particles and portals in Unreal Engine',
      'audio.title': 'Audio',
      'audio.intro': 'Sounds, foley and effects created by Patricio in a recording studio and in audio software.',
      'audio.alt1': 'Poster for Un amigo caído del cielo',
      'audio.h1': 'Best Sound Effects',
      'audio.t1': 'Parallax Animation Festival',
      'audio.alt2': 'Title screen of Trial of the Mask',
      'audio.h2': 'Game Jam Winner',
      'audio.cta': 'View audio',
      'audio.reel': 'Play the audio reel',
      'dir.cta': 'View directing',
      'dir.alt': 'Frame from Endless Party: a person asleep next to a lamp',
      'dir.title': 'Directing',
      'dir.text': 'Short film created and directed by Patricio, whose idea got the most votes in a class of 36. The whole group worked on the production.',
      'games.title': 'Games',
      'games.intro': 'Team projects, made in 48- and 72-hour game jams.',
      'game1.alt': 'Wambazos logo',
      'game1.award': 'Winner, Game Jam UDEM 2024',
      'game1.text': 'Theme: Mexican lucha libre. Audio, voice and 3D modeling.',
      'game2.alt': 'Mask from Trial of the Mask',
      'game2.award': 'Winner, Game Jam UDEM 2025',
      'game2.text': 'Theme: masks. Audio and voice.',
      'game3.alt': 'Cover of Sparky the Windawg',
      'game3.text': 'Theme: spark. Audio, voice, 3D modeling, art and 2D animation.',
      'games.cta': 'See all projects',
      'craft.title': 'Craft',
      'craft.intro': 'Bachelor’s degree in Animation and Digital Effects',
      'craft.c1': 'Visuals',
      'craft.s1': '3D modeling and sculpting',
      'craft.s2': 'Character creation',
      'craft.s3': 'Lighting and texturing',
      'craft.c2': 'Sound and story',
      'craft.s4': 'Audio editing and design',
      'craft.s5': 'Voice acting',
      'craft.s6': 'Storytelling',
      'craft.s7': 'Directing',
      'craft.s8': 'Video editing',
      'craft.c3': 'Tools',
      'contact.title': 'Contact',
      'lightbox.label': 'Enlarged image',
      'lightbox.close': 'Close'
    }
  };

  // Cada subpágina trae sus textos en window.I18N_EXTRA (su propio i18n.js, cargado antes).
  var EXTRA = window.I18N_EXTRA || {};
  ['es', 'en'].forEach(function (l) {
    Object.keys(EXTRA[l] || {}).forEach(function (k) { DICT[l][k] = EXTRA[l][k]; });
  });

  var DEFAULT = 'es';
  var STORE_KEY = 'lang';

  function valid(l) { return l === 'es' || l === 'en'; }

  function readStore() {
    try { return window.localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function writeStore(l) {
    try { window.localStorage.setItem(STORE_KEY, l); } catch (e) { /* sin almacenamiento */ }
  }

  function initialLang() {
    var q = null;
    try { q = new URLSearchParams(window.location.search).get('lang'); } catch (e) { /* sin URLSearchParams */ }
    if (valid(q)) return q;
    var s = readStore();
    return valid(s) ? s : DEFAULT;
  }

  var current = DEFAULT;

  function apply(lang, persist) {
    var dict = DICT[lang];
    // Cambiar texto puede mover el layout; se restaura el scroll para no perder la posición.
    var x = window.pageXOffset, y = window.pageYOffset;

    document.documentElement.lang = lang;
    document.title = dict['meta.title'];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict['meta.desc']);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      if (dict[k] !== undefined) nodes[i].textContent = dict[k];
    }

    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var pairs = attrNodes[j].getAttribute('data-i18n-attr').split(',');
      for (var p = 0; p < pairs.length; p++) {
        var pair = pairs[p].trim();
        var idx = pair.indexOf(':');
        if (idx < 1) continue;
        var attr = pair.slice(0, idx), key = pair.slice(idx + 1);
        if (dict[key] !== undefined) attrNodes[j].setAttribute(attr, dict[key]);
      }
    }

    var btns = document.querySelectorAll('.lang [data-lang]');
    for (var b = 0; b < btns.length; b++) {
      btns[b].setAttribute('aria-pressed', btns[b].getAttribute('data-lang') === lang ? 'true' : 'false');
    }

    // La imagen del lightbox copia el alt al abrirse; si está abierto, se mantiene al día.
    var lb = document.getElementById('lightbox');
    if (lb && lb.open && lb.__srcImg) {
      var li = lb.querySelector('img');
      if (li) li.alt = lb.__srcImg.alt;
    }

    current = lang;
    if (persist) writeStore(lang);
    if (window.pageXOffset !== x || window.pageYOffset !== y) window.scrollTo(x, y);
    try { document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } })); } catch (e) { /* sin CustomEvent */ }
  }

  function init() {
    apply(initialLang(), false);
    document.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('.lang [data-lang]') : null;
      if (!t) return;
      var l = t.getAttribute('data-lang');
      if (valid(l) && l !== current) apply(l, true);
    });
  }

  window.i18n = {
    dict: DICT,
    get: function () { return current; },
    set: function (l) { if (valid(l)) apply(l, true); }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
