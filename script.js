/* ========================================
   Wedding Gift Website — Script
   Loads gifts from JSON and renders cards
   ======================================== */

(function () {
  'use strict';

  const GIFTS_URL = 'gifts.json';
  const gridEl = document.getElementById('gifts-grid');

  /* ---------- Fetch & Render ---------- */
  async function init() {
    try {
      const res = await fetch(GIFTS_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const gifts = await res.json();
      renderGifts(gifts);
      observeCards();
    } catch (err) {
      console.error('Failed to load gifts:', err);
      gridEl.innerHTML = `<p style="text-align:center;grid-column:1/-1;opacity:.5;font-style:italic;">Não foi possível carregar os presentes.</p>`;
    }
  }

  /* ---------- Card Builder ---------- */
  function renderGifts(gifts) {
    const fragment = document.createDocumentFragment();

    gifts.forEach(function (gift, i) {
      const card = document.createElement('a');
      card.href = gift.link;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.className = 'gift-card';
      card.style.transitionDelay = (i % 4) * 0.1 + 's';

      card.innerHTML = `
        <div class="gift-card__image">
          <img src="${escapeHtml(gift.image)}" alt="${escapeHtml(gift.name)}" loading="lazy">
        </div>
        <div class="gift-card__body">
          <h3 class="gift-card__name">${escapeHtml(gift.name)}</h3>
          <p class="gift-card__price">${escapeHtml(gift.price)}</p>
          <span class="gift-card__action">Ver na Loja</span>
        </div>
      `;

      // Remove shimmer once image loads
      const img = card.querySelector('img');
      img.addEventListener('load', function () {
        img.parentElement.classList.add('loaded');
      });
      img.addEventListener('error', function () {
        img.parentElement.classList.add('loaded');
      });

      fragment.appendChild(card);
    });

    gridEl.appendChild(fragment);
  }

  /* ---------- Scroll Reveal via IntersectionObserver ---------- */
  function observeCards() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all cards immediately
      document.querySelectorAll('.gift-card').forEach(function (c) {
        c.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.gift-card').forEach(function (card) {
      observer.observe(card);
    });
  }

  /* ---------- Helpers ---------- */
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', init);
})();
