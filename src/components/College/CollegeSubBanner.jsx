import React from "react";
import { Bell, GraduationCap, Calendar } from "lucide-react";

const CollegeSubBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-4 mx-auto my-3 overflow-hidden relative">
      {/* Animated decorative shapes */}
      <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-blue-300 opacity-10 animate-ping"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-md bg-purple-300 opacity-10 animate-bounce"></div>
      
      <div className="flex flex-col md:flex-row items-center justify-center relative z-10">
        <GraduationCap className="text-white w-8 h-8 mb-2 md:mb-0 md:mr-3 animate-bounce" />
        
        <div className="text-white text-center md:text-left mb-3 md:mb-0 md:mr-6">
          <h3 className="font-bold text-lg md:text-xl flex items-center justify-center md:justify-start">
            <Calendar className="w-5 h-5 mr-1 animate-pulse" />
            2025-26 Admissions Open
          </h3>
          <p className="text-sm md:text-base">Get details on fees, cut-off marks, and admission process</p>
        </div>
        
        <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-full transition-colors duration-300 shadow-sm flex items-center">
          <Bell className="w-4 h-4 mr-2 animate-pulse" />
          Get Free Counselling
        </button>
      </div>
    </div>
  );
};

export default CollegeSubBanner;