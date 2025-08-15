'use client';

import { FC, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { src: '/Our_stores/store1.png', alt: 'رفوف منتجات وهدايا' },
  { src: '/Our_stores/store2.png', alt: 'ركن استقبال أنيق' },
  { src: '/Our_stores/store3.png', alt: 'منتجات فاخرة على الرفوف' },
  { src: '/Our_stores/store4.png', alt: 'منظر شامل للمتجر' },
];

const StoreGallery: FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  // اربط الأزرار بعد ما يجهز الـ Swiper فعلاً
  useEffect(() => {
    const swiper = swiperRef.current as any;
    if (!swiper) return;

    // Navigation
    if (prevRef.current && nextRef.current && swiper.navigation) {
      swiper.params.navigation = {
        ...(typeof swiper.params.navigation === 'object' ? swiper.params.navigation : {}),
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
      swiper.navigation.init?.();
      swiper.navigation.update?.();
    }

    // Pagination
    if (paginationRef.current && swiper.pagination) {
      swiper.params.pagination = {
        ...(typeof swiper.params.pagination === 'object' ? swiper.params.pagination : {}),
        el: paginationRef.current,
        clickable: true,
      };
      swiper.pagination.init?.();
      swiper.pagination.update?.();
    }
  }, []);

  return (
    <section dir="rtl" className="relative mx-auto max-w-7xl px-4 py-20">
      <h2 className="mb-8 text-center text-xl font-semibold text-neutral-900 sm:text-2xl">
        معرض صور محلاتنا
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        loop
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        onSwiper={(s) => (swiperRef.current = s)}
        className="relative"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="h-64 w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* الشريط السفلي */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-4 bg-[#f5f5f5] border border-gray-300 rounded-full px-6 py-2">
          {/* السابق */}
          <button
            ref={prevRef}
            type="button"
            className="text-gray-700 hover:text-yellow-600 transition pointer-events-auto"
            aria-label="السابق"
            title="السابق"
          >
            {/* في RTL السهم لليمين يعني السابق */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* النقاط */}
          <div ref={paginationRef} className="flex items-center gap-2" />

          {/* التالي */}
          <button
            ref={nextRef}
            type="button"
            className="text-gray-700 hover:text-yellow-600 transition pointer-events-auto"
            aria-label="التالي"
            title="التالي"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreGallery;
