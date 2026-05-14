import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Mail, Clock, ChevronRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300" role="contentinfo">
      {/* Main Footer */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-navy-950 font-bold text-sm">TH</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block">Toni</span>
                <span className="text-slate-400 text-xs font-medium tracking-wide">Hausmeisterservice</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              Professionelle Immobilien- und Gebäudebetreuung in Düsseldorf und Umgebung.
              Zuverlässig, sauber, pünktlich – für Wohnanlagen und Gewerbe.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+4917622331738"
                className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg hover:bg-gold hover:text-navy-950 text-slate-300 transition-all duration-200 cursor-pointer"
                aria-label="Anrufen"
              >
                <Phone size={16} />
              </a>
              <a
                href="https://wa.me/4917622331738"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg hover:bg-[#25D366] hover:text-white text-slate-300 transition-all duration-200 cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:info@toni-hausmeisterservice.de"
                className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg hover:bg-gold hover:text-navy-950 text-slate-300 transition-all duration-200 cursor-pointer"
                aria-label="E-Mail senden"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Leistungen</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Treppenhausreinigung', '/leistungen/treppenhausreinigung'],
                ['Garten- & Außenanlagenpflege', '/leistungen/gartenpflege'],
                ['Winterdienst', '/leistungen'],
                ['Dachrinnenreinigung', '/leistungen'],
                ['Entrümpelung', '/leistungen'],
                ['Hochdruckreinigung', '/leistungen'],
                ['Objektbetreuung', '/leistungen'],
                ['Notdienst', '/leistungen'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-gold transition-colors duration-150"
                  >
                    <ChevronRight size={13} className="flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Unternehmen</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Über uns', '/ueber-uns'],
                ['Für Hausverwaltungen', '/ueber-uns#hausverwaltungen'],
                ['Kontakt', '/kontakt'],
                ['Angebot anfordern', '/kontakt'],
                ['FAQ', '/faq'],
                ['Impressum', '/impressum'],
                ['Datenschutz', '/datenschutz'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-gold transition-colors duration-150"
                  >
                    <ChevronRight size={13} className="flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Kontakt & Einsatzgebiet</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+4917622331738" className="text-slate-300 hover:text-gold transition-colors duration-150 font-medium cursor-pointer">
                    +49 176 22331738
                  </a>
                  <span className="block text-slate-500 text-xs mt-0.5">Direkt anrufen</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="https://wa.me/4917622331738"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-gold transition-colors duration-150 font-medium cursor-pointer"
                  >
                    WhatsApp
                  </a>
                  <span className="block text-slate-500 text-xs mt-0.5">Schnellste Antwort</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-300 font-medium">Düsseldorf & Erkrath</span>
                  <span className="block text-slate-500 text-xs mt-0.5">+ 50 km Umkreis</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-300 font-medium">Mo–Fr 7:00–18:00 Uhr</span>
                  <span className="block text-slate-500 text-xs mt-0.5">Notdienst auf Anfrage</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO Text Band */}
      <div className="border-t border-white/5">
        <div className="container-max py-6">
          <p className="text-xs text-slate-600 leading-relaxed text-center">
            Toni Hausmeisterservice – Ihr professioneller Gebäudeservice in{' '}
            <strong className="text-slate-500">Düsseldorf</strong>,{' '}
            <strong className="text-slate-500">Erkrath</strong>, Mettmann, Ratingen, Neuss und dem gesamten Rhein-Kreis Neuss.
            Wir bieten <strong className="text-slate-500">Treppenhausreinigung</strong>, Gartenpflege, Winterdienst,
            Entrümpelung und vollständige <strong className="text-slate-500">Objektbetreuung</strong> für
            Hausverwaltungen, Wohnanlagen und Gewerbeobjekte.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Toni Hausmeisterservice. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="hover:text-slate-400 transition-colors duration-150">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-slate-400 transition-colors duration-150">Datenschutz</Link>
            <Link href="/kontakt" className="hover:text-slate-400 transition-colors duration-150">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
