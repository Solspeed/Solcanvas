export default function Faqs() {
    return (
        <section className="flex justify-center  sm:px-16 px-10 mq450:px-6 w-full bg-black ">
            <div className="flex flex-col w-full max-w-[936px] sm:space-y-24 space-y-12">
                <h1 className="text-[48px] leading-[2.5rem]  font-silkscreen text-[#954AD2] font-normal font-inherit  max-w-full z-[1] mq450:text-[1.53rem] mq450:leading-[1.5rem] mq1000:text-[2.1rem] mq1000:leading-[2rem]">
                    Common Questions
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 text-[#954AD2] sm:gap-20 gap-4 w-full font-nunito ">
                    <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[2.5rem] z-[1] text-[1.25rem] mq450:text-[1rem] mq450:leading-[2rem]">
                            Is SolCanvas free to use?
                        </div>
                        <div className="relative text-[1rem] leading-[2.5rem] text-[#DCA7FB] z-[1]">
                            Absolutely! It’s as free as stardust.
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[2.5rem] z-[1] text-[1.25rem] mq450:text-[1rem] mq450:leading-[2rem]">
                            How often can I claim rewards?
                        </div>
                        <div className="relative text-[1rem] leading-[2.5rem] text-[#DCA7FB] z-[1]">
                            As often as you contribute. We love compulsive helpers.
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[2.5rem] z-[1] text-[1.25rem] mq450:text-[1rem] mq450:leading-[2rem]">
                            How do I earn rewards?
                        </div>
                        <div className="relative text-[1rem] leading-[2.5rem] text-[#DCA7FB] z-[1]">
                            Just add or edit projects. It’s simple, isn’t it?
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[2.5rem] z-[1] text-[1.25rem] mq450:text-[1rem] mq450:leading-[2rem]">
                            Can anyone join the SolCanvas community?
                        </div>
                        <div className="relative text-[1rem] leading-[2.5rem] text-[#DCA7FB] z-[1]">
                            Yes, it’s a global community. The more, the merrier.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}