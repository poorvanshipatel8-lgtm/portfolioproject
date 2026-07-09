/** Filterable experience timeline by function tags */

export function initTimeline() {
  const blocks = document.querySelectorAll('[data-timeline]');

  blocks.forEach((block) => {
    const buttons = block.querySelectorAll('.legend-btn');
    const items = block.querySelectorAll('.job li[data-tag]');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.classList.toggle('is-dimmed', !active && filter !== 'all');
          b.setAttribute('aria-pressed', String(active));
        });

        if (filter === 'all') {
          buttons.forEach((b) => b.classList.remove('is-dimmed'));
        }

        items.forEach((li) => {
          const show = filter === 'all' || li.dataset.tag === filter;
          li.classList.toggle('is-filtered', !show);
          li.setAttribute('aria-hidden', String(!show));
        });
      });
    });
  });
}
