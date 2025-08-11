import Image from "next/image";

interface SectionProps {
  imageSrc: string;
  smallText: string;
  title: string;
  description: string;
}

const TraditionalSection: React.FC<SectionProps> = ({
  imageSrc,
  smallText,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center max-w-[1500px] min-h-[70vh] mx-auto px-6 md:px-16 py-12 gap-8">
      {/* النص على اليمين في الديسكتوب، فوق في الموبايل */}
      <div className="w-full md:w-[45%] text-right">
        <p className="text-md text-[#77533C] mb-2">{smallText}</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{title}</h2>
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* الصورة على اليسار في الديسكتوب، تحت في الموبايل */}
   <div className="w-full md:w-[50%] max-w-[760px] max-h-[360px] rounded-3xl overflow-hidden shadow-lg">
  <Image
    src={imageSrc}
    alt={title}
    width={760}
    height={260}
    objectFit="cover"
    className="rounded-3xl"
    priority
  />
</div>
    </div>
  );
};

export default TraditionalSection;
