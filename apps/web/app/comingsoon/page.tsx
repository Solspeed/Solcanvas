import logo from "../../public/logo.svg"
import twitter from "../../public/twitter.svg"

export default function ComingSoon() {
    return (
        <div className="flex flex-col items-center h-screen px-12 pt-12 pb-20 bg-black max-md:px-5">
            <div className="flex gap-5 justify-between self-stretch max-md:flex-wrap max-md:max-w-full">
                <a href="/" className="flex gap-2.5 text-white text-opacity-80">
                    <img
                        loading="eager"
                        alt="Solcanvas logo"
                        src={logo.src}
                        className="shrink-0 w-10 aspect-square fill-white"
                    />
                </a>
                <a href="https://twitter.com/sol_canvas" target="_blank" rel="noreferrer noopener" className="flex gap-2.5 text-white text-opacity-80">
                    <img
                        loading="lazy"
                        src={twitter.src}
                        className="shrink-0 self-start mt-1 w-10 aspect-[1.11] fill-white"
                    />
                </a>
            </div>
            <div className="flex h-full justify-center items-center">
                <div className="flex flex-col items-center justify-center ">
                    <div className="sm:text-8xl text-3xl text-white h-full font-silkscreen">
                        <span className="">SOLCANVAS</span>
                        <span className="sm:text-xl text-md text-red-600">beta</span>
                    </div>
                    <div className="mt-2 text-3xl text-neutral-700 font-silkscreen">Thanks for onboarding, The product beta phase will be launching soon.</div>
                </div>
            </div>
        </div>
    )
}