import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    (await import("astro-compress")).default(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    "/": "/en",
  },
  image: {
    service: squooshImageService(),
  },
});
