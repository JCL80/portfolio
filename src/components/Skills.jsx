import Image from "next/image";
import BootstrapLogo from "public/images/technologies/Bootstrap_logo.svg.png";
import StrapiLogo from "public/images/technologies/pngwing.com.png";
import HtmlLogo from "public/images/technologies/HTML5_logo_and_wordmark.svg.png";
import CssLogo from "public/images/technologies/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png";
import JSLogo from "public/images/technologies/JavaScript-logo.png";
import GitLogo from "public/images/technologies/git_logo.png";
import NestJsLogo from "public/images/technologies/nestjs_logo.png";
import NextJsLogo from "public/images/technologies/Nextjs-logo.svg.png";
import ReactLogo from "public/images/technologies/react_logo.png";
import ExpressLogo from "public/images/technologies/Expressjs.png";
import DockerLogo from "public/images/technologies/docker_logo.png";
import TailwindLogo from "public/images/technologies/tailwindcss-logotype.svg";
import TypescriptLogo from "public/images/technologies/Typescript_logo_2020.svg.png";
import GoogleAnalyticsLogo from "public/images/technologies/Google-Analytics-Logo.png";

export default function Skills() {
  return (
    <div>
      <div className="2xl:mx-52 xl:mx-20 mx-10 md:h-screen">
        <div className="mt-56 ">
          <p className="text-6xl text-black font-22 text-center">Skills</p>
          <div className=" flex justify-center">
            <div className="border-b border-8 border-black mt-4 w-[150px]" />
          </div>
        </div>
        <div className="mt-40 h-10 flex flex-wrap justify-center px-10">
          <div className="p-3 grayscale ">
            <Image src={NextJsLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={BootstrapLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={HtmlLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={CssLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={StrapiLogo} className="h-10 w-auto" />
          </div>

          <div className="p-3">
            <Image src={GitLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={NestJsLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={ReactLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={TailwindLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={ExpressLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={DockerLogo} className="h-10 w-auto" />
          </div>

          <div className="p-3">
            <Image src={GoogleAnalyticsLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={TypescriptLogo} className="h-10 w-auto" />
          </div>
          <div className="p-3">
            <Image src={JSLogo} className="h-10 w-auto" />
          </div>
        </div>
        <div className="mt-6 h-10 flex flex-wrap justify-center "></div>
      </div>
      <div className="mt-48 ml-60 border-b border-2 border-black"></div>
    </div>
  );
}
