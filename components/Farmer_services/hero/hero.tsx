import Image from "next/image";
import Link from "next/link";
type BannerProps = {
  urlimg: string;
  title: string;
  pratone: string;
  pratTow: string;
  pratThere: string;
  prattherebol: boolean;
  hrefUrl: string;
  hrefUrl2: string;
  brightness?: string;
 itemsStart: string;
};


const Banner = (
  { urlimg, title, pratone,
    pratTow, hrefUrl, brightness,
     prattherebol
,hrefUrl2,pratThere,
itemsStart
    }
  : BannerProps) => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-94 overflow-hidden rounded-md">
      <Image
        src={urlimg}
        alt="خدمات المزارعين"
        fill
        style={{ objectFit: "cover", objectPosition: "center center" }}
        className={brightness}
        priority
      />
      <div className={`absolute inset-0 flex flex-col justify-center   ${itemsStart} pt-12 px-8 text-white `}>
        <h1 className="text-lg md:text-4xl font-semibold p-5"> {title}</h1>
        <p className="text-sm md:text-lg flex items-center space-x-2 rtl:space-x-reverse rtl:space-x-2">
          <Link className="hover:text-[#A97C50]" href="/">{pratone}</Link>
          <span className="mx-2">{`>`}</span>
          <Link className="hover:text-[#A97C50]" href={`/${hrefUrl}`}>{pratTow}</Link>
          {prattherebol && (
            <>
              <span className="mx-2">{`>`}</span>
              <Link className="hover:text-[#A97C50]" href={`/${hrefUrl2}`}>{pratThere}</Link>
            </>
          )
          }

        </p>
      </div>
    </div>
  );
};

export default Banner;
