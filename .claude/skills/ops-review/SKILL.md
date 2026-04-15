---
name: ops-review
description: Analyze bi-weekly ODC Change Management operations review from Power BI dashboard data
user-invocable: true
---

# Ops Review Analysis Skill

Generate bi-weekly Operations Review analysis from Power BI dashboard screenshots, comparing with historical trends from previous Confluence reviews.

## Purpose

This skill automates the creation of Operations Review analysis documents by:
- Extracting metrics from Power BI dashboard screenshots
- Comparing current metrics with 3 previous reviews (historical trends)
- Identifying policy violations, regressions, and improvements
- Generating analysis in the established Confluence format
- Connecting findings with Process Engineering V2MOM Method 2 initiatives

## Audience

**Primary Audience:** CPTO (Chief Product & Technology Officer) and executive leadership

**Presentation Context:**
- Executive-level review requiring clear, concise insights
- Focus on business impact, not technical minutiae
- Balance between raising concerns and showing proactive solutions
- Connect problems to planned Process Engineering initiatives (V2MOM Method 2)

## When to Use This Skill

Use this skill every 2 weeks when preparing the Operations Review presentation. You will need:
- Screenshots or data exports from the ODC Change Management Power BI dashboard
- The period dates (e.g., March 16 - March 30, 2026)

**Before starting the analysis:**
1. **Read V2MOM context:** Review `goals/90_day.md` for Method 2 initiatives (M2.1, M2.2, M2.3)
2. **Understand planned actions:** Connect observed problems to Process Engineering initiatives already in progress
3. **Frame proactively:** Show that gaps are being addressed, not just identified

## Prerequisites

Before running this skill, ensure you have:
1. **Power BI Dashboard Access:** Screenshots or CSV exports from all key visuals
2. **Period Dates:** Start and end dates for the review period (2-week window)

## Instructions

### Step 1: Gather Dashboard Data

Ask the user for the following Power BI dashboard data (screenshots or CSV exports):

1. **Created Changes** (timeline chart with Standard/Normal/Emergency breakdown)
2. **RFC Risk Classification** (Low/Medium/High distribution)
3. **# Change Execution per RFC type** (ring distribution: ring=1/osall, ring=2/ea, ring=3/ga)
4. **How RFCs are being used** (Incident Response vs Planned Operations %)
5. **Changes by Category Reason** (breakdown by category: Fast Track, Change Configuration, etc.)

**Prompt:**
```
Please provide the Power BI dashboard data for the Operations Review. You can share:
- Screenshots of the 5 key visuals (Created Changes, Risk Classification, Ring Distribution, How RFCs Used, Category Reason)
- OR CSV exports from Power BI
- OR manually typed data in table format

Which format would you prefer?
```

### Step 2: Confirm Period Dates

Ask for the review period:

**Prompt:**
```
What is the review period for this Operations Review?
Format: YYYY-MM-DD to YYYY-MM-DD (e.g., 2026-03-16 to 2026-03-30)
```

### Step 3: Load Historical Context

Read the 3 most recent Confluence Operations Review pages to establish historical trends:

```bash
# Use dxctl to fetch recent reviews
dxctl tool confluence search "Operations Review" --space EEO --type page --limit 3
```

If Confluence pages are available, read them using their page IDs. Otherwise, check for local markdown files in `meetings/Ops_Review/` for historical data.

**Key metrics to extract from previous reviews:**
- Fast Track %
- Normal Planned % (Shadow SDLC indicator)
- Incident-Driven RFC %
- Emergency count and system-wide impact %
- Ring distribution patterns

### Step 4: Extract Data from Current Period

Parse the provided Power BI data to extract:

**From "Created Changes":**
- Total RFCs created
- Breakdown: Standard, Normal, Emergency counts
- Daily distribution (if available)

**From "RFC Risk Classification":**
- Low Risk: count and %
- Medium Risk: count and %
- High Risk: count and %

**From "# Change Execution per RFC type":**
- ring=1/osall: Emergency, Normal, Standard counts
- ring=2/ea: Emergency, Normal, Standard counts
- ring=3/ga: Emergency, Normal, Standard counts

**From "How RFCs are being used":**
- Emergency: Incident Response %, Planned %
- Normal: Incident Response %, Planned %
- Standard: Incident Response %, Planned %

