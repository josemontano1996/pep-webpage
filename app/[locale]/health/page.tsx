import DonateCallToAction from '@/components/DonateCallToAction';
import SlideShow from '@/components/SlideShow';
import { chirurgicImages, oxigenPlantImages } from '@/consts/health-page';
import initTranslations from '@/lib/i18n';
import { Metadata } from 'next';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const { t } = await initTranslations(locale, ['health-page']);
  return {
    title: t('meta-title'),
    description: t('meta-description'),
    keywords: t('meta-keywords'),
  };
}

const page = async ({ params: { locale } }: Props) => {
  const { t } = await initTranslations(locale, ['health-page']);
  return (
    <div className="max-w-screen-[1350px] mx-auto w-full px-[5vw] md:px-[3vw]">
      <section id="surgery" className="space-y-14 py-10">
        <div>
          <h2 className="text-center text-2xl font-medium sm:text-5xl">
            {t('title')}
          </h2>
        </div>
        <div className="flex flex-col items-center gap-8 xl:grid-cols-12 xl:flex-row">
          <div className="order-2 space-y-6 xl:order-1 xl:flex-1">
            <p>{t('1')}</p>
            <p>{t('2')}</p>
            <p>{t('3')}</p>
            <p>{t('4')}</p>
            <DonateCallToAction locale={locale} />
          </div>
          <div className="order-1 mx-auto lg:w-4/5 xl:order-2 xl:w-full xl:flex-1">
            <SlideShow
              priority={true}
              images={chirurgicImages}
              alt={t('alt1')}
              animation="fade-in-out-slider"
            />
          </div>
        </div>
      </section>
      <section id="oxigen" className="space-y-14 py-10">
        <div>
          <h2 className="text-center text-2xl font-medium sm:text-5xl">
            {t('title-2')}
          </h2>
        </div>
        <div className="items-center gap-8 space-y-6 lg:grid lg:grid-cols-12 lg:space-y-0">
          <div className="lg:col-span-7">
            <SlideShow
              images={oxigenPlantImages}
              alt={'Sauerstoffanlage für Cajamarca'}
              animation="fade-in-out-slider"
            />
          </div>
          <div className="col-span-5 my-auto space-y-6">
            <p>{t('5')}</p> <p>{t('6')}</p>
            <DonateCallToAction locale={locale} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
