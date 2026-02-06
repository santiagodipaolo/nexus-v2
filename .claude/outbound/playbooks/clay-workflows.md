# Clay Workflows Guide — Nexus Outbound

## What is Clay?
Clay is a data orchestration platform. Think of it as a spreadsheet on steroids — you can search for companies, enrich them with data from 50+ sources, apply AI logic, and export clean lists ready for outreach.

---

## How We Use Clay

### Core Flow
```
1. SOURCE: Find companies (search, import, or integrate)
2. ENRICH: Add data layers (firmographics, contacts, signals)
3. SCORE: Apply ICP scoring formula
4. FILTER: Remove disqualified leads
5. EXPORT: Push to Instantly for campaigns
```

---

## Workflow Setup: Step by Step

### Workflow 1: Hiring Intent US (Example)

#### Step 1: Create New Table
- Name: `[Date] Hiring Intent US`
- Import method: Clay People/Company Search OR CSV import from LinkedIn Sales Navigator

#### Step 2: Search Criteria (Clay Search)
```
Company:
  - HQ: United States or Canada
  - Employees: 10-500
  - Industry: Technology, SaaS, Fintech, E-commerce

Job Postings:
  - Keywords: [role names we fill]
  - Location: Remote
  - Posted: Last 14 days
```

#### Step 3: Enrichment Columns

Add these columns in order:

| Column | Type | Source | Purpose |
|--------|------|--------|---------|
| Company Name | Auto | Search | Identifier |
| Website | Auto | Search | Identifier |
| Employee Count | Enrichment | Clay/LinkedIn | ICP filter |
| Industry | Enrichment | Clay | ICP filter |
| HQ Location | Enrichment | Clay | ICP filter |
| Funding Stage | Enrichment | Crunchbase | Secondary signal |
| Last Funding Date | Enrichment | Crunchbase | Secondary signal |
| Offshore LATAM? | AI (OpenAI) | LinkedIn employees | Waterfall copy |
| Offshore Other? | AI (OpenAI) | LinkedIn employees | Waterfall copy |
| Open Roles Count | Enrichment | Job boards | Context |
| Decision Maker Name | Enrichment | Clay/LinkedIn | Contact |
| Decision Maker Title | Enrichment | Clay/LinkedIn | Contact |
| Email (Prospeo) | Enrichment | Prospeo | Contact |
| Email (Hunter) | Enrichment | Hunter.io | Fallback |
| Email Validated | Enrichment | Bounceban | Quality check |
| Lead Score | Formula | Calculated | Prioritization |
| Copy Angle | AI (OpenAI) | All data | Which waterfall branch |

#### Step 4: AI Column — Offshore Detection
**Prompt for OpenAI column:**
```
Based on this company's LinkedIn data, determine:
1. Does this company have employees in Latin America? (Yes/No)
2. If yes, which countries and approximately how many?
3. Does this company have employees in Asia or Eastern Europe? (Yes/No)
4. If yes, which regions?

Return as JSON:
{
  "has_latam": true/false,
  "latam_countries": ["country1", "country2"],
  "latam_count": N,
  "has_other_offshore": true/false,
  "other_regions": ["region1", "region2"]
}
```

#### Step 5: AI Column — Copy Angle
**Prompt:**
```
Based on these company attributes:
- Has LATAM employees: {{has_latam}}
- Has other offshore: {{has_other_offshore}} (regions: {{other_regions}})
- Recent funding: {{funding_date}}
- Open roles: {{open_roles_count}}

Select the best copy angle from these options:
1. "offshore_latam" - if they already have LATAM employees
2. "offshore_other" - if they have Asia/EE employees but no LATAM
3. "no_offshore" - if they have no offshore presence
4. "recent_funding" - if funded in last 90 days (overrides others)

Return only the angle name.
```

#### Step 6: Lead Scoring Formula
```
Score =
  (Job posting recency × 3) +      // 10 if <7 days, 5 if 7-14 days
  (Company size fit × 2) +          // 10 if 30-200, 7 if 10-30 or 200-500
  (Industry fit × 2) +              // 10 if SaaS/Fintech, 7 if other tech
  (Funding signal × 1.5) +          // 10 if funded <90 days, 0 otherwise
  (Offshore signal × 1.5) +         // 8 if has offshore, 0 if no
  (Open roles count × 1)            // 10 if 10+, 5 if 5-10, 2 if <5

A Lead: Score ≥ 70
B Lead: Score 50-69
C Lead: Score 30-49
D Lead: Score < 30 (disqualify)
```

#### Step 7: Filter & Export
1. Remove Score D leads
2. Remove companies on blocklist (use Clay filter or imported list)
3. Remove companies already in Instantly (deduplicate)
4. Sort by score (A first)
5. Export to Instantly with columns:
   - First Name, Last Name, Email, Company, Title
   - Custom fields: role_title, us_salary, latam_salary, copy_angle, company_name

---

## Waterfall Enrichment Setup

### Email Finding Waterfall
```
Column 1: Prospeo Email → Try Prospeo first
Column 2: Hunter Email  → IF Prospeo is empty, try Hunter
Column 3: Apollo Email  → IF both empty, try Apollo
Column 4: Best Email    → COALESCE(Prospeo, Hunter, Apollo)
Column 5: Validation    → Send Best Email to Bounceban
Column 6: Valid?        → IF validation score > 80%, mark valid
```

### Key Clay Features to Use
- **Waterfall columns**: Try multiple sources, pick first result
- **AI columns**: OpenAI for classification, categorization, summarization
- **Formula columns**: Scoring, calculations, conditional logic
- **Filter views**: Separate A/B/C leads, separate workflows
- **Integrations**: Push directly to Instantly

---

## Templates to Create in Clay

1. **Hiring Intent US** — Job posting search + offshore detection
2. **Hiring Intent LATAM** — Employee location filter
3. **Hiring Intent Offshore** — Employee location filter (Asia/EE)
4. **Fundraising** — Crunchbase import + enrichment
5. **Hypergrowth** — Headcount growth detection
6. **New Leadership** — Job change detection
7. **Competitor Clients** — G2/Clutch review scraping
8. **Clone Best Clients** — Lookalike search

---

## Clay Tips
- Save templates — reuse for recurring runs
- Use "Run selected rows" to test before running full batch
- Check credit usage — enrichments cost credits
- Deduplicate BEFORE enriching (save credits)
- Export regularly to CSV as backup
