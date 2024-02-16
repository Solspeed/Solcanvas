import Image from "next/image";
import drip from "../../public/images/drip.png";
import icon1 from "../../public/images/icon1.png";
import arrowDown from "../../public/images/arrow_down.png";

export default function Interaction1() {
    return (
        <div className="self-stretch rounded-full bg-black shadow-[4px_3px_50px_1px_rgba(134,_122,_210,_0.6)] flex flex-row items-center justify-between sm:pt-[1.13rem] pt-[0.4rem] pb-[0.4rem] sm:pb-[1.06rem] box-border gap-[1.25rem] max-w-full text-left text-[2.5rem] text-white font-inter mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start">
                <Image
                    className="w-12 h-12 sm:h-24 sm:w-24  relative rounded-[50%] object-cover z-[1]"
                    loading="eager"
                    alt=""
                    src={drip}
                />
                <div className="relative tracking-[0.02em] leading-[4.38rem] capitalize font-medium z-[2] sm:text-[2rem] text-[1.4rem] mq450:leading-[2.63rem]  mq1000:leading-[3.5rem]">
                    Drip
                </div>
            </div>
            <div className="pr-4 flex flex-row  items-center justify-center sm:gap-[2.25rem] gap-[1rem] text-[0.94rem] text-[#42ff00]">
                <Image
                    className="sm:h-[3.31rem] cursor-grab h-8 sm:w-[3.31rem] w-8  relative rounded-sm object-cover z-[2]"
                    loading="eager"
                    alt=""
                    src={icon1}
                />
                <div className="flex flex-row items-center justify-center cursor-grab">
                    <Image
                        className="h-[1.5rem] w-[1.5rem]  object-contain z-[2]"
                        loading="eager"
                        alt=""
                        src={arrowDown}
                    />
                    <div className="relative  sm:text-[1rem] text-[0.8rem] tracking-[0.02em] leading-[4.38rem] capitalize font-medium z-[3]">
                        Received
                    </div>
                </div>
            </div>
        </div>
    );
};