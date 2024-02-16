import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
type Props = {}

const Services = (props: Props) => {
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
    <div className={`${isDarkMode?'bg-dark':'bg-alternative-white'} w-full min-h-min h-screen z-50 px-52 pb-32 flex flex-row justify-center transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}>
    Services</div>
  )
}

export default Services