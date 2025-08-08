'use client';

import Image from 'next/image';
export default function HeroSection() {
  return (
    <section className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden font-sans m-auto">
      {/* صورة الخلفية */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gift.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* التعتيم/الـ overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* المحتوى فوق الخلفية */}
      <div className=" w-full flex flex-col justify-center items-center  text-white px-4 md:px-16 ">
    <div>
         <h2 className="text-lg md:text-2xl m-auto font-bold mb-2">
  &quot;هويتكم تُعكس هويتكم.. ونحن نصنعها لأجلكم&quot;
</h2>
        <p className="text-sm md:text-base mb-4 max-w-md">
          نمتلك مجموعة من العلامات التجارية نخلق بها أعلى جودة من المنتجات بأدق التفاصيل
        </p>
    </div>
        <div className="flex gap-3 flex-wrap">
          <button className="bg-white text-[#6B4E2F] px-4 py-2 text-sm rounded-full hover:bg-gray-100 transition">
            خدمات العملاء الشخصية
          </button>
          <button className="bg-white text-[#6B4E2F] px-4 py-2 text-sm rounded-full hover:bg-gray-100 transition">
            خدمات المؤسسات
          </button>
        </div>
      </div>
    </section>
  );
}
