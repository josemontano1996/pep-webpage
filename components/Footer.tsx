import Link from 'next/link';
import ContactDialog from './ContactDialog';
import DataPrivacyLink from './transparency/DataPrivacyLink';
import initTranslations from '@/lib/i18n';

export const Footer = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['footer']);
  return (
    <footer className="px-4 py-8 text-center">
      <ul>
        <li className="mr-2 inline-block">
          <a href="/">PEP &copy; 2023 |</a>
        </li>
        <li className="mr-2 inline-block">
          <Link href={`/${locale}/transparency/impressum`}>
            {t('impressum')} |
          </Link>
        </li>
        <li className="mr-2 inline-block">
          <DataPrivacyLink locale={locale} /> |
        </li>
        <li className="mr-1 inline-block">
          <ContactDialog />
        </li>
      </ul>
    </footer>
  );
};
