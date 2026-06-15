import { db, makeId, now } from '../lib/store.js';

export function recordRevenue(payload) {
  const item = {
    id: makeId('rev'),
    agentId: payload.agentId,
    source: payload.source || 'manual',
    amount: Number(payload.amount || 0),
    currency: payload.currency || 'USD',
    note: payload.note || '',
    createdAt: now()
  };
  db.revenue.push(item);
  return item;
}

export function getReport(agentId) {
  const rows = db.revenue.filter((x) => !agentId || x.agentId === agentId);
  const total = rows.reduce((sum, x) => sum + x.amount, 0);
  return { total, count: rows.length, rows };
}
