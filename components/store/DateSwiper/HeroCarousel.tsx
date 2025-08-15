"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance, NavigationOptions, PaginationOptions } from "swiper/types";
import Image from "next/image";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

type Props = { controlsClassName?: string };

const slides = [
  { id: 1, title: "عروض تمور ليوا", text: "عرض تمور ليوا عالية الجودة بتصميم أنيق وبسيط...", img: "/store/sweprHero.jpg" },
  { id: 2, title: "هدايا فاخرة",  text: "عرض تمور ليوا عالية الجودة بتصميم أنيق وبسيط...", img: "/store/sweprHero.jpg" },
];

export default function HeroCarousel({
  controlsClassName = "bottom-3 left-1/2 -translate-x-1/2 sm:bottom-5 sm:right-5 sm:translate-x-0",
}: Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const pagRef  = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full max-w-[100vw] overflow-hidden rounded-3xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
        onBeforeInit={(swiper: SwiperInstance) => {
          // تحضير Navigation بشكل typesafe
          const nav: NavigationOptions =
            typeof swiper.params.navigation === "boolean" || !swiper.params.navigation
              ? { enabled: true }
              : (swiper.params.navigation as NavigationOptions);

          nav.prevEl = prevRef.current as unknown as HTMLElement;
          nav.nextEl = nextRef.current as unknown as HTMLElement;
          swiper.params.navigation = nav;

          // تحضير Pagination بشكل typesafe
          const pag: PaginationOptions =
            typeof swiper.params.pagination === "boolean" || !swiper.params.pagination
              ? { enabled: true }
              : (swiper.params.pagination as PaginationOptions);

          pag.el = pagRef.current as unknown as HTMLElement;
          pag.clickable = true;
          swiper.params.pagination = pag;
        }}
        onSwiper={(swiper) => {
          // بعد ما DOM يجهز، نعيد تهيئة الملحقات (حل React/StrictMode)
          setTimeout(() => {
            if (prevRef.current && nextRef.current) {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
            if (pagRef.current) {
              swiper.pagination.destroy();
              swiper.pagination.init();
              swiper.pagination.update();
            }
          });
        }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id} className="!w-full">
            <div className="relative w-full h-full">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />

              {/* تدرّج لقراءة أوضح */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/35 to-transparent" />

              {/* على الموبايل وسط، وعلى الكبير يمين — مع حد أقصى يمنع التمدد */}
              <div className="absolute inset-0 flex items-center justify-center md:justify-end p-4 md:p-10">
                <div className="w-[min(92vw,40rem)] md:w-auto max-w-xl bg-black/30 backdrop-blur-sm border border-white/25 rounded-xl p-4 sm:p-5 md:p-6 text-white text-right">
                  <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-1 sm:mb-2">{s.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">{s.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* شريط التحكم */}
      <div
        className={
          "absolute z-20 flex items-center gap-2 rounded-lg border border-white/30 bg-black/35 backdrop-blur-sm px-2 py-1 " +
          controlsClassName
        }
        style={{ maxWidth: "calc(100% - 1rem)" }}
      >
        <button
          ref={prevRef}
          className="grid place-items-center w-9 h-9 rounded-md border border-white/40 text-white hover:bg-white/10"
          aria-label="السابق"
          title="السابق"
        >
          <HiOutlineChevronRight size={18} />
        </button>

        <div ref={pagRef} className="hero-pagination swiper-pagination !static !w-auto  px-1" />

        <button
          ref={nextRef}
          className="grid place-items-center w-9 h-9 rounded-md border border-white/40 text-white hover:bg-white/10"
          aria-label="التالي"
          title="التالي"
        >
          <HiOutlineChevronLeft size={18} />
        </button>
      </div>
    </div>
  );
}
