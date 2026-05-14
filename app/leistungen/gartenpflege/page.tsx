'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Phone, MessageCircle, ArrowRight, MapPin, Sun, Cloud, Snowflake, Leaf } from 'lucide-react'

const seasonal = [
  {
    icon: <Sun size={20} className="text-gold" />,
    season: 'Frühling',
    services: ['Frühjahrsschnitt', 'Bepflanzung', 'Düngen', 'Rasenpflege starten'],
  },
  {
    icon: <Cloud size={20} className="text-gold" />,
    season: 'Sommer',
    services: ['Regelmäßiges Mähen', 'Heckenschnitt', 'Bewässerung', 'Unkrautentfernung'],
  },
  {
    icon: <Leaf size={20} className="text-gold" />,
    season: 'Herbst',
    services: ['Laubblasen & -sammeln', 'Herbstschnitt', 'Wintervorbereitung', 'Rasenbelüftung'],
  },
  {
    icon: <Snowflake size={20} className="text-gold" />,
    season: 'Winter',
    services: ['Winterschutz', 'Gehölzpflege', 'Wartungsarbeiten', 'Planung Frühjahr'],
  },
]

const included = [
  'Regelmäßiges Rasenmähen & Kantenstechen',
  'Heckenschneiden und Formschnitt',
  'Laub entfernen und entsorgen',
  'Beet- und Grünflächenpflege',
  'Unkrautentfernung',
  'Rindenmulch erneuern',
  'Saisonale Bepflanzung (auf Wunsch)',
  'Gehölzschnitt und Baumpflege',
  'Reinigung von Wegen und Freiflächen',
  'Dokumentation aller Pflegearbeiten',
]

export default function GartenpflegePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=80"
            alt="Professionelle Gartenpflege Düsseldorf"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-navy-950/20" />
        </div>
        <div className="relative z-10 container-max pb-16 pt-32">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Startseite</Link>
            <span>/</span>
            <Link href="/leistungen" className="hover:text-gold transition-colors">Leistungen</Link>
            <span>/</span>
            <span className="text-gold">Gartenpflege</span>
          </div>
          <span className="section-label">Leistung</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            Garten- & Außenanlagenpflege
            <span className="text-gold block text-3xl md:text-4xl mt-1 font-semibold">
              Düsseldorf & Erkrath
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Professionelle Grünflächenpflege für Wohnanlagen und Gewerbeobjekte –
            das ganze Jahr, zuverlässig und gepflegt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link href="/kontakt" className="btn-primary px-7 py-3.5">
              <MessageCircle size={17} /> Angebot anfordern
            </Link>
            <a href="tel:+4917622331738" className="btn-outline-white px-7 py-3.5 cursor-pointer">
              <Phone size={17} /> 0176 22331738
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-label">Über diese Leistung</span>
                <h2 className="section-title mb-5">Gartenpflege in Düsseldorf & Erkrath</h2>
                <div className="space-y-4 text-slate-700 text-[15px] leading-relaxed">
                  <p>
                    Gepflegte Außenanlagen steigern den Wert Ihrer Immobilie und schaffen
                    ein angenehmes Umfeld für Bewohner und Mieter. Als spezialisierter
                    <strong> Hausmeisterservice für Gartenpflege in Düsseldorf</strong> und
                    Erkrath bieten wir Ihnen professionelle Grünflächenpflege das ganze Jahr.
                  </p>
                  <p>
                    Wir betreuen Außenanlagen von Wohnanlagen, Bürokomplexen und
                    Gewerbeobjekten – von der einfachen Rasenpflege bis zur vollständigen
                    Außenanlagebetreuung inklusive Bepflanzung und Heckenschnitt.
                  </p>
                  <p>
                    Unser erfahrenes Team kommt mit professionellem Equipment und sorgt
                    dafür, dass Ihre Außenanlagen das ganze Jahr über einen gepflegten
                    und einladenden Eindruck hinterlassen.
                  </p>
                </div>
              </motion.div>

              {/* Seasonal services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-navy-950 mb-6">Saisonale Pflegearbeiten</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {seasonal.map((s) => (
                    <div key={s.season} className="bg-site-bg border border-slate-100 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        {s.icon}
                        <span className="font-semibold text-navy-950">{s.season}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {s.services.map((sv) => (
                          <li key={sv} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle size={13} className="text-gold flex-shrink-0" />
                            {sv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-navy-950 mb-5">Alle Leistungen im Überblick</h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle size={15} className="text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy-950 rounded-2xl p-6 text-white"
              >
                <h3 className="font-bold text-lg mb-2">Angebot anfordern</h3>
                <p className="text-slate-400 text-sm mb-5">
                  Kostenlos, unverbindlich – innerhalb von 24h.
                </p>
                <div className="space-y-3">
                  <Link href="/kontakt" className="btn-primary w-full justify-center py-3.5">
                    <MessageCircle size={17} /> Online anfragen
                  </Link>
                  <a
                    href="tel:+4917622331738"
                    className="flex items-center justify-center gap-2 border border-white/20 text-white font-medium py-3.5 rounded-lg hover:bg-white/5 transition-colors text-sm cursor-pointer"
                  >
                    <Phone size={17} /> 0176 22331738
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-site-bg border border-slate-100 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={18} className="text-gold" />
                  <h3 className="font-bold text-navy-950">Einsatzgebiet</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Düsseldorf', 'Erkrath', 'Mettmann', 'Ratingen', 'Neuss', 'Hilden', 'Langenfeld'].map((city) => (
                    <span key={city} className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Gartenpflege in Düsseldorf anfragen</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Erhalten Sie jetzt ein kostenloses Angebot für die Gartenpflege Ihrer Anlage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt" className="btn-primary px-8 py-4">
              <MessageCircle size={18} /> Jetzt anfragen
            </Link>
            <Link href="/leistungen" className="btn-outline-white px-8 py-4">
              Weitere Leistungen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
