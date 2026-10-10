// src/metadata.ts
var brand = {
  name: "Nebutra",
  nameCn: "\u4E91\u6BD3\u667A\u80FD",
  nameFull: "\u65E0\u9521\u4E91\u6BD3\u667A\u80FD\u79D1\u6280\u6709\u9650\u516C\u53F8",
  nameFullEn: "Wuxi Nebutra Intelligence Technology Co., Ltd.",
  tagline: "Ship AI products, not boilerplate.",
  taglineCn: "AI\u539F\u751F\xB7\u5FEB\u901F\u51FA\u6D77\xB7\u5373\u523B\u4EA4\u4ED8",
  description: "Production-ready Next.js monorepo template for AI SaaS products. Auth, billing, multi-tenancy, AI services, design system, and enterprise infrastructure \u2014 pre-configured.",
  descriptionCn: "\u9762\u5411AI\u521B\u4E1A\u8005\u7684\u4E00\u4F53\u5316SaaS\u57FA\u7840\u8BBE\u65BD\u6A21\u677F\uFF0C\u8986\u76D6\u8BA4\u8BC1\u3001\u8BA1\u8D39\u3001\u591A\u79DF\u6237\u3001AI\u670D\u52A1\u4E0E\u8BBE\u8BA1\u7CFB\u7EDF\uFF0C\u5F00\u7BB1\u5373\u4EA7\u54C1",
  logo: "image",
  story: {
    concept: "Logo\u4EE5\u9996\u5B57\u6BCDN\u7684\u57FA\u7840\u9020\u578B\u6982\u5FF5\u4E3A\u4E3B\u8981\u8BBE\u8BA1\u6846\u67B6\uFF0C\u901A\u8FC7\u51E0\u4F55\u6B63\u8D1F\u7A7A\u95F4\u6784\u5EFA\u9690\u5F62'N'\uFF0C\u5F62\u6210\u8FD1\u4F3C\u516D\u8FB9\u5F62\u7684\u7A33\u5B9A\u7ED3\u6784",
    colorMeaning: "\u84DD\u7EFF\u6E10\u53D8\u4F53\u73B0\u672A\u6765\u611F\u4E0E\u79D1\u6280\u950B\u8292\uFF0C'\u4E91'\u4EE3\u8868\u4E91\u7AEF\u5E73\u53F0\uFF0C'\u6BD3'\u5BD3\u610F\u5B55\u80B2\u4E0E\u8F6C\u5316",
    values: ["AI Native", "Ship Fast", "Open by Default", "Global-Ready", "Enterprise-Grade"],
    missionStatement: "Help AI founders and SaaS teams go from idea to production 10x faster by providing the infrastructure layer they shouldn't have to build."
  },
  domains: {
    landing: "nebutra.com",
    app: "app.nebutra.com",
    api: "api.nebutra.com",
    auth: "auth.nebutra.com",
    sso: "sso.nebutra.com",
    studio: "studio.nebutra.com",
    cdn: "cdn.nebutra.com",
    router: "router.nebutra.com",
    forge: "forge.nebutra.com",
    design: "design.nebutra.com",
    status: "status.nebutra.com",
    open: "open.nebutra.com",
    admin: "admin.nebutra.com",
    analytics: "analytics.nebutra.com",
    pebble: "pebble.nebutra.com",
    carina: "carina.nebutra.com",
    kuanlan: "kuanlan.nebutra.com",
    kcq: "kcq.nebutra.com",
    origin: "origin.nebutra.com"
  },
  social: {
    twitter: "https://twitter.com/nebutra",
    github: "https://github.com/nebutra",
    discord: "https://discord.gg/nebutra",
    linkedin: "https://linkedin.com/company/nebutra"
  }
};
var colors = {
  primary: {
    "50": "#f0f4ff",
    "100": "#dbe4ff",
    "200": "#bac8ff",
    "300": "#91a7ff",
    "400": "#5c7cfa",
    "500": "#0033FE",
    "600": "#002ad4",
    "700": "#0021ab",
    "800": "#001882",
    "900": "#000f59",
    "950": "#000830"
  },
  accent: {
    "50": "#e6fff8",
    "100": "#b3ffec",
    "200": "#80ffe0",
    "300": "#4dfcd4",
    "400": "#1af7c8",
    "500": "#0BF1C3",
    "600": "#09c9a3",
    "700": "#07a183",
    "800": "#057963",
    "900": "#035143",
    "950": "#012923"
  },
  neutral: {
    "0": "#ffffff",
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e4e5e8",
    "300": "#d2d4d8",
    "400": "#9fa1a5",
    "500": "#717377",
    "600": "#515357",
    "700": "#3f4044",
    "800": "#26272a",
    "900": "#18191c",
    "950": "#0b0c0d"
  },
  white: "#FFFFFF",
  black: "#000000",
  gradient: {
    primary: "linear-gradient(135deg, #0033FE 0%, #00A2E9 50%, #0BF1C3 100%)",
    primaryReverse: "linear-gradient(135deg, #0BF1C3 0%, #00A2E9 50%, #0033FE 100%)",
    primaryVertical: "linear-gradient(180deg, #0033FE 0%, #00A2E9 50%, #0BF1C3 100%)",
    primaryRadial: "radial-gradient(circle, #0BF1C3 0%, #00A2E9 50%, #0033FE 100%)"
  },
  p3Overrides: {
    primary500: "color(display-p3 0.03 0.19 0.99)",
    accent500: "color(display-p3 0.07 0.94 0.79)"
  },
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#0033FE"
};
var typography = {
  fontFamily: {
    en: '"Geist", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    cn: '"MiSans", "PingFang SC", "Microsoft YaHei", sans-serif',
    sans: '"Geist", "MiSans", "PingFang SC", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
    display: '"DM Sans", "MiSans", "PingFang SC", sans-serif',
    heading: '"DM Sans", "MiSans", "PingFang SC", sans-serif'
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  letterSpacing: {
    display: "-0.04em",
    heading: "-0.03em",
    subheading: "-0.02em",
    body: "0em",
    caption: "0.01em",
    mono: "0em"
  },
  lineHeight: {
    none: 1,
    tight: 1.2,
    snug: 1.4,
    normal: 1.6,
    relaxed: 1.75,
    loose: 2
  }
};
var logoAssets = {
  classic: {
    default: "assets/logo/logo-color.svg",
    color: "assets/logo/logo-color.svg",
    inverse: "assets/logo/logo-inverse.svg",
    mono: "assets/logo/logo-mono.svg",
    en: "assets/logo/logo-en.svg",
    zh: "assets/logo/logo-zh.svg",
    zhEn: "assets/logo/logo-zh-en.svg",
    horizontalEn: "assets/logo/logo-horizontal-en.svg",
    horizontalZh: "assets/logo/logo-horizontal-zh.svg",
    verticalEn: "assets/logo/logo-vertical-en.svg",
    verticalZh: "assets/logo/logo-vertical-zh.svg"
  },
  compliant: {
    default: "assets/logo-compliant/logo-color.svg",
    color: "assets/logo-compliant/logo-color.svg",
    inverse: "assets/logo-compliant/logo-inverse.svg",
    mono: "assets/logo-compliant/logo-mono.svg",
    en: "assets/logo-compliant/logo-en.svg",
    zh: "assets/logo-compliant/logo-zh.svg",
    zhEn: "assets/logo-compliant/logo-zh-en.svg",
    horizontalEn: "assets/logo-compliant/logo-horizontal-en.svg",
    horizontalZh: "assets/logo-compliant/logo-horizontal-zh.svg",
    verticalEn: "assets/logo-compliant/logo-vertical-en.svg",
    verticalZh: "assets/logo-compliant/logo-vertical-zh.svg",
    horizontalEnMono: "assets/logo-compliant/logo-horizontal-en-mono.svg",
    horizontalZhMono: "assets/logo-compliant/logo-horizontal-zh-mono.svg",
    verticalEnMono: "assets/logo-compliant/logo-vertical-en-mono.svg",
    verticalZhMono: "assets/logo-compliant/logo-vertical-zh-mono.svg"
  }
};
var fontAssets = {
  poppins: {
    thin: "assets/fonts/poppins/Poppins-Thin.otf",
    thinItalic: "assets/fonts/poppins/Poppins-ThinItalic.otf",
    extraLight: "assets/fonts/poppins/Poppins-ExtraLight.otf",
    extraLightItalic: "assets/fonts/poppins/Poppins-ExtraLightItalic.otf",
    light: "assets/fonts/poppins/Poppins-Light.otf",
    lightItalic: "assets/fonts/poppins/Poppins-LightItalic.otf",
    regular: "assets/fonts/poppins/Poppins-Regular.otf",
    italic: "assets/fonts/poppins/Poppins-Italic.otf",
    medium: "assets/fonts/poppins/Poppins-Medium.otf",
    mediumItalic: "assets/fonts/poppins/Poppins-MediumItalic.otf",
    semiBold: "assets/fonts/poppins/Poppins-SemiBold.otf",
    semiBoldItalic: "assets/fonts/poppins/Poppins-SemiBoldItalic.otf",
    bold: "assets/fonts/poppins/Poppins-Bold.otf",
    boldItalic: "assets/fonts/poppins/Poppins-BoldItalic.otf",
    extraBold: "assets/fonts/poppins/Poppins-ExtraBold.otf",
    extraBoldItalic: "assets/fonts/poppins/Poppins-ExtraBoldItalic.otf",
    black: "assets/fonts/poppins/Poppins-Black.otf",
    blackItalic: "assets/fonts/poppins/Poppins-BlackItalic.otf"
  }
};
var faviconAssets = {
  ico: "assets/favicon/favicon.ico",
  svg: "assets/favicon/favicon.svg",
  apple: "assets/favicon/apple-touch-icon.png",
  android192: "assets/favicon/android-chrome-192x192.png",
  android512: "assets/favicon/android-chrome-512x512.png"
};
var ogImageDimensions = {
  default: {
    width: 1200,
    height: 630
  },
  twitter: {
    width: 1200,
    height: 600
  },
  square: {
    width: 1200,
    height: 1200
  }
};

// src/metadata-helpers.ts
function getBrandOrigin(service) {
  const host = brand.domains[service];
  if (!host?.trim()) {
    throw new Error(`brand.domains.${String(service)} is empty \u2014 run brand:apply`);
  }
  return `https://${host.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
}
function getDocsUrl(service = "landing", path = "") {
  const suffix = path.replace(/^\/+/, "");
  return `${getBrandOrigin(service)}/docs${suffix ? `/${suffix}` : ""}`;
}
function publicAssetUrl(key, base) {
  const origin = (base || process.env.NEXT_PUBLIC_R2_PUBLIC_URL || process.env.R2_PUBLIC_URL || getBrandOrigin("cdn")).replace(/\/+$/, "");
  const path = key.replace(/^\/+/, "");
  if (!path || path.includes("..") || path.includes("\\")) {
    throw new Error("invalid_public_asset_key");
  }
  return `${origin}/${path}`;
}
var MARKETING_HOME_PARAM = "home";
function getMarketingHomePath(options) {
  const defaultLocale = options?.defaultLocale?.trim() || "en";
  const locale = options?.locale?.trim();
  const path = locale && locale !== defaultLocale ? `/${locale}` : "/";
  return path === "/" ? `/?${MARKETING_HOME_PARAM}` : `${path}?${MARKETING_HOME_PARAM}`;
}
function getMarketingHomeUrl(options) {
  const origin = getBrandOrigin("landing");
  return new URL(getMarketingHomePath(options), `${origin}/`).toString();
}
function getBrandCookieDomain() {
  const apex = brand.domains.landing.replace(/^https?:\/\//, "").replace(/\/+$/, "");
  if (!apex) return "";
  return apex.startsWith(".") ? apex : `.${apex}`;
}
function getSiteUrl(service = "landing") {
  if (service === "landing") {
    const envUrl = process.env["NEXT_PUBLIC_SITE_URL"];
    if (envUrl && envUrl.trim() !== "") {
      return envUrl.trim().replace(/\/+$/, "");
    }
  }
  return getBrandOrigin(service);
}
function getBrandPublicUrls() {
  return {
    siteUrl: getBrandOrigin("landing"),
    appUrl: getBrandOrigin("app"),
    apiUrl: getBrandOrigin("api"),
    authUrl: getBrandOrigin("auth"),
    ssoUrl: getBrandOrigin("sso"),
    docsUrl: getDocsUrl(),
    routerUrl: getBrandOrigin("router"),
    forgeUrl: getBrandOrigin("forge"),
    designUrl: getBrandOrigin("design"),
    statusUrl: getBrandOrigin("status"),
    openUrl: getBrandOrigin("open"),
    studioUrl: getBrandOrigin("studio"),
    cdnUrl: getBrandOrigin("cdn"),
    analyticsUrl: getBrandOrigin("analytics"),
    pebbleUrl: getBrandOrigin("pebble"),
    carinaUrl: getBrandOrigin("carina"),
    cookieDomain: getBrandCookieDomain()
  };
}
function getBrandEmail(localPart) {
  const apex = brand.domains.landing.replace(/^https?:\/\//, "").replace(/\/+$/, "").replace(/^www\./, "");
  if (!apex) {
    throw new Error("brand.domains.landing is empty \u2014 run brand:apply");
  }
  const local = localPart.trim().replace(/@.*$/, "");
  if (!local) {
    throw new Error("getBrandEmail requires a non-empty local part");
  }
  return `${local}@${apex}`;
}
function getBrandMailFrom() {
  return `${brand.name} <${getBrandEmail("noreply")}>`;
}
function getSiteMetadata(opts) {
  const siteUrl = getSiteUrl(opts.service);
  const title = opts.title ?? brand.name;
  const description = opts.description ?? brand.tagline;
  return {
    applicationName: brand.name,
    title: {
      default: title,
      template: `%s \u2014 ${brand.name}`
    },
    description,
    metadataBase: new URL(siteUrl),
    authors: [{ name: brand.name, url: siteUrl }],
    creator: brand.name,
    publisher: brand.name,
    openGraph: {
      type: "website",
      siteName: brand.name,
      title,
      description,
      url: siteUrl
    },
    twitter: {
      card: "summary_large_image",
      site: brand.social.twitter.replace("https://twitter.com/", "@"),
      title,
      description
    }
  };
}
function buildOrganizationJsonLd() {
  const siteUrl = getSiteUrl("landing");
  const id = `${siteUrl}/#organization`;
  const sameAs = [
    brand.social.github,
    brand.social.twitter.replace("https://twitter.com/", "https://x.com/"),
    brand.social.linkedin,
    brand.social.discord
  ].filter((url) => url.trim() !== "");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": id,
    name: brand.name,
    alternateName: brand.nameCn,
    url: siteUrl,
    sameAs
  };
}
function buildWebSiteJsonLd() {
  const siteUrl = getSiteUrl("landing");
  const org = buildOrganizationJsonLd();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: brand.name,
    url: siteUrl,
    description: brand.tagline,
    publisher: { "@id": org["@id"] },
    inLanguage: ["en", "zh"]
  };
}
function buildSoftwareApplicationJsonLd() {
  const org = buildOrganizationJsonLd();
  const githubPath = brand.social.github.replace("https://github.com/", "");
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${brand.name} Sailor`,
    applicationCategory: "DeveloperApplication",
    url: `https://github.com/${githubPath}`,
    author: { "@id": org["@id"] }
  };
}
function buildPwaManifest() {
  return {
    name: `${brand.name} \u2014 ${brand.tagline}`,
    short_name: brand.name,
    description: brand.description,
    start_url: "/",
    display: "standalone",
    background_color: colors.neutral["950"],
    theme_color: colors.primary["500"],
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
function buildFeedChannelMeta() {
  const siteUrl = getSiteUrl("landing");
  return {
    title: `${brand.name} Changelog`,
    link: `${siteUrl}/changelog`,
    description: brand.tagline,
    feedUrl: `${siteUrl}/api/changelog`,
    language: "en-us"
  };
}

// src/components/Logo.tsx
import { jsx } from "react/jsx-runtime";
var COMPLIANT_ONLY_VARIANTS = /* @__PURE__ */ new Set([
  "horizontal-en-mono",
  "horizontal-zh-mono",
  "vertical-en-mono",
  "vertical-zh-mono"
]);
function logoPublicSrc(variant, edition) {
  const dir = edition === "compliant" || COMPLIANT_ONLY_VARIANTS.has(variant) ? "brand/logo-compliant" : "brand/logo";
  return publicAssetUrl(`${dir}/logo-${variant}.svg`);
}
var ASPECT_RATIOS = {
  color: 1.07,
  // 535.71 x 500 ≈ 1.07
  inverse: 1.07,
  // 535.71 x 500 ≈ 1.07
  mono: 1.07,
  // Same as color/inverse
  en: 5.25,
  // 544.21 x 103.74 ≈ 5.25 (horizontal text)
  zh: 3.5,
  // Estimated for Chinese wordmark
  "zh-en": 4,
  // Estimated for bilingual
  "horizontal-en": 5.25,
  // Similar to "en"
  "horizontal-zh": 4.5,
  // Estimated
  "vertical-en": 0.8,
  // Taller than wide
  "vertical-zh": 0.8,
  // Taller than wide
  "horizontal-en-mono": 5.25,
  // Same as horizontal-en
  "horizontal-zh-mono": 4.5,
  // Same as horizontal-zh
  "vertical-en-mono": 0.8,
  // Same as vertical-en
  "vertical-zh-mono": 0.8
  // Same as vertical-zh
};
function TextWordmark({ height, className }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className,
      style: {
        display: "inline-block",
        fontFamily: "var(--font-heading, inherit)",
        fontWeight: 500,
        fontSize: Math.round(height * 0.9),
        lineHeight: 1,
        letterSpacing: "-0.02em",
        whiteSpace: "nowrap"
      },
      children: brand.name
    }
  );
}
function TextLogomark({ size, className }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "aria-label": brand.name,
      role: "img",
      className,
      style: {
        display: "inline-grid",
        placeItems: "center",
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.24),
        border: "1.5px solid currentColor",
        fontFamily: "var(--font-heading, inherit)",
        fontWeight: 500,
        fontSize: Math.round(size * 0.55),
        lineHeight: 1
      },
      children: brand.name.charAt(0).toUpperCase()
    }
  );
}
function Logo({
  variant = "en",
  edition = "classic",
  size = 120,
  className,
  inverted = false
}) {
  const aspectRatio = ASPECT_RATIOS[variant];
  const height = Math.round(size / aspectRatio);
  if (brand.logo === "wordmark") return /* @__PURE__ */ jsx(TextWordmark, { height, className });
  const src = logoPublicSrc(variant, edition);
  const filterStyle = inverted ? { filter: "brightness(0) invert(1)" } : {};
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt: brand.name,
      width: size,
      height,
      className,
      style: { width: size, height, ...filterStyle }
    }
  );
}
function Logomark({
  size = 32,
  className,
  variant = "color",
  edition = "classic",
  inverted = false
}) {
  if (brand.logo === "wordmark") return /* @__PURE__ */ jsx(TextLogomark, { size, className });
  const src = logoPublicSrc(variant, edition);
  const filterStyle = inverted && variant !== "inverse" ? { filter: "brightness(0) invert(1)" } : {};
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt: brand.name,
      width: size,
      height: size,
      className,
      style: { width: size, height: size, ...filterStyle }
    }
  );
}
function Wordmark({
  size = 100,
  className,
  variant = "en",
  edition = "classic",
  inverted = false
}) {
  const aspectRatio = ASPECT_RATIOS[variant];
  const height = Math.round(size / aspectRatio);
  if (brand.logo === "wordmark") return /* @__PURE__ */ jsx(TextWordmark, { height, className });
  const src = logoPublicSrc(variant, edition);
  const filterStyle = inverted ? { filter: "brightness(0) invert(1)" } : {};
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt: brand.name,
      width: size,
      height,
      className,
      style: { width: size, height, ...filterStyle }
    }
  );
}

