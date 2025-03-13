import React from "react";
import { Info, Mail, Briefcase, BookOpen } from "lucide-react";

const ResourcesDropdown = ({ onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
      <div className="py-1">
        <a
          href="#about"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <Info className="w-4 h-4 mr-3 text-black" />
          About Us
        </a>
        <a
          href="#contact"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <Mail className="w-4 h-4 mr-3 text-black" />
          Contact Us
        </a>
        <a
          href="#careers"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <Briefcase className="w-4 h-4 mr-3 text-black" />
          Careers
        </a>
        <a
          href="#blogs"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <BookOpen className="w-4 h-4 mr-3 text-black" />
          Blogs
        </a>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
