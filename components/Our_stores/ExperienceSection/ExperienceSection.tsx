'use client';

import Image from 'next/image';
import { FC } from 'react';

type Benefit = { id: number; text: string };

const benefits: Benefit[] = [
  { id: 1, text: 'تشكيلة منتقاة بعناية من المنتجات الفاخرة' },
  { id: 2, text: 'هدايا مُصمّمة بأسماء العملاء وشعاراتهم' },
  { id: 3, text: 'خدمة تخصيص الهدايا وتجهيزها داخل المتجر' },
  { id: 4, text: 'عوائد مجزية لأعضاء برنامج الولاء' },
  { id: 5, text: 'الطلب المسبق وتجهيز الطلب فور وصولك' },
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 flex-none"
  >
    <path
      d="M20 6L9 17l-5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExperienceSection: FC = () => {
  return (
    <section
      className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      aria-labelledby="experience-title"
    >
      {/* subtle background shape */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/60 to-white" />

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* Right: copy + card */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-neutral-500">ما الذي يميز تجربة الشراء من متاجرنا؟</p>

          <h2 id="experience-title" className="text-2xl font-extrabold leading-snug text-neutral-900 sm:text-3xl">
            <span className="text-neutral-700">&quotليست مجرد زيارة...</span>{' '}
            <span className="text-amber-700">بل تجربة إماراتية متكاملة&quot</span>
          </h2>

          {/* benefits card */}
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-amber-700">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="font-semibold">المزايا</span>
            </div>

            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="mt-0.5 text-amber-600">
                    <CheckIcon />
                  </span>
                  <span className="text-[15px] leading-7 text-neutral-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Left: shop image */}
        <div className="relative">
          <div className="rounded-3xl bg-amber-100/40 p-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              {/* Put your image in /public/images/store.jpg or change src */}
              <Image
                src="/Our_stores/ExperienceSection.png"
                alt="صورة من داخل المتجر"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          {/* small “base” shadow like the screenshot */}
          <div className="mx-auto mt-4 h-3 w-5/6 rounded-full bg-neutral-200/70 blur-sm" />
        </div>


      </div>
    </section>
  );
};

export default ExperienceSection;
