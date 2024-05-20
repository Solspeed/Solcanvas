"use client";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import required from "../../../public/images/required.png";
import next from "../../../public/images/next.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormData } from "./context/FormDataContext";

export default function ProjectListing() {
  const { formData, updateFormData } = useFormData();
  console.log("FormData:", formData);
  const [name, setName] = useState(formData.name || "");
  const [tagline, setTagline] = useState(formData.tagline || "");
  const router = useRouter();

  useEffect(() => {
    setName(formData.name || "");
    setTagline(formData.tagline || "");
  }, [formData]);

  
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const inputValue = event.target.value;
    updateFormData({ name: value });
    if (inputValue.length <= 45) setName(inputValue);
  };

  const handleTaglineChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    updateFormData({ tagline: value });
    const inputValue = event.target.value;
    if (inputValue.length <= 80) setTagline(inputValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/addproject/categories");
  };
  const nameCharacterCount = name.length;
  const bioCharacterCount = tagline.length;

  return (
    <form
      className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-2.5 self-start">
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
        <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[11px]" />
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
      </div>
      <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
        GM, "USER NAME"
      </div>
      <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
        Lets get started by adding your project
        <br />
        to showcase the world
      </div>
      <div className="sm:w-[457px]">
        <div className="flex gap-5  justify-between  w-full text-[16px] tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap sm:mt-20 mt-10 max-w-full">
          <div className="flex flex-1 self-start  text-white text-opacity-80">
            <div>Name of the project</div>
            <Image
              alt=""
              width={100}
              height={100}
              loading="lazy"
              src={required}
              className="shrink-0 self-start w-3.5 aspect-square"
            />
          </div>
          <div className="font-medium text-white text-opacity-30">
            {nameCharacterCount}/45
          </div>
        </div>
        <input
          className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[12px] text-[16px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
          placeholder="Project name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <div className="flex gap-5  w-full text-[16px] tracking-wide leading-8 whitespace-nowrap flex-wrap mt-10 max-w-full">
          <div className="flex flex-1  self-start text-white text-opacity-80">
            <div>Tagline</div>
            <Image
              alt=""
              width={100}
              height={100}
              loading="lazy"
              src={required}
              className="shrink-0 self-start w-3.5 aspect-square"
            />
          </div>
          <div className="font-medium text-white text-opacity-30">
            {bioCharacterCount}/80
          </div>
        </div>
        <input
          className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[12px] text-[16px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
          placeholder="Give a short tagline for your project."
          value={tagline}
          onChange={handleTaglineChange}
          required
        />
        <button type="submit">
          <div className="flex gap-5 justify-end  w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
            <a className="flex gap-5  font-nunito justify-between  items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-3xl">
              <div>Next</div>
              <Image
                alt=""
                width={100}
                height={100}
                loading="lazy"
                src={next}
                className="shrink-0 w-[12px]  aspect-[0.76] stroke-[2px] stroke-white"
              />
            </a>
          </div>
        </button>
      </div>
    </form>
  );
}
