"use client";

import { useMemo,  useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css"
import { BRANCHES, REGIONS } from "./data";
import SwpierData from "./SwpierData";

export default function BranchesSwiper() {

    const [activeRegion, setActiveRegion] =
        useState<(typeof REGIONS)[number]["id"]>("all");

    const data = useMemo(
        () =>
            activeRegion === "all"
                ? BRANCHES
                : BRANCHES.filter((b) => b.region === activeRegion),
        [activeRegion]
    );


    return (
        <section className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-10">
            {/* ترويسة + فلاتر المناطق كبادجات */}
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-[#3b2617]">فروعنا</h2>

                <div className="flex  pl-15  flex-wrap gap-2 ">
                    {REGIONS.map((r) => {
                        const active = r.id === activeRegion;
                        return (
                            <button
                                key={r.id}
                                onClick={() => setActiveRegion(r.id)}
                                className={[
                                    "h-9 px-4 rounded-full text-sm transition",
                                    active
                                        ? "bg-[#94684a] text-white"
                                        : "bg-white text-[#94684a] border border-[#e7dace] hover:bg-[#f5efe9]",
                                ].join(" ")}
                                aria-pressed={active}
                            >
                                {r.label}
                            </button>
                        );
                    })}
                </div>
            </div>


<SwpierData data={data} activeRegion={activeRegion} />

        </section>
    );
}
