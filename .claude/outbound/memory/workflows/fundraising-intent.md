# Workflow 4: Fundraising Intent

**Priority**: HIGH (high intent, great timing)
**Status**: Not started
**Phase**: Launch in Phase 2

---

## Intent Signal
US companies that have recently raised funding (within last 90 days) — publicly announced or detected via SEC Form D filing.

## Why This Works
Post-fundraise: fresh capital + pressure to scale fast. They need to hire quickly while being responsible with burn rate. LATAM = 2-3x more hires for the same budget.

## Data Sources
| Source | How to Use | Refresh |
|--------|-----------|---------|
| Crunchbase | Filter by funding date, amount, US companies | 2x/week |
| Finsmes.com | Daily funding announcements | Daily (RSS) |
| SEC EDGAR | Form D filings (pre-announcement!) | Weekly |
| TechCrunch | Funding news articles | Daily |
| Clay | Aggregate and enrich | Per batch |

## Search Criteria

**Include**:
- US companies, 10-300 employees
- Raised $1M-$50M (Seed to Series C)
- Funded in last 90 days
- Tech/SaaS/Fintech/E-commerce

**Exclude**:
- Raises >$50M (enterprise, different buying process)
- Raises <$1M (too early, no hiring budget)
- Non-tech, Biotech/Pharma with long R&D
- Blocklist, current clients

## Copy Angle
Primary: "Congrats on the raise. Scale fast without burning runway."

### Waterfall Logic
```
IF has_open_roles → "Congrats on the raise. Hiring [X roles]? LATAM = 2-3x the hires for same budget."
IF series_a → "Series A = growth mode. Companies that win stretch runway by hiring LATAM at 40-70% less."
IF series_b_c → "At your stage, efficient scaling matters. LATAM = senior talent without senior US prices."
IF also_hiring_us → "Congrats on funding. Hiring [role] in US — for same budget, 2-3 LATAM engineers."
DEFAULT → "Congrats on recent funding. If scaling the team is on the roadmap, LATAM stretches that runway."
```

## Volume & Expectations
| Metric | Base | Target | Stretch |
|--------|------|--------|---------|
| Leads/month | 50 | 75 | 100 |
| Positive reply rate | 2% | 3% | 4% |
| Meetings/month | 2 | 4 | 7 |

## Timing
- Best: 2-4 weeks post-announcement
- After 90 days: signal is stale — move to general pipeline
- Form D filings precede announcements by 1-4 weeks (first-mover advantage!)

## Notes
- "Congrats on the raise" is overused — test alternatives
- Form D data = pre-announcement = competitive advantage
- Time-sensitive leads — process quickly
