import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  GraduationCap,
  BookOpen,
  Users,
  Send,
  Calendar,
  IndianRupee,
  Award,
  Globe,
  Clock,
  PhoneOutgoingIcon,
  GalleryHorizontal,
  GalleryHorizontalIcon,
} from "lucide-react";
import AdmissionProcess from "./SliderComponents/AdmissionSteps";
import SalaryStats from "./SliderComponents/CollegeStats";
import CoursesTable from "./SliderComponents/CourseTable";
import AboutUs from "./SliderComponents/AboutUs";
import ExaminationProcess from "./SliderComponents/ExaminationProcess";
import SampleDegree from "./SliderComponents/SampleDegree";
import Reviews from "./SliderComponents/Reviews";
import Gallery from "./SliderComponents/Gallery";
import Placements from "./SliderComponents/Placements";

const UniversitySlider = ({collegeData}) => {
  let collegeData1 = collegeData && collegeData[0]
  const [activeSection, setActiveSection] = useState("OverView");
  const [mounted, setMounted] = useState(false);
  const sectionRefs = useRef({});
  const contentRef = useRef(null);
  const templateRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    {
      id: "OverView",
      label: <span className="text-nowrap">Overview</span>,
      icon: Users,
      component: AboutUs,
    },
    {
      id: "Course & Fee",
      label: <span className="text-nowrap">Course & Fee</span>,
      icon: BookOpen,
      component: CoursesTable,
    },
    {
      id: "Admission 2025",
      label: <span className="text-nowrap">Admission 2025</span>,
      icon: GraduationCap,
      component: AdmissionProcess,
    },
    {
      id: "Approvals & Rankings",
      label: <span className="text-nowrap">Approvals & Rankings</span>,
      icon: Send,
      component: SalaryStats,
    },
    {
      id: "Placements",
      label: <span className="text-nowrap">Placements</span>,
      icon: Calendar,
      component: Placements,
    },
    {
      id: "Gallery",
      label: <span className="text-nowrap">Gallery</span>,
      icon: GalleryHorizontalIcon,
      component: Gallery,
    },
    {
      id: "Stats",
      label: "Stats",
      icon: Award,
      component: Reviews,
    },
    {
      id: "Sample Degree",
      label: <span className="text-nowrap">Sample Degree</span>,
      icon: Globe,
      component: SampleDegree,
    },
    {
      id: "Examination Process",
      label: <span className="text-nowrap">Examination Process</span>,
      icon: Clock,
      component: ExaminationProcess,
    },
  ];

  useEffect(() => {
    if (!contentRef.current || !mounted) return;

    let visibleSections = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections[entry.target.id] = entry.intersectionRatio;

          const mostVisibleSection = Object.keys(visibleSections).reduce(
            (max, section) =>
              visibleSections[section] > visibleSections[max] ? section : max,
            Object.keys(visibleSections)[0]
          );

          if (mostVisibleSection) {
            setActiveSection(mostVisibleSection);
          }
        });
      },
      {
        root: contentRef.current,
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    Object.entries(sectionRefs.current).forEach(([id, ref]) => {
      if (ref) {
        observer.observe(ref);
        visibleSections[id] = 0;
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [mounted]);

  const scrollToSection = (sectionId) => {
    const templateElement = document.getElementById("template");
    const sectionRef = sectionRefs.current[sectionId];

    if (templateElement && sectionRef && contentRef.current) {
      // First scroll to template section
      templateElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // Then scroll to specific section after a delay
      setTimeout(() => {
        const containerTop = contentRef.current.getBoundingClientRect().top;
        const sectionTop = sectionRef.getBoundingClientRect().top;
        const offset = sectionTop - containerTop;

        contentRef.current.scrollTo({
          top: contentRef.current.scrollTop + offset,
          behavior: "smooth",
        });

        setActiveSection(sectionId);
      }, 500);
    }
  };

  const mobileNavItems = menuItems;

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col lg:flex-row max-w-[85rem] mx-auto">
      {/* Desktop Sidebar */}
      <div className="hidden lg:sticky lg:pt-32 lg:flex lg:h-fit lg:w-[18rem]  backdrop-blur-md lg:left-0 ">
        <div className="h-full overflow-hidden w-[90%] ">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full px-2 xl:px-4 py-3.5 flex items-center space-x-3 rounded-xl 
                    transition-all duration-300 group relative
                    ${
                      isActive
                        ? "bg-purple-600 text-white font-medium translate-x-2"
                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                    }
                  `}
                >
                  <div
                    className={`
                      p-1.5 rounded-lg transition-all duration-300
                      ${
                        isActive
                          ? "bg-purple-500"
                          : "bg-purple-100/50 group-hover:bg-purple-100"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      className={isActive ? "text-white" : "text-purple-500"}
                    />
                  </div>
                  <span className="text-base font-medium">{item.label}</span>
                  <ChevronRight
                    size={16}
                    className={`ml-auto transition-all duration-300 ${
                      isActive
                        ? "opacity-100 text-white translate-x-0"
                        : "opacity-0 -translate-x-4 text-purple-400"
                    }`}
                  />
                  {isActive && (
                    <div className="absolute inset-y-0 -left-6 w-1 bg-purple-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 lg:ml-0  lg:pb-0 lg:mt-32 "
        id="template"
        ref={templateRef}
      >
        <div className="max-w-full p-4 ">
          <div
            ref={contentRef}
            className="h-[calc(100vh-5rem)] lg:h-[calc(100vh-4rem)] overflow-y-auto pr-4 pb-20 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            {menuItems.map((item) => {
              const Component = item.component;
              return (
                <section
                  key={item.id}
                  id={item.id}
                  ref={(el) => (sectionRefs.current[item.id] = el)}
                  className="h-fit scroll-mt-10 "
                >
                  <div
                    className={`
                      p-4 lg:p-8 bg-white rounded-xl 
                      transition-all duration-500 ease-out
                      ${
                        mounted
                          ? "opacity-100 translate-y-40 md:-translate-y-10 "
                          : "opacity-0 translate-y-8"
                      }
                    `}
                  >
                    <Component collegeData={collegeData1}/>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed top-[6.5rem] left-0 right-0 bg-white border-t border-gray-200 lg:hidden overflow-scroll z-10">
        <nav className="flex justify-around items-center h-16 gap-16">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex flex-col items-center justify-center w-16 py-1
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-500"
                  }
                `}
              >
                <Icon size={20} className={isActive ? "text-purple-600" : ""} />
                <span
                  className={`text-xs mt-1 ${isActive ? "font-medium" : ""}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default UniversitySlider;
