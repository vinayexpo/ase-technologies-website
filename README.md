# ASE Technologies

Marketing site for ASE Technologies, a digital marketing company that also builds SaaS
applications: SEO, AEO, GEO, social and ads, plus school, clinic, shop and custom software.

The visual system is defined in [`DESIGN.md`](./DESIGN.md) and implemented as Tailwind
v4 theme tokens in [`src/index.css`](./src/index.css). Icons are Iconoir, vendored as
React components in `src/components/icons`.

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Structure

- `src/components/ui/` — Button, Input, Card, Badge, Table, Container primitives
- `src/components/` — page sections (hero, services, marketing, products, campaigns, FAQ, CTA band)
- `src/index.css` — design tokens, type scale, radii, elevation, focus ring
- `public/ase-technologies-logo.png` — transparent brand logo (header, favicon)
- `public/ase-technologies-logo-white.png` — logo on a white tile (dark footer)

The contact form in the final CTA band is a prototype: it validates the email and
shows a local status message, but sends nothing.
