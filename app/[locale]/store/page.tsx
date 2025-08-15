import Banner from '@/components/Farmer_services/hero/hero'
import Navbar from '@/components/home/1-navbar/NavLink'
import Footer from '@/components/home/10-footer/Footer'
import BenefitsStrip from '@/components/store/BenefitsStrip/BenefitsStrip'
import DateSotre from '@/components/store/DateSwiper/DateSotre'
import React from 'react'

export default function page() {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner
                urlimg={"/Service_Stages/banar.jpg"}
                brightness="brightness-70"
                title={"   المتجر "}
                pratone={"الرئيسية"} pratTow={"المتجر"}
                hrefUrl={"store"} prattherebol={false}
                pratThere={""}
                hrefUrl2={''} itemsStart={'items-center'} />
            <DateSotre />
            <BenefitsStrip className="mt-8" />
            <Footer />
        </div>
    )
}
