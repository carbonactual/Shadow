export default function AccountsPage() {
  const platforms = ['Instagram','TikTok','YouTube','X','LinkedIn','Twitch','Spotify','Snapchat','WhatsApp'];
  return (
    <main style={{ fontFamily: 'Arial', padding: 32 }}>
      <h1>Account Connections</h1>
      <ul>{platforms.map((p) => <li key={p}>{p}</li>)}</ul>
    </main>
  );
}
