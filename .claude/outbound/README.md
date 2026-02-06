# Nexus Outbound Sales System

## What is This?
A complete B2B outbound sales engine for Nexus, built to generate qualified leads from US companies that need LATAM talent. Designed to replace a $5,650/mo agency (LoopGTM) with an in-house system at ~$517/mo.

## Quick Start

### For Santiago (Strategy)
1. Read `memory/shared/icp.md` — Who we target
2. Read `memory/shared/kpis.md` — What success looks like
3. Review email sequences in `memory/sequences/templates/`
4. Use `/outbound report` to get weekly status

### For Shaan (Execution)
1. Read `playbooks/domain-warmup-guide.md` — Setup infrastructure
2. Read `playbooks/deliverability-checklist.md` — Pre-launch checks
3. Read `playbooks/clay-workflows.md` — How to build workflows in Clay
4. Check `memory/infrastructure/domains.md` — Domain/mailbox status

### For Claude (AI Agent)
1. Read all agent files in `agents/` before acting
2. Read relevant `memory/` files before every session
3. Update `memory/feedback/learnings.md` after every session
4. Commands: `/outbound`, `/scout`, `/enrich`, `/write`, `/campaign`, `/analytics`

---

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│                OUTBOUND ORCHESTRATOR                 │
│         Coordinates all agents and workflows         │
├─────────┬─────────┬──────────┬──────────┬──────────┤
│ INTENT  │ ENRICH  │ SEQUENCE │ OUTREACH │ ANALYTICS│
│ SCOUT   │ ENGINE  │ WRITER   │ OPERATOR │ OPTIMIZER│
│         │         │          │          │          │
│ Find    │ Enrich  │ Write    │ Send     │ Measure  │
│ leads   │ data    │ emails   │ campaigns│ & learn  │
└────┬────┴────┬────┴────┬─────┴────┬─────┴────┬─────┘
     │         │         │          │          │
     ▼         ▼         ▼          ▼          ▼
  Clay      Clay      Templates  Instantly   Reports
  LinkedIn  Prospeo   Claude API  Google WS   A/B Tests
  Crunchbase Bounceban            LinkedIn    KPIs
```

## The 8 Workflows

| # | Workflow | Intent Signal | Priority | Phase |
|---|----------|--------------|----------|-------|
| 1 | Hiring Intent US | Companies hiring remote in US | HIGH | Phase 2 |
| 2 | Hiring Intent LATAM | Companies with LATAM employees | MED-HIGH | Phase 3 |
| 3 | Offshore Non-LATAM | Companies with Asia/EE teams | MEDIUM | Phase 3 |
| 4 | Fundraising | Recently funded companies | HIGH | Phase 2 |
| 5 | Hypergrowth | 25%+ headcount growth | MEDIUM | Phase 3 |
| 6 | New Leadership | New CTO/VP hired last 90 days | HIGH | Phase 2 |
| 7 | Competitor Clients | Near/South/Howdy clients | MEDIUM | Phase 3 |
| 8 | Clone Best Clients | Lookalikes of our clients | LOW-MED | Phase 4 |

## Budget: ~$517/mo

| Tool | Cost/mo |
|------|---------|
| Clay (Pro) | $149 |
| Instantly (Growth) | $77 |
| LinkedIn Sales Nav | $99 |
| Google Workspace (15 mailboxes) | $90 |
| Prospeo | $39 |
| Bounceban | $29 |
| OpenAI API | $30 |
| Domains (amortized) | $4 |

## Expected Results

| Phase | Timeline | Meetings/mo | Revenue Potential |
|-------|----------|-------------|-------------------|
| Phase 1 | Weeks 1-2 | 0 (warmup) | $0 |
| Phase 2 | Weeks 3-5 | 5-20 | First clients |
| Phase 3 | Weeks 6-10 | 15-40 | $10-25K MRR |
| Phase 4 | Weeks 11+ | 30-80 | $25-60K+ MRR |

## Folder Structure

```
.claude/outbound/
├── README.md                    ← You are here
├── agents/                      ← 6 AI agent definitions
├── memory/
│   ├── shared/                  ← ICP, KPIs, social proof
│   ├── workflows/               ← 8 workflow definitions
│   ├── sequences/templates/     ← Email templates per workflow
│   ├── sequences/ab-tests/      ← A/B test tracking
│   ├── infrastructure/          ← Domains, deliverability, tools
│   ├── pipeline/                ← Leads and results
│   └── feedback/                ← Learnings, mistakes, improvements
└── playbooks/                   ← How-to guides for execution
```

## Key Rules
1. **NEVER** send cold email from nexus.lat — secondary domains only
2. **ALWAYS** warm up domains for 21+ days before cold sends
3. **ALWAYS** validate emails before sending (Bounceban)
4. **ALWAYS** exclude current clients and active pipeline from campaigns
5. **NEVER** send more than 30 cold emails/day per mailbox
6. **ALWAYS** document learnings and mistakes
7. **ALWAYS** get Santiago's approval before launching new workflows or copy changes

## Commands Reference
| Command | Agent | What it Does |
|---------|-------|-------------|
| `/outbound start --phase [1-4]` | Orchestrator | Start a phase |
| `/outbound status` | Orchestrator | Full system status |
| `/outbound report` | Orchestrator | Weekly executive report |
| `/scout workflow [name]` | Intent Scout | Run a specific workflow |
| `/enrich batch [list]` | Enrichment Engine | Enrich a batch |
| `/write sequence [wf] [co]` | Sequence Writer | Generate personalized sequence |
| `/campaign launch [wf]` | Outreach Operator | Launch campaign |
| `/campaign health` | Outreach Operator | Deliverability check |
| `/analytics report` | Analytics Optimizer | Performance report |
| `/analytics test [id]` | Analytics Optimizer | A/B test status |
