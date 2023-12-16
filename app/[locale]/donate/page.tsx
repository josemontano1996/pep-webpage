import { Metadata } from 'next';
import initTranslations from '@/lib/i18n';
import TranslationsProvider from '@/components/translations/TranslationProvider';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';

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
        <section className="mt-10 space-y-4">
          <h2 className="text-4xl">Spenden</h2>
          <div className="space-y-2 italic">
            <p>
              Mitgliedsbeiträge und Spenden für den Verein PEP e.V. sind
              steuerlich absetzbar. Wir bei PEP sind stolz darauf,{' '}
              <span className='font-bold'>eine ehrenamtliche Organisation zu sein.</span> Das
              bedeutet, dass jeder Cent, den wir erhalten, direkt den von uns
              unterstützten Projekten zugute kommt, sodass Ihre Spenden die
              größtmögliche Wirkung erzielen.
            </p>
            <p>
            PEP e. V. ist ein gemeinnütziger Verein.
            </p>
            <p>Registergericht: Amtsgericht Trier </p>
            <p> Registernummer VR3434</p>
            <p>
              {' '}
              Der Verein ist nach dem Freistellungsbescheid des Finanzamtes
              Trier vom 19.06.2023 für den letzten Veranlagungszeitraum von 2019
              bis 2021 nach § 5 Abs. 1 Nr. 9 des Körperschaftsteuergesetzes von
              der Körperschaftsteuer und nach § 3 Nr. 6 des
              Gewerbesteuergesetzes von der Gewerbesteuer befreit.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-8 xl:grid xl:grid-cols-3 ">
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
