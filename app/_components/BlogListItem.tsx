import { Article } from '@/libs/microcms'
import { formateDate } from '@/utils/formatDate'
import { ArrowRightCircle } from 'lucide-react'
import Link from 'next/link'

interface BlogListItemProps {
  blogs: Article
}

export default async function BlogListItem({ blogs }: BlogListItemProps) {
  const formattedDate = blogs.publishedAt ? formateDate(blogs.publishedAt) : ''

  return (
    <li className="group group flex justify-between border-b px-2 pb-2 pt-2 transition hover:border-primary/70 hover:text-primary/90">
      <Link
        href={`blog/${blogs.id}`}
        className="item flex w-full items-center gap-4 text-lg"
      >
        <span className="text-base">{formattedDate}</span>
        <span className="rounded-sm bg-secondary-foreground px-2 py-0.5 text-xs text-white transition group-hover:bg-primary/90">
          {blogs.category.name}
        </span>
        <p className="font-semibold">{blogs.title}</p>
      </Link>
      <ArrowRightCircle
        strokeWidth={1.5}
        className="translate-x-0 transition-all group-hover:translate-x-1 group-hover:text-primary/90"
      />
    </li>
  )
}
