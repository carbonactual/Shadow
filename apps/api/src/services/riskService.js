export function checkWorkflow(payload) {
  const type = String(payload.type || 'general').toLowerCase();
  const regulated = ['wagering', 'lottery', 'financial_promotion'];
  if (regulated.includes(type)) {
    return {
      allowed: false,
      reason: 'Manual compliance review required before this workflow can run.'
    };
  }
  return { allowed: true, reason: 'Approved standard workflow.' };
}
