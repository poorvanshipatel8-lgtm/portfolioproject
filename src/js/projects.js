/** Expandable project cards with hover reveal */

export function initProjects() {
  const cards = document.querySelectorAll('[data-project]');

  cards.forEach((card) => {
    const expandBtn = card.querySelector('.proj-card__expand');
    const details = card.querySelector('.proj-card__details');

    expandBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCard(card, expandBtn, details);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card, expandBtn, details);
      }
    });
  });
}

function toggleCard(card, btn, details) {
  const expanded = card.classList.toggle('is-expanded');
  btn?.setAttribute('aria-expanded', String(expanded));
  btn.textContent = expanded ? 'Close case study' : 'Read case study';
  if (details) details.hidden = !expanded;
}
