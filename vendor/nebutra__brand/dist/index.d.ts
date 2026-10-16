import * as react_jsx_runtime from 'react/jsx-runtime';
export { Logo, LogoEdition, LogoProps, LogoVariant, Logomark, Wordmark, logoPublicSrc } from './components/Logo.js';
import { CSSProperties } from 'react';
export { BrandColors, BrandTypography, LogoAssets, brand, colors, faviconAssets, fontAssets, logoAssets, ogImageDimensions, typography } from './metadata.js';
export { BrandService, FeedChannelMeta, MARKETING_HOME_PARAM, OrganizationJsonLd, SiteMetadataOptions, SoftwareApplicationJsonLd, WebSiteJsonLd, buildFeedChannelMeta, buildOrganizationJsonLd, buildPwaManifest, buildSoftwareApplicationJsonLd, buildWebSiteJsonLd, getBrandCookieDomain, getBrandEmail, getBrandMailFrom, getBrandOrigin, getBrandPublicUrls, getDocsUrl, getMarketingHomePath, getMarketingHomeUrl, getSiteMetadata, getSiteUrl, publicAssetUrl } from './metadata-helpers.js';
export { EASTER_EGG_REGISTRY, EasterEggEntry, MILESTONE_COPY_PACK, MilestoneCopyEntry, MilestoneId, NebutraMicrocopy, SupportedLocale, getMilestoneCopy } from './microcopy.js';
import 'next';

/**
 * Theme-aware brand mark for product chrome — one component instead of the
 * hand-rolled light/dark pairs in each app.
 *
 * The VI colour mark (`logo-color.svg`) has fixed fills that only read on a
 * light surface. On a dark surface (`.dark` ancestor) the mono mark renders
 * white instead. A brand with no logo files yet (`brand.logo === "wordmark"`,
 * what `brand:init` sets for a fresh project) shows its initial, which follows
 * currentColor in both themes.
 *
 * Framework-agnostic (plain `<img>`), so it works in Vite and Next alike.
 */
