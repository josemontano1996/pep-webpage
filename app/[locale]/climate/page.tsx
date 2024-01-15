import { Metadata } from 'next';
import Image from 'next/image';

import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import mapPhoto from '@/public/imgs/map-cajamarca.jpg';
import viveroPhoto from '@/public/imgs/vivero.jpg';
import hoyacionPhoto from '@/public/imgs/hoyacion.jpg';
import hoyacionPhoto2 from '@/public/imgs/hoyacion-2.jpg';
import socialPros from '@/public/imgs/meeting-1.jpg';
import DonateCallToAction from '@/components/DonateCallToAction';
import initTranslations from '@/lib/i18n';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const { t } = await initTranslations(locale, ['climate-page']);
  return {
    title: t('meta-title'),
    description: t('description'),
    keywords: t('meta-keywords'),
  };
}

const ClimatePage = async ({ params: { locale } }: Props) => {
  const { t } = await initTranslations(locale, ['climate-page']);
  return (
    <MaxWidthWrapper>
      <section className="space-y-14 py-10">
        <div>
          <h2 className="text-center text-3xl font-medium sm:text-5xl">
            {t('title')}
          </h2>
        </div>
        <div id="objectives" className="flex  gap-8">
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="mb-1 text-2xl">{t('ziele')}</h3>
              <p>{t('ziele-1')}</p>
            </div>
            <div className="space-y-2 sm:flex sm:items-center sm:justify-between lg:block">
              <div className="flex-1">
                <h3 className="mb-1 text-2xl">{t('ort')}</h3>
                <p>{t('ort-1')}</p>
                <p>{t('ort-2')}</p>
                <p>{t('ort-3')}</p>
                <p>{t('ort-4')}</p>
                <p>{t('ort-5')}</p>
              </div>
              <div className="flex-1 lg:hidden lg:h-full">
                <a
                  href="https://en.wikipedia.org/wiki/Department_of_Cajamarca#/media/File:Peru_-_Cajamarca_Department_(locator_map).svg"
                  target="_blank"
                >
                  <Image
                    src={mapPhoto}
                    alt={t('ort-map-alt')}
                    className="h-[50vh] object-cover"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-1 text-2xl">{t('s-1-title')}</h3>
              <p>{t('s-1')}</p>
            </div>
          </div>
          <div className="hidden h-full items-center lg:flex">
            <a
              href="https://en.wikipedia.org/wiki/Department_of_Cajamarca#/media/File:Peru_-_Cajamarca_Department_(locator_map).svg"
              target="_blank"
            >
              <Image src={mapPhoto} alt={t('ort-map-alt')} />
            </a>
          </div>
        </div>
      </section>
      <section id="advantajes" className="space-y-6 pb-12 pt-14">
        <h3 className="text-2xl">{t('s-2-title')}</h3>

        <div>
          <h5 className="mb-1 text-xl">{t('s-2-1')}</h5>
          <p>{t('s-2-2')}</p>
        </div>
        <div>
          <h5 className="mb-2 text-xl">{t('s-3-1')}</h5>
          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="space-y-4 lg:col-span-6">
              <div className="col-span-6 lg:hidden">
                <Image
                  src={socialPros}
                  alt={t('s-3-img-alt')}
                  className="rounded-xl"
                />
              </div>
              <p>{t('s-3-2')}</p>
            </div>
            <div className="hidden lg:col-span-6 lg:block">
              <Image
                src={socialPros}
                alt="Soziale Vorteile"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div>
          <h5 className="mb-1 text-xl">{t('s-4-1')}</h5>
          <p>{t('s-4-2')}</p>
        </div>
      </section>
      <section id="planting" className="space-y-6">
        <h3 className="mb-1 text-2xl">{t('s-5-1')}</h3>

        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="space-y-4 lg:col-span-6">
            <div className="space-y-4">
              <h5 className="mb-1 text-xl">{t('s-5-2')}</h5>
              <div className="col-span-6 block lg:hidden">
                <Image
                  src={viveroPhoto}
                  alt={t('s-img-alt')}
                  className="rounded-xl"
                />
              </div>
              <p>
                {t('s-5-3')} <span className="italic">{t('s-5-4')}</span>
              </p>
              <p>
                {t('s-5-5')} <span className="italic">{t('s-5-6')}</span>
              </p>
            </div>
            <div>
              <h5 className="mb-1 text-xl">{t('s-5-7')}</h5>
              <p className="flex-1">{t('s-5-8')}</p>
            </div>
          </div>
          <div className="col-span-6 hidden lg:block">
            <Image
              src={viveroPhoto}
              alt={t('s-img-alt')}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="py-10 lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="hidden lg:col-span-4 lg:flex lg:items-center">
            <Image
              src={hoyacionPhoto}
              alt={t('s-img-alt2')}
              className="rounded-xl"
            />
          </div>
          <div className="col-span-8 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="mb-1 text-2xl">{t('s-5-9')}</h3>
              <div className="col-span-4 lg:hidden ">
                <Image
                  src={hoyacionPhoto2}
                  alt={t('s-img-alt3')}
                  className="h-[80vh] rounded-xl object-cover"
                />
              </div>
              <p>{t('s-5-10')}</p>
            </div>
            <div>
              <h3 className="mb-1 text-2xl">{t('s-5-11')}</h3>
              <p>{t('s-5-12')}</p>
            </div>
            <div>
              <h3 className="mb-1 text-2xl">{t('s-5-13')}</h3>
              <p>{t('s-5-14')}</p>
              <DonateCallToAction locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default ClimatePage;
