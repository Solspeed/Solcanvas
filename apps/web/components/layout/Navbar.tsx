import Image from "next/image";
import logo from "../../public/images/Icon.png";

export default function Navbar() {
    return (
        <header className="flex-1 rounded-[3.13rem] bg-black shadow-[0px_4px_50px_rgba(134,_122,_210,_0.7)] flex flex-row items-end justify-between pt-[1.31rem] pb-[1.44rem] pr-[1.44rem] pl-[1.75rem] box-border gap-[1.25rem] max-w-full text-left text-[1rem] text-white font-inter">
            <div className="h-[4.88rem] w-[64.44rem] relative rounded-31xl bg-black shadow-[0px_4px_50px_rgba(134,_122,_210,_0.7)] hidden max-w-full" />
            <div className="flex flex-row items-center justify-start gap-[0.44rem]">
                <Image src={logo} alt="solcanvas logo" />
                <b className="relative tracking-[0.03em] leading-[1.88rem] uppercase z-[1]">
                    SolCanvas
                </b>
            </div>
            <div className="flex flex-row items-end justify-start lg:justify-between gap-[1.94rem]">
                <div className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1]">
                    Explore
                </div>
                <div className="lg:ml-auto">
                    <div className="rounded-full bg-black flex flex-row items-center justify-center pt-[0.06rem] pb-[0.13rem] pr-[1.5rem] pl-[1.81rem] whitespace-nowrap z-[1] border-[1px] border-solid border-white">
                        <div className="h-[2.06rem] w-[9.38rem] relative rounded-11xl bg-black box-border hidden border-[1px] border-solid border-white" />
                        <div className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1]">
                            Add project
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
