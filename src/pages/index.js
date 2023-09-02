import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";
import { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ModernSidebar from "@/components/ModernSidebar";
import Header from "@/components/Header";
import SmallerDevicesSideBar from "@/components/SmallerDevicesSideBar";

export default function Home({ context }) {
  const { locale } = context;
  console.log("locale", locale);
  const [showSideBar, setShowSideBar] = useState(true);

  const [activeSection, setActiveSection] = useState("home");
  const [showSmallDevicesSideBar, setShowSmallDevicesSideBar] = useState(false);

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleScroll = () => {
    const homeTop = homeRef.current.getBoundingClientRect().top;
    const homeBottom = homeRef.current.getBoundingClientRect().bottom;
    const aboutMeTop = aboutMeRef.current.getBoundingClientRect().top;
    const aboutMeBottom = aboutMeRef.current.getBoundingClientRect().bottom;
    const portfolioTop = portfolioRef.current.getBoundingClientRect().top;
    const portfolioBottom = portfolioRef.current.getBoundingClientRect().bottom;
    const skillsTop = skillsRef.current.getBoundingClientRect().top;
    const skillsBottom = skillsRef.current.getBoundingClientRect().bottom;
    const contactTop = contactRef.current.getBoundingClientRect().top;
    const contactBottom = contactRef.current.getBoundingClientRect().bottom;

    console.log("aboutMeTop", aboutMeTop);

    if (homeTop <= 1 && homeBottom) setActiveSection("home");
    if (aboutMeTop <= 1 && aboutMeBottom) setActiveSection("aboutme");
    if (portfolioTop <= 1 && portfolioBottom) setActiveSection("portfolio");
    if (skillsTop <= 1 && skillsBottom) setActiveSection("skills");
    if (contactTop <= 1 && contactBottom) setActiveSection("contact");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header
        activeSection={activeSection}
        setShowSmallDevicesSideBar={setShowSmallDevicesSideBar}
        locale={locale}
      />
      <SmallerDevicesSideBar
        activeSection={activeSection}
        showSmallDevicesSideBar={showSmallDevicesSideBar}
        setShowSmallDevicesSideBar={setShowSmallDevicesSideBar}
      />
      <div className="flex justify-end">
        <ModernSidebar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          activeSection={activeSection}
          locale={locale}
        />
        <div
          className={`${
            showSideBar
              ? "w-[100%] xl:w-[80%] ease-in duration-200"
              : "w-[100%] ease-in duration-200"
          }`}
        >
          <div id="home" ref={homeRef} className="pt-16 md:pt-0 ">
            <Main
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
              locale={locale}
            />
            <div className=" ml-60 border-b border-2 border-black mt-20 " />
          </div>
          <div id="aboutme" ref={aboutMeRef} className=" pt-28 ">
            <AboutMe locale={locale} />
            <div className=" ml-60 border-b border-2 border-black mt-28 " />
          </div>
          <div id="portfolio" ref={portfolioRef} className=" pt-28">
            <Portfolio locale={locale} />
            <div className=" ml-60 border-b border-2 border-black mt-28" />
          </div>
          <div id="skills" ref={skillsRef} className="  pt-28">
            <Skills locale={locale} />
            <div className=" ml-60 border-b border-2 border-black mt-28" />
          </div>
          <div id="contact" ref={contactRef} className="  pt-28">
            <Contact locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      context,
    },
  };
}
