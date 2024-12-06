import React from "react";
import "../index.css";
import { Rectangle3, UIUX, Group44 } from "../assets/img/assets"; // Ensure correct imports

const ServicesCards = () => {
  const services = [
    {
      title: "Business Planning",
      imgSrc: Rectangle3,
      imgAlt: "Person working on business planning with documents and laptop",
    },
    {
      title: "UI/UX Design",
      imgSrc: UIUX,
      imgAlt: "UI/UX design elements with a smartphone",
    },
    {
      title: "Web Development",
      imgSrc: Group44,
      imgAlt: "Person working on web development with code snippets",
    },
    // Duplicating the cards for six more entries
    {
      title: "Business Planning",
      imgSrc: Rectangle3,
      imgAlt: "Person working on business planning with documents and laptop",
    },
    {
      title: "UI/UX Design",
      imgSrc: UIUX,
      imgAlt: "UI/UX design elements with a smartphone",
    },
    {
      title: "Web Development",
      imgSrc: Group44,
      imgAlt: "Person working on web development with code snippets",
    },
    {
      title: "Business Planning",
      imgSrc: Rectangle3,
      imgAlt: "Person working on business planning with documents and laptop",
    },
    {
      title: "UI/UX Design",
      imgSrc: UIUX,
      imgAlt: "UI/UX design elements with a smartphone",
    },
    {
      title: "Web Development",
      imgSrc: Group44,
      imgAlt: "Person working on web development with code snippets",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {services.map((service, index) => (
          <div key={index} className="relative w-full">
            <img
              src={service.imgSrc}
              alt={service.imgAlt}
              className="w-full h-60 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 text-2xl bg-black bg-opacity-50 text-white text-center py-6 rounded-b-lg">
              {service.title}
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#6d53fd] w-fit text-xl mt-10 mb-20 flex m-auto text-white px-6 py-3">
        See Our Work
      </button>
    </>
  );
};

export default ServicesCards;
