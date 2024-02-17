import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
type Props = {}

const Team = (props: Props) => {
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
    <div className={`${isDarkMode?'bg-black text-white':'bg-white text-black'} w-full min-h-min h-screen z-40 flex flex-row justify-center transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}>
    Team</div>
  )
}

export default Team;