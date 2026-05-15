import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
}

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-12">
        <div className="container-max">
          <span className="section-label">Rechtliches</span>
          <h1 className="text-4xl font-bold text-white">Impressum</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-[15px] leading-relaxed">

            {/* Angaben § 5 TMG */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="leading-relaxed">
                <strong>Toni Hausmeisterservice</strong><br />
                Inhaber: Ledion Rrahmani<br />
                Eichendorffweg 54<br />
                40699 Erkrath<br />
                Deutschland
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Kontakt</h2>
              <p className="leading-relaxed">
                Telefon:{' '}
                <a href="tel:+4917622331738" className="text-gold hover:underline">
                  +49 176 22331738
                </a><br />
                E-Mail:{' '}
                <a href="mailto:info@toni-hausmeisterservice.de" className="text-gold hover:underline">
                  info@toni-hausmeisterservice.de
                </a>
              </p>
            </div>

            {/* Umsatzsteuer */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Umsatzsteuer</h2>
              <p>
                Das Unternehmen fällt unter die Kleinunternehmerregelung gemäß § 19 UStG und ist
                daher nicht umsatzsteuerpflichtig. Es wird keine Umsatzsteuer-Identifikationsnummer
                ausgewiesen.
              </p>
            </div>

            {/* Verantwortlich – korrekter MStV-Verweis */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">
                Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV
              </h2>
              <p className="leading-relaxed">
                Ledion Rrahmani<br />
                Eichendorffweg 54<br />
                40699 Erkrath
              </p>
            </div>

            {/* EU-Streitschlichtung – Pflicht nach EU-VO 524/2013 */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-3">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            {/* Verbraucherstreitbeilegung – Pflicht nach § 36 VSBG */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Haftungsausschluss</h2>

              <h3 className="text-base font-semibold text-navy-900 mb-2">Haftung für Inhalte</h3>
              <p className="text-sm leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.&nbsp;1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
                sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
                entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-4 mb-2">Haftung für Links</h3>
              <p className="text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Urheberrecht</h2>
              <p className="text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
                Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                umgehend entfernen.
              </p>
            </div>

            {/* Stand + Back */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-slate-400">Stand: Mai 2026</p>
              <Link href="/" className="text-gold hover:text-gold-dark font-medium text-sm transition-colors">
                ← Zurück zur Startseite
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
