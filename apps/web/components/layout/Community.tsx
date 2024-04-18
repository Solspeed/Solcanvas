import community from "../../public/community.png"

interface ImageProps {
    src: string;
    alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
    <img loading="lazy" src={src} alt={alt} className="w-[320px] mq450:w-auto h-[320px] mq450:h-auto aspect-square max-md:mt-10" />
);

interface TextProps {
    title: string;
    description: string;
}

const Text: React.FC<TextProps> = ({ title, description }) => (
    <div className="flex flex-col text-purple-600 max-md:mt-10 max-md:max-w-full font-nunito">
        <h2 className="text-3xl leading-10 max-md:max-w-full font-silkscreen">{title}</h2>
        <p className="mt-14 mq450:mt-6 text-base leading-8 max-md:mt-10 max-md:max-w-full">{description}</p>
    </div>
);

const MyComponent: React.FC = () => {
    const data = {
        image: {
            src: community.src,
            alt: "Community Image",
        },
        text: {
            title: "For the Community, by the community",
            description:
                "SolCanvas is a global project, welcoming edits and additions from community members across the world. Let's build this canvas together.",
        },
    };

    return (
        <section className="flex justify-center items-center sm:px-16 px-10 mq450:px-6  w-full bg-black max-md:px-5 max-md:max-w-full">
            <div className="mb-8  w-full max-w-[936px] max-md:mt-10 max-md:max-w-full">
                <div className="grid md:grid-cols-2 gap-5 max-md:flex-col max-md:gap-0  ">
                    <Image src={data.image.src} alt={data.image.alt} />
                    <div className="flex flex-col justify-end">
                        <Text title={data.text.title} description={data.text.description} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyComponent;