import Navbar from "../components/layout/Navbar";
import Overview from "../components/layout/Overview";

export default function Home() {
  return (
    <main>
      <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-[5.81rem] px-[0rem] pb-[0rem] box-border gap-[14.19rem] tracking-[normal] mq450:gap-[14.19rem] mq1000:gap-[14.19rem]">
        <section className="w-[82.5rem] flex flex-row items-start justify-start py-[0rem] pr-[2.13rem] pl-[1.25rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-center justify-start gap-[6.19rem] max-w-full mq725:gap-[6.19rem] mq450:gap-[6.19rem]">
            <div className="w-[65.38rem] flex flex-row items-start justify-start pt-[0rem] pb-[2.38rem] pr-[0rem] pl-[0.94rem] box-border top-[0] z-[99] sticky max-w-full">
              <Navbar />
            </div>
            <div className="w-[61.75rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.94rem] box-border max-w-full">
              <Overview />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
