import React, { useState } from 'react';
import jup from "../../../public/images/dashboard/jup.svg";
import nft from "../../../public/images/dashboard/nft.svg";
import backIcon from "../../../public/images/dashboard/back.svg";

export default function Rewards() {
    const [selectedButton, setSelectedButton] = useState('');

    interface ClaimCardProps {
        imageSrc: string;
        altText: string;
    }

    interface RewardCardProps {
        imageSrc: string;
        altText: string;
    }

    const ClaimCard: React.FC<ClaimCardProps> = ({ imageSrc, altText }) => {
        return (
            <div className="flex flex-col self-end px-7 py-7 mt-28 max-w-full text-xl text-[#2876CB] rounded-2xl bg-neutral-950 w-[231px] max-md:px-5 max-md:mt-10">
                <img src={imageSrc} alt={altText} className="self-center max-w-full p-2 aspect-[0.86] w-[136px] h-[130px] object-cover" />
                <div className="text-white font-silkscreen text-center">3 JUP</div>
                <button className="justify-center px-12 py-4 mt-4 rounded-md bg-neutral-900 max-md:px-5">
                    Claim
                </button>
            </div>
        );
    };

    const RewardCard: React.FC<RewardCardProps> = ({ imageSrc, altText }) => {
        return (
            <div className="flex flex-col self-end px-7 py-7 mt-28 max-w-full text-xl text-red-300 rounded-2xl bg-neutral-950 w-[231px] max-md:px-5 max-md:mt-10">
                <img src={imageSrc} alt={altText} className="self-center max-w-full aspect-[0.86] w-[136px]" />
                <button className="justify-center px-12 py-4 mt-4 rounded-md bg-neutral-900 max-md:px-5">
                    Claim
                </button>
            </div>
        );
    };

    const renderCards = () => {
        if (selectedButton === 'beta') {
            return (
                <div className="flex justify-evenly gap-5 flex-wrap max-w-full">
                    <RewardCard
                        imageSrc={nft.src}
                        altText="Reward card image"
                    />
                    <ClaimCard
                        imageSrc={jup.src}
                        altText="Claim card image"
                    />
                </div>
            );
        } else if (selectedButton === 'first-project') {
            return (
                <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                    <div className="bg-[#151515] text-[#954AD2] flex-1 p-4 py-10 rounded-md">
                        <button>First Project Details</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mt-16 flex max-md:mt-10 max-w-full">
                    <div className="flex sm:justify-evenly text-center gap-16 text-2xl flex-1 justify-between uppercase w-full">
                        <div className="bg-[#151515] text-[#FF0000] flex-1 p-4 py-10 rounded-md">
                            <button onClick={() => setSelectedButton('beta')}>Beta</button>
                        </div>
                        <div className="bg-[#151515] text-[#954AD2] flex-1 p-4 py-10 rounded-md">
                            <button onClick={() => setSelectedButton('first-project')}>First Project</button>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="flex flex-col font-silkscreen p-12 w-full xl:pr-[15vw] bg-black h-screen overflow-hidden">
            <div className="flex flex-col gap-5 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto text-3xl text-purple-300">Rewards</div>
                {selectedButton && (
                    <button onClick={() => setSelectedButton('')} className="text-white focus:outline-none ml-2 mt-6">
                        <img src={backIcon.src} alt="Back" className="w-6 h-6" />
                    </button>
                )}
            </div>
            {renderCards()}
        </div>
    );
}