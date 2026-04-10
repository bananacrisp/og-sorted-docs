---
title: Bulk apply & remove
description: Apply or clear an OG image across many pages at once, with progress and retry.
---

Bulk apply and remove are the core workflow for fixing large sites. You pick an image, tick the pages that need it, and OG Sorted writes the change to every page in sequence.

:::note
Screenshots coming soon.
:::

## The sticky footer

The four main actions live in a sticky footer at the bottom of the panel, always visible as you scroll:

- **Apply OG Image** — write the selected image to every checked page.
- **Remove OG Image** — clear the OG image field on every checked page.
- **Export CSV** — see [CSV workflow](/docs/features/csv-import-export/).
- **Import CSV** — see [CSV workflow](/docs/features/csv-import-export/).

The Apply and Remove buttons are disabled when there's nothing to do. A short helper hint underneath tells you what to do next — for example "Select pages to apply" or "Pick an image first".

## Applying an image

1. **Pick an image** using the picker at the top of the panel. The social card preview and dimension check should both be green.
2. **Tick the pages** you want to apply it to. Use **Select all** with the **Needs attention** filter to target exactly the pages that are missing an image, or tick individual rows.
3. **Click Apply OG Image.** The button changes to show progress.

As the apply runs, a progress bar fills up along the footer and each row in the list updates its image column as the change lands.

## Removing an image

Removing is identical, but clears the OG image field instead of setting one. You don't need an image selected in the picker.

This is useful when you want to force a page to fall back to the site-wide default OG image, or when you've been experimenting and want to clean up.

:::caution
Removing an OG image on a CMS collection template affects every item that uses the template. Double-check the row is the one you mean before hitting remove.
:::

## Progress bar

The progress bar shows one segment per page being updated. It fills from left to right as each page completes. Pages that succeed turn green, pages that fail turn red, and the current page is highlighted.

Next to the bar, a counter shows `N of M pages` so you always know how far through you are.

## Retry failed pages

If one or more pages fail to update (for example because they were locked by another editor, or a transient network error), the failed count is shown after the run finishes and a **Retry failed** button appears.

Click it to re-run the apply on **only** the failed pages. The rest of your selection is untouched. You can retry as many times as you like.

Common reasons for failures:

- **The page was locked by another user** in the Webflow Designer. Ask them to release the lock and retry.
- **The page is a CMS template with a CMS binding** on the OG image field. Bound rows are normally disabled in the list, so this usually only happens if the binding was added after you opened the panel — hit **Refresh** first.
- **Transient Webflow API errors.** Just hit **Retry failed**; it normally works on the second attempt.

## While a bulk operation is running

The panel stays fully interactive during a bulk run — you can still scroll, search, and open the detail modal for other pages. Applying to a large selection takes a few seconds per page, so you can queue up the next set of changes while the current run finishes.

## Tips

- **Combine Needs attention + Select all** for the fastest "fix all missing images" workflow.
- **Batch by page type.** Apply one image to all blog posts, then a different one to case studies, rather than mixing them in one run.
- If a run fails part-way through and you're not sure what landed, **hit Refresh** to re-fetch the latest state from Webflow.
