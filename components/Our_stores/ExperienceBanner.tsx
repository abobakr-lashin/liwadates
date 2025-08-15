
import Image from "next/image";
type Props = {
  imgSrc: string;
};

export default function ExperienceBanner({
  imgSrc = "/store/sweprHero.jpg",
}: Props) {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 mt-10">
      {/* البطاقة */}
      <div className="relative overflow-hidden rounded-[28px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center p-4 sm:p-6 lg:p-8">

              {/* النص (يمين) */}
          <div className="order-2 lg:order-1 ">
            <div className="max-w-[38rem] ms-auto">
              <p className="text-[12px] sm:text-sm text-[#94684a] mb-2">
                من النخلة إلى السحور… رحلة تمر تبدأ هنا
              </p>

              <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] font-extrabold leading-snug text-neutral-900 mb-3">
                “نمنحك تجربة تسوّق استثنائية… لأن التمر عندنا أكثر من منتج؛ إنّه أسلوب حياة.”
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                منذ تأسيس متجرنا وضعنا الجودة في قلب كل اختيار. نختار أفضل أنواع التمور
                ونقدّمها بتغليف أنيق يناسب الهدايا والمناسبات، مع خيارات واسعة تناسب ذائقتك
                واحتياجاتك. التمر لدينا جزء من تراثٍ ونكهةٍ وذكرياتٍ جميلة.
              </p>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#94684a] hover:bg-[#7a533a] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-sm sm:text-base transition shadow-sm"
              >
                اطلب حسابًا من أقرب فرع – نقدّم عروضات
              </button>
            </div>
          </div>
          {/* الصورة (على اليسار في الشاشات الكبيرة) */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[16/10] sm:aspect-[5/4] rounded-[24px] overflow-hidden">
              <Image
                src={imgSrc}
                alt="متجر التمور"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
