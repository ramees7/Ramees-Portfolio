// import React, { useEffect, useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// import Landing from "./Components/Landing";
// import About from "./Components/About";
// import Portfolio from "./Components/Portfolio";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
// } from "react-icons/fa6";
// import { FiGithub } from "react-icons/fi";
// import Contact from "./Components/Contact";
// import Resume from "./Components/Resume";
// import Skills from "./Components/Skills";
// import logo from './assets/MR7-1.png'

// function App() {
//   const [loading, setLoading] = useState(true); // Loading state

//   const socialMedia = [
//     {
//       name: "LinkedIn",
//       link: "https://www.linkedin.com/in/muhammed-ramees-2ba04b286/",
//       icon: <FaLinkedinIn />,
//     },
//     {
//       name: "GitHub",
//       link: "https://github.com/ramees7",
//       icon: <FiGithub />,
//     },
//     {
//       name: "Instagram",
//       link: "https://www.instagram.com/ramees._7_/",
//       icon: <FaInstagram />,
//     },
//     {
//       name: "Facebook",
//       link: "https://www.facebook.com/ramees7rami",
//       icon: <FaFacebookF />,
//     },
//     {
//       name: "X",
//       link: "https://x.com/MuhammedRa86441",
//       icon: <FaXTwitter />,
//     },
//   ];

//   // Simulate loading time
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Set loading to false after 2 seconds
//     }, 2000); // Change duration as needed

//     return () => clearTimeout(timer); // Clean up the timer on unmount
//   }, []);

//   return (
//     <>
//       {loading ? ( // Conditionally render loading or main content
//         <div className="loading-container bg-black h-screen w-screen flex items-center justify-center">
//           <img src={logo} alt="Loading..." className="w-[200px] h-[100px]" /> {/* Replace with your loading image */}
//         </div>
//       ) : (
//         <BrowserRouter>
//           <Landing socialMedia={socialMedia} />
//           <About socialMedia={socialMedia} />
//           <Resume />
//           <Skills />
//           <Portfolio />
//           <Contact socialMedia={socialMedia} />
//         </BrowserRouter>
//       )}
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
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
import logo from './assets/MR7-1.png'

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

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Change duration as needed

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

  return (
    <>
      {(loading || !isOnline) ? ( // Conditionally render loading or main content
        <div className="loading-container bg-black h-screen w-screen flex items-center justify-center">
          <img src={logo} alt="Loading..." className="w-[200px] h-[100px]" /> {/* Replace with your loading image */}
          {!isOnline && (
            <p className="text-white mt-4">No Internet Connection</p> // Message for no internet
          )}
        </div>
      ) : (
        <BrowserRouter>
          <Landing socialMedia={socialMedia} />
          <About socialMedia={socialMedia} />
          <Resume />
          <Skills />
          <Portfolio />
          <Contact socialMedia={socialMedia} />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
