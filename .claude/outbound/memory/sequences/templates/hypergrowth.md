# Email Sequence: Hypergrowth Intent

**Workflow**: Hypergrowth Intent
**Emails**: 3 (Day 0, Day 3, Day 7)

---

## Email 1 — Growth Opener (Day 0)

**Subject**: `{{firstName}}, {{company_name}} is growing fast — {quick|brief} idea`

```
{{firstName}}, {{company_name}} has been growing {fast|rapidly} — {{growth_signal}}.

{{waterfall_line_2}}

We pre-vet LATAM professionals (top 3% pass rate) and present candidates in under 14 days. Same timezone, 40-70% less than US.

No fee if we don't find a match.

{Worth exploring|Relevant} for {{company_name}}?

{{signature}}
```

### Waterfall Line 2:
```
IF many_open_roles:
  With {{open_roles}} open roles, your recruiting team is probably stretched. We can take some of that off your plate.

IF headcount_growth:
  Going from {{prev_size}} to {{current_size}} employees in 6 months is impressive. We help keep that pace without 2x-ing your payroll costs.

IF hiring_engineering:
  Scaling engineering? Pre-vetted LATAM engineers — same timezone, 50-60% less. Candidates in 14 days.

IF hiring_support_ops:
  Growing your support/ops team? LATAM professionals are bilingual, timezone-aligned, and 40-70% less.
```

---

## Email 2 — Scale Math (Day +3)

```
{{firstName}}, quick math:

Hiring 5 {{role_title}}s in the US: ~${{us_total}}/mo.
Same 5 from LATAM: ~${{latam_total}}/mo.
Annual savings: ~${{annual_savings}}.

We handle sourcing, vetting, payroll. You focus on growing {{company_name}}.

{Worth a quick look|Relevant}?
```

---

## Email 3 — Speed Close (Day +7)

```
{{firstName}}, when you're growing this fast, hiring speed matters as much as cost.

We present pre-vetted LATAM candidates in under 14 days. No contracts, no upfront fees.

What would it take to get 15 minutes on your calendar?
```

---

## Variable Reference
| Variable | Source | Example |
|----------|--------|---------|
| `{{growth_signal}}` | LinkedIn/Clay | "went from 50 to 85 employees in 6 months" |
| `{{open_roles}}` | Job board count | "23" |
| `{{us_total}}` | Calculated (5 × us_salary) | "55,000" |
| `{{latam_total}}` | Calculated (5 × latam_salary) | "25,000" |
| `{{annual_savings}}` | Calculated | "360,000" |
