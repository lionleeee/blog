import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/codes.css';

import { themeEffect } from '@/utils/theme-effect';
import { MainHeader } from '@/componenst/main-header';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '이정훈의 블로그',
  description: 'lionlee.com',
  openGraph: {
    title: '이정훈의 블로그',
    description: 'lionlee.com',
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
    <html lang="ko" className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-[#1C1C1C] dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <MainHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
