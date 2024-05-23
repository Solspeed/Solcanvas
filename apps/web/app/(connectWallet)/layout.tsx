import Image from 'next/image';
import logo from "../../public/logo.svg"

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (

        <div className="overflow-x-hidden min-h-screen bg-black flex flex-col">
            <Image src={logo} className='sm:m-12 m-6' alt="Logo" width={37} height={37} />
            <div className="w-screen h-full  flex items-center grow justify-center">
                {children}
            </div>
        </div>
    );
}