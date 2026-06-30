/**
 * 3D particle starfield — canvas projection (D3-era demo aesthetic).
 * Mount on elements with [data-particle-field].
 * Respects prefers-reduced-motion.
 */
(function () {
  if (typeof window === 'undefined') return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init(el) {
    var canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    el.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var count = el.getAttribute('data-particle-density') === 'light' ? 420 : 720;
    var points = [];
    var i, w, h, dpr, mx = 0, my = 0, raf = 0;
    var angleY = 0;
    var angleX = 0.18;

    for (i = 0; i < count; i++) {
      points.push({
        x: (Math.random() - 0.5) * 2400,
        y: (Math.random() - 0.5) * 2400,
        z: (Math.random() - 0.5) * 2400,
        s: 0.4 + Math.random() * 1.2
      });
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = el.clientWidth;
      h = el.clientHeight;
      if (!w || !h) return;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function waitForSize(tries) {
      resize();
      if ((w && h) || tries > 50) {
        if (w && h) draw();
        return;
      }
      setTimeout(function () { waitForSize(tries + 1); }, 80);
    }

    function project(p, cosY, sinY, cosX, sinX) {
      var x1 = p.x * cosY - p.z * sinY;
      var z1 = p.x * sinY + p.z * cosY;
      var y2 = p.y * cosX - z1 * sinX;
      var z2 = p.y * sinX + z1 * cosX;
      var perspective = 900 / (900 + z2);
      return {
        x: w * 0.5 + x1 * perspective + mx * 18 * perspective,
        y: h * 0.5 + y2 * perspective + my * 18 * perspective,
        z: z2,
        scale: perspective * p.s
      };
    }

    function accent() {
      var theme = document.documentElement.getAttribute('data-theme');
      return theme === 'light'
        ? { r: 0, g: 122, b: 255 }
        : { r: 90, g: 200, b: 255 };
    }

    function draw() {
      if (!w || !h) return;
      var cosY = Math.cos(angleY);
      var sinY = Math.sin(angleY);
      var cosX = Math.cos(angleX);
      var sinX = Math.sin(angleX);
      var col = accent();
      var sorted = [];
      var j, p, pr, alpha, size;

      ctx.clearRect(0, 0, w, h);

      for (j = 0; j < points.length; j++) {
        p = points[j];
        pr = project(p, cosY, sinY, cosX, sinX);
        if (pr.z > -200) sorted.push(pr);
      }
      sorted.sort(function (a, b) { return b.z - a.z; });

      for (j = 0; j < sorted.length; j++) {
        pr = sorted[j];
        alpha = Math.min(0.85, Math.max(0.08, (pr.z + 1200) / 1800));
        size = Math.max(0.6, pr.scale * 2.2);
        ctx.beginPath();
        ctx.fillStyle = 'rgba(' + col.r + ',' + col.g + ',' + col.b + ',' + alpha + ')';
        ctx.arc(pr.x, pr.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) {
        angleY += 0.0009;
        angleX = 0.16 + Math.sin(angleY * 0.7) * 0.06;
        raf = requestAnimationFrame(draw);
      }
    }

    function onMove(e) {
      var rect = el.getBoundingClientRect();
      var cx = rect.left + rect.width * 0.5;
      var cy = rect.top + rect.height * 0.5;
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mx = (clientX - cx) / rect.width;
      my = (clientY - cy) / rect.height;
    }

    waitForSize(0);

    if (!reduced) {
      window.addEventListener('resize', function () { resize(); if (w && h && !raf) draw(); });
      window.addEventListener('mousemove', onMove, { passive: true });
      window.addEventListener('touchmove', onMove, { passive: true });
    } else {
      window.addEventListener('resize', function () { resize(); draw(); });
    }
  }

  function boot() {
    document.querySelectorAll('[data-particle-field]').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
