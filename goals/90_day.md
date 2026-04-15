# 90-Day Goals — Q1 2026

*Current quarter priorities: Transform Change Management into an Automated Pipeline (Method 2)*

---

## Quarter Theme
**Method 2: Transform Change Management**

**V2MOM Goal:** Minimize production risk while maximizing developer throughput by automating gates and centralizing artifacts.

**Q1 2026 Focus - Three Core Pillars:**
1. **M2.1 — Ensure Pipeline Integrity:** Consolidate Change Catalog and enforce CI/CD compliance prerequisites
2. **M2.2 — Streamline Approval Workflows:** Establish reviewer empowerment framework with clear authority
3. **M2.3 — Optimize Automation Pipeline:** Execute discovery rituals and formalize Standard Change promotion

**Outcome:** Eliminate "shadow" production changes, reduce bypass frequency, and build automation readiness for 2027 roadmap.

---

## Collaborators on Method 2

- **Paulo Alves Monteiro:** 
  - M4 (Strategic Metrics Orchestration) — M4.2 (Data Accuracy) enables M2.1/M2.2 tracking
  - M2.4 (CFR Correlation) — Paulo owns, you collaborate
  - M2.5 (CFR Technical Implementation) — Paulo owns
- **Inês Matos:** Collaboration on Incident Management learning and context

---

## Urgent Actions (April 2026)

These actions were identified in PE-STRAT-03 and require immediate attention:

1. **[M2.2] Feasibility Review:** Review feasibility and baseline availability for "Standard Change Promotion Rate" metric
   - **Need:** H2 2024 Standard Change execution count baseline
   - **Impact:** May determine if M2.2 tracks Bypass Frequency OR Standard Change Promotion Rate
   - **Timeline:** This month (April 2026)

2. **[M2.3] Jira Custom Field:** Create "Reviewer Decision Reason" field in Jira RFC project
   - **Need:** Enable tracking of automation candidates flagged during CAB review
   - **Impact:** Required for M2.3 metric measurement (<20% by Q1 2027)
   - **Timeline:** This month (April 2026)

3. **[M2.1] Baseline Validation:** Validate H2 2025 baseline (16 days) and establish Q3 2026 tracking
   - **Need:** Confirm accuracy of 16-day baseline before Q3 tracking begins
   - **Impact:** Foundation for -30% reduction target (11 days by Q2 2027)
   - **Timeline:** Q2 2026

---

## Top Priorities

### Priority 1: M2.1 — Change Lead Time Reduction

**Official V2MOM Description:** Unify the Change Catalog and enforce CI/CD compliance prerequisites to eliminate "shadow" production changes.

**Official V2MOM Metric:** % reduction in mean time from RFC Creation to Implementation for Normal Changes

**Baseline:** 16 days (H2 2025 validated)

**Target:** -30% by Q2 2027 (11 days)

**Intermediate Milestones:**
- Q3 2026: 15 days (-6%)
- Q4 2026: 14 days (-12%)
- Q1 2027: 12 days (-25%)
- Q2 2027: 11 days (-30%)

**Q1 2026 Deliverables:**
- [x] Complete Operation Types data analysis with Vera & Paulo (26 types identified: 6 Standard + 20 Normal)
- [ ] Finalize Centralized Change Catalog (ODC-CAT) with unambiguous RFC criteria
- [ ] Define RFC Process documentation mandating CI/CD usage
- [ ] Validate catalog completeness with stakeholders (VS Leaders)
- [ ] Present findings to Brandão (Operation Types analysis)
- [ ] Deep dive: Analyze top 3 Normal operation types by RFC volume
- [ ] Validate H2 2025 baseline (16 days) and establish Q3 2026 tracking
- [ ] Jira Item: RSA-753 | Timeline: Q1 2026 | Effort: 8

**Success Metric (V2MOM):**
- **Change Lead Time Reduction:** -30% by Q2 2027 (11 days target)
- **RFC Compliance %** > 95%
- Central Change Catalog adopted by all teams
- Zero undocumented CI/CD bypasses

