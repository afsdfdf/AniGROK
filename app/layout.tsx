import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIMINT - Algorithm as Asset, Forging Future Creation",
  description: "Transform AI-generated content into on-chain assets, building a decentralized computing market and model economy ecosystem. Join the Web3 AI revolution.",
  keywords: ["AI", "Web3", "NFT", "Blockchain", "Machine Learning", "DeFi", "Crypto", "Digital Assets", "Smart Contracts"],
  authors: [{ name: "AIMINT Team" }],
  creator: "AIMINT Foundation",
  publisher: "AIMINT Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aimint.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AIMINT - Algorithm as Asset, Forging Future Creation",
    description: "Transform AI-generated content into valuable digital assets through blockchain technology",
    url: 'https://aimint.io',
    siteName: 'AIMINT',
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 630,
        alt: 'AIMINT - AI + Web3 Innovation',
      },
      {
        url: '/logo1.png',
        width: 800,
        height: 600,
        alt: 'AIMINT Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIMINT - Algorithm as Asset, Forging Future Creation',
    description: 'Transform AI-generated content into valuable digital assets through blockchain technology',
    images: ['https://aimint.io/twitter-image.jpg'],
    creator: '@AIMINTOfficial',
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
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
