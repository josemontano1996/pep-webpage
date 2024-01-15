import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BecomeMember from './BecomeMember';
import initTranslations from '@/lib/i18n';

export default async function BecomeMemberCard({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ['donate-page']);
  return (
    <Card
      id="membership"
      className="flex h-full flex-col justify-between sm:w-[550px] xl:w-[350px]"
    >
      <CardHeader>
        <CardTitle className="mb-2">{t('3-1')}</CardTitle>
        <CardDescription>{t('3-2')}</CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col items-center">
        <BecomeMember />
      </CardFooter>
    </Card>
  );
}
