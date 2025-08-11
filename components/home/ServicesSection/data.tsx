export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode; // أو استخدم مسار صورة أو اسم أيقونة حسب الحاجة
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'خدمات المزارعين',
    description:
      'تعزز خدماتنا ما بعد حصد التمور من العمليات اللازمة المحافظة على جودة التمور وتنظيم العداد المكتسب للأفراد. ونوفر الكفاءة العالية لهذه العمليات على المزارعين حيث تتطلب توفير عمالة مدربة وأليات متخصصة مكلفة بالإضافة إلى مساهمات مستمرة.. مما يشكل عبء كبير على المزارعين.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#d9a249]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c1.5 0 4-1 4-3s-2-3-4-3-4 1-4 3 2.5 3 4 3zm0 8c-1.5 0-4 1-4 3s2 3 4 3 4-1 4-3-2.5-3-4-3z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'العلامات الخاصة',
    description:
      'هل ترغب بإنتاج منتجات تمور او مستلزماتها تحمل اسمك وعلاماتك التجارية الخاصة؟ لقد قمنا في معمل البلح بإعداد جميع عمليات الإنتاج حتى تضمن تجربة متكاملة بأدق التفاصيل، ونعمل على رفع مستوى الإنتاج من خلال صناعة وتميز تمور معينة باستخدام أحدث التقنية المتقدمة وبدون طول مدة في صناعة التمور مناسبة لك فقط.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#d9a249]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'العلامات الخاصة',
    description:
      'هل ترغب بإنتاج منتجات تمور او مستلزماتها تحمل اسمك وعلاماتك التجارية الخاصة؟ لقد قمنا في معمل البلح بإعداد جميع عمليات الإنتاج حتى تضمن تجربة متكاملة بأدق التفاصيل، ونعمل على رفع مستوى الإنتاج من خلال صناعة وتميز تمور معينة باستخدام أحدث التقنية المتقدمة وبدون طول مدة في صناعة التمور مناسبة لك فقط.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#d9a249]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'العلامات الخاصة',
    description:
      'هل ترغب بإنتاج منتجات تمور او مستلزماتها تحمل اسمك وعلاماتك التجارية الخاصة؟ لقد قمنا في معمل البلح بإعداد جميع عمليات الإنتاج حتى تضمن تجربة متكاملة بأدق التفاصيل، ونعمل على رفع مستوى الإنتاج من خلال صناعة وتميز تمور معينة باستخدام أحدث التقنية المتقدمة وبدون طول مدة في صناعة التمور مناسبة لك فقط.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#d9a249]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V4" />
      </svg>
    ),
  },
];
export default servicesData;