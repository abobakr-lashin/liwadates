import CartPage from "@/components/Cart/Cart";
import Banner from "@/components/Farmer_services/hero/hero";
import Navbar from "@/components/home/1-navbar/NavLink";
import Footer from "@/components/home/10-footer/Footer";
import BenefitsStrip from "@/components/store/BenefitsStrip/BenefitsStrip";

export default function page() {
  return (
    <div>
                  <Navbar />
                  <Banner
                      urlimg={"/Service_Stages/banar.jpg"}
                      brightness="brightness-70"
                      title={"السلة "}
                      pratone={"الرئيسية"} pratTow={"السلة"}
                      hrefUrl={"store"} prattherebol={false}
                      pratThere={"تفاصيل المنتج"}
                      hrefUrl2={`/`} itemsStart={'items-start'} />
<CartPage/>

  <BenefitsStrip className="mt-8" />

                                <Footer />

    </div>
  )
}
