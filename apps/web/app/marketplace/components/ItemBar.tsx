import Image from "next/image";
import search from "../../../public/images/search.svg"
import profile from "../../../public/images/profile.svg"

export default function ItemBar() {
    return (
        <div className="flex flex-col gap-4 px-4 md:px-20 py-4 text-base tracking-normal leading-8 bg-black border-t border-b border-solid border-white border-opacity-10">
            <div className="flex sm:flex-row flex-col gap-4 items- justify-between">
                <div className="flex xl:w-[39.5rem] md:w-[20rem] sm:w-[16rem] gap-4 p-3 w-full bg-neutral-900 rounded-[30px] text-zinc-400">
                    <Image
                        loading="lazy"
                        src={search}
                        className="shrink-0 aspect-square w-[18px]"
                        alt="Search Icon"
                    />
                    <div className="flex-auto">Search projects....</div>
                </div>
                <div className="flex gap-4 items-center sm:justify-normal justify-evenly text-white">
                    <div>Wallet</div>
                    <div className="border border-solid bg-zinc-400 border-zinc-400 h-[30px] " />
                    <div className="shrink-0">Submit Project</div>
                    <div className="border border-solid bg-zinc-400 border-zinc-400 h-[30px] " />
                    <Image
                        loading="lazy"
                        src={profile}
                        className="shrink-0 aspect-[0.86] w-[31px]"
                        alt="Submit Icon"
                    />
                </div>
            </div>
        </div>
    );
}