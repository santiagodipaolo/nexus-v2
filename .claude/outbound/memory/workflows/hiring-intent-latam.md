# Workflow 2: Hiring Intent — Already in LATAM

**Priority**: MEDIUM-HIGH (high conversion, lower volume)
**Status**: Not started
**Phase**: Launch in Phase 3

---

## Intent Signal
US companies that already have employees in Latin America.

## Why This Works
These companies have already validated the LATAM model. They know it works. The conversation is "let us make it easier/faster/cheaper" — not "try something new." Conversion typically higher because no education needed.

## Data Sources
| Source | How to Use | Refresh |
|--------|-----------|---------|
| LinkedIn | Search employees by company + LATAM locations | Weekly |
| Clay | Enrich companies with employee location data | Per batch |
| Apollo | Filter by employee locations | Weekly |

## Search Criteria

**Include**:
- US/Canada HQ, 20-500 employees
- Has 2+ employees in LATAM countries (ARG, COL, MEX, BRA, CHL, URY)
- Currently hiring (any role)

**Exclude**:
- Companies with LATAM HQ (they ARE the LATAM company)
- Staffing/outsourcing firms
- Blocklist, current clients, recently contacted

## Enrichment Layers
1. How many LATAM employees? Where?
2. What roles do they have in LATAM?
3. Hiring more LATAM or US roles?
4. Company growth trajectory
5. Decision maker contact info

## Copy Angle
Primary: "You already know LATAM works. We make it easier."

### Waterfall Logic
```
IF hiring_more_latam → "Scaling your LATAM team. We can speed that up."
IF hiring_us_roles → "You have team in [country] but hiring [role] in the US. Any reason not to go LATAM?"
IF many_latam_employees → "With [X] people in LATAM, you know the model. We handle sourcing, vetting, payroll."
DEFAULT → "You already work with LATAM talent. Curious if Nexus could make scaling easier."
```

## Volume & Expectations
| Metric | Base | Target | Stretch |
|--------|------|--------|---------|
| Leads/month | 50 | 75 | 100 |
| Positive reply rate | 2% | 3% | 4% |
| Meetings/month | 2 | 4 | 6 |

## Notes
- These are warm leads — they already believe in LATAM
- Focus on "easier/faster" angle, not "cheaper"
- Great workflow for when we have case studies to share
