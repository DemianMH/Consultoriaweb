'use client'
import { motion } from 'framer-motion'

export default function TargetAudience() {
  return (
    <section id="target" className="py-24 bg-brand-gray-light">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white rounded-lg shadow-xl p-12 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="font-display text-4xl font-bold text-brand-dark mb-4">
              Público Objetivo
            </h2>
            <p className="text-xl text-brand-gray-dark/90">
              Nos enfocamos en instituciones de nueva creación o en proceso de crecimiento, un sector que representa una gran oportunidad.
            </p>
          </div>
          <div className="text-center md:text-right">
            <div className="font-display font-bold text-brand-dark text-8xl leading-none">
              60%
            </div>
            <p className="font-semibold text-brand-accent text-lg max-w-xs">
              De instituciones en el país no cuenta con RVOES propios
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}