import newsletterBgImage from "../../public/images/newsletterBgImage.png";
import CustomButton from "../button/CustomButton";

export default function NewsLetter() {
    return (
        <section className="flex flex-col items-center justify-center container sm:h-[36.57rem] bg-cover bg-center bg-no-repeat rounded-2xl sm:rounded-3xl" style={{ backgroundImage: `url(${newsletterBgImage.src})` }}>
            <div className="text-center flex flex-col sm:gap-36 gap-12 sm:py-0 py-16  items-center">
                <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[50px]  sm:text-[60px]  xl:text-[80px] tracking-[1.60px] whitespace-">
                    Join our newsletter
                </div>
                <CustomButton property1="variant-2" text="Drip Haus" className="cursor-pointer flex justify-center items-center sm:scale-[0.8] xl:scale-[1] scale-[0.7]" />
            </div>
        </section>
    );
}
