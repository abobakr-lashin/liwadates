'use client';

import { useState, useRef, useEffect,  ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css"
import Image from 'next/image';
import swiperdata from './data';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Product {
    image: StaticImport | string;
    title: ReactNode | string;
    description: ReactNode | string;
    priceRange: ReactNode | string;
    currency: ReactNode | string;
}

export default function SwiperData({ Products, ClassNameSwiperNext, ClassNameSwiperPrev, slidesPerViewSmall, slidesPerViewbag }: swiperdata) {
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);
    return (
        <div>
            {/* سلايدر المنتجات */}
            {isReady && (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={slidesPerViewSmall}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: slidesPerViewbag,
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
                    {Products.map((product: Product, idx: number) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 h-full">
                                <div className="w-full md:w-1/3">
                                    <Image
                                        src={product?.image}
                                        alt={typeof product.title === 'string' ? product.title : String(product.title ?? '')}
                                        width={150}
                                        height={150}
                                        className="object-contain w-full h-32 md:h-40"
                                    />
                                    { }
                                </div>

                                <div className="w-full md:w-2/3 text-right">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                                    <p className="text-sm text-gray-800 font-bold">
                                        {product.priceRange}{' '}
                                        <span className="text-xs">{product.currency}</span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            )}

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
        </div>
    )
}
