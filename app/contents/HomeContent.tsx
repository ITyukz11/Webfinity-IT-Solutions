import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const HomeContent: React.FC<Props> = () => {
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

    const contentItems = [
        {
            text: 'Welcome to',
            className: `text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-blue-500' : 'text-blue-800'}`,
            delay: 0.2
        },
        {
            text: 'Webfinity I.T. Solutions',
            className: `text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDarkMode ? 'text-[#CCD6F6]' : 'text-dark'}`,
            delay: 0.8
        },
        {
            text: "Let's design your success",
            className: `text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDarkMode ? 'text-[#B1C4FC]' : 'text-dark'}`,
            delay: 1
        },
        {
            text: (
                <span>
                    <span className={isDarkMode ? 'text-blue-500' : 'text-blue-800'}>Empowering</span> Your Business Online and Experience{' '}
                    <span className={isDarkMode ? 'text-blue-500' : 'text-blue-800'}> Quality</span> Services at an{' '}
                    <span className={isDarkMode ? 'text-blue-500' : 'text-blue-800'}> Affordable Price</span>.
                </span>
            ),
            className: `text-sm sm:text-sm md:text-base lg:text-text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
            delay: 1.2
        }
    ];

    return (
        <div id='home' className={`w-full min-h-min h-screen z-40 flex flex-col sm:flex-row px-12 sm:px-20 md:px-32 xl:px-56 justify-center items-center`}>
            <div className='flex flex-col justify-center w-full sm:w-1/2'>
                {contentItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className='flex flex-col justify-center'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: item.delay, duration: 1 }}
                    >
                        <h2 className={`${item.className} mb-1 sm:mb-1 md:mb-2 xl:mb-4`}>{item.text}</h2>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className='flex flex-col justify-center items-end w-full sm:w-1/2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
            >
                <Image src='/about-us.png' height={500} width={500} alt='About Us Image' />
            </motion.div>
        </div>
    );
};

export default HomeContent;
