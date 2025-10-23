'use client'
import { motion } from 'framer-motion'
// Agregamos FaCalendarAlt y FaUsers
import { FaCalendarAlt, FaWhatsapp, FaUsers } from 'react-icons/fa'
// Ya no necesitamos Image aquí
// import Image from 'next/image' 

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
            {/* Moví el H3 aquí para que sea el título de la tarjeta */}
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              {/* --- INICIO DEL CAMBIO --- */}
              <div className="flex flex-col items-center text-center">
                <FaUsers className="text-4xl text-brand-accent mb-4" />
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-4">
                  Atención Personalizada
                </h3>
                <p className="text-brand-gray-dark/90 mb-6">
                  Un equipo de expertos está listo para atender tu consulta y resolver todas tus dudas.
                </p>
              </div>
              {/* --- FIN DEL CAMBIO --- */}
              
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
                <p className="font-semibold text-brand-gray-dark">
                  <span className="font-bold text-brand-dark">Correo:</span> contacto@inapecc.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}