// app/[locale]/store/[id]/page.tsx
import Banner from "@/components/Farmer_services/hero/hero";
import Navbar from "@/components/home/1-navbar/NavLink";
import Footer from "@/components/home/10-footer/Footer";
import ProductPage from "@/components/store/productId/ProductPage";
import Testimonials from "@/components/store/productId/Testimonial/Testimonial";
import RelatedProducts from "@/components/store/productId/RelatedProducts/RelatedProducts";
import BenefitsStrip from "@/components/store/BenefitsStrip/BenefitsStrip";

// PageProps هنا تتوافق مع توليد الأنواع في Next (params كـ Promise)
type PageProps = {
  params: Promise<{ locale: string; id: string }>;
  // لو بتحتاج searchParams ممكن تضيفها هكذا أيضاً:
  // searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ params }: PageProps) {
  const { id /* locale */ } = await params;

  return (
    <div>
      <Navbar />

      <Banner
        urlimg={"/Service_Stages/banar.jpg"}
        brightness="brightness-70"
        title={" تفاصيل المنتج"}
        pratone={"الرئيسية"}
        pratTow={"المتجر"}
        hrefUrl={"store"}
        prattherebol={false}
        pratThere={"تفاصيل المنتج"}
        hrefUrl2={"/"}
        itemsStart={"items-center"}
      />

      {/* ProductPage (عميل) يتوقع params.id كسلسلة */}
      <ProductPage params={{ id }} />

      <Testimonials />
      <RelatedProducts />
      <BenefitsStrip className="mt-8" />

      <Footer />
    </div>
  );
}
