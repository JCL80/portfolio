import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsStackOverflow } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFileText } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import Link from "next/link";
import { useRouter } from "next/router";

export default function SmallerDevicesSideBar({
  setShowSmallDevicesSideBar,
  showSmallDevicesSideBar,
  activeSection,
  locale,
}) {
  const handleShowSideBar = () => {
    setShowSmallDevicesSideBar(false);
    document.body.style.overflow = "visible";
  };

  const router = useRouter();
  const { pathname, asPath, query } = router;

  const language = locale === "en-US" ? 0 : 1;
  const resumeName =
    locale === "en-US"
      ? "Jorge_Cambra_Resume.pdf"
      : "Jorge_Cambra_Curriculum.pdf";

  const text = [
    {
      home: "HOME",
      aboutme: "ABOUT ME",
      portfolio: "EXPERIENCE",
      skills: "SKILLS",
      contact: "CONTACT",
      developer: "Developed by Jorge Cambra",
    },
    {
      home: "INICIO",
      aboutme: "SOBRE MI",
      portfolio: "EXPERIENCIA",
      skills: "HABILIDADES",
      contact: "CONTACTO",
      developer: "Desarrollado por Jorge Cambra",
    },
  ];

  const reversedLocale = locale === "en-US" ? "es-ES" : "en-US";
  const changeLenguageText = locale === "en-US" ? "ES" : "EN";

  const reactIconsSize = 24;

  const handleChangeLanguage = () => {
    router.push({ pathname, query }, asPath, { locale: reversedLocale });
  };

  return (
    <>
      <div
        className={`bg-[#d4dce] bg-red-50 fixed top-0 left-0 z-40 h-[100vh] w-[100vw] ${
          showSmallDevicesSideBar ? null : "-translate-x-full"
        } overflow-y-auto transition-transform`}
      >
        <div
          //
          //   id="drawer-navigation"
          className={`flex flex-col fixed top-0 left-0 z-40 h-[100svh] bg-white dark:bg-gray-800  w-[100vw]   `}
          // tabindex="-1"
          // aria-labelledby="drawer-navigation-label"
        >
          <div className="flex-grow ">
            <div className="bg-[#d4dce] bg-gray-100 flex flex-col h-full">
              <div className="flex justify-end">
                <button
                  onClick={handleShowSideBar}
                  type="button"
                  data-drawer-hide="drawer-navigation"
                  aria-controls="drawer-navigation"
                  className=" mr-7 mt-2 text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <AiOutlineClose size={20} />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="flex mt-2 justify-center">
                <a href={`/${resumeName}`} download={resumeName}>
                  <div className="border border-black rounded-lg p-1 mr-2 flex">
                    <div className="mx-1">CV</div>
                    <BsFileText size={reactIconsSize} />
                  </div>
                </a>
                <div
                  className="border border-black rounded-lg p-1 px-2 font-semibold cursor-pointer"
                  onClick={handleChangeLanguage}
                >
                  {changeLenguageText}
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-center items-center">
                <Link href="#home" scroll={false} onClick={handleShowSideBar}>
                  <p
                    className={`${
                      activeSection === "home" ? "font-bold" : ""
                    }  py-2`}
                  >
                    {text[language].home}
                  </p>
                </Link>
                <Link
                  href="#aboutme"
                  scroll={false}
                  onClick={handleShowSideBar}
                >
                  <p
                    className={`${
                      activeSection === "aboutme" ? "font-bold" : ""
                    } px-10 py-2`}
                  >
                    {text[language].aboutme}
                  </p>
                </Link>
                <Link
                  href="#portfolio"
                  scroll={false}
                  onClick={handleShowSideBar}
                >
                  <p
                    className={`${
                      activeSection === "portfolio" ? "font-bold" : ""
                    } px-10 py-2`}
                  >
                    {text[language].portfolio}
                  </p>
                </Link>
                <Link href="#skills" scroll={false} onClick={handleShowSideBar}>
                  <p
                    className={`${
                      activeSection === "skills" ? "font-bold" : ""
                    } px-10 py-2`}
                  >
                    {text[language].skills}
                  </p>
                </Link>

                <Link
                  href="#contact"
                  scroll={false}
                  onClick={handleShowSideBar}
                >
                  <p
                    className={`${
                      activeSection === "contact" ? "font-bold" : ""
                    } px-10 py-2`}
                  >
                    {text[language].contact}
                  </p>
                </Link>

                {/* <p className="my-2">CONTRIBUTIONS</p> */}
              </div>
              <div className="mb-2">
                <div className="flex justify-center mt-8">
                  <div className="border rounded m-1 border-black flex w-fit p-2">
                    <Link href={"https://twitter.com/JKL801"} target="blank">
                      <AiOutlineTwitter size={reactIconsSize} />
                    </Link>
                  </div>
                  <div className="border rounded m-1 border-black flex w-fit p-2 ">
                    <Link href={"https://github.com/JCL80"} target="blank">
                      <AiFillGithub size={reactIconsSize} />
                    </Link>
                  </div>
                  <div className="border rounded m-1 border-black flex w-fit p-2 ">
                    <Link
                      href={
                        "https://stackoverflow.com/users/20816738/jorge-cambra"
                      }
                      target="blank"
                    >
                      <BsStackOverflow size={reactIconsSize} />
                    </Link>
                  </div>
                  <div className="border rounded m-1 border-black flex w-fit p-2 ">
                    <Link
                      href={"https://www.instagram.com/jcl.80/"}
                      target="blank"
                    >
                      <FiInstagram size={reactIconsSize} />
                    </Link>
                  </div>
                  <div className="border rounded m-1 border-black flex w-fit p-2 ">
                    <Link
                      href={
                        "https://www.linkedin.com/in/jorge-cambra-5a4b30234/"
                      }
                      target="blank"
                    >
                      <AiFillLinkedin size={reactIconsSize} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
