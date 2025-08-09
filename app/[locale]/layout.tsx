import { Locale, locales } from "@/i18n";
import { dir } from "i18next";
import { notFound } from "next/navigation";
import "../globals.css"
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir={dir(locale)} className="font-bahij">
      {children}
    </div>
  );
}
