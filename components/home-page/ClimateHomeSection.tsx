import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Trees } from 'lucide-react';
import React from 'react';
import ReadMore from '../ReadMore';
import LocaleLink from '../translations/LocaleLink';
import { buttonVariants } from '../ui/button';
import forestImg from '@/public/imgs/forest-1.png';
import initTranslations from '@/lib/i18n';

const ClimateHomeSection = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home-climate-section']);
  return (
    <div className="flex flex-col justify-between space-y-7">
      <div className="mx-auto flex items-center gap-2 text-xl font-semibold text-green-600 sm:text-3xl lg:mx-0 lg:justify-end ">
        <span>
          <Trees />
        </span>
        <h3>{t('title')}</h3>
      </div>
      <div className="gap-8 space-y-4 lg:flex lg:space-y-0">
        <div className="my-auto flex-1">
          <Image src={forestImg} alt={t('section-img-alt')} className="rounded-xl" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-between space-y-4 sm:text-lg lg:text-left">
          <p>
            <span className="font-semibold text-green-500"> {t('b1')} </span>
            {t('b2')}{' '}
            <span className="font-semibold text-green-500">{t('b3')} </span>
            {t('b4')}{' '}
            <span className="xl:hidden">
              <ReadMore locale={locale} />
            </span>
          </p>
          <p className="hidden xl:block">
            {t('b5')}{' '}
            <span className="font-semibold text-green-500">{t('b6')}</span>{' '}
            {t('b7')} <ReadMore locale={locale} />
          </p>

          <div className="mt-3 text-center">
            <LocaleLink
              path="/climate"
              styling={cn(
                buttonVariants({ size: 'lg' }),
                'bg-green-600 hover:bg-green-600/70',
              )}
            >
              Projekte
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateHomeSection;
