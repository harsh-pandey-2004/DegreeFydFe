import React, { useState } from "react";
import { ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";

const ImageGallery = ({ collegeData }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="sm:max-w-7xl mx-auto sm:p-8">
      {/* Gallery Header */}
      <div className="text-center  mb-5">
        <h2 className="text-4xl font-bold text-black mb-4">Campus Gallery</h2>
        <p className="text-lg text-gray-600">
          Explore our world-class facilities and vibrant campus life
        </p>
      </div>

      {/* Enhanced Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {collegeData?.gallery.map((image, index) => (
          <div
            key={image.id}
            className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer 
                       transition-transform duration-300 hover:shadow-xl ${
                         image.span || ""
                       }`}
            onClick={() => setSelectedImage(index)}
          >
            {/* Image */}
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover transition-transform duration-500 
                         group-hover:scale-110"
            />

            {/* Improved Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-all duration-300
                          flex flex-col justify-end p-4"
            >
              <h3
                className="text-white text-xl font-semibold transform translate-y-4 
                           group-hover:translate-y-0 transition-transform duration-300"
              >
                {image.title}
              </h3>
              <div
                className="flex items-center mt-2 transform translate-y-4 
                            group-hover:translate-y-0 transition-transform duration-300 delay-100"
              >
                <ZoomIn className="w-5 h-5 text-white" />
                <span className="text-white text-sm ml-2">Click to expand</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <div className="relative max-w-5xl w-full mx-4">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 
                         transition-colors transform hover:scale-110 duration-300"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 
                         text-white hover:text-gray-300 transition-all duration-300 
                         hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 
                         text-white hover:text-gray-300 transition-all duration-300 
                         hover:scale-110"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main image */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full rounded-lg shadow-2xl"
            />

            {/* Image title */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t 
                          from-black/90 to-transparent"
            >
              <h3 className="text-white text-2xl font-semibold">
                {images[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
