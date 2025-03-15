"use client";

import { useState } from "react";
import { Search, ChevronDown, Plus } from "lucide-react";

export default function CollegeFaq({ collegeData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Check if collegeData and collegeData.faq exist before mapping
  const faqItems = collegeData &&collegeData[0]?.faq || [];
  const filteredFAQs = faqItems.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show all FAQs if there's a search query, otherwise limit based on showMore state
  const displayedFAQs = searchQuery 
    ? filteredFAQs 
    : filteredFAQs.slice(0, showMore ? filteredFAQs.length : 4);

  // Hide load more button if searching or all items are shown
  const showLoadMoreButton = !searchQuery && !showMore && filteredFAQs.length > 4;

  return (
    <div className="sm:max-w-7xl mx-auto px-7 sm:py-12 my-5">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8 transition-all duration-300 ease-in-out">
        Frequently Asked Questions
      </h1>

      {/* Search Section */}
      <div className="relative mb-8 transition-all duration-300 ease-in-out w-1/3">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full pl-10 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 ease-in-out"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {displayedFAQs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md"
            style={{
              transitionDelay: `${index * 50}ms`,
              animation: "fadeIn 0.5s ease-in-out forwards",
              opacity: 0,
              animationDelay: `${index * 100}ms`,
            }}
          >
            <button
              className="w-full px-4 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span 
                className="font-medium text-left"
                dangerouslySetInnerHTML={{ __html: item.question }}
              />
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                  activeIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-4 py-3 bg-gray-50">
                <p 
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {showLoadMoreButton && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(true)}
            className="flex items-center gap-2 px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
            style={{
              animation: "fadeIn 0.5s ease-in-out forwards",
              opacity: 0,
              animationDelay: "0.5s",
            }}
          >
            <Plus size={20} />
            <span>Load More FAQs</span>
          </button>
        </div>
      )}

      {/* Chat Bubble */}
      <div className="fixed bottom-8 right-8 flex items-center gap-2">
        <div
          className="bg-white p-3 rounded-lg shadow-lg opacity-0 transform translate-x-4 transition-all duration-300 ease-in-out hover:shadow-xl"
          style={{
            animation: "fadeSlideIn 0.5s ease-in-out forwards",
            animationDelay: "0.3s",
          }}
        >
          <p className="text-sm">We would like to chat with you.</p>
        </div>
        <div
          className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-violet-600 transition-colors duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
          style={{
            animation: "pulseIn 0.5s ease-in-out forwards",
            animationDelay: "0.5s",
            opacity: 0,
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulseIn {
          0% { opacity: 0; transform: scale(0.9); }
          70% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}