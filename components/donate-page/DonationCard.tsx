import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BankData from './BankData';
import { SEPADialog } from './SEPADialog';

export default function DonationCard() {
  //TODO: add Sepa documents
  return (
    <Card
      id="bank"
      className="flex h-full flex-col justify-between sm:w-[550px] xl:w-[350px]"
    >
      <CardHeader>
        <CardTitle className="mb-2">Banküberweisung</CardTitle>
        <CardDescription>
          Überweisen Sie einfach Ihre Spende oder richten Sie einen Dauerauftrag
          bei Ihrer Bank auf folgendes Konto ein oder <SEPADialog />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BankData />
      </CardContent>
    </Card>
  );
}
