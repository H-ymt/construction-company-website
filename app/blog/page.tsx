import { BLOG_LIST_LIMIT } from '@/constants'
import { getBlogsList } from '@/libs/microcms'
import BlogList from '../_components/BlogList'

export default async function Page() {
  const data = await getBlogsList({
    limit: BLOG_LIST_LIMIT,
  })

  return (
    <>
      <h1>Blog</h1>
      <BlogList articles={data.contents} />
    </>
  )
}
