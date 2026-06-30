import { useEffect } from 'react'
import type { SeoMeta } from '@/types/profile'

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  const existing = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
  if (existing) {
    Object.entries(attributes).forEach(([key, value]) => existing.setAttribute(key, value))
    return existing
  }

  const element = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
  document.head.appendChild(element)
  return element
}

export function useSeo(meta: SeoMeta) {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.title = meta.title
    ensureMeta('meta[name="description"]', { name: 'description', content: meta.description })
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title })
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description })
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: new URL(meta.image, window.location.origin).toString() })
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description })
    ensureMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#0F172A' })
    ensureMeta('link[rel="canonical"]', { rel: 'canonical', href: window.location.href })
  }, [meta])
}