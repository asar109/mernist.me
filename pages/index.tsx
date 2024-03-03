import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const handleContextMenu = (event) => {
      // Check if Ctrl + Shift + I is pressed
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault(); // Prevent the default context menu
      }
    };

    const handleKeyDown = (event) => {
      // Check if Ctrl + Shift + I is pressed
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault(); // Prevent the default behavior (opening console)
      }
    };

    // Add event listeners when component mounts
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); //

  const meta = {
    title: "Mernist | Asar Ahmed",
    description: `I'm a Full Stack Developer, specialized in MERN stack. I create robust web applications using MongoDB, Express, React, and Node.js.`,
     image: "/logo_landscape.PNG", 
    type: "website",
  };

  return (
    <Fragment
    // onContextMenu={(e) => {
    //   e.preventDefault();
    // }}
    >
      <Head>
        <title>{meta.title}</title>
        <meta
          name="google-site-verification"
          content="HONjr8EErQo3CA4tqBH1uIUQuuzsMXvA65ety4OFqYA"
        />

        {/* <!-- Meta tags for SEO --> */}
        <meta
          name="description"
          content="With over 2 years of experience, I specialize in cutting-edge technologies, including JavaScript, TypeScript, HTML, CSS, Socket.io, Prisma, Node.js, Firebase, MongoDB, MySQL, PostgreSQL, Next.js, React.js, React Native, Flutter, and more. Turn your digital ideas into reality with my diverse skill set and unwavering dedication to excellence."
        />
        <meta
          name="keywords"
          content="JavaScript, TypeScript, HTML, CSS, Socket.io, Prisma, Node.js, Firebase, MongoDB, MySQL, PostgreSQL, Next.js, React.js, React Native, Flutter, technology, innovation"
        />

        {/* <!-- Open Graph Meta Tags (for better social media sharing) --> */}
        <meta
          property="og:title"
          content="Welcome to Mernist - Your Technology Partner"
        />
        <meta
          property="og:description"
          content="With over 2 years of experience, I specialize in cutting-edge technologies. Turn your digital ideas into reality with my diverse skill set and unwavering dedication to excellence."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://mernist.me" />
        <meta name="og:site_name" content="Mernist" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Welcome to Mernist - Your Technology Partner"
        />
        <meta
          name="twitter:description"
          content="With over 2 years of experience, I specialize in cutting-edge technologies. Turn your digital ideas into reality with my diverse skill set and unwavering dedication to excellence."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:url" content="https://mernist.me" />
        {/* <!-- <meta name="twitter:site" content="@yourtwitterhandle" /> --> */}

        {/* <!-- Canonical Link --> */}
        <link rel="canonical" href="https://mernist.me" />
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
        {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
        {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
        {context.sharedState.finishedLoading ? (
          <Footer
            githubUrl={"https://github.com/asar109"}
            hideSocialsInDesktop={true}
          />
        ) : (
          <></>
        )}
      </div>
    </Fragment>
  );
}
