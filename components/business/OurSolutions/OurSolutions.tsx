import Image from "next/image";
import {services} from "./data";

const OurSolutions = () => {
  return (
    <section className="max-w-7xl mx-auto px-12 py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">حلولنا المتخصصة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {services.map(({ title, description, image }) => (
          <div
            key={title}
            className="bg-white hover:scale-3d m-auto hover:scale-110 transition-transform rounded-xl shadow-md p-6 flex flex-col items-center text-center w-[280px] h-[350px]"
          >
            <div className=" mb-6 relative m-auto">
              <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
            <h3 className="font-semibold text-lg mb-3">{title}</h3>
            <p className="text-gray-600 text-sm w-4/5">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolutions;
