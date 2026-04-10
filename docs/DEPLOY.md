# Deploying to Webflow Cloud

This project is designed to deploy to [Webflow Cloud](https://developers.webflow.com/webflow-cloud), which runs Astro on Cloudflare Workers and mounts the app at a path under your Webflow site.

The steps below can't be fully automated from the CLI — they require clicking through the Webflow dashboard a few times. Work through them in order.

## Prerequisites

- A Webflow Workspace on a plan that supports Webflow Cloud.
- The `og-sorted-docs` GitHub repo already exists and has this code pushed to `main`.
- Node 20+ and `npm` locally.

## 1. Create a Webflow site

1. In the [Webflow dashboard](https://webflow.com/dashboard), click **New site**.
2. Choose **Blank site** (a blank site is enough — you don't need a template).
3. Name the site (e.g. "OG Sorted") and finish creation.
4. Note the default subdomain — something like `ogsorted.webflow.io`. You'll need this later.

### Optional: build a landing page

If you want a landing page at the root of the Webflow site (so `ogsorted.webflow.io/` isn't empty), open the site in the Webflow Designer and add a simple hero section with a CTA button linking to `/docs`. Publish the site. This isn't required — Webflow Cloud will serve `/docs` regardless of whether the root has content.

## 2. Install the Webflow CLI

```bash
npm install -g @webflow/webflow-cli
```

Check the version:

```bash
webflow --version
```

## 3. Authenticate

```bash
webflow auth login
```

This opens a browser window where you approve the CLI's access to your Webflow workspace. Follow the prompts and return to the terminal when it says you're logged in.

## 4. Initialise the Webflow Cloud project

From inside this repo:

```bash
cd og-sorted-docs
webflow cloud init
```

You'll be asked:

- **Which site to link?** Pick the "OG Sorted" site you created in step 1.
- **Mount path?** Enter `/docs`. This must match the `base` value in `astro.config.mjs`.
- **Framework?** Astro (should be auto-detected).

This creates the Webflow Cloud project and links it to this directory.

## 5. Link the GitHub repo in the Webflow dashboard

1. Open the Webflow dashboard and find the **Webflow Cloud** section for your site.
2. Click **Connect GitHub repository**.
3. Authorise Webflow to access your GitHub account if prompted.
4. Pick the `bananacrisp/og-sorted-docs` repo.
5. Set the **production branch** to `main`.
6. Save.

From now on, every push to `main` triggers an automatic deploy.

## 6. First deploy

```bash
git push origin main
```

Webflow Cloud will detect the push, build the Astro project with the Cloudflare adapter, and deploy it to Cloudflare Workers under your Webflow site. The first deploy usually takes 2–3 minutes.

Watch the deploy status in the **Webflow Cloud** tab of the dashboard.

## 7. Verify

Once the deploy is green, check the following URLs:

- `https://ogsorted.webflow.io/docs` — should load the Starlight home page.
- `https://ogsorted.webflow.io/docs/getting-started` — should load Getting started.
- `https://ogsorted.webflow.io/docs/privacy` — should return 200 (required for Marketplace submission).
- `https://ogsorted.webflow.io/docs/terms` — should return 200 (required for Marketplace submission).

Also confirm:

- [ ] Sidebar renders with all sections.
- [ ] Dark-mode toggle works.
- [ ] Search input (powered by Pagefind) returns results.
- [ ] Edit-on-GitHub links point at the right repo.
- [ ] All internal links resolve under the `/docs/` base.

## 8. Post-deploy tasks

When the docs site is live, a few things in the extension repo should be updated to match:

- **Webflow Marketplace submission form**: set the Support URL to `https://ogsorted.webflow.io/docs`, Privacy URL to `/docs/privacy`, Terms URL to `/docs/terms`.
- **`webflow.json`** in `og-uploader`: rename `"name": "OG Image Manager"` → `"name": "OG Sorted"` for naming consistency.
- **`README.md`** in `og-uploader`: add a "Support & Docs" link to the live docs URL.
- **Replace placeholder screenshots** in this repo's feature pages with real captures from the extension.

## Troubleshooting

### The build fails with a Cloudflare adapter error

Check that `@astrojs/cloudflare` and `astro` are both up to date:

```bash
npm install @astrojs/cloudflare@latest astro@latest
```

### The site loads but internal links are broken

The `base` in `astro.config.mjs` must match the mount path you chose at `webflow cloud init`. If you picked something other than `/docs`, update the config and push.

### Search returns no results

Pagefind indexes at build time. Make sure `npm run build` completes cleanly locally before pushing — if the build fails, the search index won't update.
