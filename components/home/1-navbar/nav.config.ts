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
  { label: "الرئيسية", href: "/" },
   { label: "المتجر", href: "/store" },
     { label: " هدايا الؤسسات", href: "/business1" },
     { label: "خدمات قطاع الأعمال", href: "/business" },
  { label: " محلاتنا", href: "/Farmer_services1" },
  { label: "خدمات المزارعين", href: "/Farmer_services" },

  // {
  //   label: "منتجاتنا",
  //   href: "/products",
  //   megaMenu: [
  //     {
  //       title: "التمور",
  //       links: [
  //         { label: "تمور فاخرة", href: "/products/date/premium" },
  //         { label: "تمور عضوية", href: "/products/date/organic" },
  //         { label: "تمور محشوة", href: "/products/date/stuffed" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: "خدماتنا",
  //   href: "/services",
  //   megaMenu: [
  //     {
  //       title: "الخدمات الرقمية",
  //       links: [
  //         { label: "تحليل زراعي", href: "/services/digital/analysis" },
  //         { label: "نظام الري الذكي", href: "/services/digital/irrigation" },
  //       ],
  //     },
  //     {
  //       title: "استشارات",
  //       links: [
  //         { label: "الاستشارات الزراعية", href: "/services/consulting/agriculture" },
  //       ],
  //     },
  //   ],
  // },

];
