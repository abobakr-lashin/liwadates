import ContactForm from '@/components/business/handleSubmit/handleSubmit'
import Banner from '@/components/Farmer_services/hero/hero'
import Navbar from '@/components/home/1-navbar/NavLink'
import Footer from '@/components/home/10-footer/Footer'
import DateServiceSteps from '@/components/Service-stages/DateServiceSteps/DateServiceSteps'
import LogisticsSection from '@/components/Service-stages/LogisticsSection/LogisticsSection'

export default function page() {
  return (
    <div>
      <Navbar />
      <Banner
      urlimg={"/Service_Stages/banar.jpg"}
       brightness="brightness-70"
        title={"مراحل الخدمة التي تمر بها التمور"}
         pratone={"الرئيسية"} pratTow={"خدمات المزارعين"}
          hrefUrl={"Farmer_services"} prattherebol={true}
           pratThere={'مراحل الخدمة التي تمر بها التمور'}
            hrefUrl2={'Service_Stages'} itemsStart={'items-start'} />
      <DateServiceSteps />
      <LogisticsSection />

      <ContactForm />

      <Footer />
    </div>
  )
}
