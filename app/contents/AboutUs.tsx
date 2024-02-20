import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image';
import { Section } from '../components/Section';

type Props = {};

const AboutUs: React.FC<Props> = () => {
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 0.5 means when 50% of the element is visible
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      }, options);
  
      // Start observing the element
      const element = document.getElementById('separator');
      if (element) observer.observe(element);
  
      // Clean up
      return () => {
        if (element) observer.unobserve(element);
      };
    }, []);

console.log("isVisible? ", isVisible)
    return (
        <div id='about' className={`transition-all py-4 duration-500 ${isDarkMode ? 'bg-black text-white ' : 'bg-white text-black'} w-full min-h-min z-40 flex flex-row justify-center`}>
            <motion.div className="flex flex-row flex-wrap gap-10 justify-center items-center">
                <div>
                    <Image src='/about/group-freelance.png' height={500} width={500} alt='group of freelancer image' />
                </div>
                <div className="max-w-4xl px-6 py-12">
                    <Section>About Us</Section>
                    
                    <AnimatePresence>
                        {isVisible && (
                            <motion.div 
                                id='separator'
                                className="border-t-2 border-gray-300 w-1/2 mb-3"
                                initial={{ width: 0 }} // Initial width is 0
                                animate={{ width: "100%" }} // Change width to full when active
                                exit={{ width: 0 }} // Animate width from 100% to 0 when exiting
                                transition={{
                                    type: "ease",
                                    duration: 0.1
                                }}>
                                    </motion.div>
                        )}
                    </AnimatePresence>

                    <p className="mb-4 ml-4">We are a group of <span className="text-highlight">freelancers</span> with <span className="text-highlight">5 years of experience</span> in the <span className="text-highlight">tech industry</span>. Our journey began with a passion for <span className="text-highlight">technology</span> and a desire to create <span className="text-highlight">innovative solutions</span> that make a difference. Over the years, we have honed our skills and expertise, allowing us to provide <span className="text-highlight">high-quality services</span> to clients worldwide.</p>
                    <p className="mb-4 ml-4">Based in the vibrant city of <span className="text-highlight">Davao</span>, <span className="text-highlight">Philippines</span>, we draw inspiration from our <span className="text-highlight">rich cultural heritage</span> and diverse community. Our team thrives on <span className="text-highlight">collaboration</span>, <span className="text-highlight">creativity</span>, and continuous <span className="text-highlight">learning</span>, ensuring that we stay at the forefront of industry trends and advancements. Whether it&apos;s <span className="text-highlight">web development</span>, <span className="text-highlight">SEO</span>, <span className="text-highlight">mobile app development</span>, or <span className="text-highlight">web design</span>, we are committed to delivering tailored solutions that exceed expectations.</p>
                    <p className='ml-4'>We take pride in our <span className="text-highlight">work ethic</span>, <span className="text-highlight">professionalism</span>, and dedication to <span className="text-highlight">client satisfaction</span>. From <span className="text-highlight">startups</span> to <span className="text-highlight">established businesses</span>, we approach each project with <span className="text-highlight">enthusiasm</span> and a commitment to <span className="text-highlight">excellence</span>. As a result, we have built lasting relationships with our clients and have become a <span className="text-highlight">trusted partner</span> in their digital journey. Join us as we continue to <span className="text-highlight">innovate</span>, <span className="text-highlight">create</span>, and make a <span className="text-highlight">positive impact</span> in the world of technology.</p>
                </div>
            </motion.div>

        </div>
    );
};

export default AboutUs;
