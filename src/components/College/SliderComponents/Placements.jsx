import React, { useState } from "react";
import {
  Building2,
  Trophy,
  Users,
  BookOpen,
  Briefcase,
  TrendingUp,
  Goal,
  GraduationCap,
  MessageSquare,
  FileText,
  Heart,
} from "lucide-react";

const EnhancedPlacementSection = ({ collegeData }) => {
  const [hoveredService, setHoveredService] = useState(null);

  // Extract data from collegeData
  const placement = collegeData?.placement || {};
  const stats = collegeData?.placement.stats || {};

  // Create dynamic services array based on faculty and other data

  // Create dynamic stats from collegeData
  const statsItems = [
    {
      icon: <TrendingUp />,
      value: stats.placementRate || "0%",
      label: "Placement Rate",
    },
    {
      icon: <Goal />,
      value: stats.highestPackage || collegeData?.highestPackage || "0 LPA",
      label: "Highest Package",
    },
  ];

  return (
    <div className="sm:max-w-7xl mx-auto sm:p-8 bg-gradient-to-br rounded-2xl">
      {/* Header Section with Animated Background */}
      <div className="relative text-center sm:p-8 rounded-xl bg-white overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold text-black mb-4 relative z-10">
          Placement Excellence
        </h1>
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{
            __html: (collegeData && placement?.description) || "",
          }}
        ></p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {statsItems.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-4">
              <div className="text-black">{stat.icon}</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Company Logos Section */}
      {placement.companies && placement.companies.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Featured Recruiters
          </h2>

          {/* Responsive logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {placement.companies.map((recruiter, index) => (
              <div
                key={index}
                className="group w-full flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-16 w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={recruiter}
                    alt={`Recruiter ${index + 1}`}
                    className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Companies List */}
      {stats.topCompanies && stats.topCompanies.length > 0 && (
        <div className="bg-white rounded-xl sm:p-8 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-black mb-8 text-center relative z-10">
            Our Prestigious Recruiting Partners
          </h2>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            {stats.topCompanies.map((company, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white text-black rounded-full shadow-sm 
                         hover:shadow-md transition-all duration-300 transform 
                         hover:scale-105 hover:bg-violet-50 cursor-pointer
                         border border-violet-100 hover:border-violet-200"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPlacementSection;
