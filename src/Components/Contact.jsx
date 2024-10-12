import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact({ socialMedia }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10 px-10 md:px-20 lg:px-40 bg-black text-white">
      <div className="flex items-center flex-col pb-16 "  data-aos="fade-up">
        <h4 className="text-md md:text-lg text-[#9f9f9f] mb-2">
          Feel free to contact me anytimes
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold pb-8 border-b-4 border-green-700">
          Get in Touch
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="p-8 rounded-lg shadow-md" data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-6">Message Me</h3>
          <form className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 bg-[#161616] text-[#9f9f9f] placeholder-[#9f9f9f] p-3 "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 bg-[#161616] text-[#9f9f9f] placeholder-[#9f9f9f] p-3 "
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#161616] text-[#9f9f9f] placeholder-[#9f9f9f] p-3 "
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full bg-[#161616] text-[#9f9f9f] placeholder-[#9f9f9f] p-3 "
            ></textarea>
            <button
              type="submit"
              className="bg-green-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className=" p-8 rounded-lg shadow-md" data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <p className="mb-6 text-[#9f9f9f]">
            Always available for freelance work if the right project comes
            along. Feel free to contact me!
          </p>

          <div className=" py-8 space-y-3">
            <h1 className="text-base text-white">
              Name : <span className="text-[#9f9f9f]">Muhammed Ramees</span>
            </h1>

            <h1 className="text-base text-white">
              Location :{" "}
              <span className="text-[#9f9f9f]">
                AV House Velimukku ,Malappuram,kerala,India 676317
              </span>
            </h1>

            <h1 className="text-base text-white">
              Call Me : <span className="text-[#9f9f9f]">+91 92074 24420</span>
            </h1>

            <h1 className="text-base text-white">
              Email Me :{" "}
              <span className="text-[#9f9f9f]">
                muhammedramees09876@gmail.com
              </span>
            </h1>
          </div>
          <div className="flex gap-x-5 text-2xl">
            {socialMedia?.map((item, ind) => (
              <a
                href={item.link}
                key={ind}
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
