
import { locales, type Locale } from '@/i18n';
import { notFound } from 'next/navigation';
import { dir } from 'i18next';
import "@/app/globals.css"; //

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

  // ضبط لغة واتجاه الصفحة بشكل آمن عبر context أو meta، لكن بدون <html>
  return (
    <div lang={locale} dir={dir(locale)} className="font-bahij">
      {children}
    </div>
  );
}
