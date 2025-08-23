import GiftBuilderPage from '@/components/Corporate_gifts/giftBuilder'
import Banner from '@/components/Farmer_services/hero/hero'
import Navbar from '@/components/home/1-navbar/NavLink'
import Footer from '@/components/home/10-footer/Footer'
import BenefitsStrip from '@/components/store/BenefitsStrip/BenefitsStrip'
import React from 'react'

export default function Corporate_gifts() {
  return (
    <div>
      <Navbar />
      <Banner brightness='center' urlimg={'/CorporateGifts/hero.jpg'} title={'تصميم الهدية'} pratone={'هدايا المؤسسات'} pratTow={' اختَر هديتك'} pratThere={''} prattherebol={false} hrefUrl={''} hrefUrl2={''} itemsStart={''}/>

<GiftBuilderPage/>
  <BenefitsStrip className="mt-8" />

<Footer />

    </div>
  )
}
