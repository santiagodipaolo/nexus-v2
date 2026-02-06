# Active A/B Tests — Outbound

**Last Updated**: 2026-02-05
**Status**: No tests running yet (pre-launch)

---

## Test Log

### Format
```
## Test [YYYYMMDD]-[workflow]-[variable]
- **Status**: Running / Completed / Killed
- **Started**: [date]
- **Workflow**: [workflow name]
- **Variable tested**: [subject / opener / CTA / timing / etc.]
- **Variant A**: [description]
- **Variant B**: [description]
- **Sample size**: A: [X] sends | B: [X] sends
- **Results**:
  - A: Open [X]%, Reply [X]%, Positive [X]%
  - B: Open [X]%, Reply [X]%, Positive [X]%
- **Winner**: A / B / Inconclusive
- **Confidence**: [X]%
- **Action taken**: [what changed based on results]
```

---

## Planned Tests (Phase 2 Launch)

### Test 1: Subject Line — Hiring Intent US
- **Variable**: Subject line personalization
- **Variant A**: `"{{firstName}}, quick question about the {{role}} role"`
- **Variant B**: `"{{role}} at {{company}} — considered LATAM?"`
- **Target sample**: 200 sends per variant
- **Primary metric**: Open rate
- **Secondary metric**: Reply rate

### Test 2: Opener — Hiring Intent US
- **Variable**: First line approach
- **Variant A**: Intent-based (`"Saw the {{role}} role you're hiring for..."`)
- **Variant B**: Question-based (`"Have you considered LATAM talent for the {{role}} role?"`)
- **Target sample**: 200 sends per variant
- **Primary metric**: Reply rate

### Test 3: CTA — Across Workflows
- **Variable**: Call to action style
- **Variant A**: Soft ask (`"Worth a quick look?"`)
- **Variant B**: Direct ask (`"Open to a 15-min call this week?"`)
- **Target sample**: 200 sends per variant
- **Primary metric**: Positive reply rate

### Test 4: Subject — Fundraising Intent
- **Variable**: Congratulatory vs direct
- **Variant A**: `"Congrats on the raise — quick thought"`
- **Variant B**: `"Scaling {{company}} post-funding"`
- **Target sample**: 100 sends per variant
- **Primary metric**: Open rate

---

## Rules
1. One variable at a time — never test subject + opener simultaneously
2. Minimum 100 sends per variant (200 preferred)
3. Run for minimum 1 week or until sample size reached
4. 95% confidence for statistical significance
5. Document ALL results, even inconclusive ones
6. Winner becomes default; loser is archived
7. Re-test winners every 60 days (copy fatigue is real)

---

## Completed Tests
_None yet — first tests start in Phase 2._
