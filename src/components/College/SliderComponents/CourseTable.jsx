import React, { useState, useMemo } from "react";
import { ArrowUpDown, BookOpen, Search } from "lucide-react";

const theme = {
  primary: "#7C3AED",
  secondary: "#ffffff",
  text: "#fff",
  accent: "#FF5733",
};

const CoursesTable = ({ collegeData }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  // Get course types from collegeData
  const courseTypes = useMemo(() => {
    // If collegeData is not available yet or doesn't have coursesAndFee, return an empty array
    if (!collegeData || !collegeData.coursesAndFee) return ["all"];

    // Extract program types based on course names
    const types = collegeData.coursesAndFee.map((item) => {
      const course = item.course || "";
      if (course.startsWith("MBA")) return "Business Administration";
      if (course.startsWith("MCA")) return "Computer Applications";
      if (course.startsWith("BCA")) return "Computer Applications";
      if (course.startsWith("BCom")) return "Commerce";
      if (course.startsWith("BBA")) return "Business";
      if (course.startsWith("MCom")) return "Commerce";
      return "Other";
    });

    return ["all", ...new Set(types)];
  }, [collegeData]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedCourses = useMemo(() => {
    // If collegeData is not available or doesn't contain coursesAndFee, return empty array
    if (!collegeData || !collegeData.coursesAndFee) return [];

    // Map the collegeData structure to match the component's expected format
    const formattedCourses = collegeData.coursesAndFee.map((item) => {
      const course = item.course || "";
      let type = "Other";

      // Determine course type
      if (course.startsWith("MBA")) type = "Business Administration";
      else if (course.startsWith("MCA")) type = "Computer Applications";
      else if (course.startsWith("BCA")) type = "Computer Applications";
      else if (course.startsWith("BCom")) type = "Commerce";
      else if (course.startsWith("BBA")) type = "Business";
      else if (course.startsWith("MCom")) type = "Commerce";

      return {
        name: course,
        duration: item.duration || "",
        fee: `₹ ${item.fee?.toLocaleString() || "N/A"}`,
        type: type,
        _id: item._id,
      };
    });

    let filtered = [...formattedCourses];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (selectedType !== "all") {
      filtered = filtered.filter((course) => course.type === selectedType);
    }

    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [collegeData, searchTerm, selectedType, sortConfig]);

  return (
    <div className="h-fit bg-gradient-to-b from-gray-50 to-white sm:px-4">
      <div className="w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Courses</h1>
          <p className="text-xl text-gray-600">
            Explore online learning courses in Amity University Online
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 hover:border-violet-600 focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50 transition-colors duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Course Type Filter */}
            <div className="md:w-64">
              <select
                className="w-full px-4 py-2 rounded-lg border border-gray-300 hover:border-violet-600 focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50 bg-white transition-colors duration-200"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {courseTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th
                    className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => requestSort("name")}
                  >
                    <div className="flex items-center space-x-2">
                      <BookOpen
                        className="w-5 h-5"
                        style={{ color: theme.primary }}
                      />
                      <span className="font-semibold text-gray-900 text-nowrap">
                        Course Name
                      </span>
                      <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => requestSort("type")}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">Type</span>
                      <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => requestSort("duration")}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900 text-nowrap">
                        Duration
                      </span>
                      <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => requestSort("fee")}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900 text-nowrap">
                        Total Fees
                      </span>
                      <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <span className="font-semibold text-gray-900">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedCourses.length > 0 ? (
                  filteredAndSortedCourses.map((course, index) => (
                    <tr
                      key={course._id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="px-6 py-4">
                        {console.log(course, "jdh")}
                        <span className="font-medium text-gray-900">
                          {course.CourseName}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{course.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{course.duration}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{course.fee}</span>
                      </td>
                      <td className="px-6 py-4 text-right text-nowrap">
                        <button
                          className="inline-flex items-center space-x-2 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                          style={{ background: theme.primary }}
                        >
                          <span>Read More</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      {collegeData
                        ? "No courses found matching your criteria."
                        : "Loading courses..."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesTable;
