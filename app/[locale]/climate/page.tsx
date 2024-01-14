import Image from 'next/image';

import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import mapPhoto from '@/public/imgs/map-cajamarca.jpg';
import viveroPhoto from '@/public/imgs/vivero.jpg';
import hoyacionPhoto from '@/public/imgs/hoyacion.jpg';
import hoyacionPhoto2 from '@/public/imgs/hoyacion-2.jpg';
import ventajasSociales from '@/public/imgs/ventajassociales.jpg';
import DonateCallToAction from '@/components/DonateCallToAction';
import { Metadata } from 'next';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  return {
    title: 'Aufforstungsprojekt in Cajamarca - PEP e.V.',
    description:
      'Aufforstungsprojekt in Cajamarca - PEP e.V. setzt sich für die Aufforstung in der Gemeinde Mutisch, Bezirk El Prado, Provinz San Miguel de Pallaques, Departament Cajamarca, Peru, ein. Ziel: Eine Million Bäume in zehn Jahren.',
    keywords:
      'Aufforstungsprojekt, Cajamarca, PEP e.V., Mutisch, El Prado, San Miguel de Pallaques, Peru, Umweltvorteile, soziale Vorteile, wirtschaftliche Vorteile, Pflanzung, Baumpflanzung, Projektfinanzierung, Klimawandel',
  };
}

