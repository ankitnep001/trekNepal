import { navbarMenu } from "@data/navbarMenu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ResponsiveNavMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="flex flex-col gap-y-5 w-full text-white text-2xl">
      {navbarMenu.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <li key={index} className="border-b border-gray-300 pb-2 w-full">
            <div className="flex justify-between items-center w-full">
              <button className="w-full text-left">{item.label}</button>

              {item.subMenu && (
                <button onClick={() => handleToggle(index)}>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Submenu */}
            {item.subMenu && isOpen && (
              <ul className="mt-2 ml-2 text-base text-gray-200 space-y-1">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <button className="text-left w-full">{subItem}</button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ResponsiveNavMenu;
