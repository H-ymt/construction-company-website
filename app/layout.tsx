import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'
import BaseLayout from './_layouts/BaseLayout'
import SideMenu from './_components/SideMenu'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

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
      <body className={mulish.className}>
        <header className="h-20"></header>
        <BaseLayout>
          <SideMenu />
          <main className=" md:pl-10">
            {children}
          </main>
        </BaseLayout>
      </body>
    </html>
  )
}
