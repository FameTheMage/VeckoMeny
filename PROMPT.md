Jag vill bygga en enkel Veckomeny planerare för familjen: en webbapp med en egen backend och databas, så att alla kan logga in, se och editera veckomeny. Planera bara, skriv ingen kod än.


#Funktioner övergripaned
- Man skall kunna logga in i appen och då få den gemensama veckolpaneringen
- Man skall kunna planera veckans meny genom att skriva in maträtter eller välja från favoriter för varje dag i veckan.
- Man skall ha möjligheten att man kan lägga in ingridienser kopplat till en maträtt
- Man skall kunna få ut en lista med alla ingridienser som behövs för en vecka.
- Administrera användare
- Till varje konto har man exakt en veckomeny
- Det finns tre roller på sajten: anmvändare på en veckomeny,  administratör per veckömeny, och en superanvändare för hela sajten, som är sajtens ansvarige.

# Huvudsidor:
- Det skall finnas 4 stycken delar i applikationen samt en 5:e sida för Siteadministratör/Superuser:
- sid1: Huvudsida med val av vecka, veckodagarna måndag till söndag, fält för varje dag där maträtt kan skrivas in. Samt sparade favoriter som kan väljas till den dag man har markerat
- sid2: Editerasida för att kunna editera maträtter och till varje maträtt lägga in en lista på ingridienser
- sid3: Inköpssida för inköp att visar alla maträtter samt alla ingredienser för en specifik vecka
- sid4: Adminsida där man kan lägga till användare (email) till personer man delar listan med och som också kan editera meny och ingridienser
- sid5: Superusersida för Siteadministratör skall ha möjlighet att gå in och tabort menyer och då alla användare kopplad till denna meny. Detta för att ha möjlighet tabort knoto och menyer om siten anvens på ett otilbörligt sätt.


# Almäna funktioner:
- Ge appen en tydlig titel, en favicon. När man trycker på titeln kommer man till Huvudsidan (sid1)
- Högst upp skall det finnas knap för att kunna logga in eller registrera sig. Trycker man på den får man popup för att logga in eller registrera sig. MAn skall även ha möjlighet att klicka på glömt lösenordet.
- Om man klickar på glömt lösenord får man popup att skriva in sin email, när man trycker OK en bekräftelse på att återställnings mail har skcikats.
- Det skall finnas små flaggor uppe till höger där man byter språk
- I inloggat läge får man dropdown meny för att kunna komma till respektive sida Huvudsida (sid1), Editerasida (sid2), Inköpssida (sid3) och Adminsida (sid4)
- Användare skall kunna logga in och då få sin veckomeny senast editerade vecka

## Funktioner Huvudsida (sid1)
- Exempel på sidan finns i bild .\Exempel\Huvudsida (sid1).JPG
- Man skall kunna välja vecko nummer
- När man valt vecka skall sparad meny komma up. Blankt om det inte finns någon
- Till höger skall det finnas favoriter
- En dag som inte har någon maträtt definerad skall inte ha favorit- eller tabort markering "X", de Lördag (Lör) som exempel i bilden
- Om man trycker på ta bort "X" på en dag så tas matraätten bort direkt för den dagen
- Man markera en dag och antingen skriva in en maträtt eller välja en från favoriter genom att klicka på dessa
- Favoriter skal vara markerade om det finns en definerad maträtt för en dag
- När man skriver in NY maträtt skall man kolla om den redan finns som favorit, om så skall favoritmarkering komma, om inte skall det vara möjligt att markera den som favorit. Då sparas detta direkt
- Favoriter skall kunna vara sortera efter, bokstavsordning, favoritordning
- När sortering är i favoritordning så kan man ändra ordningen och då skall detta sparas

## Funktioner Editerasida (sid2)
- Exemple på sidan finns i bild .\Exempel\Editerasida (sid2).JPG
- Man skall kunna välja en Favorig maträtt från listan och då blir den markerad
- För en markerad favoritmaträtt listas alla ingridiense och eventuell mängd till höver
- Man skall kunna ändra namnet på Favorit maträtten genom att klicka på den
- Man skall kunna ta bort en markerad favorit, om man gör detta skall man få fråga om man verkolkgen vill ta bort
- Man kan ändra en ingrediens namn och mängd genom att klicka och skriva
- Man kan lägga till en ny ingridiens och dess mängd genom att klick på nedersta lägg till
- Man kan ta bort en ingrediens genom att klicka på "X"
- Endast vald maträtt har ta bort markening "X"

