import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BankData from './BankData';

export default function DonationCard() {
  return (
    <Card
      id="bank"
      className="flex h-full flex-col justify-between sm:w-[550px] xl:w-[350px]"
    >
      <CardHeader>
        <CardTitle className="mb-2">Bank Transfer</CardTitle>
        <CardDescription>
          Directly make your donation through your bank. Simply transfer your
          donation or make a subscription with your bank to the following
          account:
        </CardDescription>
      </CardHeader>
      <BankData />
    </Card>
  );
}
