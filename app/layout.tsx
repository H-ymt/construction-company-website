import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BaseLayout from './_layouts/BaseLayout'
import SideMenu from './_components/SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://construction-company-website-nine.vercel.app/'),
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
      <body className={inter.className}>
        <BaseLayout>
          <SideMenu />
          <main className="col-start-5 col-end-12 row-start-1 row-end-auto">
            {children}
          </main>
        </BaseLayout>
      </body>
    </html>
  )
}
