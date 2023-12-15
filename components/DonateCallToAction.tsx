import { cn } from '@/lib/utils';
import LocaleLink from './translations/LocaleLink';
import { buttonVariants } from './ui/button';

const DonateCallToAction = () => {
  return (
    <div className="my-4 flex justify-center">
      <LocaleLink
        path={'/donate'}
        styling={cn(buttonVariants({ variant: 'destructive' }),'inline-block')}
      >
        Jetzt Spenden
      </LocaleLink>
    </div>
  );
}

export default DonateCallToAction