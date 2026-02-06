import { notFound } from 'next/navigation'
import { getRole, getAllRoleSlugs } from '@/data/roles'

export async function generateStaticParams() {
  return getAllRoleSlugs().map((slug) => ({ role: slug }))
}

export async function generateMetadata({ params }) {
  const role = getRole(params.role)
  if (!role) return {}

  return {
    title: role.metaTitle,
    description: role.metaDescription,
    alternates: {
      canonical: `https://nexus.lat/hire/${role.slug}`,
    },
    openGraph: {
      title: role.metaTitle,
      description: role.metaDescription,
      url: `https://nexus.lat/hire/${role.slug}`,
      type: 'website',
    },
  }
}

function buildJsonLd(role) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Hire a ${role.title} from Latin America`,
        provider: {
          '@type': 'Organization',
          name: 'Nexus',
          url: 'https://nexus.lat',
        },
        description: `Hire pre-vetted ${role.title} professionals from Latin America for 40-70% less than US market rates.`,
        areaServed: { '@type': 'Country', name: 'United States' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: role.pricing.startingPrice,
          description: `Monthly rate for ${role.title} from Latin America`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: role.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }
}

export default function RolePage({ params }) {
  const role = getRole(params.role)
  if (!role) notFound()

  const jsonLd = buildJsonLd(role)

  return (
    <div className="bg-[#f5ede5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* LLM-Optimized Snapshot (visually hidden, available to crawlers) */}
      <div className="sr-only">{role.llmSnapshot}</div>

      {/* Hero Section */}
      <section className="text-black pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="hero-gradient-underline">Hire</span> a{' '}
            {role.title} from Latin America
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {role.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {role.hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href="https://quote.nexus.lat"
            target="_blank"
            className="inline-block mt-8 px-8 py-3 text-white font-bold bg-green-500 rounded-sm hover:bg-green-600 text-sm"
          >
            START HIRING
          </a>
        </div>
      </section>

      {/* Salary Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-black text-center mb-2">
            <span className="title-gradient-underline">{role.title}</span>{' '}
            Salary Comparison
          </h2>
          <p className="text-center text-gray-500 mb-8">
            US vs Latin America — monthly rates
          </p>
          <div className="overflow-x-auto shadow-xl rounded-lg">
            <table className="table w-full border border-black text-center">
              <thead className="bg-black text-white text-lg">
                <tr>
                  <th className="border-r border-gray-500">
                    <i>Seniority</i>
                  </th>
                  <th className="border-r border-gray-500">
                    <i>US Salary</i>
                  </th>
                  <th className="border-r border-gray-500">
                    <i>LATAM Salary</i>
                  </th>
                  <th>
                    <i>You Save</i>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-black">
                {role.salary.tiers.map((tier) => (
                  <tr key={tier.level}>
                    <td className="border-r border-gray-200 font-medium">
                      {tier.level}
                    </td>
                    <td className="border-r border-gray-200 text-gray-500 line-through">
                      {tier.us}/mo
                    </td>
                    <td className="border-r border-gray-200 font-bold text-green-600">
                      {tier.latam}/mo
                    </td>
                    <td className="font-bold text-green-600">{tier.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Source: {role.salary.source}. Updated {role.salary.updated}.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-2">
            <span className="title-gradient-underline">Transparent</span>{' '}
            Pricing
          </h2>
          <p className="text-center text-gray-400 mb-10">
            No hidden fees. What you see is what you pay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {role.pricing.plans.map((plan) => (
              <div key={plan.name} className="p-2 border rounded-3xl">
                <div className="bg-[#f5ede5] rounded-2xl p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-medium text-black title-gradient-underline">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-gray-500 flex-1">
                    {plan.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-black"
                      >
                        <span className="text-green-500 mt-0.5">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://quote.nexus.lat"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-black bg-green-500 hover:bg-green-600 rounded-xl"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-black text-center mb-8">
            Key <span className="title-gradient-underline">Skills</span> We Vet
            For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {role.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <span className="text-green-500 text-lg">&#10003;</span>
                <span className="text-black">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-2">
            How Nexus <span className="title-gradient-underline">Vets</span>{' '}
            {role.title} Candidates
          </h2>
          <p className="text-center text-gray-400 mb-10">
            Only the top {role.vetting.passRate} of applicants pass our process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {role.vetting.steps.map((step, i) => (
              <div key={step.title} className="bg-[#f5ede5] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-black">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-black text-center mb-10">
            <span className="title-gradient-underline">3 Steps</span> to Your
            New {role.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {role.process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-500 text-white rounded-full font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-green-600 font-medium mt-1">
                  {item.time}
                </p>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-black text-center mb-8">
            Frequently Asked <i>Questions</i>
          </h2>
          <div className="join join-vertical w-full bg-black rounded-xl">
            {role.faq.map((item, i) => (
              <div
                key={i}
                className="collapse collapse-arrow join-item border border-base-300"
              >
                <input
                  type="radio"
                  name="role-faq"
                  defaultChecked={i === 0}
                />
                <div className="collapse-title text-lg font-medium text-white">
                  {item.question}
                </div>
                <div className="collapse-content text-gray-300">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Hire a{' '}
            <span className="title-gradient-underline">{role.title}</span>?
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

      {/* Related Roles (Internal Linking) */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-black text-center mb-6">
            Explore Related Roles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {role.relatedRoles.map((related) => (
              <a
                key={related.slug}
                href={`/hire/${related.slug}`}
                className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-black hover:border-green-500 hover:shadow-md transition-all text-sm font-medium"
              >
                Hire a {related.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
