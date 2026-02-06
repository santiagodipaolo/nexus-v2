# Nexus - Instructions for Claude

## About the Project
Nexus is a recruiting agency connecting US companies with professional talent from Latin America. We compete directly with Near (hirewithnear.com), South, Howdy, and similar agencies.

**Language**: The site and content target US companies (English). Spanish content exists only for SEO indexing (talent-side pages, not visible in main navigation).

## Tech Stack
- **Framework:** Next.js 14.1.4 (App Router)
- **Styling:** Tailwind CSS + DaisyUI
- **Animations:** Framer Motion
- **Deploy:** [pending]

## Project Structure
```
src/
├── app/
│   ├── layout.js              # Main layout with SEO metadata
│   ├── page.js                # Homepage
│   ├── email-success/         # Email confirmation
│   ├── terms-conditions/      # T&C
│   ├── hire/[role]/           # Role pages (dynamic route) [TO CREATE]
│   ├── blog/[slug]/           # Blog posts (MDX) [TO CREATE]
│   └── es/                    # Spanish content for SEO [TO CREATE]
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Benefits/
│   ├── TalentGallery/
│   ├── Pricing/
│   ├── FAQ/
│   └── Footer/
├── data/
│   └── roles.js               # Role data source [TO CREATE]
└── lib/
    └── utils.ts
```

## Agent System (5 Agents)

**Simplified from 15 to 5 functional agents after Opus audit (2026-02-05).**

```
.claude/
├── agents/
│   ├── orchestrator.md            # Coordinator (priorities, phases, cadence)
│   ├── seo-geo-strategist.md      # SEO + GEO + Content strategy (unified)
│   ├── technical-implementor.md   # Code, tech SEO, page creation
│   ├── quality-reviewer.md        # QA, code review, SEO validation
│   └── analytics-learning.md      # Metrics, reporting, feedback, learning
└── memory/
    ├── shared/
    │   ├── kpis.md                # Objectives (base/target/stretch levels)
    │   └── goals.md               # Vision & strategy
    ├── orchestrator/
    │   └── priorities.md          # Prioritized task queue
    ├── seo/
    │   ├── competitors.md         # Competitive analysis
    │   ├── keywords.md            # Keyword database
    │   └── backlinks.md           # Link building strategy & targets
    ├── geo/
    │   └── playbook.md            # GEO playbook with monitoring queries
    ├── content/
    │   ├── editorial-calendar.md  # Content calendar
    │   └── templates/
    │       └── role-page-template.md  # Role page content template
    ├── analytics/
    │   ├── baseline.md            # CRITICAL: Never delete
    │   ├── rankings.md            # Ranking evolution
    │   └── traffic.md             # Traffic data
    └── feedback/
        ├── learnings.md           # Accumulated knowledge
        ├── improvements.md        # Improvements implemented
        └── mistakes.md            # Errors to NOT repeat
```

### How It Works

**Between Sessions:**
- All information persists in `.claude/memory/*` files
- Read relevant memory files before acting
- Update relevant memory files after acting

**Activation:**
- "Start Phase 1" or `/orchestrate start --phase 1`

**Key Commands:**
- `/orchestrate status` — Status of all agents and phase progress
- `/orchestrate prioritize` — Re-prioritize tasks
- `/orchestrate report` — Executive report

### Core Strategy (Data-Driven)

**80% Role Pages, 20% Blog** — Role pages convert 3-5x better than blog.

**Key Differentiators vs Near:**
1. Transparent pricing on every role page (Near doesn't show prices)
2. Salary calculator (interactive tool, linkable asset)
3. Proprietary data (Nexus Hiring Report)
4. Risk-free model ("no candidate found = nothing paid")
5. Spanish content for SEO (Near doesn't have this)

**Phases (with realistic targets):**
- **Phase 1 (Weeks 1-2):** SEO fundamentals + analytics setup + 1 role page template
- **Phase 2 (Weeks 3-6):** 10-15 role pages + 3-5 blog posts + first rankings
- **Phase 3 (Weeks 7-10):** 55-65 pages + 3-4x traffic + first leads
- **Phase 4 (Weeks 11-16):** 120-150 pages + 6-8x traffic + 20-30 leads/month
- **Phase 5 (Ongoing):** 300+ pages, compete with Near

**Full Plan:** See `.claude/plans/dapper-stargazing-frost.md`

### Critical Files (NEVER DELETE)
- `memory/analytics/baseline.md` — Starting point for measuring progress
- `memory/shared/kpis.md` — Objective definitions (base/target/stretch)
- `memory/feedback/learnings.md` — Accumulated knowledge

### Update Convention
- After completing a task → update relevant memory files
- After learning something → document in `learnings.md`
- After making a mistake → document in `mistakes.md`
- End of session → update `priorities.md` with next steps

## Main Competitor: Near

- **URL:** hirewithnear.com
- **Pages:** ~1,241 indexed
- **DR:** ~40-50+
- **Strategy:** Dedicated role pages + massive blog
- **Strengths:** Volume, reviews (G2 4.9/5), trust signals, 2,700+ placements
- **Weaknesses:** Opaque pricing, generic content, many 404s, no interactive tools

Full analysis: `.claude/memory/seo/competitors.md`

## SEO Tasks (Priority)

### Urgent (Phase 1)
- [x] Improve meta tags (title, description, OG, Twitter Cards) — Done 2026-02-05
- [x] Fix package.json dependencies — Done 2026-02-05
- [ ] Create sitemap.xml (dynamic, Next.js)
- [ ] Create robots.txt
- [ ] Add structured data (Organization, WebSite)
- [ ] Configure Google Analytics 4
- [ ] Connect Google Search Console
- [ ] Establish baseline metrics

### High Priority (Phase 2)
- [ ] Create /hire/[role] dynamic route
- [ ] Create first 10 role pages
- [ ] Create src/data/roles.js data source
- [ ] Implement FAQPage + Service structured data
- [ ] Create 3-5 strategic blog posts
- [ ] Set up internal linking system

### Medium Priority (Phase 3+)
- [ ] Salary calculator (interactive tool)
- [ ] Nexus Hiring Report (proprietary data)
- [ ] Spanish content pages (/es/)
- [ ] Success stories
- [ ] Comparisons (Nexus vs Near, etc.)
- [ ] Country-specific hiring guides

## Code Conventions

- Components in PascalCase
- Component files in folders with index.js
- Tailwind for styles (no inline styles)
- Responsive: mobile-first
- Prefer Server Components (no `use client` unless needed)
- Use `next/image` for all images
- Self-referencing canonical tags on all pages
- No trailing slashes (enforced in next.config.mjs)

## Important Links

- **Forms:** https://7i7zpal0.forms.app/nexus
- **Careers:** https://careers-nexus.notion.site/
- **LinkedIn:** https://www.linkedin.com/company/nexus-lat/
- **Twitter:** https://x.com/nexus_lat
