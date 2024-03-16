// FeatureItem.tsx
import React from "react";
import Image from "next/image";
import CandyPay from "../../public/images/CandyPay.png";
import Anchor from "../../public/images/Anchor.png";
import Helius from "../../public/images/Helius.png";
import Kamino from "../../public/images/Kamino.png";
import Marginfi from "../../public/images/Marginfi.png";
import Phantom from "../../public/images/Phantom.png";
import Squads from "../../public/images/Squads.png";
import SplitWave from "../../public/images/SplitWave.png";

interface FeatureItemProps {
    activeButton: string;
    animate: boolean;
}

interface featItems {
    images: string[];
    titles: string[];
}

const featItemData = {
    'DeFi': {
        images: [Kamino, Marginfi],
        titles: ['Kamino', 'Marginfi'],
    },
    'Payment': {
        images: [CandyPay, SplitWave],
        titles: ['Candy Pay', 'Split Wave'],
    },
    'DevTools': {
        images: [Anchor, Helius],
        titles: ['Anchor', 'Helius'],
    },
    'Wallet': {
        images: [Phantom, Squads],
        titles: ['Phantom', 'Squads'],
    },
};

const FeatureItem: React.FC<FeatureItemProps> = ({ activeButton, animate }) => {
    const { images, titles } = featItemData[activeButton as keyof typeof featItemData];

    return (
        <div className="w-[48rem] flex flex-row items-center justify-center sm:gap-[1.69rem] gap-4 max-w-full">
            {images.map((image, index) => (
                <div key={index} className={`flex justify-center items-center gap-2 sm:gap-4 transition-all ${animate ? 'flip-in' : ''}   ease-in `}>
                    <Image src={image} alt={`Image ${index + 1}`} className="w-16 sm:w-20" />
                    <div className="relative tracking-[0.02em] leading-[1.88rem] font-semibold text-xl mq450:leading-[1.13rem] sm:text-4xl mq1000:leading-[1.5rem] w-auto sm:w-48">
                        {titles[index]}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureItem;
