'use client'
import { Provider} from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./store";
import AboutUs from "./contents/AboutUs";
import TSParticles from "./components/TSParticles";
import Services from "./contents/Services";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const setDark = (darkProp: boolean) => {
    setIsDark(darkProp);
  };
  
  return (
    <Provider store={store}> {/**GLOBAL STATE */}
    <div className={`${isDark ? 'bg-dark transition-colors' : 'bg-alternative-white transition-colors'}`}>


        <Header setDark={(darkProp: boolean) => setDark(darkProp)} />


        <main className="flex min-h-screen flex-col items-center justify-between">

          <AboutUs />{/**ABOUT US CONTENT*/}
          <Services />{/**SERVICES US CONTENT*/}

        </main>
        <TSParticles />
        <Footer />


    </div>
    </Provider>

  );
}
