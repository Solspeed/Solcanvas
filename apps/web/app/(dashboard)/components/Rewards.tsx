import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backIcon from "../../../public/images/dashboard/back.svg";
import heliusApiUrl from '../../constant';
const nftImageUrl = 'https://i.ibb.co/Rg9M1tT/Beta-NFT-1.png';
const apiUrl = 'https://devnet.helius-rpc.com/?api-key=' + heliusApiUrl;

interface RewardCardProps {
  imageSrc: string;
  altText: string;
  claimed: boolean;
  rewardType: string;
}

const Loader = () => (
  <div className="loader">
    <div className="spinner"></div>
    <style jsx>{`
      .loader {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default function Rewards() {
  const [selectedButton, setSelectedButton] = useState('');
  const [claimSuccess, setClaimSuccess] = useState(false);
  const [claimedRewards, setClaimedRewards] = useState({ beta: false, firstProject: false });
  const [showClaimedMessage, setShowClaimedMessage] = useState(false);
  const [nftImage, setNftImage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { publicKey } = useWallet();

  useEffect(() => {
    if (!publicKey) {
      router.push('/connect_wallet');
    }
  }, [publicKey, router]);

  const handleClaim = (rewardType: 'beta') => {
    setClaimSuccess(true);
    setClaimedRewards((prev) => ({ ...prev, [rewardType]: true }));
    setTimeout(() => {
      setSelectedButton('');
      setShowClaimedMessage(true);
    }, 3000);
  };

  const mintCompressedNft = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'solcanvas-beta-nft',
          method: 'mintCompressedNft',
          params: {
            name: "Solcanvas Beta NFT",
            symbol: 'NNFT',
            owner: publicKey,
            description: "Solcanvas's Beta NFT is a unique NFT that is only available to beta testers of Solcanvas. This NFT is a token of appreciation for your contribution to the Solcanvas community. Thank you for being a part of our journey!",
            attributes: [{ trait_type: 'Rarity', value: 'Common' }],
            imageUrl: nftImageUrl,
            externalUrl: 'https://solcanvas.xyz',
            sellerFeeBasisPoints: 6900,
          },
        }),
      });

      const { result } = await response.json();
      console.log('result', result);
      if (!result) throw new Error("Request failed");

      setNftImage(result.assetId);
      handleClaim('beta');
      await fetchNFT(result.assetId);
    } catch (error) {
      toast.error("Failed to mint NFT. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNFT = async (assetId: string) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'my-id',
          method: 'getAsset',
          params: { id: assetId },
        }),
      });

      const { result } = await response.json();
      setNftImage(result.content.links.image);
    } catch (error) {
      toast.error("Failed to fetch NFT. Please try again.");
      console.error(error);
    }
  };
  

  const RewardCard = ({ imageSrc, altText, claimed }:
    RewardCardProps
  ) => (
    <div className={`flex  flex-col self-end px-7 py-7 mt-28 max-w-full text-xl ${claimed ? 'text-gray-400' : 'text-red-300'} rounded-2xl bg-neutral-950 max-w-[563px] max-md:px-5 max-md:mt-10`}>
      <img src={imageSrc} alt={altText} className="self-center max-w-full" />
      <button
        className={`justify-center  px-12 py-4 mt-4 rounded-md bg-neutral-900 max-md:px-5 ${claimed ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={!claimed ? mintCompressedNft : undefined}
      >
      {loading ? <div className='inset-0 flex items-center justify-center absolute bg-black bg-opacity-70 '> <Loader /></div> : 'Claim'}
      </button>


    </div>
  );

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
            imageSrc={nftImageUrl}
            altText="Reward card image"
            claimed={claimedRewards.beta}
            rewardType="beta"
          />
        </div>
      );
    } else {
      return (
        <div className="mt-16 flex max-md:mt-10  max-w-full">
          <div className="flex justify-center items-center  text-center gap-16 text-2xl flex-1 uppercase w-full">
            <div className="bg-[#151515] flex flex-col text-[#FF0000] px-24 py-12 rounded-md">
              <button onClick={() => setSelectedButton('beta')}>Beta Reward</button>
              {claimedRewards.beta && (
                <div className="text-green-400 text-sm">Claimed</div>
              )}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col overflow-y-scroll font-silkscreen p-12 w-full xl:pr-[15vw] bg-black h-screen overflow-hidden">


      <>
        <div className="flex gap-5 flex-col flex-wrap max-md:max-w-full">
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
      </>

      <ToastContainer />
    </div>
  );
}
