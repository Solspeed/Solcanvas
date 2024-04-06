import Image from "next/image";
import search from "../../../public/images/search.svg";
import profile from "../../../public/images/profile.svg";
import { useState } from "react";

interface ItemBarProps {
  isWalletClicked: boolean;
  onWalletClick: () => void;
}

export default function ItemBar({ isWalletClicked, onWalletClick }: ItemBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 px-4 md:px-20 py-4 text-base tracking-normal leading-8 bg-black border-t border-b border-solid border-white border-opacity-10">
      <div className="flex sm:flex-row flex-col gap-4 items- justify-between">
        <div className="flex xl:w-[39.5rem] md:w-[20rem] sm:w-[16rem] gap-4 p-3 w-full bg-neutral-900 rounded-[30px] text-zinc-400">
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
        <div className="flex gap-4 items-center sm:justify-normal justify-evenly text-white">
          <a className="cursor-pointer" onClick={onWalletClick}>
            Wallet
          </a>
          <div className="border border-solid bg-zinc-400 border-zinc-400 h-[30px] " />
          <a href="/addproject" className="shrink-0">Submit Project</a>
          <div className="border border-solid bg-zinc-400 border-zinc-400 h-[30px] " />
          <Image
            src={profile}
            className="shrink-0 aspect-[0.86] w-[31px]"
            alt="Submit Icon"
          />
        </div>
      </div>
    </div>
  );
}