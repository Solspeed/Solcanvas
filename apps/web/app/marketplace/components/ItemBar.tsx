import Image from "next/image";
import search from "../../../public/images/search.svg";
import copyIcon from "../../../public/images/marketplace/copy.svg";
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

interface ItemBarProps {
  isWalletClicked: boolean;
  onWalletClick: () => void;
}

export default function ItemBar({
  isWalletClicked,
  onWalletClick,
}: ItemBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCopied, setIsCopied] = useState(false); // State to control the toaster visibility
  const { publicKey } = useWallet();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleCopyAddress = () => {
    if (publicKey) {
      const publicKeyString = publicKey.toBase58();
      navigator.clipboard.writeText(publicKeyString).then(() => {
        setIsCopied(true); // Set isCopied to true when the address is copied
        setTimeout(() => {
          setIsCopied(false); // Reset isCopied after a certain duration
        }, 3000); // Adjust the duration as needed (e.g., 3000 milliseconds = 3 seconds)
      });
    }
  };

  return (
    <div className="flex flex-col gap-4  px-4 md:px-20 py-4 text-base tracking-normal leading-8 bg-black border-t border-b border-solid border-white border-opacity-10">
      <div className="flex sm:flex-row justify-between gap-4 flex-wrap ">
        <div className="flex flex-grow max-w-[600px] gap-4 p-3 bg-[#101010] rounded-[30px] text-zinc-400">
          <Image
            src={search}
            className="shrink-0 aspect-square w-[18px]"
            alt="Search Icon"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search projects...."
            className="flex-auto bg-transparent outline-none border-none text-white"
          />
        </div>
        <div className="flex gap-6">
          <div className="flex  gap-6  font-silkscreen  items-center py-2 px-4 text-purple-600 whitespace-nowrap rounded-md bg-[#101010]">
            <div className="flex-grow text-[13px]">
              {publicKey
                ? publicKey.toBase58().slice(0, 25) + "...."
                : "Wallet Address"}
            </div>
            <img
              onClick={handleCopyAddress}
              src={copyIcon.src}
              className="cursor-pointer shrink-0 w-3.5 aspect-square"
              alt="Copy Icon"
            />
          </div>
          <a
            href="/addproject"
            className="flex justify-center font-silkscreen self-stretch text-nowrap px-5 py-3 my-auto text-purple-300 rounded-md bg-stone-950"
          >
            Submit Project
          </a>
        </div>
        {isCopied && (
          <div className="absolute z-50 top-4 right-8 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
            Wallet address copied!
          </div>
        )}
      </div>
    </div>
  );
}
