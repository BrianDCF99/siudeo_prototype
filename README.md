# SIUDEO website prototype

A three-page, frontend-only redesign prototype for Vancouver ceramic artist Brianne Siu.

- `/` — artist-led storefront with collection previews, featured pieces, and studio notes
- `/shop` — filterable product catalog with pricing and prototype shopping controls
- `/about` — artist profile with Brianne’s studio portrait and verified background

Checkout, cart persistence, authentication, newsletter delivery, and file uploads are intentionally not implemented. Buttons and fields demonstrate the intended experience only.

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL. The retained admin source files are not exposed as a route in this prototype.

## Verify

```bash
npm run typecheck
npm run build
```

## Content and images

Product names, prices, product facts, artist biography, and photography were adapted from the existing public [SIUDEO website](https://www.siudeo.com/) for this replacement-design prototype. Shared content lives in `src/data/site.ts` so a future CMS or API can replace the static data without rewriting page components.

See `RESEARCH.md` for the conversion rationale, evidence, caveats, and recommended measurement plan before production launch.
