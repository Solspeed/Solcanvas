import Image from "next/image";

export default function Overview() {
    return (
        <div>
            <Image
                alt="cubik banner"
                src="/images/marketplace/projects/cubikBanner.png"
                className="w-full  object-cover"
                width={1920}
                height={365}
            />
            <Image
                src="/images/marketplace/projects/cubikLogo.png"
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
                        <div className="flex  w-full justify-center items-center sm:px-7 sm:py-11 rounded-xl bg-neutral-900">
                            <Image
                                alt=""
                                src="/images/marketplace/projects/github.png"
                                className="aspect-square"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex  w-full justify-center items-center sm:px-7 sm:py-12 rounded-xl bg-neutral-900">
                            <Image
                                alt=""
                                src="/images/marketplace/projects/twitter.png"
                                className="aspect-square"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className="flex gap-5 xl:mt-8 sm:mt-0 mt-8 sm:w-full xl:justify-normal sm:justify-evenly ">
                        <div className="flex w-full  justify-center items-center sm:px-7 sm:py-12 rounded-xl bg-neutral-900">
                            <Image
                                alt=""
                                src="/images/marketplace/projects/discord.png"
                                className="aspect-square "
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex w-full  justify-center items-center sm:px-7 sm:py-12 rounded-xl bg-neutral-900">
                            <Image
                                alt=""
                                src="/images/marketplace/projects/website.png"
                                className="aspect-square"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}