## Funktioner Inköpssida (sid3)
- Exemple på sidan finns i bild .\Exempel\Inköpssida (sid3).JPG
- När man kommer in väljs senast editerade vecka
- Man skall kunna välja en vecka
- Sidan listar alla ingredienser för en vecka
- För varje ingrediens kan får man mängd, vilken dag, vilken rätt den tillhör
- Man kan sortera på, ingrediens, dag, maträtt
- Man kan inte editera i denna vy

## Funktioner Adminsida (sid4)
- Exemple på sidan finns i bilder
--  .\Exempel\Adminsida-administratör (sid4).JPG
--  .\Exempel\Adminsida-användare (sid4).JPG
- När man kommer in på sidan listas personen som är inloggad samt samtilga personer som tillhör gruppen
- Man kan ta bort en användare, om man klickat på detta får man fråga om man vill tabort
- Den första personen som loggat in och skapat menysidan är automatiskt administratör

- Alla användare kan se alla andra användare
- Alla användare kan ändra sitt lösenord
- Alla användare skall kunna ändra sina preferencer
- Alla användare kan lämna VeckoMenyn. Om man trycker på detta får man fråga om man verkligen vill lämna J/N. Om man trycker Ja så får man information om att all information om användaren kommer att raderas vill du lämna J/N
- OBS det ska alltid finnas minst en admin så länge det finns användare. Om det bara finns en administrator så måste den göra någon annan till admin först innan den kan lämna

- Administratör kan 
-- göra användare till administratör eller ta bort administratörsrättigheterna, om rättigheter ändras skall informations mail skciaks 
-- ta bort en användare, om detta görs så får man fråga J/N och information att email kommer skcikas till den borttagna personen.
---- Observera, om personen man skall ta bort aldrig varit inloggad får man istället denna information och inget email skickas
-- lägga till en Ny användare, om detta görs får man en fråga J/N och information att email kommer skicas till personen

## Funktioner Superusersida (sid5)
- Siteadministratör skall kunna få upp en lista på samtliga menyer som finns upplagda
- Siteadministratör skall kunna skicka mail via appen till Adminsistratörerna för en veckomeny
- Siteadministratör skall kunna ta bort en veckomeny, görs detta skall meny samt alla konotn kopplade till denna tas boort


# Krav
- Veckomeny skall kunna delas mellan flera användare om man är inloggad
- Till varje konto tillhör exakt en veckomeny
- Senaste inloggningen datum och tid för en användare lagras
- Det skall finnas användare preferences lagrade, tex om man vill ha ljus eller mörk bakgrund
- Password skall vara krypterade och ingen skall kunna läsa dessa
- Email adresser skall vara krypterade i databasen, men skall kunna avkrypteras av applikationen för varje unki VeckoMeny
- Det skall vara en Application som publiceras på GitHub Pages.
- Applikationen ska fungera lika bra på mobil som på dator: responsiv layout, knappar som är lätta att träffa med fingret och ingen sidledsscroll.
- Ny förstagångs användare skall få mail där man måste bekräfta sitt email
- Användare som läggs till får ett mail med länk till sidan, med uppmaning att logga in
- I databasen skall det finnas en logg med samtliga administratörs förändringar

# Begränsnignar
- En Användare och administratör kan endast ha tillgång till en VeckoMeny, det skall vara en simpel app för en familj

