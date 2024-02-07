import ArticleComponents from '@/app/_components/Article'
import { getBlogsDetail } from '@/libs/microcms'
import { Metadata } from 'next'

interface Props {
  params: {
    slug: string
  }
  searchParams: {
    dk: string
  }
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getBlogsDetail(params.slug, {
    draftKey: searchParams.dk,
  })

  return {
    title: data.meta?.title,
    description: data.meta?.description,
    twitter: {
      title: data.meta?.title,
      description: data.meta?.description,
    },
  }
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getBlogsDetail(params.slug, {
    draftKey: searchParams.dk,
  })
  return (
    <>
      <ArticleComponents data={data} />
    </>
  )
}
