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
        <h1 className="text-center text-5xl font-semibold leading-tight">
          Create a future with reliable technology
        </h1>
      </section>

      <section>
        <h2>News</h2>
        <div>
          <BlogList articles={data.contents} />
        </div>
      </section>
    </>
  )
}
