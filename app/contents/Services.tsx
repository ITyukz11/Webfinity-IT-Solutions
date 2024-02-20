import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const Services = () => {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
  const isMobile = useSelector((state:any)=> state.theme.isMobile)
  const [isVisible, setIsVisible] = useState(false);

  // Check if the element is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition = document.getElementById('services')?.offsetTop || 0;
      setIsVisible(scrollPosition > targetPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesOffer = [
    {
      title: 'Web Development',
      description: 'Webfinity offers expert web design and development services for custom, high-performance websites.',
      image: '/services/mobile-dev.png'
    },
    {
      title: 'SEO',
      description: "We offer SEO services to enhance your website's visibility and drive organic traffic.",
      image: '/services/seo.png'
    },
    {
      title: 'Mobile Development',
      description: "We specialize in crafting mobile apps that captivate users and elevate your brand's digital experience.",
      image: '/services/mobile-dev.png'
    },
    {
      title: 'Web Design',
      description: 'We bring your digital vision to life with innovative web design solutions, harnessing cutting-edge tools like Figma and Canva for unparalleled UI/UX experiences.',
      image: '/services/web-design.png'
    }
  ];
  console.log("isMobile: ", isMobile)

  return (
    <div id='services' className={`flex-wrap flex-col justify-center transition-all py-28 duration-500 ${isDarkMode ? 'bg-dark text-white' : 'bg-alternative-white text-black'} w-full min-h-min z-40 flex flex-row justify-center`}>
      <div className="text-center py-12 w-full">
        <h1 className="text-4xl font-bold font-mono mb-3 text-blue-500">Explore our Services</h1>
        <h2 className="text-lg mb-4">Elevate your digital presence with our comprehensive suite of services tailored to meet your business needs.</h2>
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
        {/* Your team members section goes here */}
      </div>
      <div className='flex flex-row justify-center w-full items-center'>
      {isMobile?'':<Image src='/services/services-pic.png' height={500} width={500} alt='Services Image' />}
        <div className={`flex flex-row justify-start flex-wrap ${isMobile?'':'w-[50%]'} h-fit`}>
          {servicesOffer.map((service, index) => (
            <motion.div
              key={index}
              className={`m-4 p-4 max-w-sm border-gray-50 border-b border-dashed overflow-hidden items-center gap-5 shadow-xl flex flex-row justify-center flex-wrap rounded-xl  ${isVisible ? '' : ''}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
             <Image src={service.image} width={100} height={100} alt={service.title}/>
              
              <div className="text-center">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
