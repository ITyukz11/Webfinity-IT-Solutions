import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setMobile, toggleTheme } from '../themeSlice';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { FaSun } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { setCurrentActiveMenu } from '../menuSlice';

interface HeaderProps {
    setDark: (darkProp: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setDark }) => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    const [headerZIndex, setHeaderZIndex] = useState(0);
    const isMobile = useSelector((state: any) => state.theme.isMobile);

    const activeMenuItem = useSelector((state: any) => state.menu.currentActiveMenu);

    const handleMenuItemClick = (label: string) => { // function for active menu
        dispatch(setCurrentActiveMenu(label));
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            // Set z-index based on scroll position
            if (scrolled > 0) {
                setHeaderZIndex(50); // Change to desired z-index value
            } else {
                setHeaderZIndex(0); // Reset to original z-index
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            // Check if the screen width is less than a certain threshold (e.g., 768px for mobile)
            dispatch(setMobile(window.innerWidth < 768));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Check if the screen width is less than a certain threshold (e.g., 768px for mobile)
        const isMobile = window.innerWidth < 768;

        // Dispatch the action with the appropriate boolean value
        dispatch(setMobile(isMobile));
    }, []);

    const handleModeToggle = (isDark: boolean) => {
        dispatch(toggleTheme());
        setDark(isDark)
    };
    const menus = [
        {
            href: '#home',
            label: 'Home'
        },
        {
            href: '#about',
            label: 'About'
        },
        {
            href: '#services',
            label: 'Services'
        },
        {
            href: '#team',
            label: 'Team'
        },
        {
            href: '#projects',
            label: 'Projects'
        }
    ];

    console.log("activeMenuItem: ", activeMenuItem)

    return (
        <header
            className={`py-4 ${isDarkMode ? 'bg-dark' : 'bg-alternative-white'} w-full text-${isDarkMode ? 'white' : 'dark'} sticky top-0 z-${headerZIndex} backdrop-blur-lg transition-all duration-500`}
        >
            <div className="container mx-auto px-5 lg:px-20 xl:px-40 z-50">
                <nav className={`flex gap-1 justify-between ${isMobile ? 'flex-between justify-items-stretch' : 'flex-row'}`}>
                    <div>
                        <Link href="/">
                            <label className={`text-${isDarkMode ? 'white' : 'dark'} font-bold text-base cursor-pointer z-50`}>
                                Logo
                            </label>
                        </Link>
                    </div>
                    {/* if its not on mobile screen */}
                    {!isMobile && (
                        <motion.div
                            className='relative p-0'
                            initial={{ opacity: 0, y: -10 }} // Initial state (hidden)
                            animate={{ opacity: 1, y: 0 }} // Animation state (visible)
                            exit={{ opacity: 0, y: -10 }} // Exit state (when removed from the DOM)
                            transition={{ duration: 0.5 }} // Transition duration
                        >
                            <ul className='flex flex-row gap-5 relative'>
                                {menus.map((menuItem, index) => (
                                    <li key={index} className="relative">
                                        <Link
                                            href={menuItem.href}
                                            id={menuItem.label} // Set the id to the label
                                            className={`text-${isDarkMode ? 'white' : 'dark'} font-bold z-50 text-xs sm:text-xs md:text-sm  cursor-pointer hover:text-highlight pb-2 transition-colors`}
                                            onClick={() => handleMenuItemClick(menuItem.label)}
                                        >
                                            {menuItem.label}
                                        </Link>
                                        <AnimatePresence>
                                            {activeMenuItem === menuItem.label && (
                                                <motion.div
                                                    key={`motion-${menuItem.label}`} // Key to ensure proper animation
                                                    className="absolute bottom-0 left-0 w-full h-1 bg-highlight"
                                                    initial={{ width: 0 }} // Initial width is 0
                                                    animate={{ width: "100%" }} // Change width to full when active
                                                    exit={{ width: 0 }} // Animate width from 100% to 0 when exiting
                                                    transition={{
                                                        type: "ease",
                                                        duration: 0.1 
                                                    }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}


                    <div className={`${isMobile ? 'pr-10' : ''} z-50`}>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={() => handleModeToggle(!isDarkMode)}
                                className="sr-only z-50"
                            />
                            <div className={`w-12 h-6 rounded-full bg-highlight p-1 transition-all duration-300 `}>
                                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'} transition-all duration-300 flex items-center justify-center`}>
                                    {isDarkMode ? <FaSun className='bg-black rounded-full' size={18} color="#FFFF00" /> : <RiMoonLine className='bg-black rounded-full' size={18} color="#FFFF00" />}
                                </div>
                            </div>
                        </label>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
