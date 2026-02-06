export default function TableOfContents({ sections }) {
  const headings = sections.filter((s) => s.type === 'heading' && s.id)

  if (headings.length === 0) return null

  return (
    <nav className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
      <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
        Table of Contents
      </h4>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm hover:text-green-600 transition-colors ${
                h.level === 2
                  ? 'text-gray-700 font-medium'
                  : 'text-gray-500 pl-3'
              }`}
            >
              {h.content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
