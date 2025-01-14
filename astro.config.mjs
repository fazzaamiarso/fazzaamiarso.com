import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import rehypeWrap from "rehype-wrap";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.fazzaamiarso.com",
  markdown: {
    rehypePlugins: [
      [
        rehypeWrap,
        {
          wrapper: "div.image-wrapper",
          selector: "img",
          fallback: false,
        },
      ],
    ],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    expressiveCode({
      plugins: [pluginLineNumbers()],
      themes: ["github-dark-dimmed"],
    }),
    mdx(),
    icon(),
    sitemap(),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
