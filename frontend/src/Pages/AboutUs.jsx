import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero title={" مستشفى طانطان"} imageUrl={"/about.png"} />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
