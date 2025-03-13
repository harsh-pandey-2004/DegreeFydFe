import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative custom-bg">
      {/* Scroll-to-top Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-24 right-8 transition-all duration-300 ease-in-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}
          ${isHovered ? "scale-110" : "scale-100"}`}
      >
        <div className="bg-white rounded-full p-2 py-2 shadow-lg group hover:bg-[#7C3AED] transition-colors duration-300 flex">
          <Rocket
            className={`w-8 h-8 transition-all duration-300
              ${isHovered ? "text-white transform " : "text-[#7C3AED] p-1"}`}
          />
        </div>
      </button>

      {/* Footer Section */}
      <div className="custom-bg text-white pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* About Degreefyd */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-xl font-semibold mb-4">About Degreefyd</h3>
              <ul className="space-y-2">
                {[
                  "About Degreefyd",
                  "AI Student Advisor",
                  "Our Marketing Services",
                  "Careers",
                  "Contact us",
                ].map((item, index) => (
                  <li key={index} className="Footer-List">
                    <a href="#" className="Footer-Links">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Websites */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-xl font-semibold mb-4">Our websites</h3>
              <ul className="space-y-2">
                {[
                  "Bachelorsportal",
                  "Mastersportal",
                  "PhDportal",
                  "DistanceLearningportal",
                  "ShortCoursesportal",
                  "AdmissionTestportal",
                  "EnglishTestportal",
                  "StudentInsuranceportal",
                ].map((item, index) => (
                  <li key={index} className="Footer-List">
                    <a href="#" className="Footer-Links">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nationality & Currency and Social Links */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-xl font-semibold mb-4">Nationality & currency</h3>
              <div className="inline-flex items-center border border-white/20 rounded px-4 py-2 mb-6 hover:bg-white/10 transition-colors duration-300">
                <span className="mr-2">IN</span>|<span className="ml-2">INR</span>
              </div>

              <h3 className="text-xl font-semibold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                {["facebook", "linkedin", "youtube"].map((platform, index) => (
                  <a key={index} href="#" className="Footer-Links">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      {platform === "facebook" && (
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      )}
                      {platform === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                      )}
                      {platform === "youtube" && (
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>

              <button className="mt-6 border border-white/20 rounded px-4 py-2 hover:bg-white/10 transition-all duration-300">
                Add to home screen
              </button>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            Crafted with ❤️ by our team of 35 nationalities | Copyright © 2007-2025 Degreefyd B.V.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
