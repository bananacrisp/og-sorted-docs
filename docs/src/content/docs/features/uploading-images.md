---
title: Selecting OG images
description: Every way to get an image into the picker — drop zone, library, file upload, and URL.
---

The image picker at the top of the panel is where you stage the OG image you want to apply. Once an image is selected, it shows up as a social card preview and the **Apply OG Image** button lights up.

:::note
Screenshots coming soon.
:::

There are four ways to load an image, and they all end up in the same place: a live preview plus a green tick (or amber warning) for the dimensions.

## Drop zone

Drag any JPG or PNG from your desktop, Finder, or browser onto the drop zone at the top of the panel. The image uploads to your Webflow Assets immediately and appears in the preview.

## Library tab

Click the **Library** tab to browse your existing Webflow Assets. Only JPG and PNG files are shown (other formats aren't valid for OG images). Each asset has a thumbnail and a dimension badge so you can see at a glance which ones are 1200×630, which are close, and which are the wrong shape.

Click an asset to select it. Nothing else happens yet — you still need to apply it to your pages.

## Upload tab

The **Upload** tab opens your system file picker. Pick a JPG or PNG and OG Sorted uploads it to Webflow Assets and selects it. Use this when you want to browse your computer instead of dragging.

## URL tab

Paste any hosted image URL (for example an image already on your CDN, or an S3 URL). OG Sorted fetches the image and shows the preview.

There's a **Save to Assets** checkbox. If you tick it before you apply, the image is uploaded to your Webflow Asset library so it lives alongside your other assets. If you leave it unchecked, the URL is set as the OG image directly, without copying the file into Webflow.

:::tip
Leaving **Save to Assets** off is useful for images you manage outside Webflow (for example auto-generated social cards from a CDN). Ticking it on is better for one-off uploads you want to keep.
:::

## Social card preview

Once an image is selected, OG Sorted renders it as a social card at the correct 1200:630 aspect ratio. This is roughly what visitors see when the page is shared on Facebook, LinkedIn, iMessage, Slack, and similar platforms.

The preview uses whatever title and URL would apply to the selected page(s), so you can spot issues like long titles that get cropped before you hit apply.

## Dimension validation

Below the preview is a dimension badge:

- **Green tick + "1200 × 630"** — perfect, this is the recommended OG image size.
- **Amber warning + actual dimensions** — the image will still work, but it's not the ideal aspect ratio. Some platforms (particularly LinkedIn) will crop or letterbox.

The dimension check runs entirely in the browser — it loads the image, reads its natural width and height, and compares to 1200×630.

## What happens on apply

When you hit **Apply OG Image**, the currently selected image is written to the OG image field of every checked page. The image itself is already uploaded (or already a valid URL), so the apply step is just a per-page metadata update.

See [Bulk apply & remove](/docs/features/bulk-apply/) for the details of how the bulk apply step works.

## Tips

- **Use 1200×630 wherever possible.** It's the most widely-supported OG image aspect ratio and avoids cropping on every major platform.
- **Keep important content away from the edges.** Different platforms crop differently — the "safe zone" is roughly the middle 1080×540.
- **Prefer PNG for graphics, JPG for photos.** PNG gives cleaner text rendering; JPG has smaller file sizes for photographic content.
- **Under 1 MB is a good target.** Webflow accepts larger files, but smaller OG images load faster in preview crawlers.
