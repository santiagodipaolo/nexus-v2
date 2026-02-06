# Outbound Domains — Status Tracker

**Last Updated**: 2026-02-05
**Status**: Not purchased yet

---

## Domain Strategy
- **NEVER** use nexus.lat for cold email — protect the main domain
- Use 5 secondary domains that look professional and related to Nexus
- Each domain gets SPF, DKIM, DMARC, and custom tracking domain

## Domains to Purchase

| # | Domain | Status | Registrar | Warmup Start | Warmup Done | Health |
|---|--------|--------|-----------|-------------|-------------|--------|
| 1 | nexus-talent.com | ⏳ Not purchased | — | — | — | — |
| 2 | nexushire.co | ⏳ Not purchased | — | — | — | — |
| 3 | getnexus.co | ⏳ Not purchased | — | — | — | — |
| 4 | withnexus.com | ⏳ Not purchased | — | — | — | — |
| 5 | nexusteam.co | ⏳ Not purchased | — | — | — | — |

**Cost**: ~$10/domain/year = ~$50/year total
**Where to buy**: Namecheap, Cloudflare, or Porkbun

## Mailboxes Per Domain

| Domain | Mailbox 1 | Mailbox 2 | Mailbox 3 |
|--------|-----------|-----------|-----------|
| nexus-talent.com | santiago@ | shaan@ | team@ |
| nexushire.co | santiago@ | shaan@ | team@ |
| getnexus.co | santiago@ | shaan@ | team@ |
| withnexus.com | santiago@ | shaan@ | team@ |
| nexusteam.co | santiago@ | shaan@ | team@ |

**Total**: 15 mailboxes
**Provider**: Google Workspace ($6/user/mo = $90/mo)

## DNS Setup Checklist (Per Domain)

- [ ] MX records → Google Workspace
- [ ] SPF: `v=spf1 include:_spf.google.com ~all`
- [ ] DKIM: Generated via Google Admin Console
- [ ] DMARC: `v=DMARC1; p=none; rua=mailto:dmarc@[domain]`
- [ ] Custom tracking domain in Instantly

## Warmup Status

| Domain | Started | Day | Score | Cold Sends Active |
|--------|---------|-----|-------|-------------------|
| — | — | — | — | — |

## Rotation Rules
- If inbox placement drops below 90% → pause cold, warmup only for 7 days
- If domain gets blacklisted → remove from rotation, investigate, possibly replace
- Rotate sending mailboxes within each domain weekly
- Assign 2-3 mailboxes per workflow (don't mix all workflows on one mailbox)

## Notes
- Check domain availability before purchasing (some may be taken)
- Alternative domain ideas: nexustalent.co, hirewithnexus.com, nexuslat.co
- Wait 24-48h after DNS setup before starting warmup
