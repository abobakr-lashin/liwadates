'use client';

import Image from 'next/image';
import Link from 'next/link';

type Branch = {
  id: string;
  name: string;
  // نسبة مئوية من عرض/طول الحاوية لتموضع مرن
  x: number; // left in %
  y: number; // top in %
  mapUrl?: string; // رابط خرائط جوجل (اختياري)
};

const branches: Branch[] = [
  { id: 'al-ain',   name: 'فرع العين',       x: 43, y: 48, mapUrl: 'https://maps.google.com?q=Al+Ain' },
  { id: 'liwa',     name: 'فرع ليوا',        x: 72, y: 53, mapUrl: 'https://maps.google.com?q=Liwa' },
  { id: 'dubai-mar',name: 'فرع دبي مارينا',  x: 27, y: 84, mapUrl: 'https://maps.google.com?q=Dubai+Marina' },
  { id: 'abudhabi', name: 'فرع ابوظبي',      x: 49, y: 86, mapUrl: 'https://maps.google.com?q=Abu+Dhabi' },
  { id: 'zayed',    name: 'فرع زايد',     x: 69, y: 97, mapUrl: 'https://maps.google.com?q=Zayed' },
];

export default function BranchesMap() {
  return (
    <section dir="rtl" className="relative mx-auto max-w-7xl px-4 py-10">
      <div className="relative overflow-hidden rounded-2xl">
        {/* صورة الخريطة */}
        <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]">
          {/* ضع صورتك في public/images/map.jpg أو غيّر المسار هنا */}
          <Image
            src="/Our_stores/map.png"
            alt="خريطة فروعنا"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          {/* طبقة تغميق لطرفي الصورة مثل المعاينة */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
          <div className="pointer-events-none absolute inset-0 bg-black/20" />

          {/* الدبابيس */}
          {branches.map((b) => {
            const Marker = (
              <div
                className="group absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${b.x}%`, top: `${b.y}%` }}
                key={b.id}
              >
                {/* أيقونة الدبوس */}
                <div className="relative grid place-items-center">
                  <span className="absolute inset-0 -z-10 rounded-full bg-black/15 blur-md" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-700 text-white shadow-lg ring-4 ring-white/20">
                    {/* نقطة داخلية */}
                    <span className="block h-2.5 w-2.5 rounded-full bg-white" />
                  </div>
                </div>

                {/* التسمية */}
                <div className="mt-2 w-max max-w-[60vw] rounded-md bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 shadow backdrop-blur-sm">
                  {b.name}
                </div>
              </div>
            );

            return b.mapUrl ? (
              <Link
                key={b.id}
                href={b.mapUrl}
                target="_blank"
                aria-label={b.name}
                className="absolute"
                style={{ left: `${b.x}%`, top: `${b.y}%` }}
              >
                {/* نعيد نفس المحتوى لكن داخل الرابط */}
                <div className="-translate-x-1/2 -translate-y-full">
                  <div className="relative grid place-items-center">
                    <span className="absolute inset-0 -z-10 rounded-full bg-black/15 blur-md" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-700 text-white shadow-lg ring-4 ring-white/20 group-hover:bg-amber-800 transition-colors">
                      <span className="block h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="mt-2 w-max max-w-[60vw] rounded-md bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 shadow">
                    {b.name}
                  </div>
                </div>
              </Link>
            ) : (
              Marker
            );
          })}
        </div>
      </div>
    </section>
  );
}
