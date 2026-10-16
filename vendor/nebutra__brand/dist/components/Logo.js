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

// src/components/LogoSVG.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx(
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
        children: /* @__PURE__ */ jsx("path", { d: LOGOMARK_PATH })
      }
    );
  }
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx("path", { d: LOGOMARK_PATH })
    }
  );
}
function WordmarkPaths() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M78.69,102.73H67.76c-3.87,0-7.47-1.96-9.56-5.21L18.27,35.5v55.86c0,6.28-5.09,11.37-11.37,11.37H0V0h10.93\n        c3.87,0,7.47,1.96,9.56,5.21l39.94,62.01V11.37C60.43,5.09,65.52,0,71.8,0h6.89V102.73z"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "102.92", y: "53.18", width: "66.72", height: "18.27" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M147.44,80.28c-4.3,3.7-10.07,5.73-16.31,5.07c-9.76-1.04-17.69-8.78-18.93-18.52\n        c-1.78-14.01,10.06-25.86,24.08-24.06c9.61,1.23,17.29,8.97,18.47,18.58c0.44,3.58-0.02,7-1.16,10.1h18.89\n        c0.46-2.41,0.71-4.88,0.71-7.42c0-22.91-19.49-41.34-42.76-39.6C111,25.89,95.33,41.56,93.87,60.98\n        c-1.75,23.27,16.69,42.76,39.6,42.76c14.91,0,27.92-8.26,34.71-20.45l-7.81-4.33C156.21,76.65,151.05,77.18,147.44,80.28z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M205.06,102.73h-6.89c-6.28,0-11.37-5.09-11.37-11.37V0h6.89c6.28,0,11.37,5.09,11.37,11.37V102.73z" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M226.5,103.74c-21.9,0-39.71-17.81-39.71-39.71s17.81-39.71,39.71-39.71s39.71,17.81,39.71,39.71\n        S248.4,103.74,226.5,103.74z M226.5,42.58c-11.83,0-21.45,9.62-21.45,21.45c0,11.83,9.62,21.45,21.45,21.45\n        c11.82,0,21.45-9.62,21.45-21.45C247.95,52.2,238.33,42.58,226.5,42.58z"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M315.89,103.74c-19.34,0.33-35.17-15.84-35.17-35.18V24.32h6.89c6.28,0,11.37,5.09,11.37,11.37v33.08\n        c0,8.83,6.85,16.36,15.68,16.7c9.28,0.35,16.94-7.09,16.94-16.29V35.69c0-6.28,5.09-11.37,11.37-11.37h6.89v44.85\n        C349.86,88.03,334.67,103.41,315.89,103.74z"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M403.08,102.73c-20.83,0-37.77-16.95-37.77-37.77V11.37C365.3,5.09,370.4,0,376.68,0h6.89v64.96\n        c0,8.22,5.11,15.26,12.31,18.13c4.34,1.73,7.2,5.9,7.2,10.57V102.73z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M391.71,44.44h-17.27V26.17h28.64v6.89C403.08,39.35,397.99,44.44,391.71,44.44z" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M436.06,102.74h-6.89c-6.28,0-11.37-5.09-11.37-11.37V65.35c0-22.63,18.41-41.03,41.03-41.03v8.85\n        c0,4.84-3.08,9.11-7.63,10.74c-8.81,3.14-15.13,11.57-15.13,21.45V102.74z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M544.21,102.73h-6.89c-6.28,0-11.37-5.09-11.37-11.37V64.03h18.27V102.73z" }),
    /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(
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
        children: /* @__PURE__ */ jsx(WordmarkPaths, {})
      }
    );
  }
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx(WordmarkPaths, {})
    }
  );
}

// src/components/Logo.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var INK = "#060307";
var INLINE_MARK = /* @__PURE__ */ new Set(["mono", "inverse"]);
var INLINE_WORDMARK = /* @__PURE__ */ new Set(["en"]);
function inlineFill(variant, inverted) {
  return variant === "inverse" || inverted ? "#ffffff" : INK;
}
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
  return /* @__PURE__ */ jsx2(
    "span",
    {
      className,
      style: {
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
  return /* @__PURE__ */ jsx2("span", { "aria-label": brand.name, role: "img", className, children: /* @__PURE__ */ jsx2(
    "span",
    {
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
  ) });
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
  if (brand.logo === "wordmark") return /* @__PURE__ */ jsx2(TextWordmark, { height, className });
  if (edition === "classic" && INLINE_WORDMARK.has(variant)) {
    return /* @__PURE__ */ jsx2("span", { className, style: { color: inlineFill(variant, inverted), lineHeight: 0 }, children: /* @__PURE__ */ jsx2(
      WordmarkEnSVG,
      {
        "aria-label": brand.name,
        className: "!text-current",
        width: size,
        height
      }
    ) });
  }
  const src = logoPublicSrc(variant, edition);
  const filterStyle = inverted ? { filter: "brightness(0) invert(1)" } : {};
  return /* @__PURE__ */ jsx2(
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
  if (brand.logo === "wordmark") return /* @__PURE__ */ jsx2(TextLogomark, { size, className });
  if (edition === "classic" && INLINE_MARK.has(variant)) {
    return /* @__PURE__ */ jsx2("span", { className, style: { color: inlineFill(variant, inverted), lineHeight: 0 }, children: /* @__PURE__ */ jsx2(LogomarkSVG, { "aria-label": brand.name, className: "!text-current", width: size, height: size }) });
  }
  const src = logoPublicSrc(variant, edition);
  const filterStyle = inverted && variant !== "inverse" ? { filter: "brightness(0) invert(1)" } : {};
  return /* @__PURE__ */ jsx2(
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
  if (brand.logo === "wordmark") return /* @__PURE__ */ jsx2(TextWordmark, { height, className });
  if (edition === "classic" && INLINE_WORDMARK.has(variant)) {
    return /* @__PURE__ */ jsx2("span", { className, style: { color: inlineFill(variant, inverted), lineHeight: 0 }, children: /* @__PURE__ */ jsx2(
      WordmarkEnSVG,
      {
        "aria-label": brand.name,
        className: "!text-current",
        width: size,
        height
      }
    ) });
  }
  const src = logoPublicSrc(variant, edition);
  const filterStyle = inverted ? { filter: "brightness(0) invert(1)" } : {};
  return /* @__PURE__ */ jsx2(
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