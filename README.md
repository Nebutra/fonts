# @nebutra/fonts

Public mirror for [@nebutra/fonts](https://www.npmjs.com/package/%40nebutra%2Ffonts) from [Nebutra/Nebutra-Sailor](https://github.com/Nebutra/Nebutra-Sailor/tree/main/packages/design/fonts).

This repository is generated from the Nebutra Sailor monorepo. Package releases are cut from the monorepo and mirrored here for discovery, standalone cloning, and contribution intake.

- Canonical source: `packages/design/fonts` in `Nebutra/Nebutra-Sailor`
- Package registry: npm and GitHub Packages
- Contributions: open issues or PRs here; maintainers port accepted changes back into the monorepo source package

---
Self-hosted OSS font registry for Nebutra themes and imported DESIGN.md font
families.

The package has two entries:

- `@nebutra/fonts` is client-safe and maps a CSS font-family stack to the
  registry CSS variable that should be prepended.
- `@nebutra/fonts/next` is server-only and declares build-time `next/font`
  faces plus the combined registry class name.

## Installation

```bash
pnpm add @nebutra/fonts
```

## Usage

Apply registry font variables at the application root:

```tsx
import { fontRegistryClassName } from "@nebutra/fonts/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontRegistryClassName}>
      <body>{children}</body>
    </html>
  );
}
```

Resolve theme or DESIGN.md stacks on the client-safe path:

```ts
import { withRegistryFont } from "@nebutra/fonts";

const stack = withRegistryFont("Space Grotesk, sans-serif");
// "var(--font-space-grotesk), Space Grotesk, sans-serif"
```

## Registered Families

The registry includes Geist, Inter, Space Grotesk, Playfair Display, JetBrains
Mono, Manrope, Sora, Work Sans, DM Sans, Plus Jakarta Sans, Outfit, Figtree,
Montserrat, Lexend, Fira Code, Roboto Mono, and Source Code Pro.

## Runtime Model

`next/font` downloads and self-hosts Google fonts at build time. At runtime,
the browser requests fonts from the application origin only when an element
uses the corresponding CSS variable.

## License

MIT
