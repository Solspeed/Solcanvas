export default function Overview() {
    return (
        <div className="flex-1 flex flex-col items-center text-white justify-start gap-[4.38rem] max-w-full text-center text-[5.1rem]   mq725:gap-[4.38rem] mq1000:gap-[4.38rem]">
            <h1 className="m-0 self-stretch   relative text-inherit sm:tracking-[0.0em] leading-[1.88rem] capitalize font-silkscreen font-bold  inline-block mq450:text-[1.6rem]  mq450:shadow-xl mq450:leading-[2.75rem] mq725:text-[2.2rem]  mq1000:text-[3.2rem] mq1000:leading-[3.9rem] text-center">
                <p className="[margin-block-start:0] text-nowrap font-inherit  [margin-block-end:100px] mq1000:[margin-block-end:20px] mq450:[margin-block-end:10px]">
                    EXPLORE SOLANA
                </p>
                <p className="m-0 mq450:leading-[2.5rem]">WITH EASE</p>
            </h1>

            <div className="flex flex-row items-start justify-start box-border max-w-full">
                <a href="/#" className="cursor-pointer [border:none] mq1000:py-[1.4rem] mq450:py-[0.8rem] py-[1.05rem] px-10 mq1000:px-8 bg-[#DCA7FB] hover:bg-[#a875c7] rounded-full flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="w-[10.938rem] relative text-[1.5rem] tracking-[0.03em] leading-[1.875rem] capitalize font-medium font-nunito text-black text-center inline-block z-[1]">
                      Coming Soon
                    </div>
                </a>
            </div>
        </div>
    );
};