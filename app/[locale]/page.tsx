"use client";

import Hero from "@/components/home/2-hero/Hero";
import NavLink from "@/components/home/1-navbar/NavLink";
import BrandProducts from "@/components/home/3-BrandProducts/BrandProducts";
import FeaturedProducts from "@/components/home/4-FeaturedProducts/FeaturedProducts";
import HoverProductsSlider from "@/components/home/5-HoverProductsSlider/HoverProductsSlider";
import AboutCompanySection from "@/components/home/7-AboutCompanySection/AboutCompanySection";
import ArticlesSliderSection from "@/components/home/8-ArticlesSliderSection/ArticlesSliderSection";
import CustomerTestimonials from "@/components/home/9-CustomerTestimonials/CustomerTestimonials";
import Footer from "@/components/home/10-footer/Footer";
import Gift from "@/components/home/gift/Gift";
import ServicesSection from "@/components/home/ServicesSection/ServicesSection";
import Testnav from "@/components/Text/Testnav";
export default function HomePage() {
  return (

    <>
      {/* <Testnav /> */}
      <NavLink />
      <Hero />
      <FeaturedProducts />
      <HoverProductsSlider />
      <Gift/>
      <AboutCompanySection />
      <BrandProducts />
      <ServicesSection/>
      <CustomerTestimonials />
      <ArticlesSliderSection />
      <Footer />



    </>

  )
}
