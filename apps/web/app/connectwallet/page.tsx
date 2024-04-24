'use client'
import Image from "next/image"
import wallet from "../../public/images/wallet.png"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import walletBg from "../../public/images/walletBg.png";

export default function ConnectWallet() {
  const { connected } = useWallet();
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();
  console.log(connected);

  useEffect(() => {
    if (connected) {
      setRedirecting(true);
      router.push("/useronboarding");
    }
  }, [connected, redirecting]);

  console.log(connected);

  return (
    <div className="overflow-x-hidden min-h-screen flex items-center justify-center sm:py-20 py-12 px-6">
      <img src={walletBg.src} alt="" className="absolute top-0 left-0 z-[-1] w-full h-full object-cover" />
      <div className="flex flex-col justify-center items-center px-16 py-14 bg-black rounded-xl shadow-sm max-w-[396px]">
        <div className="flex gap-2 self-center">
          <div className="shrink-0 h-3 bg-purple-600 rounded-2xl w-[39px]" />
          <div className="shrink-0 h-3 rounded-2xl bg-zinc-400 w-[26px]" />
          <div className="shrink-0 h-3 rounded-2xl bg-zinc-400 w-[26px]" />
        </div>
        <div className="mt-9 text-3xl font-silkscreen text-nowrap tracking-wide leading-8 text-white">
          Connect Wallet
        </div>
        <div className="self-center mt-5 font-nunito text-base tracking-normal leading-8 text-white text-opacity-50">
          Get connect by your solana wallet.
        </div>
        <div className="justify-center font-nunito items-center px-14 py-1 text-nowrap mt-32 text-base font-medium tracking-wide leading-8 bg-[#DCA7FB] rounded-xl text-black text-opacity-80">
        <WalletMultiButton style={{ backgroundColor: 'transparent', color: '#000', borderRadius: '999px', padding: '12px 24px', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase' }}>
         <span className="font-nunito text-opacity-80 leading-8 tracking-wide font-medium text-base"> Get Connecting </span>
        </WalletMultiButton>
        </div>
      </div>
    </div>
  );
} 