// src/guidelines/color.ts
function rgbOf(hex) {
  const n = Number.parseInt(hex.replace("#", ""), 16);
  return { r: n >> 16 & 255, g: n >> 8 & 255, b: n & 255 };
}
function hslOf(hex) {
  const { r, g, b } = rgbOf(hex);
  const [rr, gg, bb] = [r / 255, g / 255, b / 255];
  const max = Math.max(rr, gg, bb);
  const min = Math.min(rr, gg, bb);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === rr) h = (gg - bb) / d % 6;
    else if (max === gg) h = (bb - rr) / d + 2;
    else h = (rr - gg) / d + 4;
  }
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return { h: Math.round((h * 60 + 360) % 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
function stopsOf(css) {
  return [...css.matchAll(/(#[0-9a-fA-F]{6})\s+(\d+)%/g)].map(
    ([, color, position]) => Number(position) === 50 ? { color, position: 50, note: "OKLab midpoint" } : { color, position: Number(position) }
  );
}
var nebutraBlue = {
  name: "\u4E91\u6BD3\u84DD",
  nameEn: "Nebutra Blue",
  /** Color values */
  hex: colors.primary[500],
  rgb: rgbOf(colors.primary[500]),
  hsl: hslOf(colors.primary[500]),
  /** Print color values (if needed) */
  cmyk: { c: 100, m: 80, y: 0, k: 0 },
  /** Semantic meaning */
  meaning: "\u8C61\u5F81\u79D1\u6280\u4E0E\u4FE1\u4EFB\uFF0C\u4F53\u73B0\u521B\u65B0\u3001\u53EF\u9760\u4E0E\u65E0\u9650\u6F5C\u529B",
  /** Usage */
  usage: ["\u4E3B\u8981\u54C1\u724C\u8272", "\u6807\u5FD7\u4E3B\u8272", "\u91CD\u8981\u6309\u94AE/CTA", "\u6807\u9898\u5F3A\u8C03", "\u94FE\u63A5\u989C\u8272"]
};
var nebutraCyan = {
  name: "\u4E91\u6BD3\u9752",
  nameEn: "Nebutra Cyan",
  /** Color values */
  hex: colors.accent[500],
  rgb: rgbOf(colors.accent[500]),
  hsl: hslOf(colors.accent[500]),
  /** Print color values (if needed) */
  cmyk: { c: 55, m: 0, y: 35, k: 0 },
  /** Semantic meaning */
  meaning: "\u8C61\u5F81\u4FE1\u606F\u7684\u6E05\u6670\u4E0E\u7B97\u6CD5\u7684\u7075\u52A8\uFF0C\u4F53\u73B0\u4ECE\u539F\u59CB\u6570\u636E\u5230\u667A\u6167\u4EA7\u54C1\u7684\u8F6C\u5316\u8DEF\u5F84",
  /** Usage */
  usage: ["\u8F85\u52A9\u54C1\u724C\u8272", "\u6E10\u53D8\u7EC8\u6B62\u8272", "\u4EA4\u4E92\u53CD\u9988", "\u6210\u529F\u72B6\u6001", "\u6570\u636E\u53EF\u89C6\u5316"]
};
var brandGradient = {
  /** Primary gradient (135°) - Logo标准渐变；中点为 OKLab 感知中点，控中段避免脏灰 */
  primary: {
    css: colors.gradient.primary,
    angle: 135,
    stops: stopsOf(colors.gradient.primary),
    usage: "Logo\u3001Hero\u533A\u57DF\u3001VI \u54C1\u724C\u8D44\u4EA7\uFF08\u4EA7\u54C1 CTA \u7528 solid primary\uFF09"
  },
  /** Reverse gradient */
  reverse: {
    css: colors.gradient.primaryReverse,
    angle: 135,
    stops: stopsOf(colors.gradient.primaryReverse),
    usage: "\u6B21\u8981\u5143\u7D20\u3001hover\u72B6\u6001"
  },
  /** Vertical gradient */
  vertical: {
    css: colors.gradient.primaryVertical,
    angle: 180,
    stops: stopsOf(colors.gradient.primaryVertical),
    usage: "\u5782\u76F4\u5E03\u5C40\u5143\u7D20\u3001\u9875\u9762\u5206\u5272"
  },
  /** Radial gradient */
  radial: {
    css: colors.gradient.primaryRadial,
    type: "radial",
    stops: stopsOf(colors.gradient.primaryRadial),
    usage: "\u80CC\u666F\u5149\u6655\u3001\u7126\u70B9\u6548\u679C"
  }
};
var neutralColors = {
  white: {
    name: "\u767D",
    nameEn: "White",
    hex: "#FFFFFF",
    rgb: { r: 255, g: 255, b: 255 },
    usage: "\u80CC\u666F\u3001\u6587\u5B57\u53CD\u767D"
  },
  black: {
    name: "\u9ED1",
    nameEn: "Black",
    hex: "#000000",
    rgb: { r: 0, g: 0, b: 0 },
    usage: "\u6B63\u6587\u6587\u5B57\u3001\u58A8\u7A3F\u6807\u5FD7"
  }
};
var colorProhibitedUses = [
  {
    id: "high-saturation-overlay",
    name: "\u9AD8\u9971\u548C\u5EA6\u80CC\u666F\u4E0E\u989C\u8272\u91CD\u53E0",
    description: "\u7981\u7528\u9AD8\u9971\u548C\u5EA6\u80CC\u666F\u4E0E\u989C\u8272\u91CD\u53E0\uFF0C\u907F\u514D\u989C\u8272\u8FC7\u4E8E\u523A\u773C\uFF0C\u5F71\u54CD\u54C1\u724C\u5F62\u8C61",
    example: "\u4E0D\u8981\u5728\u9AD8\u9971\u548C\u5EA6\u7684\u7EA2\u3001\u6A59\u3001\u9EC4\u7B49\u80CC\u666F\u4E0A\u4F7F\u7528\u54C1\u724C\u8272"
  },
  {
    id: "high-brightness-overlay",
    name: "\u660E\u5EA6\u8FC7\u9AD8\u7684\u91CD\u53E0\u989C\u8272",
    description: "\u7981\u7528\u660E\u5EA6\u8FC7\u9AD8\u7684\u91CD\u53E0\u989C\u8272\uFF0C\u907F\u514D\u5F71\u54CD\u5185\u5BB9\u7684\u8BC6\u522B\u6027",
    example: "\u4E0D\u8981\u5C06\u6D45\u8272\u54C1\u724C\u8272\u653E\u5728\u6D45\u8272\u80CC\u666F\u4E0A"
  },
  {
    id: "modify-brand-colors",
    name: "\u4FEE\u6539\u54C1\u724C\u6807\u51C6\u8272",
    description: "\u7981\u6B62\u8C03\u6574\u54C1\u724C\u8272\u7684\u8272\u76F8\u3001\u9971\u548C\u5EA6\u6216\u660E\u5EA6",
    example: "\u4E0D\u8981\u5C06\u4E91\u6BD3\u84DD\u8C03\u6210\u7D2B\u8272\u6216\u6D45\u84DD"
  },
  {
    id: "non-brand-gradient",
    name: "\u975E\u54C1\u724C\u6E10\u53D8",
    description: "\u7981\u6B62\u4F7F\u7528\u975E\u54C1\u724C\u6807\u51C6\u7684\u6E10\u53D8\u7EC4\u5408",
    example: "\u4E0D\u8981\u5C06\u4E91\u6BD3\u84DD\u4E0E\u5176\u4ED6\u975E\u54C1\u724C\u8272\u8FDB\u884C\u6E10\u53D8"
  }
];
var allowedColorCombinations = [
  {
    name: "\u54C1\u724C\u6E10\u53D8\u80CC\u666F + \u767D\u8272\u6587\u5B57",
    background: brandGradient.primary.css,
    foreground: "#FFFFFF",
    contrast: "AAA"
  },
  {
    name: "\u767D\u8272\u80CC\u666F + \u4E91\u6BD3\u84DD\u6587\u5B57",
    background: "#FFFFFF",
    foreground: "#0033FE",
    contrast: "AAA"
  },
  {
    name: "\u6DF1\u8272\u80CC\u666F + \u4E91\u6BD3\u9752\u5F3A\u8C03",
    background: "#000000",
    foreground: "#0BF1C3",
    contrast: "AAA"
  },
  {
    name: "\u4E91\u6BD3\u84DD\u80CC\u666F + \u767D\u8272\u6587\u5B57",
    background: "#0033FE",
    foreground: "#FFFFFF",
    contrast: "AAA"
  }
];
var nebutraBlueScale = colors.primary;
var nebutraCyanScale = colors.accent;
var nebutraNeutralScale = {
  50: colors.neutral[50],
  100: colors.neutral[100],
  200: colors.neutral[200],
  300: colors.neutral[300],
  400: colors.neutral[400],
  500: colors.neutral[500],
  600: colors.neutral[600],
  700: colors.neutral[700],
  800: colors.neutral[800],
  900: colors.neutral[900],
  950: colors.neutral[950]
};
var semanticColors = {
  // Surface colors
  surface: {
    light: {
      default: nebutraNeutralScale[50],
      subtle: nebutraNeutralScale[100],
      muted: nebutraNeutralScale[200]
    },
    dark: {
      default: nebutraNeutralScale[950],
      subtle: nebutraNeutralScale[900],
      muted: nebutraNeutralScale[800]
    }
  },
  // Text colors
  text: {
    light: {
      primary: nebutraNeutralScale[900],
      secondary: nebutraNeutralScale[600],
      muted: nebutraNeutralScale[400],
      inverse: "#ffffff"
    },
    dark: {
      primary: nebutraNeutralScale[50],
      secondary: nebutraNeutralScale[300],
      muted: nebutraNeutralScale[500],
      inverse: nebutraNeutralScale[900]
    }
  },
  // Border colors
  border: {
    light: {
      default: nebutraNeutralScale[200],
      subtle: nebutraNeutralScale[100],
      strong: nebutraNeutralScale[300]
    },
    dark: {
      default: nebutraNeutralScale[800],
      subtle: nebutraNeutralScale[900],
      strong: nebutraNeutralScale[700]
    }
  },
  // Brand emphasis
  brand: {
    primary: nebutraBlueScale[500],
    primaryHover: nebutraBlueScale[600],
    primaryActive: nebutraBlueScale[700],
    accent: nebutraCyanScale[500],
    accentHover: nebutraCyanScale[600],
    accentActive: nebutraCyanScale[700]
  }
};
var generateColorScale = (baseHex) => {
  if (baseHex === "#0033FE") return nebutraBlueScale;
  if (baseHex === "#0BF1C3") return nebutraCyanScale;
  return {
    50: baseHex,
    100: baseHex,
    200: baseHex,
    300: baseHex,
    400: baseHex,
    500: baseHex,
    600: baseHex,
    700: baseHex,
    800: baseHex,
    900: baseHex,
    950: baseHex
  };
};

// src/components/LogoSVG.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var LOGO_MARK_CLASS = "text-brand-mark";
function mergeLogoClass(className) {
  return className ? `${LOGO_MARK_CLASS} ${className}` : LOGO_MARK_CLASS;
}
var LOGOMARK_PATH = "M518.13,184.13c-12.15-21.05-29.76-37.95-50.42-49.37c0.53-23.73-5.29-47.58-17.52-68.75l-0.14-0.25c-22.88-39.63-65.11-64.6-110.74-65.72C338.93,0.02,338.55,0,338.17,0h-1.77h-0.25H199.87c-46.89,0-90.58,25.23-114.02,65.83L17.58,184.07c-23.45,40.61-23.45,91.06,0,131.66C29.74,336.78,47.34,353.69,68,365.1c-0.56,23.78,5.28,47.68,17.53,68.91l0.13,0.22c23.37,40.48,66.92,65.68,113.66,65.77c0.09,0,0.17,0,0.26,0c1.86,0,3.71-0.05,5.56-0.13h130.7c46.89,0,90.58-25.23,114.02-65.83l68.26-118.24C541.58,275.19,541.58,224.74,518.13,184.13z M279.32,473.01c13.65-10.39,25.34-23.48,34.17-38.76l102.56-177.57l34.14-59.1c6.16-10.67,10.69-22.03,13.61-33.7c12.53,8.68,23.24,20.09,31.08,33.68c18.66,32.33,18.66,72.49,0,104.81l-68.26,118.24c-18.66,32.33-53.44,52.41-90.77,52.41H279.32z M108.77,420.56c-7.92-13.72-12.46-28.85-13.65-44.2c-0.24-3.1-0.34-6.22-0.31-9.33c8.79,8.47,20.26,13.61,32.79,14.47c1.24,0.09,2.5,0.13,3.76,0.13h75.97l60.51-104.81l18.47,31.99l4.01,6.95c1.21,2.09,2.54,4.08,3.98,5.95c2.87,3.73,6.17,7.01,9.82,9.79c8.89,6.78,19.83,10.58,31.54,10.68l-45.42,78.64c-14.76,25.56-39.6,43.43-67.81,49.78c-5.54,1.25-11.21,2.05-16.97,2.37c-1.95,0.11-3.91,0.18-5.88,0.18c-0.07,0-0.14,0-0.21,0c-3.13-0.01-6.24-0.17-9.33-0.45c-33.59-3.1-64.1-22.39-81.14-51.92L108.77,420.56z M199.87,26.85h56.7c-13.72,10.41-25.48,23.55-34.35,38.9l-67.45,116.78c-0.34,0.54-0.67,1.09-0.99,1.64L85.57,302.33c-0.35,0.61-0.68,1.22-1.01,1.83c-5.65,10.13-9.85,20.84-12.62,31.85c-12.55-8.68-23.26-20.1-31.11-33.7c-18.66-32.33-18.66-72.49,0-104.81L109.1,79.26C127.77,46.93,162.55,26.85,199.87,26.85z M426.94,79.44c7.9,13.68,12.44,28.77,13.64,44.06c0.25,3.14,0.36,6.29,0.32,9.44c-9.22-8.91-21.4-14.14-34.65-14.6c-0.64-0.02-1.29-0.04-1.93-0.04h-0.21h-75.76l-60.51,104.81l-18.46-31.98l-4.02-6.96c-1.21-2.09-2.54-4.08-3.98-5.95c-2.87-3.73-6.17-7.01-9.82-9.8c-8.87-6.76-19.78-10.57-31.46-10.68l45.38-78.57c14.75-25.54,39.55-43.4,67.72-49.76c5.54-1.25,11.22-2.06,16.97-2.39c1.98-0.11,3.97-0.18,5.96-0.18c0.07,0,0.13,0,0.2,0c3.11,0.01,6.19,0.16,9.25,0.44c33.62,3.08,64.16,22.38,81.2,51.9L426.94,79.44z";
function LogomarkSVG({
  className,
  width = 32,
  height = 32,
  "aria-label": ariaLabel
}) {
  const mergedClass = mergeLogoClass(className);
  if (ariaLabel) {
    return /* @__PURE__ */ jsx2(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 535.71 500",
        width,
        height,
        className: mergedClass,
        "aria-label": ariaLabel,
        role: "img",
        fill: "currentColor",
        children: /* @__PURE__ */ jsx2("path", { d: LOGOMARK_PATH })
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 535.71 500",
      width,
      height,
      className: mergedClass,
      "aria-hidden": "true",
      role: "img",
      fill: "currentColor",
      children: /* @__PURE__ */ jsx2("path", { d: LOGOMARK_PATH })
    }
  );
}
function WordmarkPaths() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M78.69,102.73H67.76c-3.87,0-7.47-1.96-9.56-5.21L18.27,35.5v55.86c0,6.28-5.09,11.37-11.37,11.37H0V0h10.93\n        c3.87,0,7.47,1.96,9.56,5.21l39.94,62.01V11.37C60.43,5.09,65.52,0,71.8,0h6.89V102.73z"
      }
    ),
    /* @__PURE__ */ jsx2("rect", { x: "102.92", y: "53.18", width: "66.72", height: "18.27" }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M147.44,80.28c-4.3,3.7-10.07,5.73-16.31,5.07c-9.76-1.04-17.69-8.78-18.93-18.52\n        c-1.78-14.01,10.06-25.86,24.08-24.06c9.61,1.23,17.29,8.97,18.47,18.58c0.44,3.58-0.02,7-1.16,10.1h18.89\n        c0.46-2.41,0.71-4.88,0.71-7.42c0-22.91-19.49-41.34-42.76-39.6C111,25.89,95.33,41.56,93.87,60.98\n        c-1.75,23.27,16.69,42.76,39.6,42.76c14.91,0,27.92-8.26,34.71-20.45l-7.81-4.33C156.21,76.65,151.05,77.18,147.44,80.28z"
      }
    ),
    /* @__PURE__ */ jsx2("path", { d: "M205.06,102.73h-6.89c-6.28,0-11.37-5.09-11.37-11.37V0h6.89c6.28,0,11.37,5.09,11.37,11.37V102.73z" }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M226.5,103.74c-21.9,0-39.71-17.81-39.71-39.71s17.81-39.71,39.71-39.71s39.71,17.81,39.71,39.71\n        S248.4,103.74,226.5,103.74z M226.5,42.58c-11.83,0-21.45,9.62-21.45,21.45c0,11.83,9.62,21.45,21.45,21.45\n        c11.82,0,21.45-9.62,21.45-21.45C247.95,52.2,238.33,42.58,226.5,42.58z"
      }
    ),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M315.89,103.74c-19.34,0.33-35.17-15.84-35.17-35.18V24.32h6.89c6.28,0,11.37,5.09,11.37,11.37v33.08\n        c0,8.83,6.85,16.36,15.68,16.7c9.28,0.35,16.94-7.09,16.94-16.29V35.69c0-6.28,5.09-11.37,11.37-11.37h6.89v44.85\n        C349.86,88.03,334.67,103.41,315.89,103.74z"
      }
    ),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M403.08,102.73c-20.83,0-37.77-16.95-37.77-37.77V11.37C365.3,5.09,370.4,0,376.68,0h6.89v64.96\n        c0,8.22,5.11,15.26,12.31,18.13c4.34,1.73,7.2,5.9,7.2,10.57V102.73z"
      }
    ),
    /* @__PURE__ */ jsx2("path", { d: "M391.71,44.44h-17.27V26.17h28.64v6.89C403.08,39.35,397.99,44.44,391.71,44.44z" }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M436.06,102.74h-6.89c-6.28,0-11.37-5.09-11.37-11.37V65.35c0-22.63,18.41-41.03,41.03-41.03v8.85\n        c0,4.84-3.08,9.11-7.63,10.74c-8.81,3.14-15.13,11.57-15.13,21.45V102.74z"
      }
    ),
    /* @__PURE__ */ jsx2("path", { d: "M544.21,102.73h-6.89c-6.28,0-11.37-5.09-11.37-11.37V64.03h18.27V102.73z" }),
    /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M504.5,103.74c-21.9,0-39.71-17.81-39.71-39.71s17.81-39.71,39.71-39.71c21.9,0,39.71,17.81,39.71,39.71\n        S526.4,103.74,504.5,103.74z M504.5,42.58c-11.83,0-21.45,9.62-21.45,21.45c0,11.83,9.62,21.45,21.45,21.45\n        c11.82,0,21.45-9.62,21.45-21.45C525.94,52.2,516.32,42.58,504.5,42.58z"
      }
    )
  ] });
}
function WordmarkEnSVG({
  className,
  style,
  width = 150,
  height,
  "aria-label": ariaLabel
}) {
  const computedHeight = height ?? Math.round(width * 103.74 / 544.21);
  const mergedClass = mergeLogoClass(className);
  if (ariaLabel) {
    return /* @__PURE__ */ jsx2(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 544.21 103.74",
        width,
        height: computedHeight,
        className: mergedClass,
        style,
        "aria-label": ariaLabel,
        role: "img",
        fill: "currentColor",
        children: /* @__PURE__ */ jsx2(WordmarkPaths, {})
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 544.21 103.74",
      width,
      height: computedHeight,
      className: mergedClass,
      style,
      "aria-hidden": "true",
      role: "img",
      fill: "currentColor",
      children: /* @__PURE__ */ jsx2(WordmarkPaths, {})
    }
  );
}
function layoutLogoEn(width, gap) {
  const logomarkAspect = 535.71 / 500;
  const wordmarkAspect = 544.21 / 103.74;
  const h = Math.round(width / (logomarkAspect + gap / width + wordmarkAspect));
  const logomarkW = Math.round(h * logomarkAspect);
  const wordmarkW = Math.round(h * wordmarkAspect);
  const totalW = logomarkW + gap + wordmarkW;
  return { h, logomarkW, wordmarkW, totalW };
}
function LogoEnSVG({
  className,
  width = 160,
  gap = 12,
  "aria-label": ariaLabel
}) {
  const { h, logomarkW, wordmarkW, totalW } = layoutLogoEn(width, gap);
  const mergedClass = mergeLogoClass(className);
  const children = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("g", { transform: `scale(${logomarkW / 535.71}, ${h / 500})`, fill: "currentColor", children: /* @__PURE__ */ jsx2("path", { d: LOGOMARK_PATH }) }),
    /* @__PURE__ */ jsx2(
      "g",
      {
        transform: `translate(${logomarkW + gap}, 0) scale(${wordmarkW / 544.21}, ${h / 103.74})`,
        fill: "currentColor",
        children: /* @__PURE__ */ jsx2(WordmarkPaths, {})
      }
    )
  ] });
  if (ariaLabel) {
    return /* @__PURE__ */ jsx2(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${totalW} ${h}`,
        width: totalW,
        height: h,
        className: mergedClass,
        "aria-label": ariaLabel,
        role: "img",
        children
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${totalW} ${h}`,
      width: totalW,
      height: h,
      className: mergedClass,
      "aria-hidden": "true",
      role: "img",
      children
    }
  );
}
var logoColorGradSeq = 0;
function LogoEnColorSVG({
  className,
  width = 160,
  gap = 12,
  "aria-label": ariaLabel
}) {
  const { h, logomarkW, wordmarkW, totalW } = layoutLogoEn(width, gap);
  logoColorGradSeq += 1;
  const gradId = `nebutra-logo-en-color-grad-${logoColorGradSeq}`;
  const children = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("linearGradient", { id: gradId, gradientUnits: "objectBoundingBox", x1: "0", y1: "0", x2: "1", y2: "1", children: brandGradient.primary.stops.map((stop) => /* @__PURE__ */ jsx2("stop", { offset: stop.position / 100, stopColor: stop.color }, stop.position)) }) }),
    /* @__PURE__ */ jsx2("g", { transform: `scale(${logomarkW / 535.71}, ${h / 500})`, children: /* @__PURE__ */ jsx2("path", { d: LOGOMARK_PATH, fill: `url(#${gradId})` }) }),
    /* @__PURE__ */ jsx2(
      "g",
      {
        transform: `translate(${logomarkW + gap}, 0) scale(${wordmarkW / 544.21}, ${h / 103.74})`,
        fill: "#060307",
        children: /* @__PURE__ */ jsx2(WordmarkPaths, {})
      }
    )
  ] });
  if (ariaLabel) {
    return /* @__PURE__ */ jsx2(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${totalW} ${h}`,
        width: totalW,
        height: h,
        className,
        "aria-label": ariaLabel,
        role: "img",
        children
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${totalW} ${h}`,
      width: totalW,
      height: h,
      className,
      "aria-hidden": "true",
      role: "img",
      children
    }
  );
}

