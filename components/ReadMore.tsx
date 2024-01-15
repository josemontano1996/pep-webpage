import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';
import LocaleLink from './translations/LocaleLink';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import initTranslations from '@/lib/i18n';

const ReadMore = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home-climate-section']);
  return (
    <Dialog>
      <DialogTrigger className="italic text-red-500 hover:cursor-pointer hover:underline">
        {t('read-cta')}
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-[80vw] overflow-auto bg-lime-100 ">
        <DialogTitle className="capitalize">{t('read-b1')}</DialogTitle>
        <p className=" xl:hidden">
          {t('read-b2')} <span className="font-bold">{t('read-b3')}</span>{' '}
          {t('read-b4')}
        </p>
        <p>
          {t('read-b5')} {t('read-b6')}{' '}
          <span className="font-bold">{t('read-b7')}</span>
        </p>
        <p>
          {t('read-b8')} <span className="font-bold">{t('read-b9')}</span>{' '}
          {t('read-b10')}
        </p>
        <p>
          {t('read-b11')} <span className="font-bold">{t('read-b12')}</span>{' '}
          {t('read-b13')} <span className="font-bold">{t('read-b14')}</span>
        </p>

        <div className="mt-3 text-center">
          <LocaleLink
            path="/climate"
            styling={cn(
              buttonVariants({ size: 'lg' }),
              'bg-green-500 hover:bg-green-500/70',
            )}
          >
            {t('read-button')}
          </LocaleLink>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReadMore;
