# Change Management - Reviewers Framework Meeting
**Data:** Quarta-feira, 22 de abril de 2026, 11:00–11:45  
**Participantes:** Laura Ferreira, Vera Branco, Thiago (especialista externo)  
**Objetivo:** Apresentar M2.2 Reviewers Framework para feedback e validação

---

## Resumo Rápido para Apresentação

### O Problema que Estamos a Resolver

Os Revisores CAB hoje não têm um processo estruturado:
- Não há perguntas padrão a fazer antes de aprovar mudanças
- Existem Decisões inconsistentes entre reviewers
- Temos RFCs com informação crítica em falta (rollback, testes, scope)
- Botlenecks de aprovação por idas e vindas para clarificações
- Segregação de funções aplicada, mas qualidade de revisão varia

**Impacto:** Aprovações lentas, avaliação de risco inconsistente, maior Change Failure Rate

---

### A Solução: Framework de Perguntas de Revisão Estruturadas

Em vez de focar em *quem* revê (já governado), focar no **que** os reviewers devem validar.

**Princípio Base:** Cada reviewer responde a uma checklist padrão baseada no tipo de mudança. Se alguma pergunta não pode ser respondida → RFC NÃO está pronto para aprovação.

---

### Estrutura do Framework

#### 1. Perguntas Core (Q1-Q6) — Todos os Tipos de Mudança

Cada RFC deve responder a estas 6 perguntas:

| # | Pergunta | Propósito |
|---|----------|-----------|
| Q1 | A segregação de funções está satisfeita? | Controlo de governança |
| Q2 | Qual é a justificação de negócio? | Contexto da mudança |
| Q3 | Qual é o blast radius se falhar? | Avaliação de risco |
| Q4 | Existe um plano de rollback? | Rede de segurança |
| Q5 | Que testes foram feitos? | Validação de qualidade |
| Q6 | Quando é a janela de mudança? | Conflitos de timing |

**Regra de Decisão:** Se alguma pergunta core não pode ser respondida → Pedir modificações ou rejeitar

---

#### 2. Normal Changes (N1-N8) — 8 Perguntas Adicionais

Para mudanças de infraestrutura/configuração planeadas:

| # | Pergunta | O Que Procurar |
|---|----------|----------------|
| N1 | Que artigo do RFC Catalog se aplica? | Referência ao runbook |
| N2 | Qual é o Operation Type? | Um dos 26 tipos documentados |
| N3 | Que sistemas/serviços são afetados? | Scope claro (não vago) |
| N4 | Qual é o downtime esperado? | Estimativa ou zero |
| N5 | Que testes foram feitos em non-prod? | Validação em staging |
| N6 | Qual é a complexidade do rollback? | Revert simples vs irreversível |
| N7 | Qual é o deployment ring? | Ring 0/1 antes de Ring 3 |
| N8 | Quem validou o plano de mudança? | Sign-off de technical review |

**Aprovação:** Todas as 6 core + 8 Normal respondidas → Aprovar

**Rejeitar se:** Sem artigo de catálogo, sem testes, Ring 3 sem Ring 0/1

---

#### 3. Standard Changes (S1-S5) — 5 Perguntas Simplificadas

Para mudanças de baixo risco, repetíveis, baseadas em catálogo:

| # | Pergunta | O Que Procurar |
|---|----------|----------------|
| S1 | Que artigo do RFC Catalog está a ser seguido? | Runbook exato + versão |
| S2 | Todos os pré-requisitos do catálogo estão cumpridos? | Checklist completa |
| S3 | Esta mudança está dentro dos parâmetros do catálogo? | Sem desvios |
| S4 | Este procedimento teve sucesso antes? | Taxa de sucesso >95% |
| S5 | Está a ser usada automação? | Execução automatizada |

**Elegível para Auto-Aprovação:** Se catálogo existe, pré-requisitos cumpridos, histórico >95% sucesso, sem desvios

---

### Controlo de Governança Chave: Segregação de Funções

**Regra:** reviewers DEVEM vir de fora da Value Stream da equipa que pede

**Porquê:** Previne conflitos de interesse, garante revisão independente, mantém conformidade de auditoria

**Automação:**
- Extrair equipa/Value Stream do requester dos metadados RFC
- Auto-atribuir revisor de Value Stream diferente
- Rejeitar se não houver revisor independente disponível

**Exemplo:**
- ✅ Requester: Platform VS → Reviewer: Database VS (aprovado)
- ❌ Requester: Platform VS → Reviewer: Platform VS mesma equipa (rejeitado)

---

### Emergency Changes → Movido para M3 (Inês)

Emergency changes (SEV1, SEV2, incidentes de produção):
- NÃO seguem o processo de revisão CAB
- Aprovação hierárquica apenas (Requestor → Area Lead)
- Post-incident review obrigatório
- Conteúdo do framework movido para capítulo M3 separado (Inês é dona de Emergency Response)

**Razão:** Emergency changes fazem bypass do CAB por design, não encaixam no reviewer framework

---

## O Que Procuro Desta Reunião

### Da Vera:
- Validação de que isto resolve o problema de bottleneck de aprovações
- Feedback sobre as perguntas (demasiadas? poucas?)
- Alinhamento com operações CAB atuais

### Do Thiago:
- O que funcionou/falhou noutros reviewer frameworks que implementaste?
- Há armadilhas comuns que devemos evitar?
- Sugestões sobre abordagem de rollout faseado
- Como treinar reviewers eficazmente?

### Questões Em Aberto:
1. **Abordagem de rollout:** Piloto com top 3 Normal operation types primeiro, ou tudo de uma vez?
2. **Treino:** Formato workshop? Job aids? Embebido no Jira?
3. **Automação:** Quanto podemos automatizar (check Q1 segregação, check Q6 freeze period)?
4. **Métricas:** Como medimos sucesso? (Tempo de aprovação, CFR, satisfação dos revisores?)

---

## Próximos Passos (Se Aprovado)

**Fase 1 (Maio 2026):** Piloto com top 3 Normal operation types (15 RFCs)
**Fase 2 (Junho 2026):** Refinar perguntas baseado em feedback do piloto
**Fase 3 (Julho 2026):** Rollout completo com treino de revisores
**Fase 4 (Ongoing):** Monitorizar tempo de aprovação, CFR, iterar trimestralmente

---

## Referências

- **Ficheiro local:** [M2.2_reviewers_framework.md](../../initiatives/active/M2.2_reviewers_framework.md)
- **Confluence:** RSA-813 - M2.2 - Reviewers framework
- **Jira:** RSA-813 (M2.2 initiative)
- **Related:** [Method_2_Metrics_Analysis.md](../../initiatives/active/Method_2_Metrics_Analysis.md)

---

*Meeting prep criado: 2026-04-22*
