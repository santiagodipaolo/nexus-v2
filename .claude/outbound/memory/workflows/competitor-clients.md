# Workflow 7: Competitor Clients

**Priority**: MEDIUM (targeted, lower volume, high value)
**Status**: Not started
**Phase**: Launch in Phase 3

---

## Intent Signal
US companies that are current or past clients of competing nearshoring firms: Near, South, Howdy, Toptal, Turing, BairesDev, TECLA, Revelo.

## Why This Works
Already buy nearshoring services. No education needed. Conversation is about being a better alternative: transparent pricing, risk-free model, faster delivery.

## Data Sources
| Source | How to Use | Refresh |
|--------|-----------|---------|
| G2 Reviews | Companies that reviewed Near, South, etc. | Monthly |
| Clutch Reviews | Companies that reviewed competitors | Monthly |
| LinkedIn | Companies connected to competitor pages | Monthly |
| LinkedIn | Employees who previously worked at competitors | Monthly |
| Competitor websites | Case studies, testimonial pages | Monthly |
| Clay | Company enrichment | Per batch |

## Search Criteria

**Include**:
- US companies, 20-500 employees
- Identified as client of: Near, South, Howdy, Toptal (LATAM), Turing, BairesDev, TECLA, Revelo
- Evidence of active engagement (review, testimonial)

**Exclude**:
- Very happy with competitor (5-star recent review)
- Companies with long-term contracts (wait for renewal)
- Blocklist, current clients

## Copy Angle
Primary: "Already nearshoring? Here's what transparent pricing and zero risk looks like."

### Waterfall Logic
```
IF uses_near → "You work with Near for LATAM talent. Curious — do they share pricing upfront? We do. Every role, every plan."
IF uses_toptal → "Toptal is solid, but markups can be steep. Similar LATAM quality at 30-40% less, transparent pricing."
IF uses_bairesdev → "BairesDev has scale, but quality can vary. We only pass top 3% — and if none fit, you pay nothing."
IF left_negative_review → "Saw your experience with {{competitor}} wasn't ideal. We built Nexus differently — transparent, risk-free."
IF unknown_competitor → "You use a nearshoring partner. If evaluating alternatives, we'd love to show risk-free and transparent."
```

## Volume & Expectations
| Metric | Base | Target | Stretch |
|--------|------|--------|---------|
| Leads/month | 30 | 40 | 50 |
| Positive reply rate | 2% | 3% | 5% |
| Meetings/month | 2 | 3 | 5 |

## Notes
- NEVER directly attack the competitor — focus on what Nexus does differently
- Best combined with LinkedIn outreach
- G2/Clutch review mining is richest data source
- Higher LTV leads — already budget for nearshoring