// src/components/BrandLockup.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function BrandMark({ size = 32, className }) {
  if (brand.logo === "wordmark") return /* @__PURE__ */ jsx3(Logomark, { size, className });
  return /* @__PURE__ */ jsxs2(
    "span",
    {
      className: ["inline-flex shrink-0", className].filter(Boolean).join(" "),
      style: { width: size, height: size },
      "data-brand-asset": "mark",
      children: [
        /* @__PURE__ */ jsx3(
          "img",
          {
            src: logoPublicSrc("color", "classic"),
            alt: "",
            "aria-hidden": true,
            width: size,
            height: size,
            draggable: false,
            className: "block h-full w-full dark:hidden"
          }
        ),
        /* @__PURE__ */ jsx3(
          LogomarkSVG,
          {
            width: size,
            height: size,
            className: "hidden h-full w-full !text-white dark:block"
          }
        )
      ]
    }
  );
}
function BrandWordmark({
  height = 24,
  className,
  inline = false
}) {
  const width = Math.round(height * 544.21 / 103.74);
  if (brand.logo === "wordmark") {
    if (inline) return /* @__PURE__ */ jsx3("span", { className, children: brand.name });
    return /* @__PURE__ */ jsx3(Wordmark, { size: width, className });
  }
  return /* @__PURE__ */ jsx3(
    WordmarkEnSVG,
    {
      width,
      height,
      "aria-label": brand.name,
      className: ["inline-block shrink-0", className].filter(Boolean).join(" "),
      style: {
        // A Studio preset sets the wordmark's ink (ink by default, the brand
        // colour when it asks); without one the brand colour stays.
        color: "var(--brand-decorative-logo-ink, hsl(var(--brand-mark)))",
        ...inline ? { height: "0.74em", width: "auto", verticalAlign: "baseline" } : null
      }
    }
  );
}

