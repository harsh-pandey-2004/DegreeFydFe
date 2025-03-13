import { useState } from "react";
import { CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

export default function CollegeNewsLetter() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    stream: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(
    {
      type: "success" | "error" | null,
    } > { type: null, message: "" }
  );

  const streams = [
    "Engineering",
    "Medical",
    "Business",
    "Arts & Humanities",
    "Science",
    "Law",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.stream) {
      newErrors.stream = "Please select your stream";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setNotification({
        type: "success",
        message: "Thank you! We will call you back soon.",
      });
      setFormData({ name: "", mobile: "", email: "", stream: "" });
    } catch (error) {
      setNotification({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-fit min-h-[50vh] bg-[#F0F0FF] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-light text-gray-800">
            Personalised Guidance.
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
            Trusted Experts.
          </h2>
          <p className="text-gray-600 mt-2">
            Get in touch with our expert counsellors
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all`}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="absolute text-red-500 text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="tel"
                placeholder="Mobile"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all`}
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
              {errors.mobile && (
                <p className="absolute text-red-500 text-xs mt-1">
                  {errors.mobile}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="absolute text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <select
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.stream ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all appearance-none bg-white`}
                value={formData.stream}
                onChange={(e) =>
                  setFormData({ ...formData, stream: e.target.value })
                }
              >
                <option value="">Your Stream</option>
                {streams.map((stream) => (
                  <option key={stream} value={stream}>
                    {stream}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              {errors.stream && (
                <p className="absolute text-red-500 text-xs mt-1">
                  {errors.stream}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`px-8 py-3 rounded-lg bg-violet-600 text-white font-medium 
              transform transition-all duration-200 
              ${
                isLoading
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:bg-violet-700 hover:scale-105"
              }
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Request for a callback"
            )}
          </button>
        </form>

        {notification.type && (
          <div
            className={`fixed bottom-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg text-white transform transition-all duration-500 ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            {notification.message}
          </div>
        )}

        <p className="text-sm text-gray-600">
          By proceeding ahead you expressly agree to the CollegeDekho{" "}
          <a href="#" className="text-violet-600 hover:underline">
            terms of use
          </a>{" "}
          and{" "}
          <a href="#" className="text-violet-600 hover:underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
