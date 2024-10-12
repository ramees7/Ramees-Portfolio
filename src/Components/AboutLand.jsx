import React from "react";
import rameesPic from "../assets/ramees-3.jpg";
import cvPdf from "../assets/Ramees Cv.pdf";

export default function AboutLand({ socialMedia }) {
  return (
    <section className="min-h-screen h-full bg-black  text-white pb-10">
      <div>
        <div className="flex items-center flex-col pb-10 ">
          <h4 className="text-md md:text-lg  mb-2 text-[#9f9f9f]">
            Get to know me
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold pb-8 border-b-4 border-green-700">
            About Me
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-8 h-full">
          <div className="md:col-span-2 col-span-5 flex justify-center md:justify-normal">
            <img
              src={rameesPic}
              alt="profile img"
              className="md:h-[430px] md:w-[80%]  w-[200px] h-[200px] md:rounded-3xl rounded-full opacity-50"
            />
          </div>
          <div className="md:col-span-3 col-span-5 h-full">
            <div className="pb-8 border-b border-[#9f9f9f]">
              <h3 className="text-green-700 font-semibold text-2xl mb-2">
                Who am i?
              </h3>
              <h1 className="lg:text-3xl text-2xl font-bold mb-4">
                I'm Muhammed Ramees, a Web Developer & Software Developer
              </h1>
              <p className="text-[#9f9f9f]">
                I’m a software and web developer specializing in the MERN stack,
                currently working at Doctosmart Enterprises Pvt Ltd, Cyberpark,
                Calicut. I build high-performance web applications that meet
                modern standards. With a focus on efficient development and
                rapid iteration, I help turn ideas into functional, impactful
                products.
              </p>
            </div>
            <div className="grid grid-cols-2 py-8 gap-y-3">
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-base text-white">
                  Name: <span className="text-[#9f9f9f]">Muhammed Ramees</span>
                </h1>
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-base text-white">
                  Email:{" "}
                  <span className="text-green-700">
                    muhammedramees09876@gmail.com
                  </span>
                </h1>
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-base text-white">
                  Age: <span className="text-[#9f9f9f]">22</span>
                </h1>
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-base text-white">
                  From: <span className="text-[#9f9f9f]">Kerala,India</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-5 sm:flex-nowrap flex-wrap">
              <button className="py-2 px-4 bg-green-800 rounded-xl">
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Ramees_CV.pdf"
                >
                  Download CV
                </a>
              </button>
              <div className="flex items-center gap-5">
                <div className="w-[60px] border-b border-[#9f9f9f]"></div>
                <div className="flex gap-x-3 text-xl">
                  {socialMedia?.map((item, ind) => (
                    <a
                      href={item.link}
                      key={ind}
                      title={item.name}
                      className="mb-0"
                      target="_blank"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
