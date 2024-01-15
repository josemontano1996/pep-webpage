import Image from 'next/image';
import { cn } from '@/lib/utils';
import { HeartPulse } from 'lucide-react';
import LocaleLink from '../translations/LocaleLink';
import { buttonVariants } from '../ui/button';
import healthImg from '@/public/imgs/health-1.png';
import initTranslations from '@/lib/i18n';

const HealthHomeSection = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home-health-section']);
  return (
    <div className="flex flex-col justify-between space-y-7">
      <h3 className="mx-auto flex items-center gap-2 text-xl font-semibold text-rose-500 sm:text-3xl lg:mx-0">
        <span>
          <HeartPulse />
        </span>
        {t('title')}
      </h3>
      <div className="gap-8 space-y-4 lg:flex lg:space-y-0">
        <div className="my-auto lg:hidden">
          <Image src={healthImg} alt={'Fotos der rekonstruktiven Chirurgie'} />
        </div>
        <div className="flex flex-1 flex-col items-center justify-between space-y-4 sm:text-lg lg:text-left">
          <p>{t('b1')}</p>
          <p>
            {' '}
            {t('b2')}{' '}
            <span className="font-semibold text-rose-400">{t('b3')}</span>
          </p>
          <p> {t('b4')}</p>

          <div className="mt-3 text-center">
            <LocaleLink
              path="/health"
              styling={cn(
                buttonVariants({ size: 'lg' }),
                'bg-rose-500 hover:bg-rose-500/70',
              )}
            >
              {t('section-cta')}
            </LocaleLink>
          </div>
        </div>
        <div className="my-auto hidden flex-1 lg:block">
          <Image src={healthImg} alt={t('section-img-alt')} />
        </div>
      </div>
    </div>
  );
};

export default HealthHomeSection;
