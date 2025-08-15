"use client";

import { useState } from "react";

type FilterSectionProps = {
  title: string;
  children?: React.ReactNode;
};

function FilterSection({ title, children }: FilterSectionProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 pb-3 w-full ">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-2 text-sm font-medium"
      >
        {title}
        <span className="transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▼
        </span>
      </button>
      {open && <div className="mt-2 text-sm text-gray-700 space-y-1">{children}</div>}
    </div>
  );
}

export default function FilterSidebar() {
  const [price, setPrice] = useState([35, 450]);

  return (
<div className="">
      <aside className="card p-4 space-y-4 sticky top-4 w-full max-w-xs m-auto h-auto  ">
      <h2 className="text-lg font-bold border-b border-gray-300 pb-2">الفلترة</h2>

      {/* فلترة السعر */}
      <div>
        <div className="text-sm font-medium mb-2">السعر</div>
        <input
          type="range"
          min={35}
          max={450}
          value={price[1]}
          onChange={(e) => setPrice([price[0], Number(e.target.value)])}
          className="w-full accent-amber-700"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>{price[1]} USD</span>
          <span>{price[0]} USD</span>
        </div>
      </div>

      {/* التصنيفات */}
      <FilterSection title="التصنيفات">
        <label className="block cursor-pointer">
          <input type="checkbox" className="me-2" /> تمور
        </label>
        <label className="block cursor-pointer">
          <input type="checkbox" className="me-2" /> تمر محشو
        </label>
        <label className="block cursor-pointer">
          <input type="checkbox" className="me-2" /> الهدايا
        </label>
        <label className="block cursor-pointer">
          <input type="checkbox" className="me-2" /> منتجات الطعام
        </label>
      </FilterSection>

      <FilterSection title="العلامة التجارية" />
      <FilterSection title="حالة التمر" />
      <FilterSection title="أنواع التمر" />
      <FilterSection title="خامات التغليف" />
      <FilterSection title="الأحجام" />
      <FilterSection title="الحشوات" />
    </aside>
</div>
  );
}
