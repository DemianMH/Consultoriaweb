'use client'
import { motion, Variants } from 'framer-motion'
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
}

const aboutItems = [
  {
    icon: FaBullseye,
    title: 'Misión',
    text: 'Elevar la calidad educativa que ofrecen las instituciones mediante el diseño de currículos innovadores y gestión eficiente de procesos solicitud de RVOE.',
  },
  {
    icon: FaEye,
    title: 'Visión',
    text: 'Ser la consultora líder en diseño curricular y gestión de RVOE en el 2026, reconocida por nuestra capacidad de innovar y transformar la educación en México.',
  },
  {
    icon: FaHandshake,
    title: 'Compromiso',
    text: 'Colaborar con nuestros clientes con estrategias eficientes para desarrollar programas académicos que cumplan con los más altos estándares de excelencia.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-gray-lighter">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold text-brand-dark mb-6 text-center"
        >
          Nuestra Firma
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-brand-gray-dark/90 text-center max-w-3xl mx-auto mb-16"
        >
          Constituidos el 13 de junio de 2017 en Querétaro, actualmente nos encontramos en 23 estados de la República Mexicana, brindando asesoría y consultoría a instituciones educativas y empresas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-accent"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <item.icon className="text-4xl text-brand-accent mb-4" />
              <h3 className="font-display text-2xl font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-brand-gray-dark/90">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}