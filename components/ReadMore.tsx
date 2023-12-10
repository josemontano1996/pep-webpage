import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import LocaleLink from './translations/LocaleLink';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

const ReadMore = () => {
  return (
    <Dialog>
      <DialogTrigger className="italic hover:cursor-pointer hover:underline text-red-500">
        mehr lesen
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-[80vw] overflow-auto bg-lime-100 ">
        <DialogTitle className="capitalize">
          ERDERWÄRMUNG UND KLIMAKRISE
        </DialogTitle>

        <p>
          Gletscher gehen immer weiter zurück, das Eis in den Polarregionen
          schmilzt, während der Meeresspiegel ansteigt. Hitzeextreme, Dürren,
          Starkniederschläge, Überschwemmungen, sowie tropische Wirbelstürme
          nehmen zu.{' '}
          <span className="font-bold">
            Man spricht von Klimawandel und humanitäre Krise dieser droht die
            Existenzgrundlagen der globalen Gesellschaft
          </span>{' '}
          , denn negativ zu beeinflussen oder sogar zu zerstören.
        </p>
        <p>
          Südamerika ist besonders bedroht von klimatischen Veränderungen wie
          der Zunahme des Niño-Phänomens und dem Abschmelzen der
          Anden-Gletscher. Andererseits hat dieses Erdteil mit ca. 20% einen
          großen Anteil an der CO2-Bindung durch Vegetation weltweit, und ein
          enormes Potenzial für die Biomasseproduktion durch Aufforstung.{' '}
          <span className="font-bold">
            In den Tropen ist eine Aufforstung dreimal effektiver als in den
            gemäßigten und hohen
          </span>{' '}
          Breiten, da Pflanzen dort schnell wachsen und daher besonders viel CO2
          fixieren. Die Andenregion bietet großes Potenzial für die
          Forstwirtschaft. Allein Peru verfügt über 10 Millionen Hektar dafür.
        </p>
        <p>
          Wir haben beschlossen die Aufforstung der Andenregion zu fördern.{' '}
          <span className="font-bold">
            So haben wir in der Region Cajamarca die Aufzucht von 100.000 Bäumen
            initiiert,
          </span>{' '}
          die nach Erreichen der entsprechenden Größe in der nächsten
          Regenperiode in der Provinz San Miguel angepflanzt werden. Über 60
          Familien nehmen an das Projekt teil.{' '}
          <span className="text-bold">
            Wir haben uns zum Ziel gesetzt, in den kommenden Jahren auf bis zu 1
            Million gepflanzte Bäume zu kommen.
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
            Projekte
          </LocaleLink>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReadMore;
