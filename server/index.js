// Startpunkt: en enda server för både API och sidor.
// Utveckling: Vite körs som middleware. Produktion: färdiga filer från dist/.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createApp } from './app.js';

const port = Number(process.env.PORT) || 3000;
// Produktion: flaggan --prod (fungerar på alla system) eller NODE_ENV=production
const isProd = process.argv.includes('--prod') || process.env.NODE_ENV === 'production';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const app = createApp();

if (isProd) {
  // Servera byggda filer; okända adresser går till index.html (React-router)
  const dist = path.join(root, 'dist');
  app.use(express.static(dist));
  app.get('/{*splat}', (req, res) => res.sendFile(path.join(dist, 'index.html')));
} else {
  // Vite importeras först här så att produktion inte behöver det
  const { createServer } = await import('vite');
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(port, () => {
  console.log(`VeckoMeny kör på http://localhost:${port}`);
});
