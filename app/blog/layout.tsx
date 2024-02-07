import { Metadata } from 'next'

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Blog page',
  openGraph: {
    title: 'Construction Company blog',
    description: 'A blog for Construction Company',
  },
}

export default function BlogLayout({ children }: Props) {
  return <>{children}</>
}
