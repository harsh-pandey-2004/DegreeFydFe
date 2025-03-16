import React from "react";
import {
  Calendar,
  Book,
  Monitor,
  FileText,
  Wifi,
  Award,
  CheckCircle,
} from "lucide-react";

const getIconForStep = (stepTitle) => {
  if (!stepTitle) return <CheckCircle className="w-6 h-6" />; // Default icon
  
  const titleLower = stepTitle.toLowerCase();

  if (titleLower.includes("registration") || titleLower.includes("register")) {
    return <Calendar className="w-6 h-6" />;
  } else if (
    titleLower.includes("schedule") ||
    titleLower.includes("guideline")
  ) {
    return <Book className="w-6 h-6" />;
  } else if (
    titleLower.includes("platform") ||
    titleLower.includes("online") ||
    titleLower.includes("system")
  ) {
    return <Monitor className="w-6 h-6" />;
  } else if (titleLower.includes("question") || titleLower.includes("format")) {
    return <FileText className="w-6 h-6" />;
  } else if (
    titleLower.includes("technical") ||
    titleLower.includes("internet") ||
    titleLower.includes("connection")
  ) {
    return <Wifi className="w-6 h-6" />;
  } else if (
    titleLower.includes("result") ||
    titleLower.includes("declaration")
  ) {
    return <Award className="w-6 h-6" />;
  } else {
    return <CheckCircle className="w-6 h-6" />; // Default icon
  }
};

const ExaminationProcess = ({ collegeData }) => {  
  // Check if examPattern exists and has the expected structure
  if (!collegeData?.examPattern || !Array.isArray(collegeData.examPattern.steps)) {
    return <div>No examination process data available</div>;
  }
  
  const examPatternData = {
    title: collegeData.examPattern.title || "Examination Process",
    steps: collegeData.examPattern.steps || []
  };

  // Process steps data - handle both old and new data structure
  const processedSteps = examPatternData.steps.map((step, index) => {
    // Handle new structure (with text and description properties)
    if (step && typeof step === 'object' && (step.text !== undefined || step.description !== undefined)) {
      return {
        icon: getIconForStep(step.text),
        number: String(index + 1).padStart(2, "0"),
        title: step.text || "",
        description: step.description || ""
      };
    } 
    // Handle old structure (string only)
    else if (typeof step === 'string') {
      const parts = step.split(":");
      
      if (parts.length >= 2) {
        const title = parts[0].trim();
        const description = parts.slice(1).join(":").trim();
        return {
          icon: getIconForStep(title),
          number: String(index + 1).padStart(2, "0"),
          title: title,
          description: description
        };
      } else {
        return {
          icon: getIconForStep(step),
          number: String(index + 1).padStart(2, "0"),
          title: step,
          description: step
        };
      }
    }
    
    // Default fallback for unexpected data
    return {
      icon: <CheckCircle className="w-6 h-6" />,
      number: String(index + 1).padStart(2, "0"),
      title: "Step " + (index + 1),
      description: "No description available"
    };
  });

  return (
    <div className="min-h-screen sm:p-8">
      <div className="sm:max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-black mb-4"
            dangerouslySetInnerHTML={{
              __html: examPatternData.title
            }}
          ></h1>
        </div>

        <div className="space-y-6">
          {processedSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-violet-600 mr-2">
                      Step {step.number}
                    </span>
                    <h2
                      className="text-xl font-bold text-gray-900"
                      dangerouslySetInnerHTML={{
                        __html: step.title || "",
                      }}
                    ></h2>
                  </div>
                  <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: step.description || "",
                    }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-violet-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Important Note</h3>
          <p className="text-violet-100">
            Please ensure you have all the required technical setup ready before
            the examination day. For any assistance, contact the examination
            help desk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExaminationProcess;