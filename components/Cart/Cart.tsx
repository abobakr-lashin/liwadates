"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

/* ============ Types ============ */
type CartItem = {
  id: string;
  name: string;
  subtitle?: string;
  image: string; // الصورة الرئيسية الابتدائية
  price: number; // سعر الوحدة
  qty: number;
  thumbnails?: { id: string; src: string; alt: string }[];
};

/* ============ Dummy Data ============ */
const INITIAL_ITEMS: CartItem[] = [
  {
    id: "bx-001",
    name: "بوكس الرئاسة",
    subtitle: "بوكس الاستدامة للتمور – رفاهية تحترم البيئة!",
    image: "/products/HoverProducts1.png",
    price: 50,
    qty: 1,
    thumbnails: [
      { id: "t1", src: "/products/HoverProducts2.png", alt: "حشوة 1" },
      { id: "t2", src: "/products/HoverProducts3.png", alt: "حشوة 2" },
      { id: "t3", src: "/products/HoverProducts4.png", alt: "حشوة 3" },
      { id: "t4", src: "/products/HoverProducts1.png", alt: "حشوة 4" },
    ],
  },
  {
    id: "bx-002",
    name: "بوكس الرئاسة",
    subtitle: "خلطة خاصة",
    image: "/products/HoverProducts1.png",
    price: 50,
    qty: 1,
    thumbnails: [
      { id: "t1", src: "/products/HoverProducts2.png", alt: "حشوة 1" },
      { id: "t2", src: "/products/HoverProducts3.png", alt: "حشوة 2" },
      { id: "t3", src: "/products/HoverProducts4.png", alt: "حشوة 3" },
      { id: "t4", src: "/products/HoverProducts1.png", alt: "حشوة 4" },
    ],
  },
];

/* ============ Helpers ============ */
const AED = (n: number) =>
  new Intl.NumberFormat("ar-AE", { style: "currency", currency: "AED" })
    .format(n)
    .replace(/\u00A0/g, " ");

const Trash = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path
      d="M3 6h18M9 6V4h6v2m-8 0h10l-1 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Info = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path
      d="M12 17v-5m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Truck = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      d="M3 7h10v7H3zM13 9h4l3 3v2h-7V9zM5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 15 18z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ============ Page ============ */