# Teknik och kod:
- En fullstack-app: frontend, backend och databas i samma projekt, och en enda server som skickar både sidorna och API:et på samma adress.
- Backend: Node.js med Express och ett REST-API under /api.
- Databas: Postgres hos Supabase. Jag har skapat ett projekt och loggat in med supabase login. Tabellerna skapas som migrationer i mappen supabase/migrations och skickas till projektet med supabase db push. Slå på Row Level Security på alla tabeller.
- Backenden pratar med Supabase med paketet @supabase/supabase-js och den hemliga nyckeln. Nyckeln och projektets adress ligger i .env, som inte får in i Git. Jag klistrar in nyckeln själv, be mig aldrig om den i chatten. Frontenden pratar bara med vår egen backend.
- Backenden kontrollerar all data som kommer in och svarar med 400 och ett tydligt felmeddelande på svenska om något är fel.
- Frontend: React med JavaScript. Under utveckling kör Express Vite i middleware-läge, så att allt går på samma server. När appen byggs skickar Express ut de färdiga filerna.
- Vid registrering utan inbjudan skapas en ny lista, och kontot blir admin för den. Ett overifierat konto raderas automatiskt efter 24 timmar av ett schemalagt jobb.
- Vid "Glömt lösenord" skickar Supabase ett återställningsmail. Användaren får en ny länk och kan sätta nytt lösenord.
- Inloggade sessioner hanteras med cookies. Backenden sätter en cookie med flaggan httpOnly, så att JavaScript i sidan inte kan läsa den. Sessionens livslängd sätts vid implementationen.
- npm run dev ska starta hela appen på http://localhost:3000.
- Tester för API:et med Nodes inbyggda testverktyg (node --test). Testerna byter ut databasen mot en låtsasversion, så att de inte rör Supabase och kan köras utan nyckel. Ett GitHub Actions-workflow kör testerna på varje pull request.
- Applikationen skall vara både på svenska och engelska och det skall finnas små flaggor uppe till höger där man byter språk
- Design: skall vara modern och futuristisk, använd skills Frontend Design and UI/UX Pro Max.
- Lägg till en .gitignore som utesluter node_modules, dist
- Lägg till filen AGENTS.md och håll denna uppdaterad
- Lägg till filen PLAN.md och håll denna uppdaterad
- Jobba alltid på en ny branch, aldrig direkt på main.
- Koden skall innehålla korta konkreta kommentarer så att det är lätt att läsa och lära sig.
- Skriv alltid tester och kör altid tester när något ändras
- Lägg till några enkla tester för appen, så att vi märker om något går sönder.
- Lägg också till ett GitHub Actions-workflow i .github/workflows/test.yml som kör testerna på varje pull request. Jobbet ska heta test. 
- Kör testerna innan du öppnar en pull request. De ska gå igenom.
- Skapa ett ruleset för main med gh api: kräv pull request, kräv att kontrollen test har gått igenom, och förbjud force push och borttagning. Visa kommandot innan du kör det.


## Övrig funktionalitet - förslag som kan förbättras
### Kryptering av e-post och lösenord
Lösenord hashas av Supabase Auth med bcrypt. Hashen går inte att återskapa, och ingen, inte ens backenden, kan läsa lösenordet.
E-postadressen måste kunna läsas av appen, så den krypteras med AES-256-GCM i en egen tabell. Krypteringsnyckeln EMAIL_ENCRYPTION_KEY ligger i .env, skild från Supabase-nyckeln.
För att kunna söka på e-post utan att läsa den sparas också en HMAC-SHA256-hash av den normaliserade adressen i kolumnen email_hash, med ett unikt index. Hashen används för inbjudningar och för att kontrollera om en adress redan är med i en lista. Nyckeln EMAIL_HASH_KEY ligger också i .env.
Känd begränsning: Supabase Auth sparar e-postadressen i klartext i sitt eget schema auth.users, eftersom inloggningen kräver den. Den krypterade kopian skyddar därför inte mot en läsning av auth.users. Det är ett beslut som togs i valet av Supabase Auth.


### Adminregler, lämna lista och superanvändare
Regeln är att en veckomeny med medlemmar alltid ska ha minst en admin.
En admin som vill lämna appen (vilket raderar det egna kontot):
1. Om det finns en annan admin i veckomenyn: kontot raderas, och listan och övriga medlemmar finns kvar.
2. Om det inte finns någon annan admin, men det finns andra medlemmar: begäran nekas med status 400 och ett svenskt meddelande som beskriver vad som krävs. Till exempel: "Du kan inte lämna ännu. Gör först någon annan till admin, eller ta bort alla andra medlemmar."
3. Om inga andra medlemmar finns: veckomenyn och kontot raderas, inklusive all information i listan.
Kontrollen görs i en databastransaktion med lås på listan, så att två samtidiga lämningar inte kan lämna listan utan admin.
En admin som vill sluta vara admin utan att lämna följer samma regel.

### Listor, roller och inbjudningar
En användare tillhör exakt en lista, och en e-postadress kan bara vara medlem i en lista. Tabellen lists innehåller listorna. Tabellen profiles innehåller medlemskapet, rollen (admin eller member) och den krypterade e-postadressen.
Alla medlemmar i en lista ser vilka andra som är med, inklusive e-postadresser.
Inbjudan:
- En admin anger en e-postadress och skickar inbjudan.
- Om adressen redan är medlem i en lista nekas inbjudan med ett svenskt felmeddelande och status 400.
- Inbjudan gäller i 7 dagar. Därefter är länken ogiltig, och admin kan skicka en ny.
- Om mottagaren saknar konto skapas kontot via Supabase Auth. Att klicka på länken räknas som bekräftelse av e-postadressen.
- Admin kan se och återkalla väntande inbjudningar.
- Inbjudningar lagras med en hash av token, inte token i klartext.
Om en admcin tar bort en användare: kontot raderas helt, inklusive all information som hör till det.

