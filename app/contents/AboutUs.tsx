/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';


type Props = {};

const AboutUs: React.FC<Props> = () => {
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

    return (
        <div id='about' className={`transition-all duration-500 ${isDarkMode ? 'bg-black text-white ' : 'bg-white text-black'} w-full min-h-min z-40 flex flex-row justify-center`}>

            ABOUT
        </div>
    );
};

export default AboutUs;
