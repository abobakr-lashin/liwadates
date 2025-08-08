'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

interface Article {
  title: string;
  summary: string;
  image: string;
}

const articles: Article[] = [
  {
    title: 'يبحث عن التمر يكشف مفاجآت مذهلة',
    summary:
      'أكثر من مجرد بحث عن التمر! التوثيق على فوائده الصحية كافٍ، ولكنه يعتبر من أكثر مكونات الانتشار في العالم حيث يتم زراعتها وتداولها في العديد من الدول.',
    image: '/articles/articles1.png',
  },
  {
    title: 'بحث عن التمر يكشف مفاجآت مذهلة',
    summary:
      'أكثر من مجرد بحث عن التمر! التوثيق على فوائده الصحية كافٍ، ولكنه يعتبر من أكثر مكونات الانتشار في العالم حيث يتم زراعتها وتداولها في العديد من الدول.',
    image: '/articles/articles2.png',
  },
  {
    title: 'يبحث عن التمر يكشف مفاجآت مذهلة',
    summary:
      'أكثر من مجرد بحث عن التمر! التوثيق على فوائده الصحية كافٍ، ولكنه يعتبر من أكثر مكونات الانتشار في العالم حيث يتم زراعتها وتداولها في العديد من الدول.',
    image: '/articles/articles1.png',
  },
  {
    title: 'بحث عن التمر يكشف مفاجآت مذهلة',
    summary:
      'أكثر من مجرد بحث عن التمر! التوثيق على فوائده الصحية كافٍ، ولكنه يعتبر من أكثر مكونات الانتشار في العالم حيث يتم زراعتها وتداولها في العديد من الدول.',
    image: '/articles/articles2.png',
  },
];

export default function NewsAndArticlesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#fff7f1] to-white py-20 px-4 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">

             {/*  - النص */}
        <div className="w-full md:w-3/3 ">
          <span className="text-xs text-[#9b5d2a] block mb-2">أخبار إعلامية</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#4C2C1D] mb-4">
            تعرف على أخبار ومقالاتنا
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm mb-6">
            نُقدّم لك رحلة في عالم التمور عبر مقالات وأخبار غنية بالمعلومات حول التمور، الزراعة، الفوائد، والابتكار. اكتشف التمر أكثر كما لم تعرفه من قبل.
          </p>
   <button className="relative cursor-pointer overflow-hidden px-6 py-2 rounded-full bg-[#9b643a] text-white font-medium group active:scale-95 transition-transform">

  <span className="relative z-10">    تعرف على المزيد</span>
              <span
    className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
               transform -translate-x-full -translate-y-full -skew-x-1
               opacity-0 transition-all duration-300 ease-out
               group-hover:translate-x-0 group-hover:translate-y-0
               group-hover:opacity-100 rounded-full coursor-pointer"
  ></span>
          </button>
        </div>
        {/*  - السلايدر*/}
        <div className="w-full md:w-2/3">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.custom-next-articles',
              prevEl: '.custom-prev-articles',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {articles.map((article, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative rounded-2xl overflow-hidden shadow-md group h-72">
                  {/* صورة المقال */}
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* تدرج + نص */}
<div className="absolute inset-0 p-6 flex flex-col justify-end text-white text-right opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
  <h3 className="text-lg font-bold mb-2">{article.title}</h3>
  <p className="text-sm text-white/80 leading-snug line-clamp-3">{article.summary}</p>
</div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* الأسهم */}
          <div className="flex justify-center mt-6 gap-4">
            <button className="custom-prev-articles bg-white border border-gray-300 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">

                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="custom-next-articles bg-white border border-gray-300 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
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
