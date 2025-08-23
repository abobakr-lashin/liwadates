import Image from 'next/image';

type Props = {
  title: string;                 // اسم المدينة/الفرع: "مدينة دبي"
  subtitle?: string;             // افتراضي: "الافتتاح قريبًا"
  illustrationSrc?: string;      // مسار الأيقونة/الإيضاح
  className?: string;            // لتخصيص إضافي اختياري
};

export default function BranchComingSoonCard({
  title,
  subtitle = 'الافتتاح قريبًا',
  illustrationSrc = '/Our_stores/Frame.png',
  className = '',
}: Props) {
  return (
    <section className={`w-full bg-[#f5f5f5] py-10 ${className}`} >
      <div className="max-w-7xl mx-auto rounded-[22px] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.06)]">
        {/* صف أفقي: النص يمين + الصورة يساره */}
        <div className="flex items-center justify-start gap-4 sm:gap-6 px-5 sm:px-7 py-4 sm:py-6">


          {/* الإيضاح/الصورة */}
          <div className="relative w-20 p-20 h-14 sm:w-24 sm:h-16 lg:w-28 lg:h-20 shrink-0">
            <Image
              src={illustrationSrc}
              alt=""
              fill
              className="object-contain select-none pointer-events-none"
              sizes="(min-width:1024px) 112px, 96px"
              priority
            />

          </div>
                {/* النص */}
          <div className="t">
            <h3 className="text-3xl sm:text-lg font-extrabold text-[#94684a]">
              فرع {title}
            </h3>
            <p className="mt-1 text-2xl sm:text-sm text-black/80">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
