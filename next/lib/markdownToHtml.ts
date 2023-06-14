import {remark} from 'remark'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkMath).use(remarkRehype).use(rehypeKatex).use(rehypeStringify).process(markdown)
  return result.toString()
}
