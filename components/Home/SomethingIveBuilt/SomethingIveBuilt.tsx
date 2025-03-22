import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";
import Project_1 from "./Project_1";
import Project_2 from "./Project_2";
import Project_3 from "./Project_3";
import Project_4 from "./Project_4";
import Project_5 from "./Project_5";
import Project_6 from "./Project_6";
import Project_7 from "./Project_7";
import Project_8 from "./Project_8";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-primary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 pb-8  px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-secondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-secondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>

          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            What I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] text-white text-xs w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        <Project_7/>
        <Project_8/>
        <Project_6 />
        <Project_5 />
        <Project_4 />
        <Project_3 />
        <Project_2 />
        <Project_1 />
      </div>
    </div>
  );
}
