'use client'

import { useState } from "react"

export default function Updates() {
    const [showAllUpdates, setShowAllUpdates] = useState(false)

    const handleSeeAllUpdatesClick = () => {
        showAllUpdates ? setShowAllUpdates(false) : setShowAllUpdates(true);
    };
    return (

        <div className="flex flex-col sm:mt-64 mt-24 w-full">
            <div className="mx-2.5  sm:text-5xl mb-3 text-4xl tracking-tighter font-semibold sm:tracking-wider leading-8 text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Product Updates
            </div>
            <div className="flex scale-[0.8] gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1390px] flex-wrap">
                <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                    Started their first round of funding
                </div>
                <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                    25 Jan, 2024
                </div>
            </div>
            <div className={`flex scale-[0.8] gap-5 ${showAllUpdates ? '' : 'blur-[3px]'} self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1350px] flex-wrap`}>
                <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                    Started their first round of funding
                </div>
                <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                    25 Jan, 2024
                </div>
            </div>
            <div className={`flex scale-[0.8] gap-5 ${showAllUpdates ? '' : 'hidden'} self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1350px] flex-wrap`}>
                <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                    Started their first round of funding
                </div>
                <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                    25 Jan, 2024
                </div>
            </div>
            {!showAllUpdates && (
                <button onClick={handleSeeAllUpdatesClick} className="self-center sm:mt-12 mt-6 sm:text-3xl text-xl font-medium tracking-wide leading-8 text-zinc-400 max-md:mt-10">
                    See all
                </button>
            )}
            {showAllUpdates && (
                <button onClick={handleSeeAllUpdatesClick} className="self-center sm:mt-12 mt-6 sm:text-3xl text-xl font-medium tracking-wide leading-8 text-zinc-400 max-md:mt-10">
                    See all
                </button>
            )}
        </div>

    )
}