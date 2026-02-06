# Email Sequence: Competitor Clients

**Workflow**: Competitor Clients
**Emails**: 3 (Day 0, Day 3, Day 7)

---

## Email 1 — Alternative Opener (Day 0)

**Subject A**: `{{firstName}}, {quick|brief} question about your nearshoring partner`
**Subject B**: `{{company_name}}'s LATAM team — transparent alternative`

```
{{firstName}}, {noticed|saw} {{company_name}} {works with|uses} {{competitor_name}} for LATAM talent.

{{waterfall_line_2}}

We built Nexus around two things most nearshoring firms don't do: transparent pricing (every role, every plan, on our website) and zero risk (no match = no fee).

{Curious if that's relevant|Worth a conversation}?

{{signature}}
```

### Waterfall Line 2:
```
IF uses_near:
  Curious — do they share pricing upfront? We do. Every role, every plan, right on our website. No surprises.

IF uses_toptal:
  Toptal is solid, but the markups can be significant. We offer similar LATAM quality at 30-40% less, with full pricing transparency.

IF uses_bairesdev:
  BairesDev has scale, but I've heard quality consistency can be a challenge. We only pass the top 3% — and if none fit, you pay nothing.

IF left_negative_review:
  Saw your experience with {{competitor_name}} wasn't ideal. We built Nexus to fix exactly those problems — transparent pricing, rigorous vetting, risk-free.

IF unknown_competitor:
  If you ever evaluate alternatives, we'd love to show you what transparent and risk-free looks like.
```

---

## Email 2 — Differentiation (Day +3)

```
{{firstName}}, quick comparison:

| | {{competitor_name}} | Nexus |
|---|---|---|
| Pricing | Contact for quote | Published on website |
| Risk | Standard contract | No match = no fee |
| Speed | 2-4 weeks | Under 14 days |
| Vetting | Varies | Top 3% pass rate |

Not asking you to switch. Just asking: is it {worth|relevant} seeing what transparent looks like?
```

---

## Email 3 — Low-Pressure Close (Day +7)

```
{{firstName}}, not trying to replace what works.

But if you're ever evaluating alternatives or need extra capacity beyond {{competitor_name}}, we're here.

No contracts. No pressure. Happy to share more whenever it makes sense.

{{signature}}
```

---

## Notes
- NEVER badmouth competitors directly — differentiate positively
- Table format in Email 2 is intentional — visual comparison is powerful
- "Not asking you to switch" reduces defensiveness
- These leads often respond better to LinkedIn DM than cold email
