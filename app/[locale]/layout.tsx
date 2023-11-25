import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../globals.css';
import initTranslations from '@/lib/i18n';
import TranslationsProvider from '@/components/translations/TranslationProvider';
import Header from '@/components/Header';
import i18nConfig from '@/i18nConfig';

const openSans = Open_Sans({ subsets: ['latin'] });

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { t, options } = await initTranslations(locale, ['shared']);

  return (
    <html lang={locale}>
      <body className={openSans.className}>
        <TranslationsProvider namespaces={options.ns} locale={locale}>
          <Header locale={locale} />
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
