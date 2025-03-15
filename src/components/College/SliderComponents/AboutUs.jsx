import React from "react";
import parse from "html-react-parser";

const AboutUs = ({ collegeData }) => {
  // Ensure `overview` is always a string (join array if needed)
  const overviewContent = Array.isArray(collegeData?.overview)
    ? collegeData.overview.join(" ")
    : collegeData?.overview || "";

  return (
    <div>
      {/* Main Content */}
      <div className="sm:px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-full mb-8 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#7C3AED] dark:text-[#7C3AED]">
              {collegeData?.collegeName}
            </h1>

            <div className="text-black dark:text-black leading-loose mb-8 text-md font-roboto">
              {parse(overviewContent)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
