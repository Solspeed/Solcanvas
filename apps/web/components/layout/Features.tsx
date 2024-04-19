'use client'

import React, { useState } from "react";
import FeatureItem from "./FeatComp";

export default function Features() {
  const [activeButton, setActiveButton] = useState<string>('Payment');
  const [animationTrigger, setAnimationTrigger] = useState<boolean>(false);

  const buttons = [
    { label: "DeFi", name: "DeFi" },
    { label: "Payment", name: "Payment" },
    { label: "Dev Tools", name: "DevTools" },
    { label: "Wallet", name: "Wallet" }
  ];

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setAnimationTrigger(true);
    setTimeout(() => setAnimationTrigger(false), 500);
  };

  const getButtonShadow = (buttonName: string) => {
    return activeButton === buttonName
      ? "shadow-[4px_4px_70px_4px_rgba(105,_70,_226,_0.8)]"
      : "hover:shadow-[1px_1px_40px_1px_rgba(105,_70,_226,_0.35)]";
  };

  return (
    <div className="w-[65.44rem] flex flex-col items-center justify-start pt-[0rem] px-[1.25rem]  box-border gap-[7.31rem] max-w-full text-left text-[2.38rem] text-white  mq725:gap-[7.31rem] mq450:pb-[2.75rem] mq450:box-border mq1050:gap-[7.31rem]">
      <div className="self-stretch flex flex-row items-start justify-center gap-[1.81rem] mq1000:flex-wrap">
        {buttons.map(button => (
          <button
            key={button.name}
            onClick={() => handleButtonClick(button.name)}
            className={`cursor-pointer border:none py-[1.25rem] pr-[1.5rem] pl-[1.25rem] bg-black flex-1 rounded-full ${getButtonShadow(
              button.name
            )} flex flex-row items-center justify-center box-border min-w-[9.31rem]  mq1000:flex-1`}
          >
            <div className="relative text-[1.25rem] tracking-[0.02em] leading-[1.875rem] font-medium font-nunito text-white  inline-block  z-[1] mq450:text-[1rem] mq450:leading-[1.5rem]">
              {button.label}
            </div>
          </button>
        ))}
      </div>
      <FeatureItem activeButton={activeButton} animate={animationTrigger} />
    </div>
  );
}