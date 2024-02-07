import { Article } from '@/libs/microcms'
import Link from 'next/link'

interface BlogListItemProps {
  blogs: Article
}

export default async function BlogListItem({ blogs }: BlogListItemProps) {
  return (
    <li>
      <Link href={`blog/${blogs.id}`}>
        <p>{blogs.title}</p>
      </Link>
    </li>
  )
}
