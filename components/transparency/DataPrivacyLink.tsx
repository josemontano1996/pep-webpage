import initTranslations from '@/lib/i18n';

const DataPrivacyLink = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['footer']);
  return (
    <a target="_blank" href={`/pdf/datenschutz/datenschutz-${locale}.pdf`}>
      {t('privacy-policy')}
    </a>
  );
};

export default DataPrivacyLink;
