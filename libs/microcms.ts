import { createClient } from 'microcms-js-sdk'
import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from 'microcms-js-sdk'
import { notFound } from 'next/navigation'

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
} & MicroCMSContentId &
  MicroCMSDate

export type Meta = {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: MicroCMSImage
}

export type Blogs = {
  title: string
  content: string
  eyecatch: MicroCMSImage
  category: Category[]
  meta: Meta
}

export type Article = Blogs & Meta & MicroCMSContentId & MicroCMSDate

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

export const getBlogsList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blogs>({
      endpoint: 'blogs',
      queries,
    })
    .catch(notFound)

  return listData
}

export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Category>({
      endpoint: 'categories',
      queries,
    })
    .catch(notFound)

  return listData
}

export const getBlogsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blogs>({
    endpoint: 'blogs',
    contentId,
    queries,
  })

  return detailData
}

export const getCategoryListDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Category>({
      endpoint: 'categories',
      contentId,
      queries,
    })
    .catch(notFound)

  return detailData
}

export const getMeta = async (queries?: MicroCMSQueries) => {
  const data = await client
    .getObject<Meta>({
      endpoint: 'meta',
      queries,
    })
    .catch(() => null)

  return data
}
