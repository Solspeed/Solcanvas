"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
export default function Commits() {
  const [walletAddress, setWalletAddress] = useState<string>(() => {
    // Retrieve wallet address from localStorage
    const storedAddress = localStorage.getItem("walletAddress");
    return storedAddress || "";
  });

  const [showAllCommits, setShowAllCommits] = useState(false);
  const { publicKey } = useWallet();

  const handleSeeAllCommitsClick = () => {
    showAllCommits ? setShowAllCommits(false) : setShowAllCommits(true);
  };
  return (
    <div className="flex flex-col   sm:mt-64 mt-24 w-full">
      <div className="mx-2.5 font-silkscreen  mq450:text-2xl text-nowrap text-center text-[#954AD2] md:text-[60px] sm:mb-16 mb-6 text-4xl tracking-tighter font-medium sm:tracking-wider leading-8">
        Commits
      </div>
      <div className="flex items-center  scale-[0.8] gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-[#954AD2] max-w-[1345px] flex-wrap">
        <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
          8bpx5gh7sg....
        </div>
          <div className="w-[18px] h-[18px] rounded-full bg-[#42FF00] inline-block "></div>
      </div>
      <div className="flex items-center scale-[0.8] gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-[#954AD2] max-w-[1345px] flex-wrap">
        <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
          Wallet Address: {walletAddress}
        </div>
        <div className="w-[18px] h-[18px] rounded-full bg-[#FF0000] inline-block "></div>

      </div>
      <div
        className={`flex items-center scale-[0.8] gap-5 ${showAllCommits ? "" : "hidden"} self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-[#954AD2] max-w-[1345px] flex-wrap`}
      >
        <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
          Wallet Address: {walletAddress}
        </div>
        <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
          Past
        </div>
      </div>
      {!showAllCommits && (
        <button
          onClick={handleSeeAllCommitsClick}
          className="self-center sm:mt-12 mt-6 sm:text-3xl text-xl font-medium tracking-wide leading-8 text-zinc-400 max-md:mt-10"
        >
          See all
        </button>
      )}
      {showAllCommits && (
        <button
          onClick={handleSeeAllCommitsClick}
          className="self-center sm:mt-12 mt-6 sm:text-3xl text-xl font-medium tracking-wide leading-8 text-zinc-400 max-md:mt-10"
        >
          See less
        </button>
      )}
    </div>
  );
}
