'use client';

import Image from 'next/image';

export default function FounderSection() {
  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* النص */}
        <div className="w-full md:w-1/2 text-right">
          <span className="text-xs text-gray-500 block mb-1">عن المؤسس</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#4C2C1D] mb-4">
            السيد/ محمد سهيل المزروعي
          </h3>
          <p className="text-gray-700 leading-loose text-sm md:text-base">
            قصة نجاح تمور ليوا انطلقت عام 2006 من قلب السيبست في مدينة ليوا لتكون بداية حكاية نجاح كاملة. يصنع مصنع ليوا بأيدٍ إماراتية مختصة في تقديم أجود أنواع التمور المحلي والمستوردة بشكل كلي أو جزئي. يتميز مصنع تمور ليوا بخط إنتاج متكامل بأحدث المعدات، حيث تتم عمليات التعبئة والتغليف تحت إشراف متخصصين في الإنتاج والتعبئة والجودة.
            <br /><br />
            نسعى في تمور ليوا لصناعة تمور ذات جودة عالمية بهوية محلية. نقدم الحلول الذكية والمبتكرة لعملائنا في مختلف الصناعات الغذائية، ونسعى دائمًا لتقديم الأفضل لعملائنا المحليين من داخل الدولة وللأسواق العالمية.
          </p>
        </div>
        {/* الصورة */}
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-md relative">
            <Image
              src="/FounderSection.png" // غيّر إلى مسار صورتك الصحيح
              alt="صورة المؤسس"
              width={600}
              height={300}
              className=" "
            />
            <div className="h-2 bg-[#4C2C1D] w-full absolute bottom-0 left-0"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
