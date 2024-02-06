import type { Metadata } from 'next'
import { Source_Serif_4 } from 'next/font/google'
import './globals.css'

const serif = Source_Serif_4({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Construction Company',
    template: '%s | Construction Company',
  },
  description: 'Creating a home where you can live with peace of mind',
  openGraph: {
    title: 'Construction Company',
    description: 'Creating a home where you can live with peace of mind',
    siteName: 'Construction Company',
  },
  twitter: {
    card: 'summary',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={serif.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
