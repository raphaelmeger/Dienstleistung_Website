'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Startseite', href: '/' },
  {
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      { label: 'Treppenhausreinigung', href: '/leistungen/treppenhausreinigung' },
      { label: 'Gartenpflege', href: '/leistungen/gartenpflege' },
      { label: 'Alle Leistungen', href: '/leistungen' },
    ],
  },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-navy-950/98 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-navy-950/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center flex-shrink-0
                            group-hover:scale-105 transition-transform duration-200">
              <span className="text-navy-950 font-bold text-sm tracking-tight">TH</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-base leading-none block">Toni</span>
              <span className="text-slate-300 text-xs font-medium tracking-wide">Hausmeisterservice</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer
                      ${isActive(link.href) ? 'text-gold' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl shadow-black/10 border border-slate-100 py-2 z-50"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-4 py-2.5 text-sm text-navy-900 hover:bg-gold-50 hover:text-gold-dark transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${isActive(link.href) ? 'text-gold' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+4917622331738"
              className="flex items-center gap-2 text-slate-300 hover:text-gold transition-colors duration-200 text-sm font-medium cursor-pointer"
            >
              <Phone size={15} />
              <span>0176 22331738</span>
            </a>
            <a
              href="https://wa.me/4917622331738?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-950 font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <nav className="container-max py-4 flex flex-col gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                      ${isActive(link.href) ? 'text-gold bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'}`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.children.slice(0, 2).map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-2 text-sm text-slate-400 hover:text-gold transition-colors duration-200"
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="border-t border-white/10 mt-3 pt-4 flex flex-col gap-3">
                <a
                  href="tel:+4917622331738"
                  className="flex items-center justify-center gap-2 border border-white/20 text-white font-medium py-3 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={16} />
                  0176 22331738
                </a>
                <a
                  href="https://wa.me/4917622331738?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold text-navy-950 font-semibold py-3 rounded-lg hover:bg-gold-dark transition-colors duration-200 cursor-pointer"
                >
                  <MessageCircle size={16} />
                  WhatsApp schreiben
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
