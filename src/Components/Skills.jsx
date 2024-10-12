import React, { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GaugeChart from "react-gauge-chart";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

export default function Skills() {
  const tech = [
    { name: "Front-End", level: 0.95 },
    { name: "Back-End", level: 0.7 },
    { name: "Data-Base", level: 0.8 },
  ];
  const tools = [
    { name: "React JS", level: 85 },
    { name: "HTML", level: 99 },
    { name: "CSS", level: 99 },
    { name: "Bootstrap", level: 99 },
    { name: "Tailwind Css", level: 99 },
    { name: "JavaScript", level: 80 },
    { name: "Node Js", level: 80 },
    { name: "Express Js", level: 80 },
    { name: "MongoDB", level: 85 },

    { name: "TypeScript", level: 80 },
    { name: "Angular JS", level: 70 },
    { name: "Python", level: 60 },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation duration
  }, []);

  return (
    <section className="py-10 px-10 md:px-20 lg:px-40 bg-black text-white ">
      <div className="flex items-center flex-col pb-16 "  data-aos="fade-up">
        <h4 className="text-md md:text-lg w-fit mb-2 text-[#9f9f9f]">
          Tools and Technologies I Use
        </h4>
        <div className="border-b-4 border-green-700">
          <h1 className="text-4xl md:text-5xl font-bold pb-8">Skills</h1>
        </div>
      </div>
      <div className="pb-10"  data-aos="fade-right">
        <h3 className="text-base text-[#9f9f9f]">
          Areas of Expertise and Skills
        </h3>
        <h1 className="text-2xl md:text-3xl  font-bold">Tech Specialization</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8 pb-16">
        {tech.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            data-aos="fade-up" // Adding AOS animation
            data-aos-delay={index * 100} // Delay based on index
          >
            <div className="w-40 mb-4">
              <GaugeChart
                id={`gauge-chart-${index}`}
                nrOfLevels={20}
                percent={tech.level}
                textColor="#fff"
                colors={["#ff4500", "#ffa500", "#38b2ac"]}
              />
            </div>
            <span className="text-base font-medium">{tech.name}</span>
            <span className="text-xs text-[#9f9f9f]">
              {Math.round(tech.level * 100)}%
            </span>
          </div>
        ))}
      </div>
      <div className="pb-10"  data-aos="fade-right">
        <h3 className="text-base text-[#9f9f9f]">
          Frameworks, Libraries, and Technologies I Use
        </h3>
        <h1 className="text-2xl md:text-3xl  font-bold">Development Tools</h1>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 ">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            data-aos="fade-up" // Adding AOS animation
            data-aos-delay={(index + tech.length) * 100} // Delay based on index, accounting for tech items
          >
            <div className="w-24 h-24 mb-4">
              <CircularProgressbar
                value={tool.level}
                text={`${tool.level}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#166534",
                  trailColor: "#161616",
                })}
              />
            </div>
            <span className="text-base font-medium">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
