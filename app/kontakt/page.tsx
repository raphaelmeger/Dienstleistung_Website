'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  'Treppenhausreinigung',
  'Garten- & Außenanlagenpflege',
  'Winterdienst',
  'Entrümpelung',
  'Kleinreparaturen',
  'Dachrinnenreinigung',
  'Hochdruckreinigung',
  'Mülltonnenservice',
  'Objektbetreuung',
  'Notdienst',
  'Sonstige / Mehrere Leistungen',
]

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: '', company: '', email: '', phone: '', service: '', objects: '', message: '', privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container-max text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">
            Kontakt
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Sprechen wir miteinander
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Kostenloses Angebot anfordern, Fragen stellen oder direkt anrufen.
            Wir melden uns innerhalb von 24 Stunden.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Phone size={20} className="text-gold" />,
                label: 'Telefon',
                value: '0176 22331738',
                sub: 'Mo–Fr 7–18 Uhr',
                href: 'tel:+4917622331738',
              },
              {
                icon: <MessageCircle size={20} className="text-gold" />,
                label: 'WhatsApp',
                value: 'WhatsApp schreiben',
                sub: 'Schnellste Antwort',
                href: 'https://wa.me/4917622331738?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20Angebot%20anfordern.',
              },
              {
                icon: <MapPin size={20} className="text-gold" />,
                label: 'Einsatzgebiet',
                value: 'Düsseldorf & Erkrath',
                sub: '+ 50 km Umkreis',
                href: null,
              },
              {
                icon: <Clock size={20} className="text-gold" />,
                label: 'Reaktionszeit',
                value: 'Innerhalb 24h',
                sub: 'Notdienst auf Anfrage',
                href: null,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-site-bg border border-slate-100 rounded-xl p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-slate-500 text-xs">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                       rel="noopener noreferrer"
                       className="block font-semibold text-navy-950 text-sm hover:text-gold transition-colors cursor-pointer">
                      {item.value}
                    </a>
                  ) : (
                    <span className="block font-semibold text-navy-950 text-sm">{item.value}</span>
                  )}
                  <span className="text-slate-400 text-xs">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy-950 mb-2">Angebot anfordern</h2>
                <p className="text-slate-500 text-sm mb-8">
                  Füllen Sie das Formular aus. Wir melden uns innerhalb von 24 Stunden mit einem
                  maßgeschneiderten Angebot für Ihr Objekt.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-site-bg border border-slate-100 rounded-2xl p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 mb-2">Nachricht erhalten!</h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
                      Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden
                      bei Ihnen. Bei dringenden Anfragen rufen Sie uns direkt an:
                    </p>
                    <a href="tel:+4917622331738"
                       className="inline-flex items-center gap-2 mt-4 text-gold font-semibold cursor-pointer">
                      <Phone size={16} /> 0176 22331738
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Name <span className="text-gold" aria-hidden>*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" required
                          value={formState.name} onChange={handleChange}
                          placeholder="Max Mustermann"
                          className="input-field"
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Unternehmen / Hausverwaltung
                        </label>
                        <input
                          id="company" name="company" type="text"
                          value={formState.company} onChange={handleChange}
                          placeholder="Mustermann GmbH (optional)"
                          className="input-field"
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                          E-Mail <span className="text-gold" aria-hidden>*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" required
                          value={formState.email} onChange={handleChange}
                          placeholder="max@beispiel.de"
                          className="input-field"
                          autoComplete="email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Telefon <span className="text-gold" aria-hidden>*</span>
                        </label>
                        <input
                          id="phone" name="phone" type="tel" required
                          value={formState.phone} onChange={handleChange}
                          placeholder="+49 211 12345678"
                          className="input-field"
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Gewünschte Leistung <span className="text-gold" aria-hidden>*</span>
                        </label>
                        <select
                          id="service" name="service" required
                          value={formState.service} onChange={handleChange}
                          className="input-field cursor-pointer"
                        >
                          <option value="">Bitte auswählen</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="objects" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Anzahl Objekte / Einheiten
                        </label>
                        <input
                          id="objects" name="objects" type="text"
                          value={formState.objects} onChange={handleChange}
                          placeholder="z.B. 3 Gebäude, 45 Einheiten"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Ihre Nachricht
                      </label>
                      <textarea
                        id="message" name="message" rows={4}
                        value={formState.message} onChange={handleChange}
                        placeholder="Beschreiben Sie kurz Ihr Objekt und Ihre Anforderungen..."
                        className="input-field resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="privacy" name="privacy" type="checkbox" required
                        checked={formState.privacy}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 accent-gold cursor-pointer flex-shrink-0"
                      />
                      <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                        Ich habe die{' '}
                        <Link href="/datenschutz" className="text-gold hover:underline">Datenschutzerklärung</Link>
                        {' '}gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.{' '}
                        <span className="text-gold" aria-hidden>*</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !formState.privacy}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="inline-flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Wird gesendet...
                        </span>
                      ) : (
                        <><Send size={17} /> Anfrage absenden</>
                      )}
                    </button>
                    <p className="text-xs text-slate-400 text-center">
                      Mit <span className="text-gold">*</span> markierte Felder sind Pflichtfelder.
                    </p>
                  </form>
                )}
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
                <h3 className="font-bold text-lg mb-4">Direkt Kontakt</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+4917622331738"
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-gold transition-colors cursor-pointer"
                  >
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <span className="block font-semibold text-white">0176 22331738</span>
                      <span className="text-xs text-slate-400">Mo–Fr 7:00–18:00 Uhr</span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/4917622331738"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-gold transition-colors cursor-pointer"
                  >
                    <div className="w-9 h-9 bg-[#25D366]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} className="text-[#25D366]" />
                    </div>
                    <div>
                      <span className="block font-semibold text-white">WhatsApp</span>
                      <span className="text-xs text-slate-400">Schnellste Antwort</span>
                    </div>
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
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Wir sind in Düsseldorf, Erkrath und einem Umkreis von 50 km tätig.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Düsseldorf', 'Erkrath', 'Mettmann', 'Ratingen', 'Neuss', 'Hilden', 'Langenfeld', 'Monheim'].map((c) => (
                    <span key={c} className="bg-white border border-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gold/10 border border-gold/20 rounded-2xl p-6"
              >
                <h3 className="font-bold text-navy-950 mb-2">Schnell-Kontakt</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Für schnelle Anfragen einfach auf WhatsApp schreiben:
                </p>
                <a
                  href="https://wa.me/4917622331738?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20Angebot%20f%C3%BCr%20Treppenhausreinigung%20anfragen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-lg hover:bg-[#1fba59] transition-colors text-sm cursor-pointer"
                >
                  <MessageCircle size={16} />
                  WhatsApp öffnen
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
