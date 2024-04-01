'use client'

import Image from "next/image";
import cubik from "../../../public/images/marketplace/projects/cubikBanner.png"
import cubikLogo from "../../../public/images/marketplace/projects/cubikLogo.png"
import projectGithub from "../../../public/images/marketplace/projects/github.png"
import projectTwitter from "../../../public/images/marketplace/projects/twitter.png"
import projectDiscord from "../../../public/images/marketplace/projects/discord.png"
import projectWebsite from "../../../public/images/marketplace/projects/website.png"
import irfanAvatar from "../../../public/images/marketplace/projects/irfanAvatar.png"
import dhruvAvatar from "../../../public/images/marketplace/projects/dhruvAvatar.png"
import avatarBg from "../../../public/images/marketplace/projects/avatarBg.png"
import github from "../../../public/images/github.png"
import twitter from "../../../public/images/twitter.png"
import Marquee from 'react-fast-marquee'
import { useState } from "react";
import CustomButton from "../../../components/button/CustomButton";
import Link from "next/link";

export default function ProjectDetails({
    params,
}: {
    params: { projectName: string };
}) {
    const [isPaused, setIsPaused] = useState(false);
    const [showAllCommits, setShowAllCommits] = useState(false);
    const [showAllUpdates, setShowAllUpdates] = useState(false);


    const handleSeeAllCommitsClick = () => {
        setShowAllCommits(true);
    };
    const handleSeeAllUpdatesClick = () => {
        setShowAllUpdates(true);
    };

    return (
        <div className="flex flex-col xl:px-14 sm:px-10 px-4 xl:py-16 sm:py-12 py-6 bg-black ">
            <div className="flex flex-col  w-full max-md:px-5 max-md:max-w-full">
                <Link href="/marketplace" className="text-white text-opacity-60 text-lg  font-semibold ">
                    get back to marketplace
                </Link>
                <Image
                    alt="cubik banner"
                    src={cubik}
                    className="w-full  object-cover"
                    width={1920}
                    height={365}
                />
                <Image
                    src={cubikLogo}
                    alt="Profile picture"
                    className="z-10 lg:-mt-[110px] sm:-mt-[70px] md:-mt-[90px] -mt-[35px] md:w-[180px] lg:ml-20 sm:ml-8 md:ml-12 ml-6 w-[70px] rounded-full sm:w-[140px] lg:w-[220px] max-md:ml-2.5"
                    width={220}
                    height={220}
                />
                <div className="flex xl:gap-24 gap-5 xl:flex-row flex-col sm:mt-12 mt-6 justify-between">
                    <div className="flex flex-col grow font-semibold xl:max-w-[946px] xl:w-[60%] w-full">
                        <div className="flex items-center sm:gap-5 gap-2 self-start whitespace-nowrap">
                            <h1 className="flex-auto sm:text-5xl text-4xl tracking-wider leading-8 text-white max-md:text-4xl">
                                Cubic
                            </h1>
                            <button className="justify-center sm:scale-[1] scale-[0.9] px-[14px] py-[1px] mt-1 text-sm tracking-wide leading-7 text-black uppercase bg-lime-500 rounded-xl">
                                Upvote
                            </button>
                        </div>
                        <p className="mt-2 sm:mt-4 sm:text-2xl text-xl tracking-wide leading-8 text-white text-opacity-70  font-semibold">
                            The genesis of leading Solana initiatives.
                        </p>
                        <ul className="sm:mt-12 mt-6 md:leading-relaxed font-medium lg:leading-loose xl:leading-relaxed 2xl:leading-loose ml-2 sm:ml-4 text-base sm:text-[22px]  tracking-tight sm:tracking-[2%] leading-8 text-justify text-white list-disc">
                            <li>
                                Cubik is an innovative platform designed to revolutionize
                                the way open-source projects are funded and supported. It is
                                crafted with a developer-centric approach, catering to the
                                unique challenges faced by developers while endorsing the
                                power of community participation.
                            </li>
                            <li>
                                At its core, Cubik aims to provide developers the
                                recognition, support, and resources they deserve for
                                bringing their innovative visions to life. This platform
                                aspires to bridge the persisting funding gap in the
                                open-source ecosystem.
                            </li>
                            <li>
                                <strong>Quadratic Voting</strong>
                                <br />
                                One of Cubik's unique features is the incorporation of a
                                fair coordination mechanism known as quadratic voting. In
                                contrast to traditional crowdfunding where the impact is
                                directly proportional to the donation size, quadratic voting
                                allows even a small donation to have a significantly larger
                                influence.
                            </li>
                            <li>
                                This mechanism encourages individuals to donate to projects
                                they genuinely care about, irrespective of their financial
                                capability. It ensures that grant funds, hackathon prize
                                pools, and various resources are distributed in a fair and
                                transparent manner.
                            </li>
                            <li>
                                <strong>Community Involvement</strong>
                                <br />
                                On Cubik, the community participates actively in resource
                                distribution.
                                <br />
                                Developers can create a profile, submit their project,
                                participate in hackathons, and apply for grants within
                                minutes.
                                <br />
                                It also facilitates a decentralized grant round where the
                                community collectively determines the allocation of
                                resources.
                            </li>
                            <li>
                                <strong>Mission</strong>
                                <br />
                                Cubik's mission is to ensure developers receive recognition,
                                support, and resources they need to bring their visions to
                                life, aiming to bridge the funding gap in open-source
                                projects.
                            </li>
                        </ul>
                    </div>
                    <div className="flex xl:gap-0 sm:gap-5 items-center sm:flex-row flex-col xl:flex-col xl:justify-normal sm:justify-evenly sm:items-center xl:max-w-[395px] xl:w-[40%] 2xl:mr-16 xl:mt-0 mt-4">
                        <div className="flex gap-5 sm:w-full xl:justify-normal sm:justify-evenly">
                            <div className="flex  justify-center items-center sm:px-7 sm:py-11 rounded-xl bg-neutral-900">
                                <Image
                                    alt=""
                                    src={projectGithub}
                                    className="aspect-square"
                                />
                            </div>
                            <div className="flex  justify-center items-center sm:px-7 sm:py-12 rounded-xl bg-neutral-900">
                                <Image
                                    alt=""
                                    src={projectTwitter}
                                    className="aspect-square"
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 xl:mt-8 sm:mt-0 mt-8 sm:w-full xl:justify-normal sm:justify-evenly ">
                            <div className="flex  justify-center items-center sm:px-7 sm:py-12 rounded-xl bg-neutral-900">
                                <Image
                                    alt=""
                                    src={projectDiscord}
                                    className="aspect-square "
                                />
                            </div>
                            <div className="flex  justify-center items-center sm:px-7 sm:py-12 rounded-xl bg-neutral-900">
                                <Image
                                    alt=""
                                    src={projectWebsite}
                                    className="aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="self-start sm:mt-40 mt-24 sm:text-5xl text-4xl font-semibold tracking-wider leading-8 text-white max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
                        Team
                    </h2>
                    <div className="grid lg:grid-cols-2 place-items-center lg:mr-0  -ml-16 sm:gap-16 sm:mt-12 mt-6">
                        <div className=" xl:w-[576px] xl:h-[315px] w-[476px] h-[215px] mr-4 relative sm:scale-[0.7] scale-[0.6]  sm:ml-0 -ml-12 xl:scale-[1] ">
                            <div className=" w-[374px] h-[315px] left-0 top-0 absolute">
                                <img className=" z-0 w-[317px] object-fill h-[211px] left-0 top-[104px] absolute" src="/images/marketplace/projects/avatarBg.png" />
                                <img className="Z-10 w-[265px] z-10 h-[265px] object-fill left-[109px] top-0 absolute rounded-full" src="/images/marketplace/projects/irfanAvatar.png" />
                            </div>
                            <div className="z-50 left-[450px] top-[123px] absolute text-white text-opacity-70 text-[26px] font-semibold   leading-[30px] tracking-wide">@Irfan<br /></div>
                            <img className="z-100 w-[37px] h-[37px] left-[410px] top-[121px] absolute" src='/images/twitter.png' />
                            <img className="z-20 w-[37px] h-[37px] left-[410px] top-[173px] absolute" src='/images/github.png' />
                        </div>
                        <div className=" xl:w-[576px] xl:h-[315px] w-[476px] h-[215px] mr-4 relative sm:scale-[0.7] scale-[0.6]  sm:ml-0 -ml-12 xl:scale-[1] ">
                            <div className=" w-[374px] h-[315px] left-0 top-0 absolute">
                                <img className=" z-0 w-[317px] object-fill h-[211px] left-0 top-[104px] absolute" src="/images/marketplace/projects/avatarBg.png" />
                                <img className="Z-10 w-[265px] z-10 h-[265px] object-fill left-[109px] top-0 absolute rounded-full" src="/images/marketplace/projects/dhruvAvatar.png" />
                            </div>
                            <div className="z-50 left-[450px] top-[123px] absolute text-white text-opacity-70 text-[26px] font-semibold   leading-[30px] tracking-wide">@Dhruv<br /></div>
                            <img className="z-100 w-[37px] h-[37px] left-[410px] top-[121px] absolute" src='/images/twitter.png' />
                            <img className="z-20 w-[37px] h-[37px] left-[410px] top-[173px] absolute" src='/images/github.png' />
                        </div>
                        <div className=" xl:w-[576px] xl:h-[315px] w-[476px] h-[215px] mr-4 relative sm:scale-[0.7] scale-[0.6]  sm:ml-0 -ml-12 xl:scale-[1] ">
                            <div className=" w-[374px] h-[315px] left-0 top-0 absolute">
                                <img className=" z-0 w-[317px] object-fill h-[211px] left-0 top-[104px] absolute" src="/images/marketplace/projects/avatarBg.png" />
                                <img className="Z-10 w-[265px] z-10 h-[265px] object-fill left-[109px] top-0 absolute rounded-full" src="/images/marketplace/projects/irfanAvatar.png" />
                            </div>
                            <div className="z-50 left-[450px] top-[123px] absolute text-white text-opacity-70 text-[26px] font-semibold   leading-[30px] tracking-wide">@Junad<br /></div>
                            <img className="z-100 w-[37px] h-[37px] left-[410px] top-[121px] absolute" src='/images/twitter.png' />
                            <img className="z-20 w-[37px] h-[37px] left-[410px] top-[173px] absolute" src='/images/github.png' />
                        </div>
                    </div>
                </div>
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
                <div className="flex flex-col sm:mt-64 mt-24 w-full">
                    <div className="mx-2.5  sm:text-5xl mb-3 text-4xl tracking-tighter font-semibold sm:tracking-wider leading-8 text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                        Product Updates
                    </div>
                    <div className="flex gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1390px] flex-wrap">
                        <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                            Started their first round of funding
                        </div>
                        <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                            25 Jan, 2024
                        </div>
                    </div>
                    <div className={`flex gap-5 ${showAllUpdates ? '' : 'blur-[3px]'} self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1350px] flex-wrap`}>
                        <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                            Started their first round of funding
                        </div>
                        <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                            25 Jan, 2024
                        </div>
                    </div>
                    <div className={`flex gap-5 ${showAllUpdates ? '' : 'hidden'} self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1350px] flex-wrap`}>
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
                </div>
                <div className="flex flex-col sm:mt-64 mt-24 w-full">
                    <div className="mx-2.5  sm:text-5xl mb-3 text-4xl tracking-tighter font-semibold sm:tracking-wider leading-8 text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                        Commits
                    </div>
                    <div className="flex gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1345px] flex-wrap">
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
                    <div className="flex gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1345px] flex-wrap">
                        <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                            8bpx5gh7sg....
                        </div>
                        <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                            Past
                        </div>
                    </div>
                    {/* <div className="flex gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1345px] flex-wrap">
                        <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                            8bpx5gh7sg....
                        </div>
                        <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                            Past
                        </div>
                    </div>
                    <div className="flex gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1345px] flex-wrap">
                        <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
                            8bpx5gh7sg....
                        </div>
                        <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
                            Past
                        </div>
                    </div> */}
                    <div className={`flex gap-5 ${showAllCommits ? '' : 'hidden'} self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium text-white rounded-2xl bg-neutral-900 max-w-[1345px] flex-wrap`}>
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
                </div>
                <div className="flex flex-col items-center  w-full font-medium  leading-8">
                    <CustomButton text="Edit Project" property1="variant-2" className="flex hover:cursor-pointer  justify-center items-center text-center px-16 py-10 sm:mt-80 mt-36 max-w-full  tracking-wider leading-8 bg-black rounded-2xl text-zinc-400 w-[972px]" />
                    <div className="sm:mt-80 mt-36 sm:text-xl text-lg text-center text-white text-opacity-60">
                        All right reserved @solcanvas
                    </div>
                </div>
            </div>
        </div>
    )
}