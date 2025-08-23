// data/products.ts
// import type { Product } from '@/types/product';
// types/product.ts
export type ProductImage = { id: string; src: string; alt: string };

export type ProductOption =
  | { type: 'filling'; id: string; label: string }
  | { type: 'size';    id: string; label: string; note?: string };

export type ProductRating = { average: number; count: number };

export type Product = {
  id: number;
  slug: string;
  name: string;
  shortSubtitle?: string;
  description: string;
  priceAED?: number;                 // إن كان ثابت
  priceRangeAED?: { from: number; to: number }; // أو نطاق
  weight?: string;
  ribbon?: string;                   // (جديد/عرض خاص…)
  gallery: ProductImage[];           // كل صور المنتج
  options: ProductOption[];          // الحشوة/الحجم
  defaultSelections?: { filling?: string; size?: string };
  rating: ProductRating;             // التقييم
  inStock: boolean;
  img: string; // صورة رئيسية
};

export const products: Product[] = [
  {
    id: 1,
    slug: 'mixed-breakfast-box',
    name: 'صندوق تمور مشكلة (ريوق)',
    shortSubtitle: 'توليفة صباحية على نهج الأولين',
    description:
      'تشكيلة صباحية مختارة يدويًا بلمسة من الأصالة، مناسبة للضيافة اليومية وتقديم القهوة العربية.',
    priceRangeAED: { from: 39, to: 59 },
    weight: '500–600 غ',
    ribbon: 'جديد',
    img: '/products/HoverProducts1.png',
    gallery: [
      { id: '1', src: '/products/HoverProducts1.png', alt: 'صندوق ريوق – منظر أمامي' },
      { id: '2', src: '/products/HoverProducts2.png', alt: 'صندوق ريوق – محتويات' },
      { id: '3', src: '/products/HoverProducts3.png', alt: 'صندوق ريوق – جانبي' },
      { id: '4', src: '/products/HoverProducts4.png', alt: 'صندوق ريوق – تفاصيل' },
    ],
    options: [
      { type: 'filling', id: 'f1', label: 'تمر ونكاش' },
      { type: 'filling', id: 'f2', label: 'تمر وفستق' },
      { type: 'filling', id: 'f3', label: 'تمر ولوز' },
      { type: 'size', id: 's1', label: 'صغير (حتى 750 غ)' },
      { type: 'size', id: 's2', label: 'كبير (حتى 1 كغ)', note: 'الأكثر طلبًا' },
    ],
    defaultSelections: { filling: 'f1', size: 's2' },
    rating: { average: 4.6, count: 128 },
    inStock: true,
  },
  {
    id: 2,
    slug: 'premium-stuffed-nuts',
    name: 'تمور فاخرة محشوة مكسرات',
        img: '/products/HoverProducts2.png',

    description:
      'تمر فاخر محشو بفستق ولوز محمّص، يوازن بين حلاوة الماضي وذائقة اليوم.',
    priceAED: 69,
    weight: '700 غ',
    gallery: [
      { id: '1', src: '/products/HoverProducts2.png', alt: 'محشي مكسرات – أمامي' },
      { id: '2', src: '/products/HoverProducts3.png', alt: 'محشي مكسرات – قريب' },
      { id: '3', src: '/products/HoverProducts4.png', alt: 'محشي مكسرات – تقديم' },
    ],
    options: [
      { type: 'filling', id: 'pistachio', label: 'فستق' },
      { type: 'filling', id: 'almond', label: 'لوز' },
      { type: 'size', id: 's700', label: '700 غ' },
    ],
    defaultSelections: { filling: 'pistachio', size: 's700' },
    rating: { average: 4.8, count: 212 },
    inStock: true,
  },
  {
    id: 3,
    slug: 'engraved-gift-box',
    name: 'صندوق هدايا محفور',
        img: '/products/HoverProducts3.png',

    description:
      'صندوق أنيق بحفر تراثي يحفظ التمور بطابع جميل، هدية لائقة بالمناسبات.',
    priceAED: 99,
    weight: '1 كغ',
    ribbon: 'عرض خاص',
    gallery: [
      { id: '1', src: '/products/HoverProducts3.png', alt: 'هدايا محفور – غطاء' },
      { id: '2', src: '/products/HoverProducts1.png', alt: 'هدايا محفور – داخل' },
    ],
    options: [
      { type: 'size', id: 's1kg', label: '1 كغ' },
    ],
    defaultSelections: { size: 's1kg' },
    rating: { average: 4.5, count: 76 },
    inStock: true,
  },
  {
    id: 4,
    slug: 'dark-chocolate-dates',
        img: '/products/HoverProducts4.png',

    name: 'تمور بالشكولاتة الداكنة',
    description:
      'حبات تمر طازجة مغموسة بشكولاتة داكنة متوازنة، تجمع بين أصالة التمر ونكهة معاصرة.',
    priceAED: 59,
    weight: '500 غ',
    gallery: [
      { id: '1', src: '/products/HoverProducts4.png', alt: 'تمر بالشكولاتة – عرض' },
      { id: '2', src: '/products/HoverProducts2.png', alt: 'تمر بالشكولاتة – قطعة' },
    ],
    options: [
      { type: 'size', id: 's500', label: '500 غ' },
    ],
    rating: { average: 4.7, count: 94 },
    inStock: true,
  },
  {
    id: 5,
    slug: 'classic-dates-box',
    name: 'علبة تمور كلاسيكية',
        img: '/products/HoverProducts1.png',

    description:
      'علبة عملية بطابع تقليدي، مناسبة للاستخدام اليومي وحفظ التمر على هيئة مرتبة.',
    priceAED: 39,
    weight: '450 غ',
    gallery: [
      { id: '1', src: '/products/HoverProducts1.png', alt: 'علبة كلاسيكية – أمامي' },
      { id: '2', src: '/products/HoverProducts2.png', alt: 'علبة كلاسيكية – داخل' },
    ],
    options: [{ type: 'size', id: 's450', label: '450 غ' }],
    rating: { average: 4.3, count: 51 },
    inStock: true,
  },
  {
    id: 6,
    slug: 'black-hospitality-collection',
        img: '/products/HoverProducts3.png',

    name: 'مجموعة الضيافة السوداء',
    description:
      'تشكيلة فاخرة لتقديم الضيافة بوقار، تُقدّم مع القهوة والهيل.',
    priceAED: 129,
    weight: 'متنوع',
    gallery: [
      { id: '1', src: '/products/HoverProducts2.png', alt: 'مجموعة الضيافة – أمامي' },
      { id: '2', src: '/products/HoverProducts3.png', alt: 'مجموعة الضيافة – محتوى' },
      { id: '3', src: '/products/HoverProducts4.png', alt: 'مجموعة الضيافة – تقديم' },
    ],
    options: [
      { type: 'size', id: 'sVar', label: 'أحجام متنوعة' },
    ],
    rating: { average: 4.9, count: 63 },
    inStock: false, // مثال للنفاد
  },
];
