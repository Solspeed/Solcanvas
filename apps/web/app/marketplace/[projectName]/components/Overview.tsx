import Image from "next/image";
import Link from "next/link";
import twitter from "../../../../public/twitter.svg"
import github from "../../../../public/Github.svg"
import website from "../../../../public/images/marketplace/projects/website.svg"
import mail from "../../../../public/images/marketplace/projects/Mail.svg"

export default function Overview({ projectsList }: { projectsList: any[] }) {
    if (projectsList.length === 0) {
        return null;
    }
    const project = projectsList[0];
    const descriptionLines = project.description.split(/\n/);

    return (
        <div className="">
            <Image
                alt="cubik banner"
                src={project.bannerImageUrl}
                className=" h-[400px] mx-auto object-cover object-right"
                width={1920}
                height={365}
            />
            <Image
                src={project.logoImageUrl}
                alt="Profile picture"
                className="z-10 lg:-mt-[110px] sm:-mt-[70px] md:-mt-[90px] -mt-[35px] md:w-[180px] lg:ml-20 sm:ml-8 md:ml-12 ml-6 w-[70px] rounded-full sm:w-[140px] lg:w-[220px] max-md:ml-2.5"
                width={220}
                height={220}
            />
            <div className="flex xl:gap-24 gap-5 xl:flex-row flex-col sm:mt-12 mt-6 justify-between">
                <div className="flex flex-col grow font-semibold xl:max-w-[946px] xl:w-[60%] w-full">
                    <div className="flex items-center sm:gap-5 gap-2 self-start whitespace-nowrap">
                        <h1 className="flex-auto font-bold sm:text-5xl text-4xl tracking-wider leading-8 text-white ">
                            {project.name}
                        </h1>
                        {/* <button className="justify-center sm:scale-[1] scale-[0.9] px-[14px] py-[1px] mt-1 text-sm tracking-wide leading-7 text-black uppercase bg-lime-500 rounded-xl">
                            Upvote
                        </button> */}
                    </div>
                    <p className="mt-2 sm:mt-4 sm:text-[20px] text-xl tracking-wide leading-8 text-white text-opacity-70  font-semibold">
                        {project.title}
                    </p>
                    <ul className="sm:mt-12 mt-6 md:leading-relaxed font-medium lg:leading-loose xl:leading-relaxed 2xl:leading-loose ml-2 sm:ml-4 text-base  tracking-tight sm:tracking-[2%] leading-8 text-justify text-white list-disc">
                        {descriptionLines.map((line: string, index: number) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex  xl:flex-col xl:justify-normal sm:justify-evenly justify-center sm:items-center xl:max-w-[395px]  xl:mt-0 mt-4">
                    <div className="flex gap-5 ">
                        <Link href={`#`}>
                            <Image src={website} alt="website" width={50} height={50} />
                        </Link>
                        <Link href={`#`}>
                            <Image src={twitter} alt="twitter" width={50} height={50} />
                        </Link>
                        <Link href={`#`}>
                            <Image src={github} alt="github" width={50} height={50} />
                        </Link>
                        <Link href={`#`}>
                            <Image src={mail} alt
                                ="mail" width={50} height={50} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
