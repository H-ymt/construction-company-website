import { Article } from '@/libs/microcms'
import { formatRichText } from '@/utils/formatRichText'
import Image from 'next/image'

interface ArticleProps {
  data: Article
}

export default function ArticleComponents({ data }: ArticleProps) {
  return (
    <main>
      <h1>{data.title}</h1>
      {data.eyecatch && (
        <Image
          src={data.eyecatch?.url}
          width={data.eyecatch?.width}
          height={data.eyecatch?.height}
          alt="blog eyecatch"
          loading="eager"
        />
      )}

      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
        />
      </div>
    </main>
  )
}
