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

import ModernSidebar from "@/components/ModernSidebar";
import Header from "@/components/Header";
import SmallerDevicesSideBar from "@/components/SmallerDevicesSideBar";

export default function Home() {
  // const { showSideBar } = useContext(AppContext);
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

  useEffect(() => {
    const observerOptions = {
      root: null, // use the viewport as the root
      threshold: 0.5, // fire the callback when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set the active section based on the entry's target ref
          switch (entry.target) {
            case homeRef.current:
              setActiveSection("home");
              break;
            case aboutMeRef.current:
              setActiveSection("aboutme");
              break;
            case portfolioRef.current:
              setActiveSection("portfolio");
              break;
            case skillsRef.current:
              setActiveSection("skills");
              break;
            case contactRef.current:
              setActiveSection("contact");
              break;
            default:
              setActiveSection("home");
          }
        }
      });
    }, observerOptions);

    // Observe the section refs
    observer.observe(homeRef.current);
    observer.observe(aboutMeRef.current);
    observer.observe(portfolioRef.current);
    observer.observe(skillsRef.current);
    observer.observe(contactRef.current);

    // Cleanup the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header
        activeSection={activeSection}
        setShowSmallDevicesSideBar={setShowSmallDevicesSideBar}
      />
      <SmallerDevicesSideBar
        showSmallDevicesSideBar={showSmallDevicesSideBar}
        setShowSmallDevicesSideBar={setShowSmallDevicesSideBar}
      />
      <div className="flex justify-end">
        <ModernSidebar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          activeSection={activeSection}
        />
        <div
          className={`${
            showSideBar
              ? "w-[100%] xl:w-[80%] ease-in duration-200"
              : "w-[100%] ease-in duration-200"
          }`}
        >
          {/* <p onClick={handleShowSideBar}>clickme </p> */}
          {/* <Navbar /> */}
          {/* <SideBar /> */}

          <div id="home" ref={homeRef}>
            <Main showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
            <p>{showSmallDevicesSideBar ? "true" : "false"}</p>
          </div>
          <div id="aboutme" ref={aboutMeRef}>
            <AboutMe />
          </div>
          <div id="portfolio" ref={portfolioRef}>
            <Portfolio />
          </div>
          <div id="skills" ref={skillsRef}>
            <Skills />
          </div>
          <div id="contact" ref={contactRef}>
            <Contact />
          </div>
          {/* <div className="h-screen bg-red-600 w-[60%]">adsafa</div> */}
        </div>
      </div>
    </div>
  );
}
