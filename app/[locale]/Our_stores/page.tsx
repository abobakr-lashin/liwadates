import Banner from '@/components/Farmer_services/hero/hero'
import Navbar from '@/components/home/1-navbar/NavLink'
import BranchesSwiper from '@/components/Our_stores/BranchesSwiper/BranchesSwiper'
import ExperienceBanner from '@/components/Our_stores/ExperienceBanner'
import ExperienceSection from '@/components/Our_stores/ExperienceSection/ExperienceSection'
import StoreGallery from '@/components/Our_stores/StoreGallery/StoreGallery'
import Footer from '@/components/home/10-footer/Footer'
import BranchesMap from '@/components/Our_stores/BranchesMap/BranchesMap'
import BranchComingSoonCard from '@/components/Our_stores/BranchComingSoonCard/BranchComingSoonCard'
export default function page() {
  return (
    <div>
        <Navbar />
        <Banner urlimg={'/Our_stores/Banner.png'}
        title={'محلاتنا'} pratone={'الرئيسية'}
         pratTow={'محلاتنا'} pratThere={''}
         prattherebol={false} hrefUrl={''}
          hrefUrl2={''} itemsStart={''}/>
 <ExperienceBanner imgSrc="/Our_stores/hero.jpg" />
 <BranchesSwiper/>
<BranchComingSoonCard title={' مدينة دبي'}/>
<ExperienceSection/>
<StoreGallery/>
<BranchesMap/>
<Footer/>
    </div>
  )
}
