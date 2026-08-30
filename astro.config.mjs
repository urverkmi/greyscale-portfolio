// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: served at urverkmi.github.io/greyscale-portfolio/,
  // not the domain root, so every internal link/asset needs the base prefix
  // (handled at render time via src/lib/base.ts's withBase()).
  site: 'https://urverkmi.github.io',
  base: '/greyscale-portfolio',
});
