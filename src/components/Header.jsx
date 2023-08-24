import { GiHamburgerMenu } from "react-icons/gi";
import { BsFileText } from "react-icons/bs";

export default function Header({ activeSection, setShowSmallDevicesSideBar }) {
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
  };

  return (
    <div className=" fixed top-0 w-[100%] z-20 bg-[#ecf0f3]">
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <div className=" border-l-4 border-black">
            <p className="text-4xl ms-2">
              {colocaNombreSeccion(activeSection)}
            </p>
          </div>
        </div>
        <div></div>
        <div className="flex">
          <div className="border-2 border-black rounded-lg p-1 mr-2 flex">
            <div className="mx-1">CV</div>
            <BsFileText size={25} />
          </div>
          <div className="border-2 border-black rounded-lg p-1">
            <GiHamburgerMenu
              size={25}
              onClick={handleShowSmallDevicesSideBar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
