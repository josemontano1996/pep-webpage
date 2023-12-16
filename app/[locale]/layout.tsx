import { Open_Sans } from 'next/font/google';
import '../globals.css';
import initTranslations from '@/lib/i18n';
import TranslationsProvider from '@/components/translations/TranslationProvider';
import i18nConfig from '@/i18nConfig';
import { Footer } from '@/components/Footer';
import NavBar from '@/components/NavBar/NavBar';

const openSans = Open_Sans({ subsets: ['latin'] });

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { options } = await initTranslations(locale, ['shared']);

  return (
    <html lang={locale} className="relative overflow-x-hidden">
      <body className={openSans.className}>
        <TranslationsProvider namespaces={options.ns} locale={locale}>
          <NavBar locale={locale} />
          <main className="flex min-h-[81vh] flex-col pt-[9vh]">
            <div className="flex-1">{children}</div>
          </main>
          <Footer locale={locale} />
        </TranslationsProvider>
      </body>
    </html>
  );
}
