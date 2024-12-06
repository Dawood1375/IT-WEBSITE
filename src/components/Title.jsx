import React from "react";
import "../index.css";
const Title = ({ title }) => {
  return (
    <>
      <div className="flex flex-col mb-16 items-center justify-center mt-20 bg-white px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl  text-black mb-2 text-center">
          {title}
        </h1>
        <div className="flex items-center">
          {/* Responsive underline dynamically matching title width */}
          <div
            className="border-b sm:border-b-3 md:border-b-3 lg:border-b-4 rounded-sm"
            style={{
              borderColor: "#6d53fd",
              height: "4px",
              width: `${title.length * 10}px`, // Adjust underline width based on title length
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
      </div>
    </>
  );
};

export default Title;
