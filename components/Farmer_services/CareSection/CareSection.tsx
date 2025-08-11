import Image from "next/image";

interface CareSectionProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CareSection: React.FC<CareSectionProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="bg-[#fff5ed] m-auto  flex flex-col md:flex-row justify-between items-center w-full h-auto px-6 md:px-16 py-22 gap-18">
      {/* الصورة على اليمين في الديسكتوب، تحت في الموبايل */}
<div className="relative w-full md:w-[50%] max-w-[760px] h-[360px] rounded-3xl overflow-hidden shadow-lg">
  <Image
    src={imageSrc}
    alt={title}
    fill
    style={{ objectFit: "cover", borderRadius: "1.5rem" }} // rounded-3xl = 1.5rem تقريبا
    priority
  />
</div>



      {/* النص على اليسار في الديسكتوب، فوق في الموبايل */}
      <div className="flex flex-col items-start w-full md:w-[50%] text-right">
        <h2 className="text-[26px] font-bold mb-4 leading-tight">{title}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-[15px] w-4/5">{description}</p>
        <button
          onClick={onButtonClick}
          className=" relative bg-[#94684a] cursor-pointer overflow-hidden px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full border-2 hover:border-none text-white font-medium group active:scale-95 transition-transform fade-in-down delay-500"
        >
          <span className="relative z-10">{buttonText}</span>
          <span
            className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
              transform -translate-x-full -translate-y-full -skew-x-1
              opacity-0 transition-all duration-300 ease-out
              group-hover:translate-x-0 group-hover:translate-y-0
              group-hover:opacity-100 rounded-full"
          ></span>
        </button>
      </div>
    </section>
  );
};

export default CareSection;
