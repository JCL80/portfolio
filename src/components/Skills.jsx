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
  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";

  return (
    <div>
      <div className={`2xl:mx-52 xl:mx-20 mx-10 ${viewportColore}`}>
        <div className="mt ">
          <p className="text-6xl text-black font-22 text-center">Skills</p>
          <div className=" flex justify-center">
            <div className="border-b border-8 border-black mt-4 w-[150px]" />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="w-[100%] md:w-[80%] xl:w-[70%]">
            <div className="mt-20 flex flex-wrap justify-center px-10 ">
              <div className="p-3">
                <Image
                  src={NextJsLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={BootstrapLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={HtmlLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={CssLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={StrapiLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>

              <div className="p-3">
                <Image
                  src={GitLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={NestJsLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={ReactLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={TailwindLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={ExpressLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={DockerLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>

              <div className="p-3">
                <Image
                  src={GoogleAnalyticsLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={TypescriptLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  src={JSLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-14 ">
              <p className="">
                I've used <span className="font-bold">React </span>and{" "}
                <span className="font-bold">Next.js</span> to build fast and
                efficient web applications, primarily relying on{" "}
                <span className="font-bold">Bootstrap</span> or{" "}
                <span className="font-bold">Tailwind</span> for responsive and
                visually appealing designs.
              </p>
              <p className="mt-2">
                On the backend, I've employed frameworks such as{" "}
                <span className="font-bold">Nest.js</span> and{" "}
                <span className="font-bold">Express.js</span> to develop robust
                and scalable APIs. I've managed databases using{" "}
                <span className="font-bold">MongoDB</span> , ensuring data
                integrity and seamless querying. I've successfully deployed
                applications on platforms like{" "}
                <span className="font-bold">DigitalOcean</span>, configuring
                server instances and optimizing performance.
              </p>
              <p className="mt-2">
                <span className="font-bold">Git</span> has been my tool for
                version control, while <span className="font-bold">Docker</span>{" "}
                has enabled consistent application deployment across various
                environments.
              </p>
              <p className="mt-2">
                Additionally, I've explored{" "}
                <span className="font-bold">Google Analytics</span> and{" "}
                <span className="font-bold">Meta Pixel</span> integrations,
                utilizing them to gain insights into user behavior and the
                effectiveness of marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-48 ml-60 border-b border-2 border-black"></div> */}
    </div>
  );
}