**From "Changes by Category Reason":**
- For each category (Fast Track, Change Configuration, Customer Request, etc.):
  - Standard %, Normal %, Emergency %
  - Calculate total %

### Step 5: Calculate Key Metrics

Calculate derived metrics:

1. **Total Incident-Driven RFC %:**
   ```
   (Emergency count × 100% + Normal count × Incident% + Standard count × 0%) / Total RFCs
   ```

2. **Fast Track % (from Category Reason):**
   Sum of Standard %, Normal %, Emergency % for "Fast Track" category

3. **Shadow SDLC (Normal Planned %):**
   From "How RFCs Used" → Normal Change → Planned Operations %

4. **Ring Volume Inversion Check:**
   Compare ring=1 vs ring=2 vs ring=3 total volumes

### Step 6: Compare with Historical Trends

For each key metric, create a trend table:

**Example: Fast Track Volume**
| Period | Fast Track % | Trend | Analysis |
|--------|--------------|-------|----------|
| [Previous-3] | X% | ... | ... |
| [Previous-2] | Y% | ... | ... |
| [Previous-1] | Z% | ... | ... |
| [Current] | W% | ⬆️/⬇️/➡️ | ... |

Identify:
- ✅ **Improvements** (metrics moving in desired direction)
- 🔴 **Regressions** (metrics moving backward)
- 🚨 **Critical violations** (Fast Track >20%, Emergency without system-wide impact, etc.)

### Step 7: Connect to V2MOM Method 2 Context

Before writing the analysis, read `goals/90_day.md` to understand Process Engineering's planned initiatives:

**Key V2MOM Method 2 initiatives to reference:**

- **M2.1 — Enable CI/CD Compliance:** Centralized Change Catalog with unambiguous RFC criteria
  - *Connects to:* Shadow SDLC patterns, manual change usage, pipeline adoption gaps
  
- **M2.2 — Empower Reviewers:** Framework with authority to reject bypasses
  - *Connects to:* Fast Track usage, approval clarity, bypass patterns
  
- **M2.3 — Mandate Lifecycle Control:** Automated change closure and Standard Change promotion
  - *Connects to:* Process automation opportunities, lifecycle gaps

**How to frame findings with V2MOM context:**

When writing each finding, add a concluding paragraph that connects to planned work:

**Example framing:**
```markdown
**Process Engineering Response:**
This gap aligns with **M2.1 (Enable CI/CD Compliance)** currently in progress. Process Engineering is consolidating the Change Catalog to mandate CI/CD usage and eliminate bypass patterns. Delivery timeline: Q1 2026.
```

**Or:**
```markdown
**Planned Improvement:**
Process Engineering's **M2.2 (Empower Reviewers)** framework (in progress, Q1 2026) will address this by establishing clear approval criteria and reviewer authority to reject unjustified Fast Track requests.
```

**Tone:** Show that problems are **known and being addressed**, not just identified. This reassures executive leadership that Process Engineering is proactively working on structural solutions.

### Step 8: Generate Analysis Document

Create the Operations Review markdown file in `meetings/Ops_Review/YYYY-MM-DD_Ops_Review.md` with the following structure:

**Document Sections:**

1. **Header:**
   ```markdown
   # [Date]

   **Table of Contents**

   ---

   # **Supporting Materials**

   **Operations Review Deck -** [To be added]
   **ODC Change Management Dashboard -** [Power BI link]
   ```

2. **Executive Summary:**
   - Overall assessment (Superficial Stability / Operational Stability / Critical Violations)
   - Total RFCs created (breakdown by type)
   - Key alerts (🚨 CRITICAL issues first)
   - 3-4 main process gaps

3. **Deep Dive: Highlights & Insights** (numbered sections):

   For each major finding, follow this format:
   ```markdown
   **N. [Finding Title]**

   - **The Data:** [Current period metrics with exact numbers]
     [Historical trend table if relevant]

   - **Process Gap:** [Which policy/procedure needs attention]

   - **The Risk:** [What could go wrong, business impact]

   - **Implication:** [Why this matters, context]

   - **Process Engineering Response:** [Connect to V2MOM Method 2 initiative]
     Example: "This aligns with **M2.1 (Enable CI/CD Compliance)** currently in progress. Process Engineering is consolidating the Change Catalog to mandate pipeline usage. Delivery: Q1 2026."

   **Action Required:** [Specific actions with owners/deadlines]
   ```

   **Priority order for findings:**
   1. 🚨 Fast Track surge (if >15%)
   2. 🔴 Shadow SDLC regression (if Normal Planned % increases)
   3. Ring Distribution violations
   4. Incident-Driven RFC rate
   5. Emergency protocol compliance
   6. Risk Classification health
   7. Category Reason taxonomy issues

4. **Action Items Table:**
   ```markdown
   | Action | Owner | Deadline | Priority | Status |
   |--------|-------|----------|----------|--------|
   | ... | ... | ... | CRITICAL/High/Medium/Low | Not Started |
   ```

5. **Appendix: Trend Comparison:**
   - Incident-Driven RFC Rate (Historical)
   - Fast Track Volume (Historical) — flag if >15%
   - Shadow SDLC Pattern (Normal Planned %)
   - Risk Classification (Historical Trend)
   - Emergency Changes (Historical Trend)

6. **Summary: Process Health Assessment:**
   ```markdown
   | Metric | Status | Trend | Urgency |
   |--------|--------|-------|---------|
   | Fast Track Volume | 🔴/🟡/🟢 [value] | ⬆️/⬇️/➡️ | CRITICAL/High/Medium/None |
   | ... | ... | ... | ... |
   ```

### Step 8: Present Findings

After generating the document:

1. **Show the file path** where the analysis was saved
2. **Summarize the top 3 findings:**
   - 🚨 Most critical issue
   - ⚠️ Second priority
   - ℹ️ Third priority
3. **Highlight any 🔴 REGRESSIONS** (metrics moving backward)
4. **Note any ✅ IMPROVEMENTS** (positive trends)

**Output format:**
```
✅ Operations Review analysis created: meetings/Ops_Review/YYYY-MM-DD_Ops_Review.md

## Key Findings:

🚨 CRITICAL: [Most urgent issue]
⚠️ HIGH: [Second priority]
ℹ️ MEDIUM: [Third priority]

## Trend Summary:
✅ Improvements: [list]
🔴 Regressions: [list]
➡️ Stable: [list]
```

## Best Practices

### Data Accuracy
- **Always use exact numbers** from Power BI exports/screenshots, never estimate from visuals
- If data is unclear, ask the user to provide CSV export or typed values
- Verify totals add up correctly (e.g., Standard + Normal + Emergency = Total RFCs)

### Tone and Language

**CRITICAL: Use collaborative, non-accusatory language. Focus on OBSERVED RESULTS, not unvalidated conclusions.**

**Key Principle: Data → Observation → Investigation Need (not Data → Conclusion → Blame)**

**DO USE:**
- "What we're seeing" / "What the data shows" (not "Teams are doing X")
- "Pattern observed" / "Trend identified" (not definitive conclusions)
- "May indicate" / "Suggests exploring" / "Potential to" (not "this means" / "this is")
- "Requires validation" / "Needs investigation" (acknowledge uncertainty)
- "Observed in this analysis period" (not "worst ever" / universal claims)
- "Gap identified" (not "violation" / "failure")
- "Usage elevated above baseline" (not "abuse" / "misuse")
- "Path forward: investigate drivers, then..." (validate before concluding)

