import React, { useState } from "react";
import {
  Star,
  Users,
  Building2,
  GraduationCap,
  MoreHorizontal,
} from "lucide-react";

const CollegeReview = () => {
  const [activeSection, setActiveSection] = useState("all");

  const sections = [
    {
      id: "placements",
      title: "Placements",
      icon: <Users className="w-6 h-6" />,
      content: {
        stats: [
          { label: "Placement Rate", value: "60%" },
          { label: "Highest Package", value: "59.5 LPA" },
        ],
        companies: [
          "Infosys",
          "Microsoft",
          "Google",
          "Kotak Mahendra Bank",
          "HCL",
        ],
        description:
          "Students with CGPA above 8 were placed in prestigious companies in India and abroad.",
      },
    },

    {
      id: "faculty",
      title: "Faculty",
      icon: <GraduationCap className="w-6 h-6" />,
      content: {
        highlights: [
          "Supportive Teachers",
          "English Communication Training",
          "Relevant Curriculum",
        ],
        academics: [
          { label: "Exam Difficulty", value: "Moderate" },
          { label: "Average CGPA", value: "7.0+" },
          { label: "Minimum CGPA", value: "5.5" },
        ],
      },
    },
    {
      id: "other",
      title: "Other",
      icon: <MoreHorizontal className="w-6 h-6" />,
      content: {
        description:
          "Family-recommended course with manageable curriculum. Regular cultural events including traditional celebrations.",
      },
    },
  ];

  return (
    <div className="sm:max-w-7xl mx-auto sm:p-6 rounded-xl">
      {/* Header */}
      <div className="text-center mb-8 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stats</h1>
        <p className="text-purple-600">
          "The college was so nice to study. A perfect choice."
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          onClick={() => setActiveSection("all")}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeSection === "all"
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-purple-100"
          }`}
        >
          All
        </button>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-purple-100"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {sections.map(
          (section) =>
            (activeSection === "all" || activeSection === section.id) && (
              <div
                key={section.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.id === "placements" && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        {section.content.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="text-center p-3 bg-gray-100 rounded-lg"
                          >
                            <div className="text-lg font-bold text-gray-800">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Top Companies</h3>
                        <div className="flex flex-wrap gap-2">
                          {section.content.companies.map((company) => (
                            <span
                              key={company}
                              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {section.id === "infrastructure" && (
                    <>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Campus Facilities
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {section.content.facilities.map((facility) => (
                            <span
                              key={facility}
                              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                            >
                              {facility}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Hostel Amenities</h3>
                        <div className="flex flex-wrap gap-2">
                          {section.content.hostel.map((amenity) => (
                            <span
                              key={amenity}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {section.id === "faculty" && (
                    <>
                      <div className="space-y-2">
                        {section.content.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {section.content.academics.map((item) => (
                          <div
                            key={item.label}
                            className="text-center p-3 bg-gray-100 rounded-lg"
                          >
                            <div className="text-sm text-gray-500">
                              {item.label}
                            </div>
                            <div className="text-lg font-bold text-gray-800">
                              {item.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {section.id === "other" && (
                    <p className="text-gray-700">
                      {section.content.description}
                    </p>
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CollegeReview;
