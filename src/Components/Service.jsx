import React, { useEffect, useState } from "react";
import { MdFormatQuote } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Service() {
  const service = [
    {
      icon: <FaHtml5 />,
      title: "Design Trends",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <FaHtml5 />,
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <FaHtml5 />,
      title: "Fully Responsive",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <FaHtml5 />,
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <FaHtml5 />,
      title: "Design Trends",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Maria Wilson",
      role: "Envato Customer",
      text: "Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Julia Sakura",
      role: "Envato Customer",
      text: "Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Anna Smith",
      role: "Envato Customer",
      text: "Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Sophia Blake",
      role: "Envato Customer",
      text: "Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight.",
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
        {service?.map((item, ind) => (
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
                    <h1 className="text-lg font-bold">
                      {testimonials[firstTestimonialIndex].name}
                    </h1>
                    <p className="text-sm text-[#9f9f9f]">
                      {testimonials[firstTestimonialIndex].role}
                    </p>
                  </div>
                </div>

                <p className="text-base text-[#9f9f9f]">
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
                    <h1 className="text-lg font-bold">
                      {testimonials[secondTestimonialIndex].name}
                    </h1>
                    <p className="text-sm text-[#9f9f9f]">
                      {testimonials[secondTestimonialIndex].role}
                    </p>
                  </div>
                </div>

                <p className="text-base text-[#9f9f9f]">
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
        <div
          className="flex justify-center space-x-2 mt-6"
          data-aos="fade-down"
        >
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
