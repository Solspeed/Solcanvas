export default function Rewards() {
    return (
        <div className="flex flex-col font-silkscreen p-12 w-full xl:pr-[15vw] bg-black h-screen overflow-hidden">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto  text-3xl text-purple-300">Rewards</div>
            </div>
            <div className="mt-16 flex max-md:mt-10 max-w-full">
                <div className="flex sm:justify-evenly text-center gap-16 flex-1 justify-between uppercase w-full">
                    <div className="bg-[#151515] text-[#FF0000] flex-1 p-4 py-10 rounded-md">Beta</div>
                    <div className="bg-[#151515] text-[#954AD2] flex-1 p-4 py-10 rounded-md">First Project</div>
                </div>
            </div>
        </div>
    )
}