### Superanvändare (sajtens ansvarige):
- Rollen sätts bara manuellt i databasen, inte i gränssnittet.
- Superanvändaren kan radera en hel lista. Alla medlemmar i listan och deras konton raderas.
- Superanvändaren ser listnamn, antal medlemmar och skapad-datum, men inte e-postadresser.
- Radering kräver att man skriver listans namn för att bekräfta.
- Varje gång superanvändaren raderar något skrivs en loggpost med vem, vad och när.
- Lösenord kan ingen läsa, inte heller superanvändaren.

### Städning, e-postutskick och loggning
Städning: Ett schemalagt jobb i Postgres (pg_cron) körs en gång per dygn. Det raderar overifierade konton äldre än 24 timmar, och inbjudningar som gått ut.

E-postutskick: Vi använder Resend med domänen hos One.com. DNS-posterna SPF, DKIM och DMARC läggs in hos One.com. Supabase Auth använder samma SMTP-uppgifter för bekräftelse och återställning av lösenord.
Inbjudningsmailet skickas av backenden via Resend med en egen token som gäller i 7 dagar. Supabase-länkar kan ha kortare giltighetstid än så, så vi använder inte dem för inbjudningar. Detta verifieras vid implementation.

Loggning: En tabell audit_log sparar vem som gjorde vad, när och vilken lista eller användare det gällde. Loggen innehåller användar-ID, inga e-postadresser i klartext. Den loggar:
- inbjudningar, återkallelser och borttagningar av användare
- lämning av lista och radering av lista
- alla åtgärder som superanvändaren gör


# Arbetsätt under utveckling:
- Utvecklinen av appen skall ske i ett antal itterationer.
- I 1:a iterationen:
-- Huvudsidorna skapas dvs, sid1, sid2, sid3, sid4
-- I 1:a iterationen skall INTE email funktionaliteten implementeras
-- I 1:a iterationen skall INTE Superusersida (sid5) skapas
-- I 1:a iterationen när en ny användare läggs till skall ett slumpmässigt lösenord skapas och visas. Detta kan sedna skciaks direkt till användaren

- I 2:a iterationen är skall vi lägga till Superusersida (sid5)

- I 3:e iteratione skall email funktionalitet läggas till

- VIKTIGT: Intervjuva om det information saknas, ge förslag på förbättringar så att "best practis" används. Ställ frågor tills du vet vad jag vill ha.
- Intervjuva mig och föreslå och beskriv hur kryptering och email skall kunna implementeras
- Intervjuva mig och fråga om det finns en bättre iterations uppdelning
- Gör en steg för steg instruktion, som var och en går att göra i en egen session och blir en egen pull request. Varje steg ska ha en rad om hur vi vet att det är klart.
- Ta med en tabell över API:ets adresser (metod, adress, vad den gör och vilka statuskoder den svarar med) och hur tabellerna i databasen ska se ut.
- Gör en plan som visar vad som ska göras.
- När planen är OK, skriv och uppdatera detta till filen PLAN.md
- Skriv ingen kod utan vänta på okej att köra

# Övrigt AGENTS.md
Skapa en kort AGENTS.md med det som alltid gäller i projektet och håll denna uppdaterad. Jag vill som standard att:
1.  Syftet med detta projekt är att jag skall lära mig. Därför vill jag ha en plan när saker görs. plannen skall innehålla
1.1 Kort konkret beskrivning varför
1.2 Exakta kommando och/eller beskrivning vad jag skall göra, tex. om något skall göras i GitHub
1.3 Kort konkret beskrivning på hur jag kan se vad kommandot hr gjort
2.  Starta alltid session med att läsa PLAN.md
3.  Varje steg görs på en egen branch och aldrig i main och avslutas med en pull request som öppnas med gh, att testerna ska gå igenom innan pull requesten öppnas, Committa och pusha bara när du ber om det, och att steget bockas av i PLAN.md.
4.  Språk: svenska
6.  Ha arbetsättet som standard: Intervjuva, fråga och ge förslag på förbättringar tills du vet vad jag vill ha, gör steg för steg instruktion så att varje steg kan göras i egen pull request, när allt OK gör plan och uppdatera PLAN.md
8.  Skriv ingen kod förrän jag har granskat och godkänt planen
9.  Gör undantag för små ändringar så som stavfel







