import { listAgents, mintAgent, trainAgent } from '../services/agentService.js';

export function createAgent(req, res, next) {
  try {
    res.status(201).json({ ok: true, agent: mintAgent(req.body) });
  } catch (error) {
    next(error);
  }
}

export function train(req, res, next) {
  try {
    const result = trainAgent(req.params.agentId, req.body);
    res.json({ ok: true, ...result });
  } catch (error) {
    next(error);
  }
}

export function index(_req, res) {
  res.json({ ok: true, agents: listAgents() });
}
