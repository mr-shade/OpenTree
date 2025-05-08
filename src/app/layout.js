import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OpenTree - Create beautiful link pages",
  description: "OpenTree is a free, open-source platform to create beautiful link-in-bio pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Suspense fallback={<div className="h-16 border-b border-gray-200"></div>}>
          <Header />
        </Suspense>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
