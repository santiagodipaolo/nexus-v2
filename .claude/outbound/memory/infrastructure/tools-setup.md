# Outbound Tools — Setup & Configuration

**Last Updated**: 2026-02-05
**Status**: Not configured yet

---

## Tool Stack

### Core Tools (Required)

| Tool | Purpose | Plan | Cost/mo | Status |
|------|---------|------|---------|--------|
| Clay | Data orchestration, enrichment, waterfall | Pro | $149 | ⏳ Not set up |
| Instantly | Email sequencer, warmup, analytics | Growth | $77 | ⏳ Not set up |
| LinkedIn Sales Navigator | Lead search, alerts, saved searches | Core | $99 | ⏳ Not set up |
| Google Workspace | Email accounts (15 mailboxes) | Business Starter | $90 | ⏳ Not set up |
| Prospeo | Email finding (primary) | Starter | $39 | ⏳ Not set up |
| Bounceban | Catchall email validation | Basic | $29 | ⏳ Not set up |
| OpenAI API | AI enrichment, copy generation | Pay-as-you-go | ~$30 | ⏳ Not set up |

**Total monthly**: ~$513

### Optional Tools (Phase 3+)

| Tool | Purpose | Cost/mo | When to Add |
|------|---------|---------|-------------|
| Expandi or La Growth Machine | LinkedIn automation | $99 | When LinkedIn channel proves ROI |
| HubSpot CRM | Pipeline tracking | $0 (free) | Phase 2 (free tier) |
| Apollo.io | Secondary data source | $49 | If Clay credits run low |
| Smartlead | Second email sequencer | $39 | If Instantly capacity maxed |

---

## Setup Checklist

### 1. Clay Setup
- [ ] Create account (clay.com)
- [ ] Import ICP criteria as saved searches
- [ ] Configure waterfall enrichment (Prospeo → Hunter → Apollo)
- [ ] Set up OpenAI integration for AI enrichment
- [ ] Create table templates for each workflow
- [ ] Test enrichment flow with 10 sample companies

### 2. Instantly Setup
- [ ] Create account (instantly.ai)
- [ ] Connect all 15 Google Workspace mailboxes
- [ ] Configure warmup settings per mailbox
- [ ] Set up custom tracking domain per sending domain
- [ ] Create campaign templates for each workflow
- [ ] Configure reply detection and auto-pause
- [ ] Set daily send limits (25-30/mailbox)
- [ ] Set sending windows (8am-5pm EST, Mon-Thu)

### 3. LinkedIn Sales Navigator Setup
- [ ] Activate Sales Navigator Core ($99/mo)
- [ ] Create saved searches for each workflow:
  - Hiring Intent US: US companies, 10-500 emp, hiring remote
  - Fundraising: Recently funded
  - New Leadership: Job changes in last 90 days (target titles)
  - Competitor clients: Followers/connections of Near, South, etc.
- [ ] Set up lead alerts for new results
- [ ] Configure InMail templates (if applicable)

### 4. Google Workspace Setup
- [ ] Purchase 15 licenses
- [ ] Create mailboxes per domain plan (see domains.md)
- [ ] Set up MX, SPF, DKIM, DMARC per domain
- [ ] Create professional signatures (text-only, no images)
- [ ] Enable 2FA on all accounts

### 5. Prospeo Setup
- [ ] Create account (prospeo.io)
- [ ] Connect to Clay for waterfall enrichment
- [ ] Test email finding accuracy with 20 known contacts
- [ ] Set up Chrome extension for manual lookups

### 6. Bounceban Setup
- [ ] Create account (bounceban.com)
- [ ] Connect to Clay for automated validation
- [ ] Test with known valid/invalid emails
- [ ] Set threshold: only send to emails with >80% confidence

### 7. OpenAI API Setup
- [ ] Get API key
- [ ] Connect to Clay for AI enrichment columns
- [ ] Create prompts for: company summary, industry categorization, hiring urgency assessment
- [ ] Set spending limits ($50/mo max)

---

## Integration Flow

```
LinkedIn Sales Nav → Clay (search + aggregate)
                      ↓
             Clay (enrichment waterfall)
             Prospeo → Hunter → Apollo (email finding)
             Bounceban (validation)
             OpenAI (AI enrichment)
                      ↓
             Clay → Instantly (push verified leads to campaigns)
                      ↓
             Instantly (send sequences, track opens/replies)
                      ↓
             HubSpot CRM (pipeline tracking - Phase 2+)
```

---

## Access Credentials
**IMPORTANT**: Never store credentials in this file. Use a password manager.
- Clay: [password manager]
- Instantly: [password manager]
- LinkedIn: [password manager]
- Google Workspace: [admin console]
- Prospeo: [password manager]
- Bounceban: [password manager]
- OpenAI: [password manager]
