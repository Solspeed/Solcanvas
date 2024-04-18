import Image from "next/image";
import twitter from "../../public/Twitter.svg"
import github from "../../public/Github.svg"

export default function Footer() {
    return (
        <footer className="self-stretch xl:px-24 sm:px-16 px-6 bg-black flex flex-col items-start justify-between box-border max-w-full gap-[1.25rem] z-[4] text-left text-[1rem] text-mediumorchid font-nunito mq450:pt-[3.875rem] mq450:px-[1.25rem] mq450:pb-[3.063rem] mq450:box-border mq725:pl-[3.75rem] mq725:pr-[3.75rem] mq725:box-border mq1000:flex-wrap">
            <div className="w-full flex flex-col gap-12">
                <div className="w-full bg grid grid-cols-3 gap-[4.75rem] max-w-full mq450:gap-[2.375rem] mq725:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[1.188rem]  ">
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[3.75rem] z-[1] font-bold  text-plum-100 ">
                            Navigate
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[3.75rem] z-[1]  text-plum-100">
                            Explore
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[2.25rem] z-[1]  text-plum-100">
                            Earn
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[2.813rem] z-[1]  text-plum-100">
                            Learn
                        </a>

                    </div>
                    <div className="flex flex-col items-start justify-start gap-[1.188rem]  ">
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[2.125rem] z-[1] font-bold  text-plum-100 ">
                            Help
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[2.125rem] z-[1]  text-plum-100">
                            FAQ
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[3.813rem] z-[1]  text-plum-100">
                            Contact
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[3.063rem] z-[1]  text-plum-100">
                            About
                        </a>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[1.188rem]  ">
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[2.125rem] z-[1] font-bold  text-plum-100 ">
                            Legal
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[2.125rem] z-[1]  text-plum-100">
                            Privacy
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[3.813rem] z-[1]  text-plum-100">
                            Terms
                        </a>
                        <a href="#" className="relative tracking-[0.05em] inline-block min-w-[3.063rem] z-[1]  text-plum-100">
                            Cookies
                        </a>
                    </div>
                </div>
                <div className="flex justify-between sm:gap-0 gap-4  sm:mr-28">
                    <div className="relative tracking-[0.05em] font-archivo   z-[1]  text-plum-100">
                        © 2024 Solcanvas. All Rights R eserved.
                    </div>

                    <div className=" flex flex-row items-start justify-end">
                        <div className="w-[4.5rem] flex flex-row items-start justify-between gap-[1.25rem]">
                            <Image
                                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem] z-[1]  text-plum-100"
                                loading="lazy"
                                alt=""
                                src={twitter}
                            />
                            <Image
                                className="h-[1.231rem] w-[1.25rem] relative min-h-[1.25rem] z-[1]  text-plum-100"
                                loading="lazy"
                                alt=""
                                src={github}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

