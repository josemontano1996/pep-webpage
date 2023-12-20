import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BecomeMember from './BecomeMember';

export default function BecomeMemberCard() {
  return (
    <Card
      id="membership"
      className="flex h-full flex-col justify-between sm:w-[550px] xl:w-[350px]"
    >
      <CardHeader>
        <CardTitle className="mb-2">Mitglied werden</CardTitle>
        <CardDescription>
          Sie sind jederzeit herzlich willkommen. Wenn Sie sich an unseren
          Projekten beteiligen möchten, klicken Sie einfach auf die Schaltfläche
          unten und nehmen Sie unverbindlich Kontakt mit uns auf, um weitere
          Informationen zu erhalten.
          {/* oder nehmen Sie <ContactDialog triggerStyle="underline" /> mit
          uns. */}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col items-center">
        <BecomeMember />
      </CardFooter>
    </Card>
  );
}
