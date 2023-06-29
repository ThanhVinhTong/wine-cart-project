import './globals.css';

export const metadata = {
  title: 'Wine Cart',
  description: 'Discover your desired wines',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}