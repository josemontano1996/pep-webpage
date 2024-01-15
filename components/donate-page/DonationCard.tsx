import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BankData from './BankData';
import { SEPADialog } from './SEPADialog';
import initTranslations from '@/lib/i18n';

export default async function DonationCard({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ['donate-page']);
  return (
    <Card
      id="bank"
      className="flex h-full flex-col justify-between sm:w-[550px] xl:w-[350px]"
    >
      <CardHeader>
        <CardTitle className="mb-2">{t('1-2')}</CardTitle>
        <CardDescription>
          {t('1-3')} <SEPADialog locale={locale} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BankData locale={locale} />
      </CardContent>
    </Card>
  );
}
