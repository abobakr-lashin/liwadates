import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2C1E15] text-gray-300 font-sans py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 text-right relative">
          {/* العمود الأخير أيقونات وحقوق */}
          <div className="flex flex-col justify-between">
            <div>
              <Image
               width={144}
                height={36}
                src="/logo.png"
                alt="Liwa Bates Logo"
                className="mb-6 w-36 mx-auto md:mx-0"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6">
              نقدم لكم مصنع تمور ليوا، الواقع في قلب مدينة ليوا العريقة بتاريخها ونخيلها في إمارة أبوظبي بدولة الإمارات العربية المتحد
            </p>
            <div className="flex justify-center md:justify-start gap-6 mt-6 text-[#c1954f] text-xl">
              <a href="#" aria-label="Instagram" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-white transition">
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition">
                <FaYoutube />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-white transition">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* الأعمدة الأخرى مع الفواصل */}
          <div className="pr-6">
            <h3 className="text-white font-semibold mb-4">التسويق عبر الانترنت وروابط</h3>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>الشحن والتوصيل</li>
              <li>المتجر</li>
              <li>خدمات العينة</li>
              <li>الامتياز التجاري</li>
            </ul>
          </div>

          <div className="pr-6">
            <h3 className="text-white font-semibold mb-4">من نحن</h3>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>نبذة عن المصنع</li>
              <li>الوظائف</li>
              <li>الرؤية</li>
              <li>شهادات الجودة</li>
            </ul>
          </div>

          <div className="pr-6">
            <h3 className="text-white font-semibold mb-4">الشؤون القانونية</h3>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>سياسة الخصوصية</li>
              <li>اتفاقية ملفات تعريف الارتباط</li>
              <li>الأسئلة الشائعة</li>
              <li>الشروط والأحكام</li>
            </ul>
          </div>

          {/* معلومات جهة اليسار */}
          <div className="space-y-6 text-sm flex flex-col justify-between">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#c1954f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 3h-1a2 2 0 00-2 2v3a2 2 0 002 2h1a2 2 0 002-2V5a2 2 0 00-2-2z"
                />
              </svg>
              مزرع خلف حميد جمعية الظفرة التعاونية بجوار مركز الشريعة الجديد
            </p>

            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#c1954f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M16 8a6 6 0 01-12 0" />
                <path d="M12 14v6" />
              </svg>
              info@liwabates.com
            </p>

            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#c1954f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                <path d="M21 16v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5" />
              </svg>
              00971288280300
            </p>

            <div>
              <p className="uppercase font-semibold mb-1 text-white">Subscribe Now</p>
              <p className="text-xs mb-3">Subscribe Now to receive exclusive offers.</p>
              <form className="flex flex-col sm:flex-row-reverse gap-2 w-full">

                <input
                  type="email"
                  placeholder="E-Mail Address"
                  className="rounded-full bg-white pr-10 placeholder:left-5 placeholder:absolute pl-5 p-2 flex-1 focus:outline-none text-gray-900"
                />
        <button
                  type="submit"
                  className="bg-[#7c5a26] rounded-full px-6 py-2  text-white font-semibold hover:bg-[#a7853c] transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <p className="bg-[#1D130D] text-white text-center m-auto w-full py-4">
        © 2025 جميع حقوق الملكية محفوظة لتمور الواحة ومزارع النور
      </p>
    </>
  );
}
