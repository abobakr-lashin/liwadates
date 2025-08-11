import CustomSwiper from '../swiper/CustomSwiper';

const services = [

  {
    title: 'خدمات ',
    title2: ' المزارعين',
    description:
      'تعزز خدماتنا ما بعد حصد التمور من العمليات اللازمة المحافظة على جودة التمور وتنظيم العداد المكتسب للأفراد. ونوفر الكفاءة العالية لهذه العمليات على المزارعين حيث تتطلب توفير عمالة مدربة وأليات متخصصة مكلفة بالإضافة إلى مساهمات مستمرة.. مما يشكل عبء كبير على المزارعين.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#c1954f"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.5 0 4-1 4-3s-2-3-4-3-4 1-4 3 2.5 3 4 3zm0 8c-1.5 0-4 1-4 3s2 3 4 3 4-1 4-3-2.5-3-4-3z" />
      </svg>
    ),
  },


  {
    title: 'العلامات  ',
    title2: '  الخاصة',
    description:
      'تعزز خدماتنا ما بعد حصد التمور من العمليات اللازمة المحافظة على جودة التمور وتنظيم العداد المكتسب للأفراد. ونوفر الكفاءة العالية لهذه العمليات على المزارعين حيث تتطلب توفير عمالة مدربة وأليات متخصصة مكلفة بالإضافة إلى مساهمات مستمرة.. مما يشكل عبء كبير على المزارعين.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#c1954f"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.5 0 4-1 4-3s-2-3-4-3-4 1-4 3 2.5 3 4 3zm0 8c-1.5 0-4 1-4 3s2 3 4 3 4-1 4-3-2.5-3-4-3z" />
      </svg>
    ),
  },
    {
    title: 'العلامات  ',
    title2: '  الخاصة',
    description:
      'تعزز خدماتنا ما بعد حصد التمور من العمليات اللازمة المحافظة على جودة التمور وتنظيم العداد المكتسب للأفراد. ونوفر الكفاءة العالية لهذه العمليات على المزارعين حيث تتطلب توفير عمالة مدربة وأليات متخصصة مكلفة بالإضافة إلى مساهمات مستمرة.. مما يشكل عبء كبير على المزارعين.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#c1954f"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.5 0 4-1 4-3s-2-3-4-3-4 1-4 3 2.5 3 4 3zm0 8c-1.5 0-4 1-4 3s2 3 4 3 4-1 4-3-2.5-3-4-3z" />
      </svg>
    ),
  },

  {
    title: 'خدمات ',
    title2: ' المزارعين',
    description:
      'تعزز خدماتنا ما بعد حصد التمور من العمليات اللازمة المحافظة على جودة التمور وتنظيم العداد المكتسب للأفراد. ونوفر الكفاءة العالية لهذه العمليات على المزارعين حيث تتطلب توفير عمالة مدربة وأليات متخصصة مكلفة بالإضافة إلى مساهمات مستمرة.. مما يشكل عبء كبير على المزارعين.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#c1954f"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.5 0 4-1 4-3s-2-3-4-3-4 1-4 3 2.5 3 4 3zm0 8c-1.5 0-4 1-4 3s2 3 4 3 4-1 4-3-2.5-3-4-3z" />
      </svg>
    ),
  },

];

export default function Page() {
  return(
<>
<div className='p-5'></div>
    <section className="bg-[#FAF3EE] py-12">
      <div className="max-w-6xl mx-auto px-6 ">
       <div>
         <h2 className="text-xl md:text-2xl font-semibold mb-1">
          تعرف{' '}
          <span className="text-[#c1954f] font-semibold">على خدماتنا</span>
        </h2>
        <p className="text-sm md:text-base mb-10 text-gray-600">
          نحرص على تقديم مجموعة واسعة من أجود أنواع التمور
        </p>

       </div>

  <CustomSwiper services={services} slidesPerViewSmall={1} slidesPerViewLarge={2} ClassNameSwiperNext={'custom-next-3'} ClassNameSwiperPrev={'custom-prev-3'} />;
   </div>
    </section>
</>
  )
}
