/**
 * Adrian Salas — Personal Portfolio
 * js/main.js — Language switcher + active nav tracking
 */

import translations from './i18n.js';

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */

let currentLang = localStorage.getItem('lang') || 'en';

/**
 * Apply a language to all [data-i18n] elements on the page.
 * @param {'en'|'es'} lang
 */
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update page title
  document.title = translations.pageTitle[lang];

  // Update all elements with a data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Update lang button states
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');

  // Persist preference
  localStorage.setItem('lang', lang);
}

// Expose setLang globally so inline onclick handlers can reach it
window.setLang = setLang;

/* ============================================================
   ACTIVE NAV ON SCROLL
   ============================================================ */

function initNavObserver() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a, #mobile-nav a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);   // apply saved / default language
  initNavObserver();       // start scroll-based nav highlighting
});
