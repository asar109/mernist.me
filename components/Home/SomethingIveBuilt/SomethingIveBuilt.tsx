import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-primary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
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
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-primary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded-md w-full h-full col-span-7 ">
              <a
                href="https://geniuswriter.ai"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-primary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/projects/geniuswriter.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-secondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-primary opacity-80 z-10"></div>
                <Img
                  src={"/projects/geniuswriter.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-secondary text-base">
                  Geniuswriter.ai
                </span>
                <a
                  href="https://geniuswriter.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                    Geniuswriter offers a variety of AI tools.
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-justify md:text-right ">
                  I developed a suite of AI tools for content creation. Using{" "}
                  <span className="text-secondary">Next.js</span>{" "}
                  <span className="text-secondary">Prisma</span>, {""} and{" "}
                  <span className="text-secondary">Clerk auth</span> for
                  authentication, I integrated{" "}
                  <span className="text-secondary">Rapid</span> and{" "}
                  <span className="text-secondary">Replicate</span> API for AI
                  features. The platform offers image generation, text
                  expansion, summarization, voice generation,{" "}
                  <span className="text-secondary">ChatGPT</span> chatbots, and
                  a story generator. With{" "}
                  <span className="text-secondary">Stripe</span> integration and
                  10 free generations for new users.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.Js</span>
                <span className="pr-4 z-10">Prisma</span>
                <span className="pr-4 z-10">My SQL</span>
                <span className="pr-4 z-10">Stripe</span>
                <span className="pr-4 z-10">Clerk auth</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://geniuswriter.ai/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-primary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://ubiquitous-bublanina-da84ec.netlify.app/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-primary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/projects/discord.PNG"}
                alt={"Project Screen shot"}
                className={`w-full  rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-secondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-primary opacity-80 z-10"></div>
                <Img
                  src={"/projects/discord.PNG"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-secondary text-base">Recent Project</span>
                <a
                  href="https://ypredict.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                    Discord clone
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I engineered a dynamic Discord clone, empowering users to
                  create servers and manage member access effortlessly. Within
                  each server, three distinct channel types—
                  <span className="text-secondary">text</span>,{" "}
                  <span className="text-secondary">voice</span>, and{" "}
                  <span className="text-secondary">video</span>—facilitate
                  seamless communication. Leveraging{" "}
                  <span className="text-secondary">Socket.IO</span> for
                  real-time messaging, users engage in instant conversations. In
                  the absence of{" "}
                  <span className="text-secondary">Socket.IO</span> support, a
                  fallback mechanism ensures continuous functionality. This
                  project underscores my proficiency in building interactive web
                  applications, prioritizing user experience and real-time
                  communication.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">ERC20</span>
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">Smart contract</span>
                <span className="pr-4 z-10">Blockchain</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/hktitof/Ypredict" />
                <a
                  href="https://ubiquitous-bublanina-da84ec.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
