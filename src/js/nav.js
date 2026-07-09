/** Mobile nav drawer and active section highlighting */

export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');
  const overlay = document.querySelector('.nav-overlay');
  const links = document.querySelectorAll('.nav-link');
  const sections = navLinksToSections();

  function closeDrawer() {
    toggle?.setAttribute('aria-expanded', 'false');
    drawer?.classList.remove('is-open');
    overlay?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function openDrawer() {
    toggle?.setAttribute('aria-expanded', 'true');
    drawer?.classList.add('is-open');
    overlay?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeDrawer() : openDrawer();
  });

  overlay?.addEventListener('click', closeDrawer);

  links.forEach((link) => {
    link.addEventListener('click', () => closeDrawer());
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((link) => {
            const match = link.dataset.section === id;
            link.classList.toggle('is-active', match);
            if (match) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

function navLinksToSections() {
  const ids = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
  return ids.map((id) => document.getElementById(id)).filter(Boolean);
}
