# StayWithMVA

A cinematic, motion-led landing page for StayWithMVA rooms, PGs and co-living
spaces near North Campus, Delhi.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Content

- Contact details, pricing, amenities, stays, testimonials and FAQ copy:
  `src/data/content.js`
- Real StayWithMVA property and resident photos: `public/images/`
- Global visual system and responsive styling: `src/index.css`
- Section components: `src/components/`
- Scroll, entrance and magnetic motion setup: `src/App.jsx`

## Quality checks

```bash
npm run lint
npm run build
```

Motion automatically simplifies for touch layouts and disables for users who
prefer reduced motion.
