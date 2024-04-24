import required from "../../../../public/images/required.png";
import next from "../../../../public/images/next.png";
import Image from "next/image";

export default function Links() {


    return (
        <form className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10 ">
            <div className="flex gap-2.5 self-start">
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
                <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[11px]" />
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
            </div>
            <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
                Project links 😎
            </div>
            <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
                Add all the links and contact information that you<br />
                want to share with others.
            </div>
            <div className="sm:w-[457px]">
                <div className="flex gap-5  justify-between  w-full text-[16px] tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap sm:mt-20 mt-10 max-w-full">
                    <div className="flex flex-1 self-start  text-white text-opacity-80">
                        <div>Contact Email</div>
                        <Image
                            alt=""
                            width={100}
                            height={100}
                            loading="lazy"
                            src={required}
                            className="shrink-0 self-start w-3.5 aspect-square"
                        />
                    </div>
                </div>
                <input
                    className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[16px] text-[18px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
                    placeholder="Email"
                    required
                />
                <div className="flex gap-5  w-full text-[16px] tracking-wide leading-8 whitespace-nowrap flex-wrap mt-10 max-w-full">
                    <div className="flex flex-1  self-start text-white text-opacity-80">
                        <div>Other Links</div>
                        <Image
                            alt=""
                            width={100}
                            height={100}
                            loading="lazy"
                            src={required}
                            className="shrink-0 self-start w-3.5 aspect-square"
                        />
                    </div>
                </div>
                <input
                    className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[16px] text-[18px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
                    placeholder="@website"
                    required
                />
                <input
                    className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[16px] text-[18px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
                    placeholder="@github"
                    required
                />
                <input
                    className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[16px] text-[18px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
                    placeholder="@twitter"
                    required
                />
               <div className="flex gap-5 justify-between w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
                    <a href="/addproject/team" className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-8 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]">
                        <div>Back</div>
                    </a>
                    <a href="/addproject/description" className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]">
                        <div>Next</div>
                        <Image
                            alt=""
                            width={100}
                            height={100}
                            loading="lazy"
                            src={next}
                            className="shrink-0 w-[12px] aspect-[0.76] stroke-[2px] stroke-white"
                        />
                    </a>
                </div>
            </div>
        </form>
    );
}
