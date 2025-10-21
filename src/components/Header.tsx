'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Ventajas', href: '#advantages' },
  { name: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
      >
        {/* --- CORRECCIÓN: Cambiado px-6 por px-4 --- */}
        <nav className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center h-[82px]">
          <Link href="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Logo INAPECC"
              width={160} // Ancho intrínseco/máximo
              height={50} // Alto intrínseco/máximo
              priority
              // --- CORRECCIÓN: Clases para hacerlo responsivo ---
              className="w-[120px] md:w-[150px] h-auto"
            />
          </Link>
          
          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-brand-gray-dark hover:text-brand-accent transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-brand-dark text-white font-bold rounded-md shadow-lg transition-all duration-300 hover:bg-brand-dark/90"
            >
              Agendar Consulta
            </motion.a>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Abrir menú"
              className="text-brand-dark"
            >
              <HiMenu size={30} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Overlay de Menú Móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            onClick={toggleMobileMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-brand-dark text-white p-8 z-[70] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleMobileMenu}
                aria-label="Cerrar menú"
                className="absolute top-6 right-6 text-brand-gray-light"
              >
                <HiX size={30} />
              </button>
              
              <nav className="mt-16 flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="font-display text-2xl text-white hover:text-brand-accent transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <motion.a
                  href="#contact"
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 mt-4 bg-brand-accent text-brand-dark font-display text-lg font-bold rounded-md shadow-lg transition-all duration-300"
                >
                  Agendar Consulta
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}