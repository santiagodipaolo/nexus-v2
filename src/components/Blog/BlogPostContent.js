export default function BlogPostContent({ sections }) {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => {
        switch (section.type) {
          case 'heading':
            return section.level === 2 ? (
              <h2 key={i} id={section.id} className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-4">
                <span className="title-gradient-underline">{section.content}</span>
              </h2>
            ) : (
              <h3 key={i} id={section.id} className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3">
                {section.content}
              </h3>
            )

          case 'paragraph':
            return (
              <p key={i} className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            )

          case 'list':
            return section.ordered ? (
              <ol key={i} className="list-decimal list-inside space-y-2 text-gray-700 pl-2">
                {section.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="space-y-2 text-gray-700 pl-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-green-500 mt-1 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            )

          case 'table':
            return (
              <div key={i} className="my-8">
                {section.caption && (
                  <p className="text-lg font-semibold text-black mb-3">{section.caption}</p>
                )}
                <div className="overflow-x-auto shadow-xl rounded-lg">
                  <table className="table w-full border border-black text-center">
                    <thead className="bg-black text-white text-sm md:text-base">
                      <tr>
                        {section.headers.map((h, j) => (
                          <th key={j} className={j < section.headers.length - 1 ? 'border-r border-gray-500' : ''}>
                            <i>{h}</i>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white text-black text-sm md:text-base">
                      {section.rows.map((row, j) => (
                        <tr key={j}>
                          {row.map((cell, k) => (
                            <td key={k} className={`${k < row.length - 1 ? 'border-r border-gray-200' : ''} ${k === 0 ? 'font-medium text-left' : ''} ${k === row.length - 1 ? 'font-bold text-green-600' : ''}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {section.source && (
                  <p className="text-xs text-gray-400 mt-2 text-center">Source: {section.source}</p>
                )}
              </div>
            )

          case 'cta':
            return (
              <div key={i} className="bg-black rounded-2xl p-8 md:p-10 my-10 text-center">
                <h3 className="text-2xl font-semibold text-white">{section.heading}</h3>
                <p className="text-gray-400 mt-3">{section.text}</p>
                <a
                  href={section.buttonUrl}
                  target="_blank"
                  className="inline-block mt-6 px-8 py-3 text-black font-bold bg-green-500 hover:bg-green-600 rounded-sm"
                >
                  {section.buttonText}
                </a>
              </div>
            )

          case 'internalLink':
            return (
              <p key={i} className="my-2">
                <a href={section.href} className="text-green-600 hover:text-green-700 font-medium underline underline-offset-2">
                  {section.text} &rarr;
                </a>
              </p>
            )

          case 'quote':
            return (
              <blockquote key={i} className="border-l-4 border-green-500 pl-6 py-2 my-6 bg-white rounded-r-lg">
                <p className="text-gray-700 italic leading-relaxed">{section.content}</p>
                {section.attribution && (
                  <cite className="text-sm text-gray-500 mt-2 block not-italic">&mdash; {section.attribution}</cite>
                )}
              </blockquote>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
