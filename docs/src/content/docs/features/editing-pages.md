---
title: Editing individual pages
description: Use the page detail modal to edit OG title, description, and image for a single page.
---

Bulk apply is great for images, but titles and descriptions are almost always page-specific. The page detail modal is where you edit them one page at a time.

:::note
Screenshots coming soon.
:::

## Opening the modal

Click the **row actions icon** (three dots or arrow) at the right-hand end of any page row. The detail modal slides up and shows everything about that page's OG metadata.

You can also use the modal as a quick "preview this page's social card" tool — just close it without changing anything.

## What's inside

The modal has three sections:

### Social card preview

A full-size social card preview using the page's OG image, the OG title, and the page's final URL. This is the most accurate reference for what the page will look like when shared.

Next to the image, a dimension badge shows the width × height with a green tick for 1200×630 or an amber warning for other sizes. A **Copy image URL** button copies the current OG image URL to your clipboard.

### OG title

An editable text field with a character counter. OG titles should be 60 characters or fewer — the counter turns:

- **Green** when you're under 60.
- **Amber** when you're between 60 and 70.
- **Red** above 70.

Most social platforms truncate around 60, so the amber zone is "technically works, but may get cut off".

Below the field, a **Use SEO title** toggle controls whether this page inherits its SEO title into the OG title field. When the toggle is on, the text field is disabled and mirrors the page's SEO title.

### OG description

Same idea as the title, but with a 160-character soft limit (amber at 160, red above 180) and a matching **Use SEO description** toggle.

The limits come from what the major social platforms actually display in link previews. Going over doesn't break anything — it just means some platforms will truncate the preview text.

### OG image

Beneath the fields is an inline version of the same image picker as the main panel — drop zone, file upload, and asset library picker. Pick or drop an image and the preview updates immediately.

## SEO inheritance explained

Webflow has two metadata fields per page: SEO title/description and OG title/description. They can be set independently, or you can tell Webflow to reuse the SEO values for OG.

OG Sorted exposes this toggle directly:

- **Toggle on** — the OG title/description inherit from SEO title/description. Changes you make to the SEO fields (in Webflow's own page settings) automatically flow through.
- **Toggle off** — the OG fields are independent. You can write a different, share-optimised title and description that doesn't affect what Google sees.

Most of the time, inheriting SEO for title and description is fine. The cases where you want to break the link are:

- **Long SEO titles** optimised for search (e.g. "Best running shoes 2026 — comfort, price, and durability reviews"). Shorten for social.
- **Marketing-style OG text** that sounds better on Twitter than it does on a Google SERP.

## Saving changes

Changes are saved when you click **Save** in the modal footer. If you close the modal without saving, nothing is written to the page.

After save, the page's status chips in the main list update immediately so you can see the new state.

## Tips

- **Edit in the modal, apply images in bulk.** Use the modal for title/description tweaks per page; use the main panel for image changes across many pages.
- **Inheritance saves time.** If your SEO titles are already good, turning inheritance on is faster than rewriting every OG title.
- **Use the Copy image URL button** to grab the current OG image and paste it somewhere else (a CMS field, a chat message, a test page).
