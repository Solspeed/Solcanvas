'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Drip from '../../public/images/Drip.png';
import elliplse68 from "../../public/images/Ellipse 68.png"
import ellipse69 from "../../public/images/Ellipse 69.png"
import ellipse70 from "../../public/images/Ellipse 70.png"
import DripIcon from '../../public/images/DirpIcon.png';
import Cubik from "../../public/images/cubik.png"
import CubikIcon from "../../public/images/cubikIcon.png"
import Tinydancer from "../../public/images/tinydancer.png"
import TinydancerIcon from "../../public/images/tinydancerIcon.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Timeline() {
    const [sectionRef, inView] = useInView({
        threshold: 0.5,
    });
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        if (inView && !animationTriggered) {
            setAnimationTriggered(true);
        }
    }, [inView, animationTriggered]);

    return (
        <div>
            <div ref={sectionRef} id='timeline' className="2xl:scale-[1] 2xl:mt-0 xl:-mt-32 lg:-mt-60 md:-mt-80 sm:-mt-96 scale-50  xl:scale-[0.9] lg:scale-[0.8] md:scale-[0.7] sm:scale-[0.6] sm:flex  sm:flex-col flex-row sm:items-center items-start h-fit sm:w-[88.2rem] z-0">
                {/* Framer Motion animations for the lines */}
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '1.5rem', width: '1.5rem' } : {}} transition={{ duration: 0.2, delay: 0.2, ease: 'circIn' }} className=" h-0 w-0 bg-[#B2B2B2] rounded-full" />
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 1.5, delay: 0.4, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '1.5rem', width: '1.5rem' } : {}} transition={{ duration: 0.5, delay: 2.1, ease: 'circIn' }} className=" h-0 w-0 bg-[#B2B2B2] rounded-full" />
                {/* Content that appears after the first animation */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={animationTriggered ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 2.6, ease: 'easeOut' }} className=" align-middle text-center space-y-12 m-20">
                    <div className=" font-semibold text-white text-[80px] tracking-[1.60px] leading-[30px] whitespace-nowrap">
                        CONTRIBUTING
                    </div>
                    <p className=" font-semibold text-[#ffffff80] text-[40px] tracking-[0.80px] leading-[30px] whitespace-nowrap">
                        Contribute to the latest project in the ecosystem.
                    </p>
                </motion.div>

                {/* Framer Motion animations for the second set of lines */}
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '1.5rem', width: '1.5rem' } : {}} transition={{ duration: 0.2, delay: 3.6, ease: 'circIn' }} className=" h-0 w-0 bg-[#B2B2B2] rounded-full" />
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "32rem" } : {}} transition={{ duration: 1.4, delay: 3.8, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />

                {/* Static div for the right line */}
                <div className=' w-[3rem] mr-[2.75rem] flex justify-end'>
                    <motion.div initial={{ width: 0 }} animate={animationTriggered ? { width: '3rem' } : {}} transition={{ duration: 1, delay: 5, ease: 'linear' }} className=' h-[0.25rem] w-0 bg-[#B2B2B2] ' />
                </div>

                {/* Content that appears after the second animation */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={animationTriggered ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 6.2, ease: 'easeOut' }} className=" self-start  w-[41.188rem] z-50 h-[23.125rem] top-0 -mt-[12rem] left-0 bg-[#151515] rounded-[15px]">
                    <div className=" top-0 left-0">
                        <Image className=" object-cover  top-0 left-0" alt="Rectangle" src={Cubik} />
                        <Image className=" w-[7.5rem] h-[7.5rem] relative -top-12 object-cover" alt="Ellipse" src={CubikIcon} />
                        <div className=" font-semibold text-white text-[35px] tracking-[0.70px] leading-[30px] whitespace-nowrap">
                            Cubik
                        </div>
                    </div>
                </motion.div>

                {/* Additional card and line on the left */}

                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 1, delay: 6.2, ease: 'linear' }} className=" h-0 w-[0.25rem] -mt-[12rem] bg-[#B2B2B2]" />
                <div className=' w-[3rem] -mr-[2.75rem] flex justify-start'>
                    <motion.div initial={{ width: 0 }} animate={animationTriggered ? { width: '3rem' } : {}} transition={{ duration: 1, delay: 7.2, ease: 'linear' }} className=' h-[0.25rem] w-0 bg-[#B2B2B2] ' />
                </div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={animationTriggered ? { opacity: 1, x: 0 } : {}} transition={{ duration: .5, delay: 8.2, ease: 'easeOut' }} className=" self-end w-[41.188rem] h-[23.125rem] top-0 -mt-[12rem] left-0 bg-[#151515] rounded-[15px]">
                    <div className=" w-[41.188rem] h-[15.75rem] top-0 left-0">
                        <Image className=" object-cover w-[41.188rem] h-[11.563rem] top-0 left-0" alt="Rectangle" src={Tinydancer} />
                        <Image className=" w-[7.5rem] h-[7.5rem] relative -top-12 object-cover" alt="Ellipse" src={TinydancerIcon} />
                        <div className=" font-semibold text-white text-[35px] tracking-[0.70px] leading-[30px] whitespace-nowrap">
                            Tiny Dancer
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 1, delay: 8.7, ease: 'linear' }} className=" h-0 w-[0.25rem] -mt-[12rem] bg-[#B2B2B2]" />
                <div className=' w-[3rem] mr-[2.75rem] flex justify-end'>
                    <motion.div initial={{ width: 0 }} animate={animationTriggered ? { width: '3rem' } : {}} transition={{ duration: 1, delay: 9.7, ease: 'linear' }} className=' h-[0.25rem] w-0 bg-[#B2B2B2] ' />
                </div>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={animationTriggered ? { opacity: 1, x: 0 } : {}} transition={{ duration: .5, delay: 10.8, ease: 'easeOut' }} className=" self-start w-[41.188rem] h-[23.125rem] top-0 -mt-[12rem] left-0 bg-[#151515] rounded-[15px]">
                    <div className=" w-[41.188rem] h-[15.75rem] top-0 left-0">
                        <Image className=" object-cover w-[41.188rem] h-[11.563rem] top-0 left-0" alt="Rectangle" src={Drip} />
                        <Image className=" w-[7.5rem] h-[7.5rem] relative -top-12 object-cover" alt="Ellipse" src={DripIcon} />
                        <div className=" font-semibold text-white text-[35px] tracking-[0.70px] leading-[30px] whitespace-nowrap">
                            Drip
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 1, delay: 11.3, ease: 'linear' }} className=" h-0 w-[0.25rem] -mt-[12rem] bg-[#B2B2B2]" />
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '1.5rem', width: '1.5rem' } : {}} transition={{ duration: 0.5, delay: 12.1, ease: 'circIn' }} className=" h-0 w-0 bg-[#B2B2B2] rounded-full" />
                <motion.div initial={{ opacity: 0, y: 20 }} animate={animationTriggered ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: 12.9, ease: 'easeOut' }} className="[font-family:'Inter',Helvetica] space-y-12 m-20 font-semibold text-white text-[50px] tracking-[1.00px] leading-[30px] whitespace-nowrap">
                    Ways you can contribute
                </motion.div>
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '1.5rem', width: '1.5rem' } : {}} transition={{ duration: 0.2, delay: 13.4, ease: 'circIn' }} className=" h-0 w-0 bg-[#B2B2B2] rounded-full" />
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 1.5, delay: 13.6, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                <motion.div className='h-[0.25rem] bg-[#B2B2B2]' initial={{ width: 0 }} animate={animationTriggered ? { width: '66.39rem' } : {}} transition={{ duration: 1, delay: 15.1, ease: 'linear' }} />
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col items-center'>
                        <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "12.825rem" } : {}} transition={{ duration: 1, delay: 16.1, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                        <motion.div initial={{ opacity: 0 }} animate={animationTriggered ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 17.1, ease: 'easeOut' }} className="flex justify-center items-center w-[352px] h-[123px] bg-black rounded-[15px] shadow-[2px_2px_30px_4px_#6946e240]">
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[35px] tracking-[0.70px] leading-[30px] whitespace-nowrap">
                                New Project
                            </div>
                        </motion.div>
                        <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "12.825rem" } : {}} transition={{ duration: 1, delay: 17.6, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "12.825rem" } : {}} transition={{ duration: 1, delay: 16.1, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                        <motion.div initial={{ opacity: 0 }} animate={animationTriggered ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 17.1, ease: 'easeOut' }} className="flex justify-center items-center w-[352px] h-[123px] bg-black rounded-[15px] shadow-[2px_2px_30px_4px_#6946e240]">
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[35px] tracking-[0.70px] leading-[30px] whitespace-nowrap">
                                Edit Project
                            </div>
                        </motion.div>
                        <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "12.825rem" } : {}} transition={{ duration: 1, delay: 17.6, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "12.825rem" } : {}} transition={{ duration: 1, delay: 16.1, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                        <motion.div initial={{ opacity: 0 }} animate={animationTriggered ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 17.1, ease: 'easeOut' }} className="flex justify-center items-center   w-[352px] h-[123px] bg-black rounded-[15px] shadow-[2px_2px_30px_4px_#6946e240]">
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[35px] tracking-[0.70px] leading-[30px] whitespace-nowrap">
                                Post Updates
                            </div>
                        </motion.div>
                        <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "12.825rem" } : {}} transition={{ duration: 1, delay: 17.6, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                    </div>
                </div>
                <div className='w-[66.39rem] flex flex-row justify-between'>
                    <motion.div initial={{ width: 0 }} animate={animationTriggered ? { width: '33.195rem' } : {}} transition={{ duration: 1, delay: 18.6, ease: 'linear' }} className='self-start h-[0.25rem] w-0 bg-[#B2B2B2] ' />
                    <motion.div initial={{ width: 0 }} animate={animationTriggered ? { width: '33.195rem' } : {}} transition={{ duration: 1, delay: 18.6, ease: 'linear' }} className='self-end h-[0.25rem] w-0 bg-[#B2B2B2] ' />
                </div>
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 1, delay: 19.6, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '1.5rem', width: '1.5rem' } : {}} transition={{ duration: 0.5, delay: 20.5, ease: 'circIn' }} className=" h-0 w-0 bg-[#B2B2B2] rounded-full" />
                <motion.div initial={{ opacity: 0, y: 20 }} animate={animationTriggered ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: 21, ease: 'easeOut' }} className="[font-family:'Inter',Helvetica] font-semibold text-white  space-y-12 m-20 text-[80px] tracking-[1.60px] leading-[30px] whitespace-nowrap">
                    Rewards
                </motion.div>
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '1.5rem', width: '1.5rem' } : {}} transition={{ duration: 0.2, delay: 21.5, ease: 'circIn' }} className=" h-0 w-0 bg-[#B2B2B2] rounded-full" />
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 1.5, delay: 21.7, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                <div className="flex flex-col items-center px-5">
                    <div className='rounded-t-md overflow-hidden '>
                        <motion.div initial={{ width: 0 }} animate={animationTriggered ? { width: '46.563rem' } : {}} transition={{ duration: 1, delay: 23.2, ease: 'linear' }} className='h-[0.25rem] bg-[#B2B2B2]' />
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col items-center'>
                                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: '12.825rem' } : {}} transition={{ duration: 0.5, delay: 24.2, ease: 'linear' }} className="h-0 w-[0.25rem] bg-[#B2B2B2]" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: '12.825rem' } : {}} transition={{ duration: 0.5, delay: 24.2, ease: 'linear' }} className="h-0 w-[0.25rem] bg-[#B2B2B2]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[21rem] justify-between self-stretch w-full max-md:flex-wrap max-md:max-w-full">
                        <motion.div initial={{ opacity: 0 }} animate={animationTriggered ? { opacity: 1 } : {}} transition={{ duration: .5, delay: 24.7, ease: 'easeOut' }} className="flex flex-col px-20 pt-20 pb-12 rounded-2xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-5 mt-6 max-md:mx-2">
                                <div className="flex flex-col flex-1 items-center">
                                    <Image src={elliplse68} alt="image"
                                        loading="lazy"
                                        className="shrink-0 rounded-full aspect-square w-[177px]"
                                    />
                                    <Image src={ellipse69} alt="image"
                                        loading="lazy"
                                        className="shrink-0 mt-24 rounded-full aspect-square w-[177px] "
                                    />
                                </div>
                                <Image src={ellipse70} alt="image"
                                    loading="lazy"
                                    className="shrink-0 my-auto max-w-full rounded-full aspect-square w-[177px]"
                                />
                            </div>
                            <div className="self-center mt-32 text-6xl font-semibold tracking-wider leading-8 text-white max-md:mt-10 max-md:text-4xl">
                                Token
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={animationTriggered ? { opacity: 1 } : {}} transition={{ duration: .5, delay: 24.7, ease: 'easeOut' }} className="flex flex-col px-20 pt-20 pb-12 rounded-2xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-5 mt-6 max-md:mx-2">
                                <div className="flex flex-col flex-1 items-center">
                                    <Image src={elliplse68} alt="image"
                                        loading="lazy"
                                        className="rounded-full aspect-square w-[177px]"
                                    />
                                    <Image src={ellipse69} alt="image"
                                        loading="lazy"
                                        className="mt-24 rounded-full aspect-square w-[177px] max-md:mt-10"
                                    />
                                </div>
                                <Image src={ellipse70} alt="image"
                                    loading="lazy"
                                    className="shrink-0 my-auto max-w-full rounded-full aspect-square w-[177px]"
                                />
                            </div>
                            <div className="self-center mt-32 text-6xl font-semibold tracking-wider leading-8 text-white max-md:mt-10 max-md:text-4xl">
                                NFT
                            </div>
                        </motion.div>
                    </div>
                    <div className='rounded-b-md overflow-hidden'>
                        <div className='flex justify-between w-[46.563rem]'>
                            <div className='flex flex-col items-center'>
                                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: '12.825rem' } : {}} transition={{ duration: 0.8, delay: 25.2, ease: 'linear' }} className="h-0 w-[0.25rem] bg-[#B2B2B2]" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: '12.825rem' } : {}} transition={{ duration: 0.8, delay: 25.2, ease: 'linear' }} className="h-0 w-[0.25rem] bg-[#B2B2B2]" />
                            </div>
                        </div>
                        <div className='w-[46.563rem] flex flex-row justify-between'>
                            <motion.div initial={{ width: 0 }} animate={animationTriggered ? { width: '23.2815rem' } : {}} transition={{ duration: 1, delay: 26, ease: 'linear' }} className='self-start h-[0.25rem] w-0 bg-[#B2B2B2] ' />
                            <motion.div initial={{ width: 0 }} animate={animationTriggered ? { width: '23.2815rem' } : {}} transition={{ duration: 1, delay: 26, ease: 'linear' }} className='self-end h-[0.25rem] w-0 bg-[#B2B2B2] ' />
                        </div>
                    </div>
                </div>
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 1, delay: 27, ease: 'linear' }} className=" h-0 w-[0.25rem] bg-[#B2B2B2]" />
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '1.5rem', width: '1.5rem' } : {}} transition={{ duration: 0.5, delay: 28, ease: 'circIn' }} className=" h-0 w-0 bg-[#B2B2B2] rounded-full" />
            </div>
        </div>
    );
}