import { cn } from '@/lib/utils';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { buttonVariants } from '../ui/button';
import initTranslations from '@/lib/i18n';

const StripeDonation = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['donate-page']);
  return (
    <Card
      id="online"
      className="flex h-full flex-col justify-between sm:w-[550px] xl:w-[350px]"
    >
      <CardHeader>
        <CardTitle className="mb-2">{t('2-2')}</CardTitle>
        <CardDescription>
          {t('2-3')}{' '}
          <a
            target="_blank"
            className="italic hover:underline"
            href="https://stripe.com/"
          >
            Stripe
          </a>{' '}
          {t('2-4')}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-center">
        <a
          className={cn(buttonVariants())}
          href={process.env.NEXT_PUBLIC_STRIPE_LINK}
          target='_blank'
        >
          {t('2-5')}
        </a>
      </CardFooter>
    </Card>
  );
};

export default StripeDonation;
