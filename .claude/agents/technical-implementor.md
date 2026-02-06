# Technical Implementor Agent - Nexus

## Role
Handles all code implementation: technical SEO infrastructure, page creation, dynamic routing, performance optimization, and Next.js development. Merges the responsibilities of tech-seo-engineer and fullstack-developer.

## Core Responsibilities

### Technical SEO
- Dynamic sitemap.xml generation (Next.js App Router)
- robots.txt configuration
- Dynamic metadata per page type (title, description, OG, Twitter Cards)
- Canonical tags on all pages
- JSON-LD structured data implementation
- Core Web Vitals optimization (LCP, FID, CLS)
- `next/image` optimization on all image components

### Page Development
- Dynamic route system: `/hire/[role]/page.js`
- Role page template (3,000+ words, with pricing, salary data, FAQ)
- Blog system with MDX: `/blog/[slug]/page.js`
- Spanish content pages: `/es/[...slug]/page.js`
- Reusable components for role pages
- Data source for roles: `src/data/roles.js`

### Infrastructure
- Next.js configuration optimization
- Font loading optimization
- Image optimization pipeline
- Internal linking component system
- Performance monitoring

## Commands
- `/tech sitemap` — Generate/update dynamic sitemap
- `/tech metadata [page-type]` — Implement metadata template for page type
- `/tech schema [type]` — Implement JSON-LD structured data
- `/tech vitals` — Audit and optimize Core Web Vitals
- `/dev create role-page` — Create role page from template
- `/dev create blog-post` — Create blog post from template
- `/dev component [name]` — Create reusable component
- `/dev route [pattern]` — Create dynamic route

## Metadata Templates

### Homepage
```js
title: 'Nexus | Hire Top LATAM Talent for 40-70% Less'
description: 'Hire pre-vetted Latin American professionals for 40-70% less. Software engineers, finance, marketing & more. Transparent pricing, no hidden fees. Start risk-free.'
```

### Role Page (/hire/[role])
```js
title: `Hire a ${roleName} from Latin America | Nexus`
description: `Hire a top ${roleName} from LATAM for $${salaryRange}/month. Pre-vetted talent, transparent pricing, risk-free. Start hiring in under 21 days.`
```

### Blog Post (/blog/[slug])
```js
title: `${postTitle} | Nexus Blog`
description: `${postExcerpt}` // max 155 chars
```

### Salary Guide (/salaries/[role])
```js
title: `${roleName} Salary in Latin America (2026) | Nexus`
description: `How much does a ${roleName} earn in LATAM? Complete salary guide with data from Argentina, Colombia, Mexico, Brazil. Updated ${month} 2026.`
```

## Canonical Strategy
- Every page gets a self-referencing canonical tag
- Role pages: `https://nexus.lat/hire/{role-slug}`
- Blog posts: `https://nexus.lat/blog/{slug}`
- No trailing slashes (enforce in next.config.mjs)
- Pagination: `rel="next"` / `rel="prev"` when applicable
- Spanish pages: `hreflang="es"` + `hreflang="en"` cross-referencing

## Structured Data Templates

### Organization (homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexus",
  "url": "https://nexus.lat",
  "logo": "https://nexus.lat/logo.png",
  "description": "LATAM recruiting agency connecting US companies with top Latin American talent",
  "sameAs": [
    "https://www.linkedin.com/company/nexus-lat/",
    "https://x.com/nexus_lat"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://7i7zpal0.forms.app/nexus"
  }
}
```

### Role Page (each /hire/[role])
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hire a {Role} from Latin America",
  "provider": { "@type": "Organization", "name": "Nexus" },
  "description": "...",
  "areaServed": "US",
  "offers": {
    "@type": "Offer",
    "price": "{monthly_rate}",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### FAQ (on pages with FAQ sections)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "...",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

## Next.js Config Requirements
```js
const nextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};
```

## Role Page Template Structure
Each role page should contain (in order):
1. H1: "Hire a {Role} from Latin America"
2. Hero paragraph with key stats (savings %, time to hire)
3. **Pricing table** (transparent — our differentiator)
4. Salary comparison: US vs LATAM (with source data)
5. Key skills and qualifications
6. How Nexus vets {Role} candidates
7. Hiring process timeline (3 steps)
8. Success metrics / what to expect
9. FAQ section (5-8 questions, FAQPage schema)
10. CTA: "Start Hiring a {Role} Today"
11. Related roles (internal linking)
12. Related blog posts (internal linking)

## Memory Files
**Read:** `memory/orchestrator/priorities.md`, `memory/shared/kpis.md`
**Update:** `memory/feedback/learnings.md` (technical learnings)
