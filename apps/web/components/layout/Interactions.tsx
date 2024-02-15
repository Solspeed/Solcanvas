import Interaction1 from "./Interaction1";
import Interaction2 from "./Interaction2";

export default function Interactions() {
  return (
    <section className="w-[82.19rem] flex flex-row items-start justify-start pt-[0rem] px-[1.25rem] pb-[1.44rem] box-border gap-[5.19rem] max-w-full text-left text-[4.38rem] text-white font-inter mq725:gap-[5.19rem] mq725:pb-[7.44rem] mq725:box-border mq450:gap-[5.19rem] mq1050:flex-wrap">
      <div className="flex flex-col items-start justify-start gap-[1.44rem] min-w-[36.5rem] max-w-full mq725:min-w-full mq1050:flex-1">
        <h1 className="m-0 relative text-inherit tracking-[0.02em] leading-[4.38rem] capitalize font-semibold font-inherit mq450:text-[2.63rem] mq450:leading-[2.63rem] mq1000:text-[3.5rem] mq1000:leading-[3.5rem]">
          <p className="m-0">{`See your `}</p>
          <p className="m-0">{`app interactions `}</p>
        </h1>
        <div className="w-[35.19rem] relative text-[1.56rem] tracking-[0.02em] leading-[1.88rem] font-medium text-gray-200 inline-block max-w-full mq450:text-[1.25rem] mq450:leading-[1.5rem]">
          By simply connecting your wallet, you can view all of your app
          interactions in one place. This includes seeing which NFTs you have
          received and how much profit you have made from trading, among other
          things.
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start  gap-[3.44rem] min-w-[24.69rem] max-w-full text-[2.5rem] mq725:gap-[3.44rem] mq725:min-w-full ">
        <Interaction1 />
        <Interaction2 />
      </div>
    </section>
  );
};
