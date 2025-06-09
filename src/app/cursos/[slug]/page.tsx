'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/HeaderPageCurso';


export default function DesenvolvimentoWebBasico() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  // Atualiza o estado do formulário conforme o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle para o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Substitua aqui pela chamada real da API
    alert('Interesse registrado com sucesso!');
    setForm({ nome: '', email: '', telefone: '' });
  };

  return (
  <>
    <Header title='Curso de Desenvolvimento Web Básico'/>
    <section className="min-h-screen bg-gradient-to-b from-[#0D3B66] to-[#144D79] py-12 px-6 md:px-16 text-white flex items-center">
         
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
       
        {/* Conteúdo textual e formulário */}
        <motion.div
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg mb-6">
            Curso de Desenvolvimento Web Básico
          </h1>

          <p className="text-[#CCE2F6] text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Aprenda os fundamentos da web moderna com <strong>HTML, CSS e JavaScript</strong>. 
            Crie páginas responsivas e publique seu primeiro projeto online. 
            <span className="text-orange-400 font-semibold"> Ideal para iniciantes!</span>
          </p>

          <ul className="list-disc pl-6 space-y-2 text-[#A9C4E6] mb-10 max-w-md">
            <li>✅ <strong>100% gratuito e certificado oficial Senac RN</strong></li>
            <li>✅ Aulas práticas e teóricas para absorção completa</li>
            <li>✅ Duração: 2 meses</li>
            <li>✅ Suporte via WhatsApp para dúvidas rápidas</li>
          </ul>

          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-md"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                📜 Certificado Oficial Senac RN
              </span>
              <span className="inline-block bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                🎓 100% Gratuito
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-5 text-white">Quero Me Inscrever</h3>

            {/* Campo Nome */}
            <div className="mb-4 text-black">
              <label htmlFor="nome" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                type="text"
                placeholder="Seu nome completo"
                required
                className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white focus:text-gray-900 transition"
              />
            </div>

            {/* Campo Email */}
            <div className="mb-4 text-black">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="exemplo@dominio.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white focus:text-gray-900 transition"
              />
            </div>

            {/* Campo Telefone */}
            <div className="mb-6 text-black">
              <label htmlFor="telefone" className="block text-sm font-medium mb-1">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                required
                className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white focus:text-gray-900 transition"
              />
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md transition"
            >
              Quero Me Inscrever Gratuitamente!
            </button>
          </form>
        </motion.div>

        {/* Imagem destaque */}
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/cursos/web.png" // Imagem representativa do curso
            alt="Curso de Desenvolvimento Web"
            width={700}
            height={450}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
    </>
  );
}
