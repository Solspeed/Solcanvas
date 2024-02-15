import Image from "next/image";
import phantom from "../../public/images/phantom.png";
import arrowTop from "../../public/images/arrow_top.png";

export default function Interaction2() {
    return (
        <div className="self-stretch rounded-full bg-black shadow-[4px_3px_50px_1px_rgba(134,_122,_210,_0.6)] flex flex-row items-center justify-between pt-[1.13rem] pb-[1.06rem] pr-[1.38rem] pl-[1.94rem] box-border gap-[1.25rem] max-w-full text-left text-[2.5rem] text-white font-inter">
            <div className="h-[8.06rem] w-[38rem] relative rounded-41xl bg-black shadow-[4px_3px_50px_1px_rgba(134,_122,_210,_0.6)] hidden max-w-full" />
            <div className="flex flex-row items-center justify-start gap-[1.19rem]">
                <Image
                    className="h-[5.88rem] w-[5.88rem] relative rounded-[50%] object-cover z-[1]"
                    loading="eager"
                    alt=""
                    src={phantom}
                />
                <div className="relative tracking-[0.02em] leading-[4.38rem] capitalize font-medium z-[1]">
                    Phantom
                </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.63rem] text-[2.19rem] text-[#ff0000]">
                <div className="flex flex-row items-start justify-start relative">
                    <Image
                        className="h-[1.5rem] w-[1.5rem] absolute my-0 mx-[!important] top-[1.31rem] right-[-1.16rem] z-[1]"
                        alt=""
                        src={arrowTop}
                    />
                    <div className="relative tracking-[0.02em] leading-[4.38rem] capitalize font-medium whitespace-nowrap z-[2]">
                        $50
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.63rem] px-[0rem] pb-[0rem] text-[0.94rem]">
                    <div className="relative tracking-[0.02em] leading-[4.38rem] capitalize font-medium z-[1]">
                        sent
                    </div>
                </div>
            </div>
        </div>
    );
};