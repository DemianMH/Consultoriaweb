'use client'
import { motion } from 'framer-motion'

const propositions = [
  'Equipo de especialistas en Diseño Curricular y RVOES.',
  'Resolvemos situaciones, contamos con convenios y vinculación.',
  'Servicio integral de acompañamiento para obtener su RVOE.',
  'Experiencia en Programas de Salud y obtención OTAF.',
  'Conocimiento de procesos estatales y municipales en 23 estados.',
  'Planes de trabajo innovadores para escuelas nuevas y consolidadas.',
]

export default function ValueProposition() {
  return (
    <section id="value" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold text-brand-dark mb-16 text-center"
        >
          Propuestas de Valor
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propositions.map((prop, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow-lg border-b-4 border-brand-dark"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            >
              <p className="text-lg font-medium text-brand-gray-dark h-full">
                {prop}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}