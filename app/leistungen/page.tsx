'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Building2, Leaf, Snowflake, Trash2, Wrench, Wind, Trash, Droplets,
  Shield, Bell, ArrowRight, Phone, MessageCircle, CheckCircle,
} from 'lucide-react'
import type { Metadata } from 'next'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const mainServices = [
  {
    title: 'Treppenhausreinigung',
    subtitle: 'Professionelle Reinigung für Wohnanlagen & Gewerbe',
    desc: 'Unser wichtigster Service. Wir reinigen Treppenhäuser, Flure, Aufzüge und alle Gemeinschaftsflächen in Mehrfamilienhäusern, Bürogebäuden und Gewerbeobjekten – regelmäßig, dokumentiert und zuverlässig.',
    features: ['Wöchentlich oder 14-täglich', 'Fotodokumentation', 'Aufzüge & Gemeinschaftsflächen', 'Jahresvertrag oder monatlich kündbar'],
    href: '/leistungen/treppenhausreinigung',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    tag: 'Bestseller',
    icon: <Building2 size={24} />,
  },
  {
    title: 'Garten- & Außenanlagenpflege',
    subtitle: 'Professionelle Grünflächenpflege das ganze Jahr',
    desc: 'Von Rasenmähen über Heckenschneiden bis zur vollständigen Außenanlangenpflege. Wir betreuen Ihre Grünflächen saisonal und sorgen für einen gepflegten Gesamteindruck Ihres Objekts.',
    features: ['Rasenpflege & Mähen', 'Hecken schneiden', 'Laub entfernen', 'Saisonale Bepflanzung'],
    href: '/leistungen/gartenpflege',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    tag: null,
    icon: <Leaf size={24} />,
  },
]

const additionalServices = [
  { icon: <Snowflake size={22} />, title: 'Winterdienst', desc: 'Schneeräumung und Streudienst. Wir sorgen für sichere Zugänge an Ihren Objekten.' },
  { icon: <Trash2 size={22} />, title: 'Entrümpelung', desc: 'Schnelle und saubere Entrümpelung von Kellern, Wohnungen und Gewerbeobjekten.' },
  { icon: <Wrench size={22} />, title: 'Kleinreparaturen', desc: 'Glühbirnen wechseln, Türen einstellen, kleine Reparaturen – wir übernehmen das.' },
  { icon: <Wind size={22} />, title: 'Dachrinnenreinigung', desc: 'Regelmäßige Reinigung von Dachrinnen und Fallrohren zur Schadensprävention.' },
  { icon: <Trash size={22} />, title: 'Mülltonnenservice', desc: 'Stellen und Rückstellen von Mülltonnen, Reinigung der Müllbereiche.' },
  { icon: <Droplets size={22} />, title: 'Hochdruckreinigung', desc: 'Reinigung von Fassaden, Gehwegen, Einfahrten und anderen Außenflächen.' },
  { icon: <Shield size={22} />, title: 'Objektbetreuung', desc: 'Vollständige Betreuung Ihrer Immobilie – Ihr komplettes Hausmeister-Paket.' },
  { icon: <Bell size={22} />, title: 'Notdienst', desc: 'Bei dringenden Störungen sind wir schnell zur Stelle. 24/7 auf Anfrage.' },
]

export default function LeistungenPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,158,11,0.08)_0%,_transparent_60%)]" />
        <div className="container-max relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label"
          >
            Leistungen
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5"
          >
            Unsere Dienstleistungen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Professionelle Immobilienbetreuung aus einer Hand. Für Hausverwaltungen,
            Wohnanlagen und Gewerbeobjekte in Düsseldorf und Umgebung.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="section-label">Hauptleistungen</span>
            <h2 className="section-title">Unsere Kernkompetenzen</h2>
          </div>

          <div className="space-y-8">
            {mainServices.map((s, i) => (
              <motion.div
                key={s.title}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`relative h-64 md:h-auto min-h-[280px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {s.tag && (
                    <span className="absolute top-4 left-4 bg-gold text-navy-950 font-bold text-xs px-3 py-1.5 rounded-full">
                      {s.tag}
                    </span>
                  )}
                </div>
                <div className={`flex flex-col justify-center p-8 lg:p-10 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gold/10 text-gold rounded-xl flex items-center justify-center flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-950">{s.title}</h3>
                      <p className="text-slate-500 text-sm">{s.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-5 text-sm">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle size={15} className="text-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="btn-primary self-start">
                    Mehr erfahren <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-site-bg">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="section-label">Weitere Services</span>
            <h2 className="section-title mb-4">Auf Anfrage</h2>
            <p className="section-subtitle mx-auto">
              Wir bieten noch mehr. Sprechen Sie uns auf Ihre spezifischen Anforderungen an –
              wir finden immer eine Lösung.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white border border-slate-100 rounded-xl p-6 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/8 text-gold rounded-xl flex items-center justify-center mb-4
                                group-hover:bg-gold group-hover:text-navy-950 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-navy-950 text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Noch Fragen zu unseren Leistungen?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Wir beraten Sie kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt" className="btn-primary px-8 py-4">
              <MessageCircle size={18} /> Angebot anfordern
            </Link>
            <a href="tel:+4917622331738" className="btn-outline-white px-8 py-4 cursor-pointer">
              <Phone size={18} /> 0176 22331738
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
