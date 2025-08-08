'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

interface Testimonial {
  name: string;
  location: string;
  review: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'محمد عمرو',
    location: 'الإمارات',
    review: 'ربط التمر بتراثنا كان رائعًا وملهمًا. الطعم ممتاز، والتغليف أنيق. أحببت الخدمة السريعة والدعم.',
    rating: 4.8,
    image: '/clients/client1.png',
  },
  {
    name: 'محمد أحمد',
    location: 'الإمارات',
    review: 'أحببت اهتمامهم بأدق التفاصيل. جودة التمر رائعة والمذاق أصيل.',
    rating: 4.8,
    image: '/clients/client2.png',
  },
  {
    name: 'أحمد أسامة',
    location: 'الإمارات',
    review: 'خدمة ممتازة جدًا، والتغليف فاخر. الجودة كانت رائعة ومرضية جدًا.',
    rating: 4.8,
    image: '/clients/client3.png',
  },
  {
    name: 'محمد النجار',
    location: 'الإمارات',
    review: 'طلبت منهم أكثر من مرة، والنتيجة دائمًا فوق التوقعات. يستحقون الثقة.',
    rating: 4.8,
    image: '/clients/client4.png',
  },
];

export default function CustomerTestimonials() {
  return (
    <section className="m-auto bg-white py-10 px-4 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 ">

        {/* السلايدر الجانبي */}
        <div className="relative hidden md:block">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
          >
            {testimonials.map((client, idx) => (
              <SwiperSlide key={idx}>
          <div className="relative rounded-3xl overflow-hidden group h-[60vw] max-h-[450px] min-h-[300px]">
            <Image
              src="/clients/testimonials-bg.jpg"
              alt="testimonial-bg"
              fill
              className="object-cover absolute inset-0"
            />
            <div
              style={{
                background: 'linear-gradient(to top, #4c2c1d 40%, transparent 100%)',
              }}
              className="absolute inset-0 z-10"
            />
            <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end text-white">
              <p className="absolute top-20 text-2xl text-white/70 leading-relaxed opacity-0 translate-y-40 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-500">
                {client.review}
              </p>
              <h2 className="absolute text-xl md:text-2xl font-bold top-10">آراء العملاء</h2>
            </div>
          </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute bottom-4 left-4 z-30 flex gap-3">
            <button className="testimonial-prev bg-white text-[#4C2C1D] rounded-full w-8 h-8 flex items-center justify-center">
              <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
              >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="testimonial-next bg-white text-[#4C2C1D] rounded-full w-8 h-8 flex items-center justify-center">
              <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
              >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
                {/* التقييمات النصية */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6 flex-wrap">
          {testimonials.map((client, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-4xl p-5 text-right border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={50}
                  height={50}
                  className="rounded-4xl object-cover w-15 h-15"
                />
                <div className="text-sm">
                  <h3 className="font-bold">{client.name}</h3>
                  <p className="text-gray-500">{client.location}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3 flex flex-wrap w-full">{client.review}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Image src="/clients/google-icon.png" alt="Google" width={16} height={16} />
                  معتمد من جوجل
                </span>
                <span className="flex items-center gap-1 text-yellow-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.451a1 1 0 00.95.69h3.63c.969 0 1.371 1.24.588 1.81l-2.938 2.137a1 1 0 00-.364 1.118l1.12 3.451c.3.921-.755 1.688-1.538 1.118l-2.939-2.137a1 1 0 00-1.175 0l-2.939 2.137c-.783.57-1.838-.197-1.538-1.118l1.12-3.451a1 1 0 00-.364-1.118L2.49 8.878c-.783-.57-.38-1.81.588-1.81h3.63a1 1 0 00.95-.69l1.12-3.451z" />
                      </svg>
                    ))}
                  ({client.rating})
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
