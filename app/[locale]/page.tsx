import { Metadata } from 'next';
import Image from 'next/image';
import initTranslations from '@/lib/i18n';

import heroImage from '@/public/imgs/heroImg.jpg';
import sustainabilityImg from '@/public/imgs/sustainability-leaf.jpg';

import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import ClimateHomeSection from '@/components/home-page/ClimateHomeSection';
import HealthHomeSection from '@/components/home-page/HealthHomeSection';
import DonateCallToAction from '@/components/DonateCallToAction';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const { t } = await initTranslations(locale, ['home']);
  return {
    title:
      'PEP e.V. - Projekte für Entwicklungsförderung in Peru und Lateinamerika',
    description:
      'PEP e.V. - Gemeinnütziger Verein mit Sitz in Trier, der Aufforstungs- und Gesundheitsprojekte für Bedürftige in Peru durchführt.',
    keywords:
      'PEP e.V., Trier, Peru, gemeinnütziger Verein, Projekte, Gesundheitshilfe, Armut, Unterstützung, Planung, Hilfe, Klimawandel',
  };
}

export default async function HomePage({ params: { locale } }: Props) {
  /*   const { t } = await initTranslations(locale, ['home']); */

  return (
    <>
      <section className="relative h-[75vh]">
        <Image
          src={heroImage}
          fill
          alt={'foto von unserem team in peru'}
          className="object-cover"
        />
        <div className="absolute top-1/4 translate-y-[-60%] transform text-center">
          <h1 className="flex w-screen justify-center text-4xl font-bold text-white sm:text-5xl ">
            {`"PEP für eine nachhaltigere Welt"`}
          </h1>
        </div>
      </section>
      <div className="flex flex-col justify-center">
        <section className="mt-20">
          <MaxWidthWrapper>
            <article>
              <h2
                id="about"
                className="mb-8 text-center text-3xl font-semibold sm:text-4xl"
              >
                WER SIND WIR?
              </h2>
              <p className="text-center sm:text-xl">
                PEP e. V.{' '}
                <span className="font-semibold text-primary">{`(Projekte für Entwicklungsförderung in Peru und Lateinamerika)`}</span>{' '}
                ist ein gemeinnütziger Verein, der am 22. Februar 2002 in Trier
                gegründet wurde. Dessen Absicht ist die{' '}
                <span className="font-semibold text-primary">
                  Förderung der sozialen und ökonomischen Entwicklung,
                  Gesundheit, Bildung, Kulturund Umweltschutz in Peru und
                  Lateinamerika.
                </span>
              </p>
            </article>
          </MaxWidthWrapper>
          <article
            id="goals"
            className="relative my-20 bg-lime-100 pt-4 sm:ml-[10vw] sm:max-w-[90vw] xl:pt-20"
          >
            <h2 className="mb-8 transform text-center text-4xl xl:absolute xl:left-1/2 xl:top-3 xl:-translate-x-1/2">
              Was bewegt uns?
            </h2>
            <div className="grid-cols-2 justify-items-center gap-10 sm:w-[80vw] xl:grid">
              <div className="sm:w-4/5 xl:flex xl:h-full xl:w-full xl:flex-col xl:justify-end">
                <Image
                  src={sustainabilityImg}
                  alt={'Nachhaltigkeitsimage'}
                  className="object-cover"
                />
              </div>
              <div className="flex-col justify-end space-y-4 p-6 text-center sm:text-left sm:text-lg xl:my-auto xl:p-0 xl:pb-2">
                <p>
                  Unsere Arbeit dreht sich um die{' '}
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
                  nachhaltige soziale Entwicklung gewährleistet ist.{' '}
                </p>
                <p>
                  Aus Sicht{' '}
                  <span className="font-semibold text-primary">
                    von PEP ist ökonomische Entwicklung viel mehr als
                    wirtschaftliches Wachstum,{' '}
                  </span>
                  denn dieses hat nur einen Sinn, wenn es von einer gerechteren
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
            </div>
          </article>
        </section>
        <MaxWidthWrapper>
          <section>
            <h2
              id="projects"
              className="mb-10 text-center text-3xl font-semibold sm:text-4xl"
            >
              Was machen wir?
            </h2>
            <div className="flex flex-col space-y-16">
              <ClimateHomeSection />
              <HealthHomeSection />
            </div>
          </section>
          <section className="pt-20 text-center">
            <p>
              Um die Welt weiterhin zu einem besseren und nachhaltigen Ort zu
              machen, brauchen wir Ihre Hilfe.
            </p>
            <DonateCallToAction />
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
