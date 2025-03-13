import React from "react";
import { Star, Download, ChevronRight, Heart, ExternalLink } from "lucide-react";

const CollegeCard = ({ name, location, rating, imageUrl, logoUrl }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
    <div className="relative h-48 w-full">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>

    <div className="p-4 space-y-4">
      <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
        {name}
      </h3>

      <div className="flex items-center space-x-2">
        <span className="text-gray-600">{location}</span>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="ml-1 font-medium">{rating}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="py-2 px-3 border border-black text-black rounded-md flex items-center justify-center hover:bg-violet-50 transition-colors text-sm">
          <Heart className="w-4 h-4 mr-1" />
          <span>Shortlist</span>
        </button>

        <button className="py-2 px-3 border border-black text-black rounded-md flex items-center justify-center hover:bg-blue-50 transition-colors text-sm">
          <ExternalLink className="w-4 h-4 mr-1" />
          <span>Check Details</span>
        </button>
      </div>

      <div className="space-y-2">
        <button className="w-full py-2 px-4 border border-violet-500 text-violet-500 rounded-md flex items-center justify-center hover:bg-violet-50 transition-colors">
          <span>Courses & Fees</span>
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>

        <button className="w-full py-2 px-4 bg-orange-500 text-white rounded-md flex items-center justify-center hover:bg-orange-600 transition-colors">
          <span>Brochure</span>
          <Download className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  </div>
);

const SimilarColleges = () => {
  const colleges = [
    {
      name: "Industrial Design Centre, Indian Institute of Technology - [IDC]",
      location: "Maharashtra",
      rating: "4.4",
      imageUrl:
        "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fcard-image%2Fcard.webp&w=640&q=75",
      logoUrl:
        "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Ficon%2Ficon.webp&w=96&q=75",
    },
    {
      name: "Shailesh J. Mehta School of Management, IIT Bombay - [SJMSOM]",
      location: "Maharashtra",
      rating: "4.4",
      imageUrl: "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fonline-manipal-jaipur%2Fcard-image%2Fcard.webp&w=640&q=75",
      logoUrl: "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fonline-manipal-jaipur%2Ficon%2Ficon.webp&w=96&q=75",
    },
    {
      name: "National Institute of Design - [NID Ahmedabad]",
      location: "Gujarat",
      rating: "4.7",
      imageUrl: "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Flovely-professional-university-online%2Fcard-image%2Fcard.webp&w=640&q=75",
      logoUrl: "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Flovely-professional-university-online%2Ficon%2Ficon.webp&w=96&q=75",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Other Colleges in the Same Group
        </h2>
        <p className="text-gray-600 mt-2">Scholarship provided by college</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college, index) => (
          <CollegeCard key={index} {...college} />
        ))}
      </div>
    </div>
  );
};

export default SimilarColleges;