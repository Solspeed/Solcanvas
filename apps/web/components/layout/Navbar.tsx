import Image from "next/image";
import logo from "../../public/images/Icon.png";

export default function Navbar() {
    return (
        <header className="flex-1 rounded-full bg-black shadow-[0px_4px_50px_rgba(134,_122,_210,_0.7)] flex flex-row items-end justify-between pt-[1.31rem] pb-[1.44rem] pr-[1.44rem] pl-[1.75rem] box-border gap-[1.25rem] max-w-full text-left text-[1rem] text-white font-inter">
            <div className="h-[4.88rem] w-[64.44rem] relative rounded-3xl bg-black shadow-[0px 4px 50px rgba(134, 122, 210, 0.7)] hidden max-w-full" />
            <div className="flex items-center justify-start gap-[0.44rem]">
                <Image src={logo} alt="solcanvas logo" />
                <b className="relative tracking-[0.03em] leading-[1.88rem] uppercase z-[1]">
                    SolCanvas
                </b>
            </div>
            <div className="flex items-end justify-center lg:justify-between gap-[1.94rem]">
                <a href="#" className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1]">
                    Explore
                </a>
                <button className="rounded-full bg-black flex items-center justify-center pt-[0.06rem] pb-[0.13rem] pr-[1.5rem] pl-[1.81rem] whitespace-nowrap z-[1] border-[1px] border-solid border-white">
                    <div className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1]">
                        Add project
                    </div>
                </button>
            </div>
        </header>
    );
}
