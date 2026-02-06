# GEO Playbook - Nexus Generative Engine Optimization

> Last updated: 2026-02-05

## What is GEO?
Generative Engine Optimization = making Nexus content citeable by AI systems (ChatGPT, Claude, Perplexity, Google AI Overviews).

## Core Principles

### 1. Answer-First Format
Every page section leads with a direct, quotable statement:
- BAD: "There are many benefits to hiring in Latin America..."
- GOOD: "Hiring a software engineer in Latin America costs $3,000-$6,000/month — 40-70% less than US market rates."

### 2. Structured Data on Every Page
- Organization schema on homepage
- Service schema on role pages
- FAQPage schema on any page with FAQ
- BreadcrumbList on all non-homepage pages

### 3. Proprietary Data
LLMs prefer citing specific, attributed data. Nexus must publish original data:
- Average salary by role and country (from actual placements)
- Average time-to-hire by role
- Retention rates
- Cost savings percentage (real data, not estimates)

### 4. Definicional Content
Be THE authoritative source for key definitions:
- "What is nearshore staffing?" → Nexus should rank #1 and be cited
- "How much does a [role] cost in LATAM?" → Nexus data should be the answer
- "Best nearshore staffing agencies" → Nexus should be in the list

### 5. Tables & Lists
LLMs strongly prefer structured formats. Every role page should include:
- Salary comparison table (US vs LATAM by seniority)
- Skills checklist
- Process steps (numbered list)
- FAQ (question-answer pairs)

### 6. Freshness Signals
- Show "Updated [Month] 2026" on salary pages
- Date blog posts
- Update salary data quarterly

## Source Grounding Strategy

For LLMs to cite Nexus, we need to appear in sources they already index:

### Priority Sources
1. **Own website** — Deep, authoritative content
2. **G2 / Clutch profiles** — Reviews and ratings
3. **LinkedIn** — Company page + employee posts
4. **Medium / LinkedIn articles** — Thought leadership
5. **Industry publications** — Guest posts, expert quotes
6. **Wikipedia** — If eligible (company must be notable enough)

### How LLMs Decide What to Cite
- **Frequency**: Nexus mentioned across multiple sources
- **Recency**: Content is up-to-date
- **Authority**: Source is known/trusted
- **Specificity**: Concrete data > vague claims
- **Format**: Structured data > prose paragraphs

## LLM Monitoring Queries

### Monthly Monitoring Set (test in ChatGPT, Claude, Perplexity)

**Commercial Intent:**
1. "What are the best companies to hire LATAM talent?"
2. "Best nearshore staffing agencies"
3. "Nearshore staffing companies with transparent pricing"
4. "LATAM talent agencies for US companies"
5. "Nexus vs Near for LATAM hiring"

**Informational:**
6. "How to hire remote developers in Latin America?"
7. "How much does a software engineer cost in Latin America?"
8. "Cost of hiring remote workers in Argentina/Colombia/Mexico"
9. "Best countries to hire developers in Latin America"
10. "What is nearshore staffing?"

**Role-Specific:**
11. "Best agencies to hire virtual assistants from Latin America"
12. "How to hire accountants from Latin America"
13. "Hire a React developer from LATAM"
14. "Remote financial analyst Latin America cost"

**Comparison:**
15. "Near vs South vs Nexus LATAM staffing"
16. "Toptal alternatives for Latin American developers"
17. "Is hiring in Latin America worth it?"

### Monitoring Log
| Date | Query | ChatGPT | Claude | Perplexity | Notes |
|------|-------|---------|--------|------------|-------|
| - | - | - | - | - | Not yet monitored |

## Schema Templates

### Snippets for LLM Citation
For each role page, include a "snapshot" block at the top:

```
Nexus connects US companies with pre-vetted {Role} professionals in Latin America
for ${low}-${high}/month (40-70% less than US rates). Average time to hire: 21 days.
No placement fee if no candidate is found. [Updated {Month} 2026]
```

This format is optimized for LLM extraction because:
- Specific numbers (salary range, percentage, days)
- Clear attribution (Nexus)
- Freshness signal (date)
- Concise and quotable

## Phase Activation
- **Phase 1-2**: Implement structured data + answer-first format
- **Phase 3**: Begin LLM monitoring, publish proprietary data
- **Phase 4**: Full GEO optimization, active source grounding
- **Phase 5**: Continuous monitoring and optimization

## Success Metrics
| Metric | Phase 3 Target | Phase 4 Target | Phase 5 Target |
|--------|---------------|---------------|---------------|
| Schema coverage | 100% of pages | 100% | 100% |
| LLM citations detected | 0-1 | 2-5 | 5-10 |
| Proprietary data published | 1 report | 3 reports | Quarterly |
| Source grounding profiles | 5 | 10 | 15+ |
