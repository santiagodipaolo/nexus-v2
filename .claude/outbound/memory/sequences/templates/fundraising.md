# Email Sequence: Fundraising Intent

**Workflow**: Fundraising Intent
**Emails**: 3 (Day 0, Day 3, Day 7)

---

## Email 1 — Funding Opener (Day 0)

**Subject A**: `{{firstName}}, congrats on the raise — {quick|brief} thought`
**Subject B**: `Scaling {{company_name}} post-funding`

```
{{firstName}}, {saw the news about|congrats on} {{company_name}}'s recent {{funding_stage}} round.

{{waterfall_line_2}}

We pre-vet LATAM professionals (top 3% pass rate) and present candidates in under 14 days. Average savings: 40-70% vs US hires.

No fee if we don't find a match.

{Worth exploring|Relevant} as you scale {{company_name}}?

{{signature}}
```

### Waterfall Line 2:
```
IF has_open_roles:
  With {{open_roles_count}} open roles, hiring pressure is probably real. LATAM talent = 2-3x the hires for the same budget.

IF series_a:
  Series A = growth mode. The founders who win stretch their runway by hiring LATAM at 40-70% less than US.

IF series_b_c:
  At your stage, efficient scaling is everything. LATAM gives you senior talent without senior US price tags.

IF also_hiring_us:
  Noticed you're hiring a {{role_title}} in the US. For the same budget, you could get 2-3 LATAM professionals at that level.

DEFAULT:
  Scaling fast without burning runway is the challenge right now. LATAM talent is how smart teams are solving it.
```

---

## Email 2 — Runway Math (Day +3)

```
{{firstName}}, shortest email you'll get today:

A {{role_title}} in the US: ~${{us_salary}}/mo.
Same role from LATAM: ~${{latam_salary}}/mo.

That's {{savings_per_year}} saved per hire, per year. Multiply by 3-5 hires and the math gets interesting fast.

{Relevant|Worth a look} for {{company_name}}'s roadmap?
```

---

## Email 3 — Speed + Risk Reversal (Day +7)

```
{{firstName}}, post-funding, speed matters as much as cost.

We present pre-vetted LATAM candidates in under 14 days. No contracts. No fee if we don't find a match.

What can I share to earn 15 minutes with you?
```

---

## Variable Reference
| Variable | Source | Example |
|----------|--------|---------|
| `{{funding_stage}}` | Crunchbase/Finsmes | "Series A" |
| `{{open_roles_count}}` | Job board scraping | "12" |
| `{{savings_per_year}}` | Calculated | "$72,000" |
