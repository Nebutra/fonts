import { MetadataRoute, Metadata } from 'next';
import { brand } from './metadata.js';

/**
 * @nebutra/brand — metadata-helpers
 *
 * Pure functions deriving Next.js Metadata, JSON-LD objects, PWA manifest,
 * and feed channel headers from the single `brand` + `colors` SSOT.
 *
 * Zero hardcoded brand-name literals — every string is derived from `brand`
 * or `colors`. The arch drift guard `tests/architecture/brand-metadata-drift.test.ts`
 * asserts this invariant at CI time.
 *
 * NOTE: `next` is a TYPE-ONLY import here. The package declares `next` as an
 * optional peer dep + devDep (catalog:). skipLibCheck:true is set in tsconfig.json.
 * Adding `import "server-only"` is intentionally omitted: this file is consumed
 * by both server and client render paths in tests; the CALLER must enforce
 * server-only boundaries if needed.
 *
 * NOTE: getSiteUrl(service) in this module is DISTINCT from the zero-param
 * getSiteUrl() in apps/landing/src/lib/seo/site-routes.ts — different
 * modules, no collision. The local one remains the landing URL util.
 */

/** Services that have a canonical domain in brand.domains */
type BrandService = keyof typeof brand.domains;
/** Absolute origin from brand.domains only (no env hijack). */
declare function getBrandOrigin(service: BrandService): string;
/**
 * Dev-only fallback for a public URL env var (NEXT_PUBLIC_APP_URL and friends).
 *
 * A `http://localhost:*` default is right for `pnpm dev` and wrong everywhere
 * else: a production build that forgets the variable bakes the localhost
 * origin into every link it renders (acme.nebutra.com shipped "Sign in" ->
 * http://localhost:3001/sign-in that way). So the fallback exists only when
 *   - NODE_ENV is not "production" (dev server, tests), or
 *   - NEBUTRA_ALLOW_LOCALHOST_URLS=1 (an explicit opt-in for a CI build that
 *     renders nothing it deploys), or
 *   - SKIP_ENV_VALIDATION is set (the validator is off; there is nothing to fail).
 * Otherwise it returns undefined and the schema reports the variable as
 * missing, by name, at build time.
 */
declare function localhostFallback(fallback: string, env?: Record<string, string | undefined>): string | undefined;
/** The message a missing public URL reports in a production build. */
declare function missingPublicUrlMessage(name: string): string;
/**
 * Public object on `nebutra-assets` via `cdn.nebutra.com`.
 * R2_PUBLIC_URL / NEXT_PUBLIC_R2_PUBLIC_URL may override the origin for dogfood.
 */
/**
 * Where a product's documentation lives: a path on that product's own host.
 *
 * There is no `docs` entry in `brand.domains` — deliberately. A single docs
 * subdomain meant a product's own host was never where its documentation
 * lived: pebble's docs sat at docs.<domain>/pebble/* while
 * pebble.<domain>/docs/* redirected to them. One value cannot express "each
 * product serves its own", so the key is gone and the path is derived.
 *
 * Defaults to the marketing site, which carries the product docs. Pass a
 * service to get that product's: getDocsUrl("pebble") → https://pebble.…/docs.
 */
declare function getDocsUrl(service?: BrandService, path?: string): string;
/**
 * The origin publicAssetUrl() resolves against — for CSP directives. A page
 * that loads public assets (images, the MiSans subsets) must allow exactly
 * this origin, or the browser blocks the request with no error on the page:
 * font-src 'self' blocked every MiSans face on nebutra.com until 2026-09-26.
 */
declare function publicAssetOrigin(base?: string): string;
declare function publicAssetUrl(key: string, base?: string): string;
/**
 * Bare query flag that keeps a signed-in visitor on the marketing homepage
 * (`?home`, no value). Apex `/` without it is a product launcher.
 */
declare const MARKETING_HOME_PARAM = "home";
/**
 * Marketing homepage path. Always includes the `?home` skip — that is the
 * only signal landing honours. `getBrandOrigin("landing")` is the launcher.
 *
 * `defaultLocale` is the landing path locale that lives on `/` (today `en`).
 * Pass it from `@nebutra/i18n` so brand does not import the i18n package.
 */
