 type Branch = {
  id: string;
  region: "auh" | "aln" | "dxb";
  title: string;
  handle?: string;
  address: string;
  hours: string;
  phone: string;
  mapUrl?: string;
  image: string; // من public/
};

export const REGIONS: { id: "all" | Branch["region"]; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "auh", label: "أبوظبي" },
  { id: "aln", label: "العين" },
  { id: "dxb", label: "دبي" },
];

export const BRANCHES: Branch[] = [
  {
    id: "auh-main",
    region: "auh",
    title: "الفرع الرئيسي – ليوا/الظفرة",
    handle: "@albalahi",
    address: "ليوا الصناعية – مجمع الأسواق – قرب نادي ليوا الرياضي",
    hours: "يومياً: 10 ص – 10 م",
    phone: "025500222",
    mapUrl: "#",
    image: "/store/sweprHero.jpg",
  },
  {
    id: "auh-kh",
    region: "auh",
    title: "أبوظبي – مدينة خليفة",
    handle: "@albalahi",
    address: "شارع 32 – بجوار مركز الخدمات الحكومية",
    hours: "السبت–الخميس: 9 ص – 10 م | الجمعة: 2 م – 10 م",
    phone: "025501111",
    mapUrl: "#",
    image: "/store/sweprHero.jpg",
  },
  {
    id: "aln-center",
    region: "aln",
    title: "العين – وسط المدينة",
    handle: "@albalahi",
    address: "مجمع العين سنتر – بوابة 3",
    hours: "يومياً: 10 ص – 10 م",
    phone: "037700333",
    mapUrl: "#",
    image: "/store/sweprHero.jpg",
  },
  {
    id: "aln-center1",
    region: "aln",
    title: "العين – وسط المدينة",
    handle: "@albalahi",
    address: "مجمع العين سنتر – بوابة 3",
    hours: "يومياً: 10 ص – 10 م",
    phone: "037700333",
    mapUrl: "#",
    image: "/store/sweprHero.jpg",
  },
  {
    id: "aln-center2",
    region: "dxb",
    title: "العين – وسط المدينة",
    handle: "@albalahi",
    address: "مجمع العين سنتر – بوابة 3",
    hours: "يومياً: 10 ص – 10 م",
    phone: "037700333",
    mapUrl: "#",
    image: "/store/sweprHero.jpg",
  },
  {
    id: "aln-center3",
    region: "dxb",
    title: "العين – وسط المدينة",
    handle: "@albalahi",
    address: "مجمع العين سنتر – بوابة 3",
    hours: "يومياً: 10 ص – 10 م",
    phone: "037700333",
    mapUrl: "#",
    image: "/store/sweprHero.jpg",
  },
  {
    id: "aln-center4",
    region: "dxb",
    title: "العين – وسط المدينة",
    handle: "@albalahi",
    address: "مجمع العين سنتر – بوابة 3",
    hours: "يومياً: 10 ص – 10 م",
    phone: "037700333",
    mapUrl: "#",
    image: "/store/sweprHero.jpg",
  },
];
