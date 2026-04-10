---
title: Auditing pages
description: How the page list, status columns, filters, and CMS detection work.
---

The page list is where you see, at a glance, which pages are ready to share and which need work. It shows every page in your site in a single scrollable view, organised the way Webflow already organises them.

:::note
Screenshots coming soon.
:::

## Sections

Pages are grouped into three collapsible sections:

- **Pages** — your regular static pages, including Home and anything inside folders.
- **CMS collection pages** — one row per CMS collection template (e.g. Blog posts, Authors). These are the templates, not individual CMS items — changes apply to every item that uses the template.
- **Utility pages** — the 404 page, password page, and anything else Webflow treats as a system page.

Click a section heading to collapse or expand it. Folders inside **Pages** render as nested, collapsible groups that mirror your Webflow folder structure, including folders inside folders.

## Sort order

Pages are sorted in a fixed, predictable order so you don't have to hunt for things:

1. **Home** first.
2. **Folders** next, with nested folders staying inside their parent.
3. **Root-level pages** alphabetically.
4. **System pages** (utility) last.

## Per-field status columns

Every non-system page shows three status indicators: **Img**, **Title**, and **Desc**. Each one is one of:

- **Green** — the field is filled in and within the recommended character limit.
- **Amber** — the field is present but has an issue (e.g. the OG title is over 60 characters, the description is over 160, or the image is the wrong dimensions).
- **Red** — the field is missing entirely.

A small thumbnail of the current OG image appears beside each row so you can spot placeholders or duplicates without opening the detail modal.

## Page type icons

Each row has an icon showing what kind of page it is:

- **Home** — star or house icon.
- **Static page** — document icon.
- **Draft page** — document icon with a draft indicator.
- **CMS collection template** — stacked/layered icon.

## Search

The search box above the list filters pages by name across all sections as you type. It's a simple substring match, so `about` finds both "About" and "About the team".

## Needs attention filter

Click **Needs attention** to hide pages that are already complete (all three fields green). Only pages with at least one amber or red chip stay visible.

When the filter is on, the **Select all** checkbox only selects the visible pages, so you can apply changes to exactly the subset that needs work without touching anything else.

## Stats bar

Above the list, a compact stats bar shows:

- How many pages are **complete** (all three fields green).
- How many pages **need attention** (one or more amber/red chips).

Both numbers update live as you apply changes, so you can see the red shrinking in real time.

## Navigating to a page

Click a page name (not the checkbox) to switch the Webflow Designer to that page. The OG Sorted panel stays open, so you can see the page in context, make edits, and come back to the list.

## CMS field bindings

When a CMS collection template has its OG image bound to a CMS field (e.g. `{{ featured-image }}`), OG Sorted detects the binding and:

- **Disables the checkbox** on that row so you can't accidentally overwrite the binding with a static image.
- **Shows a "CMS field" badge** in place of the status chip for the image column.

The title and description columns still work normally if they aren't bound — you can edit those independently in the detail modal.

If you **do** want to replace a CMS binding with a static image, open the page in the Webflow Designer itself and remove the binding there. OG Sorted will pick up the change on the next refresh.

## Refresh

The **Refresh** button re-fetches every page's OG data from Webflow without closing the panel. Use it after making changes in the Designer itself, or if you've just added or deleted pages.

## Tips

- **Select all** respects the current filter and search — exactly the rows you can see are the ones that get selected.
- You can tick individual rows while a filter is on, then clear the filter, and your selection is preserved.
- The stats bar is the fastest way to check progress during a big audit: watch the "needs attention" number tick down as you apply.
