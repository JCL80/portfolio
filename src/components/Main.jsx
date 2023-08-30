import Image from "next/image";
import MilesMorales from "public/images/wallpapersden.com_spider-man-miles-morales-black-and-red-suit_600x600.jpg";
import tmpAvatar from "public/images/tmpAvatar.png";
import { Kalam, Jost } from "@next/font/google";
import signature_1 from "public/images/signature_1.png";

const kalam = Kalam({ subsets: ["latin"], weight: "300" });
const jost = Jost({ subsets: ["latin"], weight: "300" });

function Main({ showSideBar, setShowSideBar }) {
  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";

  return (
    <div>
      <div className={`2xl:mx-52 xl:mx-20 mx-10 md:h-screen ${viewportColore}`}>
        <div className=" w-full h-full p-2 flex flex-col md:flex-row flex-1 items-center justify-center">
          <div className="w-[100%] px-0 md:px-8 md:w-[80%] xl:w-[60%] mt-10 order-2 md:order-1 ">
            <p className="text-5xl text-black font-22">Website</p>
            <p className="text-5xl text-black">Developer</p>
            <div className=" border-b border-black border-8 mt-6 w-[200px]" />
            <div className="mt-6">
              <p className="text-xl">
                Hello, my name is{" "}
                <span className={`${kalam.className}`}>Jorge Cambra</span>.
              </p>

              <p className="mt-2">
                I am a programmer with a strong drive for continuous learning
                and growth. My main expertise lies in working with the{" "}
                <span className="font-bold">JavaScript</span> language and its
                related technologies.
              </p>
              <p className="mt-2">
                I really enjoy building stuff, no matter the subject or how
                complex it is. Honestly, it feels great to know I've made a
                difference for someone in some way.
              </p>
              <p className="mt-2">
                I'm a firm believer in the potential of web technologies,
                starting with web browsers becoming more advanced and the
                internet becoming even more accessible.
              </p>
              {/* <Image className="mt-2" src={signature_1} /> */}
            </div>
            <div className="mt-6 text-3xl font-semibold">
              <p className={`${kalam.className} font-bold`}>JCL80</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className=" border-black border-4 p-2 mt-10 md:mt-0">
              <div className=" border-black border-4">
                <Image
                  priority
                  alt="JCL80_Avatar"
                  src={tmpAvatar}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
