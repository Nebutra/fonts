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

// src/metadata-helpers.ts
function getBrandOrigin(service) {
  const host = brand.domains[service];
  if (!host?.trim()) {
    throw new Error(`brand.domains.${String(service)} is empty \u2014 run brand:apply`);
  }
  return `https://${host.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
}
function localhostFallback(fallback, env = process.env) {
  if (env.NODE_ENV !== "production") return fallback;
  if (env.NEBUTRA_ALLOW_LOCALHOST_URLS === "1") return fallback;
  if (env.SKIP_ENV_VALIDATION && env.SKIP_ENV_VALIDATION !== "false") return fallback;
  return void 0;
}
function missingPublicUrlMessage(name) {
  return `${name} is not set. A production build must be given the real public URL: a localhost default would be baked into every rendered link. Set it for the build, or NEBUTRA_ALLOW_LOCALHOST_URLS=1 for a build that is never deployed.`;
}
function getDocsUrl(service = "landing", path = "") {
  const suffix = path.replace(/^\/+/, "");
  return `${getBrandOrigin(service)}/docs${suffix ? `/${suffix}` : ""}`;
}
function publicAssetOrigin(base) {
  return new URL(publicAssetUrl("x", base)).origin;
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
export {
  MARKETING_HOME_PARAM,
  buildFeedChannelMeta,
  buildOrganizationJsonLd,
  buildPwaManifest,
  buildSoftwareApplicationJsonLd,
  buildWebSiteJsonLd,
  getBrandCookieDomain,
  getBrandEmail,
  getBrandMailFrom,
  getBrandOrigin,
  getBrandPublicUrls,
  getDocsUrl,
  getMarketingHomePath,
  getMarketingHomeUrl,
  getSiteMetadata,
  getSiteUrl,
  localhostFallback,
  missingPublicUrlMessage,
  publicAssetOrigin,
  publicAssetUrl
};
//# sourceMappingURL=metadata-helpers.js.map