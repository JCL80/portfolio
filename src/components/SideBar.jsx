import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import CatPic from "public/images/Lovepik_com-401382423-cat-wearing-glasses.png";
import { useContext } from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function SideBar() {
  const { setShowSideBar, showSideBar } = useContext(AppContext);

  return (
    <div
      className={
        showSideBar
          ? "md:hidden z-[110] fixed left-0 top-0 w-full h-screen bg-black/70"
          : ""
      }
    >
      <div></div>
      <div
        className={
          showSideBar
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : " fixed left-[-100%] top-0 ease-in duration-500"
        }
      >
        <div>
          <div className="flex justify-between items-center">
            <Image src={CatPic} style={{ height: "70px", width: "auto" }} />
            <div
              className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              onClick={() => setShowSideBar(false)}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className=" border-b border-gray-300 my-4">
            <p className="py-4 w-[85%] md:w-[90%]">
              Lets build something together
            </p>
          </div>
        </div>
        <div className="py-4">
          <ul>
            <Link href="/">
              <li className="py-4 text-sm">Home</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">About</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Skills</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Projects</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Contact</li>
            </Link>
          </ul>
          <div className=" pt-40">
            <p className=" uppercase tracking-widest text-[rgb(0,0,0)]">
              Lets connect
            </p>
            <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineWhatsApp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
