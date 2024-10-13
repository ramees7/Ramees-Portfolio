import React, { useEffect, useState } from "react";
import { MdFormatQuote } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import sidharth from "../assets/zid.png";
import nasif from "../assets/nasif.png";
import rashid from "../assets/rashid.png";
import gopika from "../assets/gopika.jpg";
import ajay from "../assets/ajay.png";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

export default function Service() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Building modern, high-performance web applications with clean, efficient code that meets the latest industry standards.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile-Responsive Design",
      desc: "Creating fully responsive and adaptive layouts that provide a seamless user experience across all devices, from mobile to desktop.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Developing robust and scalable server-side logic, ensuring smooth data processing, and optimizing application performance.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      desc: "Designing and managing databases for efficient data storage, retrieval, and security, using the latest database technologies.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      desc: "Integrating cloud services for scalable storage, computing, and deployment solutions, making your applications more flexible and reliable.",
    },
    {
      icon: <FaCogs />,
      title: "Software Maintenance",
      desc: "Providing ongoing support and maintenance to keep your software up to date with the latest features and security updates.",
    },
  ];

  const testimonials = [
    {
      image: sidharth,
      name: "Sidharth",
      role: "UI & UX Developer",
      text: "Ramees is a highly skilled developer who goes above and beyond to ensure that the work is not only visually appealing but also functional. He quickly grasped our requirements and delivered exceptional results.",
    },
    {
      image: ajay,
      name: "Ajay",
      role: "Career Steersman Website Customer",
      text: "Working with Ramees was a great experience. His dedication to delivering quality work was evident, and his insightful suggestions significantly improved the overall user experience.",
    },
    {
      image: rashid,
      name: "Rashid",
      role: "Developing Partner",
      text: "Ramees expertise and creative approach have been invaluable in our development projects. His commitment to achieving the best possible outcome truly sets him apart.",
    },
    {
      image: nasif,
      name: "Nasif",
      role: "Portfolio Customer",
      text: "Ramees delivered exactly what was needed and more. His ability to understand the project requirements and translate them into a functional and elegant solution was truly impressive.",
    },
    {
      image: gopika,
      name: "Gopika",
      role: "Portfolio Customer",
      text: "Ramees is a professional who really cares about his work. He delivered the project on time and added his own creative touch that made the final result outstanding.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic: Every 10 seconds, move to the next testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Slide every 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [testimonials.length]);

  // Get the indices of testimonials to show (1 or 2 depending on screen size)
  const firstTestimonialIndex = currentIndex;
  const secondTestimonialIndex = (currentIndex + 1) % testimonials.length;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white pb-10">
      <div data-aos="fade-up">
        <h3 className="text-base text-[#9f9f9f]">
          Services I offer to my clients
        </h3>
        <h1 className="text-4xl font-bold">My Services</h1>
      </div>
      <div className="grid grid-cols-6 lg:gap-x-5 xl:gap-x-10 gap-10 py-10">
        {services?.map((item, ind) => (
          <div
            className="md:col-span-3 lg:col-span-2 col-span-6 bg-[#161616] text-white p-7 space-y-3 hover:border-b-2 hover:border-b-green-700 border-2 border-[#161616]"
            key={ind}
            data-aos="fade-right" // Adding AOS animation
            data-aos-delay={ind * 100}
          >
            <div className="text-6xl text-green-700">{item.icon}</div>
            <h1 className="text-3xl">{item.title}</h1>
            <h3 className="text-sm text-[#9f9f9f]">{item.desc}</h3>
          </div>
        ))}
      </div>

      <div>
        <div className="pt-10" data-aos="fade-up">
          <h3 className="text-base text-[#9f9f9f]">
            What my clients think about me
          </h3>
          <h1 className="text-4xl font-bold">Testimonials</h1>
        </div>

        <div className="flex items-center justify-center pt-16 w-full">
          {/* Carousel Testimonials */}
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-10 items-center justify-center w-full">
              {/* Display one or two testimonials depending on screen size */}
              <div
                className="bg-[#161616] p-10 text-white space-y-4 col-span-2 md:col-span-1 rounded-lg transition-opacity duration-1000 ease-in-out"
                data-aos="fade-right"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[firstTestimonialIndex].image}
                    alt={testimonials[firstTestimonialIndex].name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h1 className="text-xl font-bold">
                      {testimonials[firstTestimonialIndex].name}
                    </h1>
                    <p className="text-base text-[#9f9f9f]">
                      {testimonials[firstTestimonialIndex].role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#9f9f9f]">
                  {testimonials[firstTestimonialIndex].text}
                </p>

                {/* Quote icon */}
                <div className="text-green-800 text-4xl">
                  <MdFormatQuote />
                </div>
              </div>

              {/* Conditionally render the second testimonial on screens larger than md */}
              <div
                className="hidden md:block bg-[#161616] p-10 text-white space-y-4 col-span-2 md:col-span-1 rounded-lg transition-opacity duration-1000 ease-in-out"
                data-aos="fade-left"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[secondTestimonialIndex].image}
                    alt={testimonials[secondTestimonialIndex].name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h1 className="text-xl font-bold">
                      {testimonials[secondTestimonialIndex].name}
                    </h1>
                    <p className="text-base text-[#9f9f9f]">
                      {testimonials[secondTestimonialIndex].role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#9f9f9f]">
                  {testimonials[secondTestimonialIndex].text}
                </p>

                {/* Quote icon */}
                <div className="text-green-800 text-4xl">
                  <MdFormatQuote />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center space-x-2 mt-6" data-aos="fade-up">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-500 ${
                index === currentIndex ? "bg-green-800" : "bg-[#9f9f9f]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
