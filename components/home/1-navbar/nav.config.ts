// lib/nav.config.ts
export interface MegaMenuSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface NavLink {
  label: string;
  href: string;
  megaMenu?: MegaMenuSection[];
}

export const navLinks: NavLink[] = [
  // { label: "الرئيسية", href: "/" },
   { label: "المتجر", href: "/store" },
     { label: " هدايا الؤسسات", href: "/Corporate_gifts" },
    //  { label: "خدمات قطاع الأعمال", href: "/business" },
       {
    label: "خدمات قطاع الأعمال",
    href: "/business",
    
  },
  { label: " محلاتنا", href: "/Our_stores" },
  { label: "خدمات المزارعين", href: "/Farmer_services" },




];