**Data Source:** Jira RFC project, customfield_18619 (Implementation Timestamp)

**Process Gaps (PE-STRAT-03):**
- Implementation timestamp accuracy — relies on manual field population
- Outlier handling — need protocol for extreme cases (max was 6114 hours in baseline)
- Change scope variations — lead time affected by complexity, not just process efficiency

---

### Priority 2: M2.2 — Streamline Approval Workflows by Establishing Reviewer Empowerment

**Official V2MOM Description:** Deploy a framework that empowers CAB to reject bypasses and streamlines approvals through clearly defined authority.

**Q1 2026 Deliverables:**
- [x] Framework definition with risk criteria and reviewer tiers (Reviewers Framework published)
- [ ] Define reviewer empowerment parameters and authority boundaries
- [ ] Refine Fast Track approval criteria (based on Ops Review findings: 22% usage vs <5% target)
- [ ] Develop Training Plan for Reviewers (escalation, rejection authority)
- [ ] Present framework to VS Leaders with impact analysis
- [ ] Establish monitoring for bypass rejection frequency and approval velocity
- [ ] **[URGENT]** Review feasibility and baseline availability for "Standard Change Promotion Rate" metric (PE-STRAT-03 action item)
- [ ] Jira Item: RSA-813 | Timeline: Q1 2026 | Effort: 5

**Success Metric (V2MOM):**
- **Bypass Frequency** reduction (tracked weekly)
- Approval time < 24h for Standard/Normal changes
- 100% segregation of duties compliance
- Reviewer tier authority clearly understood by all teams

**Alternative Metric (Requires Review):**
- **Standard Change Promotion Rate:** +50% increase by Q2 2027 (need H2 2024 baseline)
- PE-STRAT-03 identifies Laura Ferreira to review feasibility and baseline availability
- May overlap with M2.3 work (Standard Promotion governance)

---

### Priority 3: M2.3 — Manual Resilience Identification & Standard Promotion

**Official V2MOM Description:** Audit manual logs monthly to identify high-impact automation candidates for the 2027 technical roadmap and codify the formal governance required to promote high-success Normal Changes to the pre-approved Standard track.

**Official V2MOM Metric:** % of reviewed Normal RFCs flagged as "Automation Candidate"

**Target:** <20% by Q1 2027

**Expected Trend:**
- Q2 2026: 30-40% (baseline, learning period)
- Q3 2026: 25-35% (protocol stabilized)
- Q4 2026: 20-30% (early automations implemented)
- Q1 2027: <20% (sustained automation)

**Q1 2026 Deliverables (Planning Phase):**
- [ ] **[URGENT]** Create Jira custom field "Reviewer Decision Reason" in RFC project (PE-STRAT-03 action item)
- [ ] Create rigorous criteria for identifying automation candidates during RFC review
- [ ] Develop training plan for CAB reviewers on flagging automation candidates
- [ ] Establish monthly discovery ritual for automation candidate identification
- [ ] Audit manual logs to identify high-impact automation candidates
- [ ] Define Standard Promotion governance and criteria
- [ ] Document process for transitioning Normal → Standard Changes
- [ ] Create 2027 automation roadmap blueprint (based on discovered candidates)
- [ ] Ensure link between flagged RFCs and Paulo's M5.3a automation pipeline
- [ ] Jira Item: RSA-775 | Timeline: Q1 2026 (planning phase) | Effort: 8

**Success Metric (V2MOM):**
- **Manual Resilience Identification:** <20% by Q1 2027
- **Blueprint Readiness** for 2027 automation roadmap
- Discovery ritual cadence established (monthly)
- Standard Change Promotion Rate baseline established
- Governance framework for Normal → Standard transitions defined

**Data Source:** Jira RFC project (custom field "Reviewer Decision Reason")

