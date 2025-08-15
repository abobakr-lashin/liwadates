"use client";
import Image from "next/image";
import { navLinks } from "./nav.config";
import MegaMenu from "./MegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import IconCard from "./IconCard";
import Frame from "@/public/images/Frame.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const getLocaleFromPathname = (pathname: string) => {
  // مثال: /ar/products -> locale = ar
  // مثال: /en -> locale = en
  const segments = pathname.split("/").filter(Boolean);
  return segments[0] || "ar"; // حط اللغة الافتراضية اللي تناسبك
};

const stripLocale = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  // يشيل أول سيجمنت (اللغة) ويرجّع المسار بدونها
  const rest = segments.slice(1).join("/");
  return "/" + (rest ? rest : "");
};

const buildHref = (locale: string, href: string) => {
  // يضمن وجود البادئة الخاصة باللغة
  // navLinks.href يفترض يبدأ بـ "/" (مثلاً "/about")
  if (href === "/" || href === "") return `/${locale}`;
  return `/${locale}${href}`;
};

const isActivePath = (pathname: string, locale: string, href: string) => {
  // يطابق بداية المسار الحالية مع الرابط الكامل بعد إضافة اللغة
  const target = buildHref(locale, href);
  // ملاحظة: عشان ما يطفي الـactive عند الدخول لصفحة فرعية
  return pathname === target || pathname.startsWith(target + "/");
};

const Navbar: React.FC = () => {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const pathWithoutLocale = stripLocale(pathname);

  const isHomeActive =
    pathWithoutLocale === "/" || pathWithoutLocale === "";

  return (
    <nav className="fixed z-50 w-full bg-white shadow-md">
      <main className="flex flex-wrap items-center justify-between border-b-2 border-gray-200 px-6 md:px-12 py-3">
        <div>
          <Image
            className="p-1"
            src="/images/logo.svg"
            alt="IWJ DATES Logo"
            width={100}
            height={100}
            priority
          />
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {/* Home */}
          <Link
            href={buildHref(locale, "/")}
            className={`no-underline p-2 gap-3 text-lg ${
              isHomeActive ? "text-[#A97C50] font-bold" : "text-gray-700 font-normal"
            } hover:text-[#A97C50]`}
            aria-label={"الرئيسية"}
          >
            الرئيسية
          </Link>

          {/* بقية الروابط من navLinks */}
          {navLinks.map((link) => {
            const active = isActivePath(pathname, locale, link.href);
            return (
              <div key={link.href} className="relative group">
                <Link
                  href={buildHref(locale, link.href)}
                  className={`no-underline p-2 gap-3 text-lg ${
                    active ? "text-[#A97C50] font-bold" : "text-gray-700 font-normal"
                  } group-hover:text-[#A97C50] hover:text-[#A97C50]`}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
                {link.megaMenu && <MegaMenu sections={link.megaMenu} />}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <button aria-label="عرض الإطار">
            <Image src={Frame} alt="Frame Icon" width={50} height={50} />
          </button>

          <IconCard />

          <div
            className="relative group flex items-center gap-1 cursor-pointer"
            aria-label="تبديل اللغة"
          >
            <LanguageSwitcher />
          </div>

          <button
            className="relative cursor-pointer overflow-hidden px-14 py-3 rounded-full bg-[#9b643a] text-white font-medium group active:scale-95 transition-transform"
            aria-label="تواصل معنا"
          >
            <span className="relative z-10">تواصل معنا</span>
            <span
              className="absolute inset-0 left-0 bottom-0 w-full h-full bg-[#3b2617]
               transform -translate-x-full -translate-y-full -skew-x-1
               opacity-0 transition-all duration-300 ease-out
               group-hover:translate-x-0 group-hover:translate-y-0
               group-hover:opacity-100 rounded-full cursor-pointer"
            />
          </button>

          <span className="flex items-center bg-[#E5D6C5] rounded-full w-12 h-12 justify-center">
            <svg width="38" height="38" fill="#A97C50" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
            </svg>
          </span>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
