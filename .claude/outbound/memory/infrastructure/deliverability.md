# Deliverability Monitoring

**Last Updated**: 2026-02-05
**Status**: Pre-launch — no data yet

---

## Weekly Health Report

### Template (fill every Monday)
```
## Week of [date]

### Per-Domain Metrics
| Domain | Inbox% | Bounce% | Spam% | Open% | Score | Status |
|--------|--------|---------|-------|-------|-------|--------|
| domain1 | — | — | — | — | — | Warmup |
| domain2 | — | — | — | — | — | Warmup |
| ... | — | — | — | — | — | — |

### Overall
- Total emails sent: —
- Avg inbox placement: —
- Avg bounce rate: —
- Domains paused: —
- Domains rotated: —

### Issues & Actions
- [None yet]
```

---

## Health Thresholds

| Metric | Healthy (Green) | Warning (Yellow) | Critical (Red) |
|--------|----------------|-----------------|----------------|
| Inbox placement | >95% | 85-95% | <85% |
| Bounce rate | <2% | 2-4% | >4% |
| Spam complaints | <0.05% | 0.05-0.1% | >0.1% |
| Open rate | >45% | 35-45% | <35% |
| Unsubscribe rate | <0.5% | 0.5-1% | >1% |
| Warmup score | >95 | 85-95 | <85 |

## Response Protocol

### Yellow (Warning)
1. Reduce send volume by 50% on affected domain
2. Increase warmup ratio (more warmup, less cold)
3. Check list quality (validate emails again)
4. Review copy for spam trigger words
5. Monitor for 3-5 days

### Red (Critical)
1. IMMEDIATELY pause ALL cold sends on affected domain
2. Warmup only for 7-14 days
3. Check if domain is blacklisted (MXToolbox, mail-tester.com)
4. Review last batch of emails sent — what changed?
5. If blacklisted: stop using domain, replace

### Domain Burned (Blacklisted)
1. Stop using domain completely
2. Remove from Instantly
3. Buy replacement domain
4. Setup DNS (24-48h)
5. Start warmup (21-30 days)
6. Document in mistakes.md — what caused it

---

## Weekly Reports Archive
_No reports yet — starts when campaigns launch._
