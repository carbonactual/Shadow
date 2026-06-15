import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createAgent, index, train } from './controllers/agentController.js';
import { recordRevenue, getReport } from './services/reportService.js';
import { checkWorkflow } from './services/riskService.js';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true, service: 'shadow-api' }));
app.get('/api/agents', index);
app.post('/api/agents', createAgent);
app.post('/api/agents/:agentId/train', train);
app.post('/api/revenue', (req, res) => res.status(201).json({ ok: true, revenue: recordRevenue(req.body) }));
app.get('/api/revenue/report', (req, res) => res.json({ ok: true, report: getReport(req.query.agentId) }));
app.post('/api/workflows/check', (req, res) => res.json({ ok: true, check: checkWorkflow(req.body) }));
app.use((err, _req, res, _next) => res.status(400).json({ ok: false, error: err.message }));

export default app;
