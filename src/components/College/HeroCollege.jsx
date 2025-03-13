import {
  ChevronRight,
  Download,
  Calendar,
  MapPin,
  Award,
  IndianRupee,
  Users,
} from "lucide-react";
import React from "react";

const HeroCollege = ({ collegeData }) => {
  return (
    <section
      data-section="university-hero"
      className="flex items-center justify-center min-h-[97vh] px-4 py-12 md:pt-32 w-full bg-gradient-to-br from-gray-50 to-blue-50 h-fit pt-48"
    >
      <div className="w-full max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 ">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="mb-6">
                <img
                  src={collegeData && collegeData[0]?.collegeLogo}
                  alt="Amrita University Logo"
                  className="h-24 w-24 object-contain"
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-violet-700 leading-tight mb-2">
                {collegeData && collegeData[0]?.collegeName}
              </h1>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2 text-violet-600" />
                <span>{collegeData && collegeData[0]?.collegeLocation}</span>
              </div>

              <div className="flex items-center gap-4 mb-3 overflow-x-auto">
                {collegeData &&
                  collegeData[0]?.certificates?.map((url, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow w-16 h-16 flex items-center justify-center"
                    >
                      <img
                        src={url}
                        alt={`Certificate ${index + 1}`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  ))}
              </div>

              <p
                className="mt-4 text-gray-700 text-md leading-relaxed mb-8"
                dangerouslySetInnerHTML={{
                  __html: collegeData &&collegeData[0]?.aboutUsSub || "",
                }}
              />
                

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-4 py-3  hover:bg-purple-600 hover:text-white text-purple-800 font-medium rounded-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-violet-600">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
                <button className="px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl">
                  Book Admission
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - University Image */}
          <div className="relative w-full md:w-[45%]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image */}
              <img
                src={collegeData && collegeData[0]?.collegeImage}
                alt="Amrita University Campus"
                className="w-full object-cover h-[400px] transform hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-4 right-4 flex gap-4">
                <div className="bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Award className="w-4 h-4 text-blue-600" />
                    NIRF Ranking
                  </div>
                  <div className="text-2xl font-bold text-violet-900">7</div>
                </div>

                {/* Highest Package */}
                <div className="bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <IndianRupee className="w-4 h-4 text-green-600" />
                    Highest Package
                  </div>
                  <div className="text-2xl font-bold text-violet-900">
                    {collegeData && collegeData[0]?.highestPackage}
                  </div>
                </div>
              </div>

              {/* Bottom Stats Container */}
              <div className="absolute bottom-4 left-4 flex gap-4">
                {/* Established */}
                <div className="bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg transform hover:translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    Established
                  </div>
                  <div className="text-2xl font-bold text-violet-900">
                    {collegeData && collegeData[0]?.established}
                  </div>
                </div>

                {/* Students */}
                <div className="bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg transform hover:translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Users className="w-4 h-4 text-orange-600" />
                    Students
                  </div>
                  <div className="text-2xl font-bold text-violet-900">20K+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCollege;
