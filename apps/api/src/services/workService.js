import { makeId, now } from '../lib/store.js';
import { checkWorkflow } from './riskService.js';

export function planWork(payload) {
  const check = checkWorkflow({ type: payload.type });
  return {
    id: makeId('work'),
    agentId: payload.agentId,
    type: payload.type || 'general',
    objective: payload.objective || '',
    status: check.allowed ? 'ready' : 'needs_review',
    check,
    createdAt: now()
  };
}
