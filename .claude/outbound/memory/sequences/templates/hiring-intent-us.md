# Email Sequence: Hiring Intent US Remote

**Workflow**: Hiring Intent — US Remote
**Emails**: 3 (Day 0, Day 3, Day 7)
**Status**: Template ready — adapt per lead with enrichment data

---

## Email 1 — Intent Opener (Day 0)

**Subject A**: `{{firstName}}, {quick|brief} question about the {{role_title}} role`
**Subject B**: `{{role_title}} at {{company_name}} — {noticed|saw} you're hiring`

```
{{firstName}}, {noticed|came across|saw} the {{role_title}} role you're hiring for at {{company_name}}.

{{waterfall_line_2}}

We pre-vet LATAM candidates (only top 3% pass) and can present matches in under 14 days. Average savings: 40-70% vs US rates.

Zero risk: if we don't find someone you love, you pay nothing.

{Worth a quick look|Relevant|Interesting} for {{company_name}}?

{{signature}}
```

### Waterfall Line 2 Options:
```
IF has_offshore_latam:
  You already have team in LATAM — {curious|wondering} why this one's US-based? Timezone? Seniority?

IF has_offshore_other:
  With your team in {{region}}, the timezone gaps probably slow things down. LATAM {fixes that|solves that}.

IF no_offshore:
  Solid role. Have you considered LATAM for this? Same timezone, 40-70% less, zero timezone drama.

IF recent_funding:
  Congrats on the {raise|recent funding} — scaling fast without burning runway is the game now.

DEFAULT:
  LATAM talent for this role would cost 40-70% less — same timezone, pre-vetted, ready in 14 days.
```

---

## Email 2 — Data + Credibility (Day +3)

**Subject**: (no subject — reply thread)

```
{{firstName}}, shortest email you'll get today:

A {{role_title}} in the US costs ~${{us_salary}}/mo.
Same role, same timezone, from LATAM: ~${{latam_salary}}/mo.

We handle vetting, payroll, and compliance. You just interview the top 3-5 candidates we present.

{Relevant|Worth exploring} for {{company_name}}?
```

---

## Email 3 — Risk Reversal + Soft Close (Day +7)

**Subject**: (no subject — reply thread)

```
{{firstName}}, if {{company_name}} has an aggressive 2026 roadmap and recruiting isn't keeping up — we can present pre-vetted LATAM candidates in under 14 days.

No fee if we don't find a match. No contracts. No risk.

What would it take to earn 15 minutes on your calendar?
```

---

## Variable Reference
| Variable | Source | Example |
|----------|--------|---------|
| `{{firstName}}` | Contact enrichment | "Sarah" |
| `{{role_title}}` | Job posting | "Senior React Developer" |
| `{{company_name}}` | Company data | "Acme Corp" |
| `{{us_salary}}` | ICP salary table | "11,000" |
| `{{latam_salary}}` | ICP salary table | "5,000" |
| `{{region}}` | Employee location enrichment | "India" |
| `{{waterfall_line_2}}` | Clay conditional logic | Dynamic |
| `{{signature}}` | Sender profile | Name + title + nexus.lat |

## Quality Checklist
- [ ] Email 1 under 100 words
- [ ] Email 2 under 50 words
- [ ] Email 3 under 60 words
- [ ] All variables populated (no {{blanks}})
- [ ] Spintax applied for deliverability variation
- [ ] Salary data accurate for the specific role
- [ ] Ends with a question (not a demand)
