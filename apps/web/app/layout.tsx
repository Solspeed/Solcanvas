'use client'

import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import * as React from 'react';
import * as web3 from '@solana/web3.js';
import * as walletAdapterReact from '@solana/wallet-adapter-react';
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  const endpoint = web3.clusterApiUrl('devnet');

  const wallets = [
    new walletAdapterWallets.PhantomWalletAdapter(),
  ];

  const metadata = {
    title: "SolCanvas" ,
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

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images.url} />
        <meta property="og:image:alt" content={metadata.openGraph.images.alt} />
        <meta property="og:image:width" content={metadata.openGraph.images.width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images.height.toString()} />
        <title>dfdsfodiofiou</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </Head>
      <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
        <walletAdapterReact.WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <body className={inter.className}>{children}</body>
          </WalletModalProvider>
        </walletAdapterReact.WalletProvider>
      </walletAdapterReact.ConnectionProvider>

    </html>
  );
}