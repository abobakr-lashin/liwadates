import { FiShoppingCart, FiAward, FiUserCheck } from "react-icons/fi";
import type { IconType } from "react-icons";

type Item = {
  title: string;
  text: string;
  icon: IconType; // <— نخزن النوع بدل العنصر
};

const defaultItems: Item[] = [
  {
    title: "100% Natural Products",
    text:
      "Crafted with premium natural ingredients, our products contain no added sugar, offering authentic flavors and health benefits.",
    icon: FiShoppingCart,
  },
  {
    title: "Award-Winning Products",
    text:
      "Honored for excellence and innovation, our products combine exceptional quality with a commitment to healthy living.",
    icon: FiAward,
  },
  {
    title: "Trusted by Customers",
    text:
      "Trusted worldwide for our unwavering commitment to quality, delivering products that consistently exceed customer expectations.",
    icon: FiUserCheck,
  },
];

export default function BenefitsStrip({
  items = defaultItems,
  className = "",
}: {
  items?: Item[];
  className?: string;
}) {
  return (
    <section
      className={`w-full bg-[#1e140f] text-white ${className}`}
      aria-label="benefits"
    >
      <div className="container py-8 md:py-10">
        {/* 1 عمود على الموبايل، 2 على التابلت، 3 على الديسكتوب */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 text-center">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="mx-auto max-w-[22rem] px-4 md:px-3 flex flex-col items-center"
              >
                <div className="mb-3 opacity-90">
                  {/* أحجام أيقونات Responsive */}
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-1 opacity-95">
                  {it.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed opacity-80">
                  {it.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
