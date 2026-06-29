/**
 * Wenhan's Home — minimal vanilla JS
 * Handles: mobile nav, scroll-spy on top nav, IntersectionObserver reveals.
 */
(function () {
  'use strict';

  const ready = (fn) =>
    document.readyState !== 'loading'
      ? fn()
      : document.addEventListener('DOMContentLoaded', fn);

  ready(() => {
    // Mobile nav toggle
    const nav = document.querySelector('.topnav');
    const toggle = document.querySelector('.nav-toggle');
    if (nav && toggle) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.querySelectorAll('.topnav-links a').forEach((a) =>
        a.addEventListener('click', () => nav.classList.remove('open'))
      );
    }

    // Smooth-scroll active link highlight
    const links = Array.from(
      document.querySelectorAll('.topnav-links a[href^="#"]')
    );
    const sectionMap = new Map();
    links.forEach((link) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) sectionMap.set(target, link);
    });

    if (sectionMap.size && 'IntersectionObserver' in window) {
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const link = sectionMap.get(e.target);
            if (!link) return;
            if (e.isIntersecting) {
              links.forEach((l) => l.classList.remove('active'));
              link.classList.add('active');
            }
          });
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
      );
      sectionMap.forEach((_, section) => spy.observe(section));
    }

    // Reveal-on-scroll
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('visible'));
    }
  });
})();
