// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://pierre-gaillard.dev",
  trailingSlash: "never",
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap(),
  ],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
