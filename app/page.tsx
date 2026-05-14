'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Phone, MessageCircle, CheckCircle, Star, ChevronRight, ArrowRight,
  Building2, Leaf, Wrench, Shield, Clock, Award, Zap, Users, ChevronDown,
} from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const services = [
  {
    icon: <Building2 size={28} />,
    title: 'Treppenhausreinigung',
    desc: 'Professionelle Reinigung von Treppenhäusern, Aufzügen und Gemeinschaftsflächen – regelmäßig, zuverlässig und dokumentiert.',
    href: '/leistungen/treppenhausreinigung',
    image: '/monica-sauro-cyhUa1j5_RE-unsplash.jpg',
    tag: 'Meist gebucht',
  },
  {
    icon: <Leaf size={28} />,
    title: 'Garten- & Außenanlagenpflege',
    desc: 'Rasenmähen, Heckenschneiden, Grünflächenpflege und saisonale Betreuung Ihrer Außenanlagen.',
    href: '/leistungen/gartenpflege',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    tag: null,
  },
  {
    icon: <Wrench size={28} />,
    title: 'Weitere Dienstleistungen',
    desc: 'Winterdienst, Entrümpelung, Kleinreparaturen, Dachrinnenreinigung, Hochdruckreinigung und mehr.',
    href: '/leistungen',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    tag: null,
  },
]

const usps = [
  { icon: <Clock size={22} />, title: 'Pünktlich & Zuverlässig', desc: 'Festgelegte Reinigungstage, die wir garantiert einhalten. Nie wieder Ausreden.' },
  { icon: <Shield size={22} />, title: 'Vollversichert', desc: 'Wir sind haftpflichtversichert. Ihre Immobilie ist bei uns in sicheren Händen.' },
  { icon: <Zap size={22} />, title: 'Schnelle Kommunikation', desc: 'Antwort innerhalb von 24 Stunden. Notfälle werden sofort bearbeitet.' },
  { icon: <Award size={22} />, title: 'Transparente Abrechnung', desc: 'Klare Angebote, keine versteckten Kosten. Monatliche digitale Dokumentation.' },
  { icon: <Users size={22} />, title: 'Fester Ansprechpartner', desc: 'Sie haben immer denselben Ansprechpartner. Persönlich, direkt und unkompliziert.' },
  { icon: <CheckCircle size={22} />, title: 'Digitale Qualitätskontrolle', desc: 'Fotodokumentation und regelmäßige Qualitätschecks für maximale Transparenz.' },
]

