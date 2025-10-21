'use client'
import { motion } from 'framer-motion'

const alliances = [
  { name: 'CONAIP', desc: 'Colegio Nacional de Integración Profesional' },
  { name: 'Centro Universitario BARNARD', desc: 'Universidad con más de 20 años de experiencia' },
  { name: 'GRECOL', desc: 'Grupo Educativo Colegios Lafayette Carmen' },
]

export default function Alliances() {
  return (
    <section id="alliances" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold text-brand-dark mb-16 text-center"
        >
          Alianzas Estratégicas
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alliances.map((ally, i) => (
            <motion.div
              key={ally.name}
              className="p-8 bg-brand-gray-lighter rounded-lg text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
            >
              <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">{ally.name}</h3>
              <p className="text-brand-gray-dark/80">{ally.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}