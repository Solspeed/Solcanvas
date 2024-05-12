"use client";
import next from "../../../../public/images/next.png";
import Image from "next/image";
import { ChangeEvent, useState } from 'react';

export default function Description() {
    const [projectDescription, setProjectDescription] = useState('');

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const description = event.target.value;
        if (description.length <= 1000) {
            setProjectDescription(description);
        } else {
            setProjectDescription(description.slice(0, 1000));
        }
    };

    const descriptionCharacterCount = projectDescription.length;

    return (
        <form action="/marketplace" className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10">
            <div className="flex gap-2.5 self-start">
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
                <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[11px]" />
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
            </div>
            <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
                TELL IN BRIEF
            </div>
            <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
                Give a long description of your project.
            </div>
            <div className=" 2xl:w-[1048px]  lg:w-[800px] md:w-[600px] sm:w-[400px] xl:w-[900px] ">
                <div className="flex gap-5 justify-end  text-[16px] tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap mt-10 w-full">
                    <div className="font-medium text-white text-opacity-30">
                        {descriptionCharacterCount}/1000
                    </div>
                </div>
                <textarea
                    className="items-start  self-center px-7 pt-7 pb-56 w-full  tracking-normal bg-black rounded-xl border border-solid border-white border-opacity-20 text-white text-opacity-70"
                    placeholder="Give a brief introduction about your project."
                    value={projectDescription}
                    onChange={handleDescriptionChange}
                    required
                />
                <div className="flex gap-5 justify-end w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-10 mt-8 max-w-full">
                    <button type="submit" className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]">
                        <div>Finish</div>
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