"use client";
import { useState } from "react";
import { ChangeEvent } from "react";
import required from "../../../../public/images/required.png";
import next from "../../../../public/images/next.png";
import Image from "next/image";
import upload from "../../../../public/images/upload.png";
export default function ProjectBanner() {

    return (
        <form className="flex flex-col  self- sm:mt-24 font-nunito max-w-full mt-10 ">
            <div className="flex gap-2.5 self-start">
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
                <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[17px]" />
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
            </div>
            <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
                MAKE IT LOOK SEXY 🔥
            </div>
            <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
                Show world your product design skill of banner and logo.
            </div>
            <div className="flex gap-5  justify-between  w-full text-2xl tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap sm:mt-20 mt-10 max-w-full">
                <div className="flex flex-1 self-start  text-white text-opacity-80">
                    <div>Logo</div>
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
            <div className="flex gap-5 py-6 pr-3.5 pl-7 mt-8  bg-purple-300 rounded-xl max-md:flex-wrap max-md:pl-5">
                <img
                    loading="lazy"
                    src={upload.src}
                    className="shrink-0 my-auto  mr-4  aspect-square stroke-[2px] stroke-black w-[25px]"
                />
                <div className="flex flex-col  grow shrink-0 basis-0 w-full">
                    <div className="text-[30px] font-medium tracking-normal leading-8 text-blue-600">
                        <span className="text-black ">Drop, Paste here or</span>{" "}
                        <span className="text-blue-600 ">Browse</span>
                    </div>
                    <div className="mt-4 text-lg tracking-normal leading-8 text-black text-opacity-50">
                        Recommended size: 250*250 | JPG, PNG, GIF. Max sie: 50MB
                    </div>
                </div>
            </div>
            <div className="flex gap-5  w-full text-2xl tracking-wide leading-8 whitespace-nowrap flex-wrap mt-10 max-w-full">
                <div className="flex flex-1  self-start text-white text-opacity-80">
                    <div>Banner</div>
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
            <div className="flex gap-5 py-6 pr-3.5 pl-7 mt-8 w-full bg-purple-300 rounded-xl max-md:flex-wrap max-md:pl-5">
                <img
                    loading="lazy"
                    src={upload.src}
                    className="shrink-0 my-auto  mr-4  aspect-square stroke-[2px] stroke-black w-[25px]"
                />
                <div className="flex flex-col grow shrink-0 basis-0 w-full">
                    <div className="text-[30px] font-medium tracking-normal leading-8 text-blue-600">
                        <span className="text-black ">Drop, Paste here or</span>{" "}
                        <span className="text-blue-600 ">Browse</span>
                    </div>
                    <div className="mt-4 text-lg tracking-normal leading-8 text-black text-opacity-50">
                        Recommended size: 1500*500 | JPG, PNG, GIF. Max sie: 50MB
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-end  w-full text-2xl font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
                <a href="/addproject/banner" className="flex gap-5  font-nunito justify-between  items-center sm:-mr-12 sm:px-7 py-4 text-white text-opacity-80 bg-[#954AD2] rounded-3xl px-5">
                    <div>Finish</div>
                    <Image
                        alt=""
                        width={100}
                        height={100}
                        loading="lazy"
                        src={next}
                        className="shrink-0 w-4  aspect-[0.76] stroke-[2px] stroke-white"
                    />
                </a>
            </div>
        </form>
    );
}
