export const channels = {
  instagram: 'oauth_ready',
  tiktok: 'oauth_ready',
  youtube: 'oauth_ready',
  x: 'oauth_ready',
  linkedin: 'oauth_ready',
  twitch: 'oauth_ready',
  spotify: 'oauth_ready',
  snapchat: 'oauth_ready',
  whatsapp: 'oauth_ready'
};

export function getChannel(name) {
  const key = String(name || '').toLowerCase();
  return channels[key] ? { key, status: channels[key] } : null;
}
