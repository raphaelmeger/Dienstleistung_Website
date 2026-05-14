'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Phone, MessageCircle } from 'lucide-react'

const categories = [
  {
    label: 'Allgemein',
    faqs: [
      {
        q: 'Was ist Toni Hausmeisterservice?',
        a: 'Toni Hausmeisterservice ist ein professionelles Dienstleistungsunternehmen aus Düsseldorf, spezialisiert auf Treppenhausreinigung, Gartenpflege und vollständige Objektbetreuung für Wohnanlagen und Gewerbeobjekte.',
      },
      {
        q: 'In welchem Gebiet sind Sie tätig?',
        a: 'Unser Einsatzgebiet umfasst Düsseldorf, Erkrath und einen Umkreis von 50 km. Das schließt Mettmann, Ratingen, Neuss, Hilden, Langenfeld, Monheim und weitere Gemeinden ein. Kontaktieren Sie uns für Anfragen außerhalb dieses Bereichs.',
      },
      {
        q: 'Wie lange sind Sie schon tätig?',
        a: 'Wir blicken auf über 10 Jahre Erfahrung in der professionellen Gebäude- und Immobilienbetreuung zurück. In dieser Zeit haben wir über 250 Objekte erfolgreich betreut.',
      },
      {
        q: 'Sind Sie haftpflichtversichert?',
        a: 'Ja, wir sind vollständig betriebshaftpflichtversichert. Alle unsere Mitarbeiter sind ordnungsgemäß beschäftigt und versichert. Auf Anfrage stellen wir Ihnen gerne die entsprechenden Nachweise zur Verfügung.',
      },
    ],
  },
  {
    label: 'Treppenhausreinigung',
    faqs: [
      {
        q: 'Wie oft wird das Treppenhaus gereinigt?',
        a: 'Das bestimmen Sie. Gängige Intervalle sind wöchentlich oder 14-täglich. Für stark frequentierte Gebäude empfehlen wir eine wöchentliche Reinigung. Wir passen den Rhythmus gerne an Ihre Bedürfnisse an.',
      },
      {
        q: 'Was wird beim Treppenhaus gereinigt?',
        a: 'Wir reinigen alle Treppenstufen, Handläufe, Geländer, Fenster im Treppenhaus, Briefkästen, Eingangstüren, Keller- und Gemeinschaftsflure sowie Aufzugkabinen (sofern vorhanden). Auf Wunsch auch Tiefgaragen und Außenbereiche.',
      },
      {
        q: 'Erhalten wir eine Dokumentation der Reinigungsleistungen?',
        a: 'Ja, nach jeder Reinigung erstellen wir ein digitales Protokoll mit Fotos. Diese Dokumentation können Sie jederzeit abrufen und eignet sich auch als Nachweis für Mieter oder Eigentümer.',
      },
      {
        q: 'Was passiert, wenn eine Reinigung ausfällt?',
        a: 'Das kommt bei uns nicht vor – aber falls es durch außergewöhnliche Umstände zu einem Ausfall kommen sollte, informieren wir Sie sofort und holen die Reinigung schnellstmöglich nach.',
      },
    ],
  },
  {
    label: 'Gartenpflege',
    faqs: [
      {
        q: 'Welche Gartenpflegearbeiten bieten Sie an?',
        a: 'Wir bieten alle gängigen Gartenpflegearbeiten an: Rasenmähen, Heckenschneiden, Laubblasen und -entfernen, Beet- und Grünflächenpflege, Unkrautentfernung, saisonale Bepflanzung und Winterdienst.',
      },
      {
        q: 'Bieten Sie Gartenpflege für den ganzen Jahresverlauf an?',
        a: 'Ja, wir bieten ganzjährige Gartenpflege an. Im Frühling beginnen wir mit Frühjahrsschnitt und Bepflanzung, im Sommer kümmern wir uns um regelmäßige Pflege, im Herbst um Laubentfernung und im Winter um Winterdienst.',
      },
    ],
  },
  {
    label: 'Verträge & Preise',
    faqs: [
      {
        q: 'Wie schnell können Sie mit dem Service beginnen?',
        a: 'In der Regel können wir innerhalb von 1–2 Wochen starten. Für dringende Fälle versuchen wir auch kurzfristig einen Termin zu finden. Rufen Sie uns an oder schreiben Sie per WhatsApp.',
      },
      {
        q: 'Wie lang sind die Vertragslaufzeiten?',
        a: 'Wir bieten flexible Vertragslaufzeiten an. Grundsätzlich sind unsere Dienstleistungsverträge monatlich kündbar. Bei Jahresverträgen gewähren wir Bestandskunden besondere Konditionen.',
      },
      {
        q: 'Wie erfolgt die Abrechnung?',
        a: 'Die Abrechnung erfolgt monatlich. Sie erhalten eine detaillierte Rechnung mit Auflistung aller erbrachten Leistungen und der zugehörigen Fotodokumentation. Wir akzeptieren Banküberweisung.',
      },
      {
        q: 'Geben Sie auch Angebote für mehrere Objekte ab?',
        a: 'Ja, für Hausverwaltungen mit mehreren Objekten erstellen wir gerne Pauschalangebote. Je mehr Objekte, desto wirtschaftlicher wird unser Service für Sie. Sprechen Sie uns direkt an.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container-max text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Häufig gestellte Fragen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Alles, was Sie über unsere Dienstleistungen wissen möchten.
            Nicht dabei? Rufen Sie uns einfach an.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.05 }}
              >
                <h2 className="text-xl font-bold text-navy-950 mb-5 pb-3 border-b border-slate-100">
                  {cat.label}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq, fi) => {
                    const key = `${ci}-${fi}`
                    const isOpen = openIndex === key
                    return (
                      <div
                        key={fi}
                        className="bg-site-bg border border-slate-100 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-slate-100/50 transition-colors duration-150"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-navy-950 text-sm leading-snug">{faq.q}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex-shrink-0 text-gold"
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 pt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </p>
                        </motion.div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still questions? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-navy-950 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-xl font-bold mb-2">Ihre Frage ist nicht dabei?</h3>
            <p className="text-slate-400 text-sm mb-6">
              Kein Problem. Rufen Sie uns an oder schreiben Sie per WhatsApp –
              wir antworten schnell und persönlich.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/kontakt" className="btn-primary px-6 py-3">
                <MessageCircle size={16} /> Nachricht senden
              </Link>
              <a href="tel:+4917622331738" className="btn-outline-white px-6 py-3 cursor-pointer">
                <Phone size={16} /> 0176 22331738
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
