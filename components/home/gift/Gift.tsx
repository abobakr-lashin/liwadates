
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
          priority
        />
        {/* التعتيم/الـ overlay */}
        <div className="absolute inset-0 bg-black/50"></div> {/* قلل التعتيم قليلاً */}
      </div>

      {/* المحتوى فوق الخلفية */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white px-4 md:px-16">
        <div>
          <h2 className="text-lg md:text-3xl  font-bold mb-2 m-auto" >
            &quot;هويتكم تُعكس هويتكم.. ونحن نصنعها لأجلكم&quot;
          </h2>
          <p className="text-sm md:text-base mb-4 m-auto">
            نمتلك مجموعة من العلامات التجارية نخلق بها أعلى جودة من المنتجات بأدق التفاصيل
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">

               <button className="relative bg-[#94684a] cursor-pointer overflow-hidden px-8 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full
               border-2 hover:border-none text-white font-medium group
                active:scale-95 transition-transform fade-in-down delay-500">
              <span className="relative z-10">            خدمات العملاء الشخصية
</span>
              <span
                className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
              transform -translate-x-full -translate-y-full -skew-x-1
              opacity-0 transition-all duration-300 ease-out
              group-hover:translate-x-0 group-hover:translate-y-0
              group-hover:opacity-100 rounded-full"
              ></span>
            </button>
            <button className="relative cursor-pointer overflow-hidden px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full border-2 hover:border-none text-white font-medium group active:scale-95 transition-transform fade-in-down delay-500">
              <span className="relative z-10">            خدمات المؤسسات
</span>
              <span
                className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
              transform -translate-x-full -translate-y-full -skew-x-1
              opacity-0 transition-all duration-300 ease-out
              group-hover:translate-x-0 group-hover:translate-y-0
              group-hover:opacity-100 rounded-full"
              ></span>
            </button>
        </div>
      </div>
    </section>
  );
}