declare function BrandMark({ size, className }: {
    size?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element;
/**
 * The brand name as the wordmark asset, never as typed text: the SVG wordmark
 * in currentColor (so it follows the surrounding ink in both themes), or the
 * text wordmark for a brand that has no logo files yet.
 *
 * `inline`: sized by the surrounding text instead of `height`, for a wordmark
 * set inside a headline. The SVG sits at cap height (0.74em) on the baseline;
 * the text wordmark takes the heading's own face, size and weight, so the
 * name reads as part of the sentence at any breakpoint.
 */
declare function BrandWordmark({ height, className, inline, }: {
    height?: number;
    className?: string;
    inline?: boolean;
}): react_jsx_runtime.JSX.Element;

interface SVGProps {
    className?: string;
    /** Inline style, e.g. an em height so the mark scales with the text around it. */
    style?: CSSProperties;
    width?: number;
    height?: number;
    "aria-label"?: string;
}
declare function LogomarkSVG({ className, width, height, "aria-label": ariaLabel, }: SVGProps): react_jsx_runtime.JSX.Element;
declare function WordmarkEnSVG({ className, style, width, height, "aria-label": ariaLabel, }: SVGProps): react_jsx_runtime.JSX.Element;
interface LogoEnSVGProps extends SVGProps {
    /** Gap between logomark and wordmark (default 12px) */
    gap?: number;
}
declare function LogoEnSVG({ className, width, gap, "aria-label": ariaLabel, }: LogoEnSVGProps): react_jsx_runtime.JSX.Element;
/**
 * Full English logo with VI color fills (gradient mark + #060307 wordmark).
 * For light surfaces. Dark inverse: use LogoEnSVG with text-white instead.
 */
declare function LogoEnColorSVG({ className, width, gap, "aria-label": ariaLabel, }: LogoEnSVGProps): react_jsx_runtime.JSX.Element;

/**
 * Brand Primary Color - 云毓蓝 (Nebutra Blue)
 *
 * 云毓蓝是品牌的核心标准色。蓝色象征科技与信任，契合云毓智能在AI-SaaS与云端数据智能领域的专业定位。
 * "云"代表云端平台，"毓"寓意孕育与转化。
 */
declare const nebutraBlue: {
    readonly name: "云毓蓝";
    readonly nameEn: "Nebutra Blue";
    /** Color values */
    readonly hex: "#0033FE";
    readonly rgb: {
        r: number;
        g: number;
        b: number;
    };
    readonly hsl: {
        h: number;
        s: number;
        l: number;
    };
    /** Print color values (if needed) */
    readonly cmyk: {
        readonly c: 100;
        readonly m: 80;
        readonly y: 0;
        readonly k: 0;
    };
    /** Semantic meaning */
    readonly meaning: "象征科技与信任，体现创新、可靠与无限潜力";
    /** Usage */
    readonly usage: readonly ["主要品牌色", "标志主色", "重要按钮/CTA", "标题强调", "链接颜色"];
};
/**
 * Brand Secondary Color - 云毓青 (Nebutra Cyan)
 *
 * 品牌主要辅助色定义为"云毓青"。它源于数据流动与智能交互的瞬间，
 * 青色的通透感象征着信息的清晰与算法的灵动。
 */
declare const nebutraCyan: {
    readonly name: "云毓青";
    readonly nameEn: "Nebutra Cyan";
    /** Color values */
    readonly hex: "#0BF1C3";
    readonly rgb: {
        r: number;
        g: number;
        b: number;
    };
    readonly hsl: {
        h: number;
        s: number;
        l: number;
    };
    /** Print color values (if needed) */
    readonly cmyk: {
        readonly c: 55;
        readonly m: 0;
        readonly y: 35;
        readonly k: 0;
    };
    /** Semantic meaning */
    readonly meaning: "象征信息的清晰与算法的灵动，体现从原始数据到智慧产品的转化路径";
    /** Usage */
    readonly usage: readonly ["辅助品牌色", "渐变终止色", "交互反馈", "成功状态", "数据可视化"];
};
/**
 * Brand Gradient - 品牌渐变
 *
 * 色彩上使用清新明快的蓝绿渐变，通过线性渐变与角度渐变的方式填充，
 * 让整体更具未来感与科技的锋芒。
 */
declare const brandGradient: {
    /** Primary gradient (135°) - Logo标准渐变；中点为 OKLab 感知中点，控中段避免脏灰 */
    readonly primary: {
        readonly css: "linear-gradient(135deg, #0033FE 0%, #00A2E9 50%, #0BF1C3 100%)";
        readonly angle: 135;
        readonly stops: ({
            color: string;
            position: number;
            note: string;
        } | {
            color: string;
            position: number;
            note?: undefined;
        })[];
        readonly usage: "Logo、Hero区域、VI 品牌资产（产品 CTA 用 solid primary）";
    };
    /** Reverse gradient */
    readonly reverse: {
        readonly css: "linear-gradient(135deg, #0BF1C3 0%, #00A2E9 50%, #0033FE 100%)";
        readonly angle: 135;
        readonly stops: ({
            color: string;
            position: number;
            note: string;
        } | {
            color: string;
            position: number;
            note?: undefined;
        })[];
        readonly usage: "次要元素、hover状态";
    };
    /** Vertical gradient */
    readonly vertical: {
        readonly css: "linear-gradient(180deg, #0033FE 0%, #00A2E9 50%, #0BF1C3 100%)";
        readonly angle: 180;
        readonly stops: ({
            color: string;
            position: number;
            note: string;
        } | {
            color: string;
            position: number;
            note?: undefined;
        })[];
        readonly usage: "垂直布局元素、页面分割";
    };
    /** Radial gradient */
    readonly radial: {
        readonly css: "radial-gradient(circle, #0BF1C3 0%, #00A2E9 50%, #0033FE 100%)";
        readonly type: "radial";
        readonly stops: ({
            color: string;
            position: number;
            note: string;
        } | {
            color: string;
            position: number;
            note?: undefined;
        })[];
        readonly usage: "背景光晕、焦点效果";
    };
};
/**
 * Neutral Colors - 黑白 (VI标准)
 */
declare const neutralColors: {
    readonly white: {
        readonly name: "白";
        readonly nameEn: "White";
        readonly hex: "#FFFFFF";
        readonly rgb: {
            readonly r: 255;
            readonly g: 255;
            readonly b: 255;
        };
        readonly usage: "背景、文字反白";
    };
    readonly black: {
        readonly name: "黑";
        readonly nameEn: "Black";
        readonly hex: "#000000";
        readonly rgb: {
            readonly r: 0;
            readonly g: 0;
            readonly b: 0;
        };
        readonly usage: "正文文字、墨稿标志";
    };
};
/**
 * Color Prohibited Uses - 色彩禁用示例
 *
 * 为了使品牌标准色彩在未来的传播中更加科学有效，设置标准色和辅助色的使用规范。
 */
declare const colorProhibitedUses: readonly [{
    readonly id: "high-saturation-overlay";
    readonly name: "高饱和度背景与颜色重叠";
    readonly description: "禁用高饱和度背景与颜色重叠，避免颜色过于刺眼，影响品牌形象";
    readonly example: "不要在高饱和度的红、橙、黄等背景上使用品牌色";
}, {
    readonly id: "high-brightness-overlay";
    readonly name: "明度过高的重叠颜色";
    readonly description: "禁用明度过高的重叠颜色，避免影响内容的识别性";
    readonly example: "不要将浅色品牌色放在浅色背景上";
}, {
    readonly id: "modify-brand-colors";
    readonly name: "修改品牌标准色";
    readonly description: "禁止调整品牌色的色相、饱和度或明度";
    readonly example: "不要将云毓蓝调成紫色或浅蓝";
}, {
    readonly id: "non-brand-gradient";
    readonly name: "非品牌渐变";
    readonly description: "禁止使用非品牌标准的渐变组合";
    readonly example: "不要将云毓蓝与其他非品牌色进行渐变";
}];
/**
 * Allowed Color Combinations - 允许使用的色彩组合
 */
declare const allowedColorCombinations: readonly [{
    readonly name: "品牌渐变背景 + 白色文字";
    readonly background: "linear-gradient(135deg, #0033FE 0%, #00A2E9 50%, #0BF1C3 100%)";
    readonly foreground: "#FFFFFF";
    readonly contrast: "AAA";
}, {
    readonly name: "白色背景 + 云毓蓝文字";
    readonly background: "#FFFFFF";
    readonly foreground: "#0033FE";
    readonly contrast: "AAA";
}, {
    readonly name: "深色背景 + 云毓青强调";
    readonly background: "#000000";
    readonly foreground: "#0BF1C3";
    readonly contrast: "AAA";
}, {
    readonly name: "云毓蓝背景 + 白色文字";
    readonly background: "#0033FE";
    readonly foreground: "#FFFFFF";
    readonly contrast: "AAA";
}];
/**
 * Nebutra Blue Color Scale - 云毓蓝色阶
 *
 * Re-exported from `colors.primary` (metadata.ts SSOT).
 * Direct hex literals were removed to eliminate the multi-source drift documented
 * in docs/design-system/token-drift-audit.md.
 */
declare const nebutraBlueScale: {
    readonly "50": "#f0f4ff";
    readonly "100": "#dbe4ff";
    readonly "200": "#bac8ff";
    readonly "300": "#91a7ff";
    readonly "400": "#5c7cfa";
    readonly "500": "#0033FE";
    readonly "600": "#002ad4";
    readonly "700": "#0021ab";
    readonly "800": "#001882";
    readonly "900": "#000f59";
    readonly "950": "#000830";
};
/**
 * Nebutra Cyan Color Scale - 云毓青色阶
 *
 * Re-exported from `colors.accent` (metadata.ts SSOT).
 */
declare const nebutraCyanScale: {
    readonly "50": "#e6fff8";
    readonly "100": "#b3ffec";
    readonly "200": "#80ffe0";
    readonly "300": "#4dfcd4";
    readonly "400": "#1af7c8";
    readonly "500": "#0BF1C3";
    readonly "600": "#09c9a3";
    readonly "700": "#07a183";
    readonly "800": "#057963";
    readonly "900": "#035143";
    readonly "950": "#012923";
};
/**
 * Extended Neutral Colors - Slate (cool blue-undertone gray scale)
 *
 * Re-exported from `colors.neutral` (metadata.ts SSOT). Slate, not Zinc.
 * The `0` step (white) is omitted to keep the legacy 50–950 scale shape intact.
 */
declare const nebutraNeutralScale: {
    readonly 50: "#f9fafb";
    readonly 100: "#f3f4f6";
    readonly 200: "#e4e5e8";
    readonly 300: "#d2d4d8";
    readonly 400: "#9fa1a5";
    readonly 500: "#717377";
    readonly 600: "#515357";
    readonly 700: "#3f4044";
    readonly 800: "#26272a";
    readonly 900: "#18191c";
    readonly 950: "#0b0c0d";
};
/**
 * Semantic Color Tokens - 语义化颜色
 *
 * Pre-defined combinations for common UI patterns
 */
declare const semanticColors: {
    readonly surface: {
        readonly light: {
            readonly default: "#f9fafb";
            readonly subtle: "#f3f4f6";
            readonly muted: "#e4e5e8";
        };
        readonly dark: {
            readonly default: "#0b0c0d";
            readonly subtle: "#18191c";
            readonly muted: "#26272a";
        };
    };
    readonly text: {
        readonly light: {
            readonly primary: "#18191c";
            readonly secondary: "#515357";
            readonly muted: "#9fa1a5";
            readonly inverse: "#ffffff";
        };
        readonly dark: {
            readonly primary: "#f9fafb";
            readonly secondary: "#d2d4d8";
            readonly muted: "#717377";
            readonly inverse: "#18191c";
        };
    };
    readonly border: {
        readonly light: {
            readonly default: "#e4e5e8";
            readonly subtle: "#f3f4f6";
            readonly strong: "#d2d4d8";
        };
        readonly dark: {
            readonly default: "#26272a";
            readonly subtle: "#18191c";
            readonly strong: "#3f4044";
        };
    };
    readonly brand: {
        readonly primary: "#0033FE";
        readonly primaryHover: "#002ad4";
        readonly primaryActive: "#0021ab";
        readonly accent: "#0BF1C3";
        readonly accentHover: "#09c9a3";
        readonly accentActive: "#07a183";
    };
};
/**
 * Color Scale Generator (legacy - prefer using pre-defined scales)
 */
declare const generateColorScale: (baseHex: string) => {
    readonly "50": "#f0f4ff";
    readonly "100": "#dbe4ff";
    readonly "200": "#bac8ff";
    readonly "300": "#91a7ff";
    readonly "400": "#5c7cfa";
    readonly "500": "#0033FE";
    readonly "600": "#002ad4";
    readonly "700": "#0021ab";
    readonly "800": "#001882";
    readonly "900": "#000f59";
    readonly "950": "#000830";
} | {
    readonly "50": "#e6fff8";
    readonly "100": "#b3ffec";
    readonly "200": "#80ffe0";
    readonly "300": "#4dfcd4";
    readonly "400": "#1af7c8";
    readonly "500": "#0BF1C3";
    readonly "600": "#09c9a3";
    readonly "700": "#07a183";
    readonly "800": "#057963";
    readonly "900": "#035143";
    readonly "950": "#012923";
} | {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
};
type ColorProhibitedUse = (typeof colorProhibitedUses)[number];
type AllowedColorCombination = (typeof allowedColorCombinations)[number];

/**
 * Logo Usage Guidelines - 品牌标志使用规范
 *
 * Based on: 云毓智能品牌视觉识别手册 (Nebutra Brand Visual Identity Manual)
 */
/**
 * Logo Safety Zone (安全空间)
 *
 * 标志应用时必须保留安全空间，最小边距不小于标志高度的 1/4
 * The minimum margin around the logo should be at least 1/4 of the logo height
 */
declare const logoSafetyZone: {
    /** Safety zone ratio relative to logo height */
    readonly ratio: 0.25;
    /** Calculate safety zone in pixels */
    readonly calculate: (logoHeight: number) => {
        margin: number;
        totalWidth: number;
        totalHeight: number;
    };
};
/**
 * Minimum Logo Sizes (最小化比例限定)
 */
declare const logoMinSize: {
    /** Print media: height ≥ 6mm */
    readonly print: {
        readonly minHeightMm: 6;
        readonly description: "印刷媒体上最小使用：高度大于等于 6mm";
    };
    /** Digital media: height ≥ 35px */
    readonly digital: {
        readonly minHeightPx: 35;
        readonly description: "网络媒体上最小使用：高度大于等于 35px";
    };
};
/**
 * Logo Variants (标志组合形式)
 */
declare const logoVariants: {
    /** 标志左右组合 - Horizontal combination */
    readonly horizontal: {
        readonly zh: "logo-horizontal-zh";
        readonly en: "logo-horizontal-en";
        readonly useCase: "适配横向空间（如门店招牌、横幅广告）";
    };
    /** 标志上下组合 - Vertical combination */
    readonly vertical: {
        readonly zh: "logo-vertical-zh";
        readonly en: "logo-vertical-en";
        readonly useCase: "适配纵向空间（如名片、工牌）";
    };
    /** 单色组合 - Monochrome combinations (compliant edition only) */
    readonly horizontalMono: {
        readonly zh: "logo-horizontal-zh-mono";
        readonly en: "logo-horizontal-en-mono";
        readonly useCase: "适配单色印刷横向场景（传真、黑白打印）";
    };
    readonly verticalMono: {
        readonly zh: "logo-vertical-zh-mono";
        readonly en: "logo-vertical-en-mono";
        readonly useCase: "适配单色印刷纵向场景（名片黑白版、工牌单色版）";
    };
    /** 标志单独使用 */
    readonly logomark: {
        readonly color: "logo-color";
        readonly inverse: "logo-inverse";
        readonly mono: "logo-mono";
    };
    /** 品牌名称单独使用 */
    readonly wordmark: {
        readonly zh: "logo-zh";
        readonly en: "logo-en";
        readonly zhEn: "logo-zh-en";
    };
};
/**
 * Product-chrome dual-theme rule (2026-07 lesson)
 *
 * Nav / shell must **decouple** logomark from wordmark:
 * - Light mark: multi-path VI color asset (`logo-color`), not mono+fake gradient
 * - Dark mark: mono `currentColor` white
 * - Wordmark: independent `currentColor` both themes
 *
 * Do not theme by swapping one baked horizontal file for one mono composite.
 * See packages/design/brand/README.md and apps/sailor-docs nav layout.
 */
declare const productChromeLogoRule: {
    readonly decoupleMarkAndWordmark: true;
    readonly lightMark: "logo-color";
    readonly darkMark: "LogomarkSVG + text-white";
    readonly wordmark: "WordmarkEnSVG + theme text token";
    readonly avoid: readonly ["LogoEnColorSVG for nav", "logo-horizontal-en light + LogoEnSVG dark whole-swap", "CSS filter invert on color SVGs"];
};
/**
 * Logo Editions (品牌标志版本)
 *
 * v1.0 经典版与 v2.0 合规版的区别在于中文"毓"字的写法。
 */
declare const logoEditions: {
    readonly classic: {
        readonly version: "1.0";
        readonly name: "经典版";
        readonly nameEn: "Classic";
        readonly description: "原始设计版本，'毓'字更美观流畅";
        readonly useCases: readonly ["App界面", "网站", "产品内嵌", "营销物料", "社交媒体"];
        readonly directory: "logo";
    };
    readonly compliant: {
        readonly version: "2.0";
        readonly name: "合规版";
        readonly nameEn: "Compliant";
        readonly description: "商标合规版本，'毓'字符合标准字形规范";
        readonly useCases: readonly ["法律文件", "商标注册", "正式合同", "政府报备", "发票/收据"];
        readonly directory: "logo-compliant";
    };
};
/**
 * Logo Color Usage (标志颜色使用)
 */
declare const logoColorUsage: {
    /** Preferred: Full color gradient (彩色渐变) */
    readonly preferred: "color";
    /** Allowed: Single color versions */
    readonly allowed: readonly ["inverse", "mono"];
    /** Rules */
    readonly rules: {
        readonly lightBackground: "优先使用彩色标识";
        readonly darkBackground: "允许使用反白标识";
        readonly complexBackground: "禁止在复杂背景中使用反白标识，以防辨识度降低";
        readonly print: "单色印刷时使用墨稿版本";
        readonly special: "烫金、烫银等特殊工艺使用对应墨稿版本";
    };
};
/**
 * Prohibited Logo Uses (使用限定 / 禁用规则)
 *
 * 从"反向约束"角度保障品牌标志的完整性、识别性和品牌形象的一致性
 */
declare const logoProhibitedUses: readonly [{
    readonly id: "stretch";
    readonly name: "拉伸变形";
    readonly description: "禁止对标志进行任何方向的拉伸或压缩";
}, {
    readonly id: "rotate";
    readonly name: "旋转";
    readonly description: "禁止旋转标志角度";
}, {
    readonly id: "outline";
    readonly name: "描边";
    readonly description: "禁止给标志添加描边效果";
}, {
    readonly id: "shadow";
    readonly name: "投影";
    readonly description: "禁止给标志添加投影效果";
}, {
    readonly id: "gradient-modify";
    readonly name: "修改渐变";
    readonly description: "禁止修改标志原有的渐变色彩";
}, {
    readonly id: "recolor";
    readonly name: "随意换色";
    readonly description: "禁止使用非品牌标准色替换标志颜色";
}, {
    readonly id: "partial";
    readonly name: "部分使用";
    readonly description: "禁止只使用标志的一部分";
}, {
    readonly id: "modify-elements";
    readonly name: "修改元素";
    readonly description: "禁止添加、删除或修改标志中的任何元素";
}, {
    readonly id: "low-contrast";
    readonly name: "低对比度";
    readonly description: "禁止在对比度过低的背景上使用标志";
}, {
    readonly id: "complex-bg";
    readonly name: "复杂背景";
    readonly description: "禁止在浅色或复杂背景中使用反白标识";
}];
/**
 * Logo Grid System (方格制图)
 *
 * 通过精确的网格比例，规定标志中各元素的尺寸、间距等参数
 */
declare const logoGrid: {
    /** Logo mark grid unit */
    readonly logomark: {
        readonly gridUnit: "a";
        readonly width: "7.5a";
        readonly height: "7.5a";
    };
    /** Chinese wordmark grid */
    readonly wordmarkCn: {
        readonly gridUnit: "a";
        readonly width: "13.5a";
        readonly height: "3a";
    };
    /** English wordmark grid */
    readonly wordmarkEn: {
        readonly gridUnit: "a";
        readonly width: "14a";
        readonly height: "2a";
    };
    /** Combined logo grid (Chinese + English) */
    readonly combined: {
        readonly gridUnit: "a";
        readonly width: "13.5a";
        readonly height: "5.5a";
    };
};
/**
 * Logo Special Versions (特殊版本)
 */
declare const logoSpecialVersions: {
    /** 墨稿版本 - Monochrome versions */
    readonly monochrome: {
        readonly black: "用于单色印刷、传真等场景";
        readonly white: "用于深色背景、反白印刷";
    };
    /** 工艺版本 - Special process versions */
    readonly process: {
        readonly gold: "烫金工艺";
        readonly silver: "烫银工艺";
    };
};
type LogoVariant = keyof typeof logoVariants;
type LogoProhibitedUse = (typeof logoProhibitedUses)[number];

/**
 * Brand Guidelines - 品牌使用规范
 *
 * Based on: 云毓智能品牌视觉识别手册 (Nebutra Brand Visual Identity Manual)
 *
 * This module provides programmatic access to brand guidelines for:
 * - Design system integration
 * - Automated compliance checking
 * - Documentation generation
 */

/**
 * Complete Brand Guidelines Object
 *
 * Unified export for easy consumption
 */
declare const brandGuidelines: {
    readonly logo: {
        readonly safetyZone: {
            readonly ratio: 0.25;
            readonly description: "最小边距不小于标志高度的 1/4";
        };
        readonly minSize: {
            readonly print: {
                readonly minHeightMm: 6;
            };
            readonly digital: {
                readonly minHeightPx: 35;
            };
        };
    };
    readonly colors: {
        readonly primary: {
            readonly name: "云毓蓝";
            readonly hex: "#0033FE";
        };
        readonly secondary: {
            readonly name: "云毓青";
            readonly hex: "#0BF1C3";
        };
        readonly gradient: "linear-gradient(135deg, #0033FE 0%, #00A2E9 50%, #0BF1C3 100%)";
    };
    readonly typography: {
        readonly cn: string;
        readonly en: string;
        readonly heading: string;
        readonly weights: readonly ["Regular", "Medium", "SemiBold", "Bold"];
    };
};
type BrandGuidelines = typeof brandGuidelines;

/**
 * Nebutra Brand Motion Language
 *
 * Three core motions derived from the "云端聚合" concept:
 * - emerge (涌现): data materializing from the cloud
 * - flow (流动): data streaming through pipelines
 * - pulse (脉动): system breathing / alive indicator
 */
declare const brandEasing: {
    /** Signature Nebutra ease — smooth deceleration with slight overshoot */
    readonly brand: readonly [0.16, 1, 0.3, 1];
    /** For enter animations */
    readonly enter: readonly [0.16, 1, 0.3, 1];
    /** For exit animations — ease-out, never ease-in */
    readonly exit: readonly [0.16, 1, 0.3, 1];
    /** Spring-like bounce */
    readonly spring: readonly [0.34, 1.56, 0.64, 1];
};
/** Four-rail motion durations in seconds (Framer Motion `transition.duration`). */
declare const motionDurationSec: {
    /** 100ms — micro-feedback */
    readonly micro: 0.1;
    /** 200ms — state flow (default) */
    readonly flow: 0.2;
    /** 300ms — content unveil */
    readonly reveal: 0.3;
    /** 500ms — hero-grade cinematic */
    readonly cinematic: 0.5;
};
declare const brandSpring: {
    /** Default interactive spring */
    readonly default: {
        readonly type: "spring";
        readonly stiffness: 200;
        readonly damping: 24;
        readonly mass: 1;
    };
    /** Bouncy, playful spring */
    readonly bouncy: {
        readonly type: "spring";
        readonly stiffness: 300;
        readonly damping: 15;
        readonly mass: 0.8;
    };
    /** Heavy, deliberate spring */
    readonly heavy: {
        readonly type: "spring";
        readonly stiffness: 120;
        readonly damping: 28;
        readonly mass: 1.5;
    };
    /** Gentle reveal spring */
    readonly gentle: {
        readonly type: "spring";
        readonly stiffness: 80;
        readonly damping: 20;
        readonly mass: 1;
    };
};
/** 涌现 — data materializing from the cloud. Cinematic entrance rail. */
declare const emerge: {
    readonly initial: {
        readonly opacity: 0;
        readonly transform: "translateY(16px)";
        readonly filter: "blur(6px)";
    };
    readonly animate: {
        readonly opacity: 1;
        readonly transform: "translateY(0px)";
        readonly filter: "blur(0px)";
    };
    readonly exit: {
        readonly opacity: 0;
        readonly transform: "translateY(-8px)";
        readonly filter: "blur(4px)";
        readonly transition: {
            readonly duration: 0.2;
            readonly ease: readonly [0.16, 1, 0.3, 1];
        };
    };
    readonly transition: {
        readonly duration: 0.5;
        readonly ease: readonly [0.16, 1, 0.3, 1];
    };
};
/** 流动 — data streaming through pipelines. Reveal rail. */
declare const flow: {
    readonly initial: {
        readonly opacity: 0;
        readonly transform: "translateX(-20px)";
    };
    readonly animate: {
        readonly opacity: 1;
        readonly transform: "translateX(0px)";
    };
    readonly exit: {
        readonly opacity: 0;
        readonly transform: "translateX(20px)";
        readonly transition: {
            readonly duration: 0.2;
            readonly ease: readonly [0.16, 1, 0.3, 1];
        };
    };
    readonly transition: {
        readonly duration: 0.3;
        readonly ease: readonly [0.16, 1, 0.3, 1];
    };
};
/** 脉动 — system breathing / alive */
declare const pulse: {
    readonly animate: {
        readonly scale: readonly [1, 1.015, 1];
        readonly opacity: readonly [1, 0.85, 1];
    };
    readonly transition: {
        readonly duration: 3;
        readonly repeat: number;
        readonly ease: "easeInOut";
    };
};
/** 漂浮 — gentle vertical drift for floating UI elements */
declare const float: {
    readonly animate: {
        readonly y: readonly [0, -8, 0];
    };
    readonly transition: {
        readonly duration: 4;
        readonly repeat: number;
        readonly ease: "easeInOut";
    };
};
/** Stagger container for emerge animations */
declare const stagger: (delayPerChild?: number) => {
    readonly animate: {
        readonly transition: {
            readonly staggerChildren: number;
        };
    };
};
/** Interactive micro-motions — flow rail for hover, micro rail for tap. */
declare const interactive: {
    readonly hover: {
        readonly scale: 1.02;
        readonly transition: {
            readonly duration: 0.2;
            readonly ease: readonly [0.16, 1, 0.3, 1];
        };
    };
    readonly tap: {
        readonly scale: 0.98;
        readonly transition: {
            readonly duration: 0.1;
        };
    };
    readonly hoverLift: {
        readonly y: -4;
        readonly transition: {
            readonly duration: 0.2;
            readonly ease: readonly [0.16, 1, 0.3, 1];
        };
    };
};
/** Viewport trigger defaults */
declare const viewport: {
    readonly once: {
        readonly once: true;
        readonly margin: "-80px";
    };
    readonly always: {
        readonly once: false;
        readonly margin: "-40px";
    };
};
declare const brandMotion: {
    readonly emerge: {
        readonly initial: {
            readonly opacity: 0;
            readonly transform: "translateY(16px)";
            readonly filter: "blur(6px)";
        };
        readonly animate: {
            readonly opacity: 1;
            readonly transform: "translateY(0px)";
            readonly filter: "blur(0px)";
        };
        readonly exit: {
            readonly opacity: 0;
            readonly transform: "translateY(-8px)";
            readonly filter: "blur(4px)";
            readonly transition: {
                readonly duration: 0.2;
                readonly ease: readonly [0.16, 1, 0.3, 1];
            };
        };
        readonly transition: {
            readonly duration: 0.5;
            readonly ease: readonly [0.16, 1, 0.3, 1];
        };
    };
    readonly flow: {
        readonly initial: {
            readonly opacity: 0;
            readonly transform: "translateX(-20px)";
        };
        readonly animate: {
            readonly opacity: 1;
            readonly transform: "translateX(0px)";
        };
        readonly exit: {
            readonly opacity: 0;
            readonly transform: "translateX(20px)";
            readonly transition: {
                readonly duration: 0.2;
                readonly ease: readonly [0.16, 1, 0.3, 1];
            };
        };
        readonly transition: {
            readonly duration: 0.3;
            readonly ease: readonly [0.16, 1, 0.3, 1];
        };
    };
    readonly pulse: {
        readonly animate: {
            readonly scale: readonly [1, 1.015, 1];
            readonly opacity: readonly [1, 0.85, 1];
        };
        readonly transition: {
            readonly duration: 3;
            readonly repeat: number;
            readonly ease: "easeInOut";
        };
    };
    readonly float: {
        readonly animate: {
            readonly y: readonly [0, -8, 0];
        };
        readonly transition: {
            readonly duration: 4;
            readonly repeat: number;
            readonly ease: "easeInOut";
        };
    };
    readonly stagger: (delayPerChild?: number) => {
        readonly animate: {
            readonly transition: {
                readonly staggerChildren: number;
            };
        };
    };
    readonly interactive: {
        readonly hover: {
            readonly scale: 1.02;
            readonly transition: {
                readonly duration: 0.2;
                readonly ease: readonly [0.16, 1, 0.3, 1];
            };
        };
        readonly tap: {
            readonly scale: 0.98;
            readonly transition: {
                readonly duration: 0.1;
            };
        };
        readonly hoverLift: {
            readonly y: -4;
            readonly transition: {
                readonly duration: 0.2;
                readonly ease: readonly [0.16, 1, 0.3, 1];
            };
        };
    };
    readonly viewport: {
        readonly once: {
            readonly once: true;
            readonly margin: "-80px";
        };
        readonly always: {
            readonly once: false;
            readonly margin: "-40px";
        };
    };
    readonly brandEasing: {
        /** Signature Nebutra ease — smooth deceleration with slight overshoot */
        readonly brand: readonly [0.16, 1, 0.3, 1];
        /** For enter animations */
        readonly enter: readonly [0.16, 1, 0.3, 1];
        /** For exit animations — ease-out, never ease-in */
        readonly exit: readonly [0.16, 1, 0.3, 1];
        /** Spring-like bounce */
        readonly spring: readonly [0.34, 1.56, 0.64, 1];
    };
    readonly brandSpring: {
        /** Default interactive spring */
        readonly default: {
            readonly type: "spring";
            readonly stiffness: 200;
            readonly damping: 24;
            readonly mass: 1;
        };
        /** Bouncy, playful spring */
        readonly bouncy: {
            readonly type: "spring";
            readonly stiffness: 300;
            readonly damping: 15;
            readonly mass: 0.8;
        };
        /** Heavy, deliberate spring */
        readonly heavy: {
            readonly type: "spring";
            readonly stiffness: 120;
            readonly damping: 28;
            readonly mass: 1.5;
        };
        /** Gentle reveal spring */
        readonly gentle: {
            readonly type: "spring";
            readonly stiffness: 80;
            readonly damping: 20;
            readonly mass: 1;
        };
    };
    readonly motionDurationSec: {
        /** 100ms — micro-feedback */
        readonly micro: 0.1;
        /** 200ms — state flow (default) */
        readonly flow: 0.2;
        /** 300ms — content unveil */
        readonly reveal: 0.3;
        /** 500ms — hero-grade cinematic */
        readonly cinematic: 0.5;
    };
};

/**
 * Nebutra-Sailor — Product Positioning DNA
 *
 * Source of truth for product identity, use-case copy, and ICP definition.
 * Consumed by GitHub README, About pages, and marketing copy.
 *
 * Principle: Every claim here is substantiated by code in this monorepo.
 * Do not add aspirational copy without backing infrastructure.
 */
declare const positioning: {
    /**
     * One-liner for README, og:description, pitch decks.
     * Audience: AI founders, SaaS engineering teams (1–10 engineers).
     */
    readonly tagline: "Ship AI products, not boilerplate.";
    /**
     * Two-sentence elevator pitch.
     */
    readonly description: string;
    /**
     * GitHub repository description (160 chars max).
     */
    readonly repoDescription: "AI-native SaaS monorepo: Next.js 16 + Hono + Python services · Clerk · Stripe · multi-tenancy · K8s · OTel · design system";
    readonly icp: {
        readonly primary: "AI founders building SaaS products with small engineering teams (1–10 people)";
        readonly secondary: "SaaS engineering teams adopting AI features into existing products";
        readonly antiTarget: "Large enterprise teams with dedicated platform engineering — this template makes opinionated choices they will override";
    };
    /**
     * Capability pillars — each backed by actual packages/apps in this repo.
     * Update when underlying packages change.
     */
    readonly pillars: readonly [{
        readonly id: "ai-native";
        readonly title: "AI-Native Architecture";
        readonly headline: "AI capabilities built in, not bolted on.";
        readonly bullets: readonly ["Python FastAPI AI service with OpenAI / Anthropic client patterns", "Streaming responses and embeddings pipelines", "RecommendationSystem (recsys) service for personalization", "Event ingestion pipeline for AI training data collection"];
        readonly packages: readonly ["backends/python/ai", "backends/python/recsys", "backends/python/event-ingest"];
    }, {
        readonly id: "saas-complete";
        readonly title: "SaaS-Complete Infrastructure";
        readonly headline: "Every SaaS primitive, wired together.";
        readonly bullets: readonly ["Clerk authentication with multi-tenant org support", "Stripe subscriptions, usage billing, and credits via @nebutra/billing", "Entitlement system for feature gating", "RBAC-ready tenant context propagated through the API gateway"];
        readonly packages: readonly ["packages/billing", "backends/gateway", "packages/preset"];
    }, {
        readonly id: "design-system";
        readonly title: "Production Design System";
        readonly headline: "Ship polished UI from day one.";
        readonly bullets: readonly ["541 Geist icons as tree-shakable TSX components", "Radix UI + Lobe UI component library with brand tokens", "Design-language swap via Brand Packages (html[data-brand] + applyLanguage)", "Storybook 8 with auto-generated docs and visual regression via Chromatic"];
        readonly packages: readonly ["packages/ui", "packages/tokens", "packages/icons", "apps/storybook"];
    }, {
        readonly id: "polyglot-monorepo";
        readonly title: "Polyglot Monorepo";
        readonly headline: "Right tool for each service, one unified repo.";
        readonly bullets: readonly ["Next.js 16 apps (web dashboard, landing page, design docs)", "Hono API gateway with OpenAPI spec and type-safe routes", "Python FastAPI microservices for AI, billing, content, e-commerce, web3", "Turborepo with affected-only builds and remote caching"];
        readonly packages: readonly ["apps/web", "backends/gateway", "backends/python/*"];
    }, {
        readonly id: "enterprise-infra";
        readonly title: "Enterprise-Grade Infrastructure";
        readonly headline: "Production patterns, not prototyping shortcuts.";
        readonly bullets: readonly ["OpenTelemetry distributed tracing via @nebutra/logger (Pino + OTLP)", "Kubernetes with NetworkPolicy, PDB, HPA, and hardened security contexts", "Supply chain security: SHA-pinned Docker images and GitHub Actions", "CSP nonce-based headers, rate limiting, and structured error handling"];
        readonly packages: readonly ["packages/logger", "packages/rate-limit", "infra/iac/k8s"];
    }];
    /**
     * Three genuine use cases with corresponding apps/packages in this repo.
     * These are templates for what you build ON TOP of Nebutra-Sailor,
     * not features of the template itself.
     */
    readonly useCases: readonly [{
        readonly id: "ai-saas";
        readonly title: "AI SaaS Product";
        readonly description: string;
        readonly examples: readonly ["AI writing tools", "AI data analysis", "AI copilots", "AI workflow automation"];
        readonly starterCommand: "pnpm dev";
    }, {
        readonly id: "marketing-landing";
        readonly title: "SaaS Marketing & Landing Pages";
        readonly description: string;
        readonly examples: readonly ["Product landing pages", "Pricing pages", "Blog + SEO content"];
        readonly starterCommand: "pnpm dev:landing";
    }, {
        readonly id: "design-system-standalone";
        readonly title: "AI Product Design System";
        readonly description: string;
        readonly examples: readonly ["Internal component libraries", "Multi-product design systems"];
        readonly starterCommand: "pnpm dev:design";
    }];
    /**
     * Honest competitive context. Not claims, just positioning anchors.
     */
    readonly benchmarks: {
        readonly template: "t3-app, create-t3-turbo — adds AI services, Python backend, design system";
        readonly infra: "Vercel templates — adds Kubernetes, multi-service, enterprise security";
        readonly aiFramework: "LangChain templates — adds full SaaS commercialization layer";
    };
};
type Positioning = typeof positioning;
type ProductPillar = (typeof positioning.pillars)[number];
type UseCase = (typeof positioning.useCases)[number];

export { type AllowedColorCombination, type BrandGuidelines, BrandMark, BrandWordmark, type ColorProhibitedUse, LogoEnColorSVG, LogoEnSVG, type LogoEnSVGProps, type LogoProhibitedUse, type LogoVariant as LogoVariantGuideline, LogomarkSVG, type Positioning, type ProductPillar, type UseCase, WordmarkEnSVG, allowedColorCombinations, brandEasing, brandGradient, brandGuidelines, brandMotion, brandSpring, colorProhibitedUses, emerge, float, flow, generateColorScale, interactive, logoColorUsage, logoEditions, logoGrid, logoMinSize, logoProhibitedUses, logoSafetyZone, logoSpecialVersions, logoVariants, motionDurationSec, nebutraBlue, nebutraBlueScale, nebutraCyan, nebutraCyanScale, nebutraNeutralScale, neutralColors, positioning, productChromeLogoRule, pulse, semanticColors, stagger, viewport };
