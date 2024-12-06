import React from "react";
import HeroBanner from "../components/HeroBanner";
import assets from "../assets/img/assets";
import GitHub from "../components/GitHub";
import "../index.css";
import ServicesCards from "../components/ServicesCards";
import Title from "../components/Title";
import ThatLot from "../components/ThatLot";
import Achievement from "../components/Achievement";
const Services = () => {
  return (
    <>
      <HeroBanner
        backgroundImage={assets.Rectangle37}
        title="OUR SERVICES"
        description="Delivering cutting-edge digital solutions tailored to your business needs
"
      />

      {/* GitHub  */}

      <GitHub />
      <Title title="Our Offerings" />

      <ServicesCards />

      {/* ThatLot Section  */}
      <div className="bg-[black] w-full pt-10 mb-40">
        {" "}
        {/* Increased margin-top */}
        <div
          className="flex flex-col items-start mt-4 mb-0 mx-auto px-4 py-6"
          style={{
            width: "90vw",
            backgroundColor: "white",
          }}
        >
          <h2 className="font-bold pl-5 text-black text-lg sm:text-xl md:text-xl lg:text-xl mb-4">
            THAT LOT
          </h2>
          <p className="pl-5 text-sm text-black sm:text-base md:text-lg lg:text-xl mb-4">
            Give your company a faster, more agile way to work with freelancers
            and contractors. Find, contract, and pay your external workforce in
            one click, with 100% compliance.
          </p>
          <div className="mt-auto w-full flex justify-end">
            <button className="text-white p-2 px-5 transition-all bg-black">
              Book a Demo
            </button>
          </div>
        </div>
        <Achievement />
      </div>
    </>
  );
};

export default Services;
