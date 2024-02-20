import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const Accessibility: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="fixed bottom-2 right-5 z-[999]">
            <motion.div
                className="text-white p-2 rounded-full hover:cursor-pointer hover:bg-gray-400 focus:outline-none"
                onClick={toggleExpanded}
                animate={{ rotate: isExpanded ? 180 : 0 }} // Rotate when expanded
            >
                <IoIosArrowDown className='hover:bg-gray-400 hover:cursor-pointer' size={40} onClick={toggleExpanded} />
            </motion.div>

            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 right-0 mt-4 mr-4 flex flex-col items-center space-y-2"
                >
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {/* Add your social media icon */}
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {/* Add your social media icon */}
                        </svg>
                    </a>
                    {/* Add more social media icons as needed */}
                </motion.div>
            )}
        </div>
    );
};

export default Accessibility;
