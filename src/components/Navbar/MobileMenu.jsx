import React from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { navStructure } from "../../assets/Data/naviagtionData";

const MobileMenu = ({
  isOpen,
  currentView,
  onNavigate,
  onNavigateBack,
  mobileNavHistory,
}) => {
  const renderMobileMainMenu = () => (
    <div className="py-2 space-y-1">
      {Object.keys(navStructure).map((key) => (
        <button
          key={key}
          onClick={() => onNavigate(key)}
          className="w-full flex justify-between items-center px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium"
        >
          <span>{navStructure[key].title}</span>
          <ChevronRight size={20} />
        </button>
      ))}
      <div className="pt-4 px-4 space-y-3">
        <button className="w-full bg-violet-600 text-white font-medium px-4 py-3 rounded-md">
          Sign Up / Login
        </button>
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
          <span className="text-sm font-medium text-gray-700">Need Help?</span>
          <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">
            Chat with Us
          </button>
        </div>
      </div>
    </div>
  );

  const renderMobileCategoryMenu = (categoryKey) => {
    const menuData = navStructure[categoryKey];
    if (!menuData) return null;

    return (
      <div className="py-2 h-full">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center">
          <button
            onClick={onNavigateBack}
            className="flex items-center text-violet-600"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-medium">Back</span>
          </button>
          <h2 className="ml-4 font-medium">{menuData.title}</h2>
        </div>

        <div className="mt-2 overflow-y-auto max-h-[calc(100vh-120px)]">
          {menuData.items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-b-0">
              {item.subItems?.length > 0 || item.items?.length > 0 ? (
                <button
                  onClick={() => onNavigate(item.name)}
                  className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  <span>{item.name}</span>
                  <ChevronRight size={18} />
                </button>
              ) : (
                <a
                  href="#"
                  className="block w-full px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMobileSubMenu = (categoryName) => {
    let category = null;

    // Search for the category in all navStructure sections
    for (const key in navStructure) {
      const found = navStructure[key].items.find(
        (item) => item.name === categoryName
      );
      if (found) {
        category = found;
        break;
      }
    }

    if (!category) return null;

    const subItems = category.subItems || [];
    const specialItems = category.items || [];

    return (
      <div className="py-2 h-full">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center">
          <button
            onClick={onNavigateBack}
            className="flex items-center text-violet-600"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-medium">Back</span>
          </button>
          <h2 className="ml-4 font-medium">{category.name}</h2>
        </div>

        <div className="mt-2 overflow-y-auto max-h-[calc(100vh-120px)]">
          {subItems.length > 0 &&
            subItems.map((subItem, idx) => (
              <a
                key={idx}
                href="#"
                className="block w-full px-4 py-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              >
                {subItem}
              </a>
            ))}

          {specialItems.length > 0 &&
            specialItems.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-gray-800">{item.name}</div>
                    {item.compareText && (
                      <div className="flex items-center mt-1">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                        <span className="text-sm text-violet-500">
                          {item.compareText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-black bg-opacity-20 z-40 top-52">
      <div className="bg-white h-full w-full md:w-80 fixed top-28 right-0 bottom-0 z-50 overflow-y-auto shadow-xl transition-transform duration-300 ease-in-out">
        {currentView === "main"
          ? renderMobileMainMenu()
          : Object.keys(navStructure).includes(currentView)
          ? renderMobileCategoryMenu(currentView)
          : renderMobileSubMenu(currentView)}
      </div>
    </div>
  );
};

export default MobileMenu;
