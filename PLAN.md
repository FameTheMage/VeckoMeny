# PLAN – VeckoMeny

Status: planen är godkänd 2026-11-10. Ingen kod är skriven än. Ett steg bockas av (`[x]`) i dess egen PR.

## Syfte
En enkel veckomenyplanerare för en familj. Fullstack: React (Vite) + Express (`/api`) + Postgres hos Supabase, en enda server. Projektet är också till för att lära sig, så varje steg förklaras (varför, kommando, hur man ser resultatet).

## Beslut
- **Hosting:** Render (alt. Railway) med One.com-domän pekad dit, eget sista steg (16). Koden ligger på GitHub. GitHub Pages används inte för appen (kan inte köra Express). Appen läser allt från miljövariabler, så det är lätt att byta värd senare.
- **Supabase:** ett projekt i början. dev/prod-uppdelning är en framtida förbättring. Utvecklingsdata kan nollställas.
- **Maträtter:** alla rätter sparas i listans rättsregister (`dishes`) och på dagen. Sid1 visar bara favoriter i högerlistan och föreslår rätter medan man skriver (från alla tidigare rätter). Sid2 visar alla rätter; stjärnan växlar favorit. Alla rätter kan ha ingredienser. Borttagning av rätt: fråga först, tas sedan bort även från alla veckor.
- **Inköpslista:** mängd är fritext, en rad per förekomst (ingrediens, mängd, dag, maträtt). Skrivskyddad, men med avbockning, utskrift och "kopiera som text".
- **Senaste vecka:** lagras per lista nu (`lists.last_week_*`). All läsning går via en enda funktion så att "per användare" (preferens) kan läggas till senare.
- **Vecka:** ISO-vecka + år, måndag först.
- **Ordning av favoriter:** upp/ner-knappar (drag-and-drop kan komma senare).
- **Session:** httpOnly-cookie, 30 dagar, förnyas vid användning (verifieras i steg 5).
- **Registrering:** öppen och utan e-postbekräftelse i fas 1–3 (tillfälligt). Bekräftelse slås på i steg 13/15.
- **Listnamn:** valfritt vid registrering (standard "Familjens veckomeny"), admin kan byta namn.
- **Superuser:** vanligt konto med flaggan `is_superuser`, satt manuellt i databasen. Har egen lista.
- **Tema:** ljus / mörk / enhetens inställning (standard), sparas i preferenser.
- **Extra:** kopiera föregående vecka (sid1), utskrift/kopiera + avbockning (sid3).
- **Kryptering:** e-post krypteras med AES-256-GCM + HMAC-SHA256 (`email_hash`) redan från steg 5. Lösenord hashas av Supabase Auth. Känd begränsning: Supabase sparar e-post i klartext i `auth.users`.
- **Design:** modern/futuristisk, mörkblå som i exempelbilderna. Skills: Frontend Design + UI/UX Pro Max. Mobil-först, inga sidledsscroll, stora knappar.
- **Språk:** UI på svenska och engelska (flaggor uppe till höger). Maträtter och ingredienser översätts inte.

## Steg
Varje steg = egen session, egen branch, en PR. Tester körs före PR.

### Fas 1 – Grund
- [x] **1. Repo:** git-repo + GitHub-repo, `.gitignore` (node_modules, dist, .env), `AGENTS.md`, `PLAN.md`, `.env.example`. *Klart när:* repot syns på GitHub med filerna.
- [x] **2. Server + CI:** Express + Vite middleware, tom React-sida, `GET /api/health`, första `node --test`, `.github/workflows/test.yml` (jobb `test`). *Klart när:* `npm run dev` visar sidan på http://localhost:3000, `npm test` är grön och Actions-körningen är grön.
- [x] **3. Ruleset:** ruleset för `main` via `gh api` (kommandot visas innan det körs): kräv PR, kräv kontrollen `test`, förbjud force push och borttagning. *Klart när:* direkt push till `main` nekas.
- [ ] **4. Databas:** Supabase-migrationer (alla tabeller utom `invitations`), RLS på, `supabase db push`, Supabase-klient, valideringsmodul (400 på svenska), låtsas-DB för tester. *Klart när:* tabellerna syns i Supabase med RLS på och testerna går utan nyckel.

