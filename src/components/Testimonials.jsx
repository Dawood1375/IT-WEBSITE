import React, { useState } from "react";
import "../index.css"; // Ensure Tailwind is imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Import chevron icons

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      logo: "https://placehold.co/50x50",
      companyName: "Company 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque.",
    },
    {
      logo: "https://placehold.co/50x50",
      companyName: "Company 2",
      description:
        "Orci turpis magna mauris elit aliquam id arcu viverra. Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.",
    },
    {
      logo: "https://placehold.co/50x50",
      companyName: "Company 3",
      description:
        "At at eget id laoreet sed diam orci. Nunc ut justo et ligula tristique gravida ut id magna. Pellentesque rutrum auctor velit.",
    },
    // Add more items as necessary
  ];

  const totalItems = data.length;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center mb-20 justify-center w-full py-8 px-4">
      {/* Left Arrow Button */}
      <button
        onClick={goToPrev}
        className="absolute left-10 text-3xl bg-white p-2 rounded-full z-10"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Carousel Content */}
      <div className="bg-white p-20 rounded-lg shadow-lg w-full sm:w-96 md:w-[50rem]">
        <div className="flex items-center mb-4">
          <img
            src={data[currentIndex].logo}
            alt="Company logo"
            className="rounded-full border border-black"
          />
          <span className="ml-4 text-xl font-bold text-[#6d53fd]">
            {data[currentIndex].companyName}
          </span>
        </div>
        <p className="text-black text-sm sm:text-base md:text-lg">
          {data[currentIndex].description}
        </p>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={goToNext}
        className="absolute right-10 text-3xl bg-white p-2 rounded-full z-10"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Pagination / Carousel Indicators */}
      <div className="flex justify-center mt-4 absolute bottom-0 w-full">
        {data.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-[black]" : "bg-gray-400 blur-sm"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
