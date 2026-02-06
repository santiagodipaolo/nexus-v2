# Deliverability Checklist — Pre-Launch & Ongoing

## Pre-Campaign Launch Checklist

### Domain & DNS
- [ ] Domain is NOT nexus.lat (secondary domain only)
- [ ] SPF record configured and valid
- [ ] DKIM record configured and valid
- [ ] DMARC record configured
- [ ] MX records pointing to Google Workspace
- [ ] Custom tracking domain set up in Instantly
- [ ] DNS propagation complete (24-48h wait)
- [ ] Verified with MXToolbox (all green)

### Warmup
- [ ] Mailboxes warmed up for 21+ days minimum
- [ ] Warmup score >95% on all sending mailboxes
- [ ] Manual test emails sent successfully (check inbox placement)
- [ ] mail-tester.com score >8/10

### Email List Quality
- [ ] All emails validated (Bounceban/ZeroBounce)
- [ ] Estimated bounce rate <3%
- [ ] No role-based emails (info@, support@, team@)
- [ ] No free email providers (gmail, yahoo) for B2B contacts
- [ ] Exclusion list applied (current clients, pipeline, blocklist)
- [ ] Deduplicated against other active campaigns

### Campaign Settings (Instantly)
- [ ] Daily send limit set: 25-30 per mailbox
- [ ] Time between emails: 3-8 minutes (random)
- [ ] Sending window: 8am-5pm EST (or prospect timezone)
- [ ] Sending days: Monday-Thursday
- [ ] Reply detection enabled
- [ ] Auto-pause on reply enabled
- [ ] Mailbox rotation configured

### Copy Quality
- [ ] Email 1 under 100 words
- [ ] Email 2 under 50 words
- [ ] Email 3 under 60 words
- [ ] All personalization variables populated
- [ ] Spintax applied and tested
- [ ] No spam trigger words
- [ ] No images, logos, or HTML formatting
- [ ] Minimal text-only signature
- [ ] Maximum 1 link (or zero in Email 1)
- [ ] Every email ends with a question
- [ ] Copy reviewed and approved by Santiago

### Final Check
- [ ] Send test email to yourself — check inbox placement
- [ ] Send test email to a friend's Gmail — check spam
- [ ] All tracking working (opens, clicks if applicable)
- [ ] Reply classification process ready (Shaan)

---

## Weekly Health Check (Every Monday)

### Deliverability
- [ ] Check warmup scores for all mailboxes
- [ ] Review per-domain inbox placement rates
- [ ] Check bounce rate (<2%?)
- [ ] Check spam complaint rate (<0.05%?)
- [ ] Check unsubscribe rate (<0.5%?)
- [ ] Any domains flagged? Take action.

### Performance
- [ ] Open rate above 45%?
- [ ] Reply rate above 3%?
- [ ] Any campaigns with <1% reply after 500+ sends?
- [ ] A/B test updates — any tests ready to call?

### Pipeline
- [ ] All replies classified and routed?
- [ ] Response SLAs met? (2h for interested, 4h for questions)
- [ ] Exclusion lists updated with new clients/blocklist?

### Documentation
- [ ] Update deliverability.md with weekly metrics
- [ ] Update results.md with performance data
- [ ] Document any learnings in learnings.md
- [ ] Document any mistakes in mistakes.md

---

## Monthly Health Check (First Monday)

### Everything in weekly check PLUS:
- [ ] Full KPI review vs base/target/stretch
- [ ] Workflow comparison — which to scale, maintain, optimize, kill
- [ ] Budget review — actual vs planned
- [ ] A/B test review — roll out winners, plan new tests
- [ ] ICP review — any adjustments needed?
- [ ] Copy review — any messaging changes needed?
- [ ] Competitor monitoring — any changes in Near/South/Howdy outreach?
- [ ] Update plan file with progress

---

## Red Flags (Immediate Action)

| Red Flag | Action |
|----------|--------|
| Bounce rate >4% on any campaign | PAUSE campaign, revalidate list |
| Spam complaints on any domain | PAUSE all sends on that domain |
| Warmup score drops below 85% | Reduce cold volume by 50% |
| Domain blacklisted | STOP using domain, replace |
| 0 opens on a batch | Check if landing in spam |
| Reply rate <1% after 1,000 sends | Review copy, targeting, and list quality |
