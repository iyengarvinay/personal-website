// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Update this to your final domain before deploying.
export default defineConfig({
  site: 'https://www.vinayiyengar.com',
  integrations: [mdx(), sitemap()],
});
