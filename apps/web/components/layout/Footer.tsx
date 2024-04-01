import Image from "next/image";
import superteam from "../../public/images/superteam.png";
import solana from "../../public/images/solana.png";
import twitter from "../../public/images/twitter.png"
import github from "../../public/images/github.png"

export default function Footer() {
    return (
        <div className="flex xl:px-20 px-6 sm:py-12 whitespace-nowrap space-y-6 sm:space-y-0 sm:flex-nowrap flex-wrap sm:justify-between container">
            <div className="flex sm:scale-[0.8] scale-[0.7] lg:scale-[1] lg:gap-20 gap-12  justify-between my-auto w-full sm:w-auto text-xl font-semibold tracking-wide leading-8 text-white uppercase max-md:flex-wrap max-md:max-w-full">
                <a href="https://solana.com/" className="flex gap-4 hover:scale-[1.05] transform duration-300 transition-all ease-in">
                    <Image
                        loading="lazy"
                        src={solana}
                        alt="image"
                        className="shrink-0 my-auto max-w-full aspect-[6.67] w-[175px]"
                    />
                </a>
                <a href="https://superteam.fun/" className="flex gap-4 hover:scale-[1.05] transform duration-300 transition-all ease-in">
                    <Image
                        loading="lazy"
                        src={superteam}
                        alt="image"
                        className="shrink-0 w-10 aspect-square"
                    />
                    <div className="flex-auto my-auto">Superteam</div>
                </a>
            </div>
            <div className="flex lg:gap-20  sm:scale-[0.8] scale-[0.7] lg:scale-[1] w-full justify-between sm:w-auto text-2xl font-medium tracking-wide leading-8 text-zinc-400">
                <a href="https://github.com/Solspeed" className="flex gap-4 py-1 bg-black hover:scale-[1.05] transform duration-300 transition-all ease-in">
                    <Image
                        loading="lazy"
                        src={github}
                        alt="image"
                        className="shrink- aspect-square w-[54px]  object-cover"
                    />
                    <div className="flex-auto my-auto">Github</div>
                </a>
                <a href="https://twitter.com/Sol_canvas" className="flex py-px bg-black hover:scale-[1.05] transform duration-300 transition-all ease-in">
                    <Image
                        loading="lazy"
                        src={twitter}
                        alt="image"
                        className="shrink- aspect-square w-[58px] object-cover"
                    />
                    <div className="flex-auto my-auto">Twitter</div>
                </a>
            </div>
        </div>
    );
};