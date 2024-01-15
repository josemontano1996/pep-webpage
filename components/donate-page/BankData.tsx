import initTranslations from '@/lib/i18n';
import { CopyButton } from './CopyButton';

const BankData = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['donate-page']);
  return (
    <div className="space-y-3">
      <p className="flex gap-2">
        <strong>{t('1-9')}</strong>{' '}
        <span id="IBAN">{process.env.NEXT_PUBLIC_IBAN_NUMBER}</span>
        <CopyButton copiedData={process.env.NEXT_PUBLIC_IBAN_NUMBER!} />
      </p>
      <p className="flex gap-2">
        <strong>{t('1-10')}</strong>{' '}
        <span id="BIC">{process.env.NEXT_PUBLIC_BIC_NUMBER}</span>
        <CopyButton copiedData={process.env.NEXT_PUBLIC_BIC_NUMBER!} />
      </p>
      <p className="flex gap-2">
        <strong>{t('1-11')}</strong>{' '}
        <span>{process.env.NEXT_PUBLIC_COMPANY_NAME}</span>
        <CopyButton copiedData={process.env.NEXT_PUBLIC_COMPANY_NAME!} />
      </p>
    </div>
  );
};

export default BankData;
