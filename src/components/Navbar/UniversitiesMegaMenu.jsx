import React, { useState } from "react";
import { X, ChevronRight, Search } from "lucide-react";
import { universityMenuData } from "../../assets/Data/naviagtionData";

const UniversitiesMegaMenu = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState("Universities by Location");

  return (
    <div className="fixed top-[6.5rem] left-0 right-0 mx-auto w-[80%] h-[80vh] bg-white shadow-lg z-50 border-t overflow-hidden backdrop-blur-3xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-4 h-full backdrop-blur-3xl backdrop-opacity-15">
        <div className="flex justify-between items-start h-full">
          <div className="flex flex-col h-full w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Discover Top Universities
              </h2>
              <button className="text-gray-500 hover:text-gray-700">
                <X size={20} onClick={onClose} />
              </button>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4">
              <div className="text-violet-600 font-medium">
                Top Universities
              </div>
              <ChevronRight size={16} className="text-gray-400" />
              <div className="text-violet-600 font-medium">
                {activeCategory}
              </div>
              <ChevronRight size={16} className="text-gray-400" />
              <div className="text-violet-600 font-medium">Browse Options</div>
            </div>

            {/* Search */}
            <div className="relative w-full mb-6">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-300"
                placeholder='Search "University by name or location"'
              />
              <button className="absolute inset-y-0 right-3 flex items-center">
                <div className="text-violet-600 p-1 rounded-full">🎤</div>
              </button>
            </div>

            {/* Content */}
            <div className="flex space-x-4 h-[calc(80vh-180px)]">
              {/* Categories */}
              <div className="w-1/4 overflow-y-auto pr-2 custom-scrollbar">
                {Object.keys(universityMenuData).map((category) => (
                  <div
                    key={category}
                    className="mb-4 cursor-pointer"
                    onMouseEnter={() => setActiveCategory(category)}
                  >
                    <div
                      className={`bg-gray-50 border border-gray-100 rounded-lg p-4 transition-all duration-200 hover:shadow-md ${
                        activeCategory === category
                          ? "bg-violet-50 border-violet-200"
                          : "hover:bg-violet-50 hover:border-violet-100"
                      }`}
                    >
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center text-violet-600 font-medium">
                          <span>{category}</span>
                          <ChevronRight size={20} className="ml-auto" />
                        </div>
                        <div className="text-xs text-gray-500">
                          {universityMenuData[category].length} options
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* University Browse Options */}
              <div className="w-3/4 overflow-y-auto pl-2 custom-scrollbar">
                <div className="grid grid-cols-3 gap-6">
                  {universityMenuData[activeCategory].map((option, index) => (
                    <div key={index} className="space-y-6">
                      <div className="group flex items-center gap-6 p-4 rounded-lg border border-transparent transition-all duration-200 hover:bg-violet-50 hover:border-violet-100 hover:shadow-md">
                        <div className="text-violet-800 text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                          {option.icon}
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-violet-700 transition-colors duration-200">
                            {option.title}
                          </h3>
                          <div className="flex items-center mt-1">
                            <span className="w-2 h-2 bg-violet-500 rounded-full mr-2 group-hover:bg-violet-600 transition-colors duration-200"></span>
                            <span className="text-sm text-violet-500 group-hover:text-violet-600 transition-colors duration-200">
                              Compare {option.universities} Universities
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {activeCategory === "Universities by Ranking" && (
                  <div className="mt-8 p-4 bg-violet-50 rounded-lg border border-violet-100 hover:shadow-md transition-all duration-200 hover:bg-violet-100 cursor-pointer">
                    <h3 className="font-medium text-violet-800 mb-2">Popular University Rankings</h3>
                    <p className="text-sm text-gray-600">
                      Explore top universities based on various ranking parameters like placement, faculty, 
                      infrastructure, research output, and student satisfaction.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesMegaMenu;