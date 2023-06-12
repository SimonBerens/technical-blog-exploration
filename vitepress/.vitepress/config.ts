import { defineConfig } from 'vitepress'
import {katex} from '@mdit/plugin-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog",
  description: "A VitePress Site",
  markdown: {
    config: md => {
      md.use(katex)
    }
  }
})
