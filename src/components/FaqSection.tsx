'use client';

import { useState } from 'react';

const faqs = [
  {
    pergunta: "Preciso ter experiência para me inscrever?",
    resposta: "Não. Nossos cursos são acessíveis mesmo para iniciantes, com materiais e apoio completos.",
  },
  {
    pergunta: "As aulas são presenciais ou online?",
    resposta: "Temos ambos os formatos. Verifique na descrição do curso ou entre em contato.",
  },
  {
    pergunta: "O certificado é reconhecido?",
    resposta: "Sim! O Senac é uma das instituições mais respeitadas do Brasil, com certificação válida em todo o país.",
  },
];

export const FaqSection = () => {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">Perguntas Frequentes</h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b pb-4">
              <button
                onClick={() => setAberta(aberta === i ? null : i)}
                className="w-full text-left font-semibold text-lg text-blue-700 flex justify-between items-center"
              >
                {faq.pergunta}
                <span>{aberta === i ? '−' : '+'}</span>
              </button>
              {aberta === i && (
                <p className="mt-2 text-sm text-gray-700">{faq.resposta}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
