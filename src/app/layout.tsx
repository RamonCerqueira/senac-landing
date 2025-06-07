import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Senac RN',
  description: 'Landing Page institucional do Senac RN',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
