export default function Menu() {
  return (
    <div className="flex w-[80vw] ml-12 font-nunito justify-between px-4 md:px-20 gap-5 pt-20 text-base tracking-normal leading-8  text-white text-opacity-70">
      <div className="flex flex-col justify-center">
        <div className="justify-center px-4 py-3 text-nowrap bg-black rounded-xl">
          All Projects
        </div>
      </div>
      <div className="flex flex-col justify-center cursor-pointer whitespace-nowrap">
        <div className="justify-center px-11 py-3 bg-black rounded-xl max-md:px-5">
          NFT
        </div>
      </div>
      <div className="flex flex-col justify-center whitespace-nowrap ">
        <div className="justify-center px-9 py-3 bg-black rounded-xl  cursor-pointer max-md:px-5">
          Wallet
        </div>
      </div>
      <div className="flex flex-col justify-center whitespace-nowrap ">
        <div className="justify-center px-6 py-3 bg-black rounded-xl  cursor-pointer max-md:px-5">
          Exchange
        </div>
      </div>
      <div className="flex flex-col justify-center whitespace-nowrap ">
        <div className="justify-center px-11 py-3 bg-black rounded-xl cursor-pointer  max-md:px-5">
          DeFi
        </div>
      </div>
      <div className="flex flex-col justify-center whitespace-nowrap ">
        <div className="flex items-center gap-5 justify-between px-5  cursor-pointer py-3 rounded-xl bg-zinc-900">
          <div>More</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/459cfa853a628e46986d26dbfabffa1395416524db9bd2f9a861dfd09c2e8712?apiKey=ae3a7180b6a943bbb4c5762597a6e143&"
            className="shrink-0  aspect-[1.3] w-[13px]"
          />
        </div>
      </div>
    </div>
  );
}