**Process Gaps (PE-STRAT-03):**
- Custom field creation — "Reviewer Decision Reason" field needed in Jira
- Review protocol — rigorous criteria for identifying automation candidates
- Reviewer training — CAB reviewers need training on flagging criteria
- False positive validation — quarterly validation mechanism (sample 20 RFCs)
- Integration with automation pipeline — link flagged RFCs to M5.3a (Paulo's ownership)

---

## Method 2 — Full Year View (Official V2MOM)

| ID | Method Summary | Success Metric | Timeline | Owner |
|---|---|---|---|---|
| M2.1 | Change Lead Time Reduction (16d → 11d) | -30% by Q2 2027 | Q1 2026 → Q2 2027 | **Laura (IN PROGRESS)** |
| M2.2 | Streamline Approval Workflows by Establishing Reviewer Empowerment | Bypass Frequency | Q1 2026 | **Laura (IN PROGRESS)** |
| M2.3 | Manual Resilience Identification & Standard Promotion | <20% by Q1 2027 | Q1 2026 (Prep) / Q2-Q3 (Execute) | **Laura (Prep in Q1)** |
| M2.4 | Enable Trusted Governance by Correlating CFR to Asset-Version Changes | >90% by Q4 2026 | Q2-Q3 2026 | **Paulo (Laura collaborates)** |
| M2.5 | Harden Data Reliability by Building CFR Technical Implementation | >90% by Q4 2026 | Q3 2026 | **Paulo** |
| M2.6 | Accelerate Delivery Velocity by Automating Lifecycles | Change Lead Time | Q3 2026 | **Laura (Planned)** |

**V2MOM KPI Targets (Official Metrics):**
- **M2.1 KPI:** Change Lead Time Reduction = -30% by Q2 2027 (baseline: 16 days → target: 11 days)
  - Q3 2026: 15 days (-6%) | Q4 2026: 14 days (-12%) | Q1 2027: 12 days (-25%) | Q2 2027: 11 days (-30%)
- **M2.3 KPI:** Manual Resilience Identification = <20% by Q1 2027 (baseline Q2 2026: 30-40%)
- **M2.4/M2.5 KPI:** CFR Correlation Accuracy = >90% by Q4 2026 (Paulo's ownership)

---

## Not Doing This Quarter

- Deep-dive on M2.4-M2.6 (CFR Correlation, Data Reliability, Lifecycle Automation) — scheduled for Q2/Q3
- Focus is M2.1 & M2.2 delivery + M2.3 prep work only
- Unrelated process improvements outside Change Management scope
- New platform migrations or infrastructure projects that compete for team bandwidth

---

## Weekly Check-in Questions

Review these every week:
1. **Are M2.1 and M2.2 progressing on schedule?** What's blocking analysis sessions or framework definition?
2. **Is the team cadence running?** Are we hitting meetings and milestones on time?
3. **What's the actual blocker?** Scope, resources, stakeholder alignment, or technical debt?
4. **Is my time allocated correctly?** Am I spending energy on M2.1 + M2.2, or getting pulled into firefighting?

---

## End of Quarter Success

By end of Q1 2026, I should be able to say:

- **M2.1 delivered:** 
  - Centralized Change Catalog (ODC-CAT) is live with 26 operation types documented
  - RFC Process mandates CI/CD usage
  - RFC Compliance tracking toward 95%+
  - H2 2025 baseline (16 days) validated
  - Q3 2026 tracking toward 15 days (-6%) ready
  - Operation Types analysis complete with overlap identification and top 3 Normal types analyzed

- **M2.2 delivered:** 
  - Reviewer Empowerment framework approved by VS Leaders with clear Fast Track criteria
  - Training plan ready
  - Bypass frequency baseline established and monitoring in place
  - Feasibility review complete for Standard Change Promotion Rate metric (H2 2024 baseline confirmed or alternative metric identified)

- **M2.3 prep complete:** 
  - Jira custom field "Reviewer Decision Reason" created and operational
  - Rigorous criteria for identifying automation candidates documented
  - CAB reviewer training plan developed
  - Monthly discovery ritual established
  - Standard Promotion governance framework documented
  - Link established between flagged RFCs and Paulo's M5.3a automation pipeline
  - 2027 automation roadmap blueprint ready

- **Team aligned:** 
  - Vera supporting M2.1/M2.2 analysis
  - Paulo's M4.2 (Data Accuracy) dashboards supporting M2.1/M2.2 tracking
  - Paulo and Inês onboarded and contributing
  - Process is repeatable for Q2

- **Roadmap clear:** 
  - M2.4-M2.5 (CFR Correlation, Paulo's ownership) scoped and ready for Q2-Q3 execution
  - M2.6 (Automate Lifecycles, your ownership) scoped for Q3 2026 execution

---

## Key Dependencies & Risks

**Dependencies:**
- **Paulo's M4.2 (Data Accuracy):** CRITICAL — DAX models and Jira integration enable accurate M2.1 (Change Lead Time) and M2.2 (Bypass Frequency) tracking
- **Paulo's M2.4-M2.5 (CFR Correlation):** Paulo owns M2.4 (CFR Correlation) and M2.5 (CFR Technical Implementation), you collaborate on M2.4 as needed
- **Paulo's M5.3a (Automation Pipeline):** Link between your M2.3 flagged RFCs and Paulo's automation delivery pipeline
- Vera's M2.2 metrics and analysis (ready this week)
- Paulo and Inês operational context (in progress)
- VS Leaders stakeholder alignment (scheduled presentations)
- Jira Demo Board Epic creation (RFC Demo Board sync)

**Risks:**
- Scope creep from unrelated change requests
- Stakeholder resistance to centralized governance
- Team bandwidth during concurrent Method 1 (FedRAMP) work
- Data quality issues in Operation Types analysis
- **M2.1 baseline accuracy:** Implementation timestamp relies on manual field population by implementers
- **M2.2 feasibility:** Standard Change Promotion Rate metric requires H2 2024 baseline (may not exist)
- **M2.3 adoption:** CAB reviewers may resist flagging automation candidates without clear criteria and training

**Mitigation:**
- Clear ownership boundaries (M2.1-M2.3 + M2.6 is Laura; M2.4-M2.5 is Paulo; M1 is Vera)
- Early stakeholder communication and buy-in
- Weekly status reviews with executive sponsors
- Quality validation rituals with Paulo
- **M4.2 coordination:** Ensure Paulo's dashboards support M2.1/M2.2 measurement before Q3 2026 tracking begins

**Note:** Method 5 (Unified Platform Governance) is **PAUSED** as of Q1 2026 — no active work planned for this quarter.

---

*Review weekly. Adjust as needed.*

**Started:** 2026-03-13
**Ends:** 2026-06-13

*Last updated: 2026-04-10*
*Updated for: Full V2MOM alignment with PE-STRAT-03 process gaps integration*
- Official metrics: M2.1 (Change Lead Time: 16d → 11d), M2.3 (Manual Resilience: <20%)
- Ownership clarification: Laura (M2.1-M2.3 + M2.6), Paulo (M2.4-M2.5)
- Urgent actions: M2.2 feasibility review, M2.3 Jira custom field creation
- Critical dependency: Paulo's M4.2 (Data Accuracy) enables M2.1/M2.2 tracking
- Process gaps from PE-STRAT-03 integrated into each priority

**Related Documents:**
- [PE-STRAT-01] V2MOM Process Engineering: https://outsystemsrd.atlassian.net/wiki/spaces/EEO/pages/5914722595
- [PE-STRAT-03] V2MOM Measurements Summary & Process Gaps: https://outsystemsrd.atlassian.net/wiki/spaces/EEO/pages/6172049577
- [V2MOM Alignment Analysis](v2mom_alignment_analysis.md): Detailed analysis of alignment between 90-day goals and team V2MOM
