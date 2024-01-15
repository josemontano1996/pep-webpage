import { Metadata } from 'next';
import initTranslations from '@/lib/i18n';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';

import DonationCard from '@/components/donate-page/DonationCard';
import StripeDonation from '@/components/donate-page/StripeDonation';
import BecomeMemberCard from '@/components/donate-page/BecomeMemberCard';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const { t } = await initTranslations(locale, ['donate-page']);
  return {
    title: t('meta-title'),
    description: t('meta-description'),
    keywords: t('meta-keywords'),
  };
}
const DonationPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, ['donate-page']);
  return (
    <MaxWidthWrapper>
      <section className="mt-10 space-y-4">
        <h1 className="text-4xl">{t('1')}</h1>
        <div className="space-y-2 italic">
          <p>
            {t('2')} <span className="font-bold">{t('3')}</span> {t('4')}
          </p>
          <p>{t('5')}</p>
          <p>
            {t('6')} {process.env.NEXT_PUBLIC_PEP_REGISTER_CITY}
          </p>
          <p>
            {t('7')} {process.env.NEXT_PUBLIC_PEP_REGISTER_NUMBER}
          </p>
          <p>{t('8')}</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-8 xl:grid xl:grid-cols-3 ">
          <DonationCard locale={locale} />
          <StripeDonation locale={locale} />
          <BecomeMemberCard locale={locale} />
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default DonationPage;
