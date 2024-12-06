import React from "react";
import HeroBanner from "../components/HeroBanner";
import assets from "../assets/img/assets";
import GitHub from "../components/GitHub";
import WebDevSec2 from "../components/WebDevSec2";
import Title2 from "../components/Title2";
import Title from "../components/Title";
import OurProcess from "../components/OurProcess";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
const WebdevDetails = () => {
  return (
    <>
      <HeroBanner
        backgroundImage={assets.Rectangle37}
        title="WEB DEVELOPMENT
"
        description="Delivering cutting-edge digital solutions tailored to your business needs


"
      />
      <GitHub />
      <Title2 title2="Services Description" />
      <div className="flex w-[75vw] m-auto mb-20 ">
        <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-xl gap-4 space-x-2 space-y-4 tracking-normal sm:tracking-wide md:tracking-wider leading-normal sm:leading-relaxed md:leading-loose">
          Background or why we start a company ... Lorem ipsum dolor sit amet
          consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum
          nibh proin neque. Sed neque cursus congue ultrices enim donec in. Diam
          pretium odio tortor amet amet molestie enim aliquam massa vitae. Lorem
          ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit
          cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices
          enim donec in. Diam pretium odio tortor amet amet molestie enim
          aliquam massa vitae.{" "}
          <span className="text-[#6d53fd] cursor-pointer font-normal text-base sm:text-lg md:text-xl lg:text-xl gap-4 space-x-2 space-y-4 tracking-normal sm:tracking-wide md:tracking-wider leading-normal sm:leading-relaxed md:leading-loose">
            More...
          </span>
        </p>
      </div>

      <WebDevSec2 />
      <Title2 title2="Advantages" />

      <div className="flex w-[75vw] m-auto mb-20 ">
        <ul className="list-disc text-base sm:text-lg md:text-xl lg:text-xl gap-4 space-y-4 tracking-normal sm:tracking-wide md:tracking-wider leading-normal sm:leading-relaxed md:leading-loose pl-6">
          <li className="text-left">
            Lorem ipsum dolor sit amet consectetur. Nulla commodo fermentum
            felis enim eleifend tellus leo hac.
          </li>
          <li className="text-left">
            Tristique morbi suspendisse sit vestibulum euismod sit in aliquam.
            Ipsum pellentesque aliquam elementum sed.
          </li>
          <li className="text-left">
            Dictum velit eros amet morbi augue egestas.
          </li>
          <li className="text-left">
            Congue facilisis senectus amet commodo aliquam vitae mi amet duis.
          </li>
          <li className="text-left">
            Arcu malesuada quam arcu consectetur aliquam. Habitasse eu sem vitae
            vel id diam.
          </li>
          <li className="text-left">
            Euismod in eget risus etiam a nullam. Potenti netus ipsum sit amet
            in diam sit vel non.
          </li>
        </ul>
      </div>

      <OurProcess />
      <Title title="Client Reviews" />
      <Testimonials />
      <br />
      <Title title="FAQ" />
      <FAQ />
    </>
  );
};

export default WebdevDetails;
