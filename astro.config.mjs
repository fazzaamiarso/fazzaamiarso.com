import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import rehypeWrap from "rehype-wrap";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

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
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), mdx(), icon()],
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});