import React, { useEffect, useState } from "react";
import careerSteersman from "../assets/careersteersman.png";
import hospital from "../assets/hospital.png";
import tshirt from "../assets/tshirt.png";
import blacklist from "../assets/blacklist.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const portfolioItems = [
    {
      title: "Career Steersman Website",
      description: "A tech institute website",
      imageUrl: careerSteersman,
      category: "Web",
      link: "https://careersteersman.com/",
    },
    {
      title: "Maldives Black List",
      description: "A fraud detect website",
      imageUrl: blacklist,
      category: "Web",
      link: "https://maldivesblacklist.netlify.app/",
    },
    {
      title: "T-shirt E-com",
      description: "A T-shirt e-commerce web application",
      imageUrl: tshirt,
      category: "E-com",
      link: "https://t-shirt-lyart.vercel.app/",
    },
    {
      title: "Hospital",
      description: "Hospital appointment booking website",
      imageUrl: hospital,
      category: "Web",
      link: "https://hopewellhospital.netlify.app/",
    },
  ];

  // Filter portfolio items based on the selected tab
  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-10 px-10 md:px-20 lg:px-40 bg-black text-white ">
      <div className="flex items-center flex-col pb-16 " data-aos="fade-up">
        <h4 className="text-md md:text-lg w-fit mb-2 text-[#9f9f9f]">
          Showcasing some of my best work
        </h4>
        <div className="border-b-4 border-green-700">
          <h1 className="text-4xl md:text-5xl font-bold pb-8">Portfolio</h1>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        {["All", "Web", "E-com", "Software"].map((tab,ind) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 text-lg font-semibold ${
              activeTab === tab ? "border-b-4 border-green-800" : ""
            }`}
            onClick={() => setActiveTab(tab)}
            data-aos="fade-right"
            data-aos-delay={ind * 100} 
          >
            {tab}
          </button>
        ))}
      </div>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[300px]">
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title={`Click for view ${item.title}`}
              data-aos="fade-right"
              data-aos-delay={index * 100} 
            >
              <div className="relative bg-[#161616] h-full overflow-hidden">
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[300px]  object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-5"
                />
                {/* Overlay content (title and description) */}
                <div className="absolute inset-0 p-3 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="mt-1 text-[#9f9f9f]">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[300px]">
          <h1 className="text-4xl text-green-800">Working on it</h1>
        </div>
      )}
    </div>
  );
}
