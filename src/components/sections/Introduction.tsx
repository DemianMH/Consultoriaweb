'use client'
import { motion, Variants } from 'framer-motion'

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Introduction() {
  return (
    <motion.section
      id="introduction"
      className="py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">
            Introducción
          </h2>
          <div className="space-y-4 text-lg text-brand-gray-dark/90">
            <p>
              Somos una firma de consultoría especializada con la experiencia pedagógica en innovación educativa en soluciones de gestión y desarrollo curricular.
            </p>
            <p>
              Nuestra historia se remonta a 1998, y a partir del 13 de junio de 2017, surgimos como empresa constituida "Consultoría en Innovación Pedagógica y Certificaciones Profesionales S.C." en Querétaro.
            </p>
            <p>
              A través de nuestra experiencia, hemos ayudado a más de 80 Instituciones Educativas a obtener sus proyectos curriculares.
            </p>
          </div>
        </div>
        <motion.div
          className="rounded-lg bg-brand-gray-light p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="aspect-video bg-brand-gray-medium rounded flex items-center justify-center">
            <p className="text-brand-dark">Aquí foto profesional del equipo o instalaciones</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}