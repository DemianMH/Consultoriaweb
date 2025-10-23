'use client'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-gray-lighter">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold text-brand-dark mb-16 text-center"
        >
          Contáctanos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl font-bold text-brand-dark mb-6 text-center">
              Agenda una Consulta
            </h3>
            <p className="text-center text-lg text-brand-gray-dark/90 mb-8">
              Haz clic en el botón para ver nuestra disponibilidad y reservar tu consultoría directamente en nuestro calendario.
            </p>
            <motion.a
              href="https://calendly.com/agendaconsultoriainapecc/agenda-tu-consultoria-incubadora-para-escuelas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-md mx-auto px-6 py-4 bg-brand-dark text-white font-bold rounded-md shadow-lg transition-all duration-300 hover:bg-brand-dark/90 flex items-center justify-center space-x-3"
            >
              <FaCalendarAlt size={20} />
              <span>Agendar en Calendly</span>
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="font-display text-2xl font-bold text-brand-dark mb-6">
              Atención Personalizada
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-6">
                
                <div className="w-24 h-24 rounded-full bg-brand-gray-medium flex-shrink-0 overflow-hidden">
                  <Image
                    src="/persona.png"
                    alt="Foto de Lic. Moisés Bello Serrano"
                    width={96}
                    height={96}
                    className="w-full h-full "
                  />
                </div>

                <div>
                  <h4 className="font-display text-xl font-bold text-brand-dark">
                    Lic. Moisés Bello Serrano
                  </h4>
                  <p className="text-brand-accent font-semibold mb-2">
                    Pedagogo, UNAM
                  </p>
                  <p className="text-brand-gray-dark/90">
                    Con 30 años de experiencia en el sector educativo.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-brand-gray-light mt-6 pt-6 space-y-4">
                <p className="font-semibold text-brand-gray-dark">
                  <span className="font-bold text-brand-dark">Dirección:</span> Av. Paseo de la Reforma 300, Col Juarez, Cuauhtemoc, Ciudad de México
                </p>
                
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-brand-dark flex-shrink-0">WhatsApp:</span>
                  <a
                    href="https://wa.me/5214421399717"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-dark text-white rounded-md text-sm font-bold shadow-sm hover:bg-brand-dark/80 transition-colors"
                  >
                    <FaWhatsapp />
                    <span>442 139 9717</span>
                  </a>
                </div>

                <p className="font-semibold text-brand-gray-dark">
                  <span className="font-bold text-brand-dark">Oficina:</span> 55 5533 3061
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}