const testimonials = [
  {
    name: 'Sabine Müller',
    role: 'Hausverwaltung Schmidt GmbH, Düsseldorf',
    text: 'Die Treppenhausreinigung in unseren vier Wohnanlagen läuft seit über zwei Jahren reibungslos. Immer pünktlich, immer top sauber. Klare Empfehlung für Hausverwaltungen!',
    rating: 5,
  },
  {
    name: 'Klaus Bergmann',
    role: 'WEG Kaiserswerther Str. 12, Erkrath',
    text: 'Hervorragende Gartenpflege für unsere Wohnanlage. Herr Toni und sein Team arbeiten professionell und sind sehr zuverlässig. Die Mieter sind begeistert.',
    rating: 5,
  },
  {
    name: 'Andrea Schumacher',
    role: 'Immobilien Schumacher, Düsseldorf',
    text: 'Schnelle Reaktionszeit, faire Preise und immer erreichbar. Wir betreuen gemeinsam 15 Objekte und ich würde Toni jederzeit weiterempfehlen.',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'Wie schnell können Sie mit dem Service beginnen?',
    a: 'In der Regel können wir innerhalb von 1–2 Wochen mit dem Service starten. Für dringende Anfragen versuchen wir auch kurzfristig einen Termin zu finden. Kontaktieren Sie uns einfach per Telefon oder WhatsApp.',
  },
  {
    q: 'Für welche Objekte bieten Sie Ihre Dienstleistungen an?',
    a: 'Wir betreuen Mehrfamilienhäuser, Wohnanlagen, Bürogebäude, Gewerbeobjekte und Einkaufszentren. Besonders auf Hausverwaltungen sind wir spezialisiert – wir verwalten Objekte mit mehreren Einheiten effizient und zuverlässig.',
  },
  {
    q: 'Sind Sie vollständig versichert?',
    a: 'Ja, wir sind vollständig haftpflichtversichert. Alle unsere Mitarbeiter sind ordnungsgemäß angestellt und versichert. Auf Wunsch stellen wir Ihnen gerne die Versicherungsnachweise zur Verfügung.',
  },
  {
    q: 'Wie erfolgt die Abrechnung?',
    a: 'Die Abrechnung erfolgt monatlich, transparent und nachvollziehbar. Sie erhalten eine detaillierte Rechnung mit Fotodokumentation der erbrachten Leistungen. Auf Wunsch ist auch wöchentliche Abrechnung möglich.',
  },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Modernes Mehrfamilienhaus – Toni Hausmeisterservice"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/75 to-navy-950/90" />
        </div>

        <div className="relative z-10 container-max pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Verfügbar in Düsseldorf & Umgebung
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 text-balance"
          >
            Professioneller
            <span className="text-gold block">Hausmeisterservice</span>
            für Düsseldorf
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Zuverlässige Treppenhausreinigung, Gartenpflege und Objektbetreuung
            für Wohnanlagen und Gewerbeobjekte. Ihr verlässlicher Partner für
            langfristige Immobilienbetreuung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center">
              <MessageCircle size={18} />
              Kostenloses Angebot
            </Link>
            <a
              href="tel:+4917622331738"
              className="btn-outline-white text-base px-8 py-4 w-full sm:w-auto justify-center cursor-pointer"
            >
              <Phone size={18} />
              0176 22331738
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
          >
            {['✓ Vollversichert', '✓ 250+ betreute Objekte', '✓ 4,9/5 Google Bewertung', '✓ 48h Reaktionszeit'].map((t) => (
              <span key={t} className="text-slate-300 text-sm font-medium bg-white/8 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs tracking-widest uppercase">Mehr erfahren</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-navy-950 py-8 border-y border-white/5">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: 250, suffix: '+', label: 'Betreute Objekte' },
              { num: 10, suffix: '+', label: 'Jahre Erfahrung' },
              { num: 4.9, suffix: '/5', label: 'Google Bewertung', decimals: 1 },
              { num: 48, suffix: 'h', label: 'Reaktionszeit' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-bold text-gold leading-none">
                  <AnimatedCounter end={stat.num} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                </span>
                <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <Section>
            <div className="text-center mb-14">
              <motion.span variants={fadeUp} className="section-label">Unsere Leistungen</motion.span>
              <motion.h2 variants={fadeUp} className="section-title mb-4">
                Alles aus einer Hand
              </motion.h2>
              <motion.p variants={fadeUp} className="section-subtitle mx-auto">
                Von der regelmäßigen Treppenhausreinigung bis zur vollständigen Objektbetreuung –
                wir kümmern uns um Ihre Immobilie.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div key={s.title} variants={fadeUp} custom={i}>
                  <Link
                    href={s.href}
                    className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-100
                               shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                      {s.tag && (
                        <span className="absolute top-3 left-3 bg-gold text-navy-950 text-xs font-bold px-2.5 py-1 rounded-full">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-gold/10 text-gold rounded-xl flex items-center justify-center">
                          {s.icon}
                        </div>
                        <h3 className="font-bold text-navy-950 text-lg leading-snug">{s.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                      <div className="flex items-center gap-1 text-gold font-semibold text-sm mt-4 group-hover:gap-2 transition-all duration-200">
                        Mehr erfahren <ArrowRight size={15} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link href="/leistungen" className="btn-outline-navy">
                Alle Leistungen ansehen
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── B2B / HAUSVERWALTUNGEN ── */}
      <section className="section-padding bg-site-bg overflow-hidden">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Section className="order-2 lg:order-1">
              <motion.span variants={fadeUp} className="section-label">Für Hausverwaltungen</motion.span>
              <motion.h2 variants={fadeUp} className="section-title mb-5">
                Ihr Partner für professionelle Objektbetreuung
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed mb-6">
                Als Hausverwaltung kennen Sie die Herausforderung: Sie brauchen einen
                Dienstleister, der <strong className="text-navy-950">zuverlässig erscheint</strong>,
                <strong className="text-navy-950"> sauber dokumentiert</strong> und{' '}
                <strong className="text-navy-950">schnell kommuniziert</strong>.
                Genau dafür sind wir da.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3 mb-8">
                {[
                  'Fester Ansprechpartner für alle Ihre Objekte',
                  'Monatliche Fotodokumentation und Berichte',
                  'Flexible Vertragsgestaltung – monatlich kündbar',
                  'Preisgarantie für Bestandskunden',
                  'Schneller Notdienst bei dringenden Fällen',
                  'Erfahrung mit Wohnanlagen und Gewerbeimmobilien',
                ].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link href="/kontakt" className="btn-primary">
                  Jetzt unverbindlich anfragen
                  <ArrowRight size={16} />
                </Link>
                <Link href="/ueber-uns" className="btn-outline-navy">
                  Mehr über uns
                </Link>
              </motion.div>
            </Section>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                    alt="Professionelle Objektbetreuung für Hausverwaltungen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/20 to-transparent" />
                </div>
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-slate-100"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={18} className="text-gold fill-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-950 text-sm">4,9 / 5 Sterne</div>
                    <div className="text-slate-500 text-xs">Google Bewertung</div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-navy-950 text-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">250+ Objekte</div>
                    <div className="text-slate-400 text-xs">erfolgreich betreut</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <Section>
            <div className="text-center mb-14">
              <motion.span variants={fadeUp} className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
                Warum Toni Hausmeisterservice?
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Was uns auszeichnet
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-2xl mx-auto">
                Wir sind kein anonymes Reinigungsunternehmen. Wir sind Ihr persönlicher
                Partner für die langfristige Betreuung Ihrer Immobilie.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {usps.map((u, i) => (
                <motion.div
                  key={u.title}
                  variants={fadeUp}
                  custom={i}
                  className="group bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center text-gold mb-4
                                  group-hover:bg-gold group-hover:text-navy-950 transition-all duration-300">
                    {u.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{u.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{u.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <Section>
            <div className="text-center mb-14">
              <motion.span variants={fadeUp} className="section-label">Kundenstimmen</motion.span>
              <motion.h2 variants={fadeUp} className="section-title mb-4">
                Das sagen unsere Kunden
              </motion.h2>
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-slate-600 text-sm font-medium">4,9/5 – Basierend auf Google Bewertungen</span>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  custom={i}
                  className="bg-site-bg border border-slate-100 rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="flex">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={15} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed flex-1">„{t.text}"</p>
                  <div className="border-t border-slate-100 pt-4">
                    <div className="font-semibold text-navy-950 text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-site-bg">
        <div className="container-max max-w-3xl">
          <Section>
            <div className="text-center mb-12">
              <motion.span variants={fadeUp} className="section-label">FAQ</motion.span>
              <motion.h2 variants={fadeUp} className="section-title">Häufig gestellte Fragen</motion.h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer hover:bg-slate-50 transition-colors duration-150"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-navy-950 text-sm md:text-base leading-snug">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 text-gold"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center mt-8">
              <Link href="/faq" className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors duration-150 inline-flex items-center gap-1">
                Alle Fragen ansehen <ChevronRight size={14} />
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
            alt="Jetzt Angebot anfragen"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/88" />
        </div>
        <div className="relative z-10 container-max text-center">
          <Section>
            <motion.span variants={fadeUp} className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
              Jetzt starten
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-5 text-balance">
              Bereit für zuverlässige
              <br />
              <span className="text-gold">Immobilienbetreuung?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Kontaktieren Sie uns jetzt für ein unverbindliches Angebot.
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt" className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center">
                <MessageCircle size={18} />
                Kostenloses Angebot anfordern
              </Link>
              <a
                href="tel:+4917622331738"
                className="btn-outline-white text-base px-8 py-4 w-full sm:w-auto justify-center cursor-pointer"
              >
                <Phone size={18} />
                0176 22331738
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-400 text-sm mt-6">
              Einsatzgebiet: Düsseldorf, Erkrath + 50 km Umkreis · Kein Risiko · Kostenlose Beratung
            </motion.p>
          </Section>
        </div>
      </section>
    </>
  )
}
