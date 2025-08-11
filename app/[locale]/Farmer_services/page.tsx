import Banner from "@/components/Farmer_services/hero/hero";
import Navbar from "@/components/home/1-navbar/NavLink";
import SectionWithImage from "@/components/Farmer_services/SectionWithImage/SectionWithImage";
import CareSection from "@/components/Farmer_services/CareSection/CareSection";
import PalmCareSection from "@/components/Farmer_services/PalmCareSection/PalmCareSection";
import Footer from "@/components/home/10-footer/Footer";
import PackagingSection from "@/components/Farmer_services/PackagingSection/PackagingSection";

export default function page() {
  const buttonsData = [
  { text: "اطلب مجموعة التعبئة", onClick: () => alert("تم الطلب") },
  { text: "حصل على الكتالوج", onClick: () => alert("تحميل الكتالوج") },
  { text: "الطلب", onClick: () => alert("تم الطلب") },
];



  return (
    <div>
{/* <Navbar/> */}
<Banner/>
<SectionWithImage
  imageSrc="/Farmer_services/SectionWithImage.jpg"
  smallText="من النخلة إلى العبوة... رحلة تمر تبدأ هنا"
  title="من نحن - رؤيتنا وشراكتنا مع مزارعينا"
  description="
  منذ تأسيس مصنع تمور ليوا، التزمنا بأن نكون الشريك الأول والدائم لمزارعي النخيل في الإمارات.
رؤيتنا تركزت على رفع قيمة التمور الإماراتية من خلال العناية بالنخلة، والارتقاء بجودة عمليات الزراعة والحصاد،
وتحويل التمر إلى منتج فاخر معبأ بعلامة تجارية تعبر عن اسم المزرعة وجودة إنتاجها."
/>
<CareSection
  imageSrc="/Farmer_services/SectionWithImage.jpg"
  title="العناية بنخيلنا: أساس جودة تمورنا"
  description="نؤمن أن جودة التمر تبدأ من العناية المستمرة بالنخلة طوال العام. من التقليم والري والتسميد، إلى حماية العذوق بالتغطية والوقاية من الآفات والغبار. كل خطوة تُترجم إلى تمر نظيف، صحي، وأعلى قيمة في السوق."
  buttonText="تعرف على المزيد"
/>
<PalmCareSection
  imageSrc="/Farmer_services/PalmCareSection.jpg"
  title="مستلزمات النخلة والإنتاج"
  description="
  في مصنع تمور ليوا،
   نوفر لك كل ما تحتاجه
   للعناية بالنخلة وجودة
   إنتاج التمور في موسم
  الحصاد.
   من كراتين الرطب القوية، وصناديق التجفيف الصحية، إلى أكياس التغطية (الشاش الأبيض) التي تحافظ على نظافة العذوق، إضافة إلى ملصقات وعلب مخصصة أو العلامة الخاصة بالمزرعة. مستلزماتنا مصممة لتساعدك على إنتاج تمر نظيف، آمن، وسهل التسويق أو التوزيع."
  // onOrderClick={handleOrderClick}
  // onCatalogClick={handleCatalogClick}
/>




<PackagingSection
  imageSrc="/images/hero.jpg"
  title="خدمات التعبئة والتغليف"
  description="في مصنع تمور ليوا، نقدم خدمات تعبئة وتصنيع متكاملة تعتمد على منهج تصنيعي معتمد وفق أعلى المعايير الدولية في سلامة وجودة الغذاء.
نستخدم خطوط إنتاج متطورة ومكلفة، مجهزة بأحدث التقنيات في مجال معالجة وتغليف التمور، لضمان تحقيق أعلى مستويات الجودة والكفاءة.
"
/>




<Footer/>
    </div>
  )
}
