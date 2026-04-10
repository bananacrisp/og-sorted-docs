import type { AstroIntegration } from 'astro';

/**
 * Webflow Cloud's build template overrides user-level astro.config.mjs
 * options like `trailingSlash` and `build.format`, but it preserves the
 * `integrations` array. This integration uses the `astro:config:setup`
 * hook to mutate the Astro config from inside an integration — which runs
 * during Webflow Cloud's modified build — forcing `trailingSlash: 'never'`
 * and `build.format: 'file'`.
 *
 * Why this matters: Webflow classic's edge 301-strips trailing slashes,
 * while Astro's default folder-style output emits a 307 to add them. The
 * two policies produce ERR_TOO_MANY_REDIRECTS. Forcing flat-file output
 * means Astro stops adding the slash and the loop breaks.
 */
export default function forceNeverTrailingSlash(): AstroIntegration {
	return {
		name: 'force-never-trailing-slash',
		hooks: {
			'astro:config:setup': ({ updateConfig, logger }) => {
				logger.info('Forcing trailingSlash: "never" + build.format: "file"');
				updateConfig({
					trailingSlash: 'never',
					build: {
						format: 'file',
					},
				});
			},
		},
	};
}
