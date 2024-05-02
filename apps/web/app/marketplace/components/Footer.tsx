import twitter from "../../../public/Twitter.svg"
import github from "../../../public/Github.svg"
import Image from "next/image";

export default function Footer() {
    return (
        <div className="container pb-6 font-nunito px-6">
            <div className="flex gap-5 sm:mt-14 mt-6 w-full flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex-auto text-xl tracking-wider text-purple-300">
                    © 2024 Solcanvas. All Rights Reserved.
                </div>
                <div className="flex gap-4 sm:gap-12 justify-between self-start">
                    <a href="https://twitter.com/Sol_canvas"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Image
                            loading="lazy"
                            src={twitter}
                            alt="Social media icon"
                            className="shrink-0 w-8 aspect-square"
                        />
                    </a>
                    <a href="https://github.com/solspeed"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Image
                            loading="lazy"
                            src={github}
                            alt="Social media icon"
                            className="shrink-0 w-8 aspect-square fill-purple-600"
                        />
                    </a>
                </div>
            </div>
        </div>
    )

}

