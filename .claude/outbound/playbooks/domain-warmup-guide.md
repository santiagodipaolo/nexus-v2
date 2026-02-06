# Domain & Email Warmup Guide — Step by Step

## Overview
New email domains/mailboxes have zero reputation. ISPs (Gmail, Outlook) don't trust them. Warmup builds that trust gradually over 21-30 days before sending any cold emails.

**Skip warmup = land in spam = burn your domain = waste money.**

---

## Phase 1: Domain Purchase & DNS Setup (Day 0)

### Step 1: Buy Domains
1. Go to Namecheap (or Cloudflare/Porkbun)
2. Buy 5 domains: nexus-talent.com, nexushire.co, getnexus.co, withnexus.com, nexusteam.co
3. Choose cheapest option (~$10/year each)

### Step 2: Setup Google Workspace
1. Create Google Workspace account for each domain
2. Create 3 mailboxes per domain (santiago@, shaan@, team@)
3. Complete Google profile for each mailbox (name, photo)

### Step 3: Configure DNS Records
For EACH domain:

**MX Records** (for Google):
```
Priority 1: ASPMX.L.GOOGLE.COM
Priority 5: ALT1.ASPMX.L.GOOGLE.COM
Priority 5: ALT2.ASPMX.L.GOOGLE.COM
Priority 10: ALT3.ASPMX.L.GOOGLE.COM
Priority 10: ALT4.ASPMX.L.GOOGLE.COM
```

**SPF Record** (TXT):
```
v=spf1 include:_spf.google.com ~all
```

**DKIM** (via Google Admin):
1. Go to Google Admin Console → Apps → Google Workspace → Gmail → Authenticate email
2. Generate DKIM key
3. Add DKIM TXT record to DNS

**DMARC Record** (TXT):
```
_dmarc.yourdomain.com → v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
```

### Step 4: Verify Everything
- Use MXToolbox.com to check MX, SPF, DKIM, DMARC
- Send test email from each mailbox to mail-tester.com (score should be 8+/10)
- Wait 24-48h for DNS propagation

---

## Phase 2: Warmup Start (Days 1-14)

### Step 1: Connect to Instantly
1. Go to Instantly → Accounts → Add Account
2. Connect each Google Workspace mailbox (OAuth)
3. Enable warmup for ALL 15 mailboxes
4. Configure warmup settings:
   - Daily warmup limit: Start at 5, increase to 40
   - Reply rate: 30-40%
   - Warmup tag: Leave default

### Step 2: Monitor Daily
| Day | Warmup Emails/Day | Things to Check |
|-----|-------------------|-----------------|
| 1-3 | 2-5 | Emails sending? No errors? |
| 4-7 | 5-10 | Warmup score trending up? |
| 8-14 | 10-20 | Score above 90? Any bounces? |

### Step 3: Manual Activity (Optional but Recommended)
- Send 5-10 manual emails/day from each mailbox (to team, friends, real contacts)
- Reply to warmup emails that land in inbox
- Mark warmup emails as "Not Spam" if they hit spam

---

## Phase 3: Start Cold Sends (Days 15-28)

### Step 1: First Cold Sends
- Day 15: Start with 5 cold emails/day per mailbox (alongside warmup)
- Day 18: Increase to 10/day if score stays above 90
- Day 22: Increase to 15-20/day
- Day 28: Increase to 25-30/day (max)

### Step 2: Monitor Closely
| Metric | Healthy | Action if Not |
|--------|---------|--------------|
| Warmup score | >90 | Reduce cold volume |
| Bounce rate | <2% | Validate email list better |
| Open rate | >40% | Check subject lines, inbox placement |
| Spam complaints | 0 | PAUSE immediately if any |

---

## Phase 4: Steady State (Day 29+)

### Operating Parameters
| Setting | Value |
|---------|-------|
| Cold emails/day per mailbox | 25-30 max |
| Warmup emails/day per mailbox | 10-15 (NEVER turn off) |
| Total emails/day per mailbox | 35-40 |
| Total capacity (15 mailboxes) | 375-450/day |
| Monthly capacity | ~9,000-10,000 emails |

### Ongoing Maintenance
- Check warmup scores weekly (Monday)
- Check inbox placement monthly (mail-tester.com)
- Rotate mailboxes if scores drop
- Replace burned domains immediately (start warmup on replacement)

---

## Emergency: Domain Burned

If a domain gets blacklisted or spam score drops critically:

1. **STOP** — Pause all cold sends on that domain
2. **Check** — MXToolbox, Spamhaus, Barracuda blacklist check
3. **Assess** — If blacklisted: stop using, buy replacement
4. **Replace** — New domain → DNS setup → 21-day warmup
5. **Learn** — Document what caused it in mistakes.md

---

## Timeline Summary

```
Day 0:     Buy domains, setup DNS, create mailboxes
Day 1-14:  Warmup only (no cold sends)
Day 15-21: Warmup + 5-15 cold sends/day per mailbox
Day 22-28: Warmup + 15-25 cold sends/day per mailbox
Day 29+:   Steady state: 25-30 cold + 10-15 warmup per mailbox
```

**Total time to full capacity: ~4 weeks from domain purchase.**
