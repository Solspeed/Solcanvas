import React from "react";

const SideNavbar = () => {
  return (
    <div className="flex-none h-screen bg-[#0A0A0A]">
      <div className="sm:flex font-silkscreen hidden h-full flex-col justify-between">
        <div className="flex flex-col grow px-9 pt-14 pb-9 w-full text-base text-purple-600 whitespace-nowrap">
          <div className="text-xl font-bold">Solcavas</div>
          <button className="mt-36 text-[#DFA9FE] max-md:mt-10">Home</button>
          <button className="mt-12 text-white max-md:mt-10">Rewards</button>
        </div>
        <button className="self-center mb-12 text-[#954AD2]">Exit</button>
      </div>
    </div>
  )
};

export default SideNavbar;
