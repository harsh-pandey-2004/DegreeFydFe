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

const parseStepData = (stepText) => {
  // Skip the first item as it's the introduction text
  if (stepText.startsWith("Amrita University follows")) {
    return null;
  }

  // Split the step text by colon to separate title and description
  const parts = stepText.split(":");

  if (parts.length >= 2) {
    const title = parts[0].trim();
    const description = parts.slice(1).join(":").trim();
    return { title, description };
  } else {
    // If no colon, use the whole text as both title and description
    return { title: stepText, description: stepText };
  }
};

const ExaminationProcess = ({ collegeData }) => {
  // Extract steps from collegeData
  const examPatternData = collegeData?.examPattern || {
    title: "Amrita University Online Exam Process",
    steps: [],
  };

  // Process steps data
  const processedSteps = examPatternData.steps
    .map(parseStepData)
    .filter((step) => step !== null) // Filter out the intro step
    .map((step, index) => ({
      icon: getIconForStep(step.title),
      number: String(index + 1).padStart(2, "0"),
      title: step.title,
      description: step.description,
    }));

  return (
    <div className="min-h-screen sm:p-8">
      <div className="sm:max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-black mb-4"
            dangerouslySetInnerHTML={{
              __html:
                examPatternData?.title ||
                "Amrita University Online Exam Process",
            }}
          ></h1>
          {/* <p className="text-lg text-gray-600">
            {examPatternData.steps[0] ||
              "A comprehensive guide to our seamless examination system"}
          </p> */}
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
                        __html: step?.title || "",
                      }}
                    ></h2>
                  </div>
                  <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: step?.description || "",
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
