import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false },
}

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-12">
        <div className="container-max">
          <span className="section-label">Rechtliches</span>
          <h1 className="text-4xl font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="prose prose-slate max-w-none text-slate-700 text-[15px] leading-relaxed space-y-8">

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-base font-semibold text-navy-900 mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-base font-semibold text-navy-900 mb-2">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">3. Verantwortliche Stelle</h2>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>Toni Hausmeisterservice</strong><br />
                Inhaber: Toni [Nachname]<br />
                Musterstraße 1<br />
                40211 Düsseldorf<br /><br />
                Telefon: <a href="tel:+4917622331738" className="text-gold hover:underline">+49 176 22331738</a><br />
                E-Mail: info@toni-hausmeisterservice.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">4. Datenerfassung auf dieser Website</h2>
              <h3 className="text-base font-semibold text-navy-900 mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">5. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside space-y-1.5 mt-3 text-sm">
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Die Berichtigung oder Löschung Ihrer Daten zu verlangen</li>
                <li>Die Einschränkung der Verarbeitung Ihrer Daten zu verlangen</li>
                <li>Der Verarbeitung Ihrer Daten zu widersprechen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
                <li>Eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">6. Hosting</h2>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
                Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf
                den Servern des Hosters gespeichert.
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
