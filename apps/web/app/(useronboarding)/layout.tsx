import Image from 'next/image'
import logo from "../../public/logo.png"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="overflow-x-hidden min-h-screen bg-black flex items-center justify-center sm:py-20 py-12 px-6">
      <div className="flex flex-col sm:ml-24 mx-auto">
        <Image
          alt=""
          width={100}
          height={100}
          loading="lazy"
          src={logo}
          className="aspect-square fill-indigo-400 w-[50px]"
        />
        {children}
      </div>
    </div>
  )
}
