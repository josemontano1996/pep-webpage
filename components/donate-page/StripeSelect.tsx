'use client';

import { useState } from 'react';
import { CardContent, CardFooter } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

type TSelectValue = 'recurring' | 'single';

const StripeSelect = () => {
  const { t } = useTranslation();
  const [donationType, setDonationType] = useState<TSelectValue>('single');

  const onHandleChange = (e: TSelectValue) => {
    setDonationType(e);
  };
  return (
    <>
      <CardContent>
        <Select onValueChange={(e: TSelectValue) => onHandleChange(e)}>
          <SelectTrigger>
            <SelectValue placeholder="Donation type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">Single Donation</SelectItem>
            <SelectItem value="recurring">Recurring Donation</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="flex flex-col justify-end">
        {donationType === 'single' && (
          <a
            className={cn(buttonVariants())}
            href={process.env.NEXT_PUBLIC_STRIPE_LINK}
          >
            {t('single-donation')}
          </a>
        )}
        {donationType === 'recurring' && (
          <a
            className={cn(buttonVariants())}
            href={process.env.NEXT_PUBLIC_SUBSCRIPTION_LINK}
          >
            {t('subscription-donation')}
          </a>
        )}
      </CardFooter>
    </>
  );
};

export default StripeSelect;
