import Image from "next/image";
import cubik from "../../../public/images/marketplace/projects/cubikBanner.png"
import cubikLogo from "../../../public/images/marketplace/projects/cubikLogo.png"

export default function ProjectDetails({
    params,
}: {
    params: { projectName: string };
}) {
    return (
        <div className="flex flex-col xl:py-16 sm:py-12 py-6 bg-black h-screen">
            <div className="flex flex-col xl:px-14 sm:px-10 px-4 w-full max-md:px-5 max-md:max-w-full">
                <Image
                    alt="cubik banner"
                    src={cubik}
                    className="w-full  object-cover border"
                    width={1920}
                    height={365}
                />
                <Image
                    src={cubikLogo}
                    alt="Profile picture"
                    className="z-10 lg:-mt-[110px] sm:-mt-[70px] md:-mt-[90px] -mt-[35px] md:w-[180px] lg:ml-20 sm:ml-8 md:ml-12 ml-6 w-[70px] rounded-full sm:w-[140px] lg:w-[220px] max-md:ml-2.5"
                    width={220}
                    height={220}
                />
            </div>
        </div>
    )
}