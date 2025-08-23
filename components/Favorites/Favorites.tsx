"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

// ====== Types ======
type Product = {
  id: number;
  name: string;
  desc: string;
  image: string; // /public path
  priceFrom: number;
  priceTo: number;
  currency?: "AED";
  favored?: boolean;
};

type SortBy = "popular" | "priceAsc" | "priceDesc";

// ثابت خيارات الترتيب (قيمة + نص العرض)
const SORT_OPTIONS = [
  { value: "popular",   label: "الأكثر شيوعًا" },
  { value: "priceAsc",  label: "السعر: من الأقل للأعلى" },
  { value: "priceDesc", label: "السعر: من الأعلى للأقل" },
] as const;

const isSortBy = (v: string): v is SortBy =>
  SORT_OPTIONS.some((o) => o.value === v);

// ====== Dummy data (بدّلها ببياناتك) ======
const INITIAL: Product[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: "عبوة المرفأ",
  desc: "بوكس المرفأ – السعف الخوص والخشب بلمسة إماراتية.",
  image: `/products/HoverProducts${i < 5 ? i + 1 : 1}.png`,
  priceFrom: 30,
  priceTo: 50,
  currency: "AED",
  favored: true,
}));

// ====== Icons ======
const Heart = ({ filled }: { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${filled ? "fill-current" : ""}`}>
    <path
      d="M12 21s-6.7-4.35-9.33-7.26C.65 11.51 1.11 8.5 3.2 7.02a5 5 0 0 1 6.17.66L12 9.29l2.63-1.61a5 5 0 0 1 6.17-.66c2.08 1.48 2.55 4.49.53 6.72C18.7 16.65 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.5"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" fill="currentColor" />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// AED formatter
const fmtAED = (n: number) =>
  new Intl.NumberFormat("ar-AE", { style: "currency", currency: "AED", maximumFractionDigits: 2 })
    .format(n)
    .replace(/\u00A0/g, " ");

export default function FavoritesPage() {
  const [items, setItems] = useState<Product[]>(INITIAL);
  const [sortBy, setSortBy] = useState<SortBy>("popular");
  const [gridCols, setGridCols] = useState<3 | 2 | 4>(3);

  // ترتيب بسيط
  const sorted = useMemo(() => {
    const copy = [...items];
    if (sortBy === "priceAsc") copy.sort((a, b) => a.priceFrom - b.priceFrom);
    if (sortBy === "priceDesc") copy.sort((a, b) => b.priceTo - a.priceTo);
    return copy;
  }, [items, sortBy]);

  const toggleFav = (id: number) =>
    setItems((arr) => arr.map((p) => (p.id === id ? { ...p, favored: !p.favored } : p)));

  const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    if (isSortBy(v)) setSortBy(v);
  };

  return (
    <main className="min-h-screen bg-[#faf7f3] text-[#2b2b2b]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
        {/* العنوان */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#8a6f49]">المفضلة</h1>

          {/* شريط التحكم */}
          <div className="flex items-center gap-3">
            {/* ترتيب */}
            <div className="relative">
              <select
                className="appearance-none rounded-full border border-neutral-200 bg-white pe-8 ps-3 py-2 text-sm shadow-sm focus:outline-none"
                value={sortBy}
                onChange={onSortChange}
                aria-label="الترتيب"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-neutral-500">
                <ChevronDown />
              </span>
            </div>

            {/* تبديل عدد الأعمدة */}
            <button
              onClick={() => setGridCols((c) => (c === 3 ? 2 : c === 2 ? 4 : 3))}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-neutral-50"
              title="تبديل عرض الشبكة"
            >
              <GridIcon />
              <span className="hidden sm:inline">
                {gridCols === 2 ? "عمودان" : gridCols === 3 ? "ثلاثة أعمدة" : "أربعة أعمدة"}
              </span>
            </button>
          </div>
        </div>

        {/* فاصل زخرفي بسيط */}
        <div className="mb-6 h-px w-full bg-neutral-200/70" />

        {/* الشبكة */}
        <div
          className={`grid gap-5 sm:gap-6 ${
            gridCols === 2
              ? "sm:grid-cols-2"
              : gridCols === 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {sorted.map((p) => (
            <article
              key={p.id}
              className="relative overflow-hidden rounded-2xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5"
            >
              {/* زر القلب */}
              <button
                onClick={() => toggleFav(p.id)}
                className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
                aria-label={p.favored ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
              >
                <Heart filled={p.favored} />
              </button>

              {/* صورة */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
              </div>

              {/* النص */}
              <div className="px-4 pb-5">
                <h3 className="mb-1 text-sm font-semibold text-gray-900">{p.name}</h3>
                <p className="mb-3 line-clamp-2 text-xs text-gray-500">{p.desc}</p>

                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-gray-800">
                    {fmtAED(p.priceFrom).replace(" AED", "")} - {fmtAED(p.priceTo).replace(" AED", "")}
                  </span>
                  <span className="text-[#8a6f49]">AED</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* حالة فارغة */}
        {sorted.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
            لا توجد عناصر في المفضلة بعد.
          </div>
        )}
      </div>
    </main>
  );
}
