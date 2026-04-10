---
title: Getting started
description: Install OG Sorted, open the panel, and take your first tour of the page list.
---

OG Sorted runs inside the Webflow Designer as an extension panel. Once it's installed on your site, you open it the same way as any other Designer app.

## 1. Install from the Marketplace

1. Open your site in the Webflow Designer.
2. Click the **Apps** icon in the left-hand toolbar.
3. Find **OG Sorted** in the Marketplace and click **Install**.
4. Approve the permissions dialog. OG Sorted needs:
    - **Read and manage page settings** — to read and write OG image, title, and description for every page.
    - **Read and manage assets** — to browse your Webflow Asset library and upload new images into it.

Everything OG Sorted does uses official Webflow APIs. Nothing is uploaded anywhere else. See [Privacy](/docs/privacy/) for details.

## 2. Open the panel

Click the OG Sorted icon under **Apps** in the Designer. The panel opens as a tall side panel on the right.

The first time you open it, OG Sorted fetches every page in your site — static pages, CMS collection templates, utility pages, and anything nested inside folders. On a large site this takes a few seconds.

## 3. What you see

The panel has two main areas:

- **Top — image picker.** A drop zone and three tabs: **Upload**, **Library**, and **URL**. Once you pick an image, a social card preview appears so you can check framing and dimensions before applying it.
- **Bottom — page list.** Every page in your site, grouped into collapsible sections (**Pages**, **CMS collection pages**, **Utility pages**), with individual status columns for image, title, and description. A search box and a **Needs attention** filter sit above the list.

A sticky footer at the bottom of the panel holds the **Apply OG Image**, **Remove OG Image**, **Export CSV**, and **Import CSV** buttons. These stay visible as you scroll the page list.

## 4. Your first audit

A good first pass is to:

1. Click **Needs attention** to hide any pages that are already complete.
2. Scroll the list and look at the per-field status chips — green means that field is filled in and within character limits, amber means it needs work, red means it's missing.
3. Click any page name to jump to it in the Designer and see it in context.
4. Pick an image using the picker at the top of the panel, select the pages you want to fix, and hit **Apply OG Image**.

That's it — you're ready to keep going.

## Next

- [Auditing pages](/docs/features/page-audit/) — make sense of the status columns, filters, and CMS detection.
- [Selecting OG images](/docs/features/uploading-images/) — every way to get an image into the picker.
- [Bulk apply & remove](/docs/features/bulk-apply/) — apply changes across dozens of pages at once.
