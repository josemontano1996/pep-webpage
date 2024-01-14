import Image from 'next/image';
import { cn } from '@/lib/utils';
import { HeartPulse } from 'lucide-react';
import LocaleLink from '../translations/LocaleLink';
import { buttonVariants } from '../ui/button';
import healthImg from '@/public/imgs/gesundheitmain.png';

const HealthHomeSection = () => {
  return (
    <div className="flex flex-col justify-between space-y-7">
      <h3 className="mx-auto flex items-center gap-2 text-xl font-semibold text-rose-500 sm:text-3xl lg:mx-0">
        <span>
          <HeartPulse />
        </span>
        Für die Gesundheit
      </h3>
      <div className="gap-8 space-y-4 lg:flex lg:space-y-0">
        <div className="my-auto lg:hidden">
          <Image src={healthImg} alt={'Fotos der rekonstruktiven Chirurgie'} />
        </div>
        <div className="flex flex-1 flex-col items-center justify-between space-y-4 sm:text-lg lg:text-left">
          <p>
            Die Mehrheit der peruanischen Bevölkerung hat keinen Zugang zu einer
            angemessenen Gesundheitsversorgung, oft nicht einmal zu der
            grundlegendsten.
          </p>
          <p>
            {' '}
            Die Patienten müssen in der Regel die gesamten Kosten ihrer
            Behandlung selbst tragen. Das führt oft dazu, dass{' '}
            <span className="font-semibold text-rose-400">
              viele Patienten der armen Bevölkerungsschichten unbehandelt
              bleiben.
            </span>
          </p>
          <p>
            {' '}
            Seit 2002 haben wir in Zusammenarbeit mit anderen lokalen und
            internationalen Organisationen medizinische Einsätze durchgeführt.
          </p>

          <div className="mt-3 text-center">
            <LocaleLink
              path="/health"
              styling={cn(
                buttonVariants({ size: 'lg' }),
                'bg-rose-500 hover:bg-rose-500/70',
              )}
            >
              weitere Informationen
            </LocaleLink>
          </div>
        </div>
        <div className="my-auto hidden flex-1 lg:block">
          <Image src={healthImg} alt={'Fotos der rekonstruktiven Chirurgie'} />
        </div>
      </div>
    </div>
  );
};

export default HealthHomeSection;
