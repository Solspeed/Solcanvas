'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import search from "../../../public/images/search.svg";
import copyIcon from "../../../public/images/marketplace/copy.svg";
import { useWallet } from "@solana/wallet-adapter-react";
import supabase from "../../../supabase";

interface ItemBarProps {
  isWalletClicked: boolean;
  onWalletClick: () => void;
  onProjectSelect: (project: Project | null) => void;
}

interface Project {
  id: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  name: string;
  tagline: string;
  category: string;
}

export default function ItemBar({
  isWalletClicked,
  onWalletClick,
  onProjectSelect,
}: ItemBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const { publicKey } = useWallet();

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    try {
      const { data: allProjects, error: projectError } = await supabase
        .from('project_listing')
        .select('*')
        .eq('status', 'live');

      if (projectError) throw projectError;

      setProjectData(allProjects || []);
    } catch (error: any) {
      console.log('Error fetching projects:', error.message);
    }
  };

  const filteredProjects = projectData.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopyAddress = () => {
    if (publicKey) {
      const publicKeyString = publicKey.toBase58();
      navigator.clipboard.writeText(publicKeyString).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      });
    }
  };

  const handleSuggestionClick = (project: Project) => {
    setSearchTerm('');
    onProjectSelect(project);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 px-4 md:px-20 py-4 text-base tracking-normal leading-8 bg-black border-t border-b border-solid border-white border-opacity-10">
      <div className="flex sm:flex-row justify-between gap-4 flex-wrap ">
      <div className="flex relative flex-grow max-w-[600px] gap-4 p-3 bg-[#101010] rounded-[30px] text-zinc-400">
          <Image
            src={search}
            className="shrink-0 aspect-square w-[18px]"
            alt="Search Icon"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search projects...."
            className="flex-auto bg-transparent outline-none border-none text-white"/>
          {searchTerm && (
            <div className="absolute top-12 right-0 left-0 bg-neutral-900 rounded-md shadow-lg z-10">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleSuggestionClick(project)}
                  className="px-4 py-2 cursor-pointer hover:bg-neutral-800 text-white"
                >
                  {project.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-6">
          <div className="flex gap-6 font-silkscreen items-center py-2 px-4 text-purple-600 whitespace-nowrap rounded-md bg-[#101010]">
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
