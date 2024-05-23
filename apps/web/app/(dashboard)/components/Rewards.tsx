import React, { useState } from 'react';
import jup from "../../../public/images/dashboard/jup.svg";
import nft from "../../../public/images/dashboard/nft.svg";
import backIcon from "../../../public/images/dashboard/back.svg";
import { useRouter } from 'next/navigation';

export default function Rewards() {
    const [selectedButton, setSelectedButton] = useState('');
    const [claimSuccess, setClaimSuccess] = useState(false);
    const [claimedRewards, setClaimedRewards] = useState<{ beta: boolean; firstProject: boolean }>({ beta: false, firstProject: false });
    const [showClaimedMessage, setShowClaimedMessage] = useState(false);
    const router = useRouter();

    interface ClaimCardProps {
        imageSrc: string;
        altText: string;
        claimed: boolean;
        rewardType: 'beta' | 'firstProject';
    }

    interface RewardCardProps {
        imageSrc: string;
        altText: string;
        claimed: boolean;
        rewardType: 'beta' | 'firstProject';
    }

    const ClaimCard: React.FC<ClaimCardProps> = ({ imageSrc, altText, claimed, rewardType }) => {
        return (
            <div className={`flex flex-col self-end px-7 py-7 mt-28 max-w-full text-xl ${claimed ? 'text-gray-400' : 'text-[#2876CB]'} rounded-2xl bg-neutral-950 w-[231px] max-md:px-5 max-md:mt-10`}>
                <img src={imageSrc} alt={altText} className="self-center max-w-full p-2 aspect-[0.86] w-[136px] h-[130px] object-cover" />
                <div className="text-white font-silkscreen text-center">3 JUP</div>
                <button
                    className={`justify-center px-12 py-4 mt-4 rounded-md bg-neutral-900 max-md:px-5 ${claimed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={!claimed ? () => handleClaim(rewardType) : undefined}
                >
                    {claimed ? 'Claimed' : 'Claim'}
                </button>
            </div>
        );
    };

    const RewardCard: React.FC<RewardCardProps> = ({ imageSrc, altText, claimed, rewardType }) => {
        return (
            <div className={`flex flex-col self-end px-7 py-7 mt-28 max-w-full text-xl ${claimed ? 'text-gray-400' : 'text-red-300'} rounded-2xl bg-neutral-950 w-[231px] max-md:px-5 max-md:mt-10`}>
                <img src={imageSrc} alt={altText} className="self-center max-w-full aspect-[0.86] w-[136px]" />
                <button
                    className={`justify-center px-12 py-4 mt-4 rounded-md bg-neutral-900 max-md:px-5 ${claimed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={!claimed ? () => handleClaim(rewardType) : undefined}
                >
                    {claimed ? 'Claimed' : 'Claim'}
                </button>
            </div>
        );
    };

    const handleClaim = (rewardType: 'beta' | 'firstProject') => {
        setClaimSuccess(true);
        setClaimedRewards({ ...claimedRewards, [rewardType]: true });
        setTimeout(() => {
            setSelectedButton('');
            setShowClaimedMessage(true);
            router.push('/dashboard');
        }, 3000);
    };

    const renderCards = () => {
        if (claimSuccess) {
            return (
                <div className="flex flex-col items-center justify-between h-full">
                    <div className="self-center mt-56 text-4xl text-[#954AD2] text-center max-md:mt-10 max-md:max-w-full">
                        Your reward has been claimed,
                        <br />
                        <span className="text-[#DFA9FE]">open wallet to see it</span>
                    </div>
                    <div className="self-center text-base tracking-widest text-center text-white text-opacity-30 max-md:mt-10">
                        You will be redirected to the dashboard in 3 seconds.
                    </div>
                </div>
            );
        } else if (selectedButton === 'beta') {
            return (
                <div className="flex justify-evenly gap-5 flex-wrap max-w-full">
                    <RewardCard
                        imageSrc={nft.src}
                        altText="Reward card image"
                        claimed={claimedRewards.beta}
                        rewardType="beta"
                    />
                    <ClaimCard
                        imageSrc={jup.src}
                        altText="Claim card image"
                        claimed={claimedRewards.beta}
                        rewardType="beta"
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
                            {claimedRewards.beta && (
                                <div className="text-white text-sm mt-2">Claimed</div>
                            )}
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
            <div className="flex gap-5 flex-col flex-wrap max-md:max-w-full ">
                <div className="flex-auto my-auto text-3xl text-purple-300">Rewards</div>
                {selectedButton && !claimSuccess && (
                    <button onClick={() => setSelectedButton('')} className="text-white focus:outline-none ml-4">
                        <img src={backIcon.src} alt="Back" className="w-6 h-6" />
                    </button>
                )}
                {claimSuccess && (
                    <button onClick={() => setClaimSuccess(false)} className="text-white focus:outline-none ml-4">
                        <img src={backIcon.src} alt="Back" className="w-6 h-6" />
                    </button>
                )}
            </div>
            {renderCards()}

        </div>
    );
}