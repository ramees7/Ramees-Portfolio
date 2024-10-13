import React, { useEffect, useState } from "react";
import photo from "../assets/Me.jpg";
import { FaBars, FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import mr7 from "../assets/MR7.png";
import { Link as ScrollLink } from "react-scroll";

export default function Landing({ socialMedia, navLists }) {
  // const [role, setRole] = useState("Freelancer");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const contactData = [
    { name: "Phone", icon: <FaPhoneAlt />, link: "tel:+919207424420" },
    { name: "Whatsapp", icon: <FaWhatsapp />, link: "//wa.me/+919207424420" },
  ];

  const roles = ["Freelancer", "Developer"];
  // const [role, setRole] = useState(roles[0]); // Initial role
  const [displayText, setDisplayText] = useState(""); // Text currently being shown
  const [isDeleting, setIsDeleting] = useState(false); // Track whether we're deleting
  const [index, setIndex] = useState(0); // Role index

  useEffect(() => {
    const handleTextTransition = () => {
      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        if (displayText.length < roles[index].length) {
          setDisplayText(roles[index].slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const interval = setInterval(handleTextTransition, 100);

    return () => clearInterval(interval);
  }, [displayText, isDeleting, index, roles]);

  return (
    <div className="">
      <div
        className="relative w-full h-screen  bg-black text-white bg-custom bg-no-repeat md:bg-[length:500px] bg-[length:400px] md:bg-[75%] bg-[100%] "
        style={{ backgroundImage: `url(${photo})` }}
      >
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
          {/* Logo Section */}
          <div className=" flex items-center">
            <img src={mr7} alt="logo" className="w-[50px]" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm uppercase">
            {navLists?.map((item, ind) => (
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={1000}
                key={`navlist-2-${ind}`}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-[#9f9f9f]"
              >
                {item.name}
              </ScrollLink>
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
            <img src={mr7} alt="logo" className="w-[50px] mb-10" />
            {navLists?.map((item, ind) => (
              <div key={`navlist-${ind}`}>
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  
                  onClick={toggleMenu}
                  className="cursor-pointer hover:text-[#9f9f9f]"
                >
                  {item.name}
                </ScrollLink>
              </div>
            ))}

            {/* Contact Section */}
            <div className="absolute bottom-8 left-8 text-xl font-bold flex flex-col gap-y-2">
              {contactData?.map((item, ind) => (
                <a
                  href={item.link}
                  key={`contact-2-${ind}`}
                  title={item.name}
                  target="_blank"
                  className="mb-0"
                >
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
              I'm a{" "}
              <span className="text-[#9f9f9f] font-semibold">
                {displayText}
              </span>
            </p>
          </div>

          {/* Vertical Language Options */}
          <div className="absolute bottom-8 left-8 text-xl font-bold flex flex-col gap-y-2">
            {contactData?.map((item, ind) => (
              <a
                href={item.link}
                key={`contact-${ind}`}
                title={item.name}
                target="_blank"
                className="mb-0"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className=" absolute bottom-8 right-8  text-xl font-bold flex flex-col justify-normal gap-y-2 ">
            {socialMedia?.map((item, ind) => (
              <a
                href={item.link}
                key={`social-${ind}`}
                title={item.name}
                target="_blank"
                className="mb-0"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
