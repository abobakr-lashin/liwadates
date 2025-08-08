"use client";
import React from 'react';
import "./hero.css";

function Hero() {
  return (
    <div className="w-full sm:pt-9">
      <div
        className="w-full h-screen bg-cover bg-center relative md:pt-0  "
        style={{ backgroundImage: 'url("images/hero.jpg")' }}
      >
        <div
          className="w-full h-screen bg-cover  bg-center absolute opacity-15 md:pt-0  "
          style={{ backgroundImage: 'url("images/nash.png")' }}
        >
        </div>



        <div className="flex z-30 flex-col items-center justify-center h-full text-[#edeae6] bg-black/40 px-4 w-full">
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center fade-in-down">

ذوق إماراتي... وجودة عالمية – اكتشف

<br />
 تمورنا


 الصيفية الآن
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl text-center fade-in-down delay-200">
    تعود جذور التمور إلى آلاف السنين، حيث أصبحت جزءًا لا يتجزأ من تراث الثقافات الشرقية والغربية على حدٍ سواء. في هذا السياق الغني يسرنا أن نقدم لكم مصنع تمور ليوا، الواقع في قلب مدينة ليوا العريقة بتاريخها ونخيلها في إمارة أبوظبي بدولة الإمارات العربية المتحدة.
          </p>

          <div className="md:flex-row flex gap-4.5 sm:flex-col">

            <button className="relative bg-[#94684a] cursor-pointer overflow-hidden px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full border-2 hover:border-none text-white font-medium group active:scale-95 transition-transform fade-in-down delay-500">
              <span className="relative z-10">اطلب الآن من المتجر</span>
              <span
                className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
              transform -translate-x-full -translate-y-full -skew-x-1
              opacity-0 transition-all duration-300 ease-out
              group-hover:translate-x-0 group-hover:translate-y-0
              group-hover:opacity-100 rounded-full"
              ></span>
            </button>
            <button className="relative cursor-pointer overflow-hidden px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full border-2 hover:border-none text-white font-medium group active:scale-95 transition-transform fade-in-down delay-500">
              <span className="relative z-10">حصل على كتالوج الهدايا</span>
              <span
                className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
              transform -translate-x-full -translate-y-full -skew-x-1
              opacity-0 transition-all duration-300 ease-out
              group-hover:translate-x-0 group-hover:translate-y-0
              group-hover:opacity-100 rounded-full"
              ></span>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-16 w-full max-w-5xl">
            {[
              { value: '1000', label: 'عميل واثق', delay: 700 },
              { value: '20', label: 'سنة من الخبرة', delay: 900 },
              { value: '10', label: 'علامات تجارية', delay: 1100 },
              { value: '114', label: 'فرع في الإمارات', delay: 1300 },
            ].map((item, index) => (
              <div
                key={index}
                className={`fade-in-up delay-${item.delay} bg-black/30 rounded-2xl border border-white/30 px-6 sm:px-8 py-6 flex flex-col items-center min-w-[140px] sm:min-w-[160px]`}
              >
                <span className="text-2xl sm:text-3xl font-bold mb-2"><span className='text-[#94684a]'>+</span> {item.value}</span>
                <span className="text-sm sm:text-lg text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
