import { makeId, now } from '../lib/store.js';

export function createCampaign(payload) {
  return {
    id: makeId('aff'),
    agentId: payload.agentId,
    product: payload.product || '',
    link: payload.link || '',
    target: payload.target || '',
    status: 'draft',
    createdAt: now()
  };
}
