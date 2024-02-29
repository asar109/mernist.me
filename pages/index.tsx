import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../components/AppContextFolder/AppContext";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import MyName from "../components/Home/MyName/MyName";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
export default function Home() {
  const [ShowElement, setShowElement] = useState(true);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      // remove Typing project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }
    setShowElement(true);

    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      context.setSharedState(context.sharedState);
      context.sharedState.finishedLoading = true;
    }, 5500);
  }, [context, context.sharedState]);

  setTimeout(() => {}, 5000);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const meta = {
    title: "Mernist | Full Stack Developer",
    description: `I'm a Full Stack Developer, I build websites and web applications. I'm a MERN stack developer, I use MongoDB, Express, React and Node.js to build web applications`,
    image: "/titofCercle.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-primary w-full ">
        {context.sharedState.finishedLoading ? (
          <></>
        ) : ShowElement ? (
          <Startup />
        ) : (
          <></>
        )}
        <Header
          finishedLoading={context.sharedState.finishedLoading}
          sectionsRef={homeRef}
        />
        <MyName finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround
          finishedLoading={context.sharedState.finishedLoading}
        />
        {context.sharedState.finishedLoading ? (
          <AboutMe ref={aboutRef} />
        ) : (
          <></>
        )}
        {/* {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>} */}
        {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
        {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
        {context.sharedState.finishedLoading ? (
          <Footer
            githubUrl={"https://github.com/hktitof/my-website"}
            hideSocialsInDesktop={true}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
