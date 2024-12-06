import React from "react";
import assets from "../assets/img/assets";
const HomeSection5 = () => {
  return (
    <>
      <div className="flex flex-col bg-[black] items-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <img
            src={assets.Rectangle12}
            alt="Futuristic robotic hand with digital elements"
            className="w-[250px] h-[300px]"
          />
          <img
            src={assets.Rectangle13}
            alt="Team of professionals discussing a project"
            className="w-[250px] h-[300px]"
          />
          <img
            src={assets.Rectangle14}
            alt="Cityscape with digital network overlay"
            className="w-[250px] h-[300px]"
          />
          <img
            src={assets.Rectangle15}
            alt="Server racks with digital cloud elements"
            className="w-[250px] h-[300px]"
          />
        </div>

        <div className="text-center text-white md:text-left">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            We specialize in delivering cutting-edge IT services tailored to
            meet the unique needs of businesses across industries. Our expert
            team is dedicated to providing comprehensive solutions that drive
            efficiency, enhance security, and foster innovation.
          </p>
          <a
            href="#"
            className="text-white underline text-sm sm:text-base md:text-lg"
          >
            Pay your external workforce in one click.
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeSection5;
