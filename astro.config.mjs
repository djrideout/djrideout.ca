// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import remarkRehype from "remark-rehype";

import { rehypeMarkdownStyling } from "./plugins/rehypeMarkdownStyling";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkRehype],
    rehypePlugins: [rehypeMarkdownStyling],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
