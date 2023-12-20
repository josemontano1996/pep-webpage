import Link from 'next/link';
import ContactDialog from './ContactDialog';
import DataPrivacyLink from './transparency/DataPrivacyLink';

export const Footer = ({ locale }: { locale: string }) => {
  return (
    <footer className="px-4 py-8 text-center">
      <ul>
        <li className="mr-2 inline-block">
          <a href="/">PEP &copy; 2023 |</a>
        </li>
        <li className="mr-2 inline-block">
          <Link href={`/${locale}/transparency/impressum`}>Impressum |</Link>
        </li>
        <li className="mr-2 inline-block">
          <DataPrivacyLink /> |
        </li>
        <li className="mr-1 inline-block">
          <ContactDialog />
        </li>
      </ul>
    </footer>
  );
};
