import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Link } from "react-scroll"; // Import Link from react-scroll
import Landing from "./Components/Landing";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import mMR7 from "./assets/M-mr7.png";
import rMR7 from "./assets/r-mr7.png";
import sevenMR7 from "./assets/7-mr7.png";
import AOS from "aos"; // Import AOS

function App() {
  const [loading, setLoading] = useState(true); // Loading state
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Online status state

  const socialMedia = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammed-ramees-2ba04b286/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "GitHub",
      link: "https://github.com/ramees7",
      icon: <FiGithub />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ramees._7_/",
      icon: <FaInstagram />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/ramees7rami",
      icon: <FaFacebookF />,
    },
    {
      name: "X",
      link: "https://x.com/MuhammedRa86441",
      icon: <FaXTwitter />,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  // Check online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Define the nav items
  const navLists = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Resume",
      link: "resume",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <>
      {loading || !isOnline ? (
        <div className="loading-container flex justify-center items-center bg-black h-screen w-screen">
          <div className="flex space-x-4">
            <img src={mMR7} alt="Loading M" className="w-[80px] h-[100px]" />
            <img src={rMR7} alt="Loading R" className="w-[80px] h-[100px]" />
            <img
              src={sevenMR7}
              alt="Loading 7"
              className="w-[80px] h-[100px]"
            />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <section id="home">
            <Landing navLists={navLists} socialMedia={socialMedia} />
          </section>
          <section id="about">
            <About socialMedia={socialMedia} />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact socialMedia={socialMedia} />
          </section>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
