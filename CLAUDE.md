# Security Checkup – ShiftSync

## Codewort: `checkup`

Wenn der User das Wort **checkup** schreibt, führt Claude Code sofort und vollständig die folgende Security-Routine durch — ohne Rückfragen, ohne zu überspringen.

---

## Was beim Checkup passiert

### 1. API-Routen – Auth & Autorisierung

Jede Datei unter `app/api/` wird geprüft auf:

- Fehlendes `supabase.auth.getUser()` vor DB-Zugriffen
- Fehlende `.eq('companyId', callerProfile.companyId)` bei Multi-Tenant-Queries
- Fehlende Rollen-Checks (`MANAGER` / `ADMIN`) bei sensitiven Endpunkten
- Endpunkte die Daten zurückgeben ohne den Aufrufer zu verifizieren (IDOR)

### 2. Middleware – Paywall & Route-Schutz

`middleware.ts` prüfen auf:

- Alle neuen Routen in `PUBLIC_PATHS` oder `PAYWALL_EXEMPT` — sind sie wirklich öffentlich/exempt?
- Paywall greift auf API-Routen mit Status 402 (nicht nur auf Seiten)
- Kein unbeabsichtigter öffentlicher Zugriff auf neue `/api/`-Pfade

### 3. Krypto & Secrets

- `lib/stempel-pin.ts` — `encryptPin` verwendet AES-256-GCM (v2:-Prefix), kein CBC mehr für neue Werte
- Keine Secrets, API-Keys oder Tokens im Sourcecode (nur in env vars)
- `STEMPEL_KEY`, `STRIPE_SECRET_KEY`, `SUPABASE_SERVICE_ROLE_KEY` etc. nie in `.ts`-Dateien

### 4. Rate Limiting

`lib/rate-limit.ts` prüfen:

- Upstash Redis konfiguriert? Wenn nicht — CRITICAL im Log
- Alle Auth-Endpunkte rate-limitiert (login, signup, reset, invite, PIN)
- Stempeluhr-Endpunkte: IP-Level + Per-Device-Limit vorhanden

### 5. Eingabe-Validierung

- Alle neuen API-Routen verwenden Zod-Schemas für Body-Parsing
- Keine direkte Verwendung von `req.body` ohne Validierung
- Kein `dangerouslySetInnerHTML` in neuen Komponenten
- Kein `eval()`, `Function()`, `child_process` im Code

### 6. Datenbank-Queries

- Alle Supabase-Queries parametrisiert (kein String-Concatenation in `.filter()`)
- Neue Tabellen: haben sie RLS-Policies? (Referral, etc.)
- Neue Prisma-Modelle: unique constraints wo nötig?

### 7. Stripe-Webhook

`app/api/stripe/webhook/route.ts`:

- `stripe.webhooks.constructEvent()` wird VOR jeder Verarbeitung aufgerufen
- Kein Early-Return der die Signaturprüfung überspringt

### 8. Cron-Endpunkte

Alle Dateien unter `app/api/cron/`:

- `Authorization: Bearer ${CRON_SECRET}` check am Anfang jeder Route
- Kein öffentlicher Zugriff ohne Token

### 9. Frontend / Client-Components

- Keine sensitiven Daten in `searchParams`, `localStorage` (außer Device-Token)
- Keine Client-seitigen Auth-Guards als einzige Sicherheitsebene
- Server Actions haben eigene Auth-Checks

### 10. CSP & Security-Header

`middleware.ts` — `buildCsp()`:

- `frame-ancestors 'none'` gesetzt
- `script-src` nur mit Nonce und bekannten CDNs
- Neue externe Domains in `connect-src` oder `frame-src` eingetragen?

---

## Ablauf des Checkups

1. **Explore-Agent starten** — scannt alle `app/api/`, `lib/`, `middleware.ts`, `components/` auf obige Punkte
2. **Befunde klassifizieren** — CRITICAL / HIGH / MEDIUM / LOW
3. **Fixes direkt umsetzen** — keine langen Erklärungen, direkt beheben
4. **Verification** — TypeScript-Check (`npx tsc --noEmit`) muss sauber durchlaufen
5. **Auf "upload" warten** — dann committen und pushen

---

## Wann checkup ausführen

- Nach jedem größeren Feature-Merge
- Nach neuen API-Routen
- Nach Änderungen an Auth-Logik, Middleware oder Krypto
- Vor Demo-Calls oder öffentlichen Launches
- Auf direkten Befehl: **checkup**

---

## Bekannte Baseline (Stand: Juni 2026)

Diese Punkte sind bereits korrekt implementiert und müssen nur auf Regression geprüft werden:

| Bereich | Status |
|---|---|
| AES-256-GCM für PIN-Verschlüsselung | ✅ v2:-Prefix aktiv |
| Referral-Duplikat-Schutz | ✅ maybeSingle + 23505-Catch |
| Device-Token-Prefix (O(1) bcrypt) | ✅ tokenPrefix-Spalte + Index |
| Upstash Redis Rate Limiting | ✅ in Vercel konfiguriert |
| Invite-Token atomic claim | ✅ UPDATE WHERE acceptedAt IS NULL |
| Paywall auf API-Routen | ✅ 402 JSON response |
| Stripe-Webhook Signatur | ✅ constructEvent vor Verarbeitung |
| HMAC-Cookie für Stempeluhr | ✅ timingSafeEqual |
| CompanyId-Scoping alle Queries | ✅ |
| Zod-Validierung alle API-Inputs | ✅ |
