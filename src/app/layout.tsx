import './globals.css'
import type { Metadata } from 'next'
import { Oswald, Open_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '600'],
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'INAPECC - Consultoría Pedagógica',
  description: 'Evolucionamos tus ideas en innovación educativa y desarrollo curricular.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${openSans.variable} ${oswald.variable}`}>
      <body className="bg-brand-gray-lighter text-brand-gray-dark font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}