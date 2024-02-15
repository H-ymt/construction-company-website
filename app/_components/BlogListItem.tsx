import { Article } from '@/libs/microcms'
import { formateDate } from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

interface BlogListItemProps {
  blogs: Article
}

export default async function BlogListItem({ blogs }: BlogListItemProps) {
  const formattedDate = blogs.publishedAt ? formateDate(blogs.publishedAt) : ''

  return (
    <li className="group transition hover:border-primary/70 hover:text-primary/90">
      <Link
        href={`blog/${blogs.id}`}
        className="flex flex-col items-start gap-3 text-lg"
      >
        {blogs.eyecatch && (
          <Image
            src={blogs.eyecatch.url}
            width={blogs.eyecatch.width}
            height={blogs.eyecatch.height}
            alt="Blog eyecatch"
            className="rounded-md"
          />
        )}
        <div className="flex items-center gap-2">
          <span className="text-base">{formattedDate}</span>
          <span className="rounded-sm bg-secondary-foreground px-2 py-0.5 text-xs text-white transition group-hover:bg-primary/90">
            {blogs.category.name}
          </span>
        </div>
        <p className="text-xl font-semibold">{blogs.title}</p>
      </Link>
    </li>
  )
}
