import Image from "next/image";
import MilesMorales from "public/images/wallpapersden.com_spider-man-miles-morales-black-and-red-suit_600x600.jpg";
import { TbHtml } from "react-icons/tb";
import { CiPen } from "react-icons/ci";
import { LiaMicrochipSolid } from "react-icons/lia";
import { BsStackOverflow } from "react-icons/bs";

export default function Works() {
  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";

  return (
    <div>
      <div className={`2xl:mx-52 xl:mx-20 mx-10 md:h-screen ${viewportColore}`}>
        <div className="mt-56">
          <p className="text-6xl text-black font-22 text-center">
            Where I've Worked
          </p>
          <div className=" flex justify-center">
            <div className="border-b border-8 border-black mt-4 w-[300px]" />
          </div>
          <div className="mt-20"></div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row">
            <div className=" border-black border-4 p-2">
              <div className=" border-black border-4">
                <Image src={MilesMorales} width={400} height={400} />
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:ml-6 md:w-[50%]">
              <p className=" text-2xl font-bold">Contapp Digital</p>
              <div className="mt-2 flex">
                <div className="bg-black flex items-center justify-center text-white rounded-lg px-2 py-1">
                  <p>
                    5-2022 <span>10-2022</span>
                  </p>
                </div>
                <div className="rounded-lg border border-black px-2 py-1 ml-2 flex flex-col md:flex-row items-center">
                  <BsStackOverflow className=" mt-1 md:mt-0" />
                  <span className="ml-1 mt-1 md:mt-0 text-center">
                    Full Stack
                  </span>
                </div>
                <div className="rounded-lg border border-black px-2 py-1 ml-2 flex flex-col md:flex-row justify-center items-center">
                  <LiaMicrochipSolid />
                  <span className="ml-1 mt-1 md:mt-0 text-center">
                    Microservices
                  </span>
                </div>
              </div>
              <p className="mt-2">
                Developed and maintained responsive and user-friendly user
                interfaces for enterprise web applications using React, Next JS,
                HTML, CSS, and JavaScript. Implemented mobile-first and
                responsive design principles to ensure optimal user experiences
                across devices. Designed and implemented RESTful APIs to support
                frontend applications, facilitating seamless data exchange and
                smooth user experiences.
              </p>
              <div className="mt-4 flex ">
                <div>
                  <li>React JS</li>
                  <li>Next JS</li>
                  <li>TypeScript</li>
                  <li>Tailwind</li>
                </div>
                <div className="ms-10">
                  <li>Atomic Design</li>
                  <li>Nest JS</li>
                  <li>Express JS</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row">
            <div className=" border-black border-4 p-2">
              <div className=" border-black border-4">
                <Image src={MilesMorales} width={400} height={400} />
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:ml-6 md:w-[50%]">
              <p className=" text-2xl font-bold">Central Shop</p>
              <div className="mt-2 flex">
                <div className="bg-black text-white rounded-lg px-2 py-1">
                  10-2022 present
                </div>
                <div className="rounded-lg border border-black px-2 py-1 ml-2 flex items-center">
                  <TbHtml />
                  <span className="ml-1">Frontend</span>
                </div>
                <div className="rounded-lg border border-black px-2 py-1 ml-2 flex items-center">
                  <CiPen />
                  <span className="ml-1">UI/UX</span>
                </div>
              </div>
              <p className="mt-2">
                Worked with backend developers to integrate frontend components
                with ecommerce platforms and databases. Integrated payment
                gateways and checkout processes to facilitate secure and smooth
                online transactions. Conducted performance optimization to
                improve page loading times and enhance overall website
                responsiveness. Ensured web accessibility compliance to make the
                ecommerce platform accessible to all users.
              </p>
              <div className="mt-4 flex ">
                <div>
                  <li>React JS</li>
                  <li>Next JS</li>
                  <li>Bootstrap</li>
                </div>
                <div className="ms-10">
                  <li>Atomic Design</li>
                  <li>Google Analytics</li>
                  <li>Atomic Design</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 ml-60 border-b border-2 border-black"></div>
    </div>
  );
}
