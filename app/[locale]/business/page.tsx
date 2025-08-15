import ContactForm from '@/components/business/handleSubmit/handleSubmit'
import InsightsSection from '@/components/business/InsightsSection/InsightsSection'
import OurSolutions from '@/components/business/OurSolutions/OurSolutions'
import WhyChooseUs from '@/components/business/WhyChooseUs/WhyChooseUs'
import Banner from '@/components/Farmer_services/hero/hero'
import PalmCareSection from '@/components/Farmer_services/PalmCareSection/PalmCareSection'
import SectionWithImage from '@/components/Farmer_services/SectionWithImage/SectionWithImage'
import Navbar from '@/components/home/1-navbar/NavLink'
import Footer from '@/components/home/10-footer/Footer'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
      <Banner urlimg={"/business/business_Banner.jpg"}
      brightness='brightness-70'
      title={"خدمات قطاع الأعمال "}
      pratone={"الرئيسية"} pratTow={" خدمات قطاع الأعمال "}
      hrefUrl={"business"} pratThere={''} prattherebol={false}
      hrefUrl2={''} itemsStart={'items-start'} />
      <PalmCareSection
          widthimg="760px"
        heightimg="360px"
        imageSrc="/business/hero.jpg"
        title="حلول أعمال مبتكرة لصناعة التمور – شريكك المثالي للنمو والتوسع”  "
        description="
  في تمور ليوا، نقدم لقطاع الأعمال حلولاً متكاملة ومبتكرة تشمل بيع الجملة، التصنيع للغير، والهدايا الفاخرة. شركاؤنا من الشركات والمؤسسات في جميع أنحاء العالم يثقون بجودة منتجاتنا وخدماتنا المميزة."

        buttonText=" تحميل كتالوج قطاع الأعمال"
        buttonText2="تواصل معنا "
      />

   <SectionWithImage
  flexrow="row-reverse"
  colum="row-reverse"
         imageSrc="/Farmer_services/SectionWithImage.jpg"
        smallText=""
        title="من نحن في خدمات قطاع الأعمال "
        description="نحن في تمور ليوا نفتخر بخدمة قطاعات مختلفة مثل الفنادق، شركات الطيران، المتاجر الكبرى، والموزعين. نقدم منتجات تمور بجودة عالمية مصحوبة بحلول تغليف مبتكرة تعكس أصالة الهوية الإماراتية."
      />
<OurSolutions/>
<InsightsSection/>
<WhyChooseUs/>
<ContactForm/>
      <Footer />

    </div>
  )
}
