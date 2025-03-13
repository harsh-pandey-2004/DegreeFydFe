import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for programs, universities..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            autoFocus
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        <div className="mt-3">
          <h4 className="text-xs font-medium text-gray-500">Popular:</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Online MBA", "IIM Programs", "Data Science", "Executive MBA"].map(
              (term) => (
                <button
                  key={term}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                >
                  {term}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;