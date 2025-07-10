import { useRouter } from "next/router";
import ExternalLink from "../../Icons/ExternalLink";
import Img from "../../smallComp/image/Img";

const Project_8 = () => {
  const router = useRouter();

  return (
    <div
      data-aos="fade-up"
      className="relative md:grid md:grid-cols-12 w-full md:h-96"
    >
      {/* Left image */}
      <div
        className="hidden bg-primary z-10 py-4 
        absolute md:grid grid-cols-12 w-full h-full content-center"
      >
        <div className="relative rounded-md w-full h-full col-span-7">
          <a href="https://aceyourpapers.vercel.app/" target="_blank" rel="noreferrer">
            <div
              className="absolute w-full h-full rounded bg-primary 
              transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
            ></div>
          </a>
          <Img
            src={"/projects/aceyourpapers.png"}
            alt={"AceYourPapers Screenshot"}
            className="w-full rounded h-full"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
        {/* Background for text in mobile responsive */}
        <div className="absolute w-full h-full bg-opacity-70 z-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-secondary opacity-10 z-10"></div>
            <div className="absolute w-full h-full bg-primary opacity-80 z-10"></div>
            <Img
              src={"/projects/aceyourpapers.png"}
              alt={"AceYourPapers Screenshot"}
              className="w-full h-full"
            />
          </div>
        </div>

        <div
          className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
          col-span-8 flex flex-col items-start md:items-end space-y-3"
        >
          <div className="flex flex-col space-y-1 md:items-end z-10">
            <span className="text-secondary text-base">
              AceYourPapers.com <span className="text-xs text-white">( Working )</span>
            </span>
            <a
              href="https://aceyourpapers.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                Online Exam Preparation Platform
              </span>
            </a>
          </div>
          <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6 z-10">
            <p className="text-gray-300 md:text-gray-400 text-justify md:text-right">
              AceYourPapers is a comprehensive exam preparation platform offering past papers,
              revision notes, and MCQ-based testing with real-time feedback. If students struggle
              with a question, they can view hints or contact subject experts for guidance.
              <br />
              This SaaS platform provides limited free access, while premium content requires a
              subscription. An <span className="text-secondary">admin panel</span> allows
              administrators to manage past papers, notes, MCQs, and short questions dynamically
              without coding knowledge.
            </p>
          </div>
          <ul
            className="flex flex-wrap w-full text-gray-300 md:text-gray-400
            text-sm font-Text2 md:justify-end"
          >
            <span className="pr-4 z-10">Next.Js</span>
            <span className="pr-4 z-10">Node.js</span>
            <span className="pr-4 z-10">TypeScript</span>
            <span className="pr-4 z-10">MongoDB</span>
            <span className="pr-4 z-10">Socket.IO</span>
            <span className="pr-4 z-10">Stripe</span>
          </ul>
          <div className="z-10 flex flex-row space-x-5">
            <a href="https://aceyourpapers.vercel.app/" target={"_blank"} rel="noreferrer">
              <ExternalLink url={""} router={router} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_8;
