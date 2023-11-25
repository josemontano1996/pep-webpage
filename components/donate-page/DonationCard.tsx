import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CopyButton } from './CopyButton';

export default function DonationCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="mb-2">Bank Transfer</CardTitle>
        <CardDescription>
          Directly make your donation through your bank. Simply transfer your
          donation or make a subscription with your bank to the following
          account:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div id="accountData" className="mb-4">
          <p>
            <strong>IBAN:</strong> {process.env.NEXT_PUBLIC_IBAN_NUMBER}
          </p>
          <p>
            <strong>BIC:</strong> {process.env.NEXT_PUBLIC_BIC_NUMBER}
          </p>
          <p>
            <strong>Company name</strong>:{' '}
            {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <CopyButton>Copy Data</CopyButton>
      </CardFooter>
    </Card>
  );
}
