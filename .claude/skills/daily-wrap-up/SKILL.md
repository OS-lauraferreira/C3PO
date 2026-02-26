---
skill_name: daily-wrap-up
title: Daily Wrap-Up
description: End your day with reflection and save your work
---

# Daily Wrap-Up

This skill helps you close your day with reflection and ensures your work is saved to GitHub.

## Instructions

Read today's daily note from `log/daily/YYYY-MM-DD.md` to see the morning priorities.

Process the inbox folder by running the skill `/ProcessInbox` and update the daily note with any new tasks or notes that came up during the day.

Read the meeting from today's meeting and update the daily note with any new tasks or notes that came up during the day.

Ask me the following questions one at a time, wait for my response, then move to the next:

1. Did you achieve your top priorities from this morning? Which ones got done?
2. Any notes or tasks to remember for tomorrow?

After I answer:
1. Update today's daily note with an "Evening Wrap-Up" section including:
   - Status of morning priorities (checked off if completed)
   - Notes for tomorrow
   - Key learnings or observations from today

2. Commit and push changes to GitHub:
   - Stage all changes in the project
   - Create a commit with message: "Daily update - YYYY-MM-DD" with co-author credit
   - Push to the remote repository
   - Confirm the push was successful

Keep the tone reflective but brief.

## Tips

- Be honest about what didn't get done
- Capture quick notes for tomorrow while fresh
- Don't stress about incomplete tasks
- The GitHub commit ensures work is backed up
- If no changes to commit, that's fine - just note it
