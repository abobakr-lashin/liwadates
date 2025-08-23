import Contact_us from "@/components/Contact_us/Contact_us";
import FormContacts from "@/components/Contact_us/FormContacts";
import Navbar from "@/components/home/1-navbar/NavLink";
import Footer from "@/components/home/10-footer/Footer";

export default function page() {
  return (
    <div>

<Navbar />
        <Contact_us />
        <FormContacts />
        <Footer />
    </div>
  )
}
