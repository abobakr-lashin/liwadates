'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

interface Product {
  title: string;
  description: string;
  priceRange: string;
  currency: string;
  image: string;
}

const brandLogos = [
  '/brands/Logos.png',
  '/brands/Logos1.png',
  '/brands/Logos2.png',
  '/brands/Logos3.png',
];

const products: Product[] = [
  {
    title: 'تمريد أملو',
    description: 'مزيج التمر واللوز والزيت الطبيعي بمذاق لذيذ ومغذي.',
    priceRange: '30.00 - 50.00',
    currency: 'AED',
    image: '/products/products1.png',
  },
  {
    title: 'تمريد أملو',
    description: 'جرعة تمر للذواقة. الأفضل لكل وجبة صحية.',
    priceRange: '30.00 - 50.00',
    currency: 'AED',
    image: '/products/products2.png',
  },
  {
    title: 'تمريد أملو',
    description: 'مزيج التمر واللوز والزيت الطبيعي بمذاق لذيذ ومغذي.',
    priceRange: '30.00 - 50.00',
    currency: 'AED',
    image: '/products/products1.png',
  },
  {
    title: 'تمريد أملو',
    description: 'جرعة تمر للذواقة. الأفضل لكل وجبة صحية.',
    priceRange: '30.00 - 50.00',
    currency: 'AED',
    image: '/products/products2.png',
  },
];

export default function BrandProducts() {
  useEffect(() => {
    // تأكد من إعادة تهيئة Swiper عندما يتم تحميل المكون (لأسهم مخصصة)
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 text-right font-sans">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            علاماتنا التجارية
          </h2>
          <p className="text-gray-600">
            نمتلك مجموعة من العلامات التجارية نخلق بها أعلى جودة من المنتجات
          </p>
        </div>

        {/* الشعارات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {brandLogos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-lg flex items-center justify-center h-24"
            >
              <Image
                src={logo}
                alt={`logo-${idx}`}
                width={520}
                height={550}
                className="object-contain "
              />
            </div>
          ))}
        </div>

        {/* سلايدر المنتجات */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          className="overflow-visible"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 h-full">
                <div className="w-full md:w-1/3">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={150}
                    height={150}
                    className="object-contain w-full h-32 md:h-40"
                  />
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

        {/* الأسهم المخصصة */}
        <div className="mt-6 flex justify-center">
          <div className="flex p-2 items-center gap-4 bg-[#FAF3EE] border border-gray-200 rounded-full px-6 py-2">
            <button className="custom-prev  cursor-pointer text-black hover:text-brown-600 transition">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>            </button>
            <button className="custom-next cursor-pointer text-black hover:text-brown-600 transition">


                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
