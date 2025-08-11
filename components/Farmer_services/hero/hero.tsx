import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-md">
      <Image
        src="/Farmer_services/hero.jpg"
        alt="خدمات المزارعين"
        fill
        style={{ objectFit: "cover" }}
        className="brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start pt-12 px-8 text-white rtl">
        <h1 className="text-lg md:text-4xl font-semibold p-5">خدمات المزارعين</h1>
        <p className="text-sm md:text-lg flex items-center space-x-2 rtl:space-x-reverse rtl:space-x-2">
          <Link className="hover:text-[#A97C50]" href="/">الرئيسية</Link>
          <span className="mx-2">{`>`}</span>
          <Link className="hover:text-[#A97C50]" href="/Farmer_services">خدمات المزارعين</Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
