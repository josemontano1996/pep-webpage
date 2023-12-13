import Image from 'next/image';
import { cn } from '@/lib/utils';
import { HeartPulse } from 'lucide-react';
import LocaleLink from '../translations/LocaleLink';
import { buttonVariants } from '../ui/button';
import healthImg from '@/public/imgs/gesundheitmain.png';

const HealthHomeSection = () => {
  return (
    <div className="flex flex-col justify-between space-y-7">
      <h4 className="flex items-center gap-2 text-3xl font-medium text-rose-500">
        <span>
          <HeartPulse />
        </span>
        Für die Gesundheit
      </h4>
      <div className="gap-8 lg:flex">
        <div className="flex-1 space-y-4 items-center flex justify-between flex-col">
          <p>
            Die Mehrheit der peruanischen Bevölkerung hat keinen Zugang zu
            angemessenen Gesundheitsversorgung, oft nicht einmal zu den
            grundlegendsten.
          </p>
          <p>
            {' '}
            Die Patienten müssen in der Regel die gesamten Kosten ihrer
            Behandlung selbst tragen. Das führt oft dazu, dass{' '}
            <span className="font-semibold text-primary">
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
        <div className="my-auto flex-1">
          <Image src={healthImg} alt={''} />
        </div>
      </div>
    </div>
  );
};

export default HealthHomeSection;
