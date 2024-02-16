import Image from "next/image";
import superteam from "../../public/images/superteam.png";
import solana from "../../public/images/solana.png";
import twitter from "../../public/images/twitter.svg";

export default function Footer() {
    return (
        <section className="self-stretch bg-black flex flex-row items-center justify-between py-[2.13rem] pr-[14.38rem] pl-[14.19rem] box-border gap-[rem] max-w-full text-center text-[1.13rem] text-white font-inter mq450:pl-[0.4rem] mq450:pr-[0.4rem] mq450:box-border mq450:mt-[-2.5rem]  mq1000:flex-wrap mq1000:pl-[7.06rem] mq1000:pr-[7.19rem] mq1000:box-border">
            <div className="h-[7.5rem] w-[108rem] relative bg-black hidden max-w-full" />
            <div className="w-[18.81rem] flex flex-row items-start justify-start gap-[1.25rem]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[0.44rem]">
                    <Image
                        className="h-[3.25rem] w-[3rem] relative rounded-[50%] object-cover z-[1]"
                        loading="eager"
                        alt=""
                        src={superteam}
                    />
                    <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                        <div className="relative tracking-[0.03em] leading-[1.88rem] capitalize font-semibold z-[1]">{`Superteam `}</div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.44rem]">
                    <Image
                        className="h-[3.25rem] w-[3rem] relative rounded-[50%] object-cover z-[1]"
                        loading="eager"
                        alt=""
                        src={solana}
                    />
                    <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                        <div className="relative tracking-[0.03em] leading-[1.88rem] capitalize font-semibold z-[1]">
                            solana
                        </div>
                    </div>
                </div>
            </div>
            <Image
                className="h-[2.13rem] w-[2.6rem] relative z-[1]"
                loading="eager"
                alt=""
                src={twitter}
            />
        </section>
    );
};