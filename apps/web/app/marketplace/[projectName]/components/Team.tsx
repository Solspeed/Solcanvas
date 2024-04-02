export default function Team() {
    return (
        <div>
            <h2 className="self-start sm:mt-40 mt-24 sm:text-5xl text-4xl font-semibold tracking-wider leading-8 text-white max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
                Team
            </h2>
            <div className="grid lg:grid-cols-2 place-items-center lg:mr-0  -ml-16 sm:gap-16 sm:mt-12 mt-6">
                <div className=" xl:w-[576px] xl:h-[315px] w-[476px] h-[215px] mr-4 relative sm:scale-[0.7] scale-[0.6]  sm:ml-0 -ml-12 xl:scale-[1] ">
                    <div className=" w-[374px] h-[315px] left-0 top-0 absolute">
                        <img className=" z-0 w-[317px] object-fill h-[211px] left-0 top-[104px] absolute" src="/images/marketplace/projects/avatarBg.png" />
                        <img className="Z-10 w-[265px] z-10 h-[265px] object-fill left-[109px] top-0 absolute rounded-full" src="/images/marketplace/projects/irfanAvatar.png" />
                    </div>
                    <div className="z-50 left-[450px] top-[123px] absolute text-white text-opacity-70 text-[26px] font-semibold   leading-[30px] tracking-wide">@Irfan<br /></div>
                    <img className="z-100 w-[37px] h-[37px] left-[410px] top-[121px] absolute" src='/images/twitter.png' />
                    <img className="z-20 w-[37px] h-[37px] left-[410px] top-[173px] absolute" src='/images/github.png' />
                </div>
                <div className=" xl:w-[576px] xl:h-[315px] w-[476px] h-[215px] mr-4 relative sm:scale-[0.7] scale-[0.6]  sm:ml-0 -ml-12 xl:scale-[1] ">
                    <div className=" w-[374px] h-[315px] left-0 top-0 absolute">
                        <img className=" z-0 w-[317px] object-fill h-[211px] left-0 top-[104px] absolute" src="/images/marketplace/projects/avatarBg.png" />
                        <img className="Z-10 w-[265px] z-10 h-[265px] object-fill left-[109px] top-0 absolute rounded-full" src="/images/marketplace/projects/dhruvAvatar.png" />
                    </div>
                    <div className="z-50 left-[450px] top-[123px] absolute text-white text-opacity-70 text-[26px] font-semibold   leading-[30px] tracking-wide">@Dhruv<br /></div>
                    <img className="z-100 w-[37px] h-[37px] left-[410px] top-[121px] absolute" src='/images/twitter.png' />
                    <img className="z-20 w-[37px] h-[37px] left-[410px] top-[173px] absolute" src='/images/github.png' />
                </div>
                <div className=" xl:w-[576px] xl:h-[315px] w-[476px] h-[215px] mr-4 relative sm:scale-[0.7] scale-[0.6]  sm:ml-0 -ml-12 xl:scale-[1] ">
                    <div className=" w-[374px] h-[315px] left-0 top-0 absolute">
                        <img className=" z-0 w-[317px] object-fill h-[211px] left-0 top-[104px] absolute" src="/images/marketplace/projects/avatarBg.png" />
                        <img className="Z-10 w-[265px] z-10 h-[265px] object-fill left-[109px] top-0 absolute rounded-full" src="/images/marketplace/projects/irfanAvatar.png" />
                    </div>
                    <div className="z-50 left-[450px] top-[123px] absolute text-white text-opacity-70 text-[26px] font-semibold   leading-[30px] tracking-wide">@Junad<br /></div>
                    <img className="z-100 w-[37px] h-[37px] left-[410px] top-[121px] absolute" src='/images/twitter.png' />
                    <img className="z-20 w-[37px] h-[37px] left-[410px] top-[173px] absolute" src='/images/github.png' />
                </div>
            </div>
        </div>
    )
}