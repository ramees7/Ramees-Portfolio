import React from "react";
import AboutLand from "./AboutLand";
import Service from "./Service";

export default function About({socialMedia}) {
  return (
    <div className=" py-6 px-10 md:px-20 lg:px-40 bg-black  ">
      <AboutLand socialMedia={socialMedia} />
      <Service />
    </div>
  );
}
