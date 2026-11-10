// Själva API:et. Ligger skilt från server/index.js så att tester kan
// starta det utan Vite och utan databas.
import express from 'express';

export function createApp() {
  const app = express();
  app.use(express.json());

  // Statuskontroll: svarar alltid 200 om servern lever
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Okänd adress under /api -> 404 med svenskt meddelande
  app.use('/api', (req, res) => {
    res.status(404).json({ error: 'Adressen finns inte.' });
  });

  // Sista skyddsnätet: oväntade fel ger 500, aldrig stacktrace till klienten
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Något gick fel på servern.' });
  });

  return app;
}
