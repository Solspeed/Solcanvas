"use client";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import required from "../../../public/images/required.png";
import next from "../../../public/images/next.png";
import Image from "next/image";
import supabase from "../../../supabase";

export default function ProjectListing() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 45) setName(inputValue);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 80) setTitle(inputValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Insert data into 'project_listing' table
      const { data, error } = await supabase
        .from("project_listing")
        .insert([{ name, title }]);

      if (error) {
        throw error;
      }

      console.log("Data inserted successfully:", data);

      // Redirect or perform additional actions upon successful insertion
    } catch (error: any) {
      console.error("Error inserting data:", error.message);
      // Optionally, provide feedback to the user
      alert("Failed to insert data. Please try again later.");
    }
  };
  const nameCharacterCount = name.length;
  const bioCharacterCount = title.length;

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
            <div>Title</div>
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
          placeholder="Give a short title for your project."
          value={title}
          onChange={handleTitleChange}
          required
        />
        <button type="submit">
          <div className="flex gap-5 justify-end  w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
            <a
              href="/addproject/banner"
              className="flex gap-5  font-nunito justify-between  items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-3xl"
            >
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
