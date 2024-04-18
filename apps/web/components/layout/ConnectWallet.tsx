import avatar from "../../public/avatar.png"

interface HeroSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    imageUrl,
    imageAlt,
}) => {
    return (
        <section className="flex justify-center items-center sm:px-16 px-10 mq450:px-6  w-full bg-black">
            <div className="w-full max-w-[936px] ">
                <div className="flex sm:gap-5 sm:flex-row flex-col-reverse ">
                    <div className="flex flex-1 flex-col md:w-[62%]">
                        <div className="flex flex-col self-stretch my-auto text-[#954AD2]">
                            <h1 className="text-3xl leading-10 font-silkscreen">{title}</h1>
                            <p className="sm:mt-14 mt-8 mq450:mt-6 text-base font-nunito leading-8">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col  md:w-[38%] sm:ml-5 ml-0">
                        <img
                            loading="lazy"
                            src={imageUrl}
                            alt={imageAlt}
                            className="w-full aspect-square sm:mt-10 shrink-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const MyComponent: React.FC = () => {
    const heroSectionData = {
        title: "Connect Wallet, See \n App Interactions.",
        description:
            "Connect your Solana wallet and watch in real-time as \n your interactions come to life. Each edit and addition \n you make gets you delectable rewards in form of SPL \n tokens or NFTs",
        imageUrl: avatar.src,
        imageAlt: "Hero section image",
    };

    return <HeroSection {...heroSectionData} />;
};

export default MyComponent;