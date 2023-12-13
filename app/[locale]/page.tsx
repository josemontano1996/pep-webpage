import Image from 'next/image';
import { Metadata } from 'next';
import initTranslations from '@/lib/i18n';

import heroImage from '@/public/imgs/heroImg-min.jpg';
import sustainabilityImg from '@/public/imgs/sustainability-leaf.jpg';
import healthImg from '@/public/imgs/gesundheitmain.png';
import educationImg from '@/public/imgs/health/groupImage.jpg';
import umweltImg from '@/public/imgs/umwelt2.jpg';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import { HeartPulse, Trees } from 'lucide-react';
import LocaleLink from '@/components/translations/LocaleLink';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import ReadMore from '@/components/ReadMore';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const { t } = await initTranslations(locale, ['home']);
  return {
    title: t('meta-title'),
    description: t('meta-description'),
  };
}

export default async function HomePage({ params: { locale } }: Props) {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <>
      <section className="relative h-[75vh]">
        <Image
          src={heroImage}
          priority
          fill
          alt={t('hero-img-alt')}
          className="object-cover"
        />
        <div className="absolute top-1/4 translate-y-[-60%] transform text-center">
          <h1 className="flex w-screen justify-center text-5xl font-extrabold text-white ">
            {' '}
            {t('hero-title')}
          </h1>
        </div>
      </section>
      <div className="flex flex-col justify-center">
        <section className="mt-20">
          <MaxWidthWrapper>
            <article>
              <h2 className="mb-8 text-center text-4xl font-semibold">
                WER SIND WIR?
              </h2>
              <p className="text-center text-xl">
                PEP e. V.{' '}
                <span className="font-semibold text-primary">{`(${t(
                  's1-pep-long',
                )})`}</span>{' '}
                {t('s1-p1-1')}{' '}
                <span className="font-semibold text-primary">
                  {t('s1-p1-2')}
                </span>
              </p>
            </article>
          </MaxWidthWrapper>
          <article className="relative my-20 ml-[10vw] max-w-[90vw] bg-lime-100 pt-20">
            <h4 className="absolute left-1/2 top-3 mb-8 -translate-x-1/2 transform text-center text-4xl">
              {t('s1-t2')}
            </h4>
            <div className="grid w-[80vw] grid-cols-2 justify-items-center gap-10">
              <div className="flex flex-col justify-end">
                <Image
                  src={sustainabilityImg}
                  alt={'Welcome image'}
                  objectFit="cover"
                />
              </div>
              <p className="my-auto">
                Unsere Arbeit dreht sich um Unsere Arbeit dreht sich um die{' '}
                <span className="font-semibold text-primary">
                  die soziale und ökonomische nachhaltige Entwicklung.
                </span>{' '}
                Unter{' '}
                <span className="font-semibold text-primary">
                  sozialer Entwicklung
                </span>{' '}
                verstehen wir die Verbesserung der individuellen
                Lebensbedingungen und die positive Veränderung der sozialen,
                wirtschaftlichen und politischen Strukturen, ohne die keine
                sozialer Entwicklung Nachhaltigkeit gewährleistet ist. Aus Sicht{' '}
                <span className="font-semibold text-primary">
                  von PEP ist ökonomische Entwicklung viel mehr als
                  wirtschaftliches Wachstum,
                </span>
                denn dieses hat einen Sinn, nur wenn es von einer gerechteren
                Verteilung der wirtschaftlichen Erfolge innerhalb der
                Bevölkerung und die langfristige Erhaltung der Ressourcen
                begleitet wird. Nachhaltige Entwicklung bedeutet, die
                Bedürfnisse der Gegenwart so zu befriedigen, dass die
                Möglichkeiten zukünftiger Generationen nicht eingeschränkt
                werden.{' '}
                <span className="font-semibold text-primary">
                  Nachhaltigkeit impliziert wirtschaftliche Effizienz, soziale
                  Gerechtigkeit und ökologische Tragfähigkeit.
                </span>
              </p>
            </div>
          </article>
        </section>
        <MaxWidthWrapper>
          <section>
            <h2 className="mb-10 text-center text-4xl font-semibold">
              Was machen wir?
            </h2>
            <div className="flex flex-col space-y-16">
              <div className="grid grid-cols-2 gap-10 space-y-7">
                <div className="my-auto">
                  <Image
                    src={umweltImg}
                    alt={'umwelt img'}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-between space-y-7">
                  <h4 className="flex items-center gap-2 text-3xl font-medium text-green-500">
                    <span>
                      <Trees />
                    </span>
                    Für die Umwelt und Klimawandel{' '}
                  </h4>
                  <p className="mt-3">
                    <span className="font-semibold text-primary">
                      {' '}
                      Die Erderwärmung schreitet immer schneller voran{' '}
                    </span>
                    und ist durch Veränderungen im Klimasystem in allen Regionen
                    der Welt spürbar. Die Auswirkungen der globalen Erwärmung
                    wegen des Treibhauseffektes werden immer stärker und{' '}
                    <span className="font-semibold text-primary">
                      es ist dringend erforderlich, die CO2-Konzentration in der
                      Atmosphäre zu reduzieren.{' '}
                    </span>
                    Die Reduktion der CO2-Emissionen wird dafür nicht reichen,
                    man braucht eine aktive Entnahme von Kohlendioxid aus der
                    Atmosphäre. Darüber besteht Einigkeit in der Wissenschaft.
                  </p>
                  <p>
                    Wir wollen durch{' '}
                    <span className="font-semibold text-primary">
                      Aufforstung zur aktiven Entnahme von Kohlendioxid aus der
                      Atmosphäre
                    </span>{' '}
                    beitragen, und dadurch die negative Auswirkungen der
                    Klimakrise weltweit abmildern. Damit verbessern wir auch die
                    wirtschaftliche, soziale und ökologische Bedingungen der
                    Familien, die sich direkt an den Projekt beteiligen, aber
                    auch deren der Nachbarschaft. <ReadMore />
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
              <div className="grid grid-cols-2 gap-10 space-y-7 pb-16">
                <div className="flex flex-col justify-between space-y-7">
                  <h4 className="flex items-center gap-2 text-3xl font-medium text-rose-500">
                    <span>
                      <HeartPulse />
                    </span>
                    Für die Gesundheit
                  </h4>
                  <p>
                    Die Mehrheit der peruanischen Bevölkerung hat keinen Zugang
                    zu angemessenen Gesundheitsversorgung, oft nicht einmal zu
                    den grundlegendsten.
                  </p>
                  <p>
                    {' '}
                    Die Patienten müssen in der Regel die gesamten Kosten ihrer
                    Behandlung selbst tragen. Das führt oft dazu, dass{' '}
                    <span className='text-primary font-semibold'>
                      viele Patienten der armen Bevölkerungsschichten
                      unbehandelt bleiben.
                    </span>
                  </p>
                  <p>
                    {' '}
                    Seit 2002 haben wir in Zusammenarbeit mit anderen lokalen
                    und internationalen Organisationen medizinische Einsätze
                    durchgeführt.
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
                <div className="my-auto">
                  <Image src={healthImg} alt={''} />
                </div>
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
