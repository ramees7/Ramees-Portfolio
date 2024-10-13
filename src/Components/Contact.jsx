import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { message } from "antd";

export default function Contact({ socialMedia }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Formik setup with Yup validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(
          "https://ramees-portfolio-server.onrender.com/contact",
          values
        );
        message.success("Message sent successfully");
        resetForm();
      } catch (error) {
        console.error("Error sending message:", error);
        message.error("Failed to send message");
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10 px-10 md:px-20 lg:px-40 bg-black text-white">
      <div className="flex items-center flex-col pb-16" data-aos="fade-up">
        <h4 className="text-md md:text-lg text-[#9f9f9f] mb-2">
          Feel free to contact me anytime
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold pb-8 border-b-4 border-green-700">
          Get in Touch
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="" data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-6">Message Me</h3>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-[#161616] text-[#9f9f9f] placeholder-[#9f9f9f] p-3 autofill:bg-[#161616] focus:bg-[#161616] focus:outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="w-1/2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-[#161616] text-[#9f9f9f] placeholder-[#9f9f9f] p-3 focus:outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="w-full ">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-[#161616] text-[#9f9f9f] placeholder-[#9f9f9f] p-3 focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.subject}
                </div>
              ) : null}
            </div>

            <div className="w-full ">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="w-full bg-[#161616] text-[#9f9f9f] placeholder-[#9f9f9f] p-3 focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="bg-green-800 text-white font-bold py-3 px-6 rounded-lg "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className=" " data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <p className="mb-6 text-[#9f9f9f]">
            Always available for freelance work if the right project comes
            along. Feel free to contact me!
          </p>
          <div className="py-8 space-y-3">
            <h1 className="text-base text-white">
              Name : <span className="text-[#9f9f9f]">Muhammed Ramees</span>
            </h1>
            <h1 className="text-base text-white">
              Location :{" "}
              <span className="text-[#9f9f9f]">
                AV House Velimukku, Malappuram, Kerala, India 676317
              </span>
            </h1>
            <h1 className="text-base text-white">
              Call Me :{" "}
              <a href="tel:+919207424420" className="text-[#9f9f9f]"  target="_blank">
                +91 92074 24420
              </a>
            </h1>
            <h1 className="text-base text-white">
              Email Me :{" "}
              <a
                href="mailto:muhammedrameespkl@gmail.com" target="_blank"
                className="text-[#9f9f9f]"
              >
                muhammedrameespkl@gmail.com
              </a>
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
                rel="noopener noreferrer"
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
