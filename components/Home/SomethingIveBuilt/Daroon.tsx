import { useRouter } from "next/router";
import ExternalLink from "../../Icons/ExternalLink";
import Img from "../../smallComp/image/Img";

const Daroon = () => {
  const router = useRouter();

  return (
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
          <a href="https://admin.daroon.krd/" target="_blank" rel="noreferrer">
            <div
              className="absolute w-full h-full rounded bg-primary 
     transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
            ></div>
          </a>
          <Img
            src={"/projects/daroon.PNG"}
            alt={"Daroon Project Screenshot"}
            className="w-full rounded h-full "
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
              src={"/projects/daroon.PNG"}
              alt={"Daroon Project Screenshot"}
              className="w-full h-full "
            />
          </div>
        </div>

        <div
          className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
      col-span-8 flex flex-col items-start  space-y-3 md:order-1"
        >
          <div className="flex flex-col space-y-1  z-10">
            <span className="text-secondary text-base">
              Daroon <span className="text-xs text-white">( Recent )</span>
            </span>
            <a
              href="https://admin.daroon.krd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                Daroon Admin Panel
              </span>
            </a>
          </div>
          <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
            <p className="text-gray-300 md:text-gray-400 text-justify md:text-left ">
              I built both the <span className="text-secondary">backend</span>{" "}
              and <span className="text-secondary">admin panel</span> for Daroon
              — a doctor appointment app focused on mobile users. The system
              helps doctors and staff manage clinics with{" "}
              <span className="text-secondary">map support</span>, handle{" "}
              <span className="text-secondary">secure bookings</span>, and
              update settings easily. It also includes{" "}
              <span className="text-secondary">live chat and video calls</span>,
              a <span className="text-secondary">discount feature</span>,
              support for assistants, and tools to share posts for engagement.
              <br />A <span className="text-secondary">payment system</span> and
              real-time notifications were added to make operations smooth and
              reliable.
            </p>
          </div>
          <ul
            className="flex flex-wrap w-full text-gray-300 md:text-gray-400
         text-sm font-Text2 md:justify-start"
          >
            <span className="pr-4 z-10">Next.Js</span>
            <span className="pr-4 z-10">Node.js</span>
            <span className="pr-4 z-10">TypeScript</span>
            <span className="pr-4 z-10">Socket.IO</span>
            <span className="pr-4 z-10">FIB</span>
            <span className="pr-4 z-10">LiveKit</span>
          </ul>
          <div className="z-10 flex fle-row space-x-5 ">
            <a
              href="https://admin.daroon.krd/"
              target="_blank"
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

export default Daroon;