// src/guidelines/logo.ts
var logoSafetyZone = {
  /** Safety zone ratio relative to logo height */
  ratio: 0.25,
  // 1/4 of logo height
  /** Calculate safety zone in pixels */
  calculate: (logoHeight) => ({
    margin: Math.ceil(logoHeight * 0.25),
    totalWidth: Math.ceil(logoHeight + logoHeight * 0.5),
    // logo + 2x margin
    totalHeight: Math.ceil(logoHeight + logoHeight * 0.5)
  })
};
var logoMinSize = {
  /** Print media: height ≥ 6mm */
  print: {
    minHeightMm: 6,
    description: "\u5370\u5237\u5A92\u4F53\u4E0A\u6700\u5C0F\u4F7F\u7528\uFF1A\u9AD8\u5EA6\u5927\u4E8E\u7B49\u4E8E 6mm"
  },
  /** Digital media: height ≥ 35px */
  digital: {
    minHeightPx: 35,
    description: "\u7F51\u7EDC\u5A92\u4F53\u4E0A\u6700\u5C0F\u4F7F\u7528\uFF1A\u9AD8\u5EA6\u5927\u4E8E\u7B49\u4E8E 35px"
  }
};
var logoVariants = {
  /** 标志左右组合 - Horizontal combination */
  horizontal: {
    zh: "logo-horizontal-zh",
    en: "logo-horizontal-en",
    useCase: "\u9002\u914D\u6A2A\u5411\u7A7A\u95F4\uFF08\u5982\u95E8\u5E97\u62DB\u724C\u3001\u6A2A\u5E45\u5E7F\u544A\uFF09"
  },
  /** 标志上下组合 - Vertical combination */
  vertical: {
    zh: "logo-vertical-zh",
    en: "logo-vertical-en",
    useCase: "\u9002\u914D\u7EB5\u5411\u7A7A\u95F4\uFF08\u5982\u540D\u7247\u3001\u5DE5\u724C\uFF09"
  },
  /** 单色组合 - Monochrome combinations (compliant edition only) */
  horizontalMono: {
    zh: "logo-horizontal-zh-mono",
    en: "logo-horizontal-en-mono",
    useCase: "\u9002\u914D\u5355\u8272\u5370\u5237\u6A2A\u5411\u573A\u666F\uFF08\u4F20\u771F\u3001\u9ED1\u767D\u6253\u5370\uFF09"
  },
  verticalMono: {
    zh: "logo-vertical-zh-mono",
    en: "logo-vertical-en-mono",
    useCase: "\u9002\u914D\u5355\u8272\u5370\u5237\u7EB5\u5411\u573A\u666F\uFF08\u540D\u7247\u9ED1\u767D\u7248\u3001\u5DE5\u724C\u5355\u8272\u7248\uFF09"
  },
  /** 标志单独使用 */
  logomark: {
    color: "logo-color",
    inverse: "logo-inverse",
    mono: "logo-mono"
  },
  /** 品牌名称单独使用 */
  wordmark: {
    zh: "logo-zh",
    en: "logo-en",
    zhEn: "logo-zh-en"
  }
};
var productChromeLogoRule = {
  decoupleMarkAndWordmark: true,
  lightMark: "logo-color",
  darkMark: "LogomarkSVG + text-white",
  wordmark: "WordmarkEnSVG + theme text token",
  avoid: [
    "LogoEnColorSVG for nav",
    "logo-horizontal-en light + LogoEnSVG dark whole-swap",
    "CSS filter invert on color SVGs"
  ]
};
var logoEditions = {
  classic: {
    version: "1.0",
    name: "\u7ECF\u5178\u7248",
    nameEn: "Classic",
    description: "\u539F\u59CB\u8BBE\u8BA1\u7248\u672C\uFF0C'\u6BD3'\u5B57\u66F4\u7F8E\u89C2\u6D41\u7545",
    useCases: ["App\u754C\u9762", "\u7F51\u7AD9", "\u4EA7\u54C1\u5185\u5D4C", "\u8425\u9500\u7269\u6599", "\u793E\u4EA4\u5A92\u4F53"],
    directory: "logo"
  },
  compliant: {
    version: "2.0",
    name: "\u5408\u89C4\u7248",
    nameEn: "Compliant",
    description: "\u5546\u6807\u5408\u89C4\u7248\u672C\uFF0C'\u6BD3'\u5B57\u7B26\u5408\u6807\u51C6\u5B57\u5F62\u89C4\u8303",
    useCases: ["\u6CD5\u5F8B\u6587\u4EF6", "\u5546\u6807\u6CE8\u518C", "\u6B63\u5F0F\u5408\u540C", "\u653F\u5E9C\u62A5\u5907", "\u53D1\u7968/\u6536\u636E"],
    directory: "logo-compliant"
  }
};
var logoColorUsage = {
  /** Preferred: Full color gradient (彩色渐变) */
  preferred: "color",
  /** Allowed: Single color versions */
  allowed: ["inverse", "mono"],
  /** Rules */
  rules: {
    lightBackground: "\u4F18\u5148\u4F7F\u7528\u5F69\u8272\u6807\u8BC6",
    darkBackground: "\u5141\u8BB8\u4F7F\u7528\u53CD\u767D\u6807\u8BC6",
    complexBackground: "\u7981\u6B62\u5728\u590D\u6742\u80CC\u666F\u4E2D\u4F7F\u7528\u53CD\u767D\u6807\u8BC6\uFF0C\u4EE5\u9632\u8FA8\u8BC6\u5EA6\u964D\u4F4E",
    print: "\u5355\u8272\u5370\u5237\u65F6\u4F7F\u7528\u58A8\u7A3F\u7248\u672C",
    special: "\u70EB\u91D1\u3001\u70EB\u94F6\u7B49\u7279\u6B8A\u5DE5\u827A\u4F7F\u7528\u5BF9\u5E94\u58A8\u7A3F\u7248\u672C"
  }
};
var logoProhibitedUses = [
  {
    id: "stretch",
    name: "\u62C9\u4F38\u53D8\u5F62",
    description: "\u7981\u6B62\u5BF9\u6807\u5FD7\u8FDB\u884C\u4EFB\u4F55\u65B9\u5411\u7684\u62C9\u4F38\u6216\u538B\u7F29"
  },
  {
    id: "rotate",
    name: "\u65CB\u8F6C",
    description: "\u7981\u6B62\u65CB\u8F6C\u6807\u5FD7\u89D2\u5EA6"
  },
  {
    id: "outline",
    name: "\u63CF\u8FB9",
    description: "\u7981\u6B62\u7ED9\u6807\u5FD7\u6DFB\u52A0\u63CF\u8FB9\u6548\u679C"
  },
  {
    id: "shadow",
    name: "\u6295\u5F71",
    description: "\u7981\u6B62\u7ED9\u6807\u5FD7\u6DFB\u52A0\u6295\u5F71\u6548\u679C"
  },
  {
    id: "gradient-modify",
    name: "\u4FEE\u6539\u6E10\u53D8",
    description: "\u7981\u6B62\u4FEE\u6539\u6807\u5FD7\u539F\u6709\u7684\u6E10\u53D8\u8272\u5F69"
  },
  {
    id: "recolor",
    name: "\u968F\u610F\u6362\u8272",
    description: "\u7981\u6B62\u4F7F\u7528\u975E\u54C1\u724C\u6807\u51C6\u8272\u66FF\u6362\u6807\u5FD7\u989C\u8272"
  },
  {
    id: "partial",
    name: "\u90E8\u5206\u4F7F\u7528",
    description: "\u7981\u6B62\u53EA\u4F7F\u7528\u6807\u5FD7\u7684\u4E00\u90E8\u5206"
  },
  {
    id: "modify-elements",
    name: "\u4FEE\u6539\u5143\u7D20",
    description: "\u7981\u6B62\u6DFB\u52A0\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u5FD7\u4E2D\u7684\u4EFB\u4F55\u5143\u7D20"
  },
  {
    id: "low-contrast",
    name: "\u4F4E\u5BF9\u6BD4\u5EA6",
    description: "\u7981\u6B62\u5728\u5BF9\u6BD4\u5EA6\u8FC7\u4F4E\u7684\u80CC\u666F\u4E0A\u4F7F\u7528\u6807\u5FD7"
  },
  {
    id: "complex-bg",
    name: "\u590D\u6742\u80CC\u666F",
    description: "\u7981\u6B62\u5728\u6D45\u8272\u6216\u590D\u6742\u80CC\u666F\u4E2D\u4F7F\u7528\u53CD\u767D\u6807\u8BC6"
  }
];
var logoGrid = {
  /** Logo mark grid unit */
  logomark: {
    gridUnit: "a",
    width: "7.5a",
    height: "7.5a"
  },
  /** Chinese wordmark grid */
  wordmarkCn: {
    gridUnit: "a",
    width: "13.5a",
    height: "3a"
  },
  /** English wordmark grid */
  wordmarkEn: {
    gridUnit: "a",
    width: "14a",
    height: "2a"
  },
  /** Combined logo grid (Chinese + English) */
  combined: {
    gridUnit: "a",
    width: "13.5a",
    height: "5.5a"
  }
};
var logoSpecialVersions = {
  /** 墨稿版本 - Monochrome versions */
  monochrome: {
    black: "\u7528\u4E8E\u5355\u8272\u5370\u5237\u3001\u4F20\u771F\u7B49\u573A\u666F",
    white: "\u7528\u4E8E\u6DF1\u8272\u80CC\u666F\u3001\u53CD\u767D\u5370\u5237"
  },
  /** 工艺版本 - Special process versions */
  process: {
    gold: "\u70EB\u91D1\u5DE5\u827A",
    silver: "\u70EB\u94F6\u5DE5\u827A"
  }
};

