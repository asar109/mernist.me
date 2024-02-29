import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../AppContextFolder/AppContext";
import DesktopMenu from "./_components/DesktopMenu";
import IconMenu from "./_components/IconMenu";
import Logo from "./_components/Logo";
import MobileMenu from "./_components/MobileMenu";

const Header = (props: { finishedLoading: boolean; sectionsRef }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const context = useContext(AppContext);
  const scrollSizeY = useRef<number>(0);

  // Define the EventListener for the NavBar
  useEffect(() => {
    if (context.sharedState.portfolio.NavBar.IntervalEvent == null) {
      context.sharedState.portfolio.NavBar.IntervalEvent = () => {
        if (scrollSizeY.current == 0) {
          scrollSizeY.current = window.scrollY;
        } else {
          if (window.scrollY > 50) {
            if (window.scrollY > scrollSizeY.current) {
              if (RefNavBar) {
                RefNavBar.current?.classList.remove("translate-y-0");
                RefNavBar.current?.classList.add("-translate-y-full");
              }
            } else {
              RefNavBar.current?.classList.add("translate-y-0");
              RefNavBar.current?.classList.remove("-translate-y-full");
            }
            scrollSizeY.current = window.scrollY;
          }
        }
        console.log("Scrolling checking for NavBar ", scrollSizeY.current);
      };
    }
  }, [
    context.sharedState.portfolio.NavBar,
    context.sharedState.portfolio.NavBar.IntervalEvent,
  ]);

  //Adding the EventListener for the NavBar
  useEffect(() => {
    if (context.sharedState.portfolio.NavBar.scrolling == null) {
      context.sharedState.portfolio.NavBar.scrolling = true;
      scrollSizeY.current = 0;
      //Hide when scroll down & show when scroll up
      if (typeof window !== "undefined") {
        window.addEventListener(
          "scroll",
          context.sharedState.portfolio.NavBar.IntervalEvent
        );
      }
    }
  }, [
    context.sharedState.portfolio.NavBar,
    context.sharedState.portfolio.NavBar.scrolling,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 6000);
  }, []);
  //veify document for serverSide rendering
  if (typeof document !== "undefined") {
    rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <>
      {/* Mobile visible Navbar component, controlling ShowElement state to hide itself and rotate itself */}
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />
      {/* This parent element for Menu */}
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { delay: 0, duration: 0 },
        }}
        className={`w-full fixed ${
          ShowElement ? `bg-opacity-70 shadow-md` : `bg-opacity-0 `
        } bg-primary flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4  transition duration-4000 translate-y-0 z-20`}
      >
        {/* Logo Mernist */}
        <div className="flex justify-start items-center">
          <Logo />
          <motion.h3
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 5,
              duration: 1,
            }}
            className="ml-1 tracking-wide font-semibold text-secondary"
          >
            Mernist
          </motion.h3>
        </div>

        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
          finishedLoading={props.finishedLoading}
        />

        {/* ? Desktop Menu by Titof */}
        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.div>
    </>
  );
};
export default Header;
