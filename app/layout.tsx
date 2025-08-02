import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AniGROK - AI NFT Platform for Anime Culture",
  description: "Create unique anime characters with AI technology. Bridge anime culture and blockchain technology with AniGROK's innovative NFT platform.",
  keywords: ["AI", "Anime", "NFT", "Blockchain", "GROK AI", "Ani Character", "Web3", "Digital Art", "AniGROK"],
  authors: [{ name: "AniGROK Team" }],
  creator: "AniGROK Platform",
  publisher: "AniGROK Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://anigrok.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AniGROK - AI-Driven Anime NFT Platform",
    description: "Transform AI-generated content into valuable digital assets through blockchain technology",
    url: 'https://anigrok.io',
    siteName: 'AniGROK',
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 630,
        alt: 'AniGROK - AI + Web3 Innovation',
      },
      {
        url: '/logo1.png',
        width: 800,
        height: 600,
        alt: 'AniGROK Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AniGROK - AI-Driven Anime NFT Platform',
    description: 'Transform AI-generated content into valuable digital assets through blockchain technology',
    images: ['https://anigrok.io/twitter-image.jpg'],
    creator: '@Anibsc_MA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/logo1.png' },
      { url: '/logo1.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo1.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo1.png',
    apple: [
      { url: '/logo1.png' },
      { url: '/logo1.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo1.png',
      },
      {
        rel: 'mask-icon',
        url: '/logo1.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
