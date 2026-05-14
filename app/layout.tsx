import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileStickyBar from '@/components/MobileStickyBar'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Toni Hausmeisterservice – Professioneller Hausmeisterservice Düsseldorf',
    template: '%s | Toni Hausmeisterservice',
  },
  description:
    'Ihr zuverlässiger Hausmeisterservice in Düsseldorf und Umgebung. Professionelle Treppenhausreinigung, Gartenpflege und Objektbetreuung für Wohnanlagen und Gewerbe.',
  keywords: [
    'Hausmeisterservice Düsseldorf',
    'Treppenhausreinigung Düsseldorf',
    'Gartenpflege Erkrath',
    'Gebäudeservice Düsseldorf',
    'Objektbetreuung Düsseldorf',
    'Hausmeister Düsseldorf',
    'Reinigungsservice Düsseldorf',
  ],
  authors: [{ name: 'Toni Hausmeisterservice' }],
  creator: 'Toni Hausmeisterservice',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Toni Hausmeisterservice',
    title: 'Toni Hausmeisterservice – Professioneller Hausmeisterservice Düsseldorf',
    description:
      'Ihr zuverlässiger Hausmeisterservice in Düsseldorf. Treppenhausreinigung, Gartenpflege und Objektbetreuung.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </body>
    </html>
  )
}
