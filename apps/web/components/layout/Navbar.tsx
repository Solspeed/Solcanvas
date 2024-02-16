'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/Icon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSpring, animated, config } from "react-spring";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        setAnimateHeader(true);
    }, []);
    const slideAnimation = useSpring({
        opacity: showMenu ? 1 : 0,
        transform: showMenu ? "translateX(0%)" : "translateX(-100%)",
        config: config.wobbly,
    });
    const headerAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-100%) scale(0.5)" },
        to: {
            opacity: animateHeader ? 1 : 0,
            transform: animateHeader ? "translateY(0%) scale(1)" : "translateY(-100%) scale(0.5)",
        },
        config: config.wobbly,
    });

    const fadeInAnimation = useSpring({
        opacity: showMenu ? 1 : 0,
        config: config.slow,
        delay: showMenu ? 20 : 0,
    });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <animated.header
            className="flex-1 rounded-full bg-black shadow-[0px_4px_50px_rgba(134,_122,_210,_0.7)] flex flex-row items-end justify-between pt-[1.31rem] pb-[1.44rem] pr-[1.44rem] pl-[1.75rem] box-border gap-[1.25rem] max-w-full text-left sm:text-[1rem] text-sm text-white font-inter relative"
            style={headerAnimation}
        >            <div className="h-[4.88rem] w-[64.44rem] rounded-3xl bg-black shadow-[0px 4px 50px rgba(134, 122, 210, 0.7)] hidden max-w-full" />
            <div className="flex items-center justify-start gap-[0.44rem]">
                <Image src={logo} alt="solcanvas logo" className="sm:w-8 w-6" />
                <b className="relative tracking-[0.03em] leading-[1.88rem] uppercase z-[1]">
                    SolCanvas
                </b>
            </div>
            <div className="flex items-end justify-center lg:justify-between gap-[1.94rem]">
                {/* Show menu icon on smaller screens */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {showMenu ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
                {/* Sliding menu for smaller screens with enhanced animation */}

                {showMenu && (
                    <animated.div
                        className="sm:hidden fixed inset-0 bg-black bg-opacity-50 rounded-full z-50  "
                        style={slideAnimation}
                    >
                        <animated.div style={fadeInAnimation}>
                            <div className="flex items-center justify-end p-4">
                                <button onClick={toggleMenu} className="text-white">
                                    <FaTimes size={32} />
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-center h-6">
                                <animated.a
                                    href="#"
                                    className="text-white py-2 px-4 m-4 capitalize font-semibold border-b border-gray-600 transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md"
                                    style={fadeInAnimation}
                                >
                                    Explore
                                </animated.a>
                                <animated.a
                                    href="#"
                                    className="text-white py-2 px-4 m-4 capitalize font-semibold border-b border-gray-600 transition duration-300 ease-in-out hover:text-purple-500 hover:border-purple-500 hover:shadow-md"
                                    style={fadeInAnimation}
                                >
                                    Add project
                                </animated.a>
                            </div>
                        </animated.div>
                    </animated.div>
                )}
                {/* Links for larger screens */}
                <div className="hidden sm:flex items-end justify-center lg:justify-between gap-[1.94rem]">
                    <a
                        href="#"
                        className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1]"
                    >
                        Explore
                    </a>
                    <button className="rounded-full bg-black flex items-center justify-center pt-[0.06rem] pb-[0.13rem] pr-[1.5rem] pl-[1.81rem] whitespace-nowrap z-[1] border-[1px] border-solid border-white">
                        <div className="relative tracking-[0.01em] leading-[1.88rem] capitalize font-semibold z-[1]">
                            Add project
                        </div>
                    </button>
                </div>
            </div>
        </animated.header>
    );
}
