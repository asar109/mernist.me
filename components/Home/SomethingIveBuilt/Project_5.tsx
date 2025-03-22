import { useRouter } from "next/router";
import ExternalLink from "../../Icons/ExternalLink";
import Img from "../../smallComp/image/Img";

const Project_5 = () => {
  const router = useRouter();

  return (
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
          <a href="https://geniuswriter.ai" target={"_blank"} rel="noreferrer">
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
              Geniuswriter.ai{" "}
              {/* <span className="text-xs">( Recent Project )</span> */}
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
              features. The platform offers image generation, text expansion,
              summarization, voice generation,{" "}
              <span className="text-secondary">ChatGPT</span> chatbots, and a
              story generator. With{" "}
              <span className="text-secondary">Stripe</span> integration and 10
              free generations for new users.
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
            <span className="pr-4 z-10">Clerk</span>
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
  );
};

export default Project_5;
