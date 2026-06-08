import { nanoid } from 'nanoid';

export const db = {
  users: new Map(),
  agents: new Map(),
  training: new Map(),
  content: new Map(),
  socialAccounts: new Map(),
  revenue: []
};

export function makeId(prefix) {
  return `${prefix}_${nanoid(10)}`;
}

export function now() {
  return new Date().toISOString();
}
