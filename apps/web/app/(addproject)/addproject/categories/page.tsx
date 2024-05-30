"use client";
import { useState, useEffect } from "react";
import required from "../../../../public/images/required.png";
import next from "../../../../public/images/next.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormData } from "../context/FormDataContext";

export default function Categories() {
  const { formData, updateFormData } = useFormData();
  const router = useRouter();
  const [category, setCategory] = useState(formData.category || "");
  console.log("FormData:", formData);
  useEffect(() => {
    setCategory(formData.category || "");
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData({ ...formData, category });
    
  };
  const handleNextClick = () => {
    router.push("/addproject/banner");
  };

  const handlePreviousClick = () => {
    router.push("/addproject/");
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  return (
    <form
      className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10"
      onClick={handleSubmit}
    >
      <div className="flex gap-2.5 self-start">
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px] w-[38px]" />
        <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[11px]" />
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px] w-[38px]" />
      </div>
      <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
        Choose Category
      </div>
      <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
        Choose a category which your
        <br />
        project lies in.
      </div>
      <div className="sm:w-[457px]">
        <div className="flex gap-5 justify-between w-full text-[16px] tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap sm:mt-20 mt-10 max-w-full">
          <div className="flex flex-1 self-start text-white text-opacity-80">
            <div>Categories</div>
            <Image
              alt=""
              width={100}
              height={100}
              loading="lazy"
              src={required}
              className="shrink-0 self-start w-3.5 aspect-square"
            />
          </div>
        </div>
        <select
          className="mt-4 w-full p-3 text-[16px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 text-black text-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-600 cursor-pointer relative"
          value={category}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            Select
          </option>
          <option value="Step Finance">Step Finance</option>
          <option value="Hello Moon">Hello Moon</option>
          <option value="Cex">Cex</option>
          <option value="OKX">OKX</option>
          <option value="Binance">Binance</option>
          <option value="DeFi">DeFi</option>
          <option value="Mango">Mango</option>
          <option value="Jupiter Aggregator">Jupiter Aggregator</option>
          <option value="Developer Tool">Developer Tool</option>
          <option value="Squads">Squads</option>
          <option value="Tiny Dancer">Tiny Dancer</option>
          <option value="Digital Collectibles">Digital Collectibles</option>
          <option value="Drip">Drip</option>
          <option value="Art">Art</option>
          <option value="Dao">Dao</option>
          <option value="Depin">Depin</option>
          <option value="Explorer">Explorer</option>
          <option value="Gaming">Gaming</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Mobile">Mobile</option>
          <option value="Oracle">Oracle</option>
          <option value="Payments">Payments</option>
          <option value="Privacy">Privacy</option>
          <option value="Social Protocol">Social Protocol</option>
          <option value="Stable Coin">Stable Coin</option>
          <option value="Wallet">Wallet</option>
          <option value="Others">Others</option>
        </select>
        <div className="flex gap-5 justify-between w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-36 mt-20 max-w-full">
          <button
              onClick={handlePreviousClick}
            className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-8 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]"
          >
            <div>Back</div>
          </button>
          <button
            type="submit"
            onClick={handleNextClick}
            className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]"
          >
          
            <div>Next</div>
            <Image
              alt=""
              width={100}
              height={100}
              loading="lazy"
              src={next}
              className="shrink-0 w-[12px] aspect-[0.76] stroke-[2px] stroke-white"
            />
          </button>
        </div>
      </div>
    </form>
  );
}
``;
