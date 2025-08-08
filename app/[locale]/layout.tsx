import { locales, type Locale } from '@/i18n';
import { notFound } from 'next/navigation';
import { dir } from 'i18next';
import "@/app/globals.css";

// ✅ أزل async من الدالة هنا
export default function LocaleLayout({
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
