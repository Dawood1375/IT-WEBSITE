import React from "react";
import { Github } from "lucide-react";
import Navbar from "./Navbar";
import "../index.css";
import { Button } from "@headlessui/react";

const HeroBanner = ({ backgroundImage, title, description }) => {
  return (
    <>
      <div className="relative min-h-screen text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: "black",
            zIndex: -1,
          }}
        />
        <Navbar />

        {/* Hero Content */}
        <main className="relative z-10 mx-auto mt-10  max-w-6xl px-6 pt-20 text-start lg:px-8">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mb-12 max-w-3xl text-lg text-start text-gray-200">
            {description}
          </p>
          <div className="flex flex-col items-start space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Button size="lg" className="bg-[#6C5CE7] hover:bg-[#5A4EBF] p-3.5">
              BOOK A DEMO
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="p-3 border outline outline-0 text-white hover:bg-white hover:text-black"
            >
              REQUEST A QUOTE
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};

export default HeroBanner;
