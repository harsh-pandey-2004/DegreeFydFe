import React from "react";

const AboutUs = ({ collegeData }) => {
  return (
    <div>
      {/* Main Content */}
      <div className="sm:px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-full mb-8 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#7C3AED] dark:text-[#7C3AED]">
              {collegeData?.collegeName}
            </h1>
            <div
              className="text-black dark:text-black leading-loose mb-8 text-md font-roboto"
              dangerouslySetInnerHTML={{
                __html: collegeData?.overview?.join(" ") || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
