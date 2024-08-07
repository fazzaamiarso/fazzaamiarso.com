import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import rehypeWrap from "rehype-wrap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://fazzaamiarso.com",
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
    mdx(),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
