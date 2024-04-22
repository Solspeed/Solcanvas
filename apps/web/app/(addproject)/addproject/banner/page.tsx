"use client";
import { useState } from "react";
import { ChangeEvent } from "react";
import required from "../../../../public/images/required.png";
import next from "../../../public/images/next.png";
import Image from "next/image";

export default function ProjectBanner() {

    return (
        <form className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10 ">
            <div className="flex gap-2.5 self-start">
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
                <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[17px]" />
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
            </div>
            <div className="mt-11 sm:text-5xl font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
                MAKE IT LOOK SEXY 🔥
            </div>
            <div className="mt-5 text-2xl font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
                Show world your product design skill of banner and logo.
            </div>

        </form>
    );
}
