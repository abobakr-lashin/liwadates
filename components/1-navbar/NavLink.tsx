// components/Navbar.tsx
"use client";
import Image from "next/image";
import { navLinks } from "./nav.config";
import MegaMenu from "./MegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import IconCard from "./IconCard";
import Frame from "@/public/images/Frame.svg";



const Navbar: React.FC = () => {



  return (
    <nav className="fixed z-100 w-full " >
 <main className="flex  items-center justify-between bg-white border-b-2 border-gray-200  px-12">
       <div>
        <Image className="p-1" src="/images/logo.svg" alt="IWJ DATES Logo" width={100} height={100} />
      </div>

      <div className="flex items-center gap-6">
        {navLinks.map(link => (
          <div key={link.href} className="relative group  ">
            <a
              href={link.href}
              className={`no-underline  p-2 gap-3 font-bold text-lg ${
                link.label === "الرئيسية"
                  ? "text-[#A97C50] font-bold"
                  : "text-gray-700 font-normal"
              } group-hover:text-[#A97C50]`}
            >
              {link.label}
            </a>
            <div className="p-0">
            {link.megaMenu && <MegaMenu sections={link.megaMenu} />}

            </div>
          </div>

        ))}
      </div>

       <div className="flex items-center gap-8">
        <button>
  <Image
  src={Frame}
  alt="Image"
  width={50}
  height={50}

  />
</button>
<IconCard/>
      <div className="relative group flex items-center gap-1 cursor-pointer">

<LanguageSwitcher/>
        </div>

<button className="relative cursor-pointer overflow-hidden px-14 py-3
 rounded-full bg-[#9b643a] text-white font-medium group active:scale-95 transition-transform">
  <span className="relative z-10">تواصل معنا</span>
  <span
    className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
               transform -translate-x-full -translate-y-full -skew-x-1
               opacity-0 transition-all duration-300 ease-out
               group-hover:translate-x-0 group-hover:translate-y-0
               group-hover:opacity-100 rounded-full coursor-pointer"
  ></span>
</button>


      <span className="flex items-center bg-[#E5D6C5] rounded-full w-12 h-12 justify-center">
        <svg width="38" height="38" fill="#A97C50" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
        </svg>
      </span>
    </div>

 </main>
    </nav>
  );
};

export default Navbar;