import Image from "next/image";
import { GiOnTarget } from "react-icons/gi";
import GoalSection from "./GoalSection";

interface PackagingSectionProps {
  imageSrc: string;
  title: string;
  description: string;
}

const PackagingSection: React.FC<PackagingSectionProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <section className="bg-[#f9f6f3] rounded-xl mx-auto p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-md max-w-8xl">
      {/* الصورة على اليمين */}
      <div className="flex-shrink-0 w-full md:w-[560px] rounded-xl overflow-hidden shadow-lg m-auto">
        <Image
          src={imageSrc}
          alt={title}
          width={560}
          height={360}
          objectFit="cover"
          className="rounded-xl"
          priority
        />
      </div>

      {/* النص والأزرار على اليسار */}
      <div className="flex flex-col text-right w-full md:w-1/2 gap-6 m-auto">
        <h2 className="text-2xl font-semibold text-[#77533C]">{title}</h2>
        <p className="text-gray-700 leading-relaxed text-base">{description}</p>

        <GoalSection
          icon={<GiOnTarget className="text-3xl text-[#a07a51]" />}
          title="هدفنا"
          description="هدفنا تحويل محصولك إلى منتج عالي القيمة، نفتخر به، وجاهز للاستخدام أو التوزيع أو التسويق. مع حلول متعددة للتعبئة والتغليف، بالإضافة إلى خدمة تصنيع العلامة الخاصة التي تعكس اسمك وجودة مزرعتك."
        />

        <div className="flex flex-wrap gap-4">
          {[
            { label: "خطوات التصنيع", primary: true },
            { label: "فيديو موضح للخطوات", primary: false },
            { label: "واتساب", primary: false },
          ].map(({ label, primary }) => (
            <button
              key={label}
              className={`relative cursor-pointer overflow-hidden px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full border-2 font-medium group active:scale-95 transition-transform fade-in-down delay-500
                ${
                  primary
                    ? "bg-[#94684a] border-transparent text-white hover:border-none"
                    : "border-[#94684a] text-[#3b2617] hover:text-white hover:border-none"
                }
              `}
            >
              <span className="relative z-10">{label}</span>
              <span
                className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
              transform -translate-x-full -translate-y-full -skew-x-1
              opacity-0 transition-all duration-300 ease-out
              group-hover:translate-x-0 group-hover:translate-y-0
              group-hover:opacity-100 rounded-full"
              ></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;
