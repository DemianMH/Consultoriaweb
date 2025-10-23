'use client'
import { motion, Variants } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'

const advantages = [
  'Amplia experiencia en la gestión de RVOE y procesos normativos nacionales e internacionales.',
  'Historial comprobable de RVOEs obtenidos y opiniones técnicas favorables (CIFRHS).',
  'Soporte integral para instituciones de nueva creación (manuales, reglamentos, estructura).',
  'Consultoría y acompañamiento, incluyendo capacitación Post-RVOE.',
  'Desarrollo de programas académicos innovadores y alineados a las tendencias globales.',
  'Expertise en la gestión del Acuerdo 286 para instituciones evaluadoras.',
  'Soluciones tecnológicas para plataformas educativas (LMS) conformes a la normativa SEP.',
]

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: 'easeOut',
    },
  }),
}

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="aspect-square bg-brand-gray-medium rounded-lg shadow-2xl overflow-hidden">
           <Image
            src="/equipo.jpg"
            alt="Equipo de INAPECC en sesión de trabajo"
            width={600} 
            height={600} 
            className="w-full h-full object-cover"
          />
          </div>
        </motion.div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-bold mb-8"
          >
            Ventajas Competitivas
          </motion.h2>
          <ul className="space-y-4">
            {advantages.map((adv, i) => (
              <motion.li
                key={i}
                className="flex items-start space-x-3"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <FaCheckCircle className="text-brand-accent-light text-xl flex-shrink-0 mt-1" />
                <span className="text-lg text-brand-gray-light">{adv}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}