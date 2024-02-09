import { Article } from '@/libs/microcms'
import { formateDate } from '@/utils/formatDate'
import Link from 'next/link'

interface BlogListItemProps {
  blogs: Article
}

export default async function BlogListItem({ blogs }: BlogListItemProps) {
  const formattedDate = blogs.publishedAt ? formateDate(blogs.publishedAt) : ''

  return (
    <li className="pt-4">
      <Link
        href={`blog/${blogs.id}`}
        className="item flex items-center gap-4 border-b pb-2 pl-2 text-lg"
      >
        <span className="text-base">{formattedDate}</span>
        <span className="rounded-sm bg-secondary-foreground px-2 py-0.5 text-xs text-white">
          {blogs.category.name}
        </span>
        <p className="font-semibold hover:text-primary">{blogs.title}</p>
      </Link>
    </li>
  )
}
