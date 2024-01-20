import initTranslations from '@/lib/i18n';

const ImpressumLink = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['footer']);
  return (
    <a target="_blank" href={`/pdf/impressum/impressum-${locale}.pdf`}>
      {t('impressum')}
    </a>
  );
};

export default ImpressumLink;
