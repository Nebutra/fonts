"use client";

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

// src/metadata-helpers.ts
function getBrandOrigin(service) {
  const host = brand.domains[service];
  if (!host?.trim()) {
    throw new Error(`brand.domains.${String(service)} is empty \u2014 run brand:apply`);
  }
  return `https://${host.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
}
function publicAssetUrl(key, base) {
  const origin = (base || process.env.NEXT_PUBLIC_R2_PUBLIC_URL || process.env.R2_PUBLIC_URL || getBrandOrigin("cdn")).replace(/\/+$/, "");
  const path = key.replace(/^\/+/, "");
  if (!path || path.includes("..") || path.includes("\\")) {
    throw new Error("invalid_public_asset_key");
  }
  return `${origin}/${path}`;
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
var Logo_default = Logo;
export {
  Logo,
  Logomark,
  Wordmark,
  Logo_default as default,
  logoPublicSrc
};
//# sourceMappingURL=Logo.js.map