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
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700">

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="leading-relaxed">
                <strong>Toni Hausmeisterservice</strong><br />
                Inhaber: Toni [Nachname]<br />
                Musterstraße 1<br />
                40211 Düsseldorf<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Kontakt</h2>
              <p className="leading-relaxed">
                Telefon: <a href="tel:+4917622331738" className="text-gold hover:underline">+49 176 22331738</a><br />
                E-Mail: info@toni-hausmeisterservice.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE [Nummer]</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Toni [Nachname]<br />
                Musterstraße 1<br />
                40211 Düsseldorf
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Haftungsausschluss</h2>
              <h3 className="text-base font-semibold text-navy-900 mb-2">Haftung für Inhalte</h3>
              <p className="text-sm leading-relaxed mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <h3 className="text-base font-semibold text-navy-900 mb-2">Haftung für Links</h3>
              <p className="text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">Urheberrecht</h2>
              <p className="text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
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
