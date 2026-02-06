# Orchestrator Priorities - Nexus SEO/GEO System

**Last Updated**: 2026-02-05 (post Opus audit)
**Current Phase**: Phase 1 - Foundation
**Status**: In progress. System restructured, tech fixes applied.

---

## What's Done (2026-02-05 Opus Audit)
- [x] Agent system simplified: 15 → 5 functional agents
- [x] Memory structure cleaned: duplicates removed, files consolidated
- [x] KPIs reformulated with base/target/stretch levels
- [x] Meta tags improved: title, description, OG, Twitter Cards
- [x] Package.json fixed: runtime deps moved from devDependencies
- [x] GEO Playbook created with 17 monitoring queries
- [x] Link building plan with 22 specific targets
- [x] Editorial calendar created (10 role pages + 4 blog posts for Phase 2)
- [x] Role page content template created
- [x] CLAUDE.md rewritten
- [x] Master plan rewritten

---

## Next Priorities (Phase 1 Remaining)

**Priority 1: Technical SEO Infrastructure**
- [ ] Create `src/app/sitemap.ts` (dynamic sitemap)
- [ ] Create `src/app/robots.ts` (robots.txt)
- [ ] Update `next.config.mjs` (trailingSlash, headers, image optimization)
- [ ] Add Organization + WebSite JSON-LD structured data to homepage
- **Agent**: Technical Implementor
- **ETA**: 1-2 hours

**Priority 2: Google Analytics + Search Console**
- [ ] Configure GA4 (or verify if configured)
- [ ] Connect Google Search Console
- [ ] Set up event tracking on CTAs
- [ ] Document baseline metrics in `memory/analytics/baseline.md`
- **Agent**: Analytics & Learning
- **ETA**: 30-60 minutes
- **Note**: Needs access credentials from Santiago

**Priority 3: First Role Page Template**
- [ ] Create `src/app/hire/[role]/page.js` dynamic route
- [ ] Create `src/data/roles.js` data source
- [ ] Build reusable RolePage components
- [ ] Implement /hire/software-engineer as first page
- [ ] Include: transparent pricing, salary table, FAQ, structured data
- [ ] Validate with Quality Reviewer checklist
- **Agent**: Technical Implementor + Quality Reviewer
- **ETA**: 4-6 hours

**Priority 4: Validation & Submit**
- [ ] Test sitemap.xml accessibility
- [ ] Validate structured data (Google Rich Results Test)
- [ ] Validate OG tags
- [ ] Submit sitemap to GSC
- [ ] Run Core Web Vitals check
- **Agent**: Quality Reviewer
- **ETA**: 1 hour

---

## NOT Priority Now
- Blog system → Phase 2
- Scale to 10+ pages → Phase 2 (template must be proven first)
- Link building → Phase 3
- Full GEO optimization → Phase 3
- Salary calculator → Phase 3
- Spanish content → Phase 4
- Ahrefs/SEMrush → when scaling warrants it

---

## Agent Assignments (Phase 1)

| Agent | Current Focus | Status |
|-------|-------------|--------|
| Orchestrator | Coordination, priorities | Active |
| SEO/GEO Strategist | Available for keyword research if needed | Standby |
| Technical Implementor | Sitemap, robots, config, role page | Next up |
| Quality Reviewer | Validation after implementation | Waiting |
| Analytics & Learning | GA4/GSC setup, baseline | Needs credentials |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-05 | Agents reduced 15 → 5 | 10 agents couldn't execute real tasks |
| 2026-02-05 | KPIs use 3 tiers | Single optimistic target was misleading |
| 2026-02-05 | Phase 2 reduced to 10-15 pages | Quality > quantity, templates must be proven |
| 2026-02-05 | Pricing transparency = #1 differentiator | Near doesn't do this, unique content for Google |
| 2026-02-05 | Spanish content in Phase 4 | Indexing only, not visible in main nav |
| 2026-02-05 | Salary calculator in Phase 3 | Linkable asset, but foundation comes first |

---

## Next Update
After Phase 1 completion → plan Phase 2 priorities based on what we learned.
