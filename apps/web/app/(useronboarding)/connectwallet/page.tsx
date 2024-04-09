'use client'
import Image from "next/image"
import wallet from "../../../public/images/wallet.png"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConnectWallet() {
  const { connected } = useWallet();
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter(); // Import useRouter for navigation

  useEffect(() => {
    if (connected && !redirecting) {
      setRedirecting(true);

      const timeoutId = setTimeout(() => {
        router.push("/useronboarding"); // Use Next.js router for redirection
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [connected, redirecting]);
  
  console.log(connected);

  return (
    <div className="flex flex-col self- sm:mt-24 max-w-full mt-10">
      <div className="flex gap-2.5 self-start">
        <div className="shrink-0 w-14 bg-blue-600 rounded-2xl h-[17px]" />
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
      </div>
      <div className="sm:mt-11 sm:text-5xl font-semibold tracking-wide leading-8 text-white mt-10 max-w-full text-4xl">
        Connect Wallet
      </div>
      <div className="mt-8 text-2xl font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
        Get connect by your solana wallet.
      </div>
      <div className="flex sm:gap-5 xl:ml-96 self-end sm:px-6 py-3.5 sm:mt-60 max-w-full text-3xl font-medium uppercase whitespace-nowrap rounded-2xl bg-neutral-900 text-white text-opacity-50 sm:w-[515px] sm:flex-nowrap flex-wrap px-5 mt-10">
        <Image
          alt=""
          loading="lazy"
          src={wallet}
          className=" aspect-square w-[68px]"
        />
        <div className="flex-auto sm:ml-12 my-auto">
          <WalletMultiButton style={{ backgroundColor: '#171717', color: 'white', borderRadius: '5px', opacity: 0.5, fontSize: '20px' }} />
        </div>
      </div>
    </div>
  );
}
