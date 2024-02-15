import Image from "next/image";
import drip from "../../public/images/drip.png";
import icon1 from "../../public/images/icon1.png";
import arrowTop from "../../public/images/Arrow_top.png";

export default function Interaction1() {
    return (
        <div className="self-stretch rounded-full bg-black shadow-[4px_3px_50px_1px_rgba(134,_122,_210,_0.6)] flex flex-row items-center justify-between pt-[1.13rem] pb-[1.06rem] pr-[1.38rem] pl-[1.94rem] box-border gap-[1.25rem] max-w-full text-left text-[2.5rem] text-white font-inter mq450:flex-wrap">
            <div className="h-[8.06rem] w-[38rem] relative rounded-41xl bg-black shadow-[4px_3px_50px_1px_rgba(134,_122,_210,_0.6)] hidden max-w-full" />
            <div className="flex flex-row items-center justify-start gap-[1.19rem]">
                <Image
                    className="h-[5.88rem] w-[5.88rem] relative rounded-[50%] object-cover z-[1]"
                    loading="eager"
                    alt=""
                    src={drip}
                />
                <div className="relative tracking-[0.02em] leading-[4.38rem] capitalize font-medium z-[2] mq450:text-[1.5rem] mq450:leading-[2.63rem] mq1000:text-[2rem] mq1000:leading-[3.5rem]">
                    Drip
                </div>
            </div>
            <div className="w-[9.81rem] flex flex-row items-start justify-start gap-[2.25rem] text-[0.94rem] text-[#42ff00]">
                <Image
                    className="h-[3.31rem] w-[3.31rem] relative rounded-sm object-cover z-[2]"
                    loading="eager"
                    alt=""
                    src={icon1}
                />
                <div className="flex flex-row items-start justify-start relative">
                    <Image
                        className="h-[1.5rem] w-[1.5rem] absolute my-0 mx-[!important] top-[1.06rem] left-[-1.03rem] object-contain z-[2]"
                        loading="eager"
                        alt=""
                        src={arrowTop}
                    />
                    <div className="relative tracking-[0.02em] leading-[4.38rem] capitalize font-medium z-[3]">
                        Received
                    </div>
                </div>
            </div>
        </div>
    );
};