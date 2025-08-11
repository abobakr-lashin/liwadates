"use client";

import Image from "next/image";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال البيانات بنجاح!");
  };

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
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl shadow-lg max-w-lg w-full p-10 space-y-6 text-right z-10"
      >
        <h2 className="text-xl font-semibold mb-6">هل ترغب بالتعاون معنا؟</h2>

        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full h-12 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94684a]"
        />
        <input
          type="text"
          name="company"
          placeholder="اسم الشركة"
          value={formData.company}
          onChange={handleChange}
          className="w-full h-12 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94684a]"
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full h-12 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94684a]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
          className="w-full h-12 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94684a]"
        />
        <textarea
          name="message"
          placeholder="رسالتك"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#94684a]"
        />

        <button
          type="submit"
          className="w-full bg-[#94684a] text-white py-3 rounded-full font-semibold hover:bg-[#7c5a26] transition"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
