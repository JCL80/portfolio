import { GiHamburgerMenu } from "react-icons/gi";
import { BsFileText } from "react-icons/bs";

export default function Header({
  activeSection,
  setShowSmallDevicesSideBar,
  showSmallDevicesSideBar,
}) {
  const colocaNombreSeccion = () => {
    console.log("activeSection", activeSection);
    if (activeSection === "home") return "Main";
    if (activeSection === "aboutme") return "About Me";
    if (activeSection === "portfolio") return "Portfolio";
    if (activeSection === "skills") return "Skills";
    if (activeSection === "contact") return "Contact Me";
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
          <a href="/Jorge_Cambra_Resume.pdf" download="Jorge_Cambra_Resume.pdf">
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
