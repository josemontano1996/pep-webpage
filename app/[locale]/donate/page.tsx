import { Metadata } from 'next';
import initTranslations from '@/lib/i18n';
import TranslationsProvider from '@/components/translations/TranslationProvider';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import { Cross, HeartPulse, Trees, Wind } from 'lucide-react';
import DonationCard from '@/components/donate-page/DonationCard';
import StripeDonation from '@/components/donate-page/StripeDonation';
import BecomeMemberCard from '@/components/donate-page/BecomeMemberCard';

export const metadata: Metadata = {
  title: 'Donate now',
  description: 'Donation page for PEP',
};

const DonationPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { options } = await initTranslations(locale, ['shared']);
  return (
    <TranslationsProvider namespaces={options.ns} locale={locale}>
      <MaxWidthWrapper>
        <section className="mt-10">
          <h2 className="text-4xl">Spenden</h2>
          <div className="flex items-center">
            <div className="itemsce my-4 flex justify-between gap-4">
              <p className="flex-1">
                <span className="italic">
                  Mitgliedsbeiträge und Spenden für den Verein PEP e.V. sind
                  steuerlich absetzbar. Wir haben sehr niedrige
                  Verwaltungskosten, so dass der Gesamt Betrag Ihre Spenden zu
                  Gute der Projekte kommt.
                </span>
              </p>
              <ul className="grid flex-1 grid-cols-2 text-center">
                <li className="flex items-center gap-2">
                  <Trees /> <span>Für die Aufforstung</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind /> <span>Gegen den Klimawandel</span>
                </li>
                <li className="flex items-center gap-2">
                  <Cross />
                  <span>Für besseres Leben</span>
                </li>
                <li className="flex items-center gap-2">
                  <HeartPulse />
                  <span>Gesundheitshilfe für die Armen</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-8 ">
            <DonationCard />
            <StripeDonation />
            <BecomeMemberCard />
          </div>
        </section>
      </MaxWidthWrapper>
    </TranslationsProvider>
  );
};

export default DonationPage;
