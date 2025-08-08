'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4C2C1D] text-white text-sm pt-16 pb-6 px-4 font-sans relative">
      {/* خلفية مزخرفة */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('/patterns/Vector1.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* العمود 1 */}
        <div className="md:col-span-1">
          <Image
            src="/logo.svg"
            alt="Liwa Dates Logo"
            width={120}
            height={60}
            className="mb-4"
          />
          <p className="text-white/80 mb-2">
            تأسس مصنع تمور ليوا عام 2006 في قلب مدينة ليوا، بإمارة أبوظبي ليعكس تراثنا ويقدم أجود أنواع التمور.
          </p>
          <p className="text-white/60 text-xs">مزارع واحة ليوا - شارع زايد المؤدي إلى مركز الشرطة الجديد</p>
        </div>

        {/* العمود 2 */}
        <div>
          <h4 className="font-bold mb-4 text-base">التسوق عبر الإنترنت</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="#">المنتجات والأصناف</Link></li>
            <li><Link href="#">الاشتراكات</Link></li>
            <li><Link href="#">خدمة التصدير</Link></li>
          </ul>
        </div>

        {/* العمود 3 */}
        <div>
          <h4 className="font-bold mb-4 text-base">هنا للمساعدة</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="#">تتبع الطلبات</Link></li>
            <li><Link href="#">الأسئلة الشائعة</Link></li>
            <li><Link href="#">الوصفات</Link></li>
            <li><Link href="#">امتياز الشركة</Link></li>
          </ul>
        </div>

        {/* العمود 4 */}
        <div>
          <h4 className="font-bold mb-4 text-base">عن الشركة</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="#">الرسالة والرؤية</Link></li>
            <li><Link href="#">الوظائف</Link></li>
            <li><Link href="#">آخر الأخبار</Link></li>
            <li><Link href="#">نموذج الشكوى</Link></li>
          </ul>
        </div>

        {/* العمود 5 */}
        <div>
          <h4 className="font-bold mb-4 text-base">الشؤون القانونية</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="#">سياسة الخصوصية</Link></li>
            <li><Link href="#">اتفاقيات ملفات تعريف الارتباط</Link></li>
            <li><Link href="#">الشروط والأحكام</Link></li>
          </ul>

          {/* أيقونات التواصل */}
          <div className="flex gap-4 mt-4 text-xl">
            <Link href="#"><i className="ri-facebook-fill"></i></Link>
            <Link href="#"><i className="ri-instagram-line"></i></Link>
            <Link href="#"><i className="ri-linkedin-fill"></i></Link>
            <Link href="#"><i className="ri-whatsapp-line"></i></Link>
            <Link href="#"><i className="ri-mail-line"></i></Link>
          </div>
        </div>
      </div>

      {/* خط فاصل */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-xs relative z-10">
        © 2025 جميع حقوق الملكية محفوظة لتمور ليوا لتعبئة وتجارة التمور
      </div>
    </footer>
  );
}
