// FeatureItem.js

import React from "react";
import Image from "next/image";

interface FeatureItemProps {
  images: string[];
  titles: string[];
}

const FeatureItem: React.FC<FeatureItemProps> = ({ images, titles }) => {
  return (
    <div className="w-[48rem] flex flex-row items-center justify-center sm:gap-[1.69rem] gap-4 max-w-full">
      {images.map((image, index) => (
        <div key={index} className="flex  justify-center items-center gap-2 sm:gap-4">
          <Image width="100" height={100} src={image} alt={`Image ${index + 1}`} className="w-16 sm:w-20" />
          <div className="relative tracking-[0.02em] leading-[1.88rem] font-semibold text-xl mq450:leading-[1.13rem] sm:text-4xl mq1000:leading-[1.5rem]">
            {titles[index]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureItem;