declare function getMarketingHomePath(options?: {
    locale?: string;
    defaultLocale?: string;
}): string;
/** Absolute marketing homepage. Same contract as `getMarketingHomePath`. */
declare function getMarketingHomeUrl(options?: {
    locale?: string;
    defaultLocale?: string;
}): string;
/** Cookie parent domain from landing apex (e.g. `.example.com`). */
declare function getBrandCookieDomain(): string;
/**
 * Canonical base URL. NEXT_PUBLIC_SITE_URL only overrides landing.
 */
declare function getSiteUrl(service?: BrandService): string;
/** Production multi-app public URL map (dogfood brand.domains). */
declare function getBrandPublicUrls(): {
    readonly siteUrl: string;
    readonly appUrl: string;
    readonly apiUrl: string;
    readonly authUrl: string;
    readonly ssoUrl: string;
    readonly docsUrl: string;
    readonly routerUrl: string;
    readonly forgeUrl: string;
    readonly designUrl: string;
    readonly statusUrl: string;
    readonly openUrl: string;
    readonly studioUrl: string;
    readonly cdnUrl: string;
    readonly analyticsUrl: string;
    readonly pebbleUrl: string;
    readonly carinaUrl: string;
    readonly cookieDomain: string;
};
/**
 * Product mailbox derived from landing apex — rebrand-safe.
 * e.g. getBrandEmail("contact") → contact@example.com
 */
declare function getBrandEmail(localPart: string): string;
/** Default transactional From header: `Brand <noreply@apex>`. */
declare function getBrandMailFrom(): string;
interface SiteMetadataOptions {
    readonly service: BrandService;
    readonly title?: string;
    readonly description?: string;
}
/**
 * Returns a partial Next.js Metadata object suitable for spreading into a
 * layout.tsx export const metadata. Callers may override any field.
 */
declare function getSiteMetadata(opts: SiteMetadataOptions): Metadata;
interface OrganizationJsonLd {
    "@context": "https://schema.org";
    "@type": "Organization";
    "@id": string;
    name: string;
    alternateName: string;
    url: string;
    sameAs: string[];
    [key: string]: unknown;
}
interface WebSiteJsonLd {
    "@context": "https://schema.org";
    "@type": "WebSite";
    "@id": string;
    name: string;
    url: string;
    description: string;
    publisher: {
        "@id": string;
    };
    inLanguage: string[];
    [key: string]: unknown;
}
interface SoftwareApplicationJsonLd {
    "@context": "https://schema.org";
    "@type": "SoftwareApplication";
    name: string;
    applicationCategory: string;
    url: string;
    author: {
        "@id": string;
    };
    [key: string]: unknown;
}
interface FeedChannelMeta {
    title: string;
    link: string;
    description: string;
    feedUrl: string;
    language: string;
}
/**
 * Base Organization JSON-LD — company-specific fields
 * (foundingDate, address, contactPoint) are intentionally omitted here.
 * Merge them at the call site to avoid hard-coding values here.
 */
declare function buildOrganizationJsonLd(): OrganizationJsonLd;
declare function buildWebSiteJsonLd(): WebSiteJsonLd;
declare function buildSoftwareApplicationJsonLd(): SoftwareApplicationJsonLd;
/**
 * Returns a base PWA manifest derived from brand + colors.
 * background_color and theme_color use the palette's canonical hex values
 * (NOT CSS variables — service workers do not resolve var()).
 *
 * CONTRAST CAVEAT: theme_color = colors.primary["500"] assumes a dark
 * background context. If a rebrand sets a light primary, update this value.
 */
declare function buildPwaManifest(): MetadataRoute.Manifest;
/**
 * Returns the shared channel-level fields for RSS and Atom feeds.
 * Item-level links are built at the call site using the version string.
 */
declare function buildFeedChannelMeta(): FeedChannelMeta;

export { type BrandService, type FeedChannelMeta, MARKETING_HOME_PARAM, type OrganizationJsonLd, type SiteMetadataOptions, type SoftwareApplicationJsonLd, type WebSiteJsonLd, buildFeedChannelMeta, buildOrganizationJsonLd, buildPwaManifest, buildSoftwareApplicationJsonLd, buildWebSiteJsonLd, getBrandCookieDomain, getBrandEmail, getBrandMailFrom, getBrandOrigin, getBrandPublicUrls, getDocsUrl, getMarketingHomePath, getMarketingHomeUrl, getSiteMetadata, getSiteUrl, localhostFallback, missingPublicUrlMessage, publicAssetOrigin, publicAssetUrl };
