'use client'

import { useState } from "react"
import Marquee from "react-fast-marquee"

export default function Tweets() {
    const [isPaused, setIsPaused] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center sm:mt-36 mt-20">
            <Marquee
                speed={40}
                pauseOnHover={!isPaused}
            >
                <div className=" rounded-[20px] px-10 py-12 flex items-center justify-center mx-[150px]" style={{ backgroundImage: "linear-gradient(to bottom right, #848482 0%, black 100%)" }}>
                    <div className="bg-white  border-gray-200  p-4 rounded-xl border max-w-xl">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <img className="h-11 w-11 rounded-full" src="/images/marketplace/twitterOld.png" />
                                <div className="ml-1.5 text-sm leading-tight">
                                    <span className="text-black  font-bold block ">Solcanvas</span>
                                    <span className="text-gray-500  font-normal block">@Sol_canvas</span>
                                </div>
                            </div>
                            <img src="/images/marketplace/twitterOld.png" className="text-blue-400  h-6 w-auto inline-block fill-current" />
                        </div>
                        <p className="text-black  block text-base leading-snug mt-3">“Ever thought about the thrill of earning rewards while you edit or create project pages of the Solana ecosystem?” — SolCanvas</p>
                        <p className="text-gray-500  text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
                        <div className="border-gray-200 border border-b-0 my-1"></div>
                    </div>
                </div>

                <div className=" rounded-[20px] px-10 py-12 flex items-center justify-center mx-[150px]" style={{ backgroundImage: "linear-gradient(to bottom right, #848482 0%, black 100%)" }}>
                    <div className="bg-white  border-gray-200  p-4 rounded-xl border max-w-xl">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <img className="h-11 w-11 rounded-full" src="/images/marketplace/twitterOld.png" />
                                <div className="ml-1.5 text-sm leading-tight">
                                    <span className="text-black  font-bold block ">Solcanvas</span>
                                    <span className="text-gray-500  font-normal block">@Sol_canvas</span>
                                </div>
                            </div>
                            <img src="/images/marketplace/twitterOld.png" className="text-blue-400  h-6 w-auto inline-block fill-current" />
                        </div>
                        <p className="text-black  block text-base leading-snug mt-3">“Ever thought about the thrill of earning rewards while you edit or create project pages of the Solana ecosystem?” — SolCanvas</p>
                        <p className="text-gray-500  text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
                        <div className="border-gray-200 border border-b-0 my-1"></div>
                    </div>
                </div>
                <div className=" rounded-[20px] px-10 py-12 flex items-center justify-center mx-[150px]" style={{ backgroundImage: "linear-gradient(to bottom right, #848482 0%, black 100%)" }}>
                    <div className="bg-white  border-gray-200  p-4 rounded-xl border max-w-xl">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <img className="h-11 w-11 rounded-full" src="/images/marketplace/twitterOld.png" />
                                <div className="ml-1.5 text-sm leading-tight">
                                    <span className="text-black  font-bold block ">Solcanvas</span>
                                    <span className="text-gray-500  font-normal block">@Sol_canvas</span>
                                </div>
                            </div>
                            <img src="/images/marketplace/twitterOld.png" className="text-blue-400  h-6 w-auto inline-block fill-current" />
                        </div>
                        <p className="text-black  block text-base leading-snug mt-3">“Ever thought about the thrill of earning rewards while you edit or create project pages of the Solana ecosystem?” — SolCanvas</p>
                        <p className="text-gray-500  text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
                        <div className="border-gray-200 border border-b-0 my-1"></div>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}