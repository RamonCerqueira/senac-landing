'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Depoimento = {
  nome: string;
  curso: string;
  texto: string;
};

const depoimentos: Depoimento[] = [
  {
    nome: "Jéssica Souza",
    curso: "Design Gráfico",
    texto: "Estudar no Senac foi transformador. Aprendi com professores experientes e já estou trabalhando na área!",
  },
  {
    nome: "Carlos Eduardo",
    curso: "Programador Web",
    texto: "O curso foi direto ao ponto e muito prático. Saí pronto para o mercado.",
  },
  {
    nome: "Marina Oliveira",
    curso: "Atendente de Farmácia",
    texto: "A estrutura do Senac é excelente e o suporte dos tutores fez toda diferença pra mim.",
  },
];

export const DepoimentosSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % depoimentos.length);
  const prev = () => setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);

  const depo = depoimentos[index];

  return (
    <section className="bg-blue-400 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">O que dizem nossos alunos</h2>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-shadow-blue-600 text-blue-600 rounded-xl p-8 shadow-lg"
        >
          <p className="text-lg italic mb-4">{depo.texto}</p>
          <p className="font-bold">{depo.nome}</p>
          <p className="text-sm text-senacOrange">{depo.curso}</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-8">
          <button onClick={prev} className="text-white hover:text-orange-300 text-xl">←</button>
          <button onClick={next} className="text-white hover:text-orange-300 text-xl">→</button>
        </div>
      </div>
    </section>
  );
};
