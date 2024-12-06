import React from "react";
import "../index.css";
import assets from "../assets/img/assets";

const HomeSection2 = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl bg-no-repeat"
          src={assets.Img1}
          alt="Company visual"
        />
        <h2 className="font-bold text-center mt-4 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl px-2">
          Give your company a faster, more agile way to work with freelancers
          and contractors. Find, contract, and pay your external workforce in
          one click, with 100% compliance.
        </h2>
      </div>

      <div
        className="flex flex-col items-start mt-10 mx-auto px-4 py-6"
        style={{
          width: "90vw",
          height: "150px",
          backgroundColor: "#d8d8d8",
        }}
      >
        <h2 className="font-bold text-lg sm:text-xl md:text-xl lg:text-xl mb-4">
          THAT LOT
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Give your company a faster, more agile way to work with freelancers
          and contractors. Find, contract, and pay your external workforce in
          one click, with 100% compliance.
        </p>
      </div>
    </>
  );
};

export default HomeSection2;
