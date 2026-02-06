export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/email-success'],
      },
    ],
    sitemap: 'https://nexus.lat/sitemap.xml',
  }
}
