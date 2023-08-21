import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsStackOverflow } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

export default function ModernSidebar({
  showSideBar,
  setShowSideBar,
  activeSection,
}) {
  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const reactIconsSize = 20;

  return (
    <div
      className={`w-[20%] fixed top-0 left-0 h-screen hidden xl:block ${
        showSideBar
          ? "ease-in duration-100"
          : "ease-in duration-100 left-[-50%]"
      }`}
    >
      <div className="flex justify-end ">
        <div
          className=" bg-black p-2 border border-red-white shadow-xl"
          onClick={handleShowSideBar}
        >
          <AiOutlineArrowLeft
            size={20}
            color="white"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="border-r-4 border-black h-full mr-4 mt-3">
        <div className="">
          <div className="mx-0 bg-">
            <div className="text-center  flex justify-center">
              <div className="mt-16">
                <p className="text-5xl border-b-8 border-black pb-1 px-3 w-fit">
                  JCL80
                </p>
              </div>
            </div>
            <div className="px-10 text-center font-bold mt-20">
              <Link href="#home" scroll={false}>
                <p
                  className={`${
                    activeSection === "home" ? "bg-yellow-300" : ""
                  }  py-3`}
                >
                  HOME
                </p>
              </Link>
              <Link href="#aboutme" scroll={false}>
                <p
                  className={`${
                    activeSection === "aboutme" ? "bg-yellow-300" : ""
                  } px-10 py-4`}
                >
                  ABOUT ME
                </p>
              </Link>
              <Link href="#portfolio" scroll={false}>
                <p
                  className={`${
                    activeSection === "portfolio" ? "bg-yellow-300" : ""
                  } px-10 py-4`}
                >
                  PORTFOLIO
                </p>
              </Link>
              <p
                className={`${
                  activeSection === "skills" ? "bg-yellow-300" : ""
                } px-10 py-4`}
              >
                SKILLS
              </p>
              <Link href="#contact" scroll={false}>
                <p
                  className={`${
                    activeSection === "contact" ? "bg-yellow-300" : ""
                  } px-10 py-4`}
                >
                  CONTACT
                </p>
              </Link>
              <p className="px-2  py-4">CONTRIBUTIONS</p>
            </div>
            <div className=" border-b-4 border-black mt-16"></div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="border border-black flex w-fit p-2">
            <Link href={"https://twitter.com/JKL801"} target="blank">
              <AiOutlineTwitter size={reactIconsSize} />
            </Link>
          </div>
          <div className="border border-black flex w-fit p-2 ms-1 2xl:ms-2">
            <Link href={"https://github.com/JCL80"} target="blank">
              <AiFillGithub size={reactIconsSize} />
            </Link>
          </div>
          <div className="border border-black flex w-fit p-2 ms-1 2xl:ms-2">
            <Link
              href={"https://stackoverflow.com/users/20816738/jorge-cambra"}
              target="blank"
            >
              <BsStackOverflow size={reactIconsSize} />
            </Link>
          </div>
          <div className="border border-black flex w-fit p-2 ms-1 2xl:ms-2">
            <Link href={"https://www.instagram.com/jcl.80/"} target="blank">
              <FiInstagram size={reactIconsSize} />
            </Link>
          </div>
          <div className="border border-black flex w-fit p-2 ms-1 2xl:ms-2">
            <Link
              href={"https://www.linkedin.com/in/jorge-cambra-5a4b30234/"}
              target="blank"
            >
              <AiFillLinkedin size={reactIconsSize} />
            </Link>
          </div>
        </div>
        <div></div>
        <div className="flex justify-center mt-8 px-3">
          <p
            className="font-semibold text-lg text-center"
            onClick={handleShowSideBar}
          >
            Developed by Jorge Cambra
          </p>
        </div>
      </div>
    </div>
  );
}
