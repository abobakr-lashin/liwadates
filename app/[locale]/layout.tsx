import { Locale, locales } from "@/i18n";
import { dir } from "i18next";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir={dir(locale)} className="font-bahij">
      {children}
    </div>
  );
}
