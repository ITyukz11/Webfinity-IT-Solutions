/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

type Props = {};

const AboutUs: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Set a timeout to simulate loading time
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full min-h-min h-screen z-50 px-52 pb-32 flex flex-row justify-center transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex flex-col justify-center transition-all delay-150'>
                <h2 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-blue-500' : 'text-blue-800'} mb-4 animate-left-to-right`}>Welcome to</h2>
                <h1 className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDarkMode ? 'text-[#CCD6F6]' : 'text-dark'} mb-4 animate-left-to-right`}>Webfinity I.T. Solutions</h1>
                <h1 className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDarkMode ? 'text-[#B1C4FC]' : 'text-dark'} mb-4 animate-left-to-right`}>Let&apos;s design your success</h1>
                <h2 className={`text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} animate-left-to-right`}>
                    <span className={`${isDarkMode ? 'text-blue-500' : 'text-blue-800'} `}>Empowering</span> Your Business Online and Experience 
                    <span className={`${isDarkMode ? 'text-blue-500' : 'text-blue-800'} `}> Quality</span> Services at an 
                    <span className={`${isDarkMode ? 'text-blue-500' : 'text-blue-800'} `}> Affordable Price</span>.
                </h2>
            </div>
            <div className='flex flex-col justify-center '>
                <Image src='/about-us.png' height={500} width={500} alt='About Us Image' />
            </div>
        </div>
    );
};

export default AboutUs;
