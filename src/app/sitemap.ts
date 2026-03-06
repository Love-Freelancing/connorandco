import { type MetadataRoute } from 'next'

import { loadArticles, loadCaseStudies } from '@/lib/mdx'
import { absoluteUrl } from '@/lib/seo'

function parseLastModified(value: string) {
  if (/^\d{4}-\d{2}$/.test(value)) {
    return new Date(`${value}-01`)
  }

  return new Date(value)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let [articles, caseStudies] = await Promise.all([
    loadArticles(),
    loadCaseStudies(),
  ])

  let staticRouteDefinitions: Array<{
    path: string
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
    priority: number
  }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/work', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/process', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  ]

  let staticRoutes: MetadataRoute.Sitemap = staticRouteDefinitions.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
  }))

  let articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(article.href),
    lastModified: parseLastModified(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  let caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: absoluteUrl(caseStudy.href),
    lastModified: parseLastModified(caseStudy.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...articleRoutes, ...caseStudyRoutes]
}