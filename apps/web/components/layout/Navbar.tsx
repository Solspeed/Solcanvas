'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/Icon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [animateHeader, setAnimateHeader] = useState(false);
    const [connected, setConnected] = useState(false);
    const { publicKey } = useWallet();
    const connection = useConnection();
    const wallet = useWallet();

    useEffect(() => {
        if (wallet.connected) {
            setConnected(true);
        }
    }, [connection, wallet]);

    useEffect(() => {
        setAnimateHeader(true);
    }, []);

    const slideAnimation = useSpring({
        opacity: showMenu ? 1 : 0,
        transform: showMenu ? "translateX(0%)" : "translateX(-100%)",
        config: { tension: 250, friction: 20 },
    });

    const headerAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-100%) scale(0.5)" },
        to: {
            opacity: animateHeader ? 1 : 0,
            transform: animateHeader ? "translateY(0%) scale(1)" : "translateY(-100%) scale(0.5)",
        },
        config: { tension: 250, friction: 20 },
    });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const LargeScreenNavbar = () => (
        <div className="hidden sm:flex items-baseline justify-center lg:justify-between gap-[1.94rem]">
            <a
                href="/#"
                className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1] transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md"
            >
                Explore
            </a>
            {wallet.connected ? (
                <a
                    href="/#"
                    className="rounded-full bg-black flex items-center justify-center px-[1.5rem] whitespace-nowrap z-[1] border-[1px] border-solid border-gray-400 transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md"
                >
                    <div className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1]">
                        Add project
                    </div>
                </a>
            ) : (
                <a
                    href="/#"
                    className="rounded-full bg-black flex items-center justify-center px-[1.5rem] whitespace-nowrap z-[1] border-[1px] border-solid border-gray-400 transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md"
                >
                    <div className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1]">
                        Add project
                    </div>
                </a>
            )}
        </div>
    );

    const SmallScreenNavbar = () => (
        <div className="sm:hidden fixed -top-12 -left-6 h-screen   bg-black  z-50 ">
            <div className="flex flex-col items-center justify-center pr-12 pl-8 pt-7">
              
                <a
                    href="/#"
                    className="text-white py-2 px-4 m-4 capitalize font-semibold border-b border-gray-600 transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md"
                >
                    Explore
                </a>
                {wallet.connected ? (
                    <a
                        href="/#"
                        className="text-white py-2 px-4 m-4 capitalize font-semibold border-b border-gray-600 transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md"
                    >
                        Add project
                    </a>
                ) : (
                    <a
                        href="/#"
                        className="text-white py-2 px-4 m-4 capitalize font-semibold border-b border-gray-600 transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md"
                    >
                        Add project
                    </a>
                )}
                {/* <div className="text-white py-2 px-4 m-4 capitalize font-semibold border-b border-gray-600 transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md">
                    <WalletMultiButton />
                </div> */}
            </div>
        </div>
    );

    return (
        <animated.header
            className="flex-1 rounded-full  bg-black shadow-[0px_4px_50px_rgba(134,_122,_210,_0.2)] flex flex-row items-end justify-between pt-[1.31rem] pb-[1.44rem] pr-[1.44rem] pl-[1.75rem] box-border gap-[1.25rem] max-w-full text-left sm:text-[1rem] text-sm text-white relative"
            style={headerAnimation}
        >
            <div className="h-[4.88rem] w-[64.44rem] rounded-3xl bg-black shadow-[0px 4px 50px rgba(134, 122, 210, 0.2)] hidden max-w-full" />
            <div className="flex items-center justify-start gap-[0.44rem] font-nunito">
                <Image src={logo} alt="solcanvas logo" className="sm:w-8 w-6 " />
                <b className="relative tracking-[0.03em] leading-[1.875rem] uppercase inline-block ">
                    SolCanvas
                </b>
            </div>
            <div className="flex items-center justify-center lg:justify-between gap-[1.94rem]">
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <LargeScreenNavbar />
            </div>
                {showMenu && <SmallScreenNavbar />}
        </animated.header>
    );
}