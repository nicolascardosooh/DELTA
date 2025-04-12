"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { 
  FaSearch, 
  FaClock, 
  FaUserTie, 
  FaTags,
  FaBookOpen,
  FaCalculator,
  FaChartLine,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaHandshake
} from "react-icons/fa";

// Categorias do blog
const categories = [
  { name: "Contabilidade Básica", icon: FaBookOpen, color: "from-blue-400 to-sky-500" },
  { name: "Fiscal e Tributário", icon: FaCalculator, color: "from-sky-400 to-cyan-500" },
  { name: "Gestão Financeira", icon: FaChartLine, color: "from-cyan-400 to-teal-500" },
  { name: "Legislação", icon: FaBalanceScale, color: "from-teal-400 to-green-500" },
  { name: "Empreendedorismo", icon: FaHandshake, color: "from-green-400 to-emerald-500" },
];

// Artigos do blog
const blogPosts = [
  {
    id: 1,
    title: "Como escolher o regime tributário ideal para sua empresa?",
    excerpt: "Entenda as diferenças entre Simples Nacional, Lucro Presumido e Lucro Real...",
    category: "Fiscal e Tributário",
    author: "Maria Silva",
    date: "2024-03-15",
    readTime: "8 min",
    featured: true,
    image: "/images/blog/tributacao.jpg",
    tags: ["Tributação", "Planejamento Fiscal", "Gestão"],
  },
  {
    id: 2,
    title: "Guia completo sobre folha de pagamento",
    excerpt: "Tudo o que você precisa saber sobre cálculos, encargos e obrigações...",
    category: "Contabilidade Básica",
    author: "João Santos",
    date: "2024-03-14",
    readTime: "12 min",
    featured: true,
    image: "/images/blog/folha-pagamento.jpg",
    tags: ["RH", "Departamento Pessoal", "Legislação Trabalhista"],
  },
  // Adicione mais artigos aqui
];

// FAQ sobre contabilidade
const faqItems = [
  {
    question: "O que é o Simples Nacional?",
    answer: "O Simples Nacional é um regime tributário simplificado para micro e pequenas empresas...",
  },
  {
    question: "Qual a diferença entre Lucro Presumido e Lucro Real?",
    answer: "O Lucro Presumido é baseado em uma presunção de lucro determinada pelo governo...",
  },
  // Adicione mais perguntas aqui
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
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
              Blog{" "}
              <span className="relative inline-block">
                <span className="text-sky-600">Delta</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-600/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conhecimento e insights para impulsionar seu sucesso financeiro
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`relative p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 ${
                  selectedCategory === category.name ? 'ring-2 ring-sky-500' : ''
                }`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-full -mr-12 -mt-12`} />
                <category.icon className="text-2xl text-sky-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">{category.name}</p>
              </motion.button>
            ))}
          </div>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-sky-900 mb-8">Artigos em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaClock className="mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FaUserTie className="text-sky-600 mr-2" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <button className="text-sky-600 hover:text-sky-700 font-medium">
                        Ler mais →
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-sky-900 mb-8">Perguntas Frequentes</h2>
            <div className="grid gap-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-sky-900 to-sky-800 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Receba nossos artigos em primeira mão
            </h2>
            <p className="text-sky-100 mb-6">
              Inscreva-se para receber as últimas novidades e insights sobre contabilidade e finanças
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300">
                Inscrever-se
              </button>
              </div>
          </motion.section>

          {/* Recent Posts Grid */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-sky-900 mb-8">Artigos Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-sky-600 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <FaClock className="mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center">
                        <FaUserTie className="mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-sky-50 text-sky-600 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-sky-600 hover:text-sky-700 font-medium flex items-center">
                      Ler mais
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Topics Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-sky-900 mb-8">Tópicos Populares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Contabilidade para Iniciantes",
                  topics: [
                    "Princípios básicos de contabilidade",
                    "Como ler demonstrações financeiras",
                    "Plano de contas",
                    "Lançamentos contábeis",
                  ]
                },
                {
                  title: "Gestão Fiscal",
                  topics: [
                    "Planejamento tributário",
                    "Impostos e contribuições",
                    "Obrigações acessórias",
                    "Benefícios fiscais",
                  ]
                },
                {
                  title: "Gestão Financeira",
                  topics: [
                    "Fluxo de caixa",
                    "Análise de investimentos",
                    "Controle de custos",
                    "Indicadores financeiros",
                  ]
                },
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-sky-900 mb-4">{topic.title}</h3>
                  <ul className="space-y-3">
                    {topic.topics.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600 hover:text-sky-600 cursor-pointer">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-sky-900 mb-4">
              Precisa de ajuda com sua contabilidade?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar você a 
              encontrar as melhores soluções para seu negócio.
            </p>
            <a
              href="/contato"
              className="inline-flex items-center px-8 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Fale com um especialista
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.section>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </main>
    </div>
  );
}
            
