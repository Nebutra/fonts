import * as react_jsx_runtime from 'react/jsx-runtime';

type LogoVariant = "color" | "inverse" | "mono" | "en" | "zh" | "zh-en" | "horizontal-en" | "horizontal-zh" | "vertical-en" | "vertical-zh" | "horizontal-en-mono" | "horizontal-zh-mono" | "vertical-en-mono" | "vertical-zh-mono";
/**
 * Logo edition: classic (v1.0) or compliant (v2.0)
 *
 * - classic: 经典版，"毓"字更美观，用于用户体验场景 (App/网站/产品)
 * - compliant: 合规版，"毓"字符合商标规范，用于商务场景 (法律/商标/正式文件)
 */
type LogoEdition = "classic" | "compliant";
interface LogoProps {
    /**
     * Logo variant
     * @default "en" (Nebutra with English wordmark)
     */
    variant?: LogoVariant;
    /**
     * Logo edition
     * - "classic" (default): v1.0 经典版，更美观
     * - "compliant": v2.0 合规版，符合商标规范
     *
     * Mono combination variants automatically use compliant edition.
     * @default "classic"
     */
    edition?: LogoEdition;
    /**
     * Logo size (width in pixels)
     * @default 120
     */
    size?: number;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Invert colors for dark backgrounds.
     * When true, black becomes white (useful for dark mode).
     *
     * Note: For pure white logomark, use variant="inverse" instead.
     */
    inverted?: boolean;
}
/**
 * Resolve the CDN object for a logo variant + edition combination.
 * Mono combination variants always route to the compliant directory.
 * `public/` copies from `pnpm brand:sync` stay as seed, not consumption.
 */
declare function logoPublicSrc(variant: LogoVariant, edition: LogoEdition): string;
/**
 * Nebutra Logo Component
 *
 * Renders the official Nebutra brand logo from SVG assets (fixed VI fills).
 * Browser src is `https://cdn.nebutra.com/brand/logo{,-compliant}/…`.
 * `pnpm brand:sync` still copies seed files into each app `public/`.
 *
 * For product chrome that must recolor with Brand Package skins (roles.brand),
 * prefer LogomarkSVG / LogoEnSVG with default `text-brand-mark` instead of
 * raster VI color SVGs or `text-primary` (CTA / roles.action).
 *
 * @example
 * ```tsx
 * // Logomark only (square icon)
 * <Logo variant="inverse" size={40} />
 *
 * // Full logo with English wordmark
 * <Logo variant="en" size={150} />
 *
 * // Chinese wordmark
 * <Logo variant="zh" size={120} />
 * ```
 */
declare function Logo({ variant, edition, size, className, inverted, }: LogoProps): react_jsx_runtime.JSX.Element;
/**
 * Logomark only (the abstract icon without text)
 *
 * This uses the "color" or "inverse" variant which is just the icon.
 *
 * @example
 * ```tsx
 * <Logomark variant="inverse" size={32} />
 * ```
 */
declare function Logomark({ size, className, variant, edition, inverted, }: {
    size?: number;
    className?: string;
    variant?: "color" | "inverse" | "mono";
    edition?: LogoEdition;
    inverted?: boolean;
}): react_jsx_runtime.JSX.Element;
/**
 * Wordmark only (text "Nebutra" without the icon)
 *
 * Uses the "en" variant which has the full wordmark.
 * For icon + text, use Logo with variant="en".
 */
declare function Wordmark({ size, className, variant, edition, inverted, }: {
    size?: number;
    className?: string;
    variant?: "en" | "zh" | "zh-en";
    edition?: LogoEdition;
    inverted?: boolean;
}): react_jsx_runtime.JSX.Element;

export { Logo, type LogoEdition, type LogoProps, type LogoVariant, Logomark, Wordmark, Logo as default, logoPublicSrc };
