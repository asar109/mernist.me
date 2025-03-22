import ArrowIcon from "../../../components/Icons/ArrowIcon";
import Img from "../../../components/smallComp/image/Img";
export default function AboutMe(props) {
  const technologies = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "React.js", "Prisma" , "Browser Extensions" , "Chatgpt" , "Google APIs"],
    ["Socket.io", "Node.js", "TypeScript", "Framer Motion", "React Native" , "Nest.js" , "Stripe" , "Google analytics"],
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center pt-8 pb-36  bg-primary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-secondary"
              }
            />
            <span className="text-secondary font-Header text-sm  sm:text-xl">
              {" "}
              02.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                <span className="text-secondary">Welcome to Mernist </span>
                I&apos;m a firm believer that passion knows no bounds, and my
                journey from a is a testament to that belief. While my academic
                background may have been rooted in{" "}
                <span className="text-secondary ">BBA graduate</span> to a
                seasoned tech enthusiast business administration, my heart was
                always drawn to the ever-evolving realm of technology.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Driven by an insatiable curiosity and a hunger for knowledge, I
                embarked on a journey of{" "}
                <span className="text-secondary">self-discovery,</span>{" "}
                immersing myself in the vast ocean of digital possibilities.
                What started as a mere interest soon blossomed into a
                full-fledged passion, shaping the trajectory of my professional
                life.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Over the past <span className="text-secondary">two years</span>, I&apos;ve had the
                privilege of diving deep into the world of development,
                specializing primarily in the
                <span className="text-secondary"> MERN stack.</span>
                This dynamic combination of technologies has allowed me to craft
                robust and scalable solutions that seamlessly integrate
                front-end and back-end functionalities, bringing digital visions
                to life with finesse and precision.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with
                :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-secondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-secondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-[130%] border-2 border-secondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-secondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/asar_ahmed_profile.JPG"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-96 md:hidden  flex justify-center items-center">
            <div className="absolute w-56 h-full  rounded  translate-x-5 translate-y-3 border-2 border-secondary"></div>
            <div className="absolute w-60 h-full rounded overflow-hidden">
              <Img
                src={"/img/asar_ahmed_profile.JPG"}
                className={"object-contain  rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-60 h-full  bg-secondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
