import { Metadata } from 'next';
import Image from 'next/image';
import initTranslations from '@/lib/i18n';

import heroImage from '@/public/imgs/heroImg.jpg';
import sustainabilityImg from '@/public/imgs/sustainability-leaf.jpg';

import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import ClimateHomeSection from '@/components/home-page/ClimateHomeSection';
import HealthHomeSection from '@/components/home-page/HealthHomeSection';
import DonateCallToAction from '@/components/DonateCallToAction';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const { t } = await initTranslations(locale, ['home-page']);
  return {
    title: t('meta-title'),
    description: t('meta-description'),
    keywords: t('meta-keywords'),
  };
}

export default async function HomePage({ params: { locale } }: Props) {
  const { t } = await initTranslations(locale, ['home-page']);

  return (
    <>
      <section className="relative h-[75vh]">
        <Image
          src={heroImage}
          fill
          alt={t('hero-img-alt')}
          className="object-cover"
        />
        <div className="absolute top-1/4 translate-y-[-60%] transform text-center">
          <h1 className="flex w-screen justify-center text-4xl font-bold text-white sm:text-5xl ">
            {t('hero-title')}
          </h1>
        </div>
      </section>
      <div className="flex flex-col justify-center">
        <section className="mt-20">
          <MaxWidthWrapper>
            <article>
              <h2
                id="about"
                className="mb-8 text-center text-3xl font-semibold sm:text-4xl"
              >
                {t('s-1-title')}
              </h2>
              <p className="text-center sm:text-xl">
                {t('s-1-b1')}{' '}
                <span className="font-semibold text-primary">
                  {t('s-1-b2')}
                </span>{' '}
                {t('s-1-b3')}{' '}
                <span className="font-semibold text-primary">
                  {t('s-1-b4')}
                </span>
              </p>
            </article>
          </MaxWidthWrapper>
          <article
            id="goals"
            className="relative my-20 bg-lime-100 pt-4 sm:ml-[10vw] sm:max-w-[90vw] xl:pt-20"
          >
            <h2 className="mb-8 transform text-center text-4xl xl:absolute xl:left-1/2 xl:top-3 xl:-translate-x-1/2">
              {t('s-2-title')}
            </h2>
            <div className="grid-cols-2 justify-items-center gap-10 sm:w-[80vw] xl:grid">
              <div className="sm:w-4/5 xl:flex xl:h-full xl:w-full xl:flex-col xl:justify-end">
                <Image
                  src={sustainabilityImg}
                  alt={'Nachhaltigkeitsimage'}
                  className="object-cover"
                />
              </div>
              <div className="flex-col justify-end space-y-4 p-6 text-center sm:text-left sm:text-lg xl:my-auto xl:p-0 xl:pb-2">
                <p>
                  {t('s-2-b1')}{' '}
                  <span className="font-semibold text-primary">
                    {t('s-2-b2')}{' '}
                  </span>{' '}
                  {t('s-2-b3')}{' '}
                  <span className="font-semibold text-primary">
                    {t('s-2-b4')}
                  </span>{' '}
                  {t('s-2-b5')}{' '}
                </p>
                <p>
                  {t('s-2-b6')}{' '}
                  <span className="font-semibold text-primary">
                    {t('s-2-b7')}{' '}
                  </span>
                  {t('s-2-b8')}{' '}
                  <span className="font-semibold text-primary">
                    {t('s-2-b9')}
                  </span>
                </p>
              </div>
            </div>
          </article>
        </section>
        <MaxWidthWrapper>
          <section>
            <h2
              id="projects"
              className="mb-10 text-center text-3xl font-semibold sm:text-4xl"
            >
              {t('s-3-title')}{' '}
            </h2>
            <div className="flex flex-col space-y-16">
              <ClimateHomeSection locale={locale} />
              <HealthHomeSection locale={locale} />
            </div>
          </section>
          <section className="pt-20 text-center text-xl">
            <p>{t('s-4-b1')}</p>
            <DonateCallToAction locale={locale} />
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
