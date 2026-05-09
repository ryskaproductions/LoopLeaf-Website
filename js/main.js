/* ================================================================
   LoopLeaf Website – main.js
   ================================================================ */

(function () {
  'use strict';

  /* --- Mobile Navigation Toggle --- */

  const header    = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  function openMobileNav() {
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Menü schließen');
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
  }

  function closeMobileNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Menü öffnen');
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMobileNav() : openMobileNav();
    });

    // Menü schließen wenn ein Link geklickt wird
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    // Menü schließen mit Escape-Taste
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeMobileNav();
        navToggle.focus();
      }
    });
  }


  /* --- Header beim Scrollen ausblenden / einblenden --- */

  if (header) {
    let lastScrollY = window.scrollY;
    let ticking     = false;

    function updateHeader() {
      const currentScrollY  = window.scrollY;
      const mobileMenuOpen  = mobileNav && mobileNav.classList.contains('is-open');

      // Am Seitenanfang immer sichtbar
      if (currentScrollY <= 10) {
        header.classList.remove('site-header--hidden');
      } else if (!mobileMenuOpen) {
        if (currentScrollY > lastScrollY) {
          // Scrollen nach unten → ausblenden
          header.classList.add('site-header--hidden');
        } else {
          // Scrollen nach oben → einblenden
          header.classList.remove('site-header--hidden');
        }
      }

      lastScrollY = currentScrollY;
      ticking     = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
  }


  /* --- Scroll-Einblendanimation: Feature-Bilder ---
     Progressive Enhancement:
     1. js-enabled am <html>-Element setzen → CSS-Startzustände greifen.
     2. IntersectionObserver fügt is-visible hinzu, sobald das Bild sichtbar wird.
     3. Danach wird das Element nicht mehr beobachtet (Animation nur einmal). --- */

  document.documentElement.classList.add('js-enabled');

  var featureImages = document.querySelectorAll('.feature-image');

  if (featureImages.length > 0 && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.2
    });

    featureImages.forEach(function (img) {
      revealObserver.observe(img);
    });
  } else {
    /* Fallback: kein IntersectionObserver → alle Bilder sofort sichtbar */
    featureImages.forEach(function (img) {
      img.classList.add('is-visible');
    });
  }

})();
