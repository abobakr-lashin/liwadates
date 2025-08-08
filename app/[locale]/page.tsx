"use client";

import Hero from "@/components/2-hero/Hero";
import NavLink from "@/components/1-navbar/NavLink";
import BrandProducts from "@/components/3-BrandProducts/BrandProducts";
import FeaturedProducts from "@/components/4-FeaturedProducts/FeaturedProducts";
import HoverProductsSlider from "@/components/5-HoverProductsSlider/HoverProductsSlider";
import FounderSection from "@/components/6-FounderSection/FounderSection";
import AboutCompanySection from "@/components/7-AboutCompanySection/AboutCompanySection";
import ArticlesSliderSection from "@/components/8-ArticlesSliderSection/ArticlesSliderSection";
import CustomerTestimonials from "@/components/9-CustomerTestimonials/CustomerTestimonials";
import Footer from "@/components/10-footer/Footer";
import Gift from "@/components/gift/Gift";
export default function HomePage() {
  return (

    <>
      <NavLink />
      <Hero />
      <FeaturedProducts />
      <HoverProductsSlider />
      <Gift/>
      <BrandProducts />
      <FounderSection />
      <AboutCompanySection />
      <ArticlesSliderSection />
      <CustomerTestimonials />
      <Footer />



    </>

  )
}
