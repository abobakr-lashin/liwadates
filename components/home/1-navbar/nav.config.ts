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
    megaMenu: [
      {
        title: "التمور",
        links: [
          { label: "خدمات قطاع الأعمال", href: "/business" },
          // { label: "مراحل الخدمة", href: "/Service_Stages" },
          { label: "تمور محشوة", href: "/products/date/stuffed" },
        ],
      },
    ],
  },
  { label: " محلاتنا", href: "/Our_stores" },
  { label: "خدمات المزارعين", href: "/Farmer_services" },


  {
    label: "خدماتنا",
    href: "/services",
    megaMenu: [
      {
        title: "الخدمات الرقمية",
        links: [
          { label: "تحليل زراعي", href: "/services/digital/analysis" },
          { label: "نظام الري الذكي", href: "/services/digital/irrigation" },
        ],
      },
      {
        title: "استشارات",
        links: [
          { label: "الاستشارات الزراعية", href: "/services/consulting/agriculture" },
        ],
      },
    ],
  },

];
