# Workflow 1: Hiring Intent — US Remote

**Priority**: HIGH (highest volume workflow)
**Status**: Not started
**Phase**: Launch in Phase 2

---

## Intent Signal
US companies actively posting remote job openings in US/Canada for roles that could be filled by LATAM talent.

## Why This Works
Companies hiring remote US talent are already open to location flexibility. They're paying US rates for remote work — LATAM offers the same flexibility at 40-70% less.

## Data Sources
| Source | How to Use | Refresh |
|--------|-----------|---------|
| LinkedIn Jobs | Search: remote, US, roles we fill | 2x/week |
| Indeed | API or manual search by role keywords | Weekly |
| RemoteOK | Scrape new postings | Weekly |
| WeWorkRemotely | Scrape new postings | Weekly |
| Glassdoor | Company job listings | Weekly |
| Clay | Aggregate and enrich | Per batch |

## Search Criteria

**Include**:
- US/Canada based companies
- 10-500 employees
- Job posted in last 14 days
- Job type: Remote
- Roles: Software Engineer, Full-Stack Developer, React Developer, DevOps, QA, Virtual Assistant, Customer Support, Data Analyst, Designer, SDR, Accountant, Executive Assistant

**Exclude**:
- Staffing & recruiting agencies
- Software outsourcing companies
- Blocklist + current clients + contacted last 90 days

## Enrichment Layers
1. Company firmographics (size, industry, funding)
2. Offshore signal: employees in LATAM/Asia/EE?
3. Recent fundraising in last 90 days?
4. Number of total open roles?
5. Contact: VP Engineering / CTO / CEO / VP Operations
6. Contact email (waterfall: Prospeo → Hunter → Apollo)
7. Email validation (Bounceban)

## Copy Angle
Primary: "You're paying US rates for remote talent. LATAM = same timezone, 40-70% less."

### Waterfall Logic
```
IF has_offshore_latam → "You already work with LATAM talent. Curious why this role is US-based?"
IF has_offshore_other → "Timezone gaps with your [region] team probably slow things down. LATAM fixes that."
IF no_offshore → "Have you considered LATAM for this? Same timezone, 40-70% less, zero drama."
IF recent_funding → "Congrats on the raise. Scale fast without burning runway."
DEFAULT → "Solid role. LATAM talent at 40-70% less, same timezone."
```

## Volume & Expectations
| Metric | Base | Target | Stretch |
|--------|------|--------|---------|
| Leads/month | 200 | 300 | 400 |
| Open rate | 45% | 55% | 65% |
| Reply rate | 3% | 5% | 8% |
| Positive reply | 1% | 2% | 3.5% |
| Meetings/month | 4 | 8 | 15 |

## Sequence
See `memory/sequences/templates/hiring-intent-us.md`
- 3 emails: Day 0, Day 3, Day 7

## A/B Tests to Run First
1. Subject: `"{{firstName}}, quick question about the {{role}} role"` vs `"{{role}} at {{company}} — considered LATAM?"`
2. Opener: Intent-based vs question-based
3. CTA: `"Worth a quick look?"` vs `"Open to exploring?"`

## Notes
- Highest volume workflow — expect 40-50% of total outbound volume
- Quality of job posting match matters — don't reach out for roles we can't fill
- Refresh lists 2x/week to catch fresh postings (recency = higher reply rate)
