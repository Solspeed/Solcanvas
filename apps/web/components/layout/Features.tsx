import Image from "next/image"
import MoonPay from "../../public/images/MoonPay.png";
import CandyPay from "../../public/images/CandyPay.png";

export default function Features() {
    return (
        <div className="w-[65.44rem] flex flex-col items-center justify-start pt-[0rem] px-[1.25rem] pb-[4.25rem] box-border gap-[7.31rem] max-w-full text-left text-[2.38rem] text-white font-inter mq725:gap-[7.31rem] mq450:pb-[2.75rem] mq450:box-border mq1050:gap-[7.31rem]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[1.81rem] mq1000:flex-wrap">
                <button className="cursor-pointer [border:none] py-[1.25rem] pr-[1.5rem] pl-[1.25rem] bg-black flex-1 rounded-full shadow-[2px_4px_50px_rgba(134,_122,_210,_0.5)] flex flex-row items-center justify-center box-border min-w-[9.31rem] hover:bg-darkslategray mq1000:flex-1">
                    <div className="h-[4.38rem] w-[14.38rem] relative rounded-full bg-black shadow-[2px_4px_50px_rgba(134,_122,_210,_0.5)] hidden" />
                    <div className="relative text-[1.88rem] tracking-[0.02em] leading-[1.88rem] font-medium font-inter text-white text-left z-[1] mq450:text-[1.13rem] mq450:leading-[1.13rem] mq1000:text-[1.5rem] mq1000:leading-[1.5rem]">
                        DeFi
                    </div>
                </button>
                <button className="cursor-pointer [border:none] py-[1.25rem] pr-[3.44rem] pl-[3.13rem] bg-black rounded-full shadow-[4px_4px_70px_4px_rgba(134,_122,_210,_0.8)] flex flex-row items-center justify-center hover:bg-darkslategray">
                    <div className="h-[4.38rem] w-[14.38rem] relative rounded-full bg-black shadow-[4px_4px_70px_4px_rgba(134,_122,_210,_0.8)] hidden" />
                    <div className="relative text-[1.88rem] tracking-[0.02em] leading-[1.88rem] font-medium font-inter text-white text-left z-[1] mq450:text-[1.13rem] mq450:leading-[1.13rem] mq1000:text-[1.5rem] mq1000:leading-[1.5rem]">
                        Payment
                    </div>
                </button>
                <button className="cursor-pointer [border:none] p-[1.25rem] bg-black flex-1 rounded-full shadow-[2px_4px_50px_rgba(134,_122,_210,_0.5)] flex flex-row items-center justify-center box-border min-w-[9.31rem] whitespace-nowrap hover:bg-darkslategray mq1000:flex-1">
                    <div className="h-[4.38rem] w-[14.38rem] relative rounded-full bg-black shadow-[2px_4px_50px_rgba(134,_122,_210,_0.5)] hidden" />
                    <div className="relative text-[1.88rem] tracking-[0.02em] leading-[1.88rem] font-medium font-inter text-white text-left z-[1]">
                        Dev Tools
                    </div>
                </button>
                <button className="cursor-pointer [border:none] py-[1.25rem] pr-[4.5rem] pl-[4.31rem] bg-black rounded-full shadow-[2px_4px_50px_rgba(134,_122,_210,_0.5)] flex flex-row items-center justify-center hover:bg-darkslategray">
                    <div className="h-[4.38rem] w-[14.38rem] relative rounded-full bg-black shadow-[2px_4px_50px_rgba(134,_122,_210,_0.5)] hidden" />
                    <div className="relative text-[1.88rem] tracking-[0.02em] leading-[1.88rem] font-medium font-inter text-white text-left z-[1] mq450:text-[1.13rem] mq450:leading-[1.13rem] mq1000:text-[1.5rem] mq1000:leading-[1.5rem]">
                        Wallet
                    </div>
                </button>
            </div>
            <div className="w-[48rem] flex flex-row flex-wrap items-center justify-center gap-[1.69rem] max-w-full">
                <div className="flex  justify-center items-center gap-4">
                    <Image src={CandyPay} alt="candy pay" />
                    <div className="relative tracking-[0.02em] leading-[1.88rem] font-semibold mq450:text-[1.44rem] mq450:leading-[1.13rem] mq1000:text-[1.88rem] mq1000:leading-[1.5rem]">
                        Candy Pay
                    </div>
                </div>
                <div className="flex  justify-center items-center gap-4">
                    <Image src={CandyPay} alt="candy pay" />
                    <div className="relative tracking-[0.02em] leading-[1.88rem] font-semibold mq450:text-[1.44rem] mq450:leading-[1.13rem] mq1000:text-[1.88rem] mq1000:leading-[1.5rem]">
                        Moon Pay
                    </div>
                </div>
            </div>
        </div>
    )
}