import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BecomeMember from './BecomeMember';

export default function BecomeMemberCard() {
  return (
    <Card className="flex w-[350px] flex-col justify-between">
      <CardHeader>
        <CardTitle className="mb-2">Become a Member</CardTitle>
        <CardDescription>
          We are always welcome to invite people on board, if you want to get
          involved in our proyects, just click the button down below to contact us and we will give you
          further all the information you need.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col items-center">
        <BecomeMember />
      </CardFooter>
    </Card>
  );
}
