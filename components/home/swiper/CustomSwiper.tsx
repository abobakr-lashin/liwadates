'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Service {
  title: string;
  title2: string;
  description: string;
  icon: React.ReactNode;
}

interface Props {
  services: Service[];
  slidesPerViewSmall: number;
  slidesPerViewLarge: number;
  ClassNameSwiperNext: string;
  ClassNameSwiperPrev: string;
}

export default function ServicesSwiper({
  services,
  slidesPerViewSmall,
  slidesPerViewLarge,
  ClassNameSwiperNext,
  ClassNameSwiperPrev
}: Props) {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, [0]);

  return (

<>
        {isReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={slidesPerViewSmall}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: slidesPerViewLarge,
              },
            }}
            pagination={{
              el: paginationRef.current!,
              clickable: true,

            }}
            navigation={{
              nextEl: `.${ClassNameSwiperNext}`,
              prevEl: `.${ClassNameSwiperPrev}`,
            }}
            className="overflow-visible"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white shadow-md rounded-lg p-6 min-h-[180px] flex flex-col justify-center">
                  <h3 className="flex  items-center gap-2 font-semibold text-lg mb-3">
                    <span className="text-[#c1954f]">{service.icon}</span>
                    <span className='text-[#704E38] text-2xl'>{service.title}</span>
                    <span>{service.title2}</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* أزرار التنقل */}
             {/* الأسهم المخصصة */}
            <div className="mt-6 flex justify-center">
                <div className="flex p-2 items-center gap-4 bg-[#FAF3EE] border border-gray-200 rounded-full px-6 py-2">
                    <button className={`${ClassNameSwiperNext}  text-gray-700 hover:text-yellow-600 transition`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* النقاط هنا */}
                    <div ref={paginationRef} className="custom-pagination-1 flex gap-2"></div>

                    <button className={`${ClassNameSwiperPrev} text-gray-700 hover:text-yellow-600 transition`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>


</>


  );
}
