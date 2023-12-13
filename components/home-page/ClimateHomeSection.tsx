import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Trees } from 'lucide-react';
import React from 'react';
import ReadMore from '../ReadMore';
import LocaleLink from '../translations/LocaleLink';
import { buttonVariants } from '../ui/button';
import umweltImg from '@/public/imgs/umwelt2.jpg';

const ClimateHomeSection = () => {
  return (
    <div className="flex flex-col justify-between space-y-7">
      <h4 className="flex items-center gap-2 text-3xl font-medium text-green-500 lg:justify-end">
        <span>
          <Trees />
        </span>
        Für die Umwelt und Klimawandel{' '}
      </h4>
      <div className="gap-8 lg:flex">
        <div>
          <Image src={umweltImg} alt={'umwelt img'} className="rounded-xl" />
        </div>
        <div className="flex flex-col items-center justify-between space-y-4">
          <p>
            <span className="font-semibold text-primary">
              {' '}
              Die Erderwärmung schreitet immer schneller voran{' '}
            </span>
            und ist durch Veränderungen im Klimasystem in allen Regionen der
            Welt spürbar. Die Auswirkungen der globalen Erwärmung wegen des
            Treibhauseffektes werden immer stärker und{' '}
            <span className="font-semibold text-primary">
              es ist dringend erforderlich, die CO2-Konzentration in der
              Atmosphäre zu reduzieren.{' '}
            </span>
            Die Reduktion der CO2-Emissionen wird dafür nicht reichen, man
            braucht eine aktive Entnahme von Kohlendioxid aus der Atmosphäre.
            Darüber besteht Einigkeit in der Wissenschaft. {' '}
            <span className="xl:hidden">
              <ReadMore />
            </span>
          </p>
          <p className="hidden xl:block">
            Wir wollen durch{' '}
            <span className="font-semibold text-primary">
              Aufforstung zur aktiven Entnahme von Kohlendioxid aus der
              Atmosphäre
            </span>{' '}
            beitragen, und dadurch die negative Auswirkungen der Klimakrise
            weltweit abmildern. Damit verbessern wir auch die wirtschaftliche,
            soziale und ökologische Bedingungen der Familien, die sich direkt an
            den Projekt beteiligen, aber auch deren der Nachbarschaft.{' '}
            <ReadMore />
          </p>

          <div className="mt-3 text-center">
            <LocaleLink
              path="/climate"
              styling={cn(
                buttonVariants({ size: 'lg' }),
                'bg-green-500 hover:bg-green-500/70',
              )}
            >
              Projekte
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateHomeSection;
