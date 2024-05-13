"use client ";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/logo.svg";
import hamburgermenu from "../../../public/images/marketplace/hamburger-menu.svg";
import closemenu from "../../../public/images/marketplace/close.svg";
import window from "../../../public/images/marketplace/window.svg";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar for larger screens */}
      <div className="bg-black px-4 md:px-20 hidden md:py-[3.2rem] py-6 md:flex items-center justify-center">
        <div className="w-full  h-[50px] flex gap-[6em] justify-between items-center">
          {/* <a href="#" className="xl:block hidden text-[#B2B2B2] text-xl font-bold  capitalize leading-[30px] tracking-[1%]">
                        Digital Collectibles
                    </a>
                    <a href="#" className="text-[#B2B2B2] text-xl font-bold  capitalize leading-[30px] tracking-[1%]">
                        Trading
                    </a>
                    <a href="#" className="text-[#B2B2B2] text-xl font-bold capitalize leading-[30px] tracking-[1%]">
                        Wallet
                    </a> */}
           <a href="/marketplace" className="flex items-center text-white justify-start gap-[0.44rem] font-nunito">
                <Image src={logo} alt="solcanvas logo" className="w-[40px] h-[40px] " />
                <div className="flex-auto my-auto ml-2 font-semibold font-silkscreen">
                    SolCanvas<span className="text-xs text-red-600">beta</span>
                </div>
            </a>
          {/* <a href="#" className="text-[#B2B2B2] text-xl font-bold  capitalize leading-[30px] tracking-[1%]">
                        DeFi
                    </a>
                    <a href="#" className="text-[#B2B2B2] text-xl font-bold  capitalize leading-[30px] tracking-[1%]">
                        Payments
                    </a>
                    <a href="#" className="xl:block hidden text-[#B2B2B2] text-xl font-bold  capitalize leading-[30px] tracking-[1%]">
                        Developer Tools
                    </a> */}
          <a href="#">
            <Image
              src={window}
              className="shrink-0 aspect-[0.86] w-[31px]"
              alt="Submit Icon"
            />
          </a>
        </div>
      </div>

      {/* Navbar for smaller screens */}
      <nav className="block md:hidden w-full bg-black p-3 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src={logo} alt="logo" width={40} height={40} />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <Image
                src={sidebarOpen ? closemenu : hamburgermenu}
                width={40}
                height={40}
                alt="menu icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for smaller screens */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="md:hidden  top-0 left-0 w-full h-full z-50"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
          >
            <div className="flex justify-center items-center gap-2 flex-col p-4">
              <Link
                href="#"
                className="text-[#B2B2B2] text-lg font-bold  capitalize leading-[30px] tracking-tight py-2 px-4 hover:text-purple-600  border-b-2 border-transparent hover:border-purple-900"
              >
                Digital Collectibles
              </Link>
              <Link
                href="#"
                className="text-[#B2B2B2] text-lg font-bold  capitalize leading-[30px] tracking-tight py-2 px-4 hover:text-purple-600  border-b-2 border-transparent hover:border-purple-900"
              >
                Wallet
              </Link>
              <Link
                href="#"
                className="text-[#B2B2B2] text-lg font-bold  capitalize leading-[30px] tracking-tight py-2 px-4 hover:text-purple-600  border-b-2 border-transparent hover:border-purple-900"
              >
                Trading
              </Link>
              <Link
                href="#"
                className="text-[#B2B2B2] text-lg font-bold  capitalize leading-[30px] tracking-tight py-2 px-4 hover:text-purple-600  border-b-2  border-transparent hover:border-purple-900"
              >
                Payments
              </Link>
              <Link
                href="#"
                className="text-[#B2B2B2] text-lg font-bold  capitalize leading-[30px] tracking-tight py-2 px-4 hover:text-purple-600  border-b-2  border-transparent hover:border-purple-900"
              >
                DeFi
              </Link>
              <Link
                href="#"
                className="text-[#B2B2B2] text-lg font-bold  capitalize leading-[30px] tracking-tight py-2 px-4 hover:text-purple-600  border-b-2  border-transparent hover:border-purple-900"
              >
                Developer Tools
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
