/* Tesserae engine: renders a fine RGB field as grout-separated tiles at a chosen granularity. */
(function () {
  'use strict';

  var GROUT = '#14110f';
  var PAL = {
    ivory: [239, 230, 210], ivory2: [226, 214, 187], ink: [23, 19, 16],
    lapis: [27, 58, 140], sky: [127, 166, 214], terra: [200, 85, 61],
    ochre: [227, 167, 47], peach: [232, 181, 143], tan: [185, 139, 98],
    brown: [107, 74, 58], mal: [47, 125, 91], malDeep: [31, 98, 70]
  };
  var CHROMATIC = ['terra', 'ochre', 'peach', 'tan', 'brown', 'mal', 'malDeep', 'lapis', 'sky'];
  var SHADES = [-0.07, -0.03, 0, 0.035, 0.07];
  var shadeCache = {};

  function shadeColor(name, v) {
    var key = name + v;
    if (shadeCache[key]) return shadeCache[key];
    var c = PAL[name], k = SHADES[v], out = [];
    for (var i = 0; i < 3; i++) {
      var x = k < 0 ? c[i] * (1 + k) : c[i] + (255 - c[i]) * k;
      out.push(Math.max(0, Math.min(255, Math.round(x))));
    }
    return (shadeCache[key] = 'rgb(' + out.join(',') + ')');
  }

  function snap(r, g, b, f) {
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    var sat = mx === 0 ? 0 : (mx - mn) / mx;
    var L = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    if (sat < 0.2) {
      if (f <= 2) return L < 0.5 ? 'ink' : (L < 0.86 ? 'ivory2' : 'ivory');
      if (L < 0.22) return 'ink';
      if (L < 0.5) return 'lapis';
      if (L < 0.74) return 'sky';
      return L < 0.88 ? 'ivory2' : 'ivory';
    }
    var best = 'tan', bd = 1e9;
    for (var i = 0; i < CHROMATIC.length; i++) {
      var c = PAL[CHROMATIC[i]];
      var d = (c[0] - r) * (c[0] - r) + (c[1] - g) * (c[1] - g) + (c[2] - b) * (c[2] - b);
      if (d < bd) { bd = d; best = CHROMATIC[i]; }
    }
    return best;
  }

  /* fine: {cols, rows, rgb: Uint8Array(cols*rows*3)} ; stops: array of block factors, coarse -> fine */
  function Mosaic(canvas, fine, stops, opts) {
    opts = opts || {};
    this.canvas = canvas;
    this.fine = fine;
    this.stops = stops;
    this.cell = opts.cell;
    this.dpr = opts.dpr || 1;
    this.reduced = !!opts.reduced;
    this.lens = !!opts.lens;
    this.stop = 0;
    var n = fine.cols * fine.rows;
    this.cellStop = new Uint8Array(n);
    this.cellTarget = new Uint8Array(n);
    this.delay = new Float32Array(n);
    this.hash = new Uint8Array(n);
    for (var i = 0; i < n; i++) this.hash[i] = (i * 2654435761 >>> 7) % 5;
    this.levels = stops.map(this._buildLevel, this);
    this.ctx = canvas.getContext('2d');
    this.raf = 0;
    this.t0 = 0;
    this.running = false;
    this.pointer = null;
  }

  Mosaic.prototype._buildLevel = function (f) {
    var fi = this.fine, cols = fi.cols, rows = fi.rows;
    var idx = new Array(cols * rows);
    var bc = Math.ceil(cols / f), br = Math.ceil(rows / f);
    for (var bj = 0; bj < br; bj++) {
      for (var bi = 0; bi < bc; bi++) {
        var r = 0, g = 0, b = 0, n = 0;
        for (var j = bj * f; j < Math.min(rows, bj * f + f); j++) {
          for (var i = bi * f; i < Math.min(cols, bi * f + f); i++) {
            var p = (j * cols + i) * 3;
            r += fi.rgb[p]; g += fi.rgb[p + 1]; b += fi.rgb[p + 2]; n++;
          }
        }
        var name = snap(r / n, g / n, b / n, f);
        for (var j2 = bj * f; j2 < Math.min(rows, bj * f + f); j2++) {
          for (var i2 = bi * f; i2 < Math.min(cols, bi * f + f); i2++) idx[j2 * cols + i2] = name;
        }
      }
    }
    return { f: f, name: idx };
  };

  Mosaic.prototype.setStop = function (s, animate) {
    var n = this.fine.cols * this.fine.rows, cols = this.fine.cols;
    var now = performance.now();
    this.stop = s;
    for (var i = 0; i < n; i++) {
      this.cellTarget[i] = s;
      if (!animate || this.reduced) { this.cellStop[i] = s; this.delay[i] = 0; }
      else this.delay[i] = now + ((i % cols) / cols) * 260 + Math.random() * 300;
    }
    this._kick();
  };

  Mosaic.prototype.setPointer = function (x, y, radius) {
    if (!this.lens || this.reduced) return;
    var fi = this.fine, cols = fi.cols, rows = fi.rows, s = this.cell;
    var last = this.stops.length - 1;
    for (var j = 0; j < rows; j++) {
      for (var i = 0; i < cols; i++) {
        var k = j * cols + i, want = this.stop;
        if (x !== null) {
          var dx = (i + 0.5) * s - x, dy = (j + 0.5) * s - y;
          if (dx * dx + dy * dy < radius * radius) want = last;
        }
        if (this.cellTarget[k] !== want) { this.cellTarget[k] = want; this.delay[k] = 0; }
      }
    }
    this._kick();
  };

  Mosaic.prototype._kick = function () {
    if (this.running) return;
    this.running = true;
    var self = this;
    (function tick() {
      var pending = self.draw();
      if (pending) self.raf = setTimeout(tick, 16);
      else self.running = false;
    })();
  };

  Mosaic.prototype.draw = function () {
    var ctx = this.ctx, fi = this.fine, cols = fi.cols, rows = fi.rows, s = this.cell, dpr = this.dpr;
    var now = performance.now(), pending = false, cs = this.cellStop, ct = this.cellTarget;
    for (var i = 0; i < cs.length; i++) {
      if (cs[i] !== ct[i]) {
        if (now >= this.delay[i]) cs[i] = ct[i]; else pending = true;
      }
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = GROUT;
    ctx.fillRect(0, 0, this.canvas.width / dpr, this.canvas.height / dpr);
    var lv = this.levels, hash = this.hash, stops = this.stops;
    for (var j = 0; j < rows; j++) {
      for (var ci = 0; ci < cols; ci++) {
        var k = j * cols + ci, st = cs[k], f = stops[st];
        ctx.fillStyle = shadeColor(lv[st].name[k], hash[((ci / f | 0) + (j / f | 0) * 131 + st * 17) % hash.length]);
        ctx.fillRect(ci * s, j * s, s, s);
      }
    }
    ctx.fillStyle = GROUT;
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var q = y * cols + x, f0 = stops[cs[q]];
        var b0 = (y / f0 | 0) * 4096 + (x / f0 | 0);
        var g = Math.min(4, 0.8 + f0 * 0.22) * (s > 6 ? 1 : 0.85);
        if (x + 1 < cols) {
          var q1 = q + 1, f1 = stops[cs[q1]];
          if (f1 !== f0 || (y / f1 | 0) * 4096 + ((x + 1) / f1 | 0) !== b0) ctx.fillRect((x + 1) * s - g / 2, y * s, g, s);
        }
        if (y + 1 < rows) {
          var q2 = q + cols, f2 = stops[cs[q2]];
          if (f2 !== f0 || ((y + 1) / f2 | 0) * 4096 + (x / f2 | 0) !== b0) ctx.fillRect(x * s, (y + 1) * s - g / 2, s, g);
        }
      }
    }
    return pending;
  };

  window.Mosaic = Mosaic;
  window.MosaicPalette = PAL;
})();
