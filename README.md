# Poorvanshi Patel — Portfolio

A classic-editorial personal portfolio built with Vite and vanilla JavaScript. Warm cream palette, serif headlines, monospace labels, and tasteful scroll-driven interactivity.

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/` — deploy that folder to Netlify, Vercel, GitHub Pages, or any static host.

## Project structure

```
portfolio_pp/
├── index.html              # HTML shell, meta/OG tags
├── public/
│   ├── favicon.svg
│   └── images/profile.jpg  # Optimized profile photo
├── src/
│   ├── css/
│   │   ├── main.css        # Layout & components
│   │   ├── variables.css   # Light/dark design tokens
│   │   └── print.css       # Print-friendly resume stylesheet
│   ├── data/
│   │   └── content.js      # ★ Edit content here
│   └── js/
│       ├── main.js         # App entry point
│       ├── render.js       # Builds sections from content
│       ├── nav.js          # Mobile drawer + active nav
│       ├── scroll.js       # Progress bar, reveals, back-to-top
│       ├── timeline.js     # Experience tag filtering
│       ├── projects.js     # Expandable project cards
│       ├── theme.js        # Dark/light mode toggle
│       ├── command.js      # ⌘K jump menu
│       ├── magnetic.js     # CTA hover micro-interaction
│       └── contact.js      # Mailto form fallback
└── base.html               # Original single-file site (reference)
```

## Updating content

**All copy, roles, projects, and certifications live in `src/data/content.js`.** Edit that file to add a new job, change dates, or update project descriptions — no need to touch CSS or JS.

Example — add a certification:

```js
certifications: [
  { name: 'Your New Cert — Provider', year: '2027' },
  // ...
],
```

## Features

- **Classic editorial design** — cream/charcoal/coral palette, Source Serif 4 + Inter + IBM Plex Mono
- **Responsive mobile nav** — hamburger drawer with overlay
- **Scroll polish** — progress indicator, section reveals, active nav highlighting
- **Filterable timeline** — click HR / Marketing / Ops / Analytics legend to filter bullets
- **Project cards** — hover reveal (what I did / tools / outcome) + expandable case study
- **⌘K command menu** — jump to any section (Ctrl+K on Windows)
- **Dark mode** — ink-on-parchment dark theme, persisted in localStorage
- **Contact form** — mailto fallback; set `formspreeId` in `content.js` for Formspree
- **Accessibility** — semantic HTML, focus states, keyboard nav, `prefers-reduced-motion`
- **SEO** — meta description, Open Graph tags, favicon
- **Print stylesheet** — clean resume-style output when printing

## Formspree (optional)

To wire the contact form to Formspree instead of mailto:

1. Create a form at [formspree.io](https://formspree.io)
2. Set `formspreeId: 'your-form-id'` in `src/data/content.js` under `site`

## Profile photo

The photo was extracted from the original `base.html` base64 embed into `public/images/profile.jpg` (~58 KB). Replace that file to update your photo; keep the filename or update the path in `render.js`.

## Original site

`base.html` is preserved as reference. The new site lives in `index.html` and the `src/` folder.