// src/guidelines/index.ts
function firstFamily(stack) {
  return (stack.split(",")[0] ?? "").trim().replace(/^["']|["']$/g, "");
}
var brandGuidelines = {
  // Logo
  logo: {
    safetyZone: {
      ratio: 0.25,
      description: "\u6700\u5C0F\u8FB9\u8DDD\u4E0D\u5C0F\u4E8E\u6807\u5FD7\u9AD8\u5EA6\u7684 1/4"
    },
    minSize: {
      print: { minHeightMm: 6 },
      digital: { minHeightPx: 35 }
    }
  },
  // Colors
  colors: {
    primary: {
      name: "\u4E91\u6BD3\u84DD",
      hex: colors.primary["500"]
    },
    secondary: {
      name: "\u4E91\u6BD3\u9752",
      hex: colors.accent["500"]
    },
    gradient: colors.gradient.primary
  },
  // Typography — the faces the token source chose (metadata.ts reads them
  // from core.json:fontFamily).
  typography: {
    cn: firstFamily(typography.fontFamily.cn),
    en: firstFamily(typography.fontFamily.en),
    heading: firstFamily(typography.fontFamily.heading),
    weights: ["Regular", "Medium", "SemiBold", "Bold"]
  }
};

// src/easter-egg-registry.json
var easter_egg_registry_default = [
  {
    id: "echo-localhost",
    layer: "echo",
    primaryCopy: "\u5B83\u7EC8\u4E8E\u79BB\u5F00\u4E86 localhost\u3002",
    secondaryCopy: "It finally left localhost.",
    sourceInspiration: "\u5F00\u53D1\u8005\u7B2C\u4E00\u6B21\u628A\u670D\u52A1\u8DD1\u51FA\u672C\u5730\u673A\u5668\u7684\u90A3\u4E00\u523B \u2014 the moment a service escapes the developer's own machine",
    usedInSurface: "deployment",
    riskLevel: "low"
  },
  {
    id: "echo-general-magic",
    layer: "echo",
    primaryCopy: "\u6709\u4E9B\u9879\u76EE\u4E0D\u662F\u5931\u8D25\uFF0C\u662F\u628A\u56E2\u961F\u7EC3\u51FA\u6765\u4E86\u3002",
    secondaryCopy: "Some projects don't fail. They train the team that comes next.",
    sourceInspiration: "General Magic \u2014 \u4F1F\u5927\u7684\u5931\u8D25\u5B55\u80B2\u4E86\u6539\u53D8\u4E16\u754C\u7684\u4E00\u4EE3\u5DE5\u7A0B\u5E08 (the project failed but its alumni built the next era)",
    usedInSurface: "failure_state",
    riskLevel: "low"
  },
  {
    id: "echo-ramen",
    layer: "echo",
    primaryCopy: "\u5148\u6D3B\u4E0B\u6765\uFF0C\u4E0D\u4E22\u4EBA\u3002",
    secondaryCopy: "Staying alive is not shameful. Ramen counts.",
    sourceInspiration: "ramen profitability \u2014 Paul Graham \u63D0\u51FA\u7684\u751F\u5B58\u7F8E\u5B66\uFF1A\u8D5A\u591F\u5403\u6CE1\u9762\u7684\u94B1\u5C31\u662F\u771F\u6B63\u7684\u76C8\u5229\u8D77\u70B9",
    usedInSurface: "revenue",
    riskLevel: "low"
  },
  {
    id: "echo-first-room",
    layer: "echo",
    primaryCopy: "\u7B2C\u4E00\u95F4\u623F\u95F4\u4E0D\u5FC5\u4F53\u9762\uFF0C\u4F46\u65B9\u5411\u5FC5\u987B\u771F\u5B9E\u3002",
    secondaryCopy: "The first room doesn't have to be impressive. The direction does.",
    sourceInspiration: "\u8F66\u5E93/\u6E56\u7554\u82B1\u56ED \u2014 \u6240\u6709\u4F1F\u5927\u516C\u53F8\u7684\u5171\u540C\u8D77\u70B9\uFF1A\u975E\u6B63\u5F0F\u7A7A\u95F4\u91CC\u8BDE\u751F\u7684\u8BA4\u771F\u4E8B\u4E1A (HP garage, Alibaba's Lakeside apartment)",
    usedInSurface: "onboarding",
    riskLevel: "low"
  }
];

// src/microcopy.ts
var MILESTONE_COPY_PACK = [
  {
    id: "first_room",
    copy: {
      "zh-CN": { primary: "\u7B2C\u4E00\u95F4\u623F\u95F4\u5DF2\u7ECF\u51C6\u5907\u597D\u3002" },
      "en-US": { primary: "The first room is ready." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "imagining",
    surface: "milestone",
    voiceRegister: "historian",
    culturalMotif: "small_room",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_folder",
    copy: {
      "zh-CN": { primary: "\u8BB8\u591A\u516C\u53F8\uFF0C\u6700\u521D\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6\u5939\u3002" },
      "en-US": { primary: "Many companies begin as a folder." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "imagining",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "small_room",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_table",
    copy: {
      "zh-CN": { primary: "\u7B2C\u4E00\u5F20\u684C\u5B50\u6709\u4E86\u7B2C\u4E8C\u4E2A\u4EBA\u3002" },
      "en-US": { primary: "The first table has a second seat." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "assembling",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "the_table",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_signal",
    copy: {
      "zh-CN": { primary: "\u771F\u5B9E\u4E16\u754C\u5F00\u59CB\u8BF4\u8BDD\u4E86\u3002" },
      "en-US": { primary: "The real world has started talking." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "validating",
    surface: "milestone",
    voiceRegister: "operator",
    culturalMotif: "ship_it",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_ship",
    copy: {
      "zh-CN": { primary: "\u4E16\u754C\u7B2C\u4E00\u6B21\u770B\u89C1\u5B83\u3002" },
      "en-US": { primary: "The world sees it for the first time." }
    },
    act: "building",
    throughline: "milestone",
    stage: "shipping",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "ship_it",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_believer",
    copy: {
      "zh-CN": { primary: "\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4F60\u4E0D\u518D\u53EA\u4E3A\u81EA\u5DF1\u5F00\u53D1\u3002" },
      "en-US": {
        primary: "From today, you are no longer building only for yourself."
      }
    },
    act: "building",
    throughline: "milestone",
    stage: "shipping",
    surface: "milestone",
    voiceRegister: "historian",
    culturalMotif: "first_believer",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_revenue",
    copy: {
      "zh-CN": { primary: "\u68A6\u60F3\u5F00\u59CB\u62E5\u6709\u73B0\u91D1\u6D41\u3002" },
      "en-US": { primary: "The dream has cash flow now." }
    },
    act: "building",
    throughline: "milestone",
    stage: "operating",
    surface: "milestone",
    voiceRegister: "operator",
    culturalMotif: "survival_first",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_return",
    copy: {
      "zh-CN": { primary: "\u56DE\u6765\uFF0C\u6BD4\u6765\u8FC7\u66F4\u91CD\u8981\u3002" },
      "en-US": { primary: "Returning matters more than visiting." }
    },
    act: "growing",
    throughline: "milestone",
    stage: "growing",
    surface: "milestone",
    voiceRegister: "operator",
    culturalMotif: "first_believer",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_team",
    copy: {
      "zh-CN": { primary: "\u4E09\u4E2A\u4EBA\uFF0C\u5C40\u5C31\u5F00\u59CB\u6210\u5F62\u3002" },
      "en-US": { primary: "Three people can begin to form a company." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "assembling",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "the_table",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_crowd",
    copy: {
      "zh-CN": { primary: "\u7B2C\u4E00\u5F20\u684C\u5B50\u5750\u4E0D\u4E0B\u4E86\u3002" },
      "en-US": { primary: "The first table is getting crowded." }
    },
    act: "growing",
    throughline: "milestone",
    stage: "scaling",
    surface: "milestone",
    voiceRegister: "historian",
    culturalMotif: "the_table",
    easterEggLayer: "echo",
    riskLevel: "low",
    sourceInspiration: "\u56DE\u54CD\u7B2C\u4E00\u5F20\u684C\u5B50 (first_table) \u2014 \u4ECE\u7B2C\u4E00\u4E2A\u540C\u4F34\u5230\u684C\u5B50\u5750\u6EE1\u4EBA\uFF0C\u662F\u4ECE\u4E8C\u4EBA\u5BF9\u8BDD\u5230\u771F\u6B63\u7EC4\u7EC7\u7684\u8DC3\u8FC1\uFF1Bthe same table that once seated two now cannot hold the team"
  },
  {
    id: "first_reset",
    // MC-H2: First Reset's real act is 'starting' (a pivot sends you back to start).
    // It is NOT act:'纵贯'. throughline:'failure' captures the cross-cutting nature.
    act: "starting",
    throughline: "failure",
    copy: {
      "zh-CN": { primary: "\u91CD\u542F\u4E0D\u662F\u5931\u8D25\uFF0C\u662F\u66F4\u8BDA\u5B9E\u7684\u5F00\u59CB\u3002" },
      "en-US": { primary: "A restart is a more honest beginning." }
    },
    stage: "imagining",
    surface: "failure_state",
    voiceRegister: "mentor",
    culturalMotif: "honest_restart",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_public",
    copy: {
      "zh-CN": { primary: "\u628A\u4E00\u90E8\u5206\u672A\u6765\uFF0C\u4EA4\u7ED9\u4E16\u754C\u3002" },
      "en-US": { primary: "Put a piece of the future in public." }
    },
    act: "growing",
    throughline: "milestone",
    stage: "growing",
    surface: "milestone",
    voiceRegister: "historian",
    culturalMotif: "new_garage",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_demo",
    copy: {
      "zh-CN": { primary: "\u8FD9\u4E0D\u662F\u5C55\u793A\uFF0C\u662F\u63A5\u53D7\u68C0\u9A8C\u3002" },
      "en-US": { primary: "This is not a show. It is a test." }
    },
    act: "building",
    throughline: "milestone",
    stage: "shipping",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "ship_it",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "graduation",
    copy: {
      "zh-CN": { primary: "\u4F60\u51FA\u5E08\u4E86\u3002\u4E0B\u4E00\u7A0B\u9700\u8981\u66F4\u5F3A\u7684\u88C5\u5907\u3002" },
      "en-US": {
        primary: "You've outgrown the basics. The road ahead needs stronger tools."
      }
    },
    act: "growing",
    throughline: "milestone",
    stage: "graduating",
    surface: "graduation",
    voiceRegister: "graduation",
    culturalMotif: "small_room",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  }
];
function getMilestoneCopy(id, locale) {
  const entry = MILESTONE_COPY_PACK.find((e) => e.id === id);
  if (!entry) {
    throw new Error(`getMilestoneCopy: unknown MilestoneId "${id}"`);
  }
  const localeCopy = entry.copy[locale];
  if (!localeCopy) {
    throw new Error(`getMilestoneCopy: locale "${locale}" not found for milestone "${id}"`);
  }
  return {
    primary: localeCopy.primary,
    ...localeCopy.secondary !== void 0 ? { secondary: localeCopy.secondary } : {},
    ...localeCopy.cta !== void 0 ? { cta: localeCopy.cta } : {}
  };
}
var EASTER_EGG_REGISTRY = easter_egg_registry_default;

// src/motion.ts
var brandEasing = {
  /** Signature Nebutra ease — smooth deceleration with slight overshoot */
  brand: [0.16, 1, 0.3, 1],
  /** For enter animations */
  enter: [0.16, 1, 0.3, 1],
  /** For exit animations — ease-out, never ease-in */
  exit: [0.16, 1, 0.3, 1],
  /** Spring-like bounce */
  spring: [0.34, 1.56, 0.64, 1]
};
var motionDurationSec = {
  /** 100ms — micro-feedback */
  micro: 0.1,
  /** 200ms — state flow (default) */
  flow: 0.2,
  /** 300ms — content unveil */
  reveal: 0.3,
  /** 500ms — hero-grade cinematic */
  cinematic: 0.5
};
var brandSpring = {
  /** Default interactive spring */
  default: { type: "spring", stiffness: 200, damping: 24, mass: 1 },
  /** Bouncy, playful spring */
  bouncy: { type: "spring", stiffness: 300, damping: 15, mass: 0.8 },
  /** Heavy, deliberate spring */
  heavy: { type: "spring", stiffness: 120, damping: 28, mass: 1.5 },
  /** Gentle reveal spring */
  gentle: { type: "spring", stiffness: 80, damping: 20, mass: 1 }
};
var emerge = {
  initial: { opacity: 0, transform: "translateY(16px)", filter: "blur(6px)" },
  animate: { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" },
  exit: {
    opacity: 0,
    transform: "translateY(-8px)",
    filter: "blur(4px)",
    transition: { duration: motionDurationSec.flow, ease: brandEasing.exit }
  },
  transition: { duration: motionDurationSec.cinematic, ease: brandEasing.brand }
};
var flow = {
  initial: { opacity: 0, transform: "translateX(-20px)" },
  animate: { opacity: 1, transform: "translateX(0px)" },
  exit: {
    opacity: 0,
    transform: "translateX(20px)",
    transition: { duration: motionDurationSec.flow, ease: brandEasing.exit }
  },
  transition: { duration: motionDurationSec.reveal, ease: brandEasing.enter }
};
var pulse = {
  animate: { scale: [1, 1.015, 1], opacity: [1, 0.85, 1] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};
var float = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};
var stagger = (delayPerChild = 0.08) => ({
  animate: { transition: { staggerChildren: delayPerChild } }
});
var interactive = {
  hover: {
    scale: 1.02,
    transition: { duration: motionDurationSec.flow, ease: brandEasing.brand }
  },
  tap: { scale: 0.98, transition: { duration: motionDurationSec.micro } },
  hoverLift: {
    y: -4,
    transition: { duration: motionDurationSec.flow, ease: brandEasing.brand }
  }
};
var viewport = {
  once: { once: true, margin: "-80px" },
  always: { once: false, margin: "-40px" }
};
var brandMotion = {
  emerge,
  flow,
  pulse,
  float,
  stagger,
  interactive,
  viewport,
  brandEasing,
  brandSpring,
  motionDurationSec
};

// src/positioning.ts
var positioning = {
  /**
   * One-liner for README, og:description, pitch decks.
   * Audience: AI founders, SaaS engineering teams (1–10 engineers).
   */
  tagline: "Ship AI products, not boilerplate.",
  /**
   * Two-sentence elevator pitch.
   */
  description: "Nebutra-Sailor is a production-ready Next.js monorepo template for AI SaaS products. Auth, billing, multi-tenancy, AI services, design system, and enterprise infrastructure \u2014 pre-configured so you ship on day one.",
  /**
   * GitHub repository description (160 chars max).
   */
  repoDescription: "AI-native SaaS monorepo: Next.js 16 + Hono + Python services \xB7 Clerk \xB7 Stripe \xB7 multi-tenancy \xB7 K8s \xB7 OTel \xB7 design system",
  // ── Target audience ──────────────────────────────────────────────────────────
  icp: {
    primary: "AI founders building SaaS products with small engineering teams (1\u201310 people)",
    secondary: "SaaS engineering teams adopting AI features into existing products",
    antiTarget: "Large enterprise teams with dedicated platform engineering \u2014 this template makes opinionated choices they will override"
  },
  // ── What ships out of the box ─────────────────────────────────────────────
  /**
   * Capability pillars — each backed by actual packages/apps in this repo.
   * Update when underlying packages change.
   */
  pillars: [
    {
      id: "ai-native",
      title: "AI-Native Architecture",
      headline: "AI capabilities built in, not bolted on.",
      bullets: [
        "Python FastAPI AI service with OpenAI / Anthropic client patterns",
        "Streaming responses and embeddings pipelines",
        "RecommendationSystem (recsys) service for personalization",
        "Event ingestion pipeline for AI training data collection"
      ],
      packages: ["backends/python/ai", "backends/python/recsys", "backends/python/event-ingest"]
    },
    {
      id: "saas-complete",
      title: "SaaS-Complete Infrastructure",
      headline: "Every SaaS primitive, wired together.",
      bullets: [
        "Clerk authentication with multi-tenant org support",
        "Stripe subscriptions, usage billing, and credits via @nebutra/billing",
        "Entitlement system for feature gating",
        "RBAC-ready tenant context propagated through the API gateway"
      ],
      packages: ["packages/billing", "backends/gateway", "packages/preset"]
    },
    {
      id: "design-system",
      title: "Production Design System",
      headline: "Ship polished UI from day one.",
      bullets: [
        "541 Geist icons as tree-shakable TSX components",
        "Radix UI + Lobe UI component library with brand tokens",
        "Design-language swap via Brand Packages (html[data-brand] + applyLanguage)",
        "Storybook 8 with auto-generated docs and visual regression via Chromatic"
      ],
      packages: ["packages/ui", "packages/tokens", "packages/icons", "apps/storybook"]
    },
    {
      id: "polyglot-monorepo",
      title: "Polyglot Monorepo",
      headline: "Right tool for each service, one unified repo.",
      bullets: [
        "Next.js 16 apps (web dashboard, landing page, design docs)",
        "Hono API gateway with OpenAPI spec and type-safe routes",
        "Python FastAPI microservices for AI, billing, content, e-commerce, web3",
        "Turborepo with affected-only builds and remote caching"
      ],
      packages: ["apps/web", "backends/gateway", "backends/python/*"]
    },
    {
      id: "enterprise-infra",
      title: "Enterprise-Grade Infrastructure",
      headline: "Production patterns, not prototyping shortcuts.",
      bullets: [
        "OpenTelemetry distributed tracing via @nebutra/logger (Pino + OTLP)",
        "Kubernetes with NetworkPolicy, PDB, HPA, and hardened security contexts",
        "Supply chain security: SHA-pinned Docker images and GitHub Actions",
        "CSP nonce-based headers, rate limiting, and structured error handling"
      ],
      packages: ["packages/logger", "packages/rate-limit", "infra/iac/k8s"]
    }
  ],
  // ── Use cases ─────────────────────────────────────────────────────────────
  /**
   * Three genuine use cases with corresponding apps/packages in this repo.
   * These are templates for what you build ON TOP of Nebutra-Sailor,
   * not features of the template itself.
   */
  useCases: [
    {
      id: "ai-saas",
      title: "AI SaaS Product",
      description: "Build a multi-tenant AI SaaS product from MVP to production. Auth, billing, AI services, and dashboard are pre-wired.",
      examples: ["AI writing tools", "AI data analysis", "AI copilots", "AI workflow automation"],
      starterCommand: "pnpm dev"
    },
    {
      id: "marketing-landing",
      title: "SaaS Marketing & Landing Pages",
      description: "Launch performance-optimized marketing sites with built-in SEO, Lighthouse CI gates, and analytics.",
      examples: ["Product landing pages", "Pricing pages", "Blog + SEO content"],
      starterCommand: "pnpm dev:landing"
    },
    {
      id: "design-system-standalone",
      title: "AI Product Design System",
      description: "Use @nebutra/ui and @nebutra/tokens as the design system foundation for your AI product team.",
      examples: ["Internal component libraries", "Multi-product design systems"],
      starterCommand: "pnpm dev:design"
    }
  ],
  // ── Benchmark positioning ─────────────────────────────────────────────────
  /**
   * Honest competitive context. Not claims, just positioning anchors.
   */
  benchmarks: {
    template: "t3-app, create-t3-turbo \u2014 adds AI services, Python backend, design system",
    infra: "Vercel templates \u2014 adds Kubernetes, multi-service, enterprise security",
    aiFramework: "LangChain templates \u2014 adds full SaaS commercialization layer"
  }
};
export {
  BrandMark,
  BrandWordmark,
  EASTER_EGG_REGISTRY,
  Logo,
  LogoEnColorSVG,
  LogoEnSVG,
  Logomark,
  LogomarkSVG,
  MARKETING_HOME_PARAM,
  MILESTONE_COPY_PACK,
  Wordmark,
  WordmarkEnSVG,
  allowedColorCombinations,
  brand,
  brandEasing,
  brandGradient,
  brandGuidelines,
  brandMotion,
  brandSpring,
  buildFeedChannelMeta,
  buildOrganizationJsonLd,
  buildPwaManifest,
  buildSoftwareApplicationJsonLd,
  buildWebSiteJsonLd,
  colorProhibitedUses,
  colors,
  emerge,
  faviconAssets,
  float,
  flow,
  fontAssets,
  generateColorScale,
  getBrandCookieDomain,
  getBrandEmail,
  getBrandMailFrom,
  getBrandOrigin,
  getBrandPublicUrls,
  getDocsUrl,
  getMarketingHomePath,
  getMarketingHomeUrl,
  getMilestoneCopy,
  getSiteMetadata,
  getSiteUrl,
  interactive,
  logoAssets,
  logoColorUsage,
  logoEditions,
  logoGrid,
  logoMinSize,
  logoProhibitedUses,
  logoPublicSrc,
  logoSafetyZone,
  logoSpecialVersions,
  logoVariants,
  motionDurationSec,
  nebutraBlue,
  nebutraBlueScale,
  nebutraCyan,
  nebutraCyanScale,
  nebutraNeutralScale,
  neutralColors,
  ogImageDimensions,
  positioning,
  productChromeLogoRule,
  publicAssetUrl,
  pulse,
  semanticColors,
  stagger,
  typography,
  viewport
};
//# sourceMappingURL=index.js.map