import Image from "next/image";
import { insights } from "./data";

const InsightsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-center font-semibold text-lg md:text-xl mb-3 max-w-3xl mx-auto">
        رؤى ليوا - تحليلات وتقارير لصناع القرار
      </h2>
      <p className="text-center font-light mb-10 w-3/5 mx-auto">
        اكتشف تقارير واتجاهات عن أسواق التمور العالمية، نصائح للاستيراد الذكي، وقصص نجاح عملائنا، لتكون على اطلاع دائم بما يحدث في عالم التمور
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {insights.map(({ title, description, image, link }) => (
          <a
            key={title}
            href={link}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-48 md:h-52 w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative p-8 text-right flex flex-col flex-grow ">
              <h3 className="text-base font-semibold mb-2 ">{title}</h3>
              <p className="text-sm text-gray-600 mb-4">{description}</p>
              <span className="mt-auto text-[#94684a] font-semibold  cursor-pointer absolute bottom-5 left-5">
                قراءة المزيد &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
