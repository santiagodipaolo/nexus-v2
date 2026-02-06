import { notFound } from 'next/navigation'
import { getPost, getAllPostSlugs } from '@/data/blog'
import BlogPostContent from '@/components/Blog/BlogPostContent'
import TableOfContents from '@/components/Blog/TableOfContents'
import RelatedPosts from '@/components/Blog/RelatedPosts'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://nexus.lat/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://nexus.lat/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  }
}

function buildJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://nexus.lat',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexus',
      url: 'https://nexus.lat',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nexus.lat/nexus-logo.png',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nexus.lat/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const jsonLd = buildJsonLd(post)

  return (
    <div className="bg-[#f5ede5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* LLM-Optimized Snapshot */}
      <div className="sr-only">{post.llmSnapshot}</div>

      {/* Breadcrumbs */}
      <div className="max-w-5xl mx-auto pt-20 px-4">
        <nav className="text-sm text-gray-500">
          <a href="/" className="hover:text-green-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/blog" className="hover:text-green-600">Blog</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="text-black pt-6 pb-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.readingTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>By {post.author}</span>
            <span>&middot;</span>
            <span>Published {post.publishedAt}</span>
            {post.updatedAt !== post.publishedAt && (
              <>
                <span>&middot;</span>
                <span>Updated {post.updatedAt}</span>
              </>
            )}
          </div>
          {post.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content + TOC */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto flex gap-8">
          {/* TOC - Desktop sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <TableOfContents sections={post.sections} />
          </aside>

          {/* Main content */}
          <div className="flex-1 max-w-3xl">
            <BlogPostContent sections={post.sections} />
            <RelatedPosts relatedRoles={post.relatedRoles} relatedPosts={post.relatedPosts} />
          </div>
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
