'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import products from './data';
import './style.css';

export default function FeaturedProducts() {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // نضمن أن العنصر ظهر في الـ DOM
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full py-16 px-4 font-sans bg-[#f5f5f5]">
      <div className="relative m-auto z-10 max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="flex justify-between w-full mb-10">
        <div>  <h2 className="text-3xl font-bold mb-2 text-[#94684a]">أبرز منتجاتنا</h2>
          <p className="text-sm">تمور طبيعية ومنتجات مستوحاة من التراث</p>
</div>
             <div className="flex justify-end mb-3">
          <button className="relative cursor-pointer overflow-hidden px-6 py-3 rounded-full font-medium group active:scale-95 transition-transform text-[#6c6e70]">
            <span className="relative z-10">عرض المزيد</span>
          </button>
        </div>
        </div>



        {/* Swiper */}
        {isMounted && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.custom-next-1',
              prevEl: '.custom-prev-1',
            }}
            pagination={{
              el: paginationRef.current!,
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-2xl shadow-md overflow-hidden flex flex-col h-full max-w-sm mx-auto">
                  <div className="bg-white flex items-center justify-center h-75 p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white text-black text-right p-6 flex flex-col h-full">
                    <h3 className="text-base font-bold mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center text-sm font-bold mt-auto">
                      <span className="text-gray-800">{product.priceRange}</span>
                      <span className="text-xs text-gray-500">{product.currency}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* النقاط + الأسهم تحت */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-4 bg-white/10 border-amber-50 justify-between w-50 rounded-full px-6 py-2">
            <button className="custom-prev-1 hover:text-yellow-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* هنا بنربط العنصر بالـ ref */}
            <div ref={paginationRef} className="custom-pagination-1 flex gap-2"></div>

            <button className="custom-next-1 hover:text-yellow-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
