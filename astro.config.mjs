import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Change `site` after you know the GitHub Pages URL.
  // For user/org pages at <user>.github.io this is just the root.
  // For project pages the site is `https://<user>.github.io` and base is `/<repo>/`.
  site: 'https://peterting.github.io',
  base: '/travian-guide',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap()],
  vite: {
    css: {
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]',
      },
    },
  },
});
