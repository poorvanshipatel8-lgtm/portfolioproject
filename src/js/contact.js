import { site } from '../data/content.js';

/** Fallback contact form that opens mailto */

export function initContactForm() {
  const form = document.querySelector('[data-mailto-form]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  });
}
