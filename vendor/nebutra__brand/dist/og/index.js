// src/metadata.ts
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

// src/og/og-template.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function withAlpha(hex, alpha) {
  const n = Number.parseInt(hex.replace("#", ""), 16);
  return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${alpha})`;
}
var OG_PALETTE_DARK = {
  bg: colors.neutral["950"],
  grid: "rgba(255,255,255,0.04)",
  glowA: withAlpha(colors.primary["500"], 0.28),
  glowB: withAlpha(colors.accent["500"], 0.22),
  title: colors.white,
  subtitle: "rgba(255,255,255,0.72)",
  accent: colors.accent["500"]
};
var OG_PALETTE_LIGHT = {
  bg: colors.white,
  grid: "rgba(0,0,0,0.05)",
  glowA: withAlpha(colors.primary["500"], 0.22),
  glowB: withAlpha(colors.accent["500"], 0.2),
  title: colors.neutral["950"],
  subtitle: withAlpha(colors.neutral["950"], 0.66),
  accent: colors.primary["500"]
};
function OgTemplate({ title, subtitle, brandName, palette }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "80px",
        backgroundColor: palette.bg,
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 42%, ${palette.glowA} 0%, transparent 72%), radial-gradient(ellipse 60% 40% at 72% 70%, ${palette.glowB} 0%, transparent 75%)`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(${palette.grid} 1px, transparent 1px), linear-gradient(90deg, ${palette.grid} 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
              display: "flex"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              color: palette.accent,
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase"
            },
            children: brandName
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              color: palette.title,
              fontSize: "78px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginTop: "24px",
              maxWidth: "1040px"
            },
            children: title
          }
        ),
        subtitle ? /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              color: palette.subtitle,
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: 1.35,
              marginTop: "20px",
              maxWidth: "1040px"
            },
            children: subtitle
          }
        ) : null
      ]
    }
  );
}
export {
  OG_PALETTE_DARK,
  OG_PALETTE_LIGHT,
  OgTemplate
};
//# sourceMappingURL=index.js.map