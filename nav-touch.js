/* ── Dropdown: touch toggle pre tablet (podstránky) ── */
(function () {
  'use strict';

  /* Aktivovať len na zariadeniach bez hover (dotykové displeje) */
  if (!window.matchMedia('(hover: none)').matches && !('ontouchstart' in window) && !navigator.maxTouchPoints) return;

  document.querySelectorAll('.nav-has-drop').forEach(function (item) {
    var trigger = item.querySelector('a');
    if (!trigger) return;

    trigger.addEventListener('click', function (e) {
      var isOpen = item.classList.contains('is-open');

      /* Zatvoriť ostatné otvorené dropdown */
      document.querySelectorAll('.nav-has-drop.is-open').forEach(function (el) {
        if (el !== item) el.classList.remove('is-open');
      });

      if (!isOpen) {
        /* Prvý klik – otvoriť dropdown, neklikať na link */
        e.preventDefault();
        item.classList.add('is-open');
      } else {
        /* Druhý klik – zatvoriť, povoliť navigáciu */
        item.classList.remove('is-open');
      }
    });
  });

  /* Zatvoriť pri kliknutí mimo nav */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-has-drop')) {
      document.querySelectorAll('.nav-has-drop.is-open').forEach(function (el) {
        el.classList.remove('is-open');
      });
    }
  });
})();
