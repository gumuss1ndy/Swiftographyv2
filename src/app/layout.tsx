import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-context';
import MainLayout from '@/components/layout/MainLayout';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Swiftography - Taylor Swift Fan Site',
  description: 'A fan-made tribute to Taylor Swift\'s incredible discography. Explore her albums, themes, and musical journey through the years.',
  keywords: ['Taylor Swift', 'Music', 'Albums', 'Fan Site', 'Swiftography'],
  authors: [{ name: 'Swiftography Team' }],
  openGraph: {
    title: 'Swiftography - Taylor Swift Fan Site',
    description: 'Explore Taylor Swift\'s albums and musical journey',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}