import { db, makeId, now } from '../lib/store.js';

export function mintAgent(payload) {
  const id = makeId('shdw');
  const agent = {
    id,
    ownerId: payload.ownerId || 'demo-user',
    name: payload.name || 'My Shadow',
    mission: payload.mission || 'Earn lawfully through approved digital work',
    autonomy: payload.autonomy || 'approval_required',
    mintedAt: now(),
    status: 'minted',
    trainingCount: 0,
    policy: {
      requireApprovalBeforePosting: true,
      requireOwnershipHashBeforePublish: true,
      regulatedWorkRequiresManualApproval: true
    }
  };
  db.agents.set(id, agent);
  return agent;
}

export function trainAgent(agentId, payload) {
  const agent = db.agents.get(agentId);
  if (!agent) throw new Error('Agent not found');
  const record = {
    id: makeId('train'),
    agentId,
    title: payload.title || 'Training update',
    instructions: payload.instructions || '',
    examples: payload.examples || [],
    createdAt: now()
  };
  db.training.set(record.id, record);
  agent.trainingCount += 1;
  agent.lastTrainedAt = record.createdAt;
  return { agent, record };
}

export function listAgents() {
  return Array.from(db.agents.values());
}
