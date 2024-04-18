import Image from "next/image";
import twitter from "../../public/Twitter.svg"
import github from "../../public/Github.svg"

interface FooterLinkProps {
    title: string;
    links: string[];
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => {
    return (
        <div className="flex flex-col flex-1">
            <a href={`/${title.toLowerCase()}`} className="font-bold text-purple-400">{title}</a>
            {links.map((link, index) => (
                <a href={`/${link.toLowerCase()}`} key={index} className={`mt-${index === 0 ? 6 : 4}`}>
                    {link}
                </a>
            ))}
        </div>
    );
};

const footerData = [
    {
        title: "Navigate",
        links: ["Explore", "Earn", "Learn"],
    },
    {
        title: "Help",
        links: ["FAQ", "Contact", "About"],
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "Cookies"],
    },
];

function Footer() {
    return (
        <footer className="flex justify-center items-center sm:px-16 px-10 mq450:px-6  w-full bg-black max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-5 w-full max-w-[936px] max-md:max-w-full">
                <div className="flex gap-5 text-base tracking-wider text-purple-300 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    {footerData.map((data, index) => (
                        <FooterLink key={index} title={data.title} links={data.links} />
                    ))}
                </div>
                <div className="flex gap-5 sm:mt-14 mt-6 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex-auto text-base tracking-wider text-purple-300">
                        © 2024 Solcanvas. All Rights Reserved.
                    </div>
                    <div className="flex gap-5 justify-between self-start">
                        <Image
                            loading="lazy"
                            src={twitter}
                            alt="Social media icon"
                            className="shrink-0 w-5 aspect-square"
                        />
                        <Image
                            loading="lazy"
                            src={github}
                            alt="Social media icon"
                            className="shrink-0 w-5 aspect-square fill-purple-600"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;