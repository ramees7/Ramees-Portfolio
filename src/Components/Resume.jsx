import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  const experience = [
    {
      year: "Jun 2024 - Present",
      company: "Doctosmart Enterprises Pvt Ltd",
      role: "MERN Stack Developer",
      place: "Cyber Park Calicut,Kerala",
    },
    {
      year: "Aug 2023 - Mar 2024",
      company: "Luminar TechnoLab",
      role: "ME(A)RN Stack Developer Intern",
      place: "Calicut,Kerala",
    },
  ];
  const education = [
    {
      title: "ME(A)RN Stack Development",
      year: "2023-2024",
      university: "Luminar TechnoLab",
      collageName: "Calicut",
    },
    {
      title: "B.Com in Cooperation",
      year: "2020-2023",
      university: "Calicut University",
      collageName: "Parappanangadi Co-Operative College",
    },
    {
      title: "+2 Commerce Computer-Application",
      year: "2018-2020",
      university: "Kerala Sate Higher Secondary",
      collageName: "Govt. Model Vocational Higher Secondary School Vengara",
    },
    {
      title: "SSLC",
      year: "2017-2018",
      university: "Kerala State",
      collageName: "Moonniyur Higher Secondary School",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-10 px-10 md:px-20 lg:px-40 bg-black text-white">
      <div className="flex items-center flex-col pb-16 " data-aos="fade-up">
        <h4 className="text-md md:text-lg w-fit mb-2 text-[#9f9f9f]">
          A Glimpse into My Professional Journey
        </h4>
        <div className="border-b-4 border-green-700">
          <h1 className="text-4xl md:text-5xl font-bold pb-8">Resume</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Education Section */}
        <div>
          {/* <h3 className="text-2xl font-semibold mb-6">My Education</h3> */}
          <div className="pb-10"  data-aos="fade-right">
            <h3 className="text-base text-[#9f9f9f]">
              My Academic Achievements and Learning Journey
            </h3>
            <h1 className="text-2xl md:text-3xl font-bold">Education</h1>
          </div>
          <div className="flex flex-col gap-10" >
            {education?.map((item, ind) => (
              <div className="bg-[#161616] p-10" key={ind}  data-aos="fade-right">
                <span className="text-sm bg-green-800 text-white px-2 py-1 ">
                  {item.year}
                </span>
                <h4 className="text-2xl font-semibold mt-2">{item.title}</h4>
                <p className="text-[#9f9f9f] text-lg font-semibold">
                  {item.university}
                </p>
                <p className="text-[#9f9f9f] text-sm">{item.collageName}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Experience Section */}
        <div>
          <div className="pb-10"  data-aos="fade-left">
            <h3 className="text-base text-[#9f9f9f]">
              A Chronicle of My Professional Roles and Growth
            </h3>
            <h1 className="text-2xl md:text-3xl  font-bold">Experience</h1>
          </div>
          {/* <h3 className="text-2xl font-semibold mb-6">My Experience</h3> */}
          <div className="flex flex-col gap-10">
            {experience?.map((item, ind) => (
              <div className="bg-[#161616] p-10" key={ind}  data-aos="fade-left">
                <span className="text-sm bg-green-800 text-white px-2 py-1 ">
                  {item.year}
                </span>
                <h4 className="text-2xl font-semibold mt-2">{item.role}</h4>
                <p className="text-[#9f9f9f] text-lg font-semibold">
                  {item.company}
                </p>
                <p className="text-[#9f9f9f] text-sm">{item.place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
