(function () {
  'use strict';

  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- i18n ---------- */
  var IT = {
    'skip': 'Vai al contenuto', 'theme.dark': 'Scuro',
    'nav.sa': 'Situation Awareness', 'nav.groups': 'Ricerca', 'nav.people': 'Persone', 'nav.partners': 'Partner', 'nav.join': 'Collabora',
    'hero.canvas': 'Il logo KnowMIS composto da tessere di mosaico che si affinano con il controllo di granularità',
    'hero.grain': 'Granularità',
    'hero.s0': 'Dati', 'hero.s1': 'Comprensione', 'hero.s2': 'Consapevolezza', 'hero.s3': 'Decisione',
    'hero.c0': 'I segnali arrivano come tessere grandi: c’è qualcosa, ma non si sa cosa.',
    'hero.c1': 'Emerge una struttura: forme, margini, relazioni tra le cose.',
    'hero.c2': 'La situazione è leggibile: chi, dove, che cosa sta cambiando.',
    'hero.c3': 'Risoluzione sufficiente per agire. È il lavoro del laboratorio.',
    'hero.h1': 'Dai dati alla comprensione. Dalla consapevolezza alla decisione.',
    'hero.lead': 'KnowMIS, laboratorio di Knowledge Management and Information Systems dell’Università degli Studi di Salerno, studia come persone, organizzazioni e sistemi intelligenti trasformano la situation awareness in decisioni efficaci.',
    'hero.cta1': 'Collabora con il laboratorio', 'hero.cta2': 'Scopri la ricerca',
    'sa.h2': 'La Situation Awareness è il punto da cui nascono le buone decisioni.',
    'sa.p': 'Un tema centrale di KnowMIS: rendere interpretabili gli ambienti complessi, perché persone e sistemi decidano meglio. Una scena, il Golfo di Salerno, a tre risoluzioni: percepire, comprendere, proiettare.',
    'hero.dir': 'Direttore', 'join.contact': 'Per mettersi in contatto, usa le pagine della rubrica UniSA dei responsabili del laboratorio:',
    'top.arch': 'Architetture decisionali adattive', 'top.group': 'Decisioni di gruppo', 'top.fuzzy': 'Logica fuzzy', 'top.coll': 'Percezione collettiva', 'top.bi': 'Business intelligence e analytics', 'groups.dss.topics': 'Temi',
    'act1.h': 'Percepire', 'act1.p': 'Reti di sensori ed elaborazione dei dati raccolgono ciò che un ambiente emette e trasformano flussi grezzi in segnali degni di attenzione.',
    'act1.canvas': 'Una scena costiera resa con tessere di mosaico molto grandi',
    'act2.h': 'Comprendere', 'act2.p': 'Modelli cognitivi e computazionali delle situazioni, con ragionamento e visualizzazione che danno significato ai segnali.',
    'act2.canvas': 'La stessa scena costiera con tessere medie: si distinguono sole, mare, colline e case',
    'act3.h': 'Proiettare', 'act3.p': 'Il Granular Computing for Cognitive Situation Management supporta previsione e decisione.',
    'act3.canvas': 'La scena costiera con tessere fini, una barca sull’acqua e case sulla collina',
    'groups.h2': 'Due gruppi di ricerca, una sola domanda.',
    'groups.sa.name': 'Situation Awareness', 'groups.sa.dir': 'Direzione scientifica: prof. Giuseppe D’Aniello',
    'groups.sa.p': 'Modellazione cognitiva e computazionale delle situazioni; reti di sensori ed elaborazione dei dati; ragionamento e comprensione delle situazioni; visualizzazione e analisi delle situazioni. Basata su Granular Computing, IA, Computational Intelligence, scienze cognitive e Human Factors.',
    'groups.sa.domains': 'Ambiti applicativi',
    'dom.city': 'Smart City', 'dom.log': 'Logistica', 'dom.edu': 'E-Learning', 'dom.sec': 'Safety & Security', 'dom.ent': 'Imprese',
    'groups.dss.name': 'Decision Support Systems', 'groups.dss.dir': 'Direzione scientifica: prof. Matteo Gaeta',
    'groups.dss.p': 'Supporto intelligente alle decisioni nei Cyber-Physical-Social Systems: architetture decisionali ibride e adattive, decisioni di gruppo con intelligenza computazionale (ad es. logica fuzzy), analisi della percezione collettiva, business intelligence e analytics.',
    'people.h2': 'Persone', 'people.dirnote': 'Direttore del laboratorio · direzione scientifica di KnowMIS-DSS.',
    'people.conote': 'Coordinatore · direzione scientifica di KnowMIS-SA.', 'people.collab': 'Collaboratore',
    'partners.h2': 'Una rete che unisce laboratori, città e aziende.',
    'partners.intl': 'Internazionali', 'partners.nat': 'Nazionali', 'partners.ind': 'Industria',
    'partners.spin': 'Dalla ricerca del laboratorio è nato lo spin-off', 'partners.spin2': ', che applica IA e Computational Situation Awareness al city branding e allo sviluppo territoriale.',
    'join.h2': 'Tre modi per entrare.',
    'join.s': 'Studenti', 'join.sp': 'Tesi su Situation Awareness e Decision Support Systems per Ingegneria Informatica, Ingegneria dell’Informazione e Medicina Digitale (primo e secondo livello).',
    'join.p': 'Aziende', 'join.pp': 'Progetti di ricerca, sviluppo e trasferimento tecnologico, come nelle collaborazioni con Poste Italiane, Engineering e Ciaopeople.',
    'join.r': 'Ricercatori', 'join.rp': 'Ricerca congiunta con una rete stabile di gruppi nazionali e internazionali su Situation Awareness e supporto alle decisioni.', 'join.rc': 'Scheda del laboratorio sul sito DIEM',
    'foot.lab': 'Laboratorio di Knowledge Management and Information Systems',
    'foot.dept': 'Dipartimento di Ingegneria dell’Informazione ed Elettrica e Matematica Applicata (DIEM)',
    'foot.equip': 'Strumentazione: 8 workstation HP, un server HP e una workstation HP Z8 Fury G5.',
    'title': 'KnowMIS · Knowledge Management and Information Systems · Università di Salerno',
    'meta': 'KnowMIS è il laboratorio di Knowledge Management and Information Systems dell’Università degli Studi di Salerno (DIEM). Ricerca su Situation Awareness e Decision Support Systems.'
  };
  var EN = {};
  document.querySelectorAll('[data-i18n]').forEach(function (el) { EN[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { EN['aria:' + el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  EN['hero.c0'] = 'Signals arrive as coarse tiles: something is there, but not what.';
  EN['hero.c1'] = 'Structure emerges: shapes, edges, relations between things.';
  EN['hero.c2'] = 'The situation is legible: who, where, what is changing.';
  EN['hero.c3'] = 'Resolution enough to act. This is the work of the lab.';
  EN['title'] = document.title;
  EN['meta'] = document.querySelector('meta[name=description]').content;
  EN['groups.h2'] = EN['groups.h2'];
  var lang = 'en';

  function t(k) { return (lang === 'it' ? IT : EN)[k]; }

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.dataset.i18n);
      if (v !== undefined && el.dataset.i18n.indexOf('hero.c') !== 0) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.dataset.i18nAria, v = lang === 'it' ? IT[k] : EN['aria:' + k];
      if (v) el.setAttribute('aria-label', v);
    });
    document.title = t('title');
    document.querySelector('meta[name=description]').content = t('meta');
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
    setCaption(currentStop);
    try { localStorage.setItem('knowmis-lang', l); } catch (e) {}
  }

  /* ---------- theme ---------- */
  var themeBtn = document.querySelector('.theme');
  function setTheme(d, persist) {
    if (d) document.documentElement.dataset.theme = 'dark'; else delete document.documentElement.dataset.theme;
    themeBtn.setAttribute('aria-pressed', String(d));
    var m = document.querySelector('meta[name=theme-color]');
    if (m) m.content = d ? '#14110f' : '#f6efdf';
    if (persist) { try { localStorage.setItem('knowmis-theme', d ? 'dark' : 'light'); } catch (e) {} }
  }
  themeBtn.addEventListener('click', function () { setTheme(document.documentElement.dataset.theme !== 'dark', true); });
  setTheme(document.documentElement.dataset.theme === 'dark', false);

  /* ---------- hero mosaic ---------- */
  var heroCanvas = document.getElementById('hero-canvas');
  var captionEl = document.getElementById('grain-caption');
  var stopBtns = document.querySelectorAll('.grain-stops button');
  var hero = null, currentStop = 3, userTouched = false, timers = [];

  function setCaption(s) { captionEl.textContent = t('hero.c' + s); }

  function decodeLogo() {
    var L = window.KNOWMIS_LOGO, bin = atob(L.rgb), n = bin.length, a = new Uint8Array(n);
    for (var i = 0; i < n; i++) a[i] = bin.charCodeAt(i);
    return { w: L.w, h: L.h, rgb: a };
  }

  var BORDER = [
    ['lapis', 'ochre'], ['ink', 'ink'], ['terra', 'ivory2']
  ];
  var P = window.MosaicPalette;

  function buildHeroField(cols, rows, logo) {
    var rgb = new Uint8Array(cols * rows * 3);
    var maxW = cols * (cols < 90 ? 0.92 : 0.8), maxH = rows * 0.8;
    var lw = Math.min(maxW, maxH * 3), lh = lw / 3;
    var x0 = (cols - lw) / 2, y0 = (rows - lh) / 2;
    for (var j = 0; j < rows; j++) {
      for (var i = 0; i < cols; i++) {
        var p = (j * cols + i) * 3, c;
        var d = Math.min(i, j, cols - 1 - i, rows - 1 - j);
        if (d < 3) {
          var pair = BORDER[d];
          c = P[pair[(i + j) & 1]];
        } else if (i >= x0 && i < x0 + lw && j >= y0 && j < y0 + lh) {
          var lx = Math.min(logo.w - 1, ((i - x0) / lw * logo.w) | 0);
          var ly = Math.min(logo.h - 1, ((j - y0) / lh * logo.h) | 0);
          var q = (ly * logo.w + lx) * 3;
          c = [logo.rgb[q], logo.rgb[q + 1], logo.rgb[q + 2]];
        } else {
          c = P.ivory;
        }
        rgb[p] = c[0]; rgb[p + 1] = c[1]; rgb[p + 2] = c[2];
      }
    }
    return { cols: cols, rows: rows, rgb: rgb };
  }

  function sizeCanvas(c, w, h, dpr) {
    c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
    c.style.height = 'auto';
  }

  function initHero() {
    var W = heroCanvas.parentElement.clientWidth;
    var H = Math.round(Math.max(190, Math.min(W / 2.55, Math.min(560, window.innerHeight * 0.42))));
    var cell = Math.max(5, Math.min(10, Math.round(W / 170)));
    var cols = Math.floor(W / cell), rows = Math.floor(H / cell);
    var w = cols * cell, h = rows * cell, dpr = Math.min(2, window.devicePixelRatio || 1);
    sizeCanvas(heroCanvas, w, h, dpr);
    heroCanvas.style.width = w + 'px';
    var field = buildHeroField(cols, rows, decodeLogo());
    hero = new Mosaic(heroCanvas, field, [16, 8, 3, 1], { cell: cell, dpr: dpr, reduced: reduced, lens: true });
    goStop(reduced ? 3 : (userTouched ? currentStop : 0), false);
    if (!reduced && !userTouched) autoplay();
  }

  function syncButtons(s) {
    stopBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(Number(b.dataset.stop) === s)); });
    stopBtns.forEach(function (b) { b.classList.toggle('reached', Number(b.dataset.stop) <= s); });
  }

  function goStop(s, animate) {
    currentStop = s;
    hero.setStop(s, animate);
    syncButtons(s);
    setCaption(s);
  }

  function autoplay() {
    timers.forEach(clearTimeout); timers = [];
    [1, 2, 3].forEach(function (s, i) {
      timers.push(setTimeout(function () { if (!userTouched) goStop(s, true); }, 900 + i * 1100));
    });
  }

  stopBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      userTouched = true; timers.forEach(clearTimeout);
      goStop(Number(b.dataset.stop), true);
    });
  });

  heroCanvas.addEventListener('pointermove', function (e) {
    var r = heroCanvas.getBoundingClientRect();
    hero.setPointer(e.clientX - r.left, e.clientY - r.top, Math.max(70, r.width * 0.07));
  });
  heroCanvas.addEventListener('pointerleave', function () { hero.setPointer(null, null, 0); });

  /* ---------- Gulf of Salerno scene ---------- */
  function drawScene(cols, rows) {
    var c = document.createElement('canvas');
    c.width = cols; c.height = rows;
    var g = c.getContext('2d', { willReadFrequently: true });
    var W = cols, H = rows, hz = H * 0.58;
    var sky = g.createLinearGradient(0, 0, 0, hz);
    sky.addColorStop(0, '#7fa6d6'); sky.addColorStop(0.7, '#f1d594'); sky.addColorStop(1, '#f2c26b');
    g.fillStyle = sky; g.fillRect(0, 0, W, hz);
    g.fillStyle = '#e3a72f'; g.beginPath(); g.arc(W * 0.7, hz * 0.62, H * 0.17, 0, 7); g.fill();
    g.fillStyle = '#c8553d'; g.beginPath(); g.arc(W * 0.7, hz * 0.62, H * 0.1, 0, 7); g.fill();
    // far hills
    g.fillStyle = '#1f6246';
    g.beginPath(); g.moveTo(0, hz); g.lineTo(0, hz * 0.55); g.quadraticCurveTo(W * 0.18, hz * 0.28, W * 0.38, hz * 0.62);
    g.quadraticCurveTo(W * 0.5, hz * 0.8, W * 0.58, hz); g.fill();
    g.fillStyle = '#2f7d5b';
    g.beginPath(); g.moveTo(W, hz); g.lineTo(W, hz * 0.72); g.quadraticCurveTo(W * 0.88, hz * 0.5, W * 0.7, hz * 0.86); g.lineTo(W * 0.62, hz); g.fill();
    // town on the left hill
    var hx = W * 0.02, hy = hz * 0.7, hw = W * 0.3, hh = hz * 0.3;
    var roofs = ['#c8553d', '#efe6d2', '#c8553d', '#e8b58f', '#efe6d2'];
    for (var r = 0; r < 3; r++) {
      for (var k = 0; k < 7; k++) {
        var bx = hx + k * hw / 7 + (r % 2) * hw / 14, by = hy + r * hh / 3.2 - Math.sin(k / 6 * 2.4) * hh * 0.35;
        g.fillStyle = '#efe6d2'; g.fillRect(bx, by, hw / 9, hh / 5);
        g.fillStyle = roofs[(k + r) % roofs.length]; g.fillRect(bx - 1, by - hh / 12, hw / 9 + 2, hh / 12);
      }
    }
    // sea
    var sea = g.createLinearGradient(0, hz, 0, H);
    sea.addColorStop(0, '#2f5aa8'); sea.addColorStop(1, '#1b3a8c');
    g.fillStyle = sea; g.fillRect(0, hz, W, H - hz);
    for (var y = hz + 2; y < H; y += Math.max(3, H / 28)) {
      g.fillStyle = 'rgba(127,166,214,0.55)';
      for (var x = ((y * 7) % 13); x < W; x += 13 + (y % 5)) g.fillRect(x, y, 5 + (x % 4), Math.max(1, H / 90));
    }
    // sun reflection
    g.fillStyle = '#e3a72f';
    for (var yy = hz + 2, i = 0; yy < H; yy += Math.max(3, H / 26), i++) g.fillRect(W * 0.7 - (4 + i * 1.6) / 2 * (W / 120), yy, (4 + i * 1.6) * (W / 120), Math.max(1.5, H / 70));
    // boat
    var bx2 = W * 0.4, by2 = H * 0.78;
    g.fillStyle = '#efe6d2'; g.beginPath(); g.moveTo(bx2, by2 - H * 0.2); g.lineTo(bx2 + W * 0.09, by2 - H * 0.02); g.lineTo(bx2, by2 - H * 0.02); g.fill();
    g.fillStyle = '#c8553d'; g.beginPath(); g.moveTo(bx2 - W * 0.04, by2); g.lineTo(bx2 + W * 0.11, by2); g.lineTo(bx2 + W * 0.08, by2 + H * 0.05); g.lineTo(bx2 - W * 0.01, by2 + H * 0.05); g.fill();
    var d = g.getImageData(0, 0, cols, rows).data, rgb = new Uint8Array(cols * rows * 3);
    for (var p = 0, q = 0; p < d.length; p += 4, q += 3) { rgb[q] = d[p]; rgb[q + 1] = d[p + 1]; rgb[q + 2] = d[p + 2]; }
    return { cols: cols, rows: rows, rgb: rgb };
  }

  var acts = [];

  function initActs() {
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    document.querySelectorAll('.act-canvas').forEach(function (c, idx) {
      var W = c.parentElement.clientWidth > 900 ? c.getBoundingClientRect().width || 560 : c.parentElement.clientWidth;
      W = Math.max(240, Math.floor(c.clientWidth || W));
      var H = Math.round(W * 0.74), cell = 4;
      var final = [10, 5, 2][idx];
      var cols = Math.floor(W / cell), rows = Math.floor(H / cell);
      cols -= cols % 10; rows -= rows % 10; // whole tiles at every resting resolution, equal heights
      sizeCanvas(c, cols * cell, rows * cell, dpr);
      c.style.width = cols * cell + 'px';
      // each act ends at its own resolution; earlier stops are coarser steps toward it
      var stops = [final * 3, final * 2, final];
      var m = new Mosaic(c, drawScene(cols, rows), stops, { cell: cell, dpr: dpr, reduced: reduced });
      m.setStop(reduced ? 2 : 0, false);
      acts[idx] = { m: m, done: reduced };
    });
    if (!('IntersectionObserver' in window)) { acts.forEach(function (a) { a.m.setStop(2, false); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var a = acts[Number(e.target.dataset.act)];
        if (!a || a.done) return;
        a.done = true;
        a.m.setStop(1, true);
        setTimeout(function () { a.m.setStop(2, true); }, 700);
        io.unobserve(e.target);
      });
    }, { threshold: 0.35 });
    document.querySelectorAll('.act-canvas').forEach(function (c) { io.observe(c); });
  }

  /* ---------- boot ---------- */
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });
  var saved = null;
  try { saved = localStorage.getItem('knowmis-lang'); } catch (e) {}
  var q = /[?&]lang=(it|en)/.exec(location.search);
  if (q) saved = q[1];

  function boot() {
    initHero(); initActs();
    if (saved === 'it') applyLang('it');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      var w = heroCanvas.parentElement.clientWidth;
      if (hero && Math.abs(w - parseInt(heroCanvas.style.width, 10)) > 24) {
        initHero(); initActs();
        acts.forEach(function (a) { a.done = true; a.m.setStop(2, false); });
      }
    }, 250);
  });
})();
