export default function RelatedPosts({ relatedRoles, relatedPosts }) {
  const hasRoles = relatedRoles && relatedRoles.length > 0
  const hasPosts = relatedPosts && relatedPosts.length > 0

  if (!hasRoles && !hasPosts) return null

  return (
    <section className="mt-16 pt-10 border-t border-gray-200">
      {hasRoles && (
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-black mb-4">Related Roles</h3>
          <div className="flex flex-wrap gap-3">
            {relatedRoles.map((role) => (
              <a
                key={role.slug}
                href={`/hire/${role.slug}`}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-black hover:border-green-500 hover:shadow-md transition-all text-sm font-medium"
              >
                Hire a {role.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {hasPosts && (
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-green-500 hover:shadow-md transition-all"
              >
                <span className="text-sm font-medium text-black">{post.title}</span>
                <span className="text-green-600 text-sm ml-2">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
