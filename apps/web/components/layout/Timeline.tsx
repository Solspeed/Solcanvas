import Image from 'next/image'
import Drip from '../../public/images/Drip.png'
import DripIcon from '../../public/images/DirpIcon.png'
export default function Timeline() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg- w-[88.2rem]">
                <div className="h-[0.75rem] w-[0.75rem] bg-[#B2B2B2] rounded-full" />
                <div className="h-[25.625rem] w-[0.25rem] bg-[#B2B2B2]" />
                <div className="h-[0.75rem] w-[0.75rem] bg-[#B2B2B2] rounded-full" />
                <div className=" align-middle text-center space-y-12 m-20 ">
                    <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[80px] tracking-[1.60px] leading-[30px] whitespace-nowrap">
                        CONTRIBUTING
                    </div>
                    <p className=" [font-family:'Inter',Helvetica] font-semibold text-[#ffffff80] text-[40px] tracking-[0.80px] leading-[30px] whitespace-nowrap">
                        Contribute to the latest project in the ecosystem.
                    </p>
                </div>
                <div className="h-[0.75rem] w-[0.75rem] bg-[#B2B2B2] rounded-full" />
                <div className="h-[25.625rem] w-[0.25rem] bg-[#B2B2B2]" />

                <div className="h-[0.25rem] w-[3rem] mr-[2.75rem] bg-[#B2B2B2]" />
                <div className="self-start w-[41.188rem]  h-[23.125rem] top-0 -mt-[12rem] left-0 bg-[#151515] rounded-[15px]">
                    <div className=" w-[41.188rem] h-[15.75rem]  top-0 left-0">
                        <Image
                            className="object-cover  w-[41.188rem] h-[11.563rem] top-0 left-0"
                            alt="Rectangle"
                            src={Drip}
                        />
                        <Image
                            className=" w-[7.5rem] h-[7.5rem] relative -top-12 object-cover"
                            alt="Ellipse"
                            src={DripIcon}
                        />
                        <div className="  [font-family:'Inter',Helvetica] font-semibold text-white text-[35px] tracking-[0.70px] leading-[30px] whitespace-nowrap">
                            Cubik
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}