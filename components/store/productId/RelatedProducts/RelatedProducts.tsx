"use client";

import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  priceRange: string;
};

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "عبوة المرفأ",
    description: "بوكس المرفأ – التمر الخلاص والشيص بلمسة عصرية",
    image: '/products/HoverProducts1.png',
    priceRange: "30.00 - 50.00",
  },
  {
    id: "2",
    name: "عبوة المرفأ",
    description: "بوكس المرفأ – التمر الخلاص والشيص بلمسة عصرية",
    image: '/products/HoverProducts2.png',
    priceRange: "30.00 - 50.00",
  },
  {
    id: "3",
    name: "عبوة أم الحصن",
    description: "بوكس أم الحصن – مزيج التمر بروح عصرية",
    image: '/products/HoverProducts3.png',
    priceRange: "30.00 - 50.00",
  },
  {
    id: "4",
    name: "عبوة الاستدامة",
    description: "بوكس الاستدامة للتمور – عبوة صديقة للبيئة",
    image: '/products/HoverProducts4.png',
    priceRange: "30.00 - 50.00",
  },

];

export default function RelatedProducts() {
  return (
    <section  className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-start text-xl font-semibold text-[#8a6f49] sm:text-2xl">
          منتجات قد تعجبك
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 overflow-hidden transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <div className="px-4 pb-5">
                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                  {p.name}
                </h3>
                <p className="mb-3 text-xs text-gray-500">{p.description}</p>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-gray-700">{p.priceRange}</span>
                  <span className="text-[#8a6f49]">AED</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
