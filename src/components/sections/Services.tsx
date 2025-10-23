'use client'
import { motion, Variants } from 'framer-motion'
import { FaUniversity, FaScroll, FaClipboardCheck, FaFileSignature, FaLaptopCode, FaHeartbeat } from 'react-icons/fa'

const services = [
  { icon: FaUniversity, title: 'Incubadora de instituciones educativas' },
  { icon: FaScroll, title: 'Gestión de RVOE nacional e internacional' },
  { icon: FaClipboardCheck, title: 'Gestión para autorización (Acuerdo 286)' },
  { icon: FaFileSignature, title: 'Estructuración de planes y programas de estudio' },
  { icon: FaLaptopCode, title: 'Diseño institucional y plataforma (MOODLE)' },
  { icon: FaHeartbeat, title: 'Programas de salud y solicitudes OTA (CIFRHS)' },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: 'easeOut',
    },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold text-brand-dark mb-16 text-center"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="p-8 bg-brand-gray-lighter rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <service.icon className="text-5xl text-brand-dark mb-5" />
              <h3 className="font-display text-xl font-semibold text-brand-dark h-16">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}