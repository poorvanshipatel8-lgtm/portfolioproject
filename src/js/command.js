import { navLinks } from '../data/content.js';

/** ⌘K / Ctrl+K command palette for section navigation */

export function initCommand() {
  const trigger = document.querySelector('.command-trigger');
  const palette = document.querySelector('.command-palette');
  const input = palette?.querySelector('.command-palette__input');
  const list = palette?.querySelector('.command-palette__list');

  if (!palette || !input || !list) return;

  let selectedIndex = 0;
  let filtered = [...navLinks];

  function renderList() {
    list.innerHTML = filtered
      .map(
        (item, i) => `
      <li class="command-palette__item ${i === selectedIndex ? 'is-selected' : ''}"
          role="option"
          data-index="${i}"
          data-href="#${item.id}">
        ${item.label}
        <span>#${item.id}</span>
      </li>`
      )
      .join('');

    list.querySelectorAll('.command-palette__item').forEach((el) => {
      el.addEventListener('click', () => navigateTo(el.dataset.href));
    });
  }

  function open() {
    filtered = [...navLinks];
    selectedIndex = 0;
    input.value = '';
    renderList();
    palette.classList.add('is-open');
    palette.setAttribute('aria-hidden', 'false');
    input.focus();
    document.body.style.overflow = 'hidden';
  }

  function close() {
    palette.classList.remove('is-open');
    palette.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function navigateTo(href) {
    close();
    const target = document.querySelector(href);
    if (target) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      history.pushState(null, '', href);
    }
  }

  function filter(query) {
    const q = query.toLowerCase().trim();
    filtered = q
      ? navLinks.filter(
          (l) => l.label.toLowerCase().includes(q) || l.id.toLowerCase().includes(q)
        )
      : [...navLinks];
    selectedIndex = 0;
    renderList();
  }

  trigger?.addEventListener('click', open);

  palette.addEventListener('click', (e) => {
    if (e.target === palette) close();
  });

  input.addEventListener('input', () => filter(input.value));

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, filtered.length - 1);
      renderList();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      renderList();
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      navigateTo(`#${filtered[selectedIndex].id}`);
    } else if (e.key === 'Escape') {
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      palette.classList.contains('is-open') ? close() : open();
    }
  });
}
