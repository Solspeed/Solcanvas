'use client'
import * as React from 'react';
import * as web3 from '@solana/web3.js';
import * as walletAdapterReact from '@solana/wallet-adapter-react';
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const Starter = () => {

    const endpoint = web3.clusterApiUrl('devnet');

    const wallets = [
        new walletAdapterWallets.PhantomWalletAdapter(),
    ];

    // const  connection  = useConnection();
    // const publicKey  = useWallet();
    // console.log(connection);
    // console.log(publicKey?.toBase58());
    return (
        <>
            <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
                <walletAdapterReact.WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <WalletMultiButton style={{ backgroundColor: '#171717', color: 'white', borderRadius: '5px', opacity: 0.5 , fontSize: '44px',}} />
                    </WalletModalProvider>
                </walletAdapterReact.WalletProvider>
            </walletAdapterReact.ConnectionProvider>
        </>
    );
};

export default Starter;