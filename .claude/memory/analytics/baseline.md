# Nexus SEO/GEO Baseline Metrics

**Established**: 2026-02-05
**Purpose**: Document starting point for all metrics. NEVER delete this file - it's our reference point for measuring progress.

---

## ⚠️ IMPORTANT: Baseline Status

**STATUS**: ⏳ TO BE ESTABLISHED

This file will be updated once we:
1. Verify Google Analytics is configured
2. Verify Google Search Console is connected
3. Extract current metrics (if any)

**Action Required**: In Phase 1, Day 1:
- Check if GA4 exists → if yes, pull current data
- Check if GSC exists → if yes, pull current data
- If neither exist → establish as "0" baseline and configure both

---

## 📊 Traffic Baseline (Google Analytics)

**Measurement Period**: [TO BE FILLED - suggest last 30 days before Phase 1 start]

### Overall Traffic
- **Total Sessions**: TBD
- **Organic Sessions**: TBD
- **Organic %**: TBD

### Traffic Sources (If Available)
- Organic: TBD
- Direct: TBD
- Referral: TBD
- Social: TBD
- Paid: TBD

### User Behavior
- **Avg Session Duration**: TBD
- **Bounce Rate**: TBD
- **Pages/Session**: TBD

### Conversions (If Tracking Configured)
- **Total Conversions**: TBD
- **Conversion Rate**: TBD
- **Conversions from Organic**: TBD

**Notes**:
- If no GA4 → All traffic metrics = 0 (we start from scratch)
- This is actually GOOD - easier to show growth from 0 → X

---

## 🔍 Search Performance Baseline (Google Search Console)

**Measurement Period**: [Last 28 days before Phase 1 start]

### Overall Performance
- **Total Impressions**: TBD
- **Total Clicks**: TBD
- **Average CTR**: TBD
- **Average Position**: TBD

### Pages Indexed
- **Total Pages**: TBD (likely 3: homepage, terms, email-success)
- **Pages with Errors**: TBD

### Top Queries (If Any)
1. Query: TBD | Impressions: TBD | Clicks: TBD | Position: TBD
2. Query: TBD | Impressions: TBD | Clicks: TBD | Position: TBD
3. Query: TBD | Impressions: TBD | Clicks: TBD | Position: TBD

**Notes**:
- If no GSC data → Impressions = 0, we're invisible to Google
- This is our "ground zero"

---

## 📈 Keyword Rankings Baseline

**Note**: Likely no rankings yet since we only have 3 generic pages.

### Target Keywords (To Track From Day 1)

**Tier 1 - Primary (High Competition)**:
- "hire latam developers" → Position: Not ranking (likely >100)
- "hire software engineers latin america" → Position: Not ranking
- "remote developers latam" → Position: Not ranking
- "nearshore staffing agencies" → Position: Not ranking

**Tier 2 - Secondary (Medium Competition)**:
- "hire react developer latam" → Position: Not ranking
- "hire virtual assistant latin america" → Position: Not ranking
- "hire full stack developer latam" → Position: Not ranking
- "hire customer support latam" → Position: Not ranking

**Expected Baseline**: 0 keywords ranking in top 100 for commercial terms.

**How to Check**:
- Manual Google search (incognito)
- Google Search Console (if configured)
- Ahrefs (if/when we get it)

---

## 🌐 Domain Authority Baseline

**Metrics** (Require Ahrefs or Similar):
- **Domain Rating (DR)**: TBD (likely 0-10 for new domain)
- **Total Backlinks**: TBD (likely <10)
- **Referring Domains**: TBD (likely <5)

**Notes**:
- If no tool access → We estimate DR ~5-10 based on domain age
- Near likely has DR 40-50+ (competitor benchmark)

---

## 💻 Technical SEO Baseline

### What Exists Now (As of 2026-02-05)
- ✅ Homepage (/)
- ✅ Terms & Conditions (/terms-conditions)
- ✅ Email Success (/email-success)
- ❌ Sitemap.xml → MISSING
- ❌ Robots.txt → MISSING
- ❌ Open Graph tags → MISSING (basic metadata only)
- ❌ Twitter Cards → MISSING
- ❌ Structured Data → MISSING
- ❌ Canonical tags → MISSING

### Core Web Vitals (PageSpeed Insights)
**To be measured**: Run PageSpeed Insights on homepage

- **LCP (Largest Contentful Paint)**: TBD (target: <2.5s)
- **FID (First Input Delay)**: TBD (target: <100ms)
- **CLS (Cumulative Layout Shift)**: TBD (target: <0.1)
- **Overall Score**: TBD /100

**Notes**:
- Phase 1 will fix missing SEO infrastructure
- Phase 3 will optimize Core Web Vitals

---

## 🎯 GEO (Generative Engine Optimization) Baseline

### LLM Citations
**Test Queries** (Test in ChatGPT, Claude, Perplexity):
- "best latam staffing agencies"
- "how to hire developers in latin america"
- "nexus vs near staffing"
- "cost to hire remote developers latam"

**Expected Baseline**: 0 citations (Nexus not mentioned)

**Competitor Baseline**: Near is likely mentioned in some responses.

### Structured Data
- **Coverage**: 0% (no schema markup exists)

### E-E-A-T Signals
- ❌ About page with team bios → Missing
- ❌ Author bios on content → No blog yet
- ❌ Case studies → Missing
- ❌ Testimonials on site → Missing
- ❌ Press mentions → None documented

---

## 📊 Content Baseline

### Existing Content
- **Total Pages**: 3
- **Role Pages**: 0
- **Blog Posts**: 0
- **Salary Guides**: 0
- **Case Studies**: 0
- **Comparison Pages**: 0

### Content Quality
- **Avg Word Count**: ~500 words (homepage)
- **Content Depth**: Basic value prop, not comprehensive
- **Internal Links**: Minimal (navbar only)
- **External Links**: Links to external form, careers page

---

## 🎯 Conversion Baseline

### Forms/CTAs
- **Primary CTA**: "Get Started" → Links to external form (7i7zpal0.forms.app)
- **Form Submissions**: TBD (need access to form data)
- **Conversion Rate**: TBD

**Notes**:
- If form is external → We may not have historical data
- Will need to set up tracking in Phase 1

---

## 🏁 Baseline Summary

**Starting Position**:
- 🔴 SEO: Effectively invisible to Google
- 🔴 Content: 3 basic pages vs. Near's 1,241
- 🔴 Authority: New domain, minimal backlinks
- 🔴 Rankings: Not ranking for any target keywords
- 🟡 Tech Stack: Good (Next.js) but missing SEO essentials
- 🟢 Differentiators: Transparent pricing, modern site

**This is GOOD NEWS** because:
1. Nowhere to go but UP
2. Easy to show dramatic % gains (0 → 100 is infinite growth!)
3. Clear opportunity - Near proved the market exists
4. Fresh start - no penalties or bad history to overcome

---

## 📝 Next Steps

**Immediate (Phase 1, Week 1)**:
1. Verify GA4 and GSC access
2. If missing → Set up both immediately
3. Pull actual baseline numbers
4. Update this file with real data
5. Set up weekly tracking in `memory/analytics/rankings.md`

**Remember**: This baseline is our "before" photo. In 6 months, we'll look back and be amazed at how far we've come.

---

## 🔄 Update Log

| Date | Update | By |
|------|--------|-----|
| 2026-02-05 | File created, awaiting real data | System Setup |
| [TBD] | Baseline populated with GA4/GSC data | Analytics Tracker |

---

**"You can't improve what you don't measure."** - Peter Drucker

This is our measurement starting line.
