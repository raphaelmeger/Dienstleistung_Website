'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle, Phone, MessageCircle, Calendar, ClipboardList,
  Camera, Star, ArrowRight, MapPin,
} from 'lucide-react'

const benefits = [
  { icon: <Calendar size={20} />, title: 'Feste Reinigungstage', desc: 'Wöchentlich oder 14-täglich – Sie bestimmen den Rhythmus. Wir halten ihn garantiert ein.' },
  { icon: <Camera size={20} />, title: 'Fotodokumentation', desc: 'Nach jeder Reinigung erhalten Sie eine digitale Dokumentation mit Fotos als Nachweis.' },
  { icon: <ClipboardList size={20} />, title: 'Reinigungsprotokoll', desc: 'Lückenloses Protokoll jeder Reinigung – perfekt für Ihre Unterlagen als Hausverwaltung.' },
  { icon: <Star size={20} />, title: 'Qualitätskontrolle', desc: 'Regelmäßige Qualitätschecks durch unsere Teamleitung sichern dauerhaft höchste Standards.' },
]

const included = [
  'Kehren und Wischen aller Treppenstufen',
  'Reinigung von Handläufen und Geländer',
  'Abstauben von Fensterbänken und Heizkörpern',
  'Reinigung von Briefkästen und Eingangstüren',
  'Wischpflege aller Böden im Treppenhaus',
  'Reinigung von Aufzugkabinen (sofern vorhanden)',
  'Reinigung der Keller- und Kellerflure',
  'Entsorgung von Unrat und Verunreinigungen',
  'Reinigung von Fensterglas im Treppenhaus',
  'Kontrolle von Beleuchtung und Hinweis bei Defekten',
]

export default function TreppenhausreinigungPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601629736795-3da639aa9f23?auto=format&fit=crop&w=1920&q=80"
            alt="Professionelle Treppenhausreinigung Düsseldorf"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-navy-950/30" />
        </div>
        <div className="relative z-10 container-max pb-16 pt-32">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
              <Link href="/" className="hover:text-gold transition-colors">Startseite</Link>
              <span>/</span>
              <Link href="/leistungen" className="hover:text-gold transition-colors">Leistungen</Link>
              <span>/</span>
              <span className="text-gold">Treppenhausreinigung</span>
            </div>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="section-label"
          >
            Leistung
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl"
          >
            Treppenhausreinigung
            <span className="text-gold block text-3xl md:text-4xl mt-1 font-semibold">Düsseldorf & Umgebung</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-slate-300 text-lg max-w-2xl"
          >
            Professionelle, regelmäßige Treppenhausreinigung für Mehrfamilienhäuser,
            Bürogebäude und Gewerbeobjekte – mit Fotodokumentation und Qualitätsgarantie.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <Link href="/kontakt" className="btn-primary px-7 py-3.5">
              <MessageCircle size={17} />
              Angebot anfordern
            </Link>
            <a href="tel:+4917622331738" className="btn-outline-white px-7 py-3.5 cursor-pointer">
              <Phone size={17} />
              0176 22331738
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEO Content + Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label">Über diese Leistung</span>
                <h2 className="section-title mb-5">
                  Professionelle Treppenhausreinigung in Düsseldorf
                </h2>
                <div className="prose prose-slate max-w-none space-y-4 text-slate-700 text-[15px] leading-relaxed">
                  <p>
                    Die <strong>Treppenhausreinigung</strong> ist ein zentraler Bestandteil der Immobilienpflege.
                    Saubere Treppenhäuser sind nicht nur für das Wohlbefinden der Bewohner entscheidend,
                    sondern auch ein wichtiges Aushängeschild für Hausverwaltungen und Immobilieneigentümer
                    in <strong>Düsseldorf</strong> und Umgebung.
                  </p>
                  <p>
                    Als spezialisierter <strong>Hausmeisterservice in Düsseldorf</strong> bieten wir Ihnen
                    zuverlässige und professionelle Treppenhausreinigung für Mehrfamilienhäuser,
                    Bürogebäude und Gewerbeobjekte. Wir arbeiten nach festen Reinigungsplänen,
                    dokumentieren jeden Einsatz mit Fotos und gewährleisten dauerhaft höchste Sauberkeit.
                  </p>
                  <p>
                    Unsere erfahrenen Reinigungskräfte kennen die Anforderungen von
                    <strong> Hausverwaltungen und WEGs</strong>. Deshalb legen wir besonderen Wert auf
                    lückenlose Dokumentation, pünktliches Erscheinen und schnelle Kommunikation
                    bei besonderen Ereignissen.
                  </p>
                  <p>
                    Wir reinigen in <strong>Düsseldorf</strong>, Erkrath, Mettmann, Ratingen, Neuss
                    und im gesamten Rheinkreis – innerhalb von 50 km um Düsseldorf.
                  </p>
                </div>
              </motion.div>

              {/* What's included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-10"
              >
                <h3 className="text-xl font-bold text-navy-950 mb-5">Im Service enthalten</h3>
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
              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy-950 rounded-2xl p-6 text-white"
              >
                <h3 className="font-bold text-lg mb-2">Angebot anfordern</h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  Kostenlos, unverbindlich – innerhalb von 24h erhalten Sie Ihr Angebot.
                </p>
                <div className="space-y-3">
                  <Link href="/kontakt" className="btn-primary w-full justify-center py-3.5">
                    <MessageCircle size={17} />
                    Online anfragen
                  </Link>
                  <a
                    href="tel:+4917622331738"
                    className="flex items-center justify-center gap-2 border border-white/20 text-white font-medium py-3.5 rounded-lg hover:bg-white/5 transition-colors duration-150 text-sm cursor-pointer"
                  >
                    <Phone size={17} />
                    0176 22331738
                  </a>
                </div>
              </motion.div>

              {/* Coverage area */}
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
                  {['Düsseldorf', 'Erkrath', 'Mettmann', 'Ratingen', 'Neuss', 'Hilden', 'Langenfeld', 'Monheim'].map((city) => (
                    <span key={city} className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      {city}
                    </span>
                  ))}
                  <span className="text-slate-500 text-xs self-center">+ 50 km Umkreis</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-site-bg">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="section-label">Unsere Vorteile</span>
            <h2 className="section-title">Warum unsere Treppenhausreinigung?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-slate-100 rounded-xl p-6 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-4
                                group-hover:bg-gold group-hover:text-navy-950 transition-all duration-300">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-navy-950 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Treppenhausreinigung in Düsseldorf anfragen
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Erhalten Sie noch heute ein kostenloses und unverbindliches Angebot für Ihr Objekt.
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
