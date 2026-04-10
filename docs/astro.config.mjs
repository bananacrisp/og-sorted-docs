// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	// Webflow Cloud's build template overrides `base` and ignores
	// `trailingSlash`/`build.format` in user config. The ERR_TOO_MANY_REDIRECTS
	// loop is worked around in src/middleware.ts instead — see that file.
	site: 'https://fidoandpatch.webflow.io',
	output: 'server',
	adapter: cloudflare({
		platformProxy: { enabled: true },
	}),
	integrations: [
		starlight({
			title: 'OG Sorted',
			description:
				'Audit and bulk-manage Open Graph images, titles, and descriptions across every page in your Webflow site.',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css', '@fontsource/inter/400.css', '@fontsource/inter/600.css'],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/bananacrisp/og-sorted-docs',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/bananacrisp/og-sorted-docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Home', slug: 'index' },
						{ label: 'Getting started', slug: 'getting-started' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Auditing pages', slug: 'features/page-audit' },
						{ label: 'Selecting OG images', slug: 'features/uploading-images' },
						{ label: 'Bulk apply & remove', slug: 'features/bulk-apply' },
						{ label: 'Editing individual pages', slug: 'features/editing-pages' },
						{ label: 'CSV workflow', slug: 'features/csv-import-export' },
					],
				},
				{
					label: 'Support',
					items: [{ label: 'Troubleshooting', slug: 'troubleshooting' }],
				},
				{
					label: 'Legal',
					items: [
						{ label: 'Privacy', slug: 'privacy' },
						{ label: 'Terms of use', slug: 'terms' },
					],
				},
			],
		}),
	],
});
