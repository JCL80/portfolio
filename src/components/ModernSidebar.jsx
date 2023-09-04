import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsStackOverflow } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";

import Link from "next/link";
import { useRouter } from "next/router";

export default function ModernSidebar({
  showSideBar,
  setShowSideBar,
  activeSection,
  locale,
}) {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const reactIconsSize = 20;

  const language = locale === "en-US" ? 0 : 1;
  const reversedLocale = locale === "en-US" ? "es-ES" : "en-US";
  const changeLenguageText = locale === "en-US" ? "ES" : "EN";
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

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleChangeLanguage = () => {
    router.push({ pathname, query }, asPath, { locale: reversedLocale });
  };

  return (
    <div className="hidden xl:block ">
      <div
        className={`z-30 bg-black p-2 border border-red-white shadow-xl fixed top-0 left-100 ${
          showSideBar ? "rotate-0" : "rotate-180"
        }`}
        onClick={handleShowSideBar}
      >
        <AiOutlineArrowLeft
          size={20}
          color="white"
          className="cursor-pointer"
        />
      </div>
      <div
        className={`w-[20%] bg-[#ecf0f3] fixed top-0 left-0 z-20  h-[100vh] overflow-auto hidden xl:flex xl:flex-col xl:flex-grow  ${
          showSideBar ? null : "-translate-x-full"
        } transition-transform border-r-4 border-black `}
      >
        <div className="border-b-4 border-black pb-14">
          <div className="mx-0 ">
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
                  {text[language].home}
                </p>
              </Link>
              <Link href="#aboutme" scroll={false}>
                <p
                  className={`${
                    activeSection === "aboutme" ? "bg-yellow-300" : ""
                  } px-10 py-4`}
                >
                  {text[language].aboutme}
                </p>
              </Link>
              <Link href="#portfolio" scroll={false}>
                <p
                  className={`${
                    activeSection === "portfolio" ? "bg-yellow-300" : ""
                  } px-10 py-4`}
                >
                  {text[language].portfolio}
                </p>
              </Link>
              <Link href="#skills" scroll={false}>
                <p
                  className={`${
                    activeSection === "skills" ? "bg-yellow-300" : ""
                  } px-10 py-4`}
                >
                  {text[language].skills}
                </p>
              </Link>
              <Link href="#contact" scroll={false}>
                <p
                  className={`${
                    activeSection === "contact" ? "bg-yellow-300" : ""
                  } px-10 py-4`}
                >
                  {text[language].contact}
                </p>
              </Link>
              {/* <p className="px-2  py-4">CONTRIBUTIONS</p> */}
            </div>
          </div>
        </div>
        <div className=" flex flex-grow items-center justify-center">
          <div className=" flex flex-col ">
            <div className="flex justify-center mt-8">
              <a href={`/${resumeName}`} download={resumeName}>
                <div className="border rounded border-black flex justify-center items-center w-fit p-2">
                  CV
                  <BsFileText size={reactIconsSize} className="ms-1" />
                </div>
              </a>
              <Link href={"/"} locale={reversedLocale}>
                <div
                  className="cursor-pointer border ms-2 rounded border-black flex justify-center items-center w-fit p-2"
                  // onClick={handleChangeLanguage}
                >
                  {changeLenguageText}
                </div>
              </Link>
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
            <div className="flex justify-center mt-8 px-3">
              <p
                className="font-semibold text-lg text-center"
                onClick={handleShowSideBar}
              >
                {text[language].developer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
