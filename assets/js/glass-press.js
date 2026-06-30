/* Glass interactive press — touch + pointer */
(function () {
  function bindPress(el) {
    if (el.dataset.glassPress) return;
    el.dataset.glassPress = '1';

    var clear = function () { el.classList.remove('is-pressed'); };

    el.addEventListener('pointerdown', function () {
      el.classList.add('is-pressed');
    });
    el.addEventListener('pointerup', clear);
    el.addEventListener('pointercancel', clear);
    el.addEventListener('pointerleave', function (e) {
      if (e.pointerType === 'mouse') clear();
    });
  }

  function scan() {
    document.querySelectorAll('a.btn, button.btn, .linklist a, .nav__drawer a, .ctrl--glass, .nav__menu, .glass-interactive').forEach(bindPress);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }
})();
