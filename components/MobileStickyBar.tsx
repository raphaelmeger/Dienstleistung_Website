'use client'

import Link from 'next/link'
import { Phone, MessageCircle, FileText } from 'lucide-react'

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-950 border-t border-white/10 safe-area-bottom">
      <div className="flex items-stretch divide-x divide-white/10">
        <a
          href="tel:+4917622331738"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-white/5 transition-colors duration-150 cursor-pointer"
          aria-label="Anrufen"
        >
          <Phone size={20} className="text-gold" />
          <span className="text-xs font-medium text-slate-300">Anrufen</span>
        </a>
        <a
          href="https://wa.me/4917622331738?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] hover:bg-[#1fba59] transition-colors duration-150 cursor-pointer"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} className="text-white" />
          <span className="text-xs font-semibold text-white">WhatsApp</span>
        </a>
        <Link
          href="/kontakt"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-white/5 transition-colors duration-150"
          aria-label="Angebot anfordern"
        >
          <FileText size={20} className="text-gold" />
          <span className="text-xs font-medium text-slate-300">Angebot</span>
        </Link>
      </div>
    </div>
  )
}
