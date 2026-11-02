# Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS, with a Framer Motion loading screen and GSAP hero animations. Dark theme only.

```bash
npm install
npm run dev
```

- `components/LoadingScreen.tsx` — 2.7s loader (word rotator, 000→100 counter, gradient progress bar)
- `components/AppWrapper.tsx` — toggles loader / page fade
- `components/Navbar.tsx` — floating pill navbar
- `components/Hero.tsx` — HLS background video (hls.js), GSAP entrance timeline, rotating role
- Theme tokens: `app/globals.css` (`[data-theme="dark"]`) and `tailwind.config.ts`
