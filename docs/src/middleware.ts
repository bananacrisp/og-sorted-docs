import { defineMiddleware } from 'astro:middleware';

/**
 * Webflow Cloud's edge strips trailing slashes (/docs/ → /docs, 301),
 * while Astro/Starlight's prerendered routes live in folder-style paths
 * and emit a 307 to add the trailing slash back. The two policies fight
 * and produce ERR_TOO_MANY_REDIRECTS.
 *
 * Webflow Cloud's build template overrides astro.config.mjs, so setting
 * `trailingSlash: 'never'` or `build.format: 'file'` in user config is
 * ignored. Middleware is our only user-space escape hatch: it runs before
 * the routing/redirect layer, so by internally rewriting bare paths to
 * their slash-terminated equivalents we bypass the redirect entirely.
 *
 * `context.rewrite()` changes the request URL without emitting an HTTP
 * redirect, so the browser sees a single 200 response instead of a loop.
 */
export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;

	// Only rewrite routes that don't already have a trailing slash and
	// don't look like files (e.g. /docs/favicon.svg, /docs/_astro/foo.js).
	// A "file-looking" segment has a dot in the last path component.
	if (pathname.length > 1 && !pathname.endsWith('/')) {
		const lastSegment = pathname.slice(pathname.lastIndexOf('/') + 1);
		const looksLikeFile = lastSegment.includes('.');
		if (!looksLikeFile) {
			return context.rewrite(pathname + '/');
		}
	}

	return next();
});
