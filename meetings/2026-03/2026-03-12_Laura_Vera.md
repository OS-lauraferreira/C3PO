# Laura / Vera — 1:1 Sync
**Date:** Thursday, March 12, 2026
**Time:** 09:00–09:30
**Attendees:** Laura Ferreira, Vera

---

## Claude — Framework & Automation

- **Framework reviewers** — Review Vera's metrics
  - Assess current state of reviewer framework
  - Evaluate parameters for CAB empowerment

- **Skill & Automation Potential**
  - Parameters to evaluate for automation opportunities
  - Next step: Analyze and present to VS Leaders
  - Show impact: "This change with this risk level..."

- **Article Catalog Jira**
  - Organize Jira catalog
  - Structure to support SMART objectives

---

## Internal Processes

### Jira Boards & Project Management
- Define operational system for Jira board management
- Current state: Document how we manage our page/board structure
- **Process rule for new Jira projects:**
  - When new project/board needed → Create Epic
  - Test in Demo environment
  - Validate before Production
  - Document these rules as standard governance

### V2MOM Clarification
- **Retros and CABs removed from V2MOM**
  - Not new initiatives
  - These are daily operational work
  - Continue as BAU (business as usual)

---

## Action Items

- [ ] **Create Epic** — Jira Board Management (Demo vs Prod governance)
- [ ] Review framework reviewer metrics with Vera
- [ ] Organize Article Catalog structure in Jira
- [ ] Document Jira project creation process/standards

---

## Context from Vera (Previous Sessions)

### Method 2 Strategic Focus

**Catalog Centralization (Core Problem)**
- Currently: 227 distinct operations identified + 106 operations still unidentified
- Challenge: Teams executing manual changes outside the certified pipeline → uncontrolled change flow
- Solution: Organize and centralize catalog of operations to enforce pipeline compliance

**Change Process Issues**
- Control only extends to approval stage; lose visibility on whether changes were actually implemented
- Need: System to force transition to implementation and collect evidence of execution
- Segregation of rights/duties: Reviewers cannot be from requesting team

**Reviewers Framework Gap**
- Need independent reviewer structure separate from requesters
- Approval hierarchy: Requesters → Area leaders → Independent reviewers
- Current state: Retros & CABs not in V2MOM because they're daily BAU (business as usual)

### Change Types & Risk Levels
- **Emergency:** High risk, hierarchical approval only, no CAB review
- **Standard:** Low risk, auto-approved
- **Normal:** Minimal risk, requires approval via catalog articles

### Metrics Foundation
- **Change Failure Rate (CFR)** — part of DORA Framework
- Current state: System cannot accurately measure CFR due to incident/deployment confusion
- Next: Deployment Failure Reporting project will separate pipeline failures from real incidents

### Ring Architecture & Impact
- Multiple geographic regions: London, Asia, Israel, Canada
- Ring 3 (Production): 99.9% SLA = 43 minutes max downtime/month
- Multi-tenant infrastructure: Changes impact all customers

---

## Notes

Define smart objectives and automation parameters. Focus on creating frameworks that empower reviewers while reducing manual overhead.

Key insight from Vera: The core blocker is catalog centralization and pipeline compliance enforcement. Once the catalog is organized, the reviewer framework and approval automation can be built on that foundation.

