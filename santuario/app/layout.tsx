import type { Metadata } from 'next';
import { sedan, sedanSC } from './fonts/fonts';
import '@/styles/global.scss';

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
    <html lang='en' className={`${sedanSC.className} ${sedan.className}`}>
      <body>{children}</body>
    </html>
  );
}
