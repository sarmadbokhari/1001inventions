import { MetadataRoute } from 'next'
import { innovators } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://1001inventions.com'
  
  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Individual innovator pages (if you add them later)
  const innovatorRoutes = innovators.map((innovator) => ({
    url: `${baseUrl}/innovator/${innovator.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...routes, ...innovatorRoutes]
}