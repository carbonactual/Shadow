import { makeId, now } from '../lib/store.js';

export function createStoreTask(payload) {
  return {
    id: makeId('com'),
    agentId: payload.agentId,
    title: payload.title || 'Store task',
    supplier: payload.supplier || '',
    margin: Number(payload.margin || 0),
    status: 'draft',
    createdAt: now()
  };
}
