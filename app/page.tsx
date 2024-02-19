import { getBlogsList } from '@/libs/microcms'
import BlogList from './_components/BlogList'
import { BLOG_LIST_LIMIT } from '@/constants'

export default async function Home() {
  const data = await getBlogsList({
    limit: BLOG_LIST_LIMIT,
  })

  return (
    <>
      <section className="flex flex-col gap-3">
        <p className="mx-auto flex w-fit items-center rounded-md bg-muted px-4 py-1 text-center text-sm">
          <span className="flex items-center after:right-2 after:mx-2 after:inline-block after:h-3.5 after:w-[1px] after:bg-muted-foreground/20">
            🏡
          </span>
          Realize the kind of space you want
        </p>
        <h1 className="pb-6 text-center text-3xl font-semibold leading-tight md:text-5xl">
          Create a future with reliable technology
        </h1>
        <p className="text-center text-lg">
          Welcome to our website dedicated to shaping a future driven by dependable
          technology. We believe that by harnessing the power of reliable and
          innovative technologies, we can create a world that is more efficient,
          sustainable, and connected.
        </p>
      </section>

      <section>
        <h2>News</h2>
        <ul className="flex flex-col gap-2 pt-4">
          <li className="flex items-center gap-4">
            <time>2022-01-01</time>Dummy News
          </li>
          <li className="flex items-center gap-4">
            <time>2022-01-01</time>Dummy News
          </li>
        </ul>
      </section>

      <section>
        <h2>Blog</h2>
        <BlogList articles={data.contents} />
      </section>
    </>
  )
}
