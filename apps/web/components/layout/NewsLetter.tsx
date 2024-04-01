import newsletterBgImage from "../../public/images/newsletterBgImage.png";
import CustomButton from "../button/CustomButton";

export default function NewsLetter() {
    return (
        <div className="w-full xl:px-24 sm:px-16 px-6 flex justify-center">
            <section className="flex flex-col items-center justify-center container xl:h-[30.57rem] sm:h-[25rem] h-[18rem] bg-cover bg-center bg-no-repeat rounded-2xl sm:rounded-3xl" style={{ backgroundImage: `url(${newsletterBgImage.src})` }}>
                <div className="text-center flex flex-col  items-center">
                    <div className="font-semibold text-white text-[40px]  sm:text-[60px]  xl:text-[80px] tracking-[1.60px] whitespace-">
                        Join our newsletter
                    </div>
                </div>
            </section>
        </div>
    );
}
