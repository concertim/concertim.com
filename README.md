# concertim.com

Static marketing site for ConcertIM, built with [Astro](https://astro.build).
Markdown-managed content, statically generated, **no external CSS/JS
dependencies** — fonts and styles are self-hosted and bundled at build.

## Stack

- **Astro 5** — static output, markdown content collections.
- **One hand-authored stylesheet** (`src/styles/global.css`) — risograph
  design system, no Tailwind, no PostCSS, no CSS framework.
- **Self-hosted OFL fonts** in `public/fonts/` (Anton, Montserrat, Space Mono).

## Where things live

- `src/content/pages/*.md` — page prose (about, offerings, contact, privacy, terms). Edit copy here.
- `src/content/offerings/*.md` — each offering is one file: front matter holds the matrix row + pitches, body holds the prose.
- `src/data/site.ts` — nav, footer, email, company details.
- `src/data/components.ts` — the five modular components + dial labels.
- `src/data/home.ts` — short home-page copy.
- `src/styles/global.css` — the whole design system.
- `src/components/` + `src/layouts/` — UI.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build   # output → dist/
npm run preview # serve the built site
```

The site is hosted on statichost.uk. Deploy by building and syncing `dist/`
to the web root (or trigger a deploy from the statichost dashboard).

## Analytics (optional, off by default)

No analytics script is emitted unless `ANALYTICS_SRC` is set to a
**first-party / self-hosted** script URL, e.g. a self-hosted Plausible/Umami
instance on `https://a.concertim.com/script.js`. With it unset, the built
site makes zero external requests.

```bash
ANALYTICS_SRC=https://a.concertim.com/script.js npm run build
```

Standing up that analytics instance is separate from this build.

## Notes

- ConcertIM is **not** a consultancy. Offerings are framed around the
  *control dial* — how much the customer runs vs how much ConcertIM runs.
  See `BUSINESS.md` for the source-of-truth on offerings and the modular
  component matrix.