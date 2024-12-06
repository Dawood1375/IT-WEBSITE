import React from "react";
import "../index.css";
import assets from "../assets/img/assets";
const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Project Manager",
      imgSrc: assets.Rectangle55,
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jane Smith",
      position: "UI/UX Designer",
      imgSrc: assets.Rectangle55,
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Alice Johnson",
      position: "Web Developer",
      imgSrc: assets.Rectangle55,
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bob Williams",
      position: "Marketing Specialist",
      imgSrc: assets.Rectangle55,
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];
  return (
    <>
      <div className="container mx-auto p-4 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.imgSrc}
                alt={`${member.name} - ${member.position}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="p-4 bg-black text-center">
                <h2 className="text-white text-base sm:text-lg font-semibold">
                  {member.name}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  {member.position}
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={member.socialLinks.facebook}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                  <a
                    href={member.socialLinks.instagram}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                  <a
                    href={member.socialLinks.linkedin}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
