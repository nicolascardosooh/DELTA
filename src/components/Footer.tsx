"use client";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram,
  FaClock
} from 'react-icons/fa';
import GoogleMaps from "./GoogleMaps";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white mt-50">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-95%]">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-gray-900"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/logo M F.jpg" 
                alt="Delta Logo" 
                width={50} 
                height={50}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                DELTA
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
            Escritório de Contabilidade Atendimento Presencial e Online Seg. à Sex. 8 as 17h
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-colors">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-colors">
                <FaLinkedinIn className="text-white" />
              </a>
              <a href="https://www.instagram.com/deltarscontabilidade/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-colors">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-sky-400">Links Rápidos</h4>
            <ul className="space-y-3">
                <li>
                  <Link 
                    href={""}
                    className="text-gray-400 hover:text-sky-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href={"A-DELTA"}
                    className="text-gray-400 hover:text-sky-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                    <span>A Delta</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href={"Clientes"}
                    className="text-gray-400 hover:text-sky-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                    <span>Clientes</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href={"Servicos"}
                    className="text-gray-400 hover:text-sky-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                    <span>Serviços</span>
                  </Link>
                </li>
              
                
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-sky-400">Contatos</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                <FaWhatsapp className="text-green-400" />
                <a href="https://wa.me/5551992624198" target="_blank" rel="noopener noreferrer">
                 Triunfo +55 (51) 99262-4198
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                <FaWhatsapp className="text-green-400" />
                <a href="https://wa.me/5551993686435" target="_blank" rel="noopener noreferrer">
                  Gen. Câmara +55 (51) 99368-6435
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 hover:text-sky-400 transition-colors">
                <FaEnvelope className="text-sky-400" />
                <a href="mailto:email">email@delta.com</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaClock className="text-sky-400" />
                <span>Seg - Sex: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-sky-400">Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-sky-400 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  BR-386, km 411 - Vendilhão,<br />
                  Triunfo - RS, 95780-000
                </address>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-sky-400 mt-1 flex-shrink-0" />
                <address className="not-italic">
                R. Visc. de Itaboraí, 359,<br />
                Gen. Câmara, RS, 95820-000
                </address>
              </div>
              <div className="h-48 rounded-lg overflow-hidden">
                <GoogleMaps />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Delta. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <p className="hover:text-sky-400 transition-colors">Política de Privacidade</p>
              <p className="hover:text-sky-400 transition-colors">Termos de Uso</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
