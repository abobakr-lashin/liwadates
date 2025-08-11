'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import products from "./data";

export default function HoverProductsSlider() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 text-right font-sans">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#34241A] mb-2">
            مجموعة من أجود الهدايا
          </h2>
          <p className="text-[#727476]">
            نمتلك مجموعة من العلامات التجارية نخلق بها أعلى جودة من المنتجات
          </p>
        </div>

        {/* السلايدر */}
        {isReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            navigation={{
              nextEl: '.custom-next-2',
              prevEl: '.custom-prev-2',
            }}
            pagination={{
              el: paginationRef.current!,
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-2xl shadow-md overflow-hidden flex flex-col h-full bg-white max-w-xs mx-auto transition-all duration-300">
                  <div
                    className="relative h-72 bg-white flex justify-center items-center"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={300}
                      className={`object-contain transition-opacity duration-300 absolute max-h-48 ${
                        hoveredIdx === idx ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <Image
                      src={product.hoverImage}
                      alt={product.title + ' Hover'}
                      width={500}
                      height={300}
                      className={`object-contain transition-opacity duration-300 absolute max-h-48 ${
                        hoveredIdx === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>

                  <div className="bg-[#ffffff] text-black text-right p-6 flex flex-col h-full">
                    <h3 className="text-base font-bold mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center text-sm font-bold mt-auto">
                      <span className="text-gray-800">{product.priceRange}</span>
                      <span className="text-xs text-[#704E38]">{product.currency}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* الأسهم + النقاط تحت */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-4 bg-[#f5f5f5] border border-gray-300 rounded-full px-6 py-2">
            <button className="custom-prev-2 text-gray-700 hover:text-yellow-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* النقاط هنا */}
            <div ref={paginationRef} className="custom-pagination-1 flex gap-2"></div>

            <button className="custom-next-2 text-gray-700 hover:text-yellow-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
