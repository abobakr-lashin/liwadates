import Image from "next/image";
import Link from "next/link";

import {Product} from "@/components/store/DateSwiper/products";
export default function ProductCard({ p }: { p: Product }) {
  console.log(p)
  return (
    <div className="card group">
      <div className="relative aspect-[3/3]">
      <Link href={`/store/${p.id}`} className="absolute inset-0">
        <Image src={p.img} alt={p.name} fill className="object-cover" />
        </Link>

        {p.ribbon && (
          <span className="absolute top-2 start-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">
            {p.ribbon}
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-medium line-clamp-2 min-h-[3rem]">{p.name}</h3>
             {/* الوصف */}
            {p.description && (
            <p className="text-xs text-gray-500 line-clamp-2">{p.description.slice(0,40)}....</p>
            )}
        {p.weight && (
          <p className="text-xs text-gray-500 mt-1">الوزن: {p.weight}</p>
        )}
        <div className="flex items-center justify-between mt-3">

            {/* السعر */}
          <div className="font-bold">
            {typeof p.priceAED === "number" ? p.priceAED.toFixed(2) : p.priceAED}{" "}
            <span className="text-sm font-normal text-gray-500">درهم</span>
          </div>
          <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}
