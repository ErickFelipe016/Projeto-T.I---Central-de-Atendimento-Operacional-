import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Central de Atendimento Operacional',
  description: 'Sistema interno de atendimento e acompanhamento de chamados.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
