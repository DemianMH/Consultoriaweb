import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-gray-light pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="font-display text-2xl font-bold text-white mb-4">INAPECC CONSULTORÍA</h4>
          <p className="text-sm text-brand-gray-medium mb-4">
            Evolucionamos tus ideas en innovación educativa y desarrollo curricular.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com/consultoriaeducativalNAPECC" target="_blank" rel="noopener noreferrer" className="text-brand-gray-light hover:text-brand-accent transition-colors duration-300">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://linkedin.com/in/consultoriaeducativainapecc" target="_blank" rel="noopener noreferrer" className="text-brand-gray-light hover:text-brand-accent transition-colors duration-300">
              <FaLinkedin size={24} />
            </Link>
            <a href="https://wa.me/5214421399717" target="_blank" rel="noopener noreferrer" className="text-brand-gray-light hover:text-brand-accent transition-colors duration-300">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-display text-xl font-semibold text-white mb-4">Navegación</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-brand-accent transition-colors duration-300">Nosotros</Link></li>
            <li><Link href="#services" className="hover:text-brand-accent transition-colors duration-300">Servicios</Link></li>
            <li><Link href="#advantages" className="hover:text-brand-accent transition-colors duration-300">Ventajas</Link></li>
            <li><Link href="#contact" className="hover:text-brand-accent transition-colors duration-300">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-display text-xl font-semibold text-white mb-4">Contáctanos</h5>
          <address className="not-italic text-sm space-y-3">
            <p className="text-brand-gray-medium">
              Av. Paseo de la Reforma 300, Col Juarez, Cuauhtemoc, Ciudad de México
            </p>
            <p>
              <a href="https://wa.me/5214421399717" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-300">
                WhatsApp: 442 139 9717
              </a>
            </p>
            <p>
              <a href="tel:5555333061" className="hover:text-brand-accent transition-colors duration-300">
                Oficina: 55 5533 3061
              </a>
            </p>
            <p>
              <a href="https://inapecc.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-300">
                contacto@inapecc.com
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-6 text-center border-t border-brand-gray-dark/50 mt-12 pt-8">
        <p className="text-sm text-brand-gray-medium">
          © {new Date().getFullYear()} INAPECC Consultoría Pedagógica. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}