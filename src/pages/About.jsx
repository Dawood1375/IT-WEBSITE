import React from "react";
import HeroBanner from "../components/HeroBanner";
import assets from "../assets/img/assets";
import GitHub from "../components/GitHub";
import Title from "../components/Title";
import "../index.css";
import OurTeam from "../components/OurTeam";
import OurM_G from "../components/OurM_G";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
const About = () => {
  return (
    <>
      <HeroBanner
        backgroundImage={assets.Rectangle1}
        title="OUR STORY
"
        description="Lorem ipsum dolor sit amet consectetur. Leo id bibendum aliquam eget.

"
      />
      <GitHub />
      <Title title="Welcome" />
      <div className="w-[80vw] flex flex-wrap m-auto">
        <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-xl gap-4 space-x-2 space-y-4 tracking-normal sm:tracking-wide md:tracking-wider leading-normal sm:leading-relaxed md:leading-loose">
          Background or why we start a company ... Lorem ipsum dolor sit amet
          consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum
          nibh proin neque. Sed neque cursus congue ultrices enim donec in. Diam
          pretium odio tortor amet amet molestie enim aliquam massa vitae. Lorem
          ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit
          cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices
          enim donec in. Diam pretium odio tortor amet amet molestie enim
          aliquam massa vitae.
        </p>
      </div>

      <Title title="Our Team" />
      {/* Out Team  */}
      <OurTeam />
      {/* Our Mission and Goals  */}
      <OurM_G />
      {/* Why Choose US Section  */}

      <WhyChooseUs />

      {/* Testimonials  */}
      <Title title="Testimonials" />
      <Testimonials />
    </>
  );
};

export default About;