### Fas 2 – Konto och sid1–3
- [ ] **5. Auth-API:** registrering (skapar lista + admin), inloggning/utloggning (cookie), `/api/me`, byte av lösenord, e-postkryptering, `last_login_at`. *Klart när:* registrering och inloggning fungerar med `curl`, e-post är oläsbar i tabellen.
- [ ] **6. Frontend-skal:** titel, favicon, header, login-/registreringspopup, flaggor sv/en (i18n), tema, rullgardinsmeny, responsiv grund. *Klart när:* språk och tema byts och sparas, ingen sidledsscroll på mobilbredd.
- [ ] **7. Rätter + ingredienser (sid2):** API + sida. *Klart när:* man kan skapa, byta namn, favoritmarkera, flytta och ta bort rätt (med fråga) samt hantera ingredienser.
- [ ] **8. Veckomeny (sid1):** API + sida med veckoväljare, dagfält, autoförslag, favoriter, sortering, ordning, X, kopiera föregående vecka. *Klart när:* en veckas meny finns kvar efter omladdning och ny inloggning.
- [ ] **9. Inköpslista (sid3):** sortering, skrivskyddad, utskrift/kopiera, avbockning. *Klart när:* listan matchar sid1 och sid2.

### Fas 3 – Sid4 och roller
- [ ] **10. Medlemmar (sid4):** lägg till (slumplösenord visas en gång), ta bort, admin på/av, lämna (transaktion med lås), preferenser, `audit_log` för adminåtgärder. *Klart när:* reglerna "minst en admin" och "lämna" ger svenska 400-meddelanden i tester och i appen.
- [ ] **11. Designpass:** Frontend Design + UI/UX Pro Max, mobiltest. *Klart när:* alla sidor ser rätt ut på 375 px och desktop.

### Fas 4 – Superuser, e-post, städning
- [ ] **12. Superusersida (sid5):** lista listor (namn, antal, skapad, inga e-postadresser), radera med namnbekräftelse, loggning. *Klart när:* en testlista raderas, loggpost skapas, vanliga konton får 403.
- [ ] **13. E-post:** Resend + DNS hos One.com (SPF/DKIM/DMARC), Supabase SMTP, bekräftelsemail, glömt lösenord (popup). *Klart när:* bekräftelse- och återställningsmail kommer fram och fungerar.
- [ ] **14. Inbjudningar:** `invitations`, token-hash, 7 dagar, återkalla, mail vid rollbyte/borttagning, superusers mail till admins. *Klart när:* inbjuden får länk giltig i 7 dagar, återkallad länk nekas.
- [ ] **15. Städning:** `pg_cron`-jobb (overifierade konton > 24 h, utgångna inbjudningar), e-postbekräftelse på. *Klart när:* jobbet syns i Supabase och gammal testdata försvinner.
- [ ] **16. Hosting:** Render + domän från One.com (instruktion skrivs i steget). *Klart när:* appen svarar med HTTPS på din domän.

## API (alla under `/api`)
Koder: 400 ogiltig indata (svenskt meddelande), 401 inte inloggad, 403 saknar behörighet, 404 finns inte, 409 krock, 500 serverfel. F4 = fas 4.

