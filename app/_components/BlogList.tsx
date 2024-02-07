import { Article } from '@/libs/microcms'
import BlogListItem from './BlogListItem'

interface BlogListProps {
  articles?: Article[]
}

export default function BlogList({ articles }: BlogListProps) {
  if (!articles) {
    return null
  }

  if (articles.length === 0) {
    return <p>準備中です</p>
  }

  return (
    <ul>
      {articles.map((article) => (
        <BlogListItem key={article.id} blogs={article} />
      ))}
    </ul>
  )
}
