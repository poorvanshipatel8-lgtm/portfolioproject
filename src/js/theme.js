/** Ink-on-parchment dark mode with localStorage persistence */

const STORAGE_KEY = 'portfolio-theme';

export function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  const icon = toggle?.querySelector('.theme-icon');

  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (icon) icon.textContent = '◑';
  }

  toggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(STORAGE_KEY, 'light');
      if (icon) icon.textContent = '◐';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem(STORAGE_KEY, 'dark');
      if (icon) icon.textContent = '◑';
    }
  });
}
