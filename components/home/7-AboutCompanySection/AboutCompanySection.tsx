'use client';

import Image from 'next/image';

export default function AboutCompanySection() {
  return (
    <section className="bg-white py-20 px-4 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">


        {/* الصور */}
        <div className="w-full md:w-1/2 relative flex justify-center ">
          {/* الصورة الكبيرة */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/AboutCompanySection/AboutCompanySection.png"// الصورة الكبيرة
              alt="داخل المتجر"
              width={500}
              height={700}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* الصورة الصغيرة فوق الكبيرة */}
          <div className="absolute bottom-[-30px] left-5 rotate-2 md:left-10 rounded-2xl overflow-hidden shadow-lg  border-4 border-white">

            <Image
              src="/AboutCompanySection/AboutCompanySection1.png" // الصورة الصغيرة
              alt="تمور"
              width={150}
              height={300}
              className="object-cover w-full h-full "
            />
          </div>
        </div>
                {/* النص */}
        <div className="w-full md:w-1/2 text-right">
          <span className="text-xs text-gray-500 block mb-2">من نحن</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#4C2C1D] mb-4">
            قصة نجاح <span className="text-[#9b5d2a]">تمور ليوا</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            قصة نجاح تمور ليوا انطلقت من عام 2006 حين تأسست في قلب مدينة ليوا التاريخية. بخط إنتاج كامل ومعايير عالية، يختص مصنع تمور ليوا في تقديم أجود أنواع التمور المحلي والمستوردة بشكل كلي أو جزئي. يتميز مصنع تمور ليوا بخط إنتاج متكامل بأحدث المعدات، حيث تتم عمليات التعبئة والتغليف تحت إشراف متخصصين في الجودة.
            <br /><br />
            نحن في تمور ليوا نؤمن بقيمة التراث والابتكار ونهدف لتقديم أفضل المنتجات لعملائنا من داخل الدولة وإلى جميع أنحاء العالم.
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
      </div>

      {/* شعار شفاف خلفي */}
      <div className="absolute inset-0 flex justify-center items-center opacity-5 pointer-events-none">
        <Image
          src="/AboutCompanySection/Group.png"
          alt="Liwa Dates Logo"
          width={400}
          height={200}
          className="object-contain"
        />
      </div>
    </section>
  );
}
