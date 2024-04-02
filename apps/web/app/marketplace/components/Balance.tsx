import Image from "next/image"
import rightArrow from "../../../public/images/marketplace/Right_Arrow.png"

export default function Balance() {
    return (
        <div className="flex xl:mx-24 sm:mx-12 mx-6  flex-col items-start px-12 py-12 font-semibold rounded-2xl bg-neutral-900 max-md:px-5">
            <div className="text-2xl tracking-wide text-white text-opacity-90">
                Wallet Balance
            </div>
            <div className="mt-6 text-4xl tracking-wider leading-8 text-white cursor-grab">
                $3,567.90
            </div>
            <div className="mt-6 text-base tracking-normal leading-8 text-white text-opacity-70">
                Connected to Phantom
            </div>
            <Image
                alt="right arrow"
                src={rightArrow}
                className="mt-9 bg-black rounded-full aspect-square h-[46px] w-[46px] cursor-pointer"
            />
        </div>
    )
}