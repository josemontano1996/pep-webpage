import { Metadata } from 'next';
import initTranslations from '@/lib/i18n';
import TranslationsProvider from '@/components/translations/TranslationProvider';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import { GraduationCap, HeartPulse, Trees, Wind } from 'lucide-react';
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
          <h2 className="text-4xl">Donations</h2>
          <div className="flex items-center">
            <div className="itemsce my-4 flex justify-between gap-4">
              <p className="flex-1">
                At PEP, we are proud to run a volunteer-based operation where
                every member of our team is dedicated to our cause. This means
                that every penny we receive goes directly to the projects we
                support, ensuring your donations have the greatest impact.
              </p>
              <ul className="grid flex-1 grid-cols-2 text-center">
                <li className="flex items-center gap-2">
                  <Trees /> <span>For the Reforestation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind /> <span>Against the Climate Change</span>
                </li>
                <li className="flex items-center gap-2">
                  <GraduationCap /> <span>Making Education Accesible</span>
                </li>
                <li className="flex items-center gap-2">
                  <HeartPulse /> <span>Health Aid for the poor</span>
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
