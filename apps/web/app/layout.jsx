export const metadata = {
  title: 'Shadow AI',
  description: 'User-bound AI agent dashboard'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
