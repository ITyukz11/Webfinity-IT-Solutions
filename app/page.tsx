'use client'
import { Provider} from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./store";
import AboutUs from "./contents/AboutUs";
import HomeContent from "./contents/HomeContent";
import TSParticles from "./components/TSParticles";
import Services from "./contents/Services";
import { useEffect, useState } from "react";
import Team from "./contents/Team";
import Projects from "./contents/Projects";
import { AnimatePresence, stagger, useAnimate } from "framer-motion";
import { MenuToggle } from "./components/MenuToggle";
import { Menu } from "./components/Menu";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "./contents/Contact";
import Accessibility from "./components/Accessibility";


function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations:any = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 8 16.346" },
        { at: "<" }
      ], 
      ...menuAnimations
    ]);
  }, [isOpen]);
  

  return scope;
}


export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //SIDE MENU TOGGLE

  const scope = useMenuAnimation(isOpen);

  const setDark = (darkProp: boolean) => {
    setIsDark(darkProp);
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });


  return (
    <Provider store={store}>
      <div className={`${isDark ? 'bg-dark ' : 'bg-alternative-white'} transition-colors duration-500`}>
        <Header setDark={(darkProp: boolean) => setDark(darkProp)} />
        
        <main className="flex min-h-screen w-full flex-col items-center justify-between">
          <div ref={scope}>
            <Menu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}/>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>
   
          
          <HomeContent />
          <AboutUs/>
          <Services />
          <Team />
          <Projects />
          <Contact/>
        </main>
        <TSParticles />
        <motion.div
                className="h-1 bg-blue-600 fixed bottom-0 left-0 right-0 z-[200]"
                style={{ scaleX: scaleX }}
            />
        <Footer />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="glassBlur border-white transition-all delay-300 active z-[89]"
              hidden={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              initial={{ opacity: 0, display: "none" }}
              animate={{ opacity: 1, display: "block" }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        <Accessibility/>

      </div>
    </Provider>
  );

}
