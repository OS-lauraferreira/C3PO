# Google Calendar OAuth Setup

Este guia configura a integração Google Calendar API com autenticação OAuth para o skill `/calendar`.

## Passo 1: Criar projeto no Google Cloud Console

1. Abre https://console.cloud.google.com/
2. Clica em "Select a Project" → "New Project"
3. Nome: `C3PO Calendar Integration` (ou similar)
4. Clica "Create"

## Passo 2: Ativar Google Calendar API

1. No Console, vai a "APIs & Services" → "Library"
2. Procura por "Google Calendar API"
3. Clica no resultado
4. Clica "Enable"

## Passo 3: Criar OAuth 2.0 Credentials

1. Vai a "APIs & Services" → "Credentials"
2. Clica "+ Create Credentials" → "OAuth 2.0 Client ID"
3. Se pedido, configura "OAuth consent screen":
   - User Type: "External"
   - Preenche App name: "C3PO"
   - User support email: sua email
   - Developer contact: sua email
   - Clica "Save and Continue"
   - Em "Scopes", adiciona `https://www.googleapis.com/auth/calendar.readonly`
   - Clica "Save and Continue"
   - Review e "Back to Dashboard"

4. De volta a "Credentials", clica "+ Create Credentials" → "OAuth 2.0 Client ID"
5. Application type: "Desktop application"
6. Clica "Create"
7. Clica "Download JSON" (ou clica no ícone de download)

## Passo 4: Guardar Credentials

1. O JSON que fizeste download tem este formato:
```json
{
  "installed": {
    "client_id": "...",
    "client_secret": "...",
    "redirect_uris": ["http://localhost", ...]
  }
}
```

2. Guarda este ficheiro em:
```
C:\Users\User01\.claude\google-calendar-credentials.json
```

## Passo 5: Executar autenticação OAuth

No terminal, corre:

```bash
node "C:\Users\User01\Documents\5-Outsystems\koda\AI_Assistent\C3PO\.claude\scripts\setup-google-calendar-oauth.js"
```

Isto vai:
- Exibir um URL de autenticação
- Tu copias o URL no browser
- Fazes login com a tua conta Google
- Clicas "Allow" para autorizar acesso
- Copias o código exibido
- Colas no terminal quando pedido

O script vai guardar o token em:
```
C:\Users\User01\.claude\google-calendar-token.json
```

## Passo 6: Testar

Depois, testa com:

```bash
node "C:\Users\User01\Documents\5-Outsystems\koda\AI_Assistent\C3PO\.claude\scripts\get-calendar-events.js" 1
```

Isto deve listar os teus eventos de hoje.

## Passo 7: Usar no /calendar skill

Depois de configurado, o skill `/calendar` consegue aceder aos teus eventos automaticamente.

---

### Ficheiros gerados

- `~/.claude/google-calendar-credentials.json` — OAuth credentials (NÃO commitar para git!)
- `~/.claude/google-calendar-token.json` — Token de acesso (NÃO commitar para git!)

Estes ficheiros devem estar em `~/.claude/` (fora do repositório) por segurança.