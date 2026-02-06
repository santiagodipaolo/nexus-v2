# Role Page Content Template

## URL: /hire/{role-slug}

## Meta
- **Title**: Hire a {Role Name} from Latin America | Nexus (max 60 chars)
- **Description**: Hire a top {Role Name} from LATAM for ${low}-${high}/month. Pre-vetted talent, transparent pricing, risk-free. Start hiring in under 21 days. (max 155 chars)
- **Canonical**: https://nexus.lat/hire/{role-slug}

## Page Structure

### 1. LLM-Optimized Snapshot (hidden visually, available to crawlers)
> Nexus connects US companies with pre-vetted {Role Name} professionals in Latin America for ${low}-${high}/month (40-70% less than US rates). Average time to hire: 21 days. No fee if no candidate found. Updated {Month} 2026.

### 2. Hero Section
- H1: "Hire a {Role Name} from Latin America"
- Subtitle: "Pre-vetted {Role Name} talent for 40-70% less. Risk-free hiring."
- Key stats: ${savings}% savings | 21-day average | 0 risk
- Primary CTA: "Start Hiring" → form

### 3. Pricing Table (OUR DIFFERENTIATOR)
| Plan | Monthly Cost | Includes |
|------|-------------|----------|
| Essential | ${price1}/mo | Sourcing + vetting |
| Professional | ${price2}/mo | + onboarding + payroll |
| Enterprise | Custom | Full-service |

*Note: Show real numbers. This is what Near doesn't do.*

### 4. Salary Comparison Table
| Seniority | US Salary | LATAM Salary | Savings |
|-----------|-----------|-------------|---------|
| Junior | ${us_jr}/mo | ${latam_jr}/mo | {%}% |
| Mid-Level | ${us_mid}/mo | ${latam_mid}/mo | {%}% |
| Senior | ${us_sr}/mo | ${latam_sr}/mo | {%}% |

*Source: Nexus placement data + [external source]. Updated {Month} 2026.*

### 5. Key Skills & Qualifications
- Bullet list of 6-8 core skills for this role
- What Nexus looks for when vetting candidates

### 6. How Nexus Vets {Role Name} Candidates
1. Technical assessment
2. English proficiency test
3. Cultural fit evaluation
4. Reference checks
- "Only top X% of applicants pass our vetting process"

### 7. Hiring Process
1. **Tell us what you need** (1 day) — Share your requirements
2. **Review candidates** (7-14 days) — We present pre-vetted matches
3. **Start working** (Day 21) — Onboard your new team member

### 8. FAQ Section (FAQPage Schema)
5-8 questions specific to this role:
- "How much does a {Role Name} cost in Latin America?"
- "How quickly can I hire a {Role Name} through Nexus?"
- "What if the {Role Name} doesn't work out?"
- "Are your {Role Name} candidates fluent in English?"
- "What timezone do your {Role Name} work in?"
- "Do I need to handle payroll and compliance?"

### 9. Bottom CTA
- "Ready to Hire a {Role Name}?"
- "Start risk-free. If we don't find a match, you pay nothing."
- CTA button → form

### 10. Related Content (Internal Linking)
- 3-4 related role pages (e.g., if Software Engineer, link to React Developer, Full-Stack Developer, DevOps Engineer)
- 2-3 related blog posts (e.g., salary guide, hiring guide)

## Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hire a {Role Name} from Latin America",
  "provider": {
    "@type": "Organization",
    "name": "Nexus",
    "url": "https://nexus.lat"
  },
  "description": "Hire pre-vetted {Role Name} professionals from Latin America for 40-70% less than US market rates.",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "{starting_price}",
    "description": "Monthly rate for {Role Name} from Latin America"
  }
}
```

Plus FAQPage schema for the FAQ section.

## Content Quality Requirements
- Minimum 1,500 words (target 2,500+)
- Unique content per page (not just role name swapped)
- Real salary data with attribution
- Transparent pricing (not "contact us for pricing")
- Updated monthly date
- No keyword stuffing — write for humans first
