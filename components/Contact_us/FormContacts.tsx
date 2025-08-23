"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// === Schema & Types ===
const FormSchema = z.object({
  fullName: z.string().min(3, "أدخل اسمًا صحيحًا"),
  method: z.enum(["email", "phone", "whatsapp"]),
  email: z.string().email("بريد غير صالح").optional(),
  phone: z
    .string()
    .regex(/^[\d +()-]{7,}$/i, "رقم غير صالح")
    .optional(),
  notes: z.string().max(500, "الحد الأقصى 500 حرف").optional(),
}).superRefine((val, ctx) => {
  if (val.method === "email" && !val.email) {
    ctx.addIssue({ code: "custom", path: ["email"], message: "البريد الإلكتروني مطلوب" });
  }
  if ((val.method === "phone" || val.method === "whatsapp") && !val.phone) {
    ctx.addIssue({ code: "custom", path: ["phone"], message: "رقم الهاتف مطلوب" });
  }
});

type FormValues = z.infer<typeof FormSchema>;

// === Simple icons ===
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M22 16.9v2a2 2 0 01-2.2 2A19.9 19.9 0 013 5.2 2 2 0 015 3h2a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 10a16 16 0 006 6l.6-.6a2 2 0 012.1-.5c.8.2 1.7.4 2.6.6A2 2 0 0122 16.9z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { method: "email" },
  });

  const method = watch("method");

  async function onSubmit(data: FormValues) {
    // استبدل بما يناسبك (إرسال إلى API مثلاً)
    await new Promise((r) => setTimeout(r, 600));
    alert("تم إرسال النموذج بنجاح ✅");
    reset({ method: data.method }); // نحافظ على الاختيار
  }

  return (
    <main  className=" bg-[#faf7f3] text-[#2b2b2b] p-5">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        {/* الحاوية: صورتك يسار + فورم يمين */}
        <div className="grid items-center gap-6 lg:grid-cols-2">
               {/* بطاقة النموذج */}
          <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
            <header className="mb-0 ">
              <h1 className="text-3xl p-2 font-bold text-[#95684B] sm:text-xl">نموذج التواصل</h1>
              <p className="  mt-4 text-neutral-500">
           للطلبات الخاصة، يرجى تعبئة النموذج التالي، وسيتواصل معكم أخصائي الهدايا لدينا لإتمام التصميم المثالي:
              </p>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 he-full p-10">
              {/* الاسم */}
              <div>
                <label className="sr-only" htmlFor="fullName">اسم العميل</label>
                <input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="اسم العميل"
                  className="w-full rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#95684B] focus:ring-2 focus:ring-[#95684B]/20"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              {/* طريقة التواصل (Select) */}
              <div className="relative">
                <label className="sr-only" htmlFor="method">طريقة التواصل</label>
                <select
                  id="method"
                  {...register("method")}
                  className="w-full appearance-none rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#95684B] focus:ring-2 focus:ring-[#95684B]/20"
                >
                  <option value="phone">الهاتف</option>
                  <option value="whatsapp">واتساب</option>
                </select>
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">⌄</span>
              </div>

              {/* البريد الإلكتروني */}

                <div>
                  <label className="sr-only" htmlFor="email">البريد الإلكتروني</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="البريد الإلكتروني"
                    className="w-full rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#95684B] focus:ring-2 focus:ring-[#95684B]/20"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>

              {/* الهاتف/واتساب */}
              {method !== "email" && (
                <div>
                  <label className="sr-only" htmlFor="phone">رقم الهاتف</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="رقم الهاتف"
                    className="w-full rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#95684B] focus:ring-2 focus:ring-[#95684B]/20"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              )}

              {/* ملاحظات إضافية */}
              <div>
                <label className="sr-only" htmlFor="notes">ملاحظات إضافية</label>
                <textarea
                  id="notes"
                  rows={3}
                  {...register("notes")}
                  placeholder="ملاحظات إضافية"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#95684B] focus:ring-2 focus:ring-[#95684B]/20"
                />
                {errors.notes && (
                  <p className="mt-1 text-xs text-red-600">{errors.notes.message}</p>
                )}
              </div>

              {/* زر الإرسال + سطر معلومات سريع */}
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  disabled={isSubmitting}
                  className="rounded-full bg-[#95684B] px-8 py-3 text-sm text-white shadow hover:opacity-95 disabled:opacity-60"
                >
                  {isSubmitting ? "جارِ الإرسال..." : "إرسال"}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-600">
                  <PhoneIcon />
                  <span>0723456789</span>
                  <span className="mx-1">•</span>
                  <span>متوفر على واتساب</span>
                </div>
              </div>
            </form>
          </div>
          {/* الرسمة/الصورة (بدّل المسار بما لديك) */}
          <div className="p-5 relative mx-auto hidden h-[560px] w-full max-w-[960px] overflow-hidden rounded-2xl bg-[url('/pattern.png')] bg-cover bg-center lg:block">
            <Image
              src="/FormContacts/ContactPage.png" // ضع صورتك في /public
              alt="تواصل معنا"
              fill
              className="object-contain p-6"
              sizes="(max-width:1024px) 50vw, 560px"
              priority
            />
          </div>


        </div>
      </div>
    </main>
  );
}
