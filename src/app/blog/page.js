import { getAllPosts } from '@/data/blog'

export const metadata = {
  title: 'Blog | Nexus - Hire LATAM Talent',
  description:
    'Guides, salary data, and insights on hiring remote talent from Latin America. Cost comparisons, hiring tips, and industry analysis.',
  alternates: {
    canonical: 'https://nexus.lat/blog',
  },
  openGraph: {
    title: 'Blog | Nexus - Hire LATAM Talent',
    description:
      'Guides, salary data, and insights on hiring remote talent from Latin America.',
    url: 'https://nexus.lat/blog',
    type: 'website',
  },
}

function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Nexus Blog',
    description: 'Guides and insights on hiring remote talent from Latin America.',
    url: 'https://nexus.lat/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Nexus',
      url: 'https://nexus.lat',
    },
  }
}

export default function BlogPage() {
  const posts = getAllPosts()
  const jsonLd = buildJsonLd()

  return (
    <div className="bg-[#f5ede5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="text-black pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="hero-gradient-underline">Nexus</span> Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Hiring guides, salary data, and insights for building remote teams in Latin America.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-green-500 border border-transparent transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readingTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">{post.publishedAt}</span>
                <span className="text-sm text-green-600 font-medium">Read more &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to <span className="title-gradient-underline">Hire</span> LATAM Talent?
          </h2>
          <p className="mt-4 text-gray-400">
            Start risk-free. If we don&apos;t find a match, you pay nothing.
          </p>
          <a
            href="https://quote.nexus.lat"
            target="_blank"
            className="inline-block mt-8 px-10 py-4 text-black font-bold bg-green-500 rounded-sm hover:bg-green-600"
          >
            START HIRING TODAY
          </a>
        </div>
      </section>
    </div>
  )
}
