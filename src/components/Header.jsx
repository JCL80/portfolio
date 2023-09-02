import { GiHamburgerMenu } from "react-icons/gi";
import { BsFileText } from "react-icons/bs";

export default function Header({
  activeSection,
  setShowSmallDevicesSideBar,
  showSmallDevicesSideBar,
  locale,
}) {
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

  const colocaNombreSeccion = () => {
    console.log("activeSection", activeSection);
    if (activeSection === "home") return text[language].home;
    if (activeSection === "aboutme") return text[language].aboutme;
    if (activeSection === "portfolio") return text[language].portfolio;
    if (activeSection === "skills") return text[language].skills;
    if (activeSection === "contact") return text[language].contact;
  };

  const handleShowSmallDevicesSideBar = () => {
    setShowSmallDevicesSideBar(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className=" fixed top-0 w-[100%] z-20 bg-[#ecf0f3]  xl:hidden ">
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <div className=" border-l-4 border-black">
            <p className="text-3xl md:text-4xl ms-2">
              {colocaNombreSeccion(activeSection)}
            </p>
          </div>
        </div>
        <div></div>
        <div className="flex">
          <a href={`/${resumeName}`} download={resumeName}>
            <div className="border-2 border-black rounded-lg p-1 mr-2 flex">
              <div className="mx-1">CV</div>

              <BsFileText size={22} />
            </div>
          </a>
          <div
            className="border-2 border-black rounded-lg p-1 cursor-pointer"
            onClick={handleShowSmallDevicesSideBar}
          >
            <GiHamburgerMenu size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}
