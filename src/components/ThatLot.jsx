import React from "react";
import "../index.css";

const ThatLot = () => {
  return (
    <>
      <div
        className="flex flex-col items-start  mt-10 mb-10 mx-auto px-4 py-6"
        style={{
          width: "90vw",
          backgroundColor: "#d8d8d8",
        }}
      >
        <h2 className="font-bold pl-5 text-lg sm:text-xl md:text-xl lg:text-xl mb-4">
          THAT LOT
        </h2>
        <p className="pl-5 text-sm sm:text-base  md:text-lg lg:text-xl mb-4">
          Give your company a faster, more agile way to work with freelancers
          and contractors. Find, contract, and pay your external workforce in
          one click, with 100% compliance.
        </p>
        <div className="mt-auto w-full flex justify-end">
          <button className="text-white p-2 px-5 hover:bg-white hover:text-black transition-all bg-black">
            Book a Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default ThatLot;
