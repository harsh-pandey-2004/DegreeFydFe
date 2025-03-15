import React from "react";
import {
  Globe,
  UserPlus,
  Mail,
  FileText,
  CreditCard,
  FileCheck,
  Clipboard,
  Upload,
  CheckCircle,
} from "lucide-react";

const theme = {
  primary: "#7C3AED",
  secondary: "#ffffff",
  text: "#fff",
  accent: "#FF5733",
};

// Map to associate step names with appropriate icons
const getIconForStep = (stepText) => {
  const stepLower = stepText.toLowerCase();

  if (stepLower.includes("register") || stepLower.includes("registration")) {
    return <UserPlus className="w-5 h-5" />;
  } else if (stepLower.includes("details") || stepLower.includes("entering")) {
    return <Clipboard className="w-5 h-5" />;
  } else if (stepLower.includes("document") || stepLower.includes("upload")) {
    return <Upload className="w-5 h-5" />;
  } else if (stepLower.includes("payment") || stepLower.includes("fee")) {
    return <CreditCard className="w-5 h-5" />;
  } else if (
    stepLower.includes("confirmation") ||
    stepLower.includes("verif")
  ) {
    return <CheckCircle className="w-5 h-5" />;
  } else {
    return <FileText className="w-5 h-5" />; // Default icon
  }
};

const AdmissionSteps = ({ collegeData }) => {
  // Use the dynamic steps from collegeData if available, otherwise use empty array
  const stepsList = collegeData?.admissionProcess?.steps || [];

  // Create steps array with additional properties
  const steps = stepsList.map((step, index) => ({
    number: index + 1,
    title: step,
    description: step,
    icon: getIconForStep(step),
  }));

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white md:px-3 sm:px-4 lg:px-6">
      <div className="w-full md:max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Admission Process
          </h1>
          <p
            className="text-base text-gray-700"
            dangerouslySetInnerHTML={{
              __html:
                (collegeData && collegeData?.admissionProcess.description) ||
                "",
            }}
          ></p>
        </div>

        <div className="">
          {steps.map((step) => (
            <div key={step.number} className="mb-4 font-roboto">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: theme.primary }}
                >
                  <div className="text-white">{step.icon}</div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col  gap-2 mb-1">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: theme.primary }}
                    >
                      STEP {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionSteps;
