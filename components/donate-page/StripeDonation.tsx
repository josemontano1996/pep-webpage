'use client';
import { cn } from '@/lib/utils';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { buttonVariants } from '../ui/button';

const StripeDonation = () => {
  return (
    <Card
      id="online"
      className="flex h-full flex-col justify-between sm:w-[550px] xl:w-[350px]"
    >
      <CardHeader>
        <CardTitle className="mb-2">Online Spenden</CardTitle>
        <CardDescription>
          Spenden Sie direkt online. Mit{' '}
          <a
            target="_blank"
            className="italic hover:underline"
            href="https://stripe.com/"
          >
            Stripe
          </a>{' '}
          können Sie sicher entweder eine einmalige oder eine wiederkehrende
          Spende tätigen.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-center">
        <a
          className={cn(buttonVariants())}
          href={process.env.NEXT_PUBLIC_STRIPE_LINK}
        >
          Online Spenden
        </a>
      </CardFooter>
    </Card>
  );
};

export default StripeDonation;
