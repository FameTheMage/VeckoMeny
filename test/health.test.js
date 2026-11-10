// Körs med: npm test (Nodes inbyggda testverktyg)
import test from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from '../server/app.js';

// Startar API:et på en ledig port och returnerar bas-URL + stängfunktion
async function startServer() {
  const server = createApp().listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  const { port } = server.address();
  return { url: `http://localhost:${port}`, close: () => server.close() };
}

test('GET /api/health svarar 200 och status ok', async () => {
  const { url, close } = await startServer();
  try {
    const res = await fetch(`${url}/api/health`);
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { status: 'ok' });
  } finally {
    close();
  }
});

test('okänd /api-adress svarar 404 med svenskt meddelande', async () => {
  const { url, close } = await startServer();
  try {
    const res = await fetch(`${url}/api/finns-inte`);
    assert.equal(res.status, 404);
    assert.equal((await res.json()).error, 'Adressen finns inte.');
  } finally {
    close();
  }
});
