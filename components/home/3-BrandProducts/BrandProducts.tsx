'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Products from "./data"
import { brandLogos } from "./data"
import SwiperData from '../swiper/Swiper';

export default function BrandProducts() {


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
        <SwiperData Products={Products} ClassNameSwiperNext="custom-next" ClassNameSwiperPrev="custom-prev" slidesPerViewbag={2} slidesPerViewSmall={1} />
      </div>
    </section>
  );
}
