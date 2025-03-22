import { useRouter } from "next/router";
import ExternalLink from "../../Icons/ExternalLink";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import Img from "../../smallComp/image/Img";

const Project_4 = () => {
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
          <a
            href={"https://food-web-mernsit.netlify.app/"}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="absolute w-full h-full rounded bg-primary 
     transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
            ></div>
          </a>
          <Img
            src={"/projects/Food-web.PNG"}
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
              src={"/projects/Food-web.PNG"}
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
            {/* <span className="text-secondary text-base">Recent Project</span> */}
            <a
              href="https://food-web-mernsit.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className=" md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                Food web
              </span>
            </a>
          </div>
          <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
            <p className="text-gray-300 md:text-gray-400 text-left">
              I developed a static food website with{" "}
              <span className="text-secondary">Home</span>,{" "}
              <span className="text-secondary">About</span>,{" "}
              <span className="text-secondary">Categories</span>,{" "}
              <span className="text-secondary">Menu</span>,{" "}
              <span className="text-secondary">Testimonials</span>, and{" "}
              <span className="text-secondary">Contact</span> sections.
              Utilizing HTML, CSS, and JavaScript for smooth scrolling, users
              can seamlessly navigate through the site. Responsive design
              ensures compatibility across devices, providing an optimal viewing
              experience.
              <br />
              <span className="text-secondary">Additionally, </span> I possess
              the capability to create dynamic food ordering websites with an
              admin panel and features such as live payments and order systems.
            </p>
          </div>
          <ul
            className="flex flex-wrap w-full text-gray-300 md:text-gray-400
         text-sm font-Text2 md:justify-start"
          >
            <span className="pr-4 z-10">HTML</span>
            <span className="pr-4 z-10">CSS</span>
            <span className="pr-4 z-10">Javascript</span>
          </ul>
          <div className="z-10 flex fle-row space-x-5 ">
            <GithubIcon link="https://github.com/asar109/app_landing_page" />
            <a
              href="https://food-web-mernsit.netlify.app/"
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

export default Project_4;
