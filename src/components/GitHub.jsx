import React from "react";
import { Github } from "lucide-react";

const GitHub = () => {
  return (
    <>
      {/* GitHub  */}
      <div className="flex z-10 mx-auto mt-20 shadow-lg max-w-6xl flex-wrap items-center justify-around gap-8 px-6 pb-12 md:flex-nowrap lg:px-8">
        {[...Array(4)].map((_, i) => (
          <Github key={i} className="h-12 w-12 text-gray-500" />
        ))}
      </div>
    </>
  );
};

export default GitHub;
