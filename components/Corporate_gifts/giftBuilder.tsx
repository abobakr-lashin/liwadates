"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

/* ========= Types ========= */
type StepKey = "box" | "size" | "fillings";

type Box = {
  id: string;
  name: string;
  image: string;
  from: number;
  to: number;
};

type SizeOpt = { id: string; label: string; image: string };
type Filling = { id: string; name: string; image: string };

/* ========= Dummy data (بدّلها ببياناتك) ========= */
const BOXES: Box[] = [
  { id: "royal",  name: "بوكس الرئاسة",   image: "/products/HoverProducts2.png", from: 30, to: 50 },
  { id: "marfa",  name: "عبوة المرفأ",     image: "/products/HoverProducts3.png", from: 30, to: 50 },
  { id: "umhasn", name: "عبوة أم الحصن",   image: "/products/HoverProducts1.png", from: 30, to: 50 },
  { id: "royal2", name: "بوكس الرئاسة",    image: "/products/HoverProducts4.png", from: 30, to: 50 },
];

/** صور الأحجام */
const SIZES: SizeOpt[] = [
  { id: "s", label: "بوكس صغير",   image: "/products/size-small.png"  },
  { id: "m", label: "بوكس متوسط",  image: "/products/size-medium.png" },
  { id: "l", label: "بوكس كبير",   image: "/products/size-large.png"  },
];

/** صور الحشوات (تجريبية) */
const FILLINGS: Filling[] = Array.from({ length: 9 }).map((_, i) => ({
  id: `f-${i + 1}`,
  name: "تمور فاخرة",
  image: `/products/HoverProducts${i < 4 ? i + 1 : 1}.png`,
}));

/* ========= Helpers ========= */
const fmtAED = (n: number) =>
  new Intl.NumberFormat("ar-AE", { style: "currency", currency: "AED" })
    .format(n)
    .replace(/\u00A0/g, " ");

const StepIconWrap = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div className={`grid h-10 w-10 place-items-center rounded-full ${active ? "bg-[#95684B]/10 text-[#95684B]" : "bg-neutral-100 text-[#95684B]"}`}>
    {children}
  </div>
);

/* أيقونات بسيطة */
const IconBox = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path d="M3 8l9-5 9 5-9 5-9-5z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 8v8l9 5 9-5V8" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const IconRuler = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M7 6v12M11 6v12M15 6v12" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconDates = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <circle cx="8" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="16" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 8v8" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

