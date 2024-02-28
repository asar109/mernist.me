import React from "react";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";
type Props={href:string,Icon:React.FC<{className:string}>}
const ClickableIcon = (props:Props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-secondary transition duration-800 fill-current hover:cursor-pointer "
        }
      />
    </a>
  );
};

export default function Fotter(props:{link:string,className:string}) {
  return (
      <div className={` ${props.className} bg-primary flex flex-col justify-center items-center py-8 space-y-4 `}>
        {/* // ? Reach me at */}
        <div className="flex flex-row space-x-8">
          <ClickableIcon
            href={"https://github.com/hktitof"}
            Icon={GithubIcon}
          />
          <ClickableIcon
            href={"https://www.linkedin.com/in/mernist-nothing/"}
            Icon={LinkedinIcon}
          />
          <ClickableIcon
            href={"https://www.instagram.com/titof_abdo/"}
            Icon={InstagramIcon}
          />
          <ClickableIcon
            href={"https://www.youtube.com/c/NTTFT"}
            Icon={YoutubeIcon}
          />
        </div>
        <a href={props.link} className="" target={"_blank"} rel="noreferrer">
          <div
            className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
          >
            <span className="group-hover:text-secondary sm:text-sm text-xs">
              Designed & Built by nothing mernist
            </span>

            <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-secondary">
              <GithubIcon
                className={
                  "w-4 h-4 text-gray-400 fill-current group-hover:text-secondary duration-800"
                }
              />
              <span className="">Source code - Github</span>
            </span>
          </div>
        </a>
      </div>
  );
}
