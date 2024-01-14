import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';


const page = () => {
  return (
    <MaxWidthWrapper>
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl">Angaben gemäß § 5 TMG</h1>
          <p>
            Informationsstelle {process.env.NEXT_PUBLIC_COMPANY_NAME}{' '}
            <p>{process.env.NEXT_PUBLIC_PEP_STREET}</p>
            <p>
              {process.env.NEXT_PUBLIC_PEP_POSTAL}{' '}
              {process.env.NEXT_PUBLIC_PEP_CITY}
            </p>
          </p>
          <h3 className="text-2xl">Vertreten durch:</h3>
          <p>Dr. Stefan Pappert, Ricardo Bueno.</p>
          <h3 className="text-2xl">Contact:</h3>
          <p>{process.env.NEXT_PUBLIC_PEP_EMAIL}</p>
          <h3 className="text-2xl">Registereintrag:</h3>
          <div>
            <p>Eintragung im Vereinsregister</p>
            <p>Registergericht: {process.env.NEXT_PUBLIC_PEP_REGISTER_CITY}</p>
            <p>Registernummer: {process.env.NEXT_PUBLIC_PEP_REGISTER_NUMBER}</p>
          </div>
          <div>
            <h1 className="text-2xl">Web-Entwicklung:</h1>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/josemanuelmontanomengual"
              className="text-blue-400 hover:underline"
            >
              Jose Manuel Montano Mengual
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl">Haftungsausschluss</h1>
          <div className="space-y-1">
            <h3 className="text-xl">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Urheberrecht</h1>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default page;
