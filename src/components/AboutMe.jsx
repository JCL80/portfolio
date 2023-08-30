import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineSmallDash, AiOutlineCloudDownload } from "react-icons/ai";

import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";

  return (
    <div>
      <div
        className={`2xl:mx-52 xl:mx-20 mx-10 min-h-screen ${viewportColore}`}
      >
        <div className="mt-">
          <p className="text-6xl text-black font-22 text-center">About me</p>
          <div className=" flex justify-center">
            <div className="border-b border-8 border-black mt-4 w-[150px]" />
          </div>
          <div className="flex justify-center">
            <p className="mt-8 w-[100%] md:w-[80%] xl:w-[70%] text-center">
              I am a web developer with 2+ years of experience. I am from
              Camagüey, Cuba. I started programming at the age of 15 as part of
              the Cuban competitive programming movement. I currently live in
              Asunción, Paraguay. Besides programming, my main interests include
              mathematics, physics and sports. I always try to appreciate all
              kinds of creations, be they artistic, scientific or engineering
              related.
            </p>
          </div>
          <div className="mt-20  text-lg">
            <div className="flex justify-center">
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] p-2 border-2 border-black ms-1`}
              >
                <p className="text-center">
                  Name: <span className="font-bold ">Jorge Cambra</span>
                </p>
              </div>
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] px-4 py-3 border-2 border-black ms-2`}
              >
                <p className="text-center">
                  Birth Country: <span className="font-bold">Cuba</span>
                </p>
              </div>
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] px-4 py-3 border-2 border-black ms-2 text-xl`}
              >
                <p className="text-center">
                  Age: <span className="font-bold">21 Years</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] px-4 py-3 border-2 border-black`}
              >
                <p className="text-center">
                  Address: <span className="font-bold">Asunción, Paraguay</span>
                </p>
              </div>
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] px-4 py-3 border-2 border-black ms-2`}
              >
                <p className="text-center">
                  Phone: <span className="font-bold">(+595) 992 571 209</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] p-2 border-2 border-black ms-3`}
              >
                <p className="text-center">
                  Email: <span className="font-bold">jcambrac@gmail.com</span>
                </p>
              </div>
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] p-2 border-2 border-black ms-2`}
              >
                <p className="text-center">
                  Whatsapp: <span className="font-bold"> Available </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-20 ">
              <div className="flex items-end justify-center">
                <div className="w-[2px] h-[50px] bg-gray-600 m-2"></div>
                <div className="w-[2px] h-[70px] bg-gray-600 m-2"></div>
                <div className="w-[2px] h-[50px] bg-gray-600 m-2"></div>
              </div>
            </div>
            <div className="my-10 flex justify-center items-">
              <a
                href="/Jorge_Cambra_Resume.pdf"
                download="Jorge_Cambra_Resume.pdf"
              >
                <div className="bg-yellow-300 px-20 py-10 flex flex-col items-center justify-center">
                  <AiOutlineCloudDownload size={60} />
                  <p className=" text-xl font-bold mt-3">DOWNLOAD CV</p>
                </div>
              </a>
            </div>
            <div className=" ">
              <div className="flex items-start justify-center">
                <div className="w-[2px] h-[50px] bg-gray-600 m-2"></div>
                <div className="w-[2px] h-[70px] bg-gray-600 m-2"></div>
                <div className="w-[2px] h-[50px] bg-gray-600 m-2"></div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center items-center">
            <div className="w-[100%] md:w-[80%] xl:w-[60%]">
              <div className="flex justify-center">
                <div className=" w-fit border-black border-x">
                  <p className="mx-4 font-semibold text-2xl border-b-2 border-yellow-300">
                    EDUCATION
                  </p>
                </div>
              </div>
              <div className=" shadow-lg bg- mt-6 py-8 px-6">
                <p className="text-lg">
                  <span className="font-semibold">IPVCE Máximo Gómez Báez</span>{" "}
                  <span>(2017-2020)</span>
                </p>
                <p className="font-bold text-xl mt-1">
                  Competitive Programming Contestant
                </p>
                <p className="mt-2">
                  Contestant in the Ibero-American Olympiad in Informatics.
                  Two-time silver medalist and one-time bronze medalist in the
                  Cuban Olympiad in Informatics.
                </p>
              </div>
              <div className=" shadow-lg mt-4 py-8 px-6">
                <p className="text-lg">
                  <span className="font-semibold">
                    Central University Marta Abreu of Las Villas{" "}
                  </span>
                  <span>(2022)</span>
                </p>
                <p className="font-bold text-xl mt-1">Computer Science</p>
                <p className="mt-2">
                  Mostly interested in algorithms, web browsers, web
                  experiences, combinatorics, and computational complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
