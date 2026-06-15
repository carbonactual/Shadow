export default function DashboardPage() {
  const cards = [
    'Agent Minting',
    'Training Studio',
    'Digital Ownership',
    'Account Connections',
    'Revenue Reporting',
    'Approval Queue'
  ];

  return (
    <main style={{ fontFamily: 'Arial', padding: 32 }}>
      <h1>Shadow Dashboard</h1>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {cards.map((card) => (
          <div key={card} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 20 }}>
            <h2>{card}</h2>
            <p>Ready for integration.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
