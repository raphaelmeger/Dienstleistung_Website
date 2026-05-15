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

            {/* 1. Überblick */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-base font-semibold text-navy-900 mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer nachstehenden
                Datenschutzerklärung.
              </p>
              <h3 className="text-base font-semibold text-navy-900 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mt-3">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z.&nbsp;B.
                durch Eingabe in unser Kontaktformular. Andere Daten werden automatisch oder nach
                Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind
                vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem, Uhrzeit des
                Seitenaufrufs).
              </p>
              <p className="mt-3">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                werden. Wenn Sie über die Website eine Anfrage stellen, verarbeiten wir Ihre Daten
                zur Bearbeitung Ihrer Anfrage.
              </p>
              <p className="mt-3">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                Aufsichtsbehörde zu.
              </p>
            </div>

            {/* 2. Hosting */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">2. Hosting</h2>
              <h3 className="text-base font-semibold text-navy-900 mb-2">Vercel</h3>
              <p>
                Wir hosten unsere Website bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco,
                CA 94104, USA (nachfolgend „Vercel"). Wenn Sie unsere Website besuchen, werden Ihre
                personenbezogenen Daten auf den Servern von Vercel verarbeitet. Dabei können u.&nbsp;a.
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden,
                verarbeitet werden.
              </p>
              <p className="mt-3">
                Vercel ist ein US-amerikanisches Unternehmen. Die Übermittlung von Daten in die USA
                erfolgt auf Grundlage der Standarddatenschutzklauseln der EU-Kommission gemäß
                Art.&nbsp;46 Abs.&nbsp;2 lit.&nbsp;c DSGVO. Vercel ist außerdem nach dem
                EU-U.S. Data Privacy Framework zertifiziert.
              </p>
              <p className="mt-3">
                Die Nutzung von Vercel erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
                DSGVO (berechtigtes Interesse an einer zuverlässigen Darstellung unseres Online-Angebots).
                Wir haben mit Vercel einen Auftragsverarbeitungsvertrag (AVV) gemäß Art.&nbsp;28 DSGVO
                abgeschlossen.
              </p>
              <p className="mt-3">
                Weitere Informationen entnehmen Sie der Datenschutzerklärung von Vercel:{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline break-all"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">IONOS (Domain)</h3>
              <p>
                Die Domain dieser Website ist registriert bei IONOS SE, Elgendorfer Str.&nbsp;57,
                56410 Montabaur, Deutschland. IONOS verarbeitet im Rahmen der Domain-Verwaltung
                Ihre Kontaktdaten. Die Verarbeitung erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;b DSGVO (Vertragserfüllung). IONOS hat seinen Sitz in der EU; eine
                Übermittlung in Drittstaaten findet nicht statt.
              </p>
              <p className="mt-3">
                Weitere Informationen:{' '}
                <a
                  href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline break-all"
                >
                  https://www.ionos.de/terms-gtc/datenschutzerklaerung/
                </a>
              </p>
            </div>

            {/* 3. Allgemeine Hinweise */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-base font-semibold text-navy-900 mb-2">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mt-3">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
                können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
                und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">Verantwortliche Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>Toni Hausmeisterservice</strong><br />
                Inhaber: Ledion Rrahmani<br />
                Eichendorffweg 54<br />
                40699 Erkrath<br />
                Deutschland<br /><br />
                Telefon:{' '}
                <a href="tel:+4917622331738" className="text-gold hover:underline">
                  +49 176 22331738
                </a><br />
                E-Mail:{' '}
                <a href="mailto:info@toni-hausmeisterservice.de" className="text-gold hover:underline">
                  info@toni-hausmeisterservice.de
                </a>
              </p>
              <p className="mt-3">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
                oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
                dieser Gründe.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
                personenbezogenen Daten auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO
                bzw. Art.&nbsp;9 Abs.&nbsp;2 lit.&nbsp;a DSGVO, sofern besondere Datenkategorien
                nach Art.&nbsp;9 Abs.&nbsp;1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen
                Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die
                Datenverarbeitung außerdem auf Grundlage von Art.&nbsp;49 Abs.&nbsp;1 lit.&nbsp;a
                DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf
                Informationen in Ihr Endgerät (z.&nbsp;B. via Device-Fingerprinting) eingewilligt
                haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs.&nbsp;1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
                verarbeiten wir Ihre Daten auf Grundlage des Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b
                DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
                rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
                berechtigten Interesses nach Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO erfolgen.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns
                als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
                „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="mt-3">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an
                uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">Widerspruch gegen Werbe-E-Mails</h3>
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
                Übersendung von nicht ausdrücklich angeforderter Werbung und
                Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten
                behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
                von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </div>

            {/* 4. Datenerfassung */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-base font-semibold text-navy-900 mb-2">Cookies</h3>
              <p>
                Diese Website verwendet keine Tracking-Cookies oder Analyse-Cookies. Es werden
                ausschließlich technisch notwendige Cookies gesetzt, die für den Betrieb der Website
                erforderlich sind. Diese Cookies werden auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO gespeichert und sind für einen reibungslosen Betrieb unserer
                Website technisch notwendig.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten (Vercel) erhebt und speichert automatisch Informationen in
                sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert/gekürzt)</li>
              </ul>
              <p className="mt-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
                technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu
                müssen die Server-Log-Files erfasst werden. Die Daten werden gelöscht, sobald sie
                für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse
                an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO) oder auf Ihrer Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a
                DSGVO), sofern diese abgefragt wurde.
              </p>
              <p className="mt-3">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
                zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
                Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung
                Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
                Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-5 mb-2">E-Mail-Versand über Resend</h3>
              <p>
                Für den Versand von Kontaktformular-Nachrichten nutzen wir den Dienst Resend von
                Resend Inc., 2261 Market Street #4008, San Francisco, CA 94114, USA (nachfolgend
                „Resend"). Wenn Sie das Kontaktformular absenden, werden Ihre eingegebenen Daten
                (Name, E-Mail-Adresse, Nachricht) über die Server von Resend an uns übermittelt.
              </p>
              <p className="mt-3">
                Resend ist ein US-amerikanisches Unternehmen. Die Übermittlung von Daten in die USA
                erfolgt auf Grundlage der Standarddatenschutzklauseln der EU-Kommission gemäß
                Art.&nbsp;46 Abs.&nbsp;2 lit.&nbsp;c DSGVO. Wir haben mit Resend einen
                Auftragsverarbeitungsvertrag (AVV) gemäß Art.&nbsp;28 DSGVO abgeschlossen.
                Resend verarbeitet Ihre Daten ausschließlich zum Zweck der Weiterleitung der
                E-Mail und speichert diese nicht dauerhaft.
              </p>
              <p className="mt-3">
                Weitere Informationen:{' '}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline break-all"
                >
                  https://resend.com/legal/privacy-policy
                </a>
              </p>
            </div>

            {/* 5. Betroffenenrechte */}
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">5. Ihre Rechte als betroffene Person</h2>

              <h3 className="text-base font-semibold text-navy-900 mb-2">Auskunft, Berichtigung und Löschung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                Berichtigung oder Löschung dieser Daten (Art.&nbsp;15–17 DSGVO).
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-4 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen (Art.&nbsp;18 DSGVO).
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-4 mb-2">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
                in einem gängigen, maschinenlesbaren Format aushändigen zu lassen (Art.&nbsp;20 DSGVO).
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-4 mb-2">Widerspruch gegen Datenverarbeitung</h3>
              <p>
                Sofern die Datenverarbeitung auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
                DSGVO (berechtigtes Interesse) erfolgt, haben Sie jederzeit das Recht, aus Gründen,
                die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
                personenbezogenen Daten Widerspruch einzulegen (Art.&nbsp;21 DSGVO). Wir
                verarbeiten die personenbezogenen Daten dann nicht mehr, es sei denn, wir können
                zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
                Interessen, Rechte und Freiheiten überwiegen.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-4 mb-2">Widerruf Ihrer Einwilligung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt (Art.&nbsp;7 Abs.&nbsp;3 DSGVO).
              </p>

              <h3 className="text-base font-semibold text-navy-900 mt-4 mb-2">Beschwerderecht bei der Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
                bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu
                (Art.&nbsp;77 DSGVO).
              </p>
              <p className="mt-3">
                Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist:<br /><br />
                <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit
                Nordrhein-Westfalen (LDI NRW)</strong><br />
                Kavalleriestraße 2–4<br />
                40213 Düsseldorf<br />
                Tel.: 0211 / 384 24-0<br />
                Fax: 0211 / 384 24-10<br />
                E-Mail:{' '}
                <a href="mailto:poststelle@ldi.nrw.de" className="text-gold hover:underline">
                  poststelle@ldi.nrw.de
                </a><br />
                Website:{' '}
                <a
                  href="https://www.ldi.nrw.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  www.ldi.nrw.de
                </a>
              </p>
              <p className="mt-3">
                Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>
            </div>

            {/* Stand */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-slate-400">Stand: Mai 2025</p>
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
