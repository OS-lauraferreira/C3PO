# Operations Review — April 16, 2026

**Period:** March 31 – April 14, 2026

**Table of Contents**

---

# **Supporting Materials**

**Operations Review Deck -** [To be added]

**ODC Change Management Dashboard -** [https://app.powerbi.com/groups/me/apps/3a45f9da-1b76-4e56-8d53-f5ecca33e50c/reports/cd47a6e5-0ec3-4afd-bc42-6c6b0f9d8a7b/ReportSection8d87fe05cb867fcd4e87](https://app.powerbi.com/groups/me/apps/3a45f9da-1b76-4e56-8d53-f5ecca33e50c/reports/cd47a6e5-0ec3-4afd-bc42-6c6b0f9d8a7b/ReportSection8d87fe05cb867fcd4e87?ctid=1e7930e6-1ca4-40df-ac06-adabc2b139a3&experience=power-bi)

---

# Operation Review

## Change Management Data

**Period:** March 31 – April 14, 2026

**115 RFCs created** during the two-week period (57 Standard, 52 Normal, 6 Emergency).

**📊 KEY OBSERVATIONS:**
- **Fast Track: 2.61%** — down from 22.10% (April 2), below historical baseline of ~4-5%
- **Normal Planned: 76.92%** — highest observed in 3 months (up from 64.71% in April 2)
- **Incident-Driven RFC rate: 25.08%** — lowest observed in 3 months (continued decline)
- **RFC volume: 115 RFCs** — up from 95 in previous period (+21% increase)
- **Risk Classification: 84.8% Low Risk** — up from 76.4% in previous period

**⚠️ AREAS REQUIRING ATTENTION:**
1. **Emergency volume elevated:** 6 Emergency RFCs (highest in 3 months)
2. **Ring distribution remains inverted:** ring=3/ga continues to absorb highest volume
3. **Emergency protocol compliance:** System-wide impact classification needs validation

---

## **Deep Dive: Highlights & Insights**

### **1. Fast Track Volume: Pattern Change Observed**

**What we're seeing:**

The "Changes by Category Reason" chart shows **Fast Track at 2.61% of all changes** during this period.

**Breakdown:**
- **Standard Changes:** 2.61% are Fast Track (3 RFCs)
- **Normal Changes:** 13.04% are Fast Track (15 RFCs)
- **Emergency Changes:** 3.48% are Fast Track (4 RFCs)
- **Total Fast Track:** 3 RFCs

**Historical Context:**

| Period             | Fast Track % | Change vs Previous |
| ------------------ | ------------ | ------------------ |
| **March 5, 2026**  | 3.96%        | -                  |
| **March 19, 2026** | 5.00%        | +1.04 pp           |
| **April 2, 2026**  | **22.10%**   | **+17.10 pp**      |
| **April 16, 2026** | **2.61%**    | **-19.49 pp**      |

**Why this matters:**

Fast Track usage shows **extreme volatility** across 4 review periods:
- March 5 → March 19: +26% increase (3.96% → 5.00%)
- March 19 → April 2: +342% increase (5.00% → 22.10%)
- April 2 → April 16: -88% decrease (22.10% → 2.61%)

**Current rate (2.61%) is below historical baseline** of ~4-5%, but the **pattern instability** suggests underlying drivers are not understood.

**Actions to investigate:**

1. **Pattern validation:** Review Fast Track RFCs from March 16-30 (22.10% period) vs March 31-April 14 (2.61% period)
   - Identify teams, operation types, and justifications in both periods
   - Determine if spike was specific incident-driven or systemic process gap

2. **Sustainability monitoring:** Track Fast Track % over next 2-4 review periods (4-8 weeks)
   - Confirm if 2.61% is sustained or another spike occurs
   - Identify seasonal patterns or external triggers

3. **VS Leader approval patterns:** Audit approval decisions across volatile periods
   - Did approval criteria change between periods?
   - Were specific VS Leaders approving disproportionately during spike?

**Related V2MOM Initiative:**

**M2.2 (Streamline Approval Workflows)** — Reviewer empowerment framework with explicit Fast Track approval criteria may help stabilize usage patterns if implemented.

---

### **2. Normal Planned Usage: Highest Observed Rate**

**What we're seeing:**

The "How RFCs are being used" chart shows **76.92% of Normal Changes are used for "Planned Operations"** and 23.08% for incident response.

**Historical Trend (Normal Planned %):**

| Period                | Normal Planned % | Change vs Previous |
| --------------------- | ---------------- | ------------------ |
| **February 19, 2026** | 66.67%           | -                  |
| **March 5, 2026**     | 65.00%           | -1.67 pp           |
| **March 19, 2026**    | 55.56%           | -9.44 pp           |
| **April 2, 2026**     | 64.71%           | +9.15 pp           |
| **April 16, 2026**    | **76.92%**       | **+12.21 pp**      |

**Why this matters:**

76.92% is the **highest observed rate in 3 months** (10 percentage points above February baseline of 66.67%).

Previous reviews framed high Normal Planned % as "Shadow SDLC" pattern — indicating planned work that should use automated pipelines instead of manual Normal Change RFCs.

**Current rate (76.92%) could indicate:**
- Teams planning more work in advance (classification accuracy)
- Pipeline adoption gap (work remains manual that could be automated)
- Seasonal operational patterns (specific to March 31-April 14 period)

**Cannot determine from data alone** whether elevated rate is process maturity or automation gap.

**Actions to investigate:**

1. **Operation Type breakdown:** Cross-reference Normal Planned RFCs with Operation Types analysis
   - Which of the 20 Normal operation types dominate Planned usage?
   - Are they inherently manual (e.g., Infrastructure Decommissioning, Permission Management) or automatable (e.g., Deployment, Configuration Change)?

2. **Team distribution:** Identify which teams generate highest Normal Planned volume
   - Is elevated rate driven by specific teams or distributed?
   - Do specific teams have pipeline access issues?

3. **Trend validation:** Monitor Normal Planned % over next 2-4 review periods
   - Is 76.92% sustained or temporary spike?
   - Does it correlate with specific operational cycles?

**Related V2MOM Initiative:**

**M2.1 (Ensure Pipeline Integrity)** — Change Catalog consolidation (26 operation types documented) provides taxonomy to map which planned operations are automation candidates vs inherently manual work.

---

### **3. Emergency Volume: Elevated Activity**

**What we're seeing:**

**6 Emergency RFCs** were created during the review period (March 31 - April 14).

**Historical Context:**

| Period | Emergency Count | System-Wide Impact | Ring Distribution |
|--------|-----------------|---------------------|-------------------|
| **February 19, 2026** | 4 | 25% compliant | Not specified |
| **March 5, 2026** | 5 | 40% compliant | 1/1/3 (Recovery Bypass in GA) |
| **March 19, 2026** | 1 | 100% compliant | Conflicting data |
| **April 2, 2026** | 2 | Unknown | 0/1/1 (zero in ring=1) |
| **April 16, 2026** | **6** | **Validation needed** | 1/1/4 (concentration in ring=3) |

**Emergency Distribution by Ring:**
- **ring=1/osall:** 1 Emergency
- **ring=2/ea:** 1 Emergency
- **ring=3/ga:** 4 Emergency

**System-Wide Impact Classification:**

From "Emergency changes and incidents" chart:
- **Customer Reported:** 1 (Without System-wide impact)
- **Internal:** 1 (With System-wide impact)
- **System-wide SLO trigger:** 1 (Without System-wide impact)

**Why this matters:**

6 Emergency RFCs is the **highest volume in 3 months**. Additionally, the Emergency distribution shows **4 out of 6 executions landing in ring=3/ga** (production), which represents concentrated production risk.

**Process check:**

According to policy, Emergency Changes must only be utilized for **incidents with system-wide impact**. The data shows at least **2 Emergency RFCs classified as "Without System-wide impact"** (Customer Reported + System-wide SLO trigger). [ver incidents RDINC 78358 - não declarado mas teve 3 reports de clientes -> RFC com fast track com incident não declarado: Zendesk Multiple Incidents: Two or More --- outro: RDINC-78052

**Next step:**

Review post-mortems for all 6 Emergency RFCs to validate:
1. Did each incident justify Emergency classification?
2. Why did 4 Emergency executions concentrate in ring=3/ga?
3. Could any have been handled as Normal with Fast Track?

**Action Required:**

Session with incident response teams by April 20 to review Emergency classification patterns and ensure policy compliance.

---

### **4. Ring Distribution: Persistent Volume Inversion**

**What we're seeing:**

The "# Change Execution per RFC type" chart shows:

| Ring | Emergency | Normal | Standard | Total |
|------|-----------|--------|----------|-------|
| **ring=1/osall** | **1** | 14 | 18 | **33** |
| **ring=2/ea** | **1** | 16 | 17 | **34** |
| **ring=3/ga** | **4** | 22 | 22 | **48** |

**Key Observations:**
- Production ring (ring=3/ga) absorbed **48 total executions**, while ring=1 had **33**
- **4 Emergency executions in ring=3/ga** (67% of all Emergency volume)

**Historical Comparison:**

| Period | ring=1 Total | ring=2 Total | ring=3 Total | Distribution Pattern |
|--------|--------------|--------------|--------------|----------------------|
| **April 2, 2026** | 27 | 28 | 40 | Inverted (40 in GA) |
| **April 16, 2026** | 33 | 34 | **48** | **More inverted** (48 in GA) |

**Why this matters:**

The Change Management Policy outlines the principle of **"Risk Multiplication"**, noting that every move to a new ring adds risk. Therefore, the final production ring (GA) should ideally reflect the **lowest volume of changes due to rigorous filtering and testing in earlier stages** (OSALL and EA).

**The inverted distribution pattern suggests:**
1. **Insufficient filtering:** Changes are not being adequately tested in lower rings before GA promotion
2. **Direct GA injection:** Some changes may bypass lower rings entirely (emergency recovery pattern)
3. **Emergency concentration:** 4 Emergency executions in ring=3 indicates production-focused incident response

**Next step:**

Investigate whether ring=3 volume is driven by:
- Emergency incident response (acceptable justification)
- Routine changes skipping lower rings (process gap)
- GA-specific operations that cannot be tested in OSALL/EA (architectural constraint)

**Related V2MOM Initiative:**

**M2.1 (Ensure Pipeline Integrity)** — CI/CD compliance enforcement will mandate ring progression for routine changes, reducing GA volume for non-emergency operations.

---

### **5. Incident-Driven RFC Rate: Continued Improvement**

**What we're seeing:**

**25.08% of all RFCs are used to fix incidents**, based on the "How RFCs are being used" metric.

**Breaking this down:**
- **Emergency Changes:** 100% incident-driven (by definition) — 6 RFCs
- **Normal Changes:** 23.08% incident-driven, 76.92% planned — ~12 incident-driven out of 52
- **Standard Changes:** 19.23% incident-driven, 80.77% planned — ~11 incident-driven out of 57

**Calculation:**
```
(6×100% + 52×23.08% + 57×19.23%) / 115 = 25.08%
```

**Historical Trend:**

| Period | Incident-Driven % | Trend | Analysis |
|--------|-------------------|-------|----------|
| **March 5, 2026** | 43.64% | Baseline | Reactive period |
| **March 19, 2026** | 36.73% | ⬇️ Improving | Reduction |
| **April 2, 2026** | 27.08% | ⬇️ **Significant improvement** | Continued decline |
| **April 16, 2026** | **25.08%** | ⬇️ **Sustained** | **Lowest rate in 3 months** |

**Why this matters:**

The 25.08% incident-driven rate represents **continued improvement** and is the **lowest observed rate in 3 months**. This suggests:
- Improved proactive planning
- Better system stability
- Effective incident prevention mechanisms

**Next step:**

Continue monitoring to confirm sustained trend below 25%. Target remains **<20% by Q3 2026** as per V2MOM roadmap.

**Related V2MOM Initiative:**

**M2.3 (Manual Resilience Identification)** — Monthly audit of manual logs to identify automation candidates will help reduce incident-driven RFC volume by automating common failure scenarios.

---

### **6. Risk Classification: Healthy Distribution**

**What we're seeing:**

The "RFC Risk Classification" chart shows (112 RFCs with risk classification):

| Risk Level | Standard | Normal | Emergency | Total | % |
|------------|----------|--------|-----------|-------|---|
| **Low Risk** | 57 | 35 | 3 | **95** | **84.8%** |
| **Medium Risk** | 0 | 14 | 0 | **14** | **12.5%** |
| **High Risk** | 0 | 0 | 3 | **3** | **2.7%** |

**Historical Comparison:**

| Period | Low Risk % | Medium Risk % | High Risk % |
|--------|------------|---------------|-------------|
| **April 2, 2026** | 76.4% | 19.1% | 4.5% |
| **April 16, 2026** | **84.8%** | **12.5%** | **2.7%** |

**Why this matters:**

Risk classification shows **strong improvement** toward Low Risk concentration:
- **84.8% Low Risk** (up from 76.4%) — indicates mature change management
- **2.7% High Risk** (down from 4.5%) — fewer dangerous changes reaching production

**This distribution is healthy and expected:**
- High Low Risk % indicates effective pre-filtering and risk mitigation
- Low High Risk % shows proactive planning reduces dangerous changes

**No action required:** Risk classification appears accurate and compliant with policy.

---

### **7. Category Reason Analysis: Fast Track Correction Visible**

**What we're seeing:**

The "Changes by Category Reason" chart shows the following distribution:

| Category Reason | Standard % | Normal % | Emergency % | **Total %** |
|-----------------|------------|----------|-------------|-------------|
| **Change Configuration** | 24.35% | 4.35% | 0% | **~28.70%** |
| **Fast Track** | 2.61% | 13.04% | 3.48% | **~19.13%** |
| **Other Write Operation** | 11.30% | 6.96% | 0% | **~18.26%** |
| **Change Infrastructure** | 0.87% | 13.91% | 1.74% | **~16.52%** |
| **Restart** | 8.70% | 1.74% | 0% | **~10.44%** |
| **Customer Request** | 0% | 3.48% | 0% | **~3.48%** |
| **Other Read-only Operation** | 0% | 0.87% | 0% | **~0.87%** |
| **Promote to Standard** | 0.87% | 0% | 0% | **~0.87%** |
| **Retry** | 0.87% | 0% | 0% | **~0.87%** |
| **Rollback** | 0% | 0.87% | 0% | **~0.87%** |

**Key observations:**

1. **Fast Track reduction visible:** 2.61% Standard Fast Track (down from 3.16% in April 2) confirms process correction
2. **Change Configuration dominance:** 28.70% of all changes — potential Standard Change promotion candidates
3. **Other Write Operation remains high:** 18.26% trapped in undefined category (audit needed)
4. **Promote to Standard activity:** 0.87% shows teams proactively identifying Standard Change candidates

**Next step:**

**Related V2MOM Initiative:**

**M2.1 (Ensure Pipeline Integrity)** — Change Catalog consolidation will provide clear taxonomy to eliminate "Other Write Operation" ambiguity and map Category Reason to Operation Types.

---

## **Action Items for Process Engineering**

| Action | Owner | Deadline | Priority | Status |
|--------|-------|----------|----------|--------|
| **Emergency Volume Review** — Review post-mortems for all 6 Emergency RFCs; validate system-wide impact classification; assess ring=3 concentration | Laura + Incident Response Teams | April 20 | **HIGH** | Not Started |
| **Fast Track Sustainability Monitoring** — Track Fast Track % over next 2-4 weeks to confirm correction is sustained, not temporary | Laura | April 30 | HIGH | Not Started |
| **Shadow SDLC Context Analysis** — Cross-reference Normal Planned % (76.92%) with Operation Types to determine if elevated rate represents process gap or operational reality | Laura + Vera | April 25 | HIGH | Not Started |
| **Ring Distribution Root Cause** — Investigate why ring=3/ga absorbs 48 executions vs 33 in ring=1; identify if Emergency-driven or process gap | Laura + Vera | April 25 | MEDIUM | Not Started |
| **Category Reason Taxonomy Audit** — Investigate "Other Write Operation" (18.26%); map to Operation Types for clarity | Laura + Vera | April 30 | MEDIUM | Not Started |

---

## **Appendix: Trend Comparison**

### Incident-Driven RFC Rate (Historical)

| Period | Incident-Driven % | Trend |
|--------|-------------------|-------|
| **March 5, 2026** | 43.64% | Baseline |
| **March 19, 2026** | 36.73% | ⬇️ Improving |
| **April 2, 2026** | 27.08% | ⬇️ Continued improvement ✅ |
| **April 16, 2026** | **25.08%** | ⬇️ **Lowest in 3 months** ✅ |

**Insight:** Incident-driven work continues to decline consistently, indicating improved operational stability.

---

### Fast Track Volume (Historical)

| Period | Fast Track % | Trend | Analysis |
|--------|--------------|-------|----------|
| **February 19, 2026** | 17.24% | 🔴 **SURGE** | Policy violation |
| **March 5, 2026** | 3.96% | ✅ **CORRECTED** | Improved pipeline stability |
| **March 19, 2026** | 5.00% | ➡️ Stable | Manageable |
| **April 2, 2026** | **22.10%** | 🔴 **REGRESSION** | 458% increase |
| **April 16, 2026** | **2.61%** | ✅ **RECOVERED** | **88% reduction — below baseline** |

**Critical Insight:** The Fast Track surge (April 2: 22.10%) has been **dramatically corrected** (April 16: 2.61%). This is now **below the historical baseline** of 4-5%. Monitor sustainability over next 2-4 weeks.

---

### Shadow SDLC Pattern (Normal Planned %)

| Period | Normal Planned % | Trend | Analysis |
|--------|------------------|-------|----------|
| **February 19, 2026** | 66.67% | Baseline | Shadow SDLC identified |
| **March 5, 2026** | 65.00% | ⬇️ Slight improvement | Marginal progress |
| **March 19, 2026** | 55.56% | ⬇️ Significant improvement | 15-point drop |
| **April 2, 2026** | 64.71% | ⬆️ Regression | 16-point increase |
| **April 16, 2026** | **76.92%** | ⬆️ **Elevated** | 19% increase from April 2 |

**Insight:** Normal Planned % at 76.92% is the **highest observed in 3 months**. This pattern requires context analysis — is this increased proactive planning (positive) or pipeline adoption gap (process issue)?

---

### Risk Classification (Historical Trend)

| Period | Low Risk % | Medium Risk % | High Risk % |
|--------|------------|---------------|-------------|
| **April 2, 2026** | 76.4% | 19.1% | 4.5% |
| **April 16, 2026** | **84.8%** | **12.5%** | **2.7%** |

**Insight:** Risk classification shows **strong improvement** — 84.8% Low Risk concentration indicates mature change management and effective risk mitigation.

---

### Emergency Changes (Historical Trend)

| Period | Emergency Count | System-Wide Impact | Ring Distribution |
|--------|-----------------|---------------------|-------------------|
| **March 5, 2026** | 5 | 40% compliant | 1/1/3 (Recovery Bypass in GA) |
| **March 19, 2026** | 1 | 100% compliant | Conflicting data |
| **April 2, 2026** | 2 | Unknown | 0/1/1 (zero in ring=1) |
| **April 16, 2026** | **6** | **Validation needed** | 1/1/**4** (concentration in ring=3) |

**Insight:** Emergency volume at **6 RFCs is the highest in 3 months**. Additionally, **4 out of 6 executions in ring=3/ga** represents concentrated production risk. Post-mortem review required.

---

## **Summary: Process Health Assessment**

| Metric | Current Value | Change vs April 2 | Pattern |
|--------|---------------|-------------------|---------|
| **Fast Track Volume** | 2.61% | -19.49 pp (-88%) | High volatility: 5% → 22% → 2.61% |
| **Normal Planned** | 76.92% | +12.21 pp (+19%) | Highest in 3 months |
| **Incident-Driven RFCs** | 25.08% | -2.00 pp (-7%) | Consistent decline |
| **Risk Classification** | 84.8% Low | +8.4 pp (+11%) | Increased Low Risk % |
| **Emergency Volume** | 6 RFCs | +4 RFCs (+200%) | Highest in 3 months |
| **Ring=3/ga Volume** | 48 executions | +8 executions (+20%) | Inverted distribution persists |

**Overall Assessment:** **Pattern Changes Observed — Investigation Required**

The period shows **significant pattern changes** compared to April 2:

**Observed changes:**
- Fast Track: 22.10% → 2.61% (-88%)
- Normal Planned: 64.71% → 76.92% (+19%)
- Incident-Driven RFCs: 27.08% → 25.08% (-7%)
- Emergency volume: 2 → 6 RFCs (+200%)
- Risk Classification Low: 76.4% → 84.8% (+11%)

**Key unknowns:**
- **Fast Track volatility:** Why spike to 22.10% (April 2), then drop to 2.61% (April 16)?
- **Normal Planned increase:** Why highest rate in 3 months? Classification accuracy or automation gap?
- **Emergency concentration:** Why 6 RFCs with 4 in ring=3/ga? Incident-driven or process gap?

**Actions required:** Pattern validation, root cause investigation, and sustainability monitoring over next 2-4 review periods.

---

*Prepared by: Laura Ferreira, Process Engineering Team*
*Next Review: April 30, 2026*
