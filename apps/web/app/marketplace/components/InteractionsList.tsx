import Image from "next/image";

interface Interaction {
    image: string,
    name: string,
    status: string,
}

export default function InteractionsList({
    interactions
}: {
    interactions: Interaction[]
}) {
    return (
        <>
            {interactions.map((interaction, index) => (
                <div key={index} className="flex md:flex-row md:space-y-auto space-y-3 flex-col justify-between w-full ">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col justify-start">
                            <Image
                                alt={interaction.name}
                                loading="lazy"
                                src={interaction.image}
                                className="aspect-[1.08] sm:w-[70px] w-[50px] shrink-0 flex-1"
                                width={70}
                                height={100}
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-white sm:text-[24px] text-2xl font-medium leading-8 tracking-[1%]">{interaction.status}</div>
                            <div className="text-sm sm:tracking-[1%] tracking-normal font-medium leading-8 text-white text-opacity-50">
                                You interacted with {interaction.name}.
                            </div>
                        </div>
                    </div>
                    <button className="px-[3.5rem] py-1 my-auto text-base tracking-[1%] leading-8 font-medium transition-colors duration-100 hover:bg-neutral-800 rounded-[10px] bg-[#1C1C1C] text-zinc-400 max-md:px-5 sm:mr-12 mr-6">
                        View More
                    </button>
                </div>
            ))}
        </>
    );
}