**DON'T USE:**
- Blame language: "VS Leaders failed", "teams are bypassing", "someone is rubber-stamping"
- Accusatory terms: "abuse", "misuse", "violation", "collapse", "breakdown"
- Crisis language: "WORST EVER", "TOTAL COLLAPSE", "irreversible governance collapse"
- Judgmental: "without criteria", "approving blindly", "ignoring policy"
- Prescriptive assumptions: "Fast Track is last resort", "should use pipelines", "must be X"
- Unvalidated conclusions: "this means X" (when we haven't investigated yet)
- Universal claims: "always", "never", "all teams" (unless data supports it)

**INSTEAD:**
- "VS Leaders are approving without criteria" → "Approval criteria may need clearer alignment"
- "Teams bypassing automation" → "Gap between available automation and actual usage"
- "Emergency misused" → "Emergency classification pattern needs review"
- "Fast Track abuse" → "Fast Track usage elevated" or "Fast Track pattern above target"
- "Governance breakdown" → "Governance challenge" or "Process deviation"
- "WORST EVER" → "Highest observed" or "Above historical range"
- "TOTAL COLLAPSE" → "Significant increase" or "Sharp change"

**Framing Actions:**
- "Emergency intervention required" → "Collaborative session to align approach"
- "VS Leaders must audit" → "Review usage patterns together"
- "Structural enforcement" → "Structural support and tooling improvements"
- "Prevent collapse" → "Strengthen practices"

**General Principles:**
- Focus on **systems and patterns**, not people or roles
- Use **data-driven observations**, not judgments
- Frame as **opportunities and gaps**, not failures
- Emphasize **working together** and **supporting teams**
- Be **direct about the data**, but **collaborative about solutions**

**Keep:**
- Use **bold** for KPIs and key metrics
- Use **branded terms:** "Shadow SDLC", "Risk Multiplication" (technical terms, not accusations)
- Reference **SOC 2** and **Change Management Policy** as context (not weapons)
- Be specific and clear about what needs investigation

### Avoiding Assumptions

**CRITICAL: This analysis shows RESULTS and identifies PATTERNS. It does NOT validate root causes.**

**Remember:**
- We haven't interviewed teams about why they made choices
- We haven't validated if Fast Track usage was justified
- We haven't confirmed pipeline capacity issues exist
- We haven't verified approval process failures

**Therefore:**

❌ **Don't write:** "Fast Track is last resort and should be <5%"
✅ **Write:** "Fast Track usage at 22%, above historical baseline of ~5%"

❌ **Don't write:** "Teams are bypassing pipelines because they don't trust automation"
✅ **Write:** "73% manual pattern suggests exploring pipeline adoption barriers"

❌ **Don't write:** "VS Leaders are rubber-stamping without criteria"
✅ **Write:** "Fast Track usage increased; review of approval patterns recommended"

❌ **Don't write:** "This proves systemic failure"
✅ **Write:** "This pattern warrants investigation into potential systemic factors"

**Framing pattern:**
1. **State the data:** "Fast Track usage is 22%"
2. **Compare to baseline:** "This is above the historical ~5% baseline"
3. **Suggest investigation:** "Recommend reviewing usage patterns to understand drivers"
4. **Connect to V2MOM (if relevant):** "M2.2 initiative focuses on approval criteria clarity"

**NOT:**
1. ~~State the data~~
2. ~~Jump to conclusion about WHY~~
3. ~~Assign blame to teams/roles~~

### Comparisons
- **Always compare with 3 previous periods** (minimum 2 if less historical data available)
- **Flag regressions explicitly** with 🔴 and percentage change
- **Celebrate improvements** with ✅ but remain cautious (check if sustained)

### Action Items
- **Be specific:** Include owner, deadline, priority
- **CRITICAL priority:** Fast Track >15%, Emergency policy violations
- **HIGH priority:** Shadow SDLC regressions, incident-driven spikes
- **MEDIUM/LOW:** Category taxonomy cleanup, "Promote to Standard" initiatives

## Common Issues

### Issue 1: Power BI Screenshots Hard to Read

**Problem:** Numbers in stacked bar charts are difficult to extract accurately.

**Solution:**
```
The numbers in the chart are hard to read precisely. Could you:
1. Export the visual data to CSV (right-click visual → Export data)
2. OR hover over each bar and share the tooltip values
3. OR manually type the key totals in a table

For example:
| Date | Standard | Normal | Emergency |
|------|----------|--------|-----------|
| Mar 16 | 3 | 6 | 0 |
...
```

### Issue 2: Missing Historical Context

**Problem:** Cannot access Confluence or previous review files.

**Solution:**
```
I don't have access to previous Operations Reviews for trend comparison.
Could you share:
- The last 2-3 Operations Review Confluence page URLs or file paths
- OR key metrics from previous reviews (Fast Track %, Normal Planned %, Incident-Driven %)
```

### Issue 3: Unclear Period Dates

**Problem:** User doesn't specify exact date range.

**Solution:**
```
To ensure accurate analysis, please confirm the exact review period:
- Start date: YYYY-MM-DD
- End date: YYYY-MM-DD

This helps me compare with previous bi-weekly reviews (typically every 14 days).
```

## Example Usage

**User says:** "Let's do the Ops Review for the last 2 weeks"

**Skill response:**
```
Let's prepare the Operations Review analysis. I'll need the Power BI dashboard data.

Please provide screenshots or data for these 5 visuals:
1. Created Changes (timeline)
2. RFC Risk Classification
3. # Change Execution per RFC type (rings)
4. How RFCs are being used
5. Changes by Category Reason

You can share:
- Screenshots (I'll extract the numbers)
- CSV exports from Power BI
- Typed data in table format

Which format works best for you?
```

## Output Example

After completing the analysis:

```
✅ Operations Review created: meetings/Ops_Review/2026-04-02_Ops_Review.md

## Key Findings:

🚨 CRITICAL: Fast Track surge to 22.10% (458% increase from previous period)
   - VS Leaders must audit all Fast Track requests immediately
   - Deadline: April 5, 2026

⚠️ HIGH: Shadow SDLC regression - Normal Planned increased from 55.56% to 64.71%
   - 16-point backward slide indicates teams reverted to manual patterns
   - Investigation needed: April 10, 2026

ℹ️ POSITIVE: Incident-Driven RFC rate continues to improve (27.08%, down from 36.73%)
   - Lowest rate in 3 months
   - Proactive planning showing results

## Trend Summary:
✅ Improvements: Incident-Driven RFC rate ⬇️
🔴 Regressions: Fast Track (22.10%), Shadow SDLC (64.71%)
➡️ Stable: Risk Classification (76.4% Low), Emergency volume (2 RFCs)

The analysis is ready for your Thursday presentation.
```

## Tips

- **Use this skill bi-weekly** (every 14 days) to maintain consistency
- **Save historical analyses** in `meetings/Ops_Review/` for future trend comparisons
- **Update Confluence** after review is presented (sync local markdown with Confluence page)
- **Track action items** — follow up on CRITICAL items in subsequent reviews
- **Always read V2MOM context** before writing analysis — connect problems to solutions already in progress

## Example: Connecting Finding to V2MOM

**Finding: Fast Track Usage at 22%**

❌ **DON'T write:**
```markdown
Fast Track usage at 22% indicates VS Leaders are rubber-stamping approvals without criteria.
Teams are abusing Fast Track to bypass governance. Fast Track is last resort and should be <5%.

Action Required: VS Leaders must immediately audit all Fast Track requests.
```

**Problems:**
- Assumes VS Leaders are "rubber-stamping" (blame, not validated)
- Says "Fast Track is last resort" (prescriptive assumption)
- Says "should be <5%" (unvalidated target)
- Says "abusing" (accusatory)

✅ **DO write:**
```markdown
**What we're seeing:**
Fast Track usage at 22%. Historical baseline has been ~5% (February-March average).

**Why this matters:**
Fast Track reduces baking period. 22% represents a significant shift from recent patterns.

**Next step:**
Review Fast Track usage patterns to understand drivers and assess whether current usage aligns with intended criteria.

**Related V2MOM Initiative:**
**M2.2 (Empower Reviewers)** — currently in Q1 2026 delivery. This initiative focuses on defining reviewer framework with explicit approval criteria, including Fast Track usage guidelines.

**Immediate action:**
Session with VS Leaders by April 5 to review March patterns and discuss findings.
```

**Key differences:**
- ✅ Observation-based ("what we're seeing", not "teams are doing X")
- ✅ No assumptions ("historical baseline ~5%" not "should be <5%")
- ✅ Investigation-focused ("review patterns to understand drivers" not "immediately audit")
- ✅ Connects to V2MOM showing proactive work without claiming it solves everything
- ✅ Executive-appropriate (shows data, identifies need, proposes investigation)
- ❌ No blame ("rubber-stamping", "abuse")
- ❌ No prescriptive assumptions ("Fast Track is last resort")
- ❌ No unvalidated conclusions ("this means X" when we haven't investigated)

---

*Created: 2026-03-31*
*Updated: 2026-04-02 (Added V2MOM context and collaborative language)*
