import React,{useCallback} from 'react'
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";

type Props = {}

const TSParticles = (props: Props) => {
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        await loadSlim(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container: any) => {
        console.log(container);
      }, []);
  return (
    <div className=' -z-10'>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },                   
          repeat: 'no-repeat',
          opacity: 1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: '#c5c4c4',
          },
          links: {
            color: '#F3F2F2',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width:  1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 2, max: 5 },
            
          },
        },
        detectRetina: true,
      }}
    />
  </div>
  )
}

export default TSParticles