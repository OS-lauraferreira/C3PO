# Preparação 1:1 — Laura & Vera — RESUMO
**Data:** 9 de Abril de 2026, 15:00–15:30

---

## Tasks Principais

### 1. M2.1 Operation Types — Apresentação ao Brandão (Amanhã)

**O que apresentar:**
- **26 Operation Types identificados:**
  - 6 Standard
  - 20 Normal (dos quais 10 são Normal exclusive)
- Análise de overlaps entre Standard/Normal
- Deep dive das top 3 Standard (Service Restart; Secrets Rotation; Feature Flag Configuration)

**Próximos passos:**
- Deep dive nas top 3 Normal operation types com mais volume de RFCs
- Análise de runbooks e consolidação:
  - Aplicar os 3 níveis de classificação de runbooks (da análise anterior) aos runbooks encontrados nesta nova análise
  - Validar duplicados e mapear para consolidação

**Ask ao Brandão:**
- Validação da análise
- Aprovação para avançar com deep dive das top 3 Normal

---

### 2. M2.2 Framework Reviewers — Nova Abordagem

**Pivot:**
- ❌ **Antes:** Estrutura de equipas de revisores (três níveis: Junior/Senior/Lead)
- ✅ **Agora:** Processo de revisão padronizado — framework de perguntas de revisão

**O que mudou:**
- Em vez de definir níveis de revisores, definimos **checklists de perguntas** por tipo de mudança:
  - **Core Questions (Q1-Q6):** Todas as mudanças (segregação de funções? justificação? blast radius? rollback? testes? timing?)
  - **Emergency (E1-E6):** 6 perguntas específicas
  - **Normal (N1-N8):** 8 perguntas específicas
  - **Standard (S1-S5):** 5 perguntas específicas

**Porquê funciona:**
- Não precisa de reestruturar equipas
- Padroniza como os revisores avaliam mudanças
- Claro para requesters (sabem o que incluir)
- Conectado ao M2.1 (26 operation types mapeiam para critérios de revisão)

**Próximos passos:**
- **Hoje (15:00) com Vera:** Preview do pivot, alinhamento sobre abordagem
- **16 Abril:** Apresentação formal à Vera para aprovação
- **Depois:** Piloto com top 3 Normal operation types (15 RFCs, 2 semanas)

**O que preciso da Vera hoje:**
- Alinhamento sobre a abordagem de perguntas de revisão
- Validação do plano piloto
- Feedback sobre apresentação de 16 Abril

---

### 3. Pitch — Slides 7 e 8

**Apresentação:** 14 de Abril às 11:00  
**Avaliador:** Brandão

**Objetivo:**
Saber apresentar o produto da empresa a um possível cliente

**Task:**
- Ler deck de apresentação: [Google Slides](https://docs.google.com/presentation/d/1WBVJLqNT9FWi1pQDaokJeomiFAGGATAWpeE2xusegm0/edit?slide=id.g3b4bdf86d9a_28_0#slide=id.g3b4bdf86d9a_28_0)
- Preparar slides 7 e 8
- Praticar apresentação

---
### 4. Ops review
Pediram para analisar o **motivo dos fast tracks:** Provide additional analysis on RFC numbers, maybe rationales with Release Freeze, or delivery timelines -- ver confluence ops review 2 april

---
### 5. Rever jira tickets
Rever os meus tickets no jira board de equipa para organizar conforme V2MOM Method 2

---
### 6. Incident Jira board Demo vs Production
O Luís colocou o JSP Blocked e pediu para segurar este pedido aberto mais uma semana (se nos causava muito impacto) e depois dar à nova pessoa que veio substituir a Kinga porque me pareceu-lhe ser bom para ele ter que analisar o que está montado.


---

## Documentos de Suporte

- [M2.2_reviewers_framework.md](../initiatives/active/M2.2_reviewers_framework.md) — framework completo reformulado
- [M2.1_Operation_Types_Analysis.md](../initiatives/active/M2.1_Operation_Types_Analysis.md) — análise de operation types

---

*Preparado: 9 de Abril de 2026*
