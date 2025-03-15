import React from "react";
import { Medal, Download, Share2 } from "lucide-react";
import Certificate from "../../../assets/images/certificate.jpeg";
const SampleDegree = ({collegeData}) => {
  return (
    <div className="sm:max-w-4xl mx-auto sm:p-6">
      {/* Certificate Container */}
      <div className="bg-white  overflow-hidden">
        {/* Header */}
        <div className="text-black sm:p-6 rounded-lg">
          <div className="flex items-center justify-between flex-col py-3 gap-3">
            <div className="flex items-center gap-3 flex-col">
              <div className="flex items-center gap-5">
              <Medal className="w-8 h-8 black" />
              <h1 className="sm:text-4xl font-bold ">
                Sample Degree Certificate
              </h1>
              </div>
              <p dangerouslySetInnerHTML={{ __html: collegeData?.sampleDegree?.description }} />
              </div>
            <div className="flex gap-3 mt-5">
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-black px-4 py-2 rounded-lg transition-colors border-2">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-black px-4 py-2 rounded-lg transition-colors border-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Certificate Image */}
        <div className="relative sm:p-8 bg-gray-50 ">
          <div className="aspect-[1.414/1] relative rounded-lg overflow-hidden border-8 border-double border-gray-200 shadow-inner">
            <img
              src={collegeData?.sampleDegree.image}
              alt="Sample Degree Certificate"
              className="w-full h-full object-cover"
            />
            {/* Watermark Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-serif text-gray-200/30 rotate-[-30deg]">
                SAMPLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleDegree;
