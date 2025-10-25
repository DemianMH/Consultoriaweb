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
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="INAPECC" />
        <link rel="manifest" href="/site.webmanifest" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}