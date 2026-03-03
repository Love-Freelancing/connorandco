import { type Metadata } from 'next'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Connor & Co.',
    default: 'Connor & Co. | Webflow & Next.js Development Studio',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
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
