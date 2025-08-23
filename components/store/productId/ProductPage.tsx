"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Product } from "@/components/store/DateSwiper/products";
import { products } from "@/components/store/DateSwiper/products";

type PageProps = { params: { id: string } };

// ——— أيقونات بسيطة ———
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Star = ({ filled = false }: { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 ${filled ? "fill-current" : "fill-transparent"} stroke-current`}
  >
    <path
      strokeWidth="2"
      d="M11.48 3.5l2.36 4.78 5.28.77-3.82 3.73.9 5.26-4.72-2.48-4.72 2.48.9-5.26L3.84 9.05l5.28-.77L11.48 3.5z"
    />
  </svg>
);

// ——— مهيئ سعر AED ———
const fmtAED = (n: number) =>
  new Intl.NumberFormat("ar-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 2,
  })
    .format(n)
    .replace(/\u00A0/g, " ");

// ——— Narrowing لخاصية note (بدون any) ———
function getNote(o: unknown): string | undefined {
  if (typeof o !== "object" || o === null) return undefined;
  const note = (o as { note?: unknown }).note;
  return typeof note === "string" ? note : undefined;
}

/* =========================
   الكومبوننت الخارجي (Wrapper)
   ========================= */
export default function ProductPage({ params }: PageProps) {
  const id = Number(params.id);
  const product: Product | undefined = products.find((p) => p.id === id);

  // Early return هنا، بدون أي Hooks في هذا الكومبوننت —> آمن بالنسبة للِّنتر
  if (!product) return <p className="p-8 text-center">المنتج غير موجود</p>;

  // مرّر المنتج إلى كومبوننت فرعي يحتوي الـ Hooks
  return <ProductView product={product} />;
}

/* =========================
   الكومبوننت الداخلي (فيه Hooks)
   ========================= */
function ProductView({ product }: { product: Product }) {
  // ——— حالات ———
  const [activeImg, setActiveImg] = useState(product.gallery[0]);
  const [filling, setFilling] = useState<string | undefined>(product.defaultSelections?.filling);
  const [size, setSize] = useState<string | undefined>(product.defaultSelections?.size);
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(Math.round(product.rating.average));
  const [review, setReview] = useState("");

  // ——— حساب السعر (مرن مع الأحجام) ———
  const basePrice = useMemo(() => {
    if (typeof product.priceAED === "number") return product.priceAED;

    if (product.priceRangeAED) {
      const sizeOpts = product.options.filter((o) => o.type === "size");
      if (!size || sizeOpts.length === 0) return product.priceRangeAED.from;
      const isLargest = size === sizeOpts[sizeOpts.length - 1].id;
      return isLargest ? product.priceRangeAED.to : product.priceRangeAED.from;
    }
    return 0;
  }, [product, size]);

  const price = Math.max(0, basePrice) * Math.max(1, qty);

  // ——— خيارات ———
  const fillingOptions = product.options.filter((o) => o.type === "filling");
  const sizeOptions = product.options.filter((o) => o.type === "size");

  // ——— الواجهة ———
  return (
    <main className="min-h-screen bg-[#faf7f3] text-[#2b2b2b]">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          {/* العمود الأيمن: المعرض + التقييم */}
          <section className="space-y-4 sm:space-y-6 lg:sticky lg:top-8 self-start">
            {/* المعرض */}
            <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm">
              <div className="relative aspect-[1/1] sm:aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-100">
                <Image
                  src={activeImg.src}
                  alt={activeImg.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 60vw, 50vw"
                  priority
                />
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto">
                {product.gallery.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveImg(t)}
                    aria-label="تغيير الصورة"
                    className={`relative h-16 w-20 sm:h-20 sm:w-28 flex-shrink-0 overflow-hidden rounded-lg border transition
                      ${
                        activeImg.id === t.id
                          ? "border-amber-700"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                  >
                    <Image src={t.src} alt={t.alt} fill className="object-cover" />
                    {activeImg.id === t.id && (
                      <span className="absolute right-1 top-1 rounded-full bg-white/90 p-1 text-amber-700">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* التقييم */}
            <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="mb-3 text-base sm:text-lg font-bold">التقييم</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`تم الإرسال — ${rating} نجوم`);
                }}
                className="space-y-3"
              >
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  placeholder="اكتب رأيك…"
                  rows={4}
                />
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      className="p-1 text-amber-500"
                      aria-label={`تقييم ${n} نجوم`}
                    >
                      <Star filled={rating >= n} />
                    </button>
                  ))}
                  <span className="text-sm text-neutral-600">{rating} / 5</span>
                </div>
                <button
                  className="w-full rounded-full bg-amber-700 py-3 text-white transition hover:bg-amber-800"
                  type="submit"
                >
                  إرسال
                </button>
              </form>
            </div>
          </section>

          {/* العمود الأيسر: تفاصيل المنتج */}
          <section className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm">
            <header className="mb-4 min-w-0">
              {product.ribbon && (
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-[11px] sm:text-xs text-amber-700">
                  {product.ribbon}
                </span>
              )}
              <h1 className="mt-2 text-base sm:text-lg md:text-2xl font-extrabold break-words">
                {product.name}
              </h1>
              {product.shortSubtitle && (
                <p className="mt-1 text-[12px] sm:text-sm text-neutral-500 break-words">
                  {product.shortSubtitle}
                </p>
              )}
              <p className="mt-2 text-[13px] sm:text-sm text-neutral-600 break-words">
                {product.description}
              </p>
              <div className="mt-2 text-sm font-semibold">
                {typeof product.priceAED === "number"
                  ? fmtAED(product.priceAED)
                  : `${fmtAED(product.priceRangeAED!.from)} – ${fmtAED(
                      product.priceRangeAED!.to
                    )}`}
              </div>
            </header>

            {/* الحشوة */}
            {fillingOptions.length > 0 && (
              <div className="mb-4">
                <div className="mb-2 text-sm font-semibold">الحشوة</div>
                <div className="flex flex-wrap gap-2">
                  {fillingOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setFilling(opt.id)}
                      className={`rounded-full border px-3 py-1.5 text-sm transition
                        ${
                          filling === opt.id
                            ? "border-amber-600 bg-amber-50 text-amber-800"
                            : "border-neutral-200 hover:bg-neutral-50"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* الحجم */}
            {sizeOptions.length > 0 && (
              <div className="mb-4">
                <div className="mb-2 text-sm font-semibold">الحجم</div>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((opt) => {
                    const note = getNote(opt);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSize(opt.id)}
                        className={`rounded-full border px-3 py-1.5 text-sm transition
                          ${
                            size === opt.id
                              ? "border-amber-600 bg-amber-50 text-amber-800"
                              : "border-neutral-200 hover:bg-neutral-50"
                          }`}
                      >
                        {opt.label}
                        {note && (
                          <span className="ms-2 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                            {note}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* كمية + إضافة للسلة */}
            <div className="mt-4 flex w-full flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="inline-flex w-full sm:w-auto justify-between items-center rounded-full border border-neutral-200">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-2"
                  aria-label="إنقاص الكمية"
                >
                  –
                </button>
                <span className="px-3 py-2 text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-2"
                  aria-label="زيادة الكمية"
                >
                  +
                </button>
              </div>
              <button className="w-full sm:flex-1 rounded-full bg-amber-700 px-5 py-3 text-white transition hover:bg-amber-800">
                أضِف إلى السلة — {fmtAED(price)}
              </button>
            </div>

            {/* أكورديون */}
            <div className="mt-6 divide-y divide-neutral-100 rounded-2xl border border-neutral-100">
              <details className="group p-4" open>
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold">الوصف العام</span>
                  <span className="transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-neutral-600 break-words">
                  التمر المختار من نخيل الخلاص، محشو بالمكسرات المحمّصة، بتغليف أنيق يليق بالضيافة.
                  نحافظ على الأسلوب التقليدي في الفرز والعناية كما اعتدنا من الأجداد.
                </p>
              </details>

              <details className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold">لماذا تختار هذا البوكس</span>
                  <span className="transition group-open:rotate-180">⌄</span>
                </summary>
                <ul className="ms-5 mt-3 list-disc text-sm text-neutral-600">
                  <li>انتقاء يدوي.</li>
                  <li>تغليف تراثي أنيق للهدايا.</li>
                  <li>شحن داخل الإمارات.</li>
                </ul>
              </details>

              <details className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold">تفاصيل المنتج</span>
                  <span className="transition group-open:rotate-180">⌄</span>
                </summary>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-neutral-600 sm:grid-cols-3">
                  <div>المنشأ: الأحساء</div>
                  <div>التعبئة: ورق كرافت</div>
                  <div>الدفع: Visa / Mastercard</div>
                </div>
              </details>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
