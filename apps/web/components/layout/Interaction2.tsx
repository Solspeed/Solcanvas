import Image from "next/image";
import phantom from "../../public/images/phantom.png";
import arrowTop from "../../public/images/arrow_top.png";

export default function Interaction1() {
    return (
        <div className="self-stretch rounded-full bg-black shadow-[4px_3px_50px_1px_rgba(134,_122,_210,_0.6)] flex flex-row items-center justify-between  pt-[0.4rem] pb-[0.4rem] sm:py-[1.595rem] box-border gap-[1.25rem] max-w-full text-left text-[2.5rem] text-white font-inter mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start pl-2 sm:pl-5 gap-2">
                <Image
                    className="w-12 h-12 sm:h-20 sm:w-20 relative rounded-[50%] object-cover z-[1]"
                    loading="eager"
                    alt=""
                    src={phantom}
                />
                <div className="relative tracking-[0.02em] leading-[4.38rem] capitalize font-medium z-[2] sm:text-[2rem] text-[1.2rem] mq450:leading-[2.63rem]  mq1000:leading-[3.5rem]">
                    Phantom
                </div>
            </div>
            <div className="pr-4 flex flex-row  items-baseline justify-center sm:gap-[2.25rem] gap-[1rem] text-[0.94rem] text-[#ff0000]">
                <div
                    className="sm:text-[2.2rem] cursor-grab text-[1.5rem]  font-semibold relative rounded-sm object-cover z-[2]"
                > 50$</div>
                <div className="flex flex-row items-baseline justify-center cursor-grab">
                    <Image
                        className="h-[1.5rem] w-[1.5rem]  object-contain z-[2]"
                        loading="eager"
                        alt=""
                        src={arrowTop}
                    />
                    <div className="relative sm:text-[1rem] text-[0.8rem] tracking-[0.02em] leading-[4.38rem] capitalize font-medium z-[3]">
                        sent
                    </div>
                </div>
            </div>
        </div>
    );
};