import React from "react";
import {
  Calculator,
  Star,
  Users,
  Briefcase,
  Mail,
  FileText,
  BookOpen,
} from "lucide-react";

const MoreMegaMenu = ({ onClose }) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex gap-32">
          {/* First tile - Services */}
          <div className="p-5  border-gray-100">
            <h3 className="text-base font-medium text-violet-700 mb-4 pb-2 border-b border-gray-200">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/loan-eligibility"
                  className="flex items-center text-sm text-gray-700 hover:text-violet-600 transition-colors"
                >
                  <Calculator className="w-4 h-4 mr-3 text-black" />
                  Loan Eligibility
                </a>
              </li>
              <li>
                <a
                  href="/write-review"
                  className="flex items-center text-sm text-gray-700 hover:text-violet-600 transition-colors"
                >
                  <Star className="w-4 h-4 mr-3 text-black" />
                  Write a Review
                </a>
              </li>
              <li>
                <a
                  href="/partner-login"
                  className="flex items-center text-sm text-gray-700 hover:text-violet-600 transition-colors"
                >
                  <Users className="w-4 h-4 mr-3 text-black" />
                  Partner Login
                </a>
              </li>
              <li>
                <a
                  href="/career-counselling"
                  className="flex items-center text-sm text-gray-700 hover:text-violet-600 transition-colors"
                >
                  <Briefcase className="w-4 h-4 mr-3 text-black" />
                  Career Counselling
                </a>
              </li>
            </ul>
          </div>

          {/* Second tile - Support */}
          <div className="bg-gray-50 p-5 rounded-lg  ">
            <h3 className="text-base font-medium text-violet-700 mb-4 pb-2 border-b border-gray-200">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contact"
                  className="flex items-center text-sm text-gray-700 hover:text-violet-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-3 text-black" />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/write-review"
                  className="flex items-center text-sm text-gray-700 hover:text-violet-600 transition-colors"
                >
                  <Star className="w-4 h-4 mr-3 text-black" />
                  Write a Review
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="flex items-center text-sm text-gray-700 hover:text-violet-600 transition-colors"
                >
                  <BookOpen className="w-4 h-4 mr-3 text-black" />
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreMegaMenu;
