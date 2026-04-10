---
title: Troubleshooting
description: Common issues and how to fix them.
---

If OG Sorted is behaving unexpectedly, check here first. Most issues are down to page locks, CMS bindings, permissions, or stale data — all of which have straightforward fixes.

## The panel is blank or stuck on "Loading pages…"

OG Sorted loads all your pages on first open. On very large sites (hundreds of pages) this can take 10–20 seconds.

**If it takes longer than a minute:**

1. Close and re-open the panel.
2. If that doesn't help, click **Refresh** if the button is visible, or close the app entirely and relaunch from the **Apps** menu.
3. Check that you have a stable internet connection — OG Sorted fetches data directly from Webflow.

## A page row is missing a checkbox / I can't select it

You're looking at a CMS collection template with an **OG image CMS field binding**. Bound rows are deliberately disabled so you can't overwrite a binding with a static image.

To change the binding, open the page in the Webflow Designer itself, edit the OG image field's CMS binding in page settings, then click **Refresh** in OG Sorted.

Title and description columns still work on bound rows if those fields aren't bound.

## An apply run fails on some pages with a "locked" error

The most common cause of apply failures is **another editor having that page open** in the Webflow Designer, which locks it for writes.

**Fix:**

1. Ask the other editor to navigate away from the locked page, or close their Designer session.
2. Click **Retry failed** in the OG Sorted footer — it re-runs only the pages that failed, without touching the ones that succeeded.

## An apply run fails with a 429 / rate-limited error

Webflow's API has per-site rate limits. If you're applying changes to hundreds of pages at once, you may hit the limit.

**Fix:** Wait 60 seconds, then click **Retry failed**. OG Sorted paces requests under the rate limit by default, but a burst of other activity on your site can push you over.

## I applied an image, but the page list still shows the old thumbnail

The page list caches each page's OG data from when you first opened the panel. After a successful apply, it updates the rows that changed, but if you're looking at cached data from before that apply, the thumbnail may be stale.

**Fix:** Click **Refresh** to re-fetch every page's OG data from Webflow.

## "Save to Assets" is unticked and the URL image isn't showing in my library

That's expected. When **Save to Assets** is off, the URL is set as the page's OG image directly, without copying the file into Webflow. It still works — the OG image field is just a URL, not a reference — but the image won't appear in your Asset library.

If you want it in your library, go back to the URL tab, tick **Save to Assets**, and re-pick the image.

## A CSV import says "N unmatched rows"

OG Sorted matches CSV rows to pages using **page name + folder**. A row is "unmatched" when no page in your current site has that combination.

**Common causes:**

- You exported the CSV from a different site.
- A page was renamed or moved to a different folder between export and import.
- The `folder` column was edited manually and no longer matches the actual Webflow folder path.

**Fix:** Re-export a fresh CSV from your current site and use it as the template. Copy your edited cells across from the old file into the matching rows in the new one.

## The social card preview looks different from the actual shared link

Different social platforms crop, resize, and cache OG images differently. The preview in OG Sorted shows the raw image at 1200:630 — what you see is a good approximation, but:

- **Facebook and LinkedIn** cache OG images aggressively. Use their debug tools ([Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)) to force a re-scrape after changes.
- **iMessage and Slack** crop to roughly square. Keep important content centred.
- **Twitter/X** uses a summary card aspect ratio closer to 2:1 and often crops the sides.

## The dimension badge is amber but the image looks fine

The badge is strict about 1200×630. Anything else (even 1080×566) shows amber. The image still works — amber is "heads up, this isn't the ideal size", not "this is broken".

If you want the green tick, resize the source image to 1200×630 in your image editor and re-upload.

## I removed the OG image on a CMS template and all my items lost their image

Removing on a CMS collection template affects every CMS item that uses the template. If the template had a CMS binding you want to keep, you've unbound it.

**Fix:** Open the CMS template in the Webflow Designer, re-add the CMS field binding in page settings, and click **Refresh** in OG Sorted.

## OG Sorted asked me to grant permissions again

OG Sorted needs four permissions to do its job (read/write page settings, read/write assets). If you previously installed it on a different plan or a different site, you may need to re-grant permissions on the current site.

Go to **Apps → OG Sorted → Permissions** in the Designer and approve the list.

## Still stuck?

- Double-check you're on the latest version of OG Sorted in the Webflow Marketplace.
- Check the [Privacy](/docs/privacy/) page if you have questions about what OG Sorted does and doesn't do with your data.
- Open an issue on the [GitHub repo](https://github.com/bananacrisp/og-sorted-docs/issues) with a description of what you tried and what happened.
