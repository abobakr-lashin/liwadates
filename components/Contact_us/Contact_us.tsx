"use client";

import Link from "next/link";
import { useState } from "react";

/* ========== Types ========== */
type Contact = {
  id: string;
  title: string;
  area: string;       // (الظفرة - الإمارات العربية المتحدة)
  address?: string;
  phoneLabel?: string;
  phones?: string[];
  emailLabel?: string;
  email?: string;
  emoji: string;      // أيقونة دائرية
};

/* ========== Data (عدّلها حسب الحاجة) ========== */
const CONTACTS: Contact[] = [
  {
    id: "factory",
    title: "مصنع تمور ليوَا",
    area: "(الظفرة - الإمارات العربية المتحدة)",
    address: "مصنع تغليف وتجميع التمور، بالقرب من مركز لنبضة الجديد",
    phoneLabel: "هاتف",
    phones: ["0123456789"],
    emailLabel: "البريد الإلكتروني",
    email: "info@liwadates.com",
    emoji: "📚",
  },
  {
    id: "shops",
    title: "محلات تمور ليوَا",
    area: "(العين - الإمارات العربية المتحدة)",
    address: "شارع الرئيسي - العين، مقابل محطة الحافلات",
    phoneLabel: "هاتف",
    phones: ["0123456789", "0123456789"],
    emailLabel: "البريد الإلكتروني",
    email: "liwa.shop19@gmail.com",
    emoji: "🏪",
  },
  {
    id: "sales",
    title: "إدارة مبيعات تمور ليوَا",
    area: "(العين - الإمارات العربية المتحدة)",
    address: "شارع الرئيسي - العين، مقابل محطة الحافلات",
    phoneLabel: "هاتف",
    phones: ["0123456789"],
    emailLabel: "البريد الإلكتروني",
    email: "Tebi.liwadates@gmail.com",
    emoji: "📊",
  },
  {
    id: "feedback",
    title: "قسم الملاحظات",
    area: "(الظفرة - الإمارات العربية المتحدة)",
    emailLabel: "البريد الإلكتروني",
    email: "info@liwadates.com",
    emoji: "📝",
  },
  {
    id: "hr",
    title: "إدارة الموارد البشرية",
    area: "(الظفرة - الإمارات العربية المتحدة)",
    emailLabel: "البريد الإلكتروني",
    email: "hr@liwadates.com",
    emoji: "👥",
  },
  {
    id: "procurement",
    title: "إدارة المشتريات تمور ليوَا",
    area: "(الظفرة - الإمارات العربية المتحدة)",
    emailLabel: "البريد الإلكتروني",
    email: "liwa.accs@gmail.com",
    emoji: "🛒",
  },
];

/* ========== Icons ========== */
const Pin = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="11" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const Phone = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M22 16.9v2a2 2 0 01-2.2 2A19.9 19.9 0 013 5.2 2 2 0 015 3h2a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 10a16 16 0 006 6l.6-.6a2 2 0 012.1-.5c.8.2 1.7.4 2.6.6A2 2 0 0122 16.9z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const Copy = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M9 9h10v10H9z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" fill="none" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

/* ========== Helpers ========== */
async function copy(text: string, setMsg: (s: string) => void) {
  try {
    await navigator.clipboard.writeText(text);
    setMsg("تم النسخ");
    setTimeout(() => setMsg(""), 1200);
  } catch {
    setMsg("");
  }
}

/* ========== Card ========== */
function ContactCard({ c }: { c: Contact }) {
  const [msg, setMsg] = useState("");

  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
      {/* رأس البطاقة */}
      <div className="mb-3 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-neutral-100 shadow">
          <span className="text-xl" aria-hidden>{c.emoji}</span>
        </div>
        <div className="min-w-0">
          <h3 className="text-center text-sm font-semibold text-gray-900">{c.title}</h3>
          <div className="text-center text-xs text-neutral-500">{c.area}</div>
        </div>
      </div>

      {/* العنوان */}
      {c.address && (
        <div className="mb-3 flex items-start gap-2 text-xs text-neutral-700">
          <Pin />
          <p className="leading-5">{c.address}</p>
        </div>
      )}

      {/* الهاتف */}
      {c.phones?.length ? (
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-700">
            <span className="flex items-center gap-1"><Phone /> {c.phoneLabel ?? "هاتف"}</span>
            <span className="mx-1 text-neutral-400">•</span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {c.phones.map((p, i) => (
                <a key={p + i} href={`tel:${p}`} className="hover:text-[#95684B]">{p}</a>
              ))}
            </div>
          </div>
          <button
            onClick={() => copy(c.phones!.join(" , "), setMsg)}
            className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-600 hover:bg-neutral-50"
            title="نسخ"
          >
            <Copy />
          </button>
        </div>
      ) : null}

      {/* البريد */}
      {c.email && (
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-700">
            <span className="flex items-center gap-1"><Mail /> {c.emailLabel ?? "البريد الإلكتروني"}</span>
            <span className="mx-1 text-neutral-400">•</span>
            <a href={`mailto:${c.email}`} className="break-all hover:text-[#95684B]">{c.email}</a>
          </div>
          <button
            onClick={() => copy(c.email!, setMsg)}
            className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-600 hover:bg-neutral-50"
            title="نسخ"
          >
            <Copy />
          </button>
        </div>
      )}

      {msg && (
        <div className="mt-3 rounded-lg bg-emerald-50 px-3 py-1 text-center text-[11px] text-emerald-700">
          {msg}
        </div>
      )}
    </article>
  );
}

/* ========== Page ========== */
export default function ContactPage() {
  return (
    <main  className=" bg-[#faf7f3] text-[#2b2b2b] block pt-30">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
        {/* breadcrumb أعلى يمين */}
        <div className="mb-2 flex justify-end text-[11px] text-neutral-500">
          <Link href="/" className="hover:text-[#95684B]">الرئيسية</Link>
          <span className="mx-1">›</span>
          <span>تواصل معنا</span>
        </div>

        {/* عنوان الصفحة */}
        <h1 className="mb-6 text-2xl font-semibold text-[#95684B]">معلومات التواصل</h1>

        {/* الشبكة المتجاوبة */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACTS.map((c) => (
            <ContactCard key={c.id} c={c} />
          ))}
        </section>
      </div>
    </main>
  );
}
