'use client'
import { motion } from 'framer-motion'

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
          >
            <h3 className="font-display text-2xl font-bold text-brand-dark mb-6">
              Agenda una Consulta
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray-dark">Nombre</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-brand-gray-medium rounded-md shadow-sm focus:ring-brand-dark focus:border-brand-dark" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gray-dark">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-brand-gray-medium rounded-md shadow-sm focus:ring-brand-dark focus:border-brand-dark" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray-dark">Mensaje</label>
                <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-brand-gray-medium rounded-md shadow-sm focus:ring-brand-dark focus:border-brand-dark"></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-brand-dark text-white font-bold rounded-md shadow-lg transition-all duration-300 hover:bg-brand-dark/90"
                >
                  Enviar Mensaje
                </motion.button>
              </div>
            </form>
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
                <div className="w-24 h-24 rounded-full bg-brand-gray-medium flex-shrink-0 flex items-center justify-center">
                    <p className="text-xs text-brand-dark">Aquí foto de la persona</p>
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
              
              <div className="border-t border-brand-gray-light mt-6 pt-6 space-y-3">
                <p className="font-semibold text-brand-gray-dark">
                  <span className="font-bold text-brand-dark">Dirección:</span> Av. Insurgentes Sur 428 Piso 4, Col Roma Sur, Cuauhtemoc CDMX
                </p>
                <p className="font-semibold text-brand-gray-dark">
                  <span className="font-bold text-brand-dark">Teléfonos:</span> 442 139 9717 | 55 975 917 20
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}