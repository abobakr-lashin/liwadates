// components/MegaMenu.tsx
import React from "react";
import { MegaMenuSection } from "./nav.config";

interface Props {
  sections: MegaMenuSection[];
}

const MegaMenu: React.FC<Props> = ({ sections }) => (
  <div className="absolute w-2xs mt-1   bg-white border
  delay-75 border-gray-200 rounded-lg shadow-lg opacity-0
   group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
    <div className="p-6 grid grid-cols-2 md:grid-cols-1 gap-6 ">
      {sections.map(section => (
        <div key={section.title}>
          <div className="font-bold text-[#A97C50] mb-2">{section.title}</div>
          <ul className="w-full  ">
            {section.links.map(item => (
              <li key={item.href} className="w-full p-2 hover:bg-gray-100">
                <a href={item.href} className=" w-full center px-2 py-1 rounded text-gray-700">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default MegaMenu;
