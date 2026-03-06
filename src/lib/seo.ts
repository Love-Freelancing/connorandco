import { type Metadata } from 'next'

export const siteConfig = {
  name: 'Connor & Co.',
  alternateName: 'Connor and Co',
  shortName: 'Connor',
  url: 'https://www.connorco.dev',
  email: 'connor@connorco.dev',
  founder: {
    name: 'Connor Love',
    givenName: 'Connor',
    jobTitle: 'Founder & Lead Developer',
  },
  location: {
    city: 'Columbus',
    region: 'OH',
    country: 'US',
  },
  description:
    'Connor & Co. is a web design and development studio helping agencies, founders, and growing teams launch faster, look more credible, and convert better.',
  defaultTitle: 'Connor & Co. | Web Design, Webflow & Next.js Development Studio',
  keywords: [
    'Connor & Co.',
    'Connor and Co',
    'Connor',
    'Connor Love',
    'web design studio',
    'web development studio',
    'Next.js development studio',
    'Webflow development studio',
    'startup website design',
    'agency overflow development',
    'conversion-focused web design',
  ],
  socialProfiles: [
    'https://www.linkedin.com/company/connor-and-co/',
    'https://x.com/connorcodev',
    'https://github.com/Love-Freelancing',
  ],
} as const

function normalizePath(path: string) {
  if (!path) {
    return '/'
  }

  return path.startsWith('/') ? path : `/${path}`
}

export function absoluteUrl(path = '/') {
  return new URL(normalizePath(path), siteConfig.url).toString()
}

function resolveMetaTitle(title?: Metadata['title']) {
  if (typeof title !== 'string' || title.length === 0) {
    return siteConfig.defaultTitle
  }

  if (
    title.includes(siteConfig.name) ||
    title.includes(siteConfig.alternateName)
  ) {
    return title
  }

  return `${title} | ${siteConfig.name}`
}

export function createMetadata({
  title,
  description,
  path = '/',
  keywords = [],
}: {
  title?: Metadata['title']
  description?: string
  path?: string
  keywords?: string[]
}): Metadata {
  let canonicalPath = normalizePath(path)
  let resolvedDescription = description ?? siteConfig.description
  let resolvedTitle = resolveMetaTitle(title)
  let resolvedKeywords = Array.from(
    new Set([...siteConfig.keywords, ...keywords]),
  )

  return {
    ...(title ? { title } : {}),
    description: resolvedDescription,
    keywords: resolvedKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'website',
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      creator: '@connorcodev',
    },
  }
}

export function createSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': absoluteUrl('/#organization'),
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        url: siteConfig.url,
        email: siteConfig.email,
        founder: {
          '@id': absoluteUrl('/#founder'),
        },
        sameAs: siteConfig.socialProfiles,
      },
      {
        '@type': 'Brand',
        '@id': absoluteUrl('/#brand'),
        name: siteConfig.name,
        alternateName: [siteConfig.alternateName, siteConfig.shortName],
        url: siteConfig.url,
      },
      {
        '@type': 'Person',
        '@id': absoluteUrl('/#founder'),
        name: siteConfig.founder.name,
        givenName: siteConfig.founder.givenName,
        jobTitle: siteConfig.founder.jobTitle,
        worksFor: {
          '@id': absoluteUrl('/#organization'),
        },
        url: siteConfig.url,
      },
      {
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        url: siteConfig.url,
        publisher: {
          '@id': absoluteUrl('/#organization'),
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfessionalService',
        '@id': absoluteUrl('/#service'),
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        url: siteConfig.url,
        description: siteConfig.description,
        areaServed: 'Worldwide',
        email: siteConfig.email,
        founder: {
          '@id': absoluteUrl('/#founder'),
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        sameAs: siteConfig.socialProfiles,
        knowsAbout: [
          'Web design',
          'Web development',
          'Next.js development',
          'Webflow development',
          'Landing page optimization',
          'Frontend engineering',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Connor & Co. offers',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Agency Overflow Offer',
                description:
                  'White-label Webflow and Next.js production for agencies that need reliable delivery support.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Startup Launch Offer',
                description:
                  'Fast design and development for founders who need a credible website or MVP frontend.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Conversion Refresh Offer',
                description:
                  'Homepage and landing page redesigns focused on clarity, speed, and conversion.',
              },
            },
          ],
        },
      },
    ],
  }
}

export function createHomePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': absoluteUrl('/#webpage'),
        url: absoluteUrl('/'),
        name: siteConfig.defaultTitle,
        description: siteConfig.description,
        isPartOf: {
          '@id': absoluteUrl('/#website'),
        },
        about: [
          {
            '@id': absoluteUrl('/#organization'),
          },
          {
            '@id': absoluteUrl('/#founder'),
          },
        ],
        primaryImageOfPage: {
          '@id': absoluteUrl('/#brand'),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': absoluteUrl('/#breadcrumb'),
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: absoluteUrl('/'),
          },
        ],
      },
    ],
  }
}