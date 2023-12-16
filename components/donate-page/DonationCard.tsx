import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BankData from './BankData';

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
          Machen Sie Ihre Spende direkt über Ihre Bank. Überweisen Sie einfach
          Ihre Spende oder richten Sie einen Dauerauftrag bei Ihrer Bank auf
          folgendes Konto ein oder{' '}
          <a className='underline hover:cursor-pointer'>
            erteilen Sie uns eine Einzugsermächtigung oder ein
            SEPA-Lastschriftmandat:
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BankData />
      </CardContent>
    </Card>
  );
}