export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
  const [coupon, setCoupon] = useState("");
  const [shipping, setShipping] = useState<"standard" | "express">("standard");

  // صورة رئيسية نشطة لكل عنصر
  const [activeImgById, setActiveImgById] = useState<Record<string, string>>(
    () => Object.fromEntries(INITIAL_ITEMS.map((it) => [it.id, it.image]))
  );

  // حسابات
  const subtotal = useMemo(
    () => items.reduce((s, it) => s + it.price * it.qty, 0),
    [items]
  );
  const couponDiscount = useMemo(() => {
    if (!coupon) return 0;
    if (coupon.trim().toUpperCase() === "LIWA10") return Math.min(subtotal * 0.1, 50);
    return 0;
  }, [coupon, subtotal]);
  const shippingCost = shipping === "express" ? 25 : 10;
  const vat = (subtotal - couponDiscount + shippingCost) * 0.05;
  const total = subtotal - couponDiscount + shippingCost + vat;

  const updateQty = (id: string, change: number) =>
    setItems((arr) =>
      arr.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + change) } : it
      )
    );
  const removeItem = (id: string) =>
    setItems((arr) => arr.filter((it) => it.id !== id));
  const setMainImage = (id: string, src: string) =>
    setActiveImgById((m) => ({ ...m, [id]: src }));

  return (
    <main dir="rtl" className="min-h-screen bg-[#faf7f3] text-[#2b2b2b]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#95684B]">السلة</h1>
          <p className="mt-2 text-sm text-neutral-600">
            قم بمراجعة محتوى السلة وتعديل الكميات أو إضافة كوبون قبل إتمام الطلب.
          </p>
        </div>

        {/* شبكة متجاوبة: عمود واحد على الجوال، عمودان على lg */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* عناصر السلة */}
          <section className="lg:col-span-8 space-y-4 order-2 lg:order-1">
            {items.map((it) => {
              const mainSrc = activeImgById[it.id] ?? it.image;
              return (
                <article
                  key={it.id}
                  className="rounded-2xl bg-white p-4 sm:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5"
                >
                  {/* أدوات */}
                  <div className="mb-3 flex items-center gap-2 text-neutral-500">
                    <button
                      onClick={() => removeItem(it.id)}
                      className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50"
                      aria-label="حذف العنصر"
                      title="حذف"
                    >
                      <Trash /> حذف
                    </button>
                  </div>

                  {/* محتوى البطاقة */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,220px] relative">
                    {/* يسار: صورة + نص + مصغرات */}
                    <div className="min-w-0">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        {/* الصورة الرئيسية (مقاسات مرنة) */}
                        <div className="relative w-full aspect-[4/3] sm:w-72 sm:flex-shrink-0 sm:aspect-[4/3] md:w-80 rounded-lg border border-neutral-200 bg-white overflow-hidden">
                          <Image
                            src={mainSrc}
                            alt={it.name}
                            fill
                            className="object-contain p-3"
                            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 420px"
                          />
                        </div>

                        {/* النص */}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                            {it.name}
                          </h3>
                          {it.subtitle && (
                            <p className="mt-1 text-sm text-neutral-500">{it.subtitle}</p>
                          )}

                          <div className="mt-4 text-sm text-neutral-600">
                            أنواع التمور والحشوات
                          </div>

                          {/* المصغرات */}
                          {it.thumbnails?.length ? (
                            <div className="mt-3 flex items-center gap-2 overflow-x-auto p-10">
                              {it.thumbnails.map((t) => {
                                const selected = mainSrc === t.src;
                                return (
                                  <button
                                    key={t.id}
                                    onClick={() => setMainImage(it.id, t.src)}
                                    className={`relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 overflow-hidden rounded-md border transition ${
                                      selected
                                        ? "border-[#95684B] ring-2 ring-[#95684B]/20"
                                        : "border-neutral-200 hover:border-neutral-300"
                                    }`}
                                    aria-pressed={selected}
                                    aria-label={`تبديل الصورة إلى ${t.alt}`}
                                    title={t.alt}
                                  >
                                    <Image
                                      src={t.src}
                                      alt={t.alt}
                                      fill
                                      className="object-contain p-1.5"
                                      sizes="64px"
                                    />
                                  </button>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    {/* يمين: السعر + الكمية + مجموع العنصر */}
                    <div className="flex md:items-end items-start md:text-right text-left gap-3 md:gap-4 flex-col md:absolute md:end-0 md:bottom-0 ">
                      <div className="text-sm font-semibold">{AED(it.price)}</div>

                      <div className="inline-flex items-center rounded-full border border-neutral-200">
                        <button
                          onClick={() => updateQty(it.id, -1)}
                          className="px-3 py-2"
                          aria-label="إنقاص الكمية"
                        >
                          –
                        </button>
                        <span className="min-w-[2.5rem] text-center">{it.qty}</span>
                        <button
                          onClick={() => updateQty(it.id, +1)}
                          className="px-3 py-2"
                          aria-label="زيادة الكمية"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-xs text-neutral-500">
                        المجموع:{" "}
                        <span className="font-medium text-neutral-700">
                          {AED(it.qty * it.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {items.length === 0 && (
              <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
                السلة فارغة حالياً.
              </div>
            )}
          </section>

          {/* الملخص */}
          <aside className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-8 h-fit rounded-2xl bg-white p-4 sm:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
            <h2 className="mb-4 text-sm font-semibold text-[#95684B]">الملخص</h2>

            {/* كوبون */}
            <div className="mb-4">
              <label className="mb-2 block text-xs text-neutral-600">كوبون الخصم</label>
              <div className="flex items-center gap-2">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="مثال: LIWA10"
                  className="h-10 flex-1 rounded-xl border border-neutral-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-amber-200"
                />
                <button
                  onClick={() => setCoupon((c) => c.trim())}
                  className="h-10 rounded-xl bg-[#95684B] px-4 text-sm text-white hover:opacity-95"
                >
                  تطبيق
                </button>
              </div>
              {coupon && (
                <p className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                  <Info />
                  {couponDiscount > 0 ? "تم تطبيق الخصم." : "الكود غير صالح."}
                </p>
              )}
            </div>

            {/* الشحن */}
            <div className="mb-4 rounded-xl border border-neutral-200 p-3">
              <div className="mb-2 text-xs font-semibold text-neutral-600">طريقة الشحن</div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 p-2.5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ship"
                      checked={shipping === "standard"}
                      onChange={() => setShipping("standard")}
                    />
                    <span className="text-sm">شحن عادي (3–5 أيام)</span>
                  </div>
                  <span className="text-sm text-neutral-700">{AED(10)}</span>
                </label>
                <label className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 p-2.5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ship"
                      checked={shipping === "express"}
                      onChange={() => setShipping("express")}
                    />
                    <span className="text-sm">شحن سريع (1–2 يوم)</span>
                  </div>
                  <span className="text-sm text-neutral-700">{AED(25)}</span>
                </label>
              </div>
            </div>

            {/* تفاصيل المبلغ */}
            <div className="mb-4 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">المجموع الفرعي</span>
                <span className="font-medium">{AED(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">خصم الكوبون</span>
                <span className="font-medium text-emerald-600">-{AED(couponDiscount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">تكلفة الشحن</span>
                <span className="font-medium">{AED(shippingCost)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">ضريبة القيمة المضافة (5%)</span>
                <span className="font-medium">{AED(vat)}</span>
              </div>
              <div className="my-2 h-px w-full bg-neutral-200/70" />
              <div className="flex items-center justify-between text-base">
                <span className="font-semibold">الإجمالي</span>
                <span className="font-semibold text-[#95684B]">{AED(total)}</span>
              </div>
            </div>

            <button className="mt-3 w-full rounded-full bg-[#95684B] py-3 text-white shadow-sm transition hover:opacity-95">
              إتمام الطلب
            </button>

            {/* تفاصيل التسليم */}
            <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-600">
              <div className="mb-2 flex items-center gap-2 font-semibold text-[#95684B]">
                <Truck /> تفاصيل التسليم
              </div>
              <p>
                يتم شحن الطلبات داخل الإمارات خلال 1–5 أيام عمل. يرجى التأكد من العنوان قبل الدفع.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
