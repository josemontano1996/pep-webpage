'use client';
import { cn } from '@/lib/utils';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { buttonVariants } from '../ui/button';


const StripeDonation = () => {
  return (
    <Card id='online' className="flex flex-col h-full justify-between sm:w-[550px] xl:w-[350px]">
      <CardHeader>
        <CardTitle className="mb-2">Online Donation</CardTitle>
        <CardDescription>
          Directly make a donation online. Powered by{' '}
          <a
            target="_blank"
            className="italic hover:underline"
            href="https://stripe.com/"
          >
            Stripe
          </a>{' '}
          you can safely either make a single or recurring donation.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-center">
        <a
          className={cn(buttonVariants())}
          href={process.env.NEXT_PUBLIC_STRIPE_LINK}
        >
          Online Donation
        </a>
      </CardFooter>
    </Card>
  );
};
   

export default StripeDonation;
