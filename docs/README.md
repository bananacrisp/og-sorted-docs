# OG Sorted Docs

Public-facing support documentation for the [OG Sorted](https://github.com/bananacrisp/og-uploader) Webflow Designer Extension.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) and deployed to [Webflow Cloud](https://developers.webflow.com/webflow-cloud) on Cloudflare Workers.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321/docs/`.

## Build

```bash
npm run build
```

Produces a Cloudflare Workers-ready output under `dist/`.

## Project layout

```
.
├── astro.config.mjs          # Astro + Starlight + Cloudflare adapter config
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx
│   │       ├── getting-started.md
│   │       ├── features/
│   │       │   ├── page-audit.md
│   │       │   ├── uploading-images.md
│   │       │   ├── bulk-apply.md
│   │       │   ├── editing-pages.md
│   │       │   └── csv-import-export.md
│   │       ├── troubleshooting.md
│   │       ├── privacy.md
│   │       └── terms.md
│   ├── content.config.ts
│   └── styles/
│       └── custom.css        # Brand overrides matching the extension palette
├── public/
│   └── favicon.svg
├── DEPLOY.md                 # Webflow Cloud deployment checklist
├── package.json
└── tsconfig.json
```

## Editing content

Every page is a `.md` or `.mdx` file under `src/content/docs/`. Frontmatter (`title`, `description`) is required; Starlight handles the rest.

The sidebar is hand-curated in `astro.config.mjs` — add a new page there when you add a new file.

## Deploying

See [DEPLOY.md](./DEPLOY.md) for the full Webflow Cloud setup checklist. Once the GitHub repo is linked, every push to `main` auto-deploys.

## Stack

- [Astro 6](https://astro.build)
- [Starlight 0.38](https://starlight.astro.build)
- [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Inter](https://rsms.me/inter/) via `@fontsource/inter`
