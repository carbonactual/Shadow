import { db, makeId, now } from '../lib/store.js';

export const platforms = ['instagram','tiktok','youtube','x','linkedin','twitch','spotify','snapchat','whatsapp'];

export function connectPlatform(payload) {
  const platform = String(payload.platform || '').toLowerCase();
  if (!platforms.includes(platform)) throw new Error('Unsupported platform');
  const account = {
    id: makeId('soc'),
    ownerId: payload.ownerId || 'demo-user',
    platform,
    handle: payload.handle || '',
    connectedAt: now(),
    status: 'connected'
  };
  db.socialAccounts.set(account.id, account);
  return account;
}

export function listConnections() {
  return Array.from(db.socialAccounts.values());
}
