import Image from "next/image"
import bgImage from "../../../public/images/newsletterBgImage.png"
import cubik from "../../../public/images/marketplace/cubik.png"
import drip from "../../../public/images/marketplace/dripIcon.png"
import helious from "../../../public/images/marketplace/helious.png"
import marginifi from "../../../public/images/marketplace/marginifi.png"
import squads from "../../../public/images/marketplace/squads.png"
import Link from "next/link"

export default function Recommendation() {
    return (
        <div className="flex xl:px-24  sm:px-12 px-6   overflow-hidden flex-col justify-center font-medium text-white capitalize min-h-[380px]">
            <div className="bg-cover bg-center px- bg-no-repeat rounded-3xl" style={{ backgroundImage: `url(${bgImage.src})` }}>
                <div className="flex relative flex-col sm:px-10 px-4 sm:py-12 py-6 w-full rounded-2xl bg-black bg-opacity-30  max-md:px-5 max-md:max-w-full">
                    <div className="text-xl tracking-wide leading-8 max-md:max-w-full">
                        RECOMMENDED MARKET PLACE
                    </div>
                    <div className="shrink-0 mt-6 h-px border border-solid bg-zinc-400 border-zinc-400 max-md:max-w-full" />
                    <div className="flex sm:justify-normal sm:flex-nowrap flex-wrap justify-evenly sm:gap-5 gap-2 self-center mt-10 w-full text-base tracking-normal leading-8 whitespace-nowrap max-w-[1419px] max-md:flex-wrap max-md:max-w-full">
                        <Link href="/marketplace/Cubik" className="flex flex-col sm:flex-1 items-center">
                            <Image
                                src={cubik}
                                alt="cubik"
                                className="aspect-square sm:w-[188px] w-[86.2px]"
                            />
                            <div className="mt-2.5">Cubik</div>
                        </Link>
                        <div className="flex flex-col sm:flex-1 items-center">
                            <Image
                                src={drip}
                                alt="drip"
                                className="aspect-square object-cover sm:w-[188px] w-[86.2px]"
                            />
                            <div className="mt-2.5">Drip</div>
                        </div>
                        <div className="flex flex-col sm:flex-1 items-center">
                            <Image
                                src={helious}
                                alt="helious"
                                className="aspect-square sm:w-[188px] w-[86.2px]"
                            />
                            <div className="mt-2.5">Helious</div>
                        </div>
                        <div className="flex flex-col sm:flex-1 items-center">
                            <Image
                                src={marginifi}
                                alt="marginifi"
                                className="aspect-square sm:w-[188px] w-[86.2px]"
                            />
                            <div className="mt-2.5">Marginifi</div>
                        </div>
                        <div className="flex flex-col sm:flex-1 items-center">
                            <Image
                                src={squads}
                                alt="squads"
                                className="aspect-square sm:w-[188px] w-[86.2px]"
                            />
                            <div className="mt-2.5">Squads</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}