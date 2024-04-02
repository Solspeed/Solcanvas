'use client'

import { useState } from "react"

export default function Commits() {
    const [showAllCommits, setShowAllCommits] = useState(false)

    const handleSeeAllCommitsClick = () => {
        showAllCommits ? setShowAllCommits(false) : setShowAllCommits(true);
    };
    return (
        <div className="flex flex-col   sm:mt-64 mt-24 w-full">
            <div className="mx-2.5  sm:text-5xl mb-3 text-4xl tracking-tighter font-semibold sm:tracking-wider leading-8 text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Commits
            </div>
            <div className="flex  scale-[0.8] gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1345px] flex-wrap">
                <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                    8bpx5gh7sg....
                </div>
                <div className="flex items-center gap-2 xl:-mr-6">
                    <div className="lg:text-2xl text-[#42FF00] self-baseline sm:text-xl text-base tracking-wide leading-8">
                        Live
                    </div>
                    <div className="w-[18px] h-[18px] rounded-full bg-[#42FF00] inline-block "></div>
                </div>
            </div>
            <div className="flex scale-[0.8] gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1345px] flex-wrap">
                <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                    8bpx5gh7sg....
                </div>
                <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                    Past
                </div>
            </div>
            <div className={`flex scale-[0.8] gap-5 ${showAllCommits ? '' : 'hidden'} self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1345px] flex-wrap`}>
                <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                    8bpx5gh7sg....
                </div>
                <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                    Past
                </div>
            </div>
            {!showAllCommits && (
                <button onClick={handleSeeAllCommitsClick} className="self-center sm:mt-12 mt-6 sm:text-3xl text-xl font-medium tracking-wide leading-8 text-zinc-400 max-md:mt-10">
                    See all
                </button>
            )}
            {showAllCommits && (
                <button onClick={handleSeeAllCommitsClick} className="self-center sm:mt-12 mt-6 sm:text-3xl text-xl font-medium tracking-wide leading-8 text-zinc-400 max-md:mt-10">
                    See less
                </button>
            )}
        </div>
    )
}