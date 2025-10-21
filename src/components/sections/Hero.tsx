'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="h-screen min-h-[700px] flex items-center justify-center bg-brand-dark text-white relative overflow-hidden pt-[82px]"
    >
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Puedes agregar un video o imagen de fondo aquí */}
      <div className="absolute inset-0 z-0">
          <p className="text-white/20">Aquí un video o imagen de fondo profesional</p>
      </div>

      {/* --- CORRECCIÓN: Cambiado px-6 por px-4 para alinear con header móvil --- */}
      <div className="container mx-auto max-w-7xl px-4 z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide mb-6"
        >
          {/* --- CORRECCIÓN: Texto limpio sin [cite] --- */}
          Innovación Educativa y Gestión Curricular
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-sans text-lg sm:text-xl lg:text-2xl font-light text-brand-gray-light mb-10"
        >
          {/* --- CORRECCIÓN: Texto limpio sin [cite] --- */}
          Evolucionamos tus ideas
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#contact"
            // --- CORRECCIÓN: Padding y texto responsivo para el botón ---
            className="px-6 md:px-8 py-3 md:py-4 bg-brand-accent text-brand-dark font-display text-base md:text-lg font-bold rounded-md shadow-xl transition-all duration-300 hover:bg-brand-accent-light hover:shadow-2xl transform hover:scale-105"
          >
            {/* --- CORRECCIÓN: Texto limpio sin [cite] --- */}
            Agenda una consulta
          </a>
        </motion.div>
      </div>
    </section>
  )
}