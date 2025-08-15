import Sidebar from "./Sidebar";
import HeroCarousel from "./HeroCarousel";
import ProductCard from "./ProductCard";
import { products } from "./products";

export default function Page() {
  return (
    <main className="container mx-auto max-w-screen-2xl py-6">
      {/* العنوان وعدد المنتجات */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">التمور</h1>
        <div className="text-sm text-gray-500">{products.length} منتج</div>
      </header>

      {/* موبايل: عمود واحد — ديسكتوب: Sidebar على الشمال (يسار) والمحتوى يمين */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* المحتوى (يبقى العمود الأول) */}
        <section className="space-y-6">
          <HeroCarousel />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-gray-600">
              تشكيلة مختارة بعناية — المناسبة للهدايا والضيافة.
            </p>
            <select
              className="rounded-lg border bg-white px-3 py-2 text-sm"
              aria-label="ترتيب حسب"
              defaultValue="popular"
            >
              <option value="popular">الأكثر رواجاً</option>
              <option value="new">الأحدث</option>
              <option value="price-low">الأقل سعراً</option>
              <option value="price-high">الأعلى سعراً</option>
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* السايدبار (المسار الثاني = يسار في RTL) */}
        <aside className="self-start sticky top-4">
          <Sidebar />
        </aside>
      </div>
    </main>
  );
}
