import crypto from 'crypto';
import { db, makeId, now } from '../lib/store.js';

export function hashContent(input) {
  const body = typeof input === 'string' ? input : JSON.stringify(input);
  return crypto.createHash('sha256').update(body).digest('hex');
}

export function registerContent(payload) {
  const contentHash = hashContent(payload.content || '');
  const item = {
    id: makeId('cnt'),
    agentId: payload.agentId,
    ownerId: payload.ownerId || 'demo-user',
    platform: payload.platform || 'draft',
    title: payload.title || 'Untitled content',
    contentHash,
    content: payload.content || '',
    status: 'ownership_registered',
    createdAt: now(),
    chain: {
      network: process.env.POLYGON_RPC_URL ? 'polygon' : 'local-demo',
      tokenId: null,
      txHash: null
    }
  };
  db.content.set(item.id, item);
  return item;
}

export function listContent() {
  return Array.from(db.content.values());
}
