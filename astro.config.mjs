import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If deploying to https://<user>.github.io  ->  keep base '/'.
// If deploying to a project repo https://<user>.github.io/<repo>/  ->  set base: '/<repo>/'.
export default defineConfig({
  site: 'https://appsec-airito.github.io',
  base: '/',
  // Astro's dev toolbar is a local-only overlay (never ships to the production
  // build). Disabled here so it never appears, even when running `astro dev`.
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
