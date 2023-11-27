import Image from 'next/image';
import { Metadata } from 'next';
import initTranslations from '@/lib/i18n';

import heroImage from '@/public/imgs/heroImg-min.jpg';
import sustainabilityImg from '@/public/imgs/sustainability-leaf.jpg';
import healthImg from '@/public/imgs/gesundheitmain.png';
import educationImg from '@/public/imgs/educationImg.png';
import umweltImg from '@/public/imgs/peru-jungle.jpg';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import { HeartPulse, Trees } from 'lucide-react';
import LocaleLink from '@/components/translations/LocaleLink';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

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
          <article className="relative my-20 ml-[10vw] max-w-[90vw] bg-lime-100 pt-20">
            <h4 className="absolute left-1/2 top-3 mb-8 -translate-x-1/2 transform text-center text-4xl">
              {t('s1-t2')}
            </h4>
            <div className="grid w-[80vw] grid-cols-2 justify-items-center gap-10">
              <div className='flex flex-col justify-end'>
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
          <section>
            <h2 className="mb-10 text-center text-4xl font-semibold">
              Was machen wir?
            </h2>
            <div className="flex flex-col space-y-16">
              <div className="grid grid-cols-2 gap-10 space-y-7">
                <div className="my-auto">
                  <Image src={umweltImg} alt={'umwelt img'} />
                </div>
                <div className="flex flex-col justify-between space-y-7">
                  <h4 className="flex items-center gap-2 text-3xl font-medium text-green-500">
                    <span>
                      <Trees />
                    </span>
                    Für die Umwelt und Klimawandel{' '}
                  </h4>
                  <p className="mt-3">
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
                    Andenregion zu fördern.{' '}
                    <span className="font-semibold text-green-600">
                      So haben wir in der Region Cajamarca die Aufzucht von
                      100.000 Bäumen initiiert
                    </span>
                    , die nach Erreichen der entsprechenden Größe in der
                    nächsten Regenperiode in der Provinz St. Miguel angepflanzt
                    werden. Das Projekt wurde von der Landbevölkerung sofort
                    aufgenommen und aktiv unterstützt. So fanden sich über 60
                    Freiwillige, die bei der Aufforstung mitwirken.
                    <span className="font-semibold text-green-600">
                      {' '}
                      Wir haben uns zum Ziel gesetzt, in den kommenden Jahren
                      auf bis zu 1 Million gepflanzte Bäume zu kommen.
                    </span>
                  </p>
                  <div className="mt-3 text-center">
                    <LocaleLink
                      path="/climate"
                      styling={cn(
                        buttonVariants({ size: 'lg' }),
                        'bg-green-500 hover:bg-green-500/70',
                      )}
                    >
                      weitere Informationen
                    </LocaleLink>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10 space-y-7">
                <div className="flex flex-col justify-between space-y-7">
                  <h4 className="flex items-center gap-2 text-3xl font-medium text-rose-500">
                    <span>
                      <HeartPulse />
                    </span>
                    Für die Gesundheit
                  </h4>
                  <p>
                    Da gerade den{' '}
                    <span className="font-semibold text-rose-500">
                      armen Bevölkerungsschichten keine regelmäßige medizinische
                      Versorgung zur Verfügung steht
                    </span>
                    , werden nicht unmittelbar lebensnotwendige Operationen in
                    der Regel auch nicht durchgeführt. Angeborene oder erworbene
                    Fehlbildungen, die durch unproblematische Eingriffe behoben
                    oder verbessert werden könnten, bedeuten für die Betroffenen
                    unbehandelt nicht nur sozial, sondern auch wirtschaftlich
                    eine massive Einschränkung, oft sogar eine gesellschaftliche
                    Ausgrenzung.
                  </p>
                  <p className=" mb-6 mt-3">
                    In Zusammenarbeit mit <span>INTERPLAST Germany</span> und
                    anderen Institutionen{' '}
                    <span className="font-semibold text-rose-500">
                      führen wir medizinische Einsätze in Peru durch.
                    </span>
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
              <div className="grid grid-cols-2 gap-10 space-y-7">
                <div className="my-auto">
                  <Image src={educationImg} alt={''} />
                </div>
                <div className="flex flex-col justify-between space-y-7">
                  <h4 className="flex items-center gap-2 text-3xl font-medium text-blue-600">
                    <span>
                      <Trees />
                    </span>
                    Für die Bildung und Kultur
                  </h4>
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
                    qui. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Voluptatibus quibusdam distinctio, enim et at
                    provident error aut dolore dignissimos possimus ratione
                    magni explicabo. Ullam repellat nihil expedita iure minima
                    vitae!
                  </p>
                  <div className="mt-3 text-center">
                    <LocaleLink
                      path="/culture"
                      styling={cn(
                        buttonVariants({ size: 'lg' }),
                        'bg-blue-600 hover:bg-blue-600/70',
                      )}
                    >
                      weitere Informationen
                    </LocaleLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
