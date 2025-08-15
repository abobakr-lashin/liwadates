"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Step = { id: string; label: string; icon?: React.ReactNode };

const Dot = () => <span className="mx-3 h-1.5 w-1.5 rounded-full bg-gray-300 inline-block" aria-hidden />;
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const stepsDefault: Step[] = [
  { id: "receive",  label: "استلام التمور",      icon: <CheckIcon /> },
  { id: "clean",    label: "التنظيف",            icon: <CheckIcon /> },
  { id: "freeze",   label: "الفرز",              icon: <CheckIcon /> },
  { id: "wash",     label: "الغسيل والتجفيف",    icon: <CheckIcon /> },
  { id: "manufact", label: "التصنيع",            icon: <CheckIcon /> },
];

export default function DateServiceSteps({
  steps = stepsDefault,
  activeId = "receive",
  coverSrc = "/Service_Stages/video.jpg", // صورة الغلاف
  youtubeId = "https://www.youtube.com/embed/1kzPgBRha_I", // ID الفيديو من YouTube
}: {
  steps?: Step[];
  activeId?: string;
  coverSrc?: string;
  youtubeId?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="bg-[#f7f6f4] px-4 md:px-6 pt-20 p-10">
      <div className="mx-auto max-w-6xl">
        {/* العنوان */}
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800">
          <span className="text-[#9b643a] p-5">مراحل الخدمة</span> التي تمر بها التمور
        </h2>

        {/* شريط المراحل */}
        <div className="mt-6 flex flex-wrap items-center justify-center text-sm md:text-base">
          {steps.map((s, i) => {
            const active = s.id === activeId;
            return (
              <React.Fragment key={s.id}>
                <div className={`flex items-center gap-1.5 ${active ? "text-[#9b643a] font-semibold" : "text-gray-600"}`}>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100">
                    {s.icon ?? <span className="block w-1.5 h-1.5 bg-gray-400 rounded-full" />}
                  </span>
                  <span>{s.label}</span>
                </div>
                {i !== steps.length - 1 && <Dot />}
              </React.Fragment>
            );
          })}
        </div>

        {/* كارت الفيديو */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image src={coverSrc} alt="مراحل الخدمة" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-black/30" />
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="تشغيل الفيديو"
                className="absolute inset-0 m-auto h-16 w-16 md:h-20 md:w-20 grid place-items-center rounded-full bg-white/90 hover:bg-white transition shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#9b643a" aria-hidden>
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#9b643a" strokeWidth="1.5" />
                  <path d="M10 8l6 4-6 4V8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* المودال */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-lg overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 left-2 text-white text-2xl leading-none z-10"
              aria-label="إغلاق الفيديو"
            >
              ✕
            </button>
            <div className="relative aspect-video">
              <iframe
                src={`${youtubeId}`}
                title="فيديو مراحل الخدمة"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
