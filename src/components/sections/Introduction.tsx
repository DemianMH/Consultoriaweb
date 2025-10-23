'use client'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

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
            Sobre Nosotros
          </h2>
          <div className="space-y-4 text-lg text-brand-gray-dark/90">
            <p>
              Somos una firma de consultoría pedagógica de alcance internacional, especializada en la innovación educativa y en soluciones integrales para la gestión y desarrollo curricular.
            </p>
            <p>
              Nuestra trayectoria inicia en 1998, consolidándonos formalmente en 2017. Con más de 80 instituciones educativas transformadas, nuestra experiencia abarca la creación de proyectos curriculares, la gestión de RVOE y la autorización de instituciones evaluadoras bajo el Acuerdo 286.
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
          <Image
            src="/consultoria-educacion.jpg"
            alt="Equipo de INAPECC en consultoría profesional"
            width={800}  // Ratio 16:9
            height={450} // Ratio 16:9
            className="w-full h-full object-cover" // Hará que la imagen llene el contenedor
          />
        </motion.div>
      </div>
    </motion.section>
  )
}