'use client'
import { motion, Variants } from 'framer-motion'

// 1. Aquí está tu lista de clientes, limpiada y formateada
const clients = [
  { name: 'Asociación Mexicana de Profesionales Inmobiliarios (AMPI)', location: 'Ciudad de México' },
  { name: 'Universidad Cuauhtemoc', location: 'Querétaro' },
  { name: 'Centro Universitario UNIVERSAE', location: 'Ciudad de México' },
  { name: 'Centro de capacitación y estudios odontológicos', location: 'Mazatlán, Sinaloa' },
  { name: 'Centro evaluador y de capacitación especializada S.C.P.', location: 'Mérida, Yucatán' },
  { name: 'Colegiado internacional de profesionalización', location: 'Tuxtla Gutiérrez, Chiapas' },
  { name: 'Universidad cultural de latinoamérica "UCLA"', location: 'Amozoc, Puebla' },
  { name: 'Centro de posgrados especializados ICAEEP', location: 'Veracruz' },
  { name: 'Centro universitario latinoamericana del pacifico', location: 'Huixtla, Chiapas' },
  { name: 'Centro educativo Lama', location: 'Tecamac, Estado de México' },
  { name: 'Centro Universitario Felipe Carrillo Puerto', location: 'Mérida, Yucatán' },
  { name: 'Fomentos para Estudiantes Innova Veracruz A.C.', location: 'Puerto Veracruz' },
  { name: 'Centro de estudios superiores del sur de Sinaloa', location: 'Mazatlán, Sinaloa' },
  { name: 'Asociación nacional de maestras y especialistas en enfermería y tanatología', location: 'Mazatlán, Sinaloa' },
  { name: 'Centro de especialización y posgrado del valle', location: 'Orizaba, Veracruz' },
  { name: 'INDECAJ', location: 'Ciudad de México' },
  { name: 'Centro pluricultural de estudios superiores', location: 'Chihuahua' },
  { name: 'Centro educativo michel faraday', location: 'Ciudad de México' },
  { name: 'Centro universitario unaep', location: 'Tuxtla Gutiérrez' },
  { name: 'Centro educativo komesky', location: 'Puerto Vallarta, Jalisco' },
  { name: 'Andel san luis promotores de la educación s.c.', location: 'Ciudad Juárez' },
  { name: 'Multidiversidad Mundo Sin Fronteras', location: 'Oaxaca' },
  { name: 'Centro de estudios florence nightingale', location: 'Tijuana' },
  { name: 'Centro universitario everest', location: 'Mazatlán, Sinaloa' },
  { name: 'Centro de Bachillerato Northwest', location: 'Sonora' },
  { name: 'Grupo Servicios Educativos Torres Félix S.C.', location: 'Villahermosa, Tabasco' },
  { name: 'Nuevo Colegio de Gobierno y Administración Publica S.C.', location: 'Ciudad de México' },
  { name: 'Centro Educativo Lafayette', location: 'Ciudad del Carmen, Campeche' },
  { name: 'Centro Educativo CESLA', location: 'Ocampo, Guanajuato' },
  { name: 'Centro Universitario Interoceánico S.C.', location: 'Matias Romero, Oaxaca' },
  { name: 'UNT México', location: 'México' },
  { name: 'INSTITUTO EUROAMERICANO DE OAXACA A.C.', location: 'Oaxaca' },
  { name: 'Grupo Educativo Holandes', location: 'Oaxaca' },
  { name: 'Grupo educativo del Golfo', location: 'Ciudad del Carmen' },
  { name: 'Universidad del Pacifico Norte', location: 'Sinaloa' },
  { name: 'CETACYS', location: 'Ciudad de México' },
  { name: 'Colegio Nueva Laguna', location: 'Coahuila' },
  { name: 'Centro universitario Antequera', location: 'Oaxaca' },
  { name: 'CENTRO UNIVERSITARIO IESKA', location: 'Oaxaca' },
  { name: 'EDU PUEBLA', location: 'Puebla' },
]

// Animación para cada item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05, // Un pequeño delay escalonado
      ease: 'easeOut'
    }
  })
}

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
          {/* 2. Título actualizado */}
          Instituciones que Confían en Nosotros
        </motion.h2>
        
        {/* 3. Contenedor de columnas */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              className="p-4 mb-4 bg-brand-gray-lighter rounded-lg break-inside-avoid" // break-inside-avoid evita que se corten a la mitad
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={itemVariants}
            >
              <h3 className="font-display text-lg font-semibold text-brand-dark">
                {client.name}
              </h3>
              <p className="text-sm text-brand-gray-dark/80">{client.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}