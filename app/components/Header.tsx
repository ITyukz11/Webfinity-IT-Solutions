// components/Header.tsx
'use client'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../themeSlice';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface HeaderProps {
  setDark: (darkProp: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setDark }) =>{
    const dispatch = useDispatch();
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
  const [headerZIndex, setHeaderZIndex] = useState(0);

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
  const handleModeToggle = (isDark:boolean) => {
    dispatch(toggleTheme());
    setDark(isDark)
  };
  type MenuItem = {
    href: string;
    label: string;
  };
  const menus = ()=>[
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
    }]

  return (
    <header
    className={`py-4 ${isDarkMode ? 'bg-dark' : 'bg-alternative-white'} text-${isDarkMode ? 'white' : 'dark'} sticky top-0 z-${headerZIndex} backdrop-blur-lg transition-all duration-500`}
  >
      <div className="container mx-auto px-40 z-50">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/">
              <label className={`text-${isDarkMode ? 'white' : 'dark'} font-bold text-base cursor-pointer`}>
                Logo Natu
              </label>
            </Link>
          </div>
          <div>
            <ul className='flex flex-row gap-5'>
              {menus().map((menuItem: MenuItem, index: number) => (
                <li key={index}>
                  <Link href={menuItem.href}>
                    <label
                      className={`text-${isDarkMode ? 'white' : 'dark'} z-50 text-sm cursor-pointer hover:text-highlight pb-2 border-b-2 border-transparent hover:border-highlight transition-colors`}
                    >
                      {menuItem.label}
                    </label>
                  </Link>
                </li>
              ))}
            </ul>


          </div>
          <div className='z-50'>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={()=> handleModeToggle(!isDarkMode)}
                className="sr-only z-50"
              />
              <div className={`w-12 h-6 rounded-full bg-highlight p-1 transition-all duration-300 `}>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'} transition-all duration-300 flex items-center justify-center`}>
                  {isDarkMode ? <FaSun className='bg-black rounded-full' size={18} color="#FFFF00" />:  <RiMoonLine className='bg-black rounded-full' size={18} color="#FFFF00"/>}
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
