import { Article } from '@/libs/microcms'
import { formatRichText } from '@/utils/formatRichText'
import Image from 'next/image'

interface ArticleProps {
  data: Article
}

export default function ArticleComponents({ data }: ArticleProps) {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="pb-2 text-4xl font-semibold tracking-wide">{data.title}</h1>
      {data.eyecatch && (
        <Image
          src={data.eyecatch?.url}
          width={data.eyecatch?.width}
          height={data.eyecatch?.height}
          alt="Blog eyecatch"
          loading="eager"
          className="rounded-md"
        />
      )}

      <div>
        <div
          className="[&_h2]:mb-2 [&_h2]:mt-6 [&_h2]:font-semibold [&_h3]:text-foreground [&_hr]:my-8 [&_li]:!list-disc [&_p]:mb-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5"
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
        />
      </div>
    </div>
  )
}
