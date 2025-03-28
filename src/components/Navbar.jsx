import Image from "next/image";
import Link from "next/link";
import CatPic from "public/images/Lovepik_com-401382423-cat-wearing-glasses.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

function Navbar() {
  const { setShowSideBar } = useContext(AppContext);

  return (
    <div className=" fixed w-full h-20 shadow-xl  ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          {/* <Image src={CatPic} alt="cat" className="h-full w-auto" /> */}
          Hola
        </div>
        <div>
          <ul className=" hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">HOME</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setShowSideBar(true)}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
