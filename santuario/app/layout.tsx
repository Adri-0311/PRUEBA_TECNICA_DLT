import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'El Santuario',
  description: 'Gestione su colección personal de criaturas mágicas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
