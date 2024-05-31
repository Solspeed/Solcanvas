'use client'

import "./globals.css";
import { Inter } from "next/font/google";
import * as React from 'react';
import * as web3 from '@solana/web3.js';
import * as walletAdapterReact from '@solana/wallet-adapter-react';
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { FormDataProvider } from '../app/(addproject)/addproject/context/FormDataContext';
require('@solana/wallet-adapter-react-ui/styles.css');
import { ProjectProvider } from './(editproject)/editproject/contextname/namecontext'
import { UserProvider } from "./(useronboarding)/context/UserContext";
const inter = Inter({ subsets: ["latin"] });
// import { useEffect } from "react";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { useRouter, usePathname } from 'next/navigation'

const metadata = {
  title: "SolCanvas",
  description: "SolCanvas is a decentralized platform.",
  openGraph: {
    url: 'https://solcanvas.xyz/',
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

  const endpoint = web3.clusterApiUrl('mainnet-beta');

  const wallets = [
    new walletAdapterWallets.PhantomWalletAdapter(),
  ];

  
  
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images.url} />
        <meta property="og:image:width" content={metadata.openGraph.images.width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images.height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images.alt} />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph.images.url} />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <UserProvider>
        <FormDataProvider>
          <ProjectProvider>
            <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
              <walletAdapterReact.WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  <body className={inter.className}>{children}</body>
                </WalletModalProvider>
              </walletAdapterReact.WalletProvider>
            </walletAdapterReact.ConnectionProvider>
          </ProjectProvider>
        </FormDataProvider>
      </UserProvider>

    </html>
  );
}