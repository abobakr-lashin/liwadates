"use client";

import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"
import Image from "next/image";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string; // URL or /public path
  text: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

const DATA: Testimonial[] = [
  {
    id: "1",
    name: "محمد أحمد",
    role: "زبون",
    avatar: "/clients/client1.png",
    text:
      "رحلة شراء مميزة، تغليف جميل، والتوصيل كان سريع. جودة التمور رائعة والنكهات أصيلة. أنصح بالتجربة.",
    rating: 5,
  },
  {
    id: "2",
    name: "سعيد الكعبي",
    role: "زبون",
    avatar: "/clients/client2.png",
    text:
      "خدمة محترفة وتواصل ممتاز. التنوع في المنتجات ممتاز وأسعار مناسبة مقارنة بالجودة المقدّمة.",
    rating: 5,
  },
  {
    id: "3",
    name: "علي المنصوري",
    role: "زبون",
    avatar: "/clients/client3.png",
    text:
      "الطلب كان سلس والتعبئة مرتبة بشكل راقٍ. الطعم لذيذ جدًا ويلبي الضيافة الإماراتية.",
    rating: 5,
  },
  {
    id: "4",
    name: "علي المنصوري",
    role: "زبون",
    avatar: "/clients/client3.png",
    text:
      "الطلب كان سلس والتعبئة مرتبة بشكل راقٍ. الطعم لذيذ جدًا ويلبي الضيافة الإماراتية.",
    rating: 5,
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${n} من 5 نجوم`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${
            i < n ? "fill-yellow-400" : "fill-gray-300"
          }`}
          aria-hidden
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span className="ms-2 text-[11px] text-gray-500">14 رأي</span>
    </div>
  );
}

export default function Testimonials() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section
      className="relative w-full bg-[url('/patterns/arabesque.svg')] bg-right bg-no-repeat py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-end text-xl font-semibold text-[#8a6f49] sm:text-2xl">
          آراء العملاء
        </h2>

        <div className="relative w-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, A11y]}
            onSwiper={(s) => (swiperRef.current = s)}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".testi-prev",
              nextEl: ".testi-next",
            }}
            className="!pb-12"
          >
            {DATA.map((item) => (
              <SwiperSlide key={item.id}>
                <article className="rounded-2xl w-full p-10 bg-white/95 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                  <header className="mb-3 flex items-center gap-3">
                    <Image
                      width={40}
                      height={40}
                      src={item.avatar}
                      alt={item.name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow"
                    />
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </header>

                  <p className="mb-4 line-clamp-4 text-[13px] leading-6 text-gray-600">
                    {item.text}
                  </p>

                  <Stars n={item.rating ?? 5} />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* center navigation under the carousel */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-center  space-x-3 gap-3">
            <button
              className="testi-prev  pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50"
              aria-label="السابق"
            >
              {/* Right-facing chevron (because RTL) */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  d="M10 7l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div></div>
            <button
              className="testi-next pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50"
              aria-label="التالي"
            >
              {/* Left-facing chevron (because RTL) */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  d="M14 7l-5 5 5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
