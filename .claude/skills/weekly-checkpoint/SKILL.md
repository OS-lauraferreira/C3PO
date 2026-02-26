---
skill_name: weekly-checkpoint
title: Weekly Checkpoint
description: Run your weekly review to reflect on the past week and plan the next one
---

# Weekly Checkpoint

This skill runs your weekly review — looking back at the week, checking progress against 90-day goals, and setting direction for next week.

## Instructions

Read the following files for context:
- All daily notes from the past 7 days in `log/daily/`
- `goals/90_day.md` for current quarter priorities
- `memory.md` for patterns and growth edges
- The most recent weekly review in `log/weekly/` (if one exists)

Summarize what you see from the daily notes — what got done, what patterns emerge, where energy was spent.

Then ask me the following questions one at a time, wait for my response, then move to the next:

1. What moved the needle this week on your top 3 priorities?
2. What was noise — things that consumed time but didn't matter?
3. What's blocking progress right now?
4. How's the team? Anything I should know about health or capacity?

After I answer:

1. Create the folder `log/weekly/YYYY-Www/` (e.g., `log/weekly/2026-W07/`)
2. Create the weekly review at `log/weekly/YYYY-Www/YYYY-Www.md`
3. Move all daily notes from `log/daily/` that belong to this week into `log/weekly/YYYY-Www/`

This keeps the daily folder clean (current week only) and bundles each week's notes together.

Weekly review file structure:

### File Structure

```markdown
# Weekly Review — YYYY-Www

*Week of [Monday date] to [Friday date]*

---

## What Moved the Needle
[From daily notes and my answers — concrete progress on top 3 priorities]

## Noise & Time Leaks
[Things that consumed time but didn't advance priorities]

## Blockers
[What's stuck and what needs to happen to unblock]

## Team Health Pulse
[Quick read on team state — energy, capacity, morale]

## Strategic Insight
[One pattern or observation worth remembering — tag with #insight]

## Next Week's Focus
[Top 2-3 things to prioritize next week, derived from above]

## 90-Day Goal Check
[Quick status on each top 3 priority — on track / behind / ahead]

---

*Reviewed: YYYY-MM-DD*
```

After creating the review:
1. Check if any insights should be added to `memory.md` — suggest them, don't add without confirmation
2. Commit and push changes to GitHub with message: "Weekly review - YYYY-Www" with co-author credit

Keep the tone direct and honest. Flag patterns from `memory.md` if I'm repeating known anti-patterns.

## Tips

- Be honest about what didn't move — avoidance is a signal
- Connect weekly activity back to 90-day goals
- Call out if time allocation doesn't match stated priorities
- If no daily notes exist for some days, note the gap — it might be a pattern
- Keep the review scannable — this should take 15 minutes, not an hour
