import Image from "next/image";

interface PalmCareSectionProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  buttonText2: string;
    widthimg:string;

    heightimg:string
}

const PalmCareSection: React.FC<PalmCareSectionProps> = ({
  imageSrc,
  title,
  description,
  buttonText ,
  buttonText2,
      widthimg,
    heightimg

}) => {
  return (
    <section className="bg-[#f3e9df] py-12 px-6 md:px-10 m-auto  mx-auto rounded-lg flex min-h-[70vh] flex-col md:flex-row items-center gap-8">
      {/* النص على اليسار */}
      <div className="md:w-1/2 flex flex-col gap-6 m-auto">
        <h2 className="text-[26px] font-bold mb-4 leading-tight">{title}</h2>
        <p className="text-gray-700 md:w-4/5 mb-6 leading-relaxed text-[15px]">
          {description}
        </p>

        <div className="flex gap-4 justify-start">
    <button
  className="relative bg-[#94684a] cursor-pointer overflow-hidden
    px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border-2
    border-transparent text-white font-medium text-sm sm:text-base md:text-lg
    group active:scale-95 transition-transform fade-in-down delay-500"
>
  <span className="relative z-10">
    {buttonText}
  </span>
  <span
    className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
      transform -translate-x-full -translate-y-full -skew-x-1
      opacity-0 transition-all duration-300 ease-out
      group-hover:translate-x-0 group-hover:translate-y-0
      group-hover:opacity-100 rounded-full"
  ></span>
</button>

<button
  className="relative cursor-pointer overflow-hidden
    px-5 sm:px-6 md:px-12 py-2 sm:py-3 md:py-4 rounded-full border-2
    border-[#94684a] text-[#3b2617] font-medium text-sm sm:text-base md:text-lg
    group active:scale-95 transition-transform fade-in-down delay-500"
>
  <span className="relative z-10 hover:text-white">
    { buttonText2}
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

      {/* الصورة على اليمين */}
   <div className={`  w-full md:w-[45%] max-w-[${widthimg}] max-h-[${heightimg}]  rounded-3xl overflow-hidden shadow-lg`}>
  <Image
    src={imageSrc}
    alt={title}
    width={760}
    height={360}
       style={{ objectFit: "cover",objectPosition: "left bottom" }}

    className="rounded-3xl object-left-bottom "
    priority
  />
</div>

    </section>
  );
};

export default PalmCareSection;
