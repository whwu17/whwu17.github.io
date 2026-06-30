/**
 * Site i18n — English default, hardcoded zh toggle.
 * Strings from window.__I18N__ (injected by Jekyll from _data/i18n.yml).
 */
(function (global) {
  var DEFAULT = 'en';

  function getLang() {
    try {
      var s = localStorage.getItem('site-lang');
      return s === 'zh' ? 'zh' : 'en';
    } catch (e) {
      return DEFAULT;
    }
  }

  function dict() {
    return global.__I18N__ || {};
  }

  function t(key, lang) {
    var L = lang || getLang();
    var parts = key.split('.');
    var node = dict()[L];
    for (var i = 0; i < parts.length; i++) {
      if (!node) return key;
      node = node[parts[i]];
    }
    return node || key;
  }

  function greetingKey() {
    var h = new Date().getHours();
    if (h < 12) return 'links.greeting_morning';
    if (h < 18) return 'links.greeting_afternoon';
    return 'links.greeting_evening';
  }

  function applyLang(lang) {
    var L = lang === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = L === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key === 'links.greeting') {
        el.textContent = t(greetingKey(), L);
      } else {
        el.textContent = t(key, L);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'), L);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), L));
    });

    document.querySelectorAll('[data-bilingual-en]').forEach(function (el) {
      var en = el.getAttribute('data-bilingual-en');
      var zh = el.getAttribute('data-bilingual-zh');
      el.textContent = L === 'zh' ? (zh || en) : en;
    });

    document.querySelectorAll('[data-i18n-count]').forEach(function (el) {
      var n = el.getAttribute('data-link-count');
      var subEn = el.getAttribute('data-bilingual-sub-en') || '';
      var subZh = el.getAttribute('data-bilingual-sub-zh') || '';
      if (L === 'zh') {
        el.textContent = subZh + ' · ' + n + ' ' + t('links.links_count', L);
      } else {
        el.textContent = subEn + ' · ' + n + ' ' + t('links.links_count', L);
      }
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = t('lang_toggle', L);
      btn.setAttribute('aria-label', L === 'en' ? 'Switch to Chinese' : 'Switch to English');
    });

    try { localStorage.setItem('site-lang', L); } catch (e) {}
  }

  function setLang(lang) {
    applyLang(lang === 'zh' ? 'zh' : 'en');
  }

  function toggleLang() {
    setLang(getLang() === 'en' ? 'zh' : 'en');
  }

  function init() {
    applyLang(getLang());
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', toggleLang);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.SiteI18n = { getLang: getLang, setLang: setLang, toggleLang: toggleLang, t: t, applyLang: applyLang };
})(window);
