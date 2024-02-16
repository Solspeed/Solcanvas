export default function Overview() {
    return (
        <div className="flex-1 flex flex-col items-center text-white justify-start gap-[4.38rem] max-w-full text-center text-[5.4rem] font-inter mq725:gap-[4.38rem] mq1000:gap-[4.38rem]">
            <h1 className="m-0 self-stretch  relative text-inherit  sm:tracking-[0.0em] leading-[1.88rem] capitalize font-bold font-inherit inline-block mq450:text-[1.8rem] mq450:leading-[0.75rem] mq1000:text-[3.4rem] mq1000:leading-[3.9rem]">
                <p className="[margin-block-start:0] [margin-block-end:100px] mq1000:[margin-block-end:60px]">
                    Explore projects
                </p>
                <p className="m-0">around ecosystem</p>
            </h1>
            <b className="relative text-[1.56rem] tracking-[0.03em] leading-[1.88rem] capitalize inline-block text-gray-400 max-w-full mq1000:text-[1.2rem] md:leading-[1.5rem]">
                There are almost 400+ projects all around the Solana ecosystem.
            </b>

            <div className="flex flex-row items-start justify-start box-border max-w-full">
                <button className="cursor-pointer [border:none] mq1000:py-[1.4rem] py-[1.6rem] px-12 mq1000:px-8 bg-white rounded-full flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap hover:bg-[#e6e6e6] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                    <b className="relative sm:text-[1.88rem] text-[0.5rem] mq1000:text-[1.6rem] tracking-[0.03em] leading-[1.88rem] capitalize font-inter text-[#867ad2] text-center z-[1]">
                        Explore Projects
                    </b>
                </button>
            </div>
        </div>
    );
};

