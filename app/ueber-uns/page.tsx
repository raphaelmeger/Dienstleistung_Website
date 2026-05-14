'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle, Phone, MessageCircle, Award, Shield, Users, Heart,
  MapPin, ArrowRight,
} from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

const values = [
  { icon: <Shield size={22} />, title: 'Zuverlässigkeit', desc: 'Pünktliches Erscheinen und zuverlässige Ausführung – darauf können Sie sich verlassen.' },
  { icon: <Heart size={22} />, title: 'Vertrauen', desc: 'Langfristige Kundenbeziehungen durch Transparenz, Ehrlichkeit und persönliche Nähe.' },
  { icon: <Award size={22} />, title: 'Qualität', desc: 'Höchste Standards bei jedem Einsatz. Keine Kompromisse, volle Leistung.' },
  { icon: <Users size={22} />, title: 'Teamgeist', desc: 'Ein eingespieltes Team, das gemeinsam für Ihre Immobilie arbeitet.' },
]

const facts = [
  { num: 250, suffix: '+', label: 'Betreute Objekte' },
  { num: 10, suffix: '+', label: 'Jahre Erfahrung' },
  { num: 50, suffix: 'km', label: 'Einsatzradius' },
  { num: 48, suffix: 'h', label: 'Max. Reaktionszeit' },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.1)_0%,_transparent_60%)]" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Über uns</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
                Wer steckt hinter
                <span className="text-gold block">Toni Hausmeisterservice?</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Wir sind ein modernes, regionales Dienstleistungsunternehmen aus Düsseldorf
                mit Leidenschaft für professionelle Immobilienbetreuung. Kein anonymes
                Reinigungsunternehmen – sondern Ihr persönlicher Partner vor Ort.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/kontakt" className="btn-primary px-7 py-3.5">
                  <MessageCircle size={17} /> Kontakt aufnehmen
                </Link>
                <a href="tel:+4917622331738" className="btn-outline-white px-7 py-3.5 cursor-pointer">
                  <Phone size={17} /> 0176 22331738
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="Toni Hausmeisterservice Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gold py-12">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-bold text-navy-950 leading-none">
                  <AnimatedCounter end={f.num} suffix={f.suffix} />
                </span>
                <span className="text-navy-900 text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Unsere Geschichte</span>
            <h2 className="section-title mb-6">Aus Leidenschaft zum Profi</h2>
            <div className="space-y-5 text-slate-700 leading-relaxed">
              <p>
                Toni Hausmeisterservice wurde mit einer klaren Vision gegründet: Der Immobilienmarkt
                in Düsseldorf und Umgebung braucht keinen weiteren anonymen Gebäudedienstleister –
                er braucht einen <strong>verlässlichen, persönlichen Partner</strong>, auf den sich
                Hausverwaltungen und Eigentümer wirklich verlassen können.
              </p>
              <p>
                Mit über <strong>10 Jahren Erfahrung</strong> in der Gebäudebetreuung und einem
                tiefen Verständnis für die Anforderungen von Hausverwaltungen und WEGs haben wir
                uns auf professionelle Treppenhausreinigung, Gartenpflege und vollständige
                Objektbetreuung spezialisiert.
              </p>
              <p>
                Heute betreuen wir <strong>über 250 Objekte</strong> in Düsseldorf, Erkrath und
                dem gesamten Rheinkreis. Unser Wachstum basiert fast ausschließlich auf Empfehlungen
                zufriedener Kunden – das macht uns stolz und motiviert uns täglich aufs Neue.
              </p>
              <p>
                Wir positionieren uns nicht als billiger Allround-Handwerker, sondern als
                <strong> Premium-Dienstleister</strong> für langfristige Objektbetreuung.
                Qualität, Zuverlässigkeit und persönliche Kommunikation sind keine Versprechen –
                sie sind unser Alltag.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-site-bg">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="section-label">Unsere Werte</span>
            <h2 className="section-title">Was uns antreibt</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-slate-100 rounded-xl p-6 text-center hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center mx-auto mb-4
                                group-hover:bg-gold group-hover:text-navy-950 transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-navy-950 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section id="hausverwaltungen" className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">Für Hausverwaltungen</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Ihr strategischer Partner für die Objektverwaltung
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Wir wissen, was Hausverwaltungen brauchen: Einen Dienstleister, der
                kommuniziert, dokumentiert und liefert – ohne dass Sie ständig
                hinterher sein müssen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Fester Ansprechpartner für alle Objekte',
                  'Digitale Dokumentation und monatliche Berichte',
                  'Schnelle Reaktion bei Notfällen',
                  'Skalierbar für viele Objekte',
                  'Individuelle Reinigungspläne pro Objekt',
                  'Preisgarantie für Bestandskunden',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary">
                Jetzt Partnerschaft anfragen <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80"
                alt="Professionelle Objektbetreuung für Hausverwaltungen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Einsatzgebiet</span>
              <h2 className="section-title mb-5">Wo wir tätig sind</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Unser Einsatzgebiet umfasst Düsseldorf, Erkrath und einen 50 km Umkreis.
                Das schließt alle wichtigen Städte im Rhein-Kreis Neuss, Kreis Mettmann
                und angrenzende Gebiete ein.
              </p>
              <div className="flex items-start gap-3 bg-site-bg border border-slate-100 rounded-xl p-5">
                <MapPin size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-950 mb-2">Haupteinsatzgebiete</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Düsseldorf', 'Erkrath', 'Mettmann', 'Ratingen', 'Neuss',
                      'Hilden', 'Langenfeld', 'Monheim', 'Velbert', 'Solingen',
                    ].map((city) => (
                      <span key={city} className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navy-950 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-xl mb-2">Bereit für eine Zusammenarbeit?</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Nehmen Sie jetzt Kontakt auf. Wir besprechen Ihre Anforderungen
                und erstellen Ihnen innerhalb von 24 Stunden ein maßgeschneidertes Angebot.
              </p>
              <div className="space-y-3">
                <Link href="/kontakt" className="btn-primary w-full justify-center py-4">
                  <MessageCircle size={17} /> Kostenloses Angebot
                </Link>
                <a
                  href="tel:+4917622331738"
                  className="flex items-center justify-center gap-2 border border-white/20 text-white font-medium py-4 rounded-lg hover:bg-white/5 transition-colors text-sm cursor-pointer"
                >
                  <Phone size={17} /> 0176 22331738
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
