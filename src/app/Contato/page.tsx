"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";
import GoogleMaps from "@/components/GoogleMaps";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "contabilidade"
  });

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "Telefone",
      info: "+55 51 XXXX-XXXX",
      action: "tel:+555199999999",
      color: "from-blue-400 to-sky-500"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      info: "+55 51 99262-4198",
      action: "https://wa.me/5551992624198",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: FaEnvelope,
      title: "E-mail",
      info: "contato@delta.com.br",
      action: "mailto:contato@delta.com.br",
      color: "from-sky-400 to-cyan-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Endereço",
      info: "BR-386, km 411 - Vendilhão, Triunfo - RS",
      action: "https://maps.google.com",
      color: "from-red-400 to-pink-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Implementar a lógica de envio do formulário
      // Exemplo: API call, envio de email, etc.
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso!');
        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          service: "contabilidade"
        });
      }
    } catch (error) {
      // Tratar erro
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <main className="relative pt-32 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1e4493 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl font-bold text-sky-900 mb-6">
              Entre em{" "}
              <span className="relative inline-block">
                <span className="text-sky-600">Contato</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-600/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Estamos prontos para ajudar você e sua empresa a alcançar o próximo nível
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.a
                href={contact.action}
                target={contact.icon === FaMapMarkerAlt ? "_blank" : undefined}
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${contact.color} opacity-10 rounded-full -mr-12 -mt-12`} />
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} text-white mb-4`}>
                  <contact.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-600 group-hover:text-sky-600 transition-colors duration-300">
                  {contact.info}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de interesse
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="contabilidade">Contabilidade</option>
                    <option value="fiscal">Consultoria Fiscal</option>
                    <option value="trabalhista">Departamento Pessoal</option>
                    <option value="consultoria">Consultoria Empresarial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300"
                >
                  Enviar mensagem
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-sky-100 rounded-lg">
                    <FaClock className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Horário de Atendimento
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between text-gray-600">
                    <span>Segunda - Sexta</span>
                    <span>08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between text-gray-600">
                    <span>Sábado</span>
                    <span>Fechado</span>
                  </li>
                  <li className="flex justify-between text-gray-600">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Redes Sociais
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-full
                    bg-gray-100 hover:bg-sky-100 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6 text-sky-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-sky-100 transition-colors duration-300"
                  >
                    <FaInstagram className="w-6 h-6 text-sky-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-sky-100 transition-colors duration-300"
                  >
                    <FaFacebookF className="w-6 h-6 text-sky-600" />
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Quanto tempo leva para obter uma resposta?
                    </h4>
                    <p className="text-gray-600">
                      Respondemos todas as mensagens em até 24 horas úteis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Vocês atendem em outras cidades?
                    </h4>
                    <p className="text-gray-600">
                      Sim, prestamos serviços para empresas em todo o território nacional.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Como funciona a primeira consultoria?
                    </h4>
                    <p className="text-gray-600">
                      Agendamos uma reunião inicial gratuita para entender suas necessidades e apresentar nossas soluções.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
          <GoogleMaps />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-sky-900 mb-4">
              Precisa de atendimento imediato?
            </h2>
            <p className="text-gray-600 mb-8">
              Entre em contato via WhatsApp e receba atendimento prioritário
            </p>
            <a
              href="https://wa.me/5551992624198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="w-6 h-6 mr-2" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </main>
    </div>
  );
}
