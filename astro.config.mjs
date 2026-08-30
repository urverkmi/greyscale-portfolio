// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Custom domain (see public/CNAME) serves the site at the root, so no
  // base path is needed here — withBase() in src/lib/base.ts still works
  // unchanged since import.meta.env.BASE_URL is just "/" in that case.
  site: 'https://michelle-y-chang.com',
});
