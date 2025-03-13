import React from "react";
import { courseStructure } from "../../assets/Data/naviagtionData";

const CoursesMegaMenu = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="fixed w-[80%] bg-white shadow-lg z-50 border-t left-52 top-[6.5rem]">
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          {/* Categories */}
          <div className="w-1/4 border-r max-h-[70vh] overflow-y-auto bg-gray-50">
            {courseStructure.categories.map((category, index) => (
              <div
                key={index}
                className={`
                  p-3 cursor-pointer transition-all duration-200
                  ${
                    activeCategory === index
                      ? "bg-white border-l-4 border-violet-500 shadow-sm"
                      : "border-l-4 border-transparent"
                  }
                  hover:bg-white
                `}
                onMouseEnter={() => setActiveCategory(index)}
              >
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
          {/* Course Items */}
          <div className="w-4/5 p-4 max-h-[70vh] overflow-y-auto">
            {courseStructure.categories[activeCategory] && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">
                    {courseStructure.categories[activeCategory].icon}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900">
                    {courseStructure.categories[activeCategory].name} Courses
                  </h2>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {courseStructure.categories[activeCategory].items.map(
                    (course, idx) => (
                      <a key={idx} href="#" className="group block">
                        <div className="p-2 rounded-lg bg-gray-50 transition-all duration-200 group-hover:bg-violet-50 group-hover:shadow-sm border border-transparent group-hover:border-violet-100">
                          <h3 className="text-xs text-gray-900 group-hover:text-violet-600 font-medium mb-1 truncate">
                            {course.title}
                          </h3>
                          <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                            {course.description}
                          </p>
                          <div className="flex items-center text-xs text-violet-500">
                            <span className="mr-1">⏱️</span>
                            {course.duration}
                          </div>
                        </div>
                      </a>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesMegaMenu;
