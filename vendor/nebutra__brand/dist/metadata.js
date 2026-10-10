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
export {
  brand,
  colors,
  faviconAssets,
  fontAssets,
  logoAssets,
  ogImageDimensions,
  typography
};
//# sourceMappingURL=metadata.js.map