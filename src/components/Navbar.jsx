import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import NotificationBar from "./Navbar/NotificationBar";
import SearchBar from "./Navbar/SearchBar";
import MobileMenu from "./Navbar/MobileMenu";
import UniversitiesMegaMenu from "./Navbar/UniversitiesMegaMenu";
import CoursesMegaMenu from "./Navbar/CourseMegaMenu";
import MoreMegaMenu from "./Navbar/MoreMegaMenu";
import ResourcesDropdown from "./Navbar/ResourcesDropdown";
import { navStructure } from "../assets/Data/naviagtionData";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [currentMobileView, setCurrentMobileView] = useState("main");
  const [mobileNavHistory, setMobileNavHistory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Online MBA");
  const [activeCategory1, setActiveCategory1] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenDesktopMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navigateToMobileMenu = (menuKey) => {
    setMobileNavHistory([...mobileNavHistory, currentMobileView]);
    setCurrentMobileView(menuKey);
  };

  const navigateBack = () => {
    if (mobileNavHistory.length > 0) {
      const newHistory = [...mobileNavHistory];
      const previousView = newHistory.pop();
      setMobileNavHistory(newHistory);
      setCurrentMobileView(previousView);
    } else {
      setCurrentMobileView("main");
    }
  };

  const renderDesktopMegaMenu = (menuKey) => {
    if (menuKey === "programs") {
      return (
        <UniversitiesMegaMenu
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onClose={() => setOpenDesktopMenu(null)}
        />
      );
    }
    if (menuKey === "universities") {
      return (
        <CoursesMegaMenu
          activeCategory={activeCategory1}
          setActiveCategory={setActiveCategory1}
        />
      );
    }
    if (menuKey === "resources") {
      return <ResourcesDropdown onClose={() => setOpenDesktopMenu(null)} />;
    }
    if (menuKey === "more") {
      return <MoreMegaMenu onClose={() => setOpenDesktopMenu(null)} />;
    }
    return null;
  };

  return (
    <div className="fixed bg-white w-full z-50">
      <NotificationBar />
      <div className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <span className="ml-2 text-2xl font-bold text-purple-600">
                  DegreeFyd
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center space-x-1"
              ref={menuRef}
            >
              {Object.keys(navStructure).map((key) => (
                <div key={key} className="relative">
                  <button
                    onClick={() =>
                      setOpenDesktopMenu(openDesktopMenu === key ? null : key)
                    }
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      openDesktopMenu === key
                        ? "bg-violet-600 text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{navStructure[key].title}</span>
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-300 ${
                        openDesktopMenu === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu */}
                  {openDesktopMenu === key && renderDesktopMegaMenu(key)}
                </div>
              ))}

              {/* More button */}
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenDesktopMenu(
                      openDesktopMenu === "more" ? null : "more"
                    )
                  }
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    openDesktopMenu === "more"
                      ? "bg-violet-600 text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>More</span>
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      openDesktopMenu === "more" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* More Mega Menu */}
                {openDesktopMenu === "more" && renderDesktopMegaMenu("more")}
              </div>
            </div>

            {/* Right side elements */}
            <div className="flex items-center space-x-3">
              <button className="hidden md:flex items-center text-violet-600 px-3 py-1.5 border border-violet-200 rounded-md hover:bg-violet-50">
                <span className="mr-1 text-sm">👤</span>
                <span className="text-sm font-medium">Harsh</span>
                <ChevronDown size={16} className="ml-1" />
              </button>

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden md:flex items-center text-gray-600 hover:text-violet-600 px-3 py-1.5 border border-gray-200 rounded-md"
              >
                <span className="mr-1 font-medium text-sm">Search</span>
                <Search size={16} />
              </button>

              {/* Mobile Controls */}
              <div className="flex lg:hidden items-center space-x-3">
                {/* Mobile Search Icon - added to the left of hamburger */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-gray-600 p-2"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    if (!isMenuOpen) {
                      setCurrentMobileView("main");
                      setMobileNavHistory([]);
                    }
                  }}
                  className="text-gray-600 p-2"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <SearchBar
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        currentView={currentMobileView}
        onNavigate={navigateToMobileMenu}
        onNavigateBack={navigateBack}
        mobileNavHistory={mobileNavHistory}
      />
    </div>
  );
};

export default Navbar;
