import Image from "next/image";

const reasons = [
  "فريق خبراء متخصص وملتزم",
  "توفر مستمر وجودة عالية",
  "دعم فني واستشارات مجانية",
  "شحن سريع ومجاني للطلبات الكبيرة",
];

const stats = [
  { label: "مزارع نخيل", value: 20 },
  { label: "سنوات خبرة", value: 1000 },
  { label: "عملاء راضون", value: 2500 },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-8xl mx-auto m-auto justify-center px-6 py-12 flex flex-col md:flex-row items-center gap-10">


      {/* الصورة على اليمين */}
      <div className="flex-shrink-0 w-full max-w-lg h-[360px] relative">
        <Image
          src="/business/WhyChooseUs.png"  // غيّر للمسار الصحيح للصورة عندك
          alt="لماذا تختارنا"
          fill
          className="object-contain"
          priority
        />
      </div>
         {/* النص على اليسار */}
      <div className="bg-[#f9f4ef] rounded-2xl p-8 max-w-lg w-full shadow-lg text-right">
        <h2 className="text-xl font-semibold mb-6">لماذا تختارنا</h2>
        <ul className="mb-8 space-y-3 list-none">
          {reasons.map((reason, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#94684a] text-white font-bold text-sm">✓</span>
              {reason}
            </li>
          ))}
        </ul>
        <div className="flex justify-between text-center text-gray-700 font-semibold">
          {stats.map(({ label, value }, idx) => (
            <div key={idx}>
              <p className="text-2xl">{value}+</p>
              <p className="text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
