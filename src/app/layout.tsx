import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // você pode definir os pesos que quiser usar
  variable: '--font-inter',
});

export const metadata = {
  title: 'Senac RN',
  description: 'Landing Page institucional do Senac RN',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head />
      <body className="font-sans bg-white text-black">
        {children}
      </body>
    </html>
  );
}
