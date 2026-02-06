# Nexus SEO/GEO KPIs

**Last Updated**: 2026-02-05
**Status**: Phase 0 - System Setup (corrected by Opus audit)

---

## Primary KPIs (Northstar Metrics)

### 1. Organic Leads Generated
**Current**: 0/month

| Phase | Base (minimum) | Target (realistic) | Stretch (optimistic) |
|-------|---------------|--------------------|--------------------|
| Phase 1-2 (Wk 1-6) | 0 | 1-3/month | 5/month |
| Phase 3 (Wk 7-10) | 3-5/month | 8-12/month | 15/month |
| Phase 4 (Wk 11-16) | 10-15/month | 20-30/month | 40/month |
| Phase 5 (Wk 17+) | 20-30/month | 40-60/month | 80+/month |

**Why This Matters**: This is revenue. Everything else supports this.

**Reality check**: SEO takes 2-4 months to show meaningful results. Phase 1-2 will likely produce near-zero organic leads. Patience is critical.

---

### 2. Keyword Rankings (Commercial Intent)
**Current**: 0 keywords ranking

| Phase | Base | Target | Stretch |
|-------|------|--------|---------|
| Phase 2 | 10 keywords in Top 100 | 20 in Top 50 | 30 in Top 50 |
| Phase 3 | 20 in Top 50, 5 in Top 20 | 40 in Top 50, 10 in Top 20 | 50+ in Top 50, 15 in Top 20 |
| Phase 4 | 10 in Top 20, 3 in Top 10 | 20 in Top 20, 8 in Top 10 | 30 in Top 20, 15 in Top 10 |
| Phase 5 | 15 in Top 10, 3 in Top 5 | 20+ in Top 10, 5+ in Top 5 | 30 in Top 10, 10 in Top 5 |

**Note**: "Top 3 for primary keywords" is a 12-18 month goal, NOT a 6-month goal, given Near's 1,241 page head start and DR 40-50+.

---

### 3. Organic Traffic (sessions/month)
**Current**: Baseline TBD (establish in Phase 1)

| Phase | Base | Target | Stretch |
|-------|------|--------|---------|
| Phase 2 | 1.2x baseline | 1.5x baseline | 2x baseline |
| Phase 3 | 2x baseline | 3-4x baseline | 5x baseline |
| Phase 4 | 4x baseline | 6-8x baseline | 10x baseline |
| Phase 5 | 8x baseline | 12-15x baseline | 20x baseline |

---

## Secondary KPIs

### Pages Indexed
| Phase | Base | Target | Stretch |
|-------|------|--------|---------|
| Phase 1 | 4 pages | 5 pages | 6 pages |
| Phase 2 | 12 pages | 15-18 pages | 25 pages |
| Phase 3 | 40 pages | 55-65 pages | 80 pages |
| Phase 4 | 80 pages | 120-150 pages | 200 pages |
| Phase 5 | 200 pages | 300 pages | 400+ pages |

### Content Velocity (pages/week)
| Phase | Base | Target | Stretch |
|-------|------|--------|---------|
| Phase 2 | 2/week | 3-4/week | 5/week |
| Phase 3 | 5/week | 8-10/week | 12/week |
| Phase 4 | 8/week | 12-15/week | 20/week |

**Reality check**: Quality > speed. 5 excellent pages/week beats 20 thin pages/week. Each role page needs genuinely unique content, not just template name-swaps.

### Core Web Vitals
- **LCP**: <2.5s (GREEN) — Target by Phase 2
- **FID/INP**: <100ms (GREEN) — Target by Phase 2
- **CLS**: <0.1 (GREEN) — Target by Phase 2

### Conversion Rate
| Page Type | Base | Target | Stretch |
|-----------|------|--------|---------|
| Role pages | 1% | 2-3% | 5% |
| Blog posts | 0.3% | 0.5-1% | 2% |
| Homepage | 1% | 2% | 3% |

### Bounce Rate
| Page Type | Base | Target | Stretch |
|-----------|------|--------|---------|
| Role pages | <55% | <45% | <35% |
| Blog posts | <65% | <55% | <45% |

---

## GEO Metrics

### Structured Data Coverage
- Phase 1: Organization + WebSite schema on homepage
- Phase 2: Service + FAQPage schema on all role pages (100%)
- Phase 3+: Maintain 100% coverage on all new pages

### LLM Citations
**This is aspirational, not a hard KPI** — we cannot control LLM training data.

| Phase | Base | Target | Stretch |
|-------|------|--------|---------|
| Phase 3 | 0 citations | 0-1 citations | 2 citations |
| Phase 4 | 0-1 | 1-3 | 5 |
| Phase 5 | 2-3 | 5-8 | 10+ |

**Monitoring**: Run 17 standard queries monthly (see `memory/geo/playbook.md`).

---

## Link Building

| Phase | Base | Target | Stretch |
|-------|------|--------|---------|
| Phase 1 | 0 | 3-5 (directories) | 8 |
| Phase 2 | 5 | 10-15 | 20 |
| Phase 3 | 15 | 25-35 | 50 |
| Phase 4 | 30 | 50-75 | 100 |

**Quality threshold**: Prioritize DR 30+ backlinks. One DR 60 link > ten DR 10 links.

---

## Tracking Cadence

### Weekly (every Monday)
- Organic sessions (GA4)
- Pages indexed (GSC)
- Top keyword positions (GSC)
- Pages published count
- Form submissions from organic

### Monthly (first Monday)
- Full KPI review vs all 3 levels (base/target/stretch)
- Domain Rating check
- Backlinks audit
- LLM citation monitoring
- Competitor comparison
- Learnings documentation

---

## Alert Thresholds
- Traffic drops >15% week-over-week → investigate
- 0 new pages indexed for 2+ weeks → check technical SEO
- Conversion rate drops >50% → check CTAs and forms
- Core Web Vitals turn red → immediate fix

## Escalate to Human
- Budget decisions (tools, services)
- Major algorithm update impact
- Strategic pivots needed
- External partnerships/outreach decisions

---

**Remember**: These are 3-tier targets. Hitting "Base" consistently is better than hitting "Stretch" once and then nothing. Consistency wins in SEO.
