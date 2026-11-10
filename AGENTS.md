# AGENTS.md – VeckoMeny

Projektets syfte är att jag ska **lära mig**. Håll denna fil kort och uppdaterad.
Status och nästa uppgift finns i `PLAN.md`: nästa obockade steg är nästa uppgift.

## Alltid
1. Språk: svenska.
2. Starta varje session med att läsa `PLAN.md`.
3. Arbetssätt: intervjua, fråga och föreslå förbättringar tills du vet vad jag vill ha. Gör steg-för-steg-instruktioner där varje steg kan bli en egen pull request. När allt är OK: uppdatera `PLAN.md`.
4. **Skriv ingen kod förrän jag har granskat och godkänt planen.** Undantag: små ändringar som stavfel.
5. Varje gång något ska göras: ge en plan med (a) kort varför, (b) exakta kommandon eller beskrivning av vad jag ska göra (t.ex. i GitHub), (c) kort beskrivning av hur jag ser vad det gjort.
6. Varje steg görs på en egen branch, aldrig direkt på `main`, och avslutas med en pull request som öppnas med `gh`. Testerna ska gå igenom innan PR öppnas. Committa och pusha bara när jag ber om det. Bocka av steget i `PLAN.md`.
7. Skriv alltid tester och kör alltid tester när något ändras (`node --test`).
8. Korta, konkreta kodkommentarer.

## Lärande (viktigast)
- Jag vill förstå git, databas, app-bygge, koppling och driftsättning. Förklara varje kommando kort (vad det gör, varför) och visa kommandona så att jag ser vad som händer.
- Korta, konkreta kommentarer och instruktioner. Inga långa utläggningar.
- Efter varje merge: städa lokalt (`git switch main`, `git pull`, `git branch -d <gren>`) och förklara stegen.

## Hemligheter
- Nycklar ligger i `.env`. `.env` och `SECRETS.secrets` ska stå i `.gitignore` (tillsammans med `node_modules` och `dist`).
- Be mig aldrig klistra in nycklar i chatten. Läs inte `SECRETS.secrets`.

## Beslut att hålla sig till (detaljer i `PLAN.md`)
- Fullstack i en server: Express (`/api`) + React/Vite, `npm run dev` på http://localhost:3000. Frontenden pratar bara med vårt API, aldrig direkt med Supabase.
- Supabase Postgres (ett projekt tills vidare), migrationer i `supabase/migrations`, RLS på alla tabeller.
- E-post krypteras (AES-256-GCM + HMAC-hash), lösenord hanteras bara av Supabase Auth.
- Inget e-postutskick före steg 13; fram till dess är registreringen öppen utan bekräftelse.
- Hosting: Render + domän hos One.com (steg 16). Appen läser allt från miljövariabler.
- API-fel: 400 med tydligt svenskt meddelande. UI på svenska och engelska.
- Design: modern/futuristisk, mobil-först (skills Frontend Design + UI/UX Pro Max). Exempelbilder finns i `Examples/`.

## Test och CI
- Testerna mockar databasen och ska gå utan nyckel.
- Workflow `.github/workflows/test.yml` har jobbet `test`; rulesetet för `main` kräver det.
