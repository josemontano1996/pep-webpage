import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import initTranslations from '@/lib/i18n';

import heroImage from '@/public/imgs/heroImg-min.jpg';
import sustainabilityImg from '@/public/imgs/sustainability-leaf.jpg';
import healthImg from '@/public/imgs/gesundheitmain.png';
import educationImg from '@/public/imgs/educationImg.png';
import umweltImg from '@/public/imgs/peru-jungle.jpg';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';

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

export default async function Home({ params: { locale } }: Props) {
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
          <article className="relative my-20 ml-[10vw] max-w-[90vw] bg-lime-200 pt-14">
            <h4 className="absolute left-1/2 top-1 mb-8 -translate-x-1/2 transform text-center text-4xl">
              {t('s1-t2')}
            </h4>
            <div className="grid w-[80vw] grid-cols-2 justify-items-center gap-10">
              <div>
                <Image
                  src={sustainabilityImg}
                  alt={'Welcome image'}
                  objectFit="cover"
                />
              </div>
              <p className="my-auto">
                Unsere Arbeit dreht sich um die{' '}
                <span className="font-semibold text-primary">
                  soziale und ökonomische nachhaltige Entwicklung
                </span>
                . Unter sozialer Entwicklung verstehen wir nicht nur die
                Verbesserung der individuellen Lebensbedingungen, sondern
                vielmehr die positive Veränderung der sozialen, wirtschaftlichen
                und politischen Strukturen, ohne die keine Nachhaltigkeit
                gewährleistet ist.{' '}
                <span className="font-semibold text-primary">
                  Aus Sicht von PEP ist ökonomische Entwicklung viel mehr als
                  wirtschaftliches Wachstum
                </span>{' '}
                , denn dieses hat einen Sinn, nur wenn es von einer gerechteren
                Verteilung der wirtschaftlichen Erfolge innerhalb der
                Bevölkerung und die langfristige Erhaltung der Ressourcen
                begleitet wird. Nachhaltigkeit oder nachhaltige Entwicklung
                bedeutet, die Bedürfnisse der Gegenwart so zu befriedigen, dass
                die Möglichkeiten zukünftiger Generationen nicht eingeschränkt
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
          <section className="mx-auto my-8 max-w-[1660px]">
            <h2 className="mb-8 text-center text-4xl font-semibold">
              Was machen wir?
            </h2>
            <div className=" grid grid-cols-2 gap-10">
              <div className="my-auto">
                <Image src={umweltImg} alt={''} />
              </div>

              <div className="flex flex-col justify-between ">
                <h4 className="text-2xl">Für die Umwelt und Klimawandel</h4>
                <p className=" mb-6 mt-3">
                  Unter dem Eindruck der Klimakrise änderten nun wir unsere
                  Handlungsschwerpunkt. Der südamerikanische Kontinent{' '}
                  <span>
                    ist besonders bedroht von klimatischen Veränderungen
                  </span>{' '}
                  wie der Zunahme des Niño-Phänomens und dem Abschmelzen der
                  Anden-Gletscher.{' '}
                  <span>
                    Der Kontinent hatmit ca. 20% einen großen Anteil an der
                    CO2-Bindung weltweit.
                  </span>
                </p>
                <p>
                  Wir beschlossen, als nächstes Projekt die Aufforstung der
                  Andenregion zu fördern. So haben wir in der Region Cajamarca{' '}
                  <span>die Aufzucht von 100.000 Bäumen initiiert</span>, die
                  nach Erreichen der entsprechenden Größe in der nächsten
                  Regenperiode in der Provinz St. Miguel angepflanzt werden. Das
                  Projekt wurde von der Landbevölkerung sofort aufgenommen und
                  aktiv unterstützt. So fanden sich über 60 Freiwillige, die bei
                  der Aufforstung mitwirken.
                  <span>
                    {' '}
                    Wir haben uns zum Ziel gesetzt, in den kommenden Jahren auf
                    bis zu 1 Million gepflanzte Bäume zu kommen.
                  </span>
                </p>
                <div className="text-center">
                  <Link
                    href={`/${locale}/health`}
                    className="mt-5 rounded bg-green-500 px-3 py-5 font-medium text-white"
                  >
                    weitere Informationen
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <h4 className="text-2xl">Für die Gesundheit</h4>
                <p>
                  Da gerade den{' '}
                  <span>
                    armen Bevölkerungsschichten keine regelmäßige medizinische
                    Versorgung zur Verfügung steht
                  </span>
                  , werden nicht unmittelbar lebensnotwendige Operationen in der
                  Regel auch nicht durchgeführt. Angeborene oder erworbene
                  Fehlbildungen, die durch unproblematische Eingriffe behoben
                  oder verbessert werden könnten, bedeuten für die Betroffenen
                  unbehandelt nicht nur sozial, sondern auch wirtschaftlich eine
                  massive Einschränkung, oft sogar eine gesellschaftliche
                  Ausgrenzung.
                </p>
                <p className=" mb-6 mt-3">
                  In Zusammenarbeit mit <span>INTERPLAST Germany</span> und
                  anderen Institutionen{' '}
                  <span>führen wir medizinische Einsätze in Peru durch.</span>
                </p>
                <div className="text-center">
                  <Link
                    href={`/${locale}/health`}
                    className="mt-5 rounded bg-green-500 px-3 py-5 font-medium text-white"
                  >
                    weitere Informationen
                  </Link>
                </div>
              </div>
              <div className="my-auto">
                <Image src={healthImg} alt={''} />
              </div>

              <div className="my-auto">
                <Image src={educationImg} alt={''} />
              </div>
              <div className="flex flex-col justify-between ">
                <h4 className="text-2xl">Für die Bildung und Kultur</h4>
                <p className=" mb-6 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis dolor quae molestiae, placeat optio dignissimos est
                  laudantium provident itaque ea voluptate iste consequatur
                  consectetur rem aperiam quisquam quasi blanditiis beatae.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, vitae voluptates dolorem reiciendis porro tenetur
                  obcaecati, dignissimos facilis ratione distinctio
                  reprehenderit veritatis et sequi ex optio odit aut, dolorum
                  qui. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus quibusdam distinctio, enim et at provident error
                  aut dolore dignissimos possimus ratione magni explicabo. Ullam
                  repellat nihil expedita iure minima vitae!
                </p>
                <div className="text-center">
                  <Link
                    href={`/${locale}/education`}
                    className="mt-5 rounded bg-green-500 px-3 py-5 font-medium text-white"
                  >
                    weitere Informationen
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
