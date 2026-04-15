# V2MOM Measurements Feedback — Method 2

**Date:** 2026-04-16 (Thursday)  
**Meeting:** Process Engineering Team Meeting  
**Attendees:** Vera, Paulo, Inês, Laura  
**Document:** [PE-STRAT-03] V2MOM Measurements Summary & Process Gaps

**Purpose:** Review all V2MOM measurements and provide feedback on Method 2 (Transform Change Management)

---

## Executive Summary

Method 2 measurements are **structurally sound but operationally complex**. Key concerns:

1. **⚠️ M2.1 requires deeper analysis (Vera's feedback)** — Vera feels there's a fundamental metric missing for M2.1. Deep dive scheduled for Thursday afternoon to identify gap.
2. **M2.2 metric feasibility uncertain** — H2 2024 baseline may not exist, need decision on alternative metric
3. **M2.3 sequencing dependency** — Jira field creation blocked until M2.2 framework implemented
4. **M2.1 baseline accuracy risk** — manual timestamp field creates measurement reliability issues
5. **Cross-team dependencies** — Paulo's M4.2 and M2.4-M2.5 work critical for M2 success

**Recommendation:** 
1. **Thursday afternoon:** M2.1 metric gap analysis with Vera
2. Prioritize M2.2 feasibility review (this month) and Paulo's M4.2 dashboard readiness (before Q3 tracking begins)

---

## Method 2 Feedback — By Sub-Method

### M2.1: Change Lead Time Reduction

**Metric:** % reduction in mean time from RFC Creation to Implementation for Normal Changes  
**Baseline:** 16 days (H2 2025)  
**Target:** -30% by Q2 2027 (11 days)

**Status:** ⚠️ **Requires deeper analysis (Vera's feedback)**

**Strengths:**
- Clear baseline (16 days validated)
- Intermediate milestones defined (Q3'26: 15d, Q4'26: 14d, Q1'27: 12d, Q2'27: 11d)
- Data source identified (Jira RFC, customfield_18619)

**⚠️ Vera's Feedback — Metric Gap Analysis Needed:**

**Observation:** Vera feels there's a fundamental metric missing for what we're doing in M2.1.

**Context:** M2.1's V2MOM goal is "Ensure Pipeline Integrity by Consolidating Artifact Centralization" and "eliminate 'shadow' production changes." Current metric (Change Lead Time) measures velocity/speed, but may not fully capture the **pipeline integrity** objective.

**Initial Analysis:**
- PE-STRAT-01 mentions "RFC Compliance %" in M2.1 Success Metric section
- PE-STRAT-03 only includes Change Lead Time Reduction
- Question: Does Change Lead Time alone measure M2.1's core goal?

**Security Controls Context:**
Security rules and permissions already prevent unauthorized production changes (shadow changes are blocked by existing controls).

**Action Required:**
📅 **Thursday, April 16 afternoon** — Deep analysis session to identify what metric is missing and whether it's needed.

**Possible Areas to Explore:**
- Change Catalog completeness/coverage
- CI/CD compliance enforcement measurement
- Normal → Standard promotion readiness
- Artifact centralization adoption
- Operation Type classification completeness

**Process Gaps (Change Lead Time):**
- **Implementation timestamp accuracy** — relies on manual field population by implementers
  - Risk: Incomplete or inaccurate data undermines baseline credibility
  - Impact: Stakeholders may distrust -30% reduction if measurement unreliable
- **Outlier handling** — max was 6114 hours in baseline (needs protocol)
- **Change scope variations** — lead time affected by complexity, not just process efficiency

**Mitigations:**
- ✅ Already in progress: Coordinate with Paulo (M4.2 Data Accuracy) to validate baseline and automate data quality checks
- ⏳ Q2 action: Establish data quality validation rituals before Q3 2026 tracking begins
- ⏳ Define outlier handling protocol (e.g., cap at 99th percentile)
- 📅 **Thursday afternoon:** Identify missing metric with Vera

**Recommendation:** **Proceed with Change Lead Time metric** as currently defined, but conduct deeper analysis on Thursday afternoon to identify if additional metric is needed to measure M2.1's pipeline integrity goal.

---

### M2.2: Reviewer Empowerment OR Standard Change Promotion Rate

**Current Metric (90-day goals):** Bypass Frequency reduction  
**Alternative Metric (PE-STRAT-03):** % increase in Standard Change Promotion Rate (+50% by Q2 2027)

**Status:** ⚠️ **Requires feasibility review — URGENT**

**Issue:**
PE-STRAT-03 identifies Laura to review feasibility and baseline availability for "Standard Change Promotion Rate" metric. This alternative metric requires:
- H2 2024 Standard Change execution count baseline
- Complete Change Catalog Registry (26 operation types documented)
- Clear promotion criteria (Normal → Standard)
- Jira tracking mechanism for promotion decisions

**Current State:**
- Bypass Frequency metric is operational (can track now)
- Standard Change Promotion metric requires infrastructure not yet built
- Framework pivot from three-tier reviewer model to review questions approach changes implementation approach

**Decision Needed:**
Which metric do we use for M2.2?
1. **Option A: Bypass Frequency** (current 90-day goals) — operational now, tracks reviewer empowerment effectiveness
2. **Option B: Standard Change Promotion Rate** (PE-STRAT-03) — requires H2 2024 baseline, tracks automation pipeline effectiveness

**Recommendation:** 
- **This month:** Validate if H2 2024 baseline exists
- **If baseline exists:** Use Standard Change Promotion Rate (aligns better with M2.3 automation discovery)
- **If baseline missing:** Use Bypass Frequency (operational immediately, revisit in Q3)

**Stakeholder Validation Plan:**
- ✅ Framework pivot validated by Vera (April 9)
- ⏳ Cross-check with Tiago Campos (operational practitioner lens)
- ⏳ Validation with Helder Marques (strategic oversight)
- ⏳ Potentially joint session Tiago + Helder for alignment

---

### M2.3: Manual Resilience Identification

**Metric:** % of reviewed Normal RFCs flagged as "Automation Candidate"  
**Target:** <20% by Q1 2027  
**Expected Trend:** Q2'26: 30-40% → Q3'26: 25-35% → Q4'26: 20-30% → Q1'27: <20%

**Status:** ⚠️ **Operationally blocked until M2.2 complete**

**Process Gaps:**
- **Custom field creation** — "Reviewer Decision Reason" needed in Jira RFC project
  - **Sequencing dependency:** Field creation must happen AFTER M2.2 framework implemented
  - Rationale: Reviewers need review questions framework to know WHEN to flag automation candidates
- **Review protocol** — rigorous criteria for identifying automation candidates (depends on M2.2 framework)
- **Reviewer training** — CAB reviewers need training on flagging criteria (after M2.2 pilot)
- **False positive validation** — quarterly validation mechanism (sample 20 RFCs)
- **Integration with automation pipeline** — link flagged RFCs to M5.3a (Paulo's ownership)

**Recommendation:**
**Do NOT create Jira custom field yet.** Sequence is:
1. ✅ M2.2 framework validated (Tiago + Helder) — Q1 2026
2. ⏳ M2.2 pilot with Top 3 Normal operation types (15 RFCs) — Q2 2026
3. ⏳ M2.3 criteria definition (based on M2.2 learnings) — Q2 2026
4. ⏳ Jira custom field creation — Q2 2026
5. ⏳ CAB reviewer training — Q2 2026
6. ⏳ Q2 baseline collection (30-40%) — Q2 2026

**Current Action:** Prep M2.2 stakeholder validation (prerequisite for M2.3).

---

### M2.6: Automate Lifecycles

**Metric:** Change Lead Time (contributes to M2.1 -30% target)  
**Timeline:** Q3 2026

**Status:** ✅ **Scoped for Q3, no immediate gaps**

**Note:** M2.6 work depends on M2.1-M2.3 learnings. No process gaps identified yet (work begins Q3).

---

## Dependencies — Paulo's Ownership

### M2.4: CFR Correlation Accuracy (Paulo owns, Laura collaborates)

**Metric:** % of incidents where automated correlation correctly identifies asset-version change responsible  
**Target:** >90% by Q4 2026

**Process Gaps:**
- **Correlation engine doesn't exist yet** — Paulo must build (M2.5)
- Correlation methodology undefined — timing windows, confidence scoring

**Laura's Role:** Collaborate on M2.4 methodology, provide M2.1 Change Catalog context

**Status:** ✅ Dependency clear, coordination needed Q2-Q3

---

### M2.5: CFR Technical Implementation (Paulo owns)

**Metric:** CFR Correlation Accuracy (>90% by Q4 2026)  
**Timeline:** Q3 2026

**Process Gaps:**
- Build correlation engine (data science logic)
- RCA quality variance — not all RCAs have clear root cause

**Laura's Role:** None (Paulo's technical implementation)

**Status:** ✅ Dependency clear, no action needed from Laura

---

### M4.2: Data Accuracy (Paulo owns — CRITICAL DEPENDENCY)

**Impact on Method 2:**
Paulo's M4.2 (Ensure Data Accuracy by Building Robust DAX Models & Technical Integration) is **CRITICAL** for:
- M2.1: Change Lead Time tracking (Jira RFC data accuracy)
- M2.2: Bypass Frequency tracking (if selected as metric)

**Process Gaps:**
- DAX models and Jira integration must be operational BEFORE Q3 2026 tracking begins
- M2.1 baseline validation depends on accurate data extraction

**Recommendation:**
**Coordinate with Paulo this month** to ensure M4.2 dashboards support M2.1/M2.2 tracking before Q3 2026.

---

## Cross-Method Risks

### Risk 1: M2.2 Metric Decision Delayed

**Impact:**
- M2.2 framework stakeholder validation blocked (don't know what to optimize for)
- April 16 presentation scope unclear
- M2.3 criteria definition delayed (depends on M2.2 approach)

**Mitigation:**
- **This week:** Validate H2 2024 baseline availability
- **By April 16:** Decision on Bypass Frequency vs Standard Change Promotion Rate

---

### Risk 2: M2.1 Baseline Accuracy Undermines Credibility

**Impact:**
- If 16-day baseline is inaccurate, entire -30% reduction target loses credibility
- Stakeholders distrust M2 metrics if measurement is unreliable

**Mitigation:**
- **Q2 action:** Paulo's M4.2 work validates baseline data quality
- Define acceptable data quality threshold (e.g., >95% timestamp completion rate)

---

### Risk 3: M2.3 Jira Field Created Too Early

**Impact:**
- Reviewers don't know how to use field without M2.2 framework
- Field sits unused, creates confusion
- Metric cannot be measured accurately

**Mitigation:**
- ✅ **Do NOT create field until M2.2 implemented**
- Sequence: M2.2 validation → M2.2 pilot → M2.3 criteria → Jira field

---

### Risk 4: Paulo's M4.2 Dashboard Not Ready Before Q3 Tracking

**Impact:**
- Cannot measure M2.1 Change Lead Time accurately
- Q3 2026 milestone (15 days target) cannot be validated
- Cascading delay to Q4, Q1, Q2 milestones

**Mitigation:**
- **This month:** Sync with Paulo to confirm M4.2 dashboard readiness timeline
- Establish SLA: M4.2 dashboards operational by end of Q2 2026

---

## Recommended Actions (Priority Order)

### 🔴 URGENT (This Month — April 2026)

1. **[M2.1] Metric Gap Analysis (Vera's feedback):**
   - **Thursday afternoon (April 16):** Deep dive session to identify missing metric
   - Vera feels fundamental metric is missing for M2.1 pipeline integrity goal
   - Explore: Change Catalog completeness, artifact centralization adoption, operation type classification
   - **Note:** Security controls already prevent shadow changes, so RFC Compliance % may not be the gap
   - Timeline: Analysis Thursday afternoon, decision by end of week

2. **[M2.2] Feasibility Review:**
   - Validate H2 2024 Standard Change execution count baseline exists
   - Decision: Bypass Frequency OR Standard Change Promotion Rate
   - Timeline: By April 16 (team meeting)

3. **[M4.2] Paulo Coordination:**
   - Confirm M4.2 dashboard readiness timeline
   - Establish SLA: Dashboards operational by end of Q2 2026
   - Timeline: This month

4. **[M2.1] Baseline Validation (Change Lead Time):**
   - Coordinate with Paulo to validate 16-day baseline accuracy
   - Define data quality threshold (e.g., >95% timestamp completion)
   - Timeline: Q2 2026

### 🟡 IMPORTANT (Q2 2026)

4. **[M2.2] Stakeholder Validation:**
   - Cross-check with Tiago Campos (operational practitioner)
   - Validation with Helder Marques (strategic oversight)
   - Potentially joint session for alignment
   - Timeline: Q2 2026

5. **[M2.2] Pilot Execution:**
   - Top 3 Normal operation types (15 RFCs, 5 per type)
   - 2-week pilot timeline
   - Validate review questions framework effectiveness
   - Timeline: Q2 2026

6. **[M2.3] Criteria Definition:**
   - Create rigorous criteria for automation candidate identification
   - Based on M2.2 pilot learnings
   - Timeline: Q2 2026 (after M2.2 pilot)

7. **[M2.3] Jira Custom Field Creation:**
   - Create "Reviewer Decision Reason" field in RFC project
   - Configure field values (Automation Candidate, Manual Required, etc.)
   - Timeline: Q2 2026 (after M2.3 criteria defined)

8. **[M2.3] CAB Reviewer Training:**
   - Develop training plan
   - Train reviewers on flagging automation candidates
   - Timeline: Q2 2026 (after Jira field created)

### 🟢 MONITOR (Q3 2026)

9. **[M2.1] Q3 Tracking:**
   - Begin tracking toward 15-day target (-6%)
   - Monitor data quality and outlier handling
   - Timeline: Q3 2026

10. **[M2.3] Baseline Collection:**
    - Q2 baseline: 30-40% flagged as automation candidates
    - Validate false positive rate (quarterly sample of 20 RFCs)
    - Timeline: Q2 2026 → ongoing

---

## Questions for Team Discussion (April 16)

1. **⚠️ M2.1 Metric Gap (Vera's feedback):** What fundamental metric is missing from M2.1? Is it Change Catalog completeness? Artifact centralization adoption? Operation Type classification? (Deep dive Thursday afternoon)

2. **M2.2 Metric Decision:** Do we have H2 2024 Standard Change execution baseline? If not, proceed with Bypass Frequency?

3. **M4.2 Timeline:** Paulo, when will M4.2 dashboards be operational? Can we establish end of Q2 SLA?

4. **M2.1 Data Quality:** What's acceptable threshold for timestamp completion rate? (Suggest >95%)

5. **M2.3 Sequencing:** Team alignment on "M2.2 first, M2.3 second" approach?

6. **M2.4 Coordination:** When should Laura engage with Paulo on CFR correlation methodology?

---

## Summary — Method 2 Health

| Sub-Method | Status | Blocker | Next Action |
|------------|--------|---------|-------------|
| **M2.1** | ⚠️ **Requires Analysis** | **Potential metric gap (Vera's feedback)** | **Deep dive Thursday afternoon** + Baseline validation with Paulo (Q2) |
| **M2.2** | 🟡 At Risk | Metric decision needed | Feasibility review (this month) |
| **M2.3** | 🟡 Blocked | M2.2 dependency | Wait for M2.2 implementation |
| **M2.4** | 🟢 On Track | Paulo's capacity | Coordinate Q2-Q3 |
| **M2.5** | 🟢 On Track | Paulo's capacity | No action (Paulo owns) |
| **M2.6** | 🟢 On Track | None (Q3 work) | No action yet |

**Overall Assessment:** Method 2 is **operationally complex with potential metric gap**. 

**⚠️ ANALYSIS NEEDED:** Vera feels M2.1 is missing a fundamental metric for measuring pipeline integrity. Current metric (Change Lead Time) measures velocity. Deep dive Thursday afternoon to identify what's missing (Change Catalog completeness? Artifact centralization adoption? Operation Type classification?).

**🟡 IMPORTANT:** Resolve M2.2 metric decision this month and confirm Paulo's M4.2 timeline.

---

*Prepared: 2026-04-10*  
*For meeting: 2026-04-16 (Thursday)*  
*Based on: PE-STRAT-03 V2MOM Measurements Summary & Process Gaps*
