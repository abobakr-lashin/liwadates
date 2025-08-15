'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type {
  Swiper as SwiperInstance,
  NavigationOptions,
  PaginationOptions,
} from 'swiper/types';
import {
  HiMapPin,
  HiClock,
  HiPhone,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2';

import 'swiper/css';
import 'swiper/css/pagination';

type Branch = {
  id: string | number;
  title: string;
  handle?: string;
  address: string;
  hours: string;
  phone: string;
  mapUrl?: string;
  image: string;
};

interface Props {
  activeRegion: string | number;
  data: Branch[];
}

export default function BranchSwiper({ activeRegion, data }: Props) {
  // مراجع للتحكّم بالسلايدر
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const pagRef = useRef<HTMLDivElement>(null);

  // لإدارة حالة التعطيل للأزرار
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  return (
    <div >
      {/* البطاقة البيضاء التي تحتوي السلايدر */}
      <div className="relative w-full rounded-[22px] shadow-sm overflow-hidden">
        {/* شريط التحكم أسفل يمين: سهم سابق - نقاط - سهم تالي */}
        <div className="absolute z-20 bottom-3 right-3 flex items-center gap-2 rounded-lg backdrop-blur px-2 py-1 shadow">
          <button
            ref={prevRef}
            type="button"
            className={`grid place-items-center w-8 h-8 rounded-md border border-gray-300 text-[#3b2617] hover:bg-gray-50 ${!canPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="السابق"
            aria-disabled={!canPrev}
            disabled={!canPrev}
          >
            {/* في RTL: السابق ➜ يمين */}
            <HiChevronRight className="w-5 h-5" />
          </button>

          <div ref={pagRef} className="swiper-pagination !relative !w-auto px-1" />

          <button
            ref={nextRef}
            type="button"
            className={`grid place-items-center w-8 h-8 rounded-md border border-gray-300 text-[#3b2617] hover:bg-gray-50 ${!canNext ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="التالي"
            aria-disabled={!canNext}
            disabled={!canNext}
          >
            {/* في RTL: التالي ➜ يسار */}
            <HiChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          watchOverflow
          className="w-full"
          loop={false}
          key={activeRegion} // لإعادة البناء عند تغيير المنطقة

          // اربط عناصر التحكّم قبل إنشاء السلايدر (Type-safe)
          onBeforeInit={(swiper: SwiperInstance) => {
            // Navigation
            const nav: NavigationOptions =
              typeof swiper.params.navigation === 'boolean' || !swiper.params.navigation
                ? { enabled: true }
                : (swiper.params.navigation as NavigationOptions);

            if (prevRef.current && nextRef.current) {
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
            swiper.params.navigation = nav;

            // Pagination
            const pag: PaginationOptions =
              typeof swiper.params.pagination === 'boolean' || !swiper.params.pagination
                ? { enabled: true }
                : (swiper.params.pagination as PaginationOptions);

            if (pagRef.current) {
              pag.el = pagRef.current;
              pag.clickable = true;
            }
            swiper.params.pagination = pag;
          }}

          // فعّل وحدث الملحقات + حدث حالات الأزرار
          onInit={(swiper) => {
            swiper.navigation?.init();
            swiper.navigation?.update();
            swiper.pagination?.init();
            swiper.pagination?.update();

            setCanPrev(!swiper.isBeginning);
            setCanNext(!swiper.isEnd);

            swiper.on('slideChange', () => {
              setCanPrev(!swiper.isBeginning);
              setCanNext(!swiper.isEnd);
            });
          }}
        >
          {data.map((b, idx) => (
            <SwiperSlide key={b.id}>
              {/* تخطيط: صورة يسار (على الشاشات الكبيرة) + تفاصيل يمين */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-10 items-center p-4 sm:p-6 lg:p-8">
                {/* الصورة (يسار على lg) — على الجوال تظهر أولاً */}
                <div className="order-1 lg:order-2">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[5/4] rounded-[18px] overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      sizes="(min-width:1024px) 55vw, 100vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                </div>

                {/* التفاصيل (يمين على lg) — على الجوال بعد الصورة */}
                <div className="order-2 lg:order-1 text-right">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#94684a] mb-1">
                    {b.title}
                  </h3>

                  {b.handle && (
                    <p className="text-xs text-gray-400 mb-3">{b.handle}</p>
                  )}

                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <HiMapPin className="w-5 h-5 mt-[2px] text-[#94684a]" />
                      <span>{b.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <HiClock className="w-5 h-5 mt-[2px] text-[#94684a]" />
                      <span>{b.hours}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <HiPhone className="w-5 h-5 mt-[2px] text-[#94684a]" />
                      <a className="hover:underline" dir="ltr" href={`tel:${b.phone}`}>
                        {b.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={b.mapUrl ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#d9c9be] text-[#94684a] hover:bg-[#f5efe9] px-5 py-2 text-sm"
                    >
                      الاتجاهات
                    </a>
                    <a
                      href={`tel:${b.phone}`}
                      className="rounded-full bg-[#94684a] hover:bg-[#7a533a] text-white px-5 py-2 text-sm"
                    >
                      اتصال
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
