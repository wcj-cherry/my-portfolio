"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as gtag from '@/lib/gtag'; 



export default function RootLayout({ children }) {
   const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      gtag.pageview(pathname);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
       {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
