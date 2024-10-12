import React, { useEffect, useState } from "react";
import photo from "../assets/Me.jpg";
import { FaBars, FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import mr7 from '../assets/MR7-1.png'

export default function Landing({ socialMedia }) {
  // const [role, setRole] = useState("Freelancer");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const contactData = [
    { name: "Phone", icon: <FaPhoneAlt />, link: "tel:+919207424420" },
    { name: "Whatsapp", icon: <FaWhatsapp />, link: "//wa.me/+919207424420" },
  ];

  const navLists = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Resume",
      link: "#resume",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const roles = ["Freelancer", "Developer"];
  // const [role, setRole] = useState(roles[0]); // Initial role
  const [displayText, setDisplayText] = useState(""); // Text currently being shown
  const [isDeleting, setIsDeleting] = useState(false); // Track whether we're deleting
  const [index, setIndex] = useState(0); // Role index

  useEffect(() => {
    const handleTextTransition = () => {
      if (isDeleting) {
        // Remove one letter at a time
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, prev.length - 1));
        } else {
          // After completely deleting, start showing the next role
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to the next role
        }
      } else {
        // Add one letter at a time
        if (displayText.length < roles[index].length) {
          setDisplayText(roles[index].slice(0, displayText.length + 1));
        } else {
          // Once fully displayed, wait for a bit before deleting
          setTimeout(() => setIsDeleting(true), 1000); // 1 second before deleting
        }
      }
    };

    const interval = setInterval(handleTextTransition, 100); // Adjust the speed here

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [displayText, isDeleting, index, roles]);

  return (
    // <div className="z-0 sticky top-0">

    <div
      className="relative w-full h-screen bg-black text-white bg-custom bg-no-repeat md:bg-[length:500px] bg-[length:400px] md:bg-[75%] bg-[100%] "
      style={{ backgroundImage: `url(${photo})` }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        {/* Logo Section */}
        <div className=" flex items-center">
          <img src={mr7} alt="logo" className="w-[50px]"/>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm uppercase">
          {navLists?.map((item, ind) => (
            <Link to={item.link} key={ind}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>

        {/* Off-Canvas Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black p-6 space-y-4 text-sm uppercase shadow-md transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } ease-in-out duration-700 z-40 md:hidden`}
        >
          {/* Mobile Menu Items */}
          {navLists?.map((item, ind) => (
            <Link
              to={item.link}
              key={ind}
              className="block"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}

          {/* Contact Section */}
          <div className="absolute bottom-8 left-8 text-xl font-bold flex flex-col gap-y-2">
            {contactData?.map((item, ind) => (
              <a href={item.link} key={ind} title={item.name} target="_blank" className="mb-0">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <h1 className="md:text-6xl text-4xl font-bold mb-4">
            Muhammed Ramees V
          </h1>
          {/* Animated Text */}
          <p className="text-2xl md:text-4xl transition-all duration-500 ease-in-out">
            I'm a {displayText}
          </p>
        </div>

        {/* Vertical Language Options */}
        <div className="absolute bottom-8 left-8 text-xl font-bold flex flex-col gap-y-2">
          {contactData?.map((item, ind) => (
            <a href={item.link} key={ind} title={item.name} target="_blank" className="mb-0">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-8 right-8  text-xl font-bold flex flex-col justify-normal gap-y-2 ">
          {socialMedia?.map((item, ind) => (
            <a href={item.link} key={ind} title={item.name} target="_blank" className="mb-0">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
}
