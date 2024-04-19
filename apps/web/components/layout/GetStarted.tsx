import circle from "../../public/circle.png"
export default function GetStarted() {
    return (
        <section className="relative self-stretch bg-black flex text-[#954AD2] flex-col items-center justify-start mq450:px-6  px-[1.25rem]  box-border gap-[4.313rem] max-w-full z-[2] text-left text-[3rem] text-darkorchid-200 font-silkscreen mq450:gap-[2.125rem]  mq725:box-border">
            <img src={circle.src} alt="Star" className=" absolute left-[60.6%] bottom-9 w-[469.79px] h-[242.85px
]  " />

            <div className="flex flex-row items-start justify-start py-[0rem] px-[1.813rem] box-border max-w-full">
                <h1 className="m-0 relative text-inherit leading-[2.5rem] font-normal font-inherit whitespace-nowrap z-[2] mq450:text-[1.813rem] mq450:leading-[1.5rem] mq1000:text-[2.375rem] mq1000:leading-[2rem]">
                    Get Started
                </h1>
            </div>
            <div className="w-[25.75rem] flex flex-col items-start justify-start gap-[3.125rem] max-w-full text-center mq450:text-[0.9rem] text-[1rem] font-nunito mq450:gap-[1.563rem]">
                <div className="flex flex-row items-start justify-start relative">
                    <div className="h-[15.175rem] w-[29.363rem] absolute !m-[0] top-[-3.936rem] right-[-53.094rem] rounded-[50%] box-border [transform:_rotate(140.4deg)] [transform-origin:0_0] z-[1] border-[0px] border-solid border-darkorchid-300" />
                    <div className="max-w-[25.75rem] relative leading-[1.875rem] inline-block z-[2]">
                        <p className="m-0 inline">{`Ready to start earning rewards and wield the true power `}</p>
                        <p className="m-0 inline">{`of Solana ecosystem? We thought so. Just click the `}</p>
                        <p className="m-0 inline">{`button below and begin the journey of a lifetime. No, `}</p>
                        <p className="m-0 inline">seriously, click it.</p>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.938rem]">
                        <button className="cursor-pointer [border:none] py-[0.313rem] px-[0.938rem] bg-[#A965F8] rounded-md flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-[#8f4dde]  ">
                            <div className="w-[3.563rem] relative text-[0.875rem] leading-[1.875rem] font-nunito text-white text-center inline-block min-w-[3.563rem] z-[1]">
                                Join Now
                            </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-[0.313rem] px-[0.938rem] bg-plum-200 rounded-md flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-[#a875c7]">
                            <div className="w-[4.5rem] relative text-[0.875rem] leading-[1.875rem] font-nunito text-black text-center inline-block min-w-[4.5rem] z-[1]">
                                Learn More
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
