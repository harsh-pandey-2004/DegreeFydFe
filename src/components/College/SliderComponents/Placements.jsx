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
  const stats = collegeData?.stats || {};

  // Create dynamic services array based on faculty and other data
  const generateServices = () => {
    const services = [];

    // Add faculty items
    if (stats.faculty && stats.faculty.length > 0) {
      const iconMap = {
        0: <GraduationCap className="w-8 h-8" />,
        1: <MessageSquare className="w-8 h-8" />,
        2: <FileText className="w-8 h-8" />,
      };

      const bgColorMap = {
        0: "hover:bg-blue-50",
        1: "hover:bg-purple-50",
        2: "hover:bg-green-50",
      };

      stats.faculty.forEach((item, index) => {
        // Remove any leading pipe characters
        const cleanedItem = item.replace(/^\|/, "").trim();

        services.push({
          icon: iconMap[index] || <GraduationCap className="w-8 h-8" />,
          title: cleanedItem,
          description: `${
            collegeData?.collegeName || "University"
          } provides ${cleanedItem.toLowerCase()} to support student success`,
          bgColor: bgColorMap[index] || "hover:bg-blue-50",
        });
      });
    }

    // Add the other field if it exists
    if (stats.other) {
      const cleanedOther = stats.other.replace(/^\|/, "").trim();
      services.push({
        icon: <Heart className="w-8 h-8" />,
        title: "Special Features",
        description: cleanedOther,
        bgColor: "hover:bg-red-50",
      });
    }

    // Return services or a default if empty
    return services.length > 0
      ? services
      : [
          {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Learning Experience",
            description: "Quality education with expert guidance",
            bgColor: "hover:bg-blue-50",
          },
        ];
  };

  const services = generateServices();

  // Create dynamic stats from collegeData
  const statsItems = [
    {
      icon: <Briefcase />,
      value: `${stats.topCompanies?.length || 0}+`,
      label: "Companies",
    },
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
        <p className="text-md text-gray-700 sm:max-w-2xl mx-auto relative z-10">
          {collegeData?.collegeName}'s 360° Career Development & Placement
          Assistance
        </p>
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

      {/* Services Grid (Faculty and Other Features) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-md transform hover:scale-105 
                      transition-all duration-300 ${service.bgColor} hover:shadow-xl`}
          >
            <div className="text-violet-600 mb-4 h-10 w-10">{service.icon}</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
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

      {/* Placement Description */}
      {placement.description && (
        <div className="mt-8 bg-white rounded-xl p-6">
          <h2 className="text-xl font-bold text-black mb-4">
            Placement Overview
          </h2>
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: (collegeData && placement?.description) || "",
            }}
          ></p>
        </div>
      )}
    </div>
  );
};

export default EnhancedPlacementSection;
