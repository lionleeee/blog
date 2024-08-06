import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '이정훈의 블로그',
  description: 'lionlee.com',
  openGraph: {
    title: '이정훈의 블로그',
    description: 'hajoeun.com',
    url: 'https://lionlee.com',
    siteName: '이정훈 블로그',
  },
  github: {
    card: 'summary_large_image',
    site: '@lionleeee',
    creator: '@lionleeee',
  },
  metadataBase: new URL('https://lionleeee.com'),
};

export const viewport = {
  themeColor: 'transparent',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
