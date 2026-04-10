---
title: Privacy
description: What OG Sorted does and doesn't do with your data.
---

OG Sorted is designed around a simple principle: **your data stays in Webflow**. There is no backend, no analytics, no telemetry, and nothing is uploaded anywhere OG Sorted controls.

## What OG Sorted collects

**Nothing.**

- There is no OG Sorted server.
- There is no database.
- There are no accounts, logins, or user identifiers.
- There is no analytics or telemetry — no page-view tracking, no event logging, no crash reporting to OG Sorted.
- There are no third-party trackers, advertising SDKs, or marketing pixels.

Everything OG Sorted does runs locally inside the Webflow Designer panel in your own browser.

## What OG Sorted accesses

When you install OG Sorted, it requests four Webflow permissions. These are enforced by Webflow, not by OG Sorted — the extension cannot do anything the permissions don't cover.

| Permission | What it's used for |
|---|---|
| `canReadPageSettings` | Read the OG image, title, and description for each page in your site so they can be shown in the audit list. |
| `canManagePageSettings` | Write updated OG image, title, and description values to pages when you click Apply or save the detail modal. |
| `canAccessAssets` | Browse your existing Webflow Assets in the image library picker. |
| `canManageAssets` | Upload new images into your Webflow Asset library when you drop a file or pick one from your computer. |

All four operations go directly to Webflow's official Designer Extension API. No data is routed through any OG Sorted-controlled server.

## Third-party services

OG Sorted does not connect to any third-party service. The only network requests it makes are:

- **Webflow APIs** — to read and write your page data and assets.
- **Image URLs you paste** into the URL tab — OG Sorted loads the image into the browser so the dimension check and preview can run. This is the same as any `<img>` tag loading a URL.

That's it.

## Where OG Sorted code runs

OG Sorted is a Webflow Designer Extension. The code runs:

- **In your browser**, inside a sandboxed iframe provided by the Webflow Designer.
- **Under the permissions you grant** during install.
- **With access only to the site you're currently viewing** in the Designer.

The extension is shipped as a static JavaScript bundle. No code is loaded from OG Sorted servers at runtime, because there are no OG Sorted servers.

## Data retention

Because OG Sorted doesn't collect anything, there's nothing to retain and nothing to delete. Uninstalling the extension removes it completely. Any OG images you uploaded into your Webflow Asset library remain there (they belong to your Webflow site, not to OG Sorted).

## Contact

Questions about privacy? Open an issue on the [GitHub repo](https://github.com/bananacrisp/og-sorted-docs/issues) or reach out through the Webflow Marketplace listing.

_This page was last updated on 10 April 2026._