/* ========= Page ========= */
export default function GiftBuilder() {
  const [step, setStep] = useState<StepKey>("box");

  const [boxId, setBoxId] = useState<string | null>(null);
  const [sizeId, setSizeId] = useState<string | null>(null);
  const [selectedFillings, setSelectedFillings] = useState<string[]>([]);

  // مراجع الأقسام للسكرول الناعم
  const sizeStepRef = useRef<HTMLDivElement>(null);
  const fillingsStepRef = useRef<HTMLDivElement>(null);

  const box = BOXES.find((b) => b.id === boxId);

  const toggleFilling = (id: string) =>
    setSelectedFillings((arr) => (arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]));

  const totalFrom = useMemo(() => (box ? box.from : 0), [box]);
  const totalTo   = useMemo(() => (box ? box.to   : 0), [box]);

  // انتقال مع سكرول ناعم
  const goTo = (k: StepKey) => {
    setStep(k);
    requestAnimationFrame(() => {
      const el = k === "size" ? sizeStepRef.current : k === "fillings" ? fillingsStepRef.current : null;
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // منع الانتقال لمرحلة لاحقة من الشريط العلوي بدون السابق
  const guardedSetStep = (k: StepKey) => {
    if (k === "size" && !boxId) return;
    if (k === "fillings" && (!boxId || !sizeId)) return;
    goTo(k);
  };

  const StepBtn = ({ k, title, sub, icon }: { k: StepKey; title: string; sub: string; icon: React.ReactNode }) => {
    const active = step === k;
    const disabled = (k === "size" && !boxId) || (k === "fillings" && (!boxId || !sizeId));
    return (
      <button
        type="button"
        onClick={() => guardedSetStep(k)}
        disabled={disabled}
        className={`flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5 transition hover:shadow-md ${active ? "ring-[#95684B]/30" : ""} disabled:opacity-50`}
      >
        <StepIconWrap active={active}>{icon}</StepIconWrap>
        <div className="text-right">
          <div className="text-[13px] font-semibold text-[#95684B]">{title}</div>
          <div className="text-[11px] text-neutral-500">{sub}</div>
        </div>
      </button>
    );
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#faf7f3] text-[#2b2b2b]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
        <header className="mb-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#95684B] text-center lg:text-right">
            قم بتخصيص هديتك الخاصة بك
          </h1>
          <p className="mt-1 text-center text-sm text-neutral-600 lg:text-right">
            1) اختر العبوة، 2) اختر الحجم (صور: صغير/متوسط/كبير)، 3) اختر الحشوات.
          </p>
        </header>

        {/* أزرار المراحل */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          <StepBtn k="box"      title="اختر العبوة"  sub="شكل الصندوق"            icon={<IconBox />} />
          <StepBtn k="size"     title="اختر الحجم"   sub="صغير • متوسط • كبير"    icon={<IconRuler />} />
          <StepBtn k="fillings" title="اختر الحشوات" sub="التمور والمكسرات"       icon={<IconDates />} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* المحتوى المتبدّل (يمين) */}
          <section className="order-2 space-y-8 lg:order-1 lg:col-span-8">
            {/* المرحلة 1: العبوة */}
            {step === "box" && (
              <>
                <h2 className="text-sm font-semibold text-[#95684B]">اختر نوع العبوة</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {BOXES.map((p) => {
                    const active = p.id === boxId;
                    return (
                      <article
                        key={p.id}
                        className={`rounded-2xl bg-white p-4 shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 ${active ? "outline outline-2 outline-[#95684B]/40" : ""}`}
                      >
                        <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-100">
                          <Image src={p.image} alt={p.name} fill className="object-contain p-4" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900">{p.name}</h3>
                        <div className="mt-2 text-sm font-semibold">
                          {p.from.toFixed(2)} - {p.to.toFixed(2)} <span className="text-[#95684B]">AED</span>
                        </div>
                        <button
                          onClick={() => { setBoxId(p.id); goTo("size"); }}
                          className="mt-3 w-full rounded-full bg-[#95684B] py-2.5 text-sm text-white hover:opacity-95"
                        >
                          اختر هذه العبوة
                        </button>
                      </article>
                    );
                  })}
                </div>
              </>
            )}

            {/* المرحلة 2: الحجم (بصور) */}
            {step === "size" && (
              <>
                {/* مرساة للسكرول */}
                <div ref={sizeStepRef} className="scroll-mt-28" />
                <h2 className="text-sm font-semibold text-[#95684B]">اختر الحجم</h2>
                <p className="mb-2 text-xs text-neutral-500">اختر أحد الأحجام التالية للمتابعة.</p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {SIZES.map((s) => {
                    const active = sizeId === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => { setSizeId(s.id); goTo("fillings"); }}
                        className={`text-right rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5 transition hover:shadow-md ${active ? "outline outline-2 outline-[#95684B]/40" : ""}`}
                        aria-pressed={active}
                      >
                        <div className="relative mb-2 aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-100 bg-white">
                          <Image src={s.image} alt={s.label} fill className="object-contain p-3" />
                        </div>
                        <div className="px-1 pb-1 text-sm font-semibold text-gray-900">{s.label}</div>
                        <div className="px-1 text-[11px] text-neutral-500">اضغط للانتقال لاختيار الحشوات</div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* المرحلة 3: الحشوات */}
            {step === "fillings" && (
              <>
                {/* مرساة للسكرول */}
                <div ref={fillingsStepRef} className="scroll-mt-28" />
                <h2 className="text-sm font-semibold text-[#95684B]">اختر الحشوات المتاحة</h2>
                <p className="mb-2 text-xs text-neutral-500">يمكنك تحديد أكثر من نوع.</p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {FILLINGS.map((f) => {
                    const active = selectedFillings.includes(f.id);
                    return (
                      <button
                        key={f.id}
                        onClick={() => toggleFilling(f.id)}
                        className={`relative rounded-2xl bg-white p-2 text-left shadow-sm ring-1 ring-black/5 transition hover:shadow-md ${active ? "outline outline-2 outline-[#95684B]/40" : ""}`}
                      >
                        <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-xl border border-neutral-100">
                          <Image src={f.image} alt={f.name} fill className="object-cover" />
                        </div>
                        <div className="px-1 pb-1 text-sm font-medium text-gray-800">{f.name}</div>
                        {active && (
                          <span className="absolute left-2 top-2 rounded-full bg-[#95684B] px-2 py-0.5 text-[10px] text-white">
                            مُختار
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </section>

          {/* الملخص (يسار) */}
          <aside className="order-1 lg:order-2 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-4">
              <div className="rounded-2xl bg-white p-4 shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                <h3 className="mb-3 text-sm font-semibold text-[#95684B]">تفاصيل الطلب</h3>

                {/* العبوة */}
                {box ? (
                  <div className="mb-3 flex items-center gap-3 rounded-xl bg-neutral-50 p-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                      <Image src={box.image} alt={box.name} fill className="object-contain p-1.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-gray-900">{box.name}</div>
                      <div className="text-[11px] text-neutral-500">
                        {box.from.toFixed(2)} - {box.to.toFixed(2)} AED
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-3 rounded-xl border border-dashed border-neutral-300 p-3 text-center text-xs text-neutral-500">
                    لم يتم اختيار عبوة بعد.
                  </div>
                )}

                {/* الحجم (مع صورة مصغرة) */}
                <div className="mb-2 flex items-center gap-2 text-xs">
                  <span className="text-neutral-600">الحجم:</span>
                  {sizeId ? (
                    <>
                      <div className="relative h-6 w-10 overflow-hidden rounded border border-neutral-200">
                        <Image
                          src={SIZES.find((s) => s.id === sizeId)!.image}
                          alt={SIZES.find((s) => s.id === sizeId)!.label}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium">{SIZES.find((s) => s.id === sizeId)?.label}</span>
                    </>
                  ) : (
                    <span className="text-neutral-400">—</span>
                  )}
                </div>

                {/* الحشوات */}
                <div>
                  <div className="mb-2 text-xs text-neutral-600">الحشوات المختارة:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedFillings.length === 0 && <span className="text-xs text-neutral-400">لا يوجد</span>}
                    {selectedFillings.slice(0, 4).map((id) => {
                      const f = FILLINGS.find((x) => x.id === id)!;
                      return (
                        <div key={id} className="relative h-8 w-8 overflow-hidden rounded-md border border-neutral-200">
                          <Image src={f.image} alt={f.name} fill className="object-cover" />
                        </div>
                      );
                    })}
                    {selectedFillings.length > 4 && (
                      <span className="text-xs text-neutral-500">+{selectedFillings.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* الإجمالي */}
                <div className="mt-4 rounded-xl bg-neutral-50 p-3">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span>الإجمالي التقريبي</span>
                    <span className="text-[#95684B]">
                      {fmtAED(totalFrom)} – {fmtAED(totalTo)}
                    </span>
                  </div>
                  <button className="mt-3 w-full rounded-full bg-[#95684B] py-2.5 text-white hover:opacity-95">
                    أضفها إلى السلة
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-600 shadow-sm">
                <h4 className="mb-2 font-semibold text-[#95684B]">تفاصيل التسليم</h4>
                <p>الشحن القياسي من 2–5 أيام داخل الإمارات. طرق الدفع: Visa / Mastercard.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
