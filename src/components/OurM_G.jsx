import React from "react";
import assets from "../assets/img/assets";
import "../index.css";
import Title from "./Title";

const OurM_G = () => {
  return (
    <>
      <div className="p-4">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={assets.Rectangle13}
            alt="A person holding a digital shield with a network of connections"
            className="hidden sm:block w-full md:w-1/2 mb-4 md:mb-0 md:mr-4 h-[100vh]"
          />
          <div className="w-full md:w-1/2">
            <Title title="Our Mission" />
            <p className="font-normal text-base sm:text-lg md:text-xl lg:text-xl gap-4 space-x-2 space-y-4 tracking-normal sm:tracking-wide md:tracking-wider leading-normal sm:leading-relaxed md:leading-loose">
              Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis
              volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo
              tellus bibendum venenatis vel. Elementum pellentesque dictum
              viverra tempor. Odio pellentesque viverra fringilla eleifend
              laoreet commodo odio elementum et. Massa a quis facilisi morbi at
              sit consequat. Feugiat gravida justo massa et hac. Varius sed orci
              tortor et nibh. Pretium leo donec tortor nibh non pretium
              fringilla arcu. Nunc quis velit lacus sit.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <Title title="Our Goals" />
            <p className="font-normal text-base sm:text-lg md:text-xl lg:text-xl gap-4 space-x-2 space-y-4 tracking-normal sm:tracking-wide md:tracking-wider leading-normal sm:leading-relaxed md:leading-loose">
              Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis
              volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo
              tellus bibendum venenatis vel. Elementum pellentesque dictum
              viverra tempor. Odio pellentesque viverra fringilla eleifend
              laoreet commodo odio elementum et. Massa a quis facilisi morbi at
              sit consequat. Feugiat gravida justo massa et hac. Varius sed orci
              tortor et nibh. Pretium leo donec tortor nibh non pretium
              fringilla arcu. Nunc quis velit lacus sit.
            </p>
          </div>
          <img
            src={assets.Rectangle12}
            alt="A digital cloud with various technology icons"
            className="hidden sm:block w-full md:w-1/2"
          />
        </div>
      </div>
    </>
  );
};

export default OurM_G;
