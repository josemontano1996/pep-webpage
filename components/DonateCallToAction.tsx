import { cn } from '@/lib/utils';
import LocaleLink from './translations/LocaleLink';
import { buttonVariants } from './ui/button';
import initTranslations from '@/lib/i18n';

const DonateCallToAction = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['shared']);
  return (
    <div className="my-4 flex justify-center">
      <LocaleLink
        path={'/donate'}
        styling={cn(buttonVariants({ variant: 'destructive' }), 'inline-block')}
      >
        {t('donate-now-cta')}
      </LocaleLink>
    </div>
  );
};

export default DonateCallToAction;
