import logo from "../../../public/images/Icon.png"
import Image from "next/image"

export default function Navbar() {
    return (
        <div className="bg-black sm:py-[3.2rem] py-6 flex items-center justify-center">
            <div className="min-w-[1169px] h-[50px] flex justify-between items-center">
                <a href="" className="text-zinc-400 text-xl font-bold font-['Inter'] capitalize leading-[30px] tracking-tight">Digital Collectibles</a>
                <a href="" className="text-zinc-400 text-xl font-bold font-['Inter'] capitalize leading-[30px] tracking-tight">Trading</a>
                <a href="" className="text-zinc-400 text-xl font-bold font-['Inter'] capitalize leading-[30px] tracking-tight">Wallet</a>
                <Image src={logo} alt="logo" width={50} height={50} />
                <a href="" className="text-zinc-400 text-xl font-bold font-['Inter'] capitalize leading-[30px] tracking-tight">DeFi</a>
                <a href="" className="text-zinc-400 text-xl font-bold font-['Inter'] capitalize leading-[30px] tracking-tight">Payments</a>
                <a href="" className="text-zinc-400 text-xl font-bold font-['Inter'] capitalize leading-[30px] tracking-tight">Developer Tools</a>
            </div>
        </div>
    )
}