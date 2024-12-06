import React from "react";
import Title from "./Title";

const WhyChooseUs = () => {
  return (
    <>
      <div className=" bg-[black] flex flex-col items-center mb-10 py-24">
        <h1 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl mb-2 text-center">
          Why Choose Us
        </h1>
        <div className="flex  items-center mb-20">
          {/* Responsive underline dynamically matching title width */}
          <div
            className="border-b sm:border-b-3 md:border-b-3 lg:border-b-4 rounded-sm"
            style={{
              borderColor: "#6d53fd",
              height: "4px",
              width: "15vw", // Adjust underline width based on title length
            }}
          ></div>
          <div className="flex space-x-1 ml-2">
            {/* Decorative dots */}
            <span
              className="h-2 w-2"
              style={{ backgroundColor: "#6d53fd", borderRadius: "50%" }}
            ></span>
            <span
              className="h-2 w-2"
              style={{ backgroundColor: "#6d53fd", borderRadius: "50%" }}
            ></span>
            <span
              className="h-2 w-2"
              style={{ backgroundColor: "#6d53fd", borderRadius: "50%" }}
            ></span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-8">
          <div className="bg-white text-black p-10 rounded-lg shadow-lg w-80 sm:w-96">
            <h2 className="text-xl text-center sm:text-2xl font-bold mb-4">
              Customer-Centric Approach
            </h2>
            <p className="text-gray-700 text-center text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi
              volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.
              Tortor sapien commodo nisi volutpat. Lobortis sed.
            </p>
          </div>
          <div className="bg-white p-10 text-black rounded-lg shadow-lg w-80 sm:w-96">
            <h2 className="text-xl text-center sm:text-2xl font-bold mb-4">
              Innovation
            </h2>
            <p className="text-gray-700 text-center text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi
              volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.
              Tortor sapien commodo nisi volutpat. Lobortis sed.
            </p>
          </div>
          <div className="bg-white p-10 text-black rounded-lg shadow-lg w-80 sm:w-96">
            <h2 className="text-xl text-center sm:text-2xl font-bold mb-4">
              <span>Reliability</span>
            </h2>
            <p className="text-gray-700 text-center text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi
              volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.
              Tortor sapien commodo nisi volutpat. Lobortis sed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
