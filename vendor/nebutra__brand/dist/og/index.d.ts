import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Brand OG image template — props-driven, hex/rgba values only.
 *
 * IMPORTANT: Satori (used by next/og's ImageResponse) does NOT resolve
 * CSS custom properties (`var(--brand-primary)` etc.). All colors must be
 * passed as explicit hex or rgba values. The `colors` export from
 * `@nebutra/brand/metadata` is the authoritative source — callers must
 * import from there and pass the values as props. Do NOT add CSS vars here.
 *
 * Wordmark letterform GEOMETRY cannot be auto-generated from a name string.
 * The component renders the brand name as text; operators who need precise
 * wordmark letterforms must supply replacement SVGs via brand.config/assets/logo/.
 */
interface OgThemePalette {
    /** Background fill — must be explicit hex/rgba, not a CSS var */
    bg: string;
    /** Grid/rule color — rgba for transparency */
    grid: string;
    /** Primary glow color — rgba for transparency */
    glowA: string;
    /** Secondary glow color — rgba for transparency */
    glowB: string;
    /** Heading text color */
    title: string;
    /** Body/label text color — rgba for partial opacity */
    subtitle: string;
    /** Brand accent color — explicit hex */
    accent: string;
}
interface OgTemplateProps {
    /** Page or post title */
    title: string;
    /** Optional subtitle or description */
    subtitle?: string;
    /** Brand name to display in the eyebrow (from brand.name — no literal) */
    brandName: string;
    /** Theme palette with explicit hex/rgba values — no CSS vars */
    palette: OgThemePalette;
}
/**
 * Dark-theme palette, read from the brand colours (brand:apply's output).
 * The comments here used to name the source while the values had drifted
 * from it — bg was pre-House Slate while claiming to be neutral-950.
 */
declare const OG_PALETTE_DARK: OgThemePalette;
/**
 * Light-theme palette.
 */
declare const OG_PALETTE_LIGHT: OgThemePalette;
/**
 * OG image template for use with Satori / next/og ImageResponse.
 *
 * @example
 * ```tsx
 * import { colors, brand } from "@nebutra/brand/metadata";
 * import { OgTemplate, OG_PALETTE_DARK } from "@nebutra/brand/og";
 * import { ImageResponse } from "next/og";
 *
 * return new ImageResponse(
 *   <OgTemplate
 *     title="My Page"
 *     brandName={brand.name}
 *     palette={OG_PALETTE_DARK}
 *   />,
 *   { width: 1200, height: 630 }
 * );
 * ```
 */
declare function OgTemplate({ title, subtitle, brandName, palette }: OgTemplateProps): react_jsx_runtime.JSX.Element;

export { OG_PALETTE_DARK, OG_PALETTE_LIGHT, OgTemplate, type OgTemplateProps, type OgThemePalette };
