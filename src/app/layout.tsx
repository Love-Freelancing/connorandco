import { type Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'

import { createSiteJsonLd, siteConfig } from '@/lib/seo'
import '@/styles/tailwind.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const loveSans = localFont({
  src: [
    {
      path: '../fonts/LoveSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/LoveSans-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/LoveSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/LoveSans-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/LoveSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/LoveSans-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/LoveSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/LoveSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  variable: '--font-love-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    template: '%s | Connor & Co.',
    default: siteConfig.defaultTitle,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.founder.name, url: siteConfig.url }],
  creator: siteConfig.founder.name,
  publisher: siteConfig.name,
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    creator: '@connorcodev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full", "bg-neutral-950", "text-base", "antialiased", loveSans.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col">
        <Script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createSiteJsonLd()),
          }}
        />
        {children}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d65f06e3-1056-4431-9ae1-c0baf36b028d"
        />
      </body>
    </html>
  )
}
