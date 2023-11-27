'use client';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import StripeSelect from './StripeSelect';

const StripeDonation = () => {
  return (
    <Card className="flex w-[350px] flex-col justify-between">
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
      <StripeSelect />
    </Card>
  );
};

export default StripeDonation;
