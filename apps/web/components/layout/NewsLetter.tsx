import newsletterBgImage from "../../public/images/newsletterBgImage.png";
import DripHaus from "../button/DripHaus";

export default function NewsLetter() {
    return (
        <section className="flex flex-col items-center justify-center container h-[36.57rem] bg-cover bg-center bg-no-repeat sm:rounded-3xl" style={{ backgroundImage: `url(${newsletterBgImage.src})` }}>
            <div className="text-center flex flex-col gap-36 items-center">
                <div className="[font-family:'Inter',Helvetica] font-semibold text-white  text-[60px]  xl:text-[80px] tracking-[1.60px] whitespace-">
                    Join our newsletter
                </div>
                <DripHaus property1="variant-2" className="cursor-pointer sm:scale-[1] scale-[0.8]" />
            </div>
        </section>
    );
}
