import React from 'react'
import { useSelector } from 'react-redux';
type Props = {}

const Services = (props: Props) => {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <div id='services' className={`transition-all duration-500 ${isDarkMode ? 'bg-dark text-white ' : 'bg-alternative-white text-black'} w-full min-h-min z-40 flex flex-row justify-center`}>

    Services</div>
  )
}

export default Services