import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolCanvas",
  description: "SolCanvas is a decentralized platform.",
  openGraph: {
    url: 'https://solcanvas.vercel.app/',
    images: {
      url: 'og.png',
      alt: 'About Acme',
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
