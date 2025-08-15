'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const schema = z.object({
  fullName: z.string().min(3, 'الاسم يجب أن يكون 3 أحرف على الأقل'),
  company: z.string().optional(),
  email: z.string().email('البريد غير صالح'),
  phone: z
    .string()
    .min(8, 'رقم الهاتف غير مكتمل')
    .regex(/^[0-9+\-\s()]+$/, 'استخدم أرقاماً فقط'),
  service: z.string().min(1, 'اختر نوع الخدمة'),
  notes: z.string().max(1000, 'الحد الأقصى 1000 حرف').optional(),
});

type FormData = z.infer<typeof schema>;

const services = [
  { value: '', label: '-- نوع الخدمة --' },
  { value: 'branding', label: 'الهوية البصرية' },
  { value: 'web', label: 'تطوير موقع' },
  { value: 'seo', label: 'تحسين محركات البحث' },
  { value: 'social', label: 'إدارة السوشيال' },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: 'onTouched' });

  const [serverMsg, setServerMsg] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setServerMsg(null);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('فشل الإرسال');
      setServerMsg('تم الإرسال بنجاح، سنعاود الاتصال بك قريباً.');
      reset();
    } catch (e) {
      setServerMsg('حدث خطأ أثناء الإرسال. حاول مجدداً.');
    }
  };

  return (

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-5 ">
          {/* الاسم الكامل */}
          <div>
            <input
              type="text"
              placeholder="الاسم الكامل"
              aria-invalid={!!errors.fullName}
              {...register('fullName')}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-gray-400"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* اسم الشركة */}
          <div>
            <input
              type="text"
              placeholder="اسم الشركة"
              {...register('company')}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-gray-400"
            />
          </div>

          {/* البريد */}
          <div>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              aria-invalid={!!errors.email}
              {...register('email')}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-gray-400"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* الهاتف */}
          <div>
            <input
              type="tel"
              placeholder="رقم الهاتف"
              aria-invalid={!!errors.phone}
              {...register('phone')}
              className="w-full rounded-2xl border border-gray-200
               bg-white px-4 py-3 outline-none transition focus:border-gray-400
               placeholder:absolute placeholder:right-3

               "
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* نوع الخدمة */}
          <div className="relative">
            <select
              aria-invalid={!!errors.service}
              {...register('service')}
              className="w-full appearance-none  rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-gray-400"
              defaultValue=""
            >
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {/* السهم */}
            <span className="pointer-events-none absolute inset-y-0 start-3 flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="opacity-50"
              >
                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            {errors.service && (
              <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>
            )}
          </div>

          {/* الملاحظات */}
          <div>
            <textarea
              rows={5}
              placeholder="ملاحظات إضافية"
              {...register('notes')}
              className="w-full resize-y rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-gray-400"
            />
          </div>

          {/* الإرسال + رقم واتساب */}
          <div className="mt-4 flex items-center justify-end gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>0123456789</span>
                {/* أيقونة واتساب بسيطة (SVG) */}
             <span aria-hidden className="inline-block">
  <FaWhatsapp size={25} className="text-[#ab7e52]" />
</span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#8B6B56] px-8 py-3 text-white transition hover:opacity-95 disabled:opacity-60"
            >
              {isSubmitting ? 'جارٍ الإرسال…' : 'إرسال'}
            </button>


          </div>

          {/* رسالة الخادم */}
          {serverMsg && (
            <p className="mt-2 text-sm text-gray-700">{serverMsg}</p>
          )}
        </form>
  );
}
