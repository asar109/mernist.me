import { useRouter } from "next/router";
import Img from "../../smallComp/image/Img";

const Project_1 = () => {
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
          <span>
            <div
              className="absolute w-full h-full rounded bg-primary 
              transition-opacity opacity-30 hover:opacity-0  duration-300"
            ></div>
          </span>

          <Img
            src={"/projects/vibeground.PNG"}
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
              src={"/projects/vibeground.PNG"}
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
            <span className="text-secondary text-base">Vibeground</span>
            <span>
              <span className=" md:text-gray-200 text-secondary font-bold text-xl ">
                Vibeground.com
              </span>
            </span>
          </div>
          <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
            {" "}
            <p className="text-gray-300 md:text-gray-400 text-left">
              At the heart of{" "}
              <span className="text-secondary">Vibeground.com</span> lies its
              revolutionary platform for connecting fans with models, fostering
              meaningful interactions between both parties. Through meticulously
              designed profile creation tools, users on both ends can showcase
              their personality, talents, and interests, creating a vibrant{" "}
              <span className="text-secondary">community hub. </span> Fans gain
              exclusive access to their favorite models, engaging in direct
              communication, live events, and personalized content.
            </p>
          </div>
          <ul
            className="flex flex-wrap w-full text-gray-300 md:text-gray-400
                  text-sm font-Text2 md:justify-end"
          >
            <span className="pr-4 z-10">React.js</span>
            <span className="pr-4 z-10">Node.js</span>
            <span className="pr-4 z-10">Nodemailer</span>
            <span className="pr-4 z-10">MongoDB</span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project_1;
