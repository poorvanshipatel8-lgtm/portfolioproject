import {
  site,
  navLinks,
  about,
  tagLegend,
  workExperience,
  internships,
  projects,
  skills,
  education,
  contact,
} from '../data/content.js';

function dot(tag) {
  return `<span class="dot ${tag}" aria-hidden="true"></span>`;
}

function legendButtons() {
  return `
    <div class="legend" role="group" aria-label="Filter by function">
      <button type="button" class="legend-btn is-active" data-filter="all" aria-pressed="true">
        All
      </button>
      ${tagLegend
        .map(
          (t) => `
        <button type="button" class="legend-btn" data-filter="${t.key}" aria-pressed="false">
          ${dot(t.key)} ${t.label}
        </button>`
        )
        .join('')}
    </div>`;
}

function renderJob(job) {
  return `
    <div class="job" data-job>
      <div class="job-head">
        <div>
          <h3>${job.company}</h3>
          <div class="role">${job.role}</div>
        </div>
        <div class="job-dates">${job.dates}</div>
      </div>
      <ul>
        ${job.bullets
          .map(
            (b) => `
          <li data-tag="${b.tag}">
            ${dot(b.tag)}
            <span>${b.text}</span>
          </li>`
          )
          .join('')}
      </ul>
    </div>`;
}

function renderProject(p) {
  return `
    <article class="proj-card reveal" data-project="${p.id}" tabindex="0">
      <span class="tool">${p.tool}</span>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="proj-card__preview proj-card__preview--${p.id}" aria-hidden="true">
        <div class="proj-card__preview-shell">
          ${p.previewImage
            ? `<img class="proj-card__preview-img" src="/images/${p.previewImage}" alt="${p.title} preview" width="560" height="280" loading="lazy">`
            : ''}
        </div>
      </div>
      <div class="proj-card__actions">
        ${
          p.dashboardUrl
            ? `<a class="proj-card__link" href="${p.dashboardUrl}" target="_blank" rel="noopener noreferrer">Open dashboard ↗</a>`
            : ''
        }
      </div>
    </article>`;
}

