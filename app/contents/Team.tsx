import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons
import Image from 'next/image';
import { SiUpwork } from 'react-icons/si';

const Team = () => {
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
    const element = document.getElementById('team');
    if (element) observer.observe(element);

    // Clean up
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  const teamMembers= [
    {
      name: 'Errol Robyn M. Abella',
      position: 'Full Stack Web Developer',
      filename: 'yuki.jpeg',
      socmed: {
        facebook: 'https://www.facebook.com/imbayuki/',
        upwork: 'https://www.upwork.com/freelancers/~010e9565d73fb3d89d',
        linkedin: 'https://www.linkedin.com/in/itabella/',
        github:'https://github.com/ITyukz11'

      }
    },
    {
      name: 'Dwight Xaviery',
      position: 'Office Manager / Technical Support',
      filename: 'dwight.png',
      socmed: {
        facebook: 'https://www.facebook.com/dwaitoh',
        upwork: '',
        linkedin: '',
        github:''
      }
    },
    {
      name: 'Bianca Denise',
      position: 'SEO Specialist / UI UX / WordPress Developer',
      filename: 'bianca.png',
      socmed: {
        facebook: 'https://www.facebook.com/nisehtml',
        upwork: 'https://www.upwork.com/freelancers/~0147578b6ae537b104',
        linkedin: 'https://www.linkedin.com/in/nisehtml/',
        github:''
      }
    },
    {
      name: 'April Rosse C. Cuizon',
      position: 'Web Designer / Canva / Figma / Adobe Photoshop',
      filename: 'april.png',
      socmed: {
        facebook: 'https://www.facebook.com/nisehtml',
        upwork: 'https://www.upwork.com/freelancers/~0147578b6ae537b104',
        linkedin: 'https://www.linkedin.com/in/nisehtml/',
        github:''
      }
    }
  ];

  return (
    <div id='team' className={`transition-all duration-500 ${isDarkMode ? 'bg-black text-white ' : 'bg-white text-black'} 
      w-full min-h-min z-40 flex flex-col flex-wrap justify-center text-center py-28 xs:text-xs sm:text-sm md:text-base`}>
      <div className="text-center py-12 w-full">
        <h1 className="text-4xl font-bold font-mono mb-3 text-blue-500">Meet our Team</h1>
        <h2 className="text-lg mb-4">Step into the heart of our organization and meet the exceptional individuals whose collective expertise, dedication, and passion drive the gears of our success.</h2>
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
        {/* Your team members section goes here */}
      </div>
      {isVisible &&(
      <div className='flex justify-center flex-wrap'>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration:index*0.5}}
            className="m-4 p-4 min-w-72 max-w-72 rounded-lg overflow-hidden items-center gap-5 shadow-xl 
          flex flex-row justify-center flex-wrap border border-dashed border-highlight">
            <motion.div
            whileHover={{ scale: 1.03, boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            >
            <Image src={`/team/${member.filename}`} className='rounded-lg border-4 shadow-xl border-highlight hover:cursor-pointer' width={300} height={300} alt={`${member.name}`} />
          </motion.div>
          <div className="mb-auto text-center">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p>{member.position}</p>
          </div>
          <div className="flex mt-auto pt-5 justify-center">
            {Object.keys(member.socmed).map((key, index) => (
              <a
                key={index}
                href={member.socmed[key as keyof typeof member.socmed]} // Type assertion here
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                {key === 'facebook' && <FaFacebook size={20} />}
                {key === 'linkedin' && <FaLinkedin size={20} />}
                {key === 'upwork' && <SiUpwork size={20} />} 
                {key === 'github' && <FaGithub size={20} />} 
              </a>
            ))}

          </div>
        </motion.div>
      ))}
      </div>
      )}
    </div>
  );
};

export default Team;
