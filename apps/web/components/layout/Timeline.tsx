'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Drip from '../../public/images/Drip.png';
import DripIcon from '../../public/images/DirpIcon.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Timeline() {
    const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);
    const [secondAnimationComplete, setSecondAnimationComplete] = useState(false);

    const [sectionRef, inView] = useInView({
        threshold: 0.5,
    });
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        if (inView && !animationTriggered) {
            // Trigger animation only if section is in view and animation hasn't been triggered yet
            setAnimationTriggered(true);
        }
    }, [inView, animationTriggered]);

    useEffect(() => {
        const firstLineTimeout = setTimeout(() => {
            setFirstAnimationComplete(true);
        }, 3000); // Adjust this value to match the duration of the first animation

        // Cleanup function
        return () => clearTimeout(firstLineTimeout);
    }, []);

    useEffect(() => {
        const secondLineTimeout = setTimeout(() => {
            setSecondAnimationComplete(true);
        }, 5000); // Adjust this value to match the duration of the first animation

        // Cleanup function
        return () => clearTimeout(secondLineTimeout);
    }, []);

    return (
        <div>
            <div ref={sectionRef} className="flex flex-col items-center w-[88.2rem]">
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '0.75rem', width: '0.75rem' } : {}} transition={{ duration: 0.2, ease: 'circIn' }} className="h-0 w-0 bg-[#B2B2B2] rounded-full" />
                <motion.div initial={{ height: 0 }} animate={animationTriggered ? { height: "25.625rem" } : {}} transition={{ duration: 2, ease: 'linear' }} className="h-0 w-[0.25rem] bg-[#B2B2B2]" />
                <motion.div initial={{ height: 0, width: 0 }} animate={animationTriggered ? { height: '0.75rem', width: '0.75rem' } : {}} transition={{ duration: 2.2, ease: 'circIn' }} className="h-0 w-0 bg-[#B2B2B2] rounded-full" />

                {firstAnimationComplete && (
                    <div className=" align-middle text-center space-y-12 m-20 ">
                        <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[80px] tracking-[1.60px] leading-[30px] whitespace-nowrap">
                            CONTRIBUTING
                        </div>
                        <p className=" [font-family:'Inter',Helvetica] font-semibold text-[#ffffff80] text-[40px] tracking-[0.80px] leading-[30px] whitespace-nowrap">
                            Contribute to the latest project in the ecosystem.
                        </p>
                    </div>
                )}
                <motion.div initial={{ height: 0, width: 0 }} animate={firstAnimationComplete ? { height: '0.75rem', width: '0.75rem' } : {}} transition={{ duration: 0.2, delay: 1, ease: 'circIn' }} className="h-0 w-0 bg-[#B2B2B2] rounded-full" />
                <motion.div initial={{ height: 0 }} animate={firstAnimationComplete ? { height: "25.625rem" } : {}} transition={{ duration: 2, delay: 1, ease: 'linear' }} className="h-0 w-[0.25rem] bg-[#B2B2B2]" />
                <div className='w-[3rem] mr-[2.75rem] flex justify-end'>
                    <motion.div initial={{ width: 0 }} animate={secondAnimationComplete ? { width: '3rem' } : {}} transition={{ duration: 2, ease: 'linear' }} className='h-[0.25rem] w-0 bg-[#B2B2B2] ' />
                </div>
                {secondAnimationComplete && (
                    <div className="self-start w-[41.188rem]  h-[23.125rem] top-0 -mt-[12rem] left-0 bg-[#151515] rounded-[15px]">
                        <div className=" w-[41.188rem] h-[15.75rem]  top-0 left-0">
                            <Image
                                className="object-cover  w-[41.188rem] h-[11.563rem] top-0 left-0"
                                alt="Rectangle"
                                src={Drip}
                            />
                            <Image
                                className=" w-[7.5rem] h-[7.5rem] relative -top-12 object-cover"
                                alt="Ellipse"
                                src={DripIcon}
                            />
                            <div className="  [font-family:'Inter',Helvetica] font-semibold text-white text-[35px] tracking-[0.70px] leading-[30px] whitespace-nowrap">
                                Cubik
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}