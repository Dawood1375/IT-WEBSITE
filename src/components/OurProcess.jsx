import React from "react";

const OurProcess = () => {
  return (
    <>
      <div className=" bg-[black] flex flex-col items-center mb-10 py-24">
        <h1 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl mb-2 text-center">
          Our Process
        </h1>
        <div className="flex  items-center mb-5">
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
        <p className=" text-center text-white mb-16">
          Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
        </p>

        {/* Grid for the Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-center font-semibold mb-4">
              Discovery
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisl
              volutpat. Lobortis sedLorem ipsum dolor sit amet consectetur.
              Tortor sapien commodo nisl volutpat. Lobortis sed.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-center font-semibold mb-4">Planning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisl
              volutpat. Lobortis sedLorem ipsum dolor sit amet consectetur.
              Tortor sapien commodo nisl volutpat. Lobortis sed.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-center font-semibold mb-4">
              Execution
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisl
              volutpat. Lobortis sedLorem ipsum dolor sit amet consectetur.
              Tortor sapien commodo nisl volutpat. Lobortis sed.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl  text-center font-semibold mb-4">
              Evaluation
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisl
              volutpat. Lobortis sedLorem ipsum dolor sit amet consectetur.
              Tortor sapien commodo nisl volutpat. Lobortis sed.
            </p>
          </div>
        </div>

        {/* See Our Work Button */}
        <button className="bg-[#6d53fd] text-white py-3 px-6  text-lg font-semibold">
          SEE OUR WORK
        </button>
      </div>
    </>
  );
};

export default OurProcess;
