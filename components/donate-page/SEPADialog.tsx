import initTranslations from '@/lib/i18n';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { cn } from '@/lib/utils';

export const SEPADialog = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['donate-page']);
  return (
    <Dialog>
      <DialogTrigger className={cn('block text-left underline')}>
        {t('1-4')}
      </DialogTrigger>
      <DialogContent className="z-50 border-primary/80">
        <DialogTitle
          className={cn('pb-3 pt-4 text-center text-2xl font-medium')}
        >
          {t('1-5')}
        </DialogTitle>
        <DialogHeader>
          <DialogDescription>
            <p className="text-base">
              {t('1-6')}{' '}
              <a
                href="/pdf/sepa-form.pdf"
                target="_blank"
                className="underline"
              >
                {t('1-7')}
              </a>{' '}
              {t('1-8')}
            </p>
            <address className="py-2 text-base italic">
              <p>{process.env.NEXT_PUBLIC_COMPANY_NAME}</p>
              <p>{process.env.NEXT_PUBLIC_PEP_STREET}</p>
              <p>
                {process.env.NEXT_PUBLIC_PEP_POSTAL}{' '}
                {process.env.NEXT_PUBLIC_PEP_CITY}
              </p>
            </address>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
