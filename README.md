# abemt.dev

My portfolio site. React 19 + TypeScript + Vite, Tailwind for styling, deployed on Vercel.

Live: [abemt.dev](https://www.abemt.dev)

## Notes

- Type system: Space Grotesk for headings, Inter for body.
- Single accent color, white background — no page builders, no template.
- Project case studies open in a modal rendered through a React portal (the projects section animates in with a CSS transform, which would otherwise trap `position: fixed` children — worth knowing if you reuse this pattern).
- Content lives in `constants.tsx`; components stay dumb.

## Run

```bash
npm install
npm run dev
```

`npm run build` for the production bundle.