| Metod | Adress | Vad den gör | Koder |
|---|---|---|---|
| GET | `/health` | Statuskontroll | 200 |
| POST | `/auth/register` | Skapar konto + ny lista, kontot blir admin | 201, 400, 409 |
| POST | `/auth/login` | Loggar in, sätter cookie | 200, 400, 401 |
| POST | `/auth/logout` | Rensar cookie | 204 |
| POST | `/auth/forgot-password` (F4) | Skickar återställningsmail | 202, 400 |
| POST | `/auth/reset-password` (F4) | Sätter nytt lösenord med token | 200, 400 |
| GET | `/me` | Användare, roll, lista, preferenser | 200, 401 |
| PATCH | `/me/preferences` | Tema, språk | 200, 400, 401 |
| POST | `/me/password` | Byter lösenord | 204, 400, 401 |
| DELETE | `/me` | Lämna listan och radera kontot | 204, 400, 401 |
| GET | `/dishes?search=` | Alla rätter, eller förslag | 200, 401 |
| POST | `/dishes` | Skapar rätt | 201, 400, 401 |
| PATCH | `/dishes/:id` | Namn, favorit | 200, 400, 401, 404, 409 |
| GET | `/dishes/:id/usage` | Antal veckor rätten ligger i | 200, 401, 404 |
| DELETE | `/dishes/:id` | Tar bort rätt och dess dagar | 204, 401, 404 |
| PUT | `/dishes/favorites/order` | Sparar favoritordning | 204, 400, 401 |
| POST | `/dishes/:id/ingredients` | Ny ingrediens | 201, 400, 401, 404 |
| PATCH | `/ingredients/:id` | Ändrar namn/mängd | 200, 400, 401, 404 |
| DELETE | `/ingredients/:id` | Tar bort ingrediens | 204, 401, 404 |
| GET | `/weeks/:year/:week` | Veckans sju dagar | 200, 400, 401 |
| PUT | `/weeks/:year/:week/days/:weekday` | Sätter rätt (id eller ny text) | 200, 400, 401 |
| DELETE | `/weeks/:year/:week/days/:weekday` | Tömmer dag | 204, 400, 401 |
| POST | `/weeks/:year/:week/copy-previous` | Kopierar förra veckan | 200, 400, 401, 409 |
| GET | `/weeks/last` | Listans senast editerade vecka | 200, 401 |
| GET | `/weeks/:year/:week/shopping?sort=` | Inköpslista | 200, 400, 401 |
| PUT | `/weeks/:year/:week/shopping/checks` | Bockar av/på rad | 200, 400, 401 |
| GET | `/list` | Listans namn och info | 200, 401 |
| PATCH | `/list` | Byter listnamn (admin) | 200, 400, 401, 403 |
| GET | `/members` | Alla medlemmar i listan | 200, 401 |
| POST | `/members` | Lägger till användare (fas 1–3: slumplösenord) | 201, 400, 401, 403 |
| PATCH | `/members/:id` | Ger/tar bort admin | 200, 400, 401, 403, 404 |
| DELETE | `/members/:id` | Tar bort användare | 204, 400, 401, 403, 404 |
| GET/POST | `/invitations` (F4) | Lista / skapa inbjudan | 200/201, 400, 401, 403 |
| DELETE | `/invitations/:id` (F4) | Återkallar | 204, 401, 403, 404 |
| POST | `/invitations/accept` (F4) | Löser in token | 200, 400 |
| GET | `/superuser/lists` | Alla listor (namn, antal, skapad) | 200, 401, 403 |
| DELETE | `/superuser/lists/:id` | Raderar lista efter namnbekräftelse | 204, 400, 401, 403, 404 |
| POST | `/superuser/mail` (F4) | Mail till listornas admins | 202, 400, 401, 403 |

## Databas
RLS på alla tabeller, inga policys för `anon`/`authenticated`. Backenden använder den hemliga nyckeln; frontenden pratar bara med vårt API.

| Tabell | Kolumner |
|---|---|
| `lists` | id, name, last_week_year, last_week_number, created_at |
| `profiles` | id (= auth-användare), list_id, role (`admin`/`member`), is_superuser, email_encrypted, email_hash (unikt), preferences (jsonb: tema, språk), last_login_at, created_at |
| `dishes` | id, list_id, name, is_favorite, favorite_position, created_at. Unikt: list_id + namn (utan versaler) |
| `ingredients` | id, dish_id, name, amount (text), position |
| `menu_days` | id, list_id, year, week, weekday (1–7), dish_id (cascade), updated_at. Unikt: list_id+year+week+weekday |
| `shopping_checks` | list_id, year, week, weekday, ingredient_id, checked |
| `invitations` (F4) | id, list_id, email_encrypted, email_hash, token_hash, invited_by, expires_at, used_at |
| `audit_log` | id, actor_id, action, list_id, target_user_id, details (jsonb, inga e-postadresser), created_at |

## Regler för lämna/admin (steg 10)
- Admin lämnar och annan admin finns: kontot raderas, listan består.
- Ingen annan admin men andra medlemmar: 400 "Du kan inte lämna ännu. Gör först någon annan till admin, eller ta bort alla andra medlemmar."
- Inga andra medlemmar: lista och konto raderas.
- Allt sker i en databastransaktion med lås på listan. Samma regel gäller admin som vill sluta vara admin.

## Öppna punkter
- Steg 5: verifiera att 30 dagars session går att hålla med Supabase-gratisnivån (annars hanterar backenden cookien själv).
- Steg 14: verifiera Supabase-länkars giltighetstid; inbjudningar använder egen token.
- Framtid: dev/prod-projekt, "senaste vecka per användare" som preferens, drag-and-drop.
