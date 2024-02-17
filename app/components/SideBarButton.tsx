import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

interface SideBarButtonProps {
    setSideBarOpen: (open: boolean) => void;
    sideBarIsOpen: boolean;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({ setSideBarOpen, sideBarIsOpen }) => {
    const isMobile = useSelector((state: any) => state.theme.isMobile);
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

    return (
        <>
            <div className={`fixed top-0 right-0 z-[100] p-4`}>
                {isMobile && (
                    <motion.img
                        src={sideBarIsOpen ? '/close.png' : '/hamburger.png'}
                        alt="Menu Icon"
                        style={{
                            cursor: 'pointer',
                            width: '24px', // Set the width to 24 pixels
                            height: '24px', // Set the height to 24 pixels
                            zIndex: '70px',
                            filter: isDarkMode ? 'invert(100%)' : 'none', // Apply color filter
                        }}
                        whileHover={{ scale: 1.1 }} // Scale up when hovering
                        whileTap={{ scale: 0.8 }} // Scale down when tapping
                        onClick={() => setSideBarOpen(!sideBarIsOpen)}
                    />
                )}
            </div>
        </>
    );
};

export default SideBarButton;
