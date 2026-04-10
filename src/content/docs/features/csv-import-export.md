---
title: CSV workflow
description: Export a full audit, edit in a spreadsheet, then re-import to bulk-update pages.
---

The CSV workflow is the fastest way to make coordinated changes to lots of pages — especially when you need to rewrite titles and descriptions in bulk, or hand the list to someone else for copywriting.

:::note
Screenshots coming soon.
:::

## Export CSV

Click **Export CSV** in the sticky footer to download a full audit as `og-report.csv`.

The file contains one row per page and these columns:

| Column | What it is |
|---|---|
| `page_name` | The page's display name in Webflow. |
| `folder` | The folder path, or blank for root-level pages. |
| `page_type` | `home`, `static`, `draft`, `cms`, or `utility`. |
| `og_image_url` | The current OG image URL, or blank. |
| `og_title` | The current OG title, or blank. |
| `og_description` | The current OG description, or blank. |
| `title_inherits_seo` | `true` if the OG title inherits from the SEO title. |
| `desc_inherits_seo` | `true` if the OG description inherits from the SEO description. |
| `title_length` | Character count of the OG title. |
| `desc_length` | Character count of the OG description. |
| `score` | A per-page health score from the audit. |
| `status` | `complete`, `needs-attention`, or `cms-bound`. |

Open the file in Google Sheets, Excel, Numbers, or your favourite CSV editor.

### A note on spreadsheet safety

Any cell in the exported CSV that starts with `=`, `+`, `-`, `@`, a tab, or a carriage return is automatically prefixed with a single apostrophe before export. This is the OWASP-recommended guard against CSV formula injection: it means opening the file in Excel or Google Sheets can never trigger formula execution, even if someone has typed `=HYPERLINK(...)` into a page title.

When you re-import the file, OG Sorted strips the leading apostrophe back off so it doesn't end up in your page metadata.

## Editing in a spreadsheet

Edit whichever columns you want. Common workflows:

- **Rewrite titles and descriptions** in the `og_title` / `og_description` columns. Leave the length and status columns alone — they're derived on import.
- **Flip SEO inheritance** by changing `title_inherits_seo` or `desc_inherits_seo` to `true`/`false`.
- **Swap images** by pasting new URLs into `og_image_url`. Any publicly accessible URL works; Webflow asset URLs are fine too.
- **Leave rows you don't want to change** alone. Unchanged rows will appear dimmed in the import preview and won't be touched on apply.

Save the file as CSV when you're done.

## Import CSV

Click **Import CSV** in the sticky footer and pick the edited file. OG Sorted reads every row and opens the **Import preview modal**.

## Import preview modal

The import preview is where you review every change before anything is written. The modal shows a table with one row per page, sorted so that changed rows are at the top and unchanged rows are dimmed at the bottom.

### Matching rules

OG Sorted matches each row in the CSV to a page in your site using **page name + folder**. This means you can safely reorder rows, add blank lines, or paste in extra columns — only the name and folder have to match.

Rows that **don't match** any page in your site show up at the bottom of the preview with a warning icon. This usually means either:

- The page was deleted or renamed since you exported.
- You're importing a CSV from a different site.
- The folder path was edited in the spreadsheet.

You can ignore unmatched rows and still apply the rest.

### Status chips

Each changed field (image, title, description, SEO inheritance) gets a chip showing what's about to happen:

- **Green "changing"** — this field has a new value.
- **Blue "SEO inheritance"** — this field is being switched to or from SEO inheritance.
- **Amber "warning"** — the new value works but has an issue (e.g. title over 60 characters).

### Chip tooltips

Hover any chip to see a tooltip showing the old value, the new value, character count warnings, or SEO status. This is the fastest way to sanity-check a large import before applying.

## Applying the import

Click **Apply changes** in the modal footer. OG Sorted writes every changed field to every matched page, using the same progress bar and retry flow as the [Bulk apply](/docs/features/bulk-apply/) button.

When it finishes, the main page list updates with the new values and status chips so you can see the result straight away.

## Tips

- **Export first, then edit.** Never hand-write a CSV — use the export as your template so the column headers and format match exactly.
- **Keep the export file alongside your edits** until the import succeeds, so you can always re-export and diff if something looks off.
- **Use a spreadsheet with column headers frozen** (Google Sheets: View → Freeze → 1 row) so you can see which column you're editing as you scroll.
- **For copywriting handoffs**, hide the derived columns (`score`, `status`, `*_length`) in the spreadsheet so non-technical editors only see what they need to touch.
