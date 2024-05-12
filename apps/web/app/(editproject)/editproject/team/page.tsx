'use client'

import React, { useState, ChangeEvent } from "react";
import required from "../../../../public/images/required.png";
import next from "../../../../public/images/next.png";
import Image from "next/image";
import upload from "../../../../public/images/upload.png";

interface Member {
    name: string;
    github: string;
    twitter: string;
    image: File | string | null;
}

export default function Team(): JSX.Element {
    const [members, setMembers] = useState<Member[]>([{ name: "", github: "", twitter: "", image: null }]);

    const handleMemberImageSelect = (event: ChangeEvent<HTMLInputElement>, index: number): void => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setMembers((prevMembers) => {
                const newMembers = [...prevMembers];
                const member = newMembers[index] || { name: "", github: "", twitter: "", image: null };
                member.image = selectedFile;
                newMembers[index] = member;
                return newMembers;
            });
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, index: number, field: keyof Member): void => {
        const { value } = event.target;
        setMembers((prevMembers) => {
            const newMembers = [...prevMembers];
            const member = newMembers[index] || { name: "", github: "", twitter: "", image: null };
            member[field] = value;
            newMembers[index] = member;
            return newMembers;
        });
    };



    const removeImage = (index: number): void => {
        setMembers((prevMembers) => {
            const newMembers = [...prevMembers];
            newMembers[index]!.image = null;
            return newMembers;
        });
    };

    const addMember = (): void => {
        setMembers((prevMembers) => [...prevMembers, { name: "", github: "", twitter: "", image: null }]);
    };

    return (
        <form action="/marketplace" className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10 ">
            <div className="flex gap-2.5 self-start">
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
                <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[11px]" />
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
            </div>
            <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
                EDIT YOUR TEAM 🫂
            </div>
            <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
                Show world your product design skill of banner and logo.
            </div>
            <div className="sm:w-[875px]">
                <div className="flex gap-5 justify-between w-full text-2xl tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap sm:mt-20 mt-10 max-w-full">
                    <div className="flex flex-1 self-start text-white text-opacity-80">
                        <div>Team Members</div>
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
                {members.map((member, index) => (
                    <div key={index} className="flex gap-3.5 items-center self-center mt-8 w-full xl:flex-nowrap flex-wrap">
                        <div className="flex items-center justify-center  bg-[#DCA7FB] rounded-[10px] flex-col px-2 aspect-square">
                            <input
                                type="file"
                                accept="image/jpeg, image/png, image/gif"
                                onChange={(e) => handleMemberImageSelect(e, index)}
                                className="hidden"
                                id={`memberImageInput-${index}`}
                            />
                            {member.image && typeof member.image === 'object' ? (
                                <div className="flex items-center gap-2 p-[1.45rem] text-xs font-medium tracking-normal leading-8">
                                    <span className="text-black">{(member.image as File).name.slice(0, 7)}...</span>
                                    <button onClick={() => removeImage(index)} className="text-red-600 cursor-pointer">Remove</button>
                                </div>
                            ) : (
                                <label htmlFor={`memberImageInput-${index}`} className="cursor-pointer">
                                    <img
                                        loading="lazy"
                                        src={upload.src}
                                        className="shrink-0 aspect-square stroke-[2px] stroke-black w-[25px] "
                                    />
                                    <div className=" text-xs font-medium tracking-normal leading-8 text-blue-600">
                                        <div className="text-black text-nowrap">Drop, Paste here or <span className="text-blue-600">Browse</span></div>
                                    </div>
                                </label>
                            )}
                            <div className=" mt-2 text-xs tracking-normal leading-3 text-center text-black text-opacity-50">
                                Recommended size: 250*250
                                <br />
                                JPG, PNG, GIF. Max size: 5MB
                            </div>
                        </div>
                        <input
                            className="justify-center items-start pl-4 py-4 my-auto text-[18px] font-medium tracking-normal leading-8 bg-[#DCA7FB] rounded-xl  text-black text-opacity-60  placeholder:text-[16px] placeholder:font-nunito placeholder:text-black  placeholder:text-opacity-40"
                            placeholder="Name of the member"
                            value={member.name}
                            onChange={(e) => handleInputChange(e, index, "name")}
                        />
                        <input
                            className="justify-center items-start pl-4 py-4 my-auto text-[18px] font-medium tracking-normal leading-8 bg-[#DCA7FB] rounded-xl  text-black text-opacity-60  placeholder:text-[16px] placeholder:font-nunito placeholder:text-black  placeholder:text-opacity-40"
                            placeholder="@Github"
                            value={member.github}
                            onChange={(e) => handleInputChange(e, index, "github")}
                        />
                        <input
                            className="justify-center items-start pl-4 py-4 my-auto text-[18px] font-medium tracking-normal leading-8 bg-[#DCA7FB] rounded-xl  text-black text-opacity-60  placeholder:text-[16px] placeholder:font-nunito placeholder:text-black  placeholder:text-opacity-40"
                            placeholder="@Twitter"
                            value={member.twitter}
                            onChange={(e) => handleInputChange(e, index, "twitter")}
                        />
                    </div>
                ))}
                <div
                    className="justify-center text-center items-center self-center px-16 py-4 mt-12 w-full text-xl font-medium tracking-wide leading-8 bg-[#DCA7FB] rounded-xl border border-dashed border-white border-opacity-30 max-w-[879px] text-black text-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full cursor-pointer"
                    onClick={addMember}
                >
                    Add Another Member
                </div>
                <div className="flex gap-5 justify-end w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
                 
                    <button type="submit" className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]">
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