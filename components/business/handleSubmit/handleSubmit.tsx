
import Image from "next/image";
import FormContact from "./FormContact";

const ContactForm = () => {

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* خلفية النخيل */}
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        <Image
          width={500}
          height={500}
          src="/business/ContactFormleft.png"
          alt="Palm left"
          className="h-full max-h-full object-contain"
          loading="lazy"
        />
        <Image
          width={500}
          height={500}
          src="/business/ContactFormright.png"
          alt="Palm right"
          className="h-full max-h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* النموذج */}
       <section className="p-10 w-full ">
      <div className="  max-w-2/5 mx-auto bg-white rounded-3xl shadow-lg z-20 relative">
        <header className="mb-0 text-start pt-5 pr-5">
          <h2 className="text-2xl font-bold">هل ترغب بالتعاون معنا؟</h2>
          <p className="mt-6 text-sm text-gray-500">
            اطلب عرضك الآن، وسيتواصل فريقنا معك مباشرة.
          </p>
        </header>

      <FormContact/>

      </div>
    </section>
    </div>
  );
};

export default ContactForm;