export function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  const formspreeAction = site.formspreeId
    ? `https://formspree.io/f/${site.formspreeId}`
    : null;

  root.innerHTML = `
    <div class="scroll-progress" aria-hidden="true"></div>

    <nav aria-label="Main navigation">
      <div class="wrap">
        <a href="#" class="brand">${site.name}</a>
        <ul class="desktop-nav">
          ${navLinks.map((l) => `<li><a href="#${l.id}" class="nav-link" data-section="${l.id}">${l.label}</a></li>`).join('')}
        </ul>
        <div class="nav-actions">
          <button type="button" class="icon-btn command-trigger" aria-label="Jump to section (Ctrl+K)" title="Jump to section">
            <kbd>⌘K</kbd>
          </button>
          <button type="button" class="icon-btn theme-toggle" aria-label="Toggle dark mode" title="Toggle theme">
            <span class="theme-icon" aria-hidden="true">◐</span>
          </button>
          <button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-drawer">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <div class="nav-overlay" aria-hidden="true"></div>
    <aside id="nav-drawer" class="nav-drawer" aria-label="Mobile navigation">
      <ul>
        ${navLinks.map((l) => `<li><a href="#${l.id}" class="nav-link" data-section="${l.id}">${l.label}</a></li>`).join('')}
      </ul>
    </aside>

    <header class="hero reveal">
      <div class="wrap">
        <div>
          <div class="eyebrow-row">
            <span class="pill coral">${site.tagline}</span>
          </div>
          <h1>${site.name}</h1>
          <p class="sub">${site.subtitle}</p>
          <div class="contact-row">
            <a href="#contact" class="btn primary magnetic-btn">Get in touch</a>
            <a href="${site.linkedin}" class="btn magnetic-btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div class="photo-frame">
          <div class="backer" aria-hidden="true"></div>
          <img src="/images/profile.jpg" alt="Portrait of ${site.name}" width="340" height="340" loading="eager" decoding="async">
        </div>
      </div>
    </header>

    <main>
      <section id="about" class="divide reveal">
        <div class="wrap">
          <div class="section-head">
            <h2>About</h2>
            <span class="label">${about.eyebrow}</span>
          </div>
          <div class="about-grid">
            <div>
              ${about.paragraphs.map((p) => `<p>${p}</p>`).join('')}
            </div>
            <div class="stat-grid">
              ${about.stats
                .map(
                  (s) => `
                <div class="stat">
                  <div class="num">${s.num}</div>
                  <div class="desc">${s.desc}</div>
                </div>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" class="divide reveal">
        <div class="wrap">
          <div class="section-head">
            <h2>Experience</h2>
            <span class="label">${workExperience.eyebrow}</span>
          </div>

          <div class="experience-block" data-timeline="work">
            <h3 class="label" style="margin-bottom:20px;font-size:13px;">Work Experience</h3>
            ${legendButtons()}
            <div class="timeline">
              ${workExperience.jobs.map(renderJob).join('')}
            </div>
          </div>

          <div class="experience-block" data-timeline="internships">
            <h3 class="label" style="margin-bottom:20px;font-size:13px;">Internships</h3>
            ${legendButtons()}
            <div class="timeline">
              ${internships.jobs.map(renderJob).join('')}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="divide reveal">
        <div class="wrap">
          <div class="section-head">
            <h2>Projects</h2>
            <span class="label">${projects.eyebrow}</span>
          </div>
          <div class="proj-grid">
            ${projects.items.map(renderProject).join('')}
          </div>
        </div>
      </section>

      <section id="skills" class="divide reveal">
        <div class="wrap">
          <div class="section-head">
            <h2>Skills &amp; Certifications</h2>
            <span class="label">${skills.eyebrow}</span>
          </div>
          <div class="skills-grid">
            <div>
              <h3>Soft Skills</h3>
              <div class="chip-row">
                ${skills.softSkills.map((s) => `<span class="chip">${s}</span>`).join('')}
              </div>
            </div>
            <div>
              <h3>Certifications</h3>
              <ul class="cert-list">
                ${skills.certifications
                  .map(
                    (c) => `
                  <li>
                    <span class="cname">${c.name}</span>
                    <span class="cyear">${c.year}</span>
                  </li>`
                  )
                  .join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" class="divide reveal">
        <div class="wrap">
          <div class="section-head">
            <h2>Education &amp; Achievements</h2>
            <span class="label">${education.eyebrow}</span>
          </div>
          <div class="edu-card">
            <div class="edu-badge">${education.rank}<sup style="font-size:11px;">nd</sup></div>
            <div>
              <p>${education.achievement}</p>
              <div class="edu-sub">${education.school}</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact" class="reveal">
      <div class="wrap">
        <h2>${contact.heading}</h2>
        <p class="sub">${contact.sub}</p>
        <div class="contact-layout">
          <div class="footer-links">
            <div>
              <p class="contact-note">Reach out to me at</p>
              <p class="contact-subnote">Click the email to open your mail app and send a message.</p>
            </div>
            <a class="btn primary" href="mailto:${site.email}" target="_blank" rel="noopener noreferrer">${site.email}</a>
            <a class="ghost" href="${site.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div class="foot-bottom">
          <span>${site.name} © ${contact.year}</span>
          <span>${contact.footerLine}</span>
        </div>
      </div>
    </footer>

    <button type="button" class="back-to-top" aria-label="Back to top">↑</button>

    <div class="command-palette" role="dialog" aria-label="Jump to section" aria-hidden="true">
      <div class="command-palette__panel">
        <input type="text" class="command-palette__input" placeholder="Jump to section…" autocomplete="off" aria-label="Search sections">
        <ul class="command-palette__list" role="listbox"></ul>
      </div>
    </div>
  `;
}
