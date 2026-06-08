import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true, service: 'shadow-api' }));

app.post('/api/ai/mint', (req, res) => {
  res.json({ ok: true, message: 'Shadow AI mint request received', data: req.body });
});

app.post('/api/ai/train', (req, res) => {
  res.json({ ok: true, message: 'Training record saved', data: req.body });
});

app.get('/api/monetization/report', (_req, res) => {
  res.json({ ok: true, totalRevenue: 0, channels: [] });
});

export default app;
