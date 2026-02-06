import { Faustina } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

 
const faustina = Faustina({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://nexus.lat'),
  title: {
    default: 'Nexus | Hire Top LATAM Talent for 40-70% Less',
    template: '%s | Nexus',
  },
  description: 'Hire pre-vetted Latin American professionals for 40-70% less. Software engineers, finance, marketing & more. Transparent pricing, no hidden fees. Start risk-free.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexus.lat',
    siteName: 'Nexus',
    title: 'Nexus | Hire Top LATAM Talent for 40-70% Less',
    description: 'Hire pre-vetted Latin American professionals for 40-70% less. Software engineers, finance, marketing & more. Transparent pricing, no hidden fees.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexus - Hire Top LATAM Talent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nexus_lat',
    title: 'Nexus | Hire Top LATAM Talent for 40-70% Less',
    description: 'Hire pre-vetted Latin American professionals for 40-70% less. Transparent pricing, no hidden fees.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nexus.lat',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://nexus.lat/#organization',
      name: 'Nexus',
      url: 'https://nexus.lat',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nexus.lat/logo.png',
      },
      sameAs: [
        'https://www.linkedin.com/company/nexus-lat/',
        'https://x.com/nexus_lat',
      ],
      description:
        'Recruiting agency connecting US companies with pre-vetted Latin American professionals at 40-70% less cost.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nexus.lat/#website',
      url: 'https://nexus.lat',
      name: 'Nexus',
      publisher: { '@id': 'https://nexus.lat/#organization' },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={faustina.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
