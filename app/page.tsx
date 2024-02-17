'use client'
import { Provider} from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./store";
import AboutUs from "./contents/AboutUs";
import HomeContent from "./contents/HomeContent";
import TSParticles from "./components/TSParticles";
import Services from "./contents/Services";
import { useState } from "react";
import Team from "./contents/Team";
import Projects from "./contents/Projects";
import Sidebar from "./components/Sidebar";
import SideBarButton from "./components/SideBarButton";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const setDark = (darkProp: boolean) => {
    setIsDark(darkProp);
  };
  const setSideBarOpen = (open: boolean) => {
    setSideBar(open)
  }

  return (
    <Provider store={store}> {/**GLOBAL STATE */}
      <div className={`${isDark ? 'bg-dark  transition-colors duration-500' : 'bg-alternative-white transition-colors duration-500'}`}>
        <Header setDark={(darkProp: boolean) => setDark(darkProp)}/>
        <Sidebar sidebarOpen={sideBar} setSideBarOpen={(open: boolean) => setSideBar(open)} />

        <main className="flex min-h-screen w-full flex-col items-center justify-between">
          <SideBarButton setSideBarOpen={(open: boolean) => setSideBar(open)} sideBarIsOpen={sideBar}/>
          <HomeContent/>
          <AboutUs/>
          <Services/>
          <Team/>
          <Projects/>
        </main>
        <TSParticles/>
        <Footer/>


      </div>
    </Provider>

  );
}
