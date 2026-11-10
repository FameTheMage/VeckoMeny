import { useEffect, useState } from 'react';

// Tillfällig startsida: visar att frontend och API når varandra.
export default function App() {
  const [status, setStatus] = useState('kontrollerar…');

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('fel'));
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 16 }}>
      <h1>VeckoMeny</h1>
      <p>API-status: {status}</p>
    </main>
  );
}
