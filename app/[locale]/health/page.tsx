import DonateCallToAction from '@/components/DonateCallToAction';
import SlideShow from '@/components/SlideShow';
import { chirurgicImages, oxigenPlantImages } from '@/consts/health-page';

const page = () => {
  return (
    <div className="max-w-screen-[1350px] mx-auto w-full px-[2.5] md:px-20">
      <section className="space-y-14 py-10">
        <div>
          <h2 className="text-center text-5xl font-medium">
            REKONSTRUKTIVE CHIRURGIE
          </h2>
        </div>
        <div className="grid grid-cols-12 items-center gap-8">
          <div className="col-span-6 space-y-4">
            <p>
              Seit unserer Gründung haben wir in Zusammenarbeit mit INTERPLAST
              Germany und anderen Institutionen medizinische Einsätze in Peru
              durchgeführt.
            </p>
            <p>
              Den armen Bevölkerungsschichten steht keine regelmäßige
              medizinische Versorgung zur Verfügung. Daher werden nicht
              unmittelbar lebensnotwendige Operationen auch nicht durchgeführt.
            </p>
            <p>
              Angeborene oder erworbene Fehlbildungen, die durch
              unproblematische Eingriffe behoben oder verbessert werden könnten,
              bedeuten für die Betroffenen unbehandelt nicht nur sozial, sondern
              auch wirtschaftlich eine massive Einschränkung, oft sogar eine
              gesellschaftliche Ausgrenzung. Einige der häufigsten angeborenen
              Fehlbildungen sind Lippen-Kiefer-Gaumenspalten. Fehlbildungen an
              den Extremitäten führen meist direkt zu einer Erwerbsunfähigkeit.
            </p>
            <p>
              Der Umgang mit offenem Feuer führt zu entsprechend häufigen
              Unfällen, die zu zum Teil erheblichen Verstümmelungen führen.
              Diese bringen ebenfalls über die Invalidität die
              Erwerbsunfähigkeit mit sich.
            </p>
            <DonateCallToAction />
          </div>
          <div className="col-span-6">
            <SlideShow
              images={chirurgicImages}
              alt={''}
              width={550}
              animation="fade-in-out-slider"
            />
          </div>
        </div>
      </section>
      <section className="space-y-14 py-10">
        <div>
          <h2 className="text-center text-5xl font-medium">
            SAUERSTOFFANLAGE FÜR CAJAMARCA
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7">
            <SlideShow
              images={oxigenPlantImages}
              alt={''}
              width={650}
              animation="fade-in-out-slider"
            />
          </div>
          <div className="col-span-5 my-auto space-y-6">
            <p>
              Im Zuge der Covid-19 Pandemie kam es in vielen Städten Perus zu
              einem Engpass in der Sauerstoffversorgung. Viele Patienten starben
              deswegen. Unter der Führung von Pater Pedro Teran wurde die
              Kampagne Cajamarca Respira (Cajamarca atmet) ins Leben gerufen,
              mit dem Zweck durch Spenden Anlagen für die Sauerstoffproduktion
              zu beschaffen und den Patienten den Zugang zu Sauerstoff zu
              ermöglichen.
            </p>{' '}
            <p>
              PEP war die erste Institution, die sich durch finanzielle
              Unterstützung an dieser Aktion beteiligt hat.
            </p>
            <DonateCallToAction />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
