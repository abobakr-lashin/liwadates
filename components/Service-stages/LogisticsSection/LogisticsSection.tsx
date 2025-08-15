"use client";
import Image from "next/image";
import React from "react";

export default function LogisticsSection() {
    return (
        <section  className="bg-white px-4 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-6">
             {/* الصورة */}
                <div className="flex-1 relative rounded-xl overflow-hidden shadow-md border border-gray-200">
                    <Image
                        src="/Service_Stages/LogisticsSection.png"
                        alt="الخدمات اللوجستية"

                        width={660}
                        height={460}
                        className="object-cover"
                        priority
                    />
                </div>
                {/* النص */}
                <div className="flex-1 flex flex-col justify-center text-center md:text-right">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                        الخدمات اللوجستية
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        وهي من ضمن مراحل الخدمات اللوجستية وتعتبر مرحلة أساسية في إنتاج التمور من فرز، تعبئة، وتغليف أو
                        حتى شحن المنتج ونقله. يتطلب الأمر الكثير من التنسيق لضمان سير الأمور بسلاسة وفي الوقت المحدد.
                    </p>
                </div>


            </div>
        </section>
    );
}