const ClimatePage = () => {
  return (
    <MaxWidthWrapper>
      <section className="space-y-14 py-10">
        <div>
          <h2 className="text-center text-3xl font-medium sm:text-5xl">
            AUFORSTUNGSPROJEKT IN CAJAMARCA
          </h2>
        </div>
        <div id="objectives" className="flex  gap-8">
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="mb-1 text-2xl">ZIELE</h3>
              <p>
                Ziel des Projekts ist es, in den nächsten zehn Jahren eine
                Million Bäume zu pflanzen. In der Kampagne 2023/24 werden
                100.000 Bäume gepflanzt.
              </p>
            </div>
            <div className="space-y-2 sm:flex sm:items-center sm:justify-between lg:block">
              <div className="flex-1">
                <h3 className="mb-1 text-2xl">ORT</h3>
                <p>Gemeinde: Mutisch</p>
                <p>Bezirk: El Prado</p>
                <p>Provinz: San Miguel de Pallaques</p>
                <p>Departament: Cajamarca</p>
                <p>Land: Peru</p>
              </div>
              <div className="flex-1 lg:hidden lg:h-full">
                <a
                  href="https://en.wikipedia.org/wiki/Department_of_Cajamarca#/media/File:Peru_-_Cajamarca_Department_(locator_map).svg"
                  target="_blank"
                >
                  <Image
                    src={mapPhoto}
                    alt={'Karte von Peru mit Cajamarca Hervorgehoben'}
                    className="h-[50vh] object-cover"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-1 text-2xl">WER PROFITIERT VON DEM PROJEKT?</h3>
              <p>
                Direkte Begünstigte des Projekts in der Kampagne 2023/24 sind 65
                Familien {`(etwa 300 Personen)`} Indirekt wird die gesamte
                Bevölkerung der Gemeinde Mutisch von den Positiven Wirkungen des
                Projektes Profitieren.
              </p>
            </div>
          </div>
          <div className="hidden h-full items-center lg:flex">
            <a
              href="https://en.wikipedia.org/wiki/Department_of_Cajamarca#/media/File:Peru_-_Cajamarca_Department_(locator_map).svg"
              target="_blank"
            >
              <Image
                src={mapPhoto}
                alt={'Karte von Peru mit Cajamarca Hervorgehoben'}
              />
            </a>
          </div>
        </div>
      </section>
      <section id="advantajes" className="space-y-6 pb-12 pt-14">
        <h3 className="text-2xl">POSITIVE EFFEKTE</h3>

        <div>
          <h5 className="mb-1 text-xl">VORTEILE FÜR DIE UMWELT</h5>
          <p>
            Durch das Pflanzen von Bäumen wird Kohlendioxid aus der Atmosphäre
            gebunden, um den Treibhauseffekt zu reduzieren und so der globalen
            Erwärmung entgegenzuwirken. Auf diese Weise wollen wir den negativen
            Auswirkungen des Klimawandels entgegenwirken: Dürren, extreme
            Regenfälle, Frost, Überschwemmungen usw. Ebenso wird der Erosion von
            Hangböden vorgebeugt, die Grundwasserversorgung verbessert und die
            Fauna vielfältiger. Die Aufforstung kann auch dazu beitragen, die
            Abholzung einheimischer Urwälder zu vermindern.
          </p>
        </div>
        <div>
          <h5 className="mb-2 text-xl">SOZIALE VORTEILE</h5>
          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="space-y-4 lg:col-span-6">
              <div className="col-span-6 lg:hidden">
                <Image
                  src={ventajasSociales}
                  alt="Soziale Vorteile"
                  className="rounded-xl"
                />
              </div>
              <p>
                Ziel des Projekts ist auch, die Lebensbedingungen der
                betroffenen Bevölkerung zu verbessern. Der Wald versorgt sie mit
                Holz und Brennholz und stellt eine zusätzliche Einnahmequelle
                dar. Der Wald wirkt sich positiv auf die Wasserversorgung aus.
                Der Wald verbessert das Mikroklima und trägt zum Wohlbefinden
                der umliegenden Bevölkerung bei. Der Wald verändert die
                Landschaft und verschönert sie. Menschen, die durch ihn wandern
                oder spazieren gehen, haben viele Vorteile: Linderung von Stress
                und depressiven Verstimmungen, Senkung des Blutdrucks und der
                Pulsfrequenz (der bloße Anblick des Waldes reicht aus, um den
                Blutdruck zu senken), Stärkung des Immunsystems usw. Darüber
                hinaus trägt das Projekt zur Verbesserung der Organisations- und
                Managementfähigkeiten der beteiligten Gemeinden bei, da diese
                sich bei der Einrichtung und Bewirtschaftung des Waldes
                organisieren, ausbilden und zusammenarbeiten müssen.
              </p>
            </div>
            <div className="hidden lg:col-span-6 lg:block">
              <Image
                src={ventajasSociales}
                alt="Soziale Vorteile"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div>
          <h5 className="mb-1 text-xl">WIRTSCHAFTLICHE VORTEILE</h5>
          <p>
            Der Wald hat eine Reihe positiver wirtschaftlicher Auswirkungen.
            Schon durch seine Anpflanzung generiert er Arbeit und ist eine
            Einnahmequelle für die Dorfbewohner. Es diversifiziert die
            Wirtschaftstätigkeit der Region, da neue produktive Aktivitäten in
            der Waldbewirtschaftung (Anpflanzung, Beschneidung, Durchforstung,
            Holzernte, usw.) und bei der Holznutzung (Transport, Zimmerei,
            Bauwesen usw.) entstehen. Im Wald werden auch Speisepilze auf
            natürliche Weise produziert, die direkt verzehrt oder verkauft
            werden können.
          </p>
        </div>
      </section>
      <section id="planting" className="space-y-6">
        <h3 className="mb-1 text-2xl">ANPFLANZUNG</h3>

        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="space-y-4 lg:col-span-6">
            <div className="space-y-4">
              <h5 className="mb-1 text-xl">AUSWAHL DER BAUMART</h5>
              <div className="col-span-6 block lg:hidden">
                <Image
                  src={viveroPhoto}
                  alt="Anplanzung"
                  className="rounded-xl"
                />
              </div>
              <p>
                Baumart: Radiata-Kiefer{' '}
                <span className="italic">Pinus radiata.</span>
              </p>
              <p>
                Dies ist eine der Arten, die sich am besten an die Region
                anpasst. Ganz in der Nähe des Projektgebiets wurde anhand von
                Versuchsflächen eine Studie durchgeführt, um die Waldarten zu
                ermitteln, die sich am besten an die Klima- und Bodenbedingungen
                anpassen. Die Ergebnisse zeigen, dass es drei Baumarten von
                wirtschaftlicher Bedeutung gibt, die sich sehr gut anpassen:{' '}
                <span className="italic">
                  Pinus radiata, Pinus patula und Pinus pseudostrobus.
                </span>
              </p>
            </div>
            <div>
              <h5 className="mb-1 text-xl">SÄMLINGSPRODUKTION</h5>
              <p className="flex-1">
                Der Erfolg einer Waldpflanzung hängt in erster Linie von der
                guten Qualität des Pflanzguts ab; diese muss unter besten
                Bedingungen produziert werden. Die Pflanzen kommen aus einer
                spezialisierten Baumschule, die die Verwendung von ausgewähltem
                Saatgut, die besten Substrate für Beete, die Mykorrhizierung der
                Wurzeln, sowie die beste Gesundheitsbedingungen der Jungbäume
                garantiert. Mit einer durchschnittlichen Höhe von 25 cm. gehen
                die Ballenpflanzen zur Pflanzung.
              </p>
            </div>
          </div>
          <div className="col-span-6 hidden lg:block">
            <Image src={viveroPhoto} alt="" className="rounded-xl" />
          </div>
        </div>
        <div className="py-10 lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="hidden lg:col-span-4 lg:flex lg:items-center">
            <Image src={hoyacionPhoto} alt="" className="rounded-xl" />
          </div>
          <div className="col-span-8 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="mb-1 text-2xl">PFLANZUNG</h3>
              <div className="col-span-4 lg:hidden ">
                <Image
                  src={hoyacionPhoto2}
                  alt="Pflanzung"
                  className="h-[80vh] rounded-xl object-cover"
                />
              </div>
              <p>
                Nach der Schulung reinigen die Begünstigten das Land und führen
                Markierungen und Gräben in den angegebenen Maßen und mit den
                Werkzeugen durch, die ihnen das Projekt zur Verfügung stellt.
                Dies findet zwischen November und Dezember statt. Ab Februar
                nächsten Jahres wird mit der Bepflanzung begonnen. Die
                Begünstigten erhalten die Pflanzen und sind für deren Pflanzung
                verantwortlich. Alle Arbeiten werden von einem Techniker
                überwacht. Anschließend werden sie mit der Managementarbeit
                vertraut gemacht, die die Kontrolle des Zustands der Pflanzen,
                den Schnitt und die Pflege der Plantage selbst umfasst.
                Anschließend wird die Plantage bei der Forstbehörde angemeldet.
                Zukünftige Fällungen erfordern eine Genehmigung dieser Behörde.
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-2xl">HOLZERNTE</h3>
              <p>
                Nach etwa 20 Jahren können die Begünstigten die Pflanzen auf
                Wunsch fällen, sind aber verpflichtet, eine Fläche zu
                bepflanzen, die der abzuholzenden Fläche entspricht. Auf diese
                Weise wird die Nachhaltigkeit des Waldes im Laufe der Zeit
                gewährleistet.
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-2xl">PROJEKTFINANZIERUNG</h3>
              <p>
                Das Projekt wird ausschließlich durch Spenden finanziert. Wir
                benötigen Ihre wertvolle Unterstützung.
              </p>
              <DonateCallToAction />
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default ClimatePage;
