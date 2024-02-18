import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
type Props = {}

const Projects = (props: Props) => {
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
    <div id='projects' className={`${isDarkMode?'bg-dark text-alternative-white':'bg-alternative-white text-dark'} w-full min-h-min h-screen z-40 flex flex-row justify-center transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}>
    Projects</div>
  )
}

export default Projects;