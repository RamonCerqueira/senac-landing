'use client';

import { useState } from 'react';

export const InscricaoForm = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    curso: '',
  });

  const cursosDisponiveis = [
    "Auxiliar Administrativo",
    "Programador Web",
    "Design Gráfico",
    "Atendente de Farmácia",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscrição enviada com sucesso!');
  };

  return (
    <section
      id="inscricao"
      className="relative min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center px-6"
      style={{ backgroundImage: "url('/inscricao.jpeg')" }}
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Formulário alinhado à esquerda */}
      <div className="relative z-10 max-w-lg w-full bg-white bg-opacity-90 rounded-xl p-8 shadow-lg text-left">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Faça sua inscrição</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1 text-sm">Nome completo</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-orange-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-sm">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-orange-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-sm">Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-orange-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-sm">Curso de interesse</label>
            <select
              name="curso"
              value={form.curso}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-orange-700 focus:outline-none"
            >
              <option value="">Selecione...</option>
              {cursosDisponiveis.map((curso, idx) => (
                <option key={idx} value={curso}>
                  {curso}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition"
          >
            Enviar inscrição
          </button>
        </form>
      </div>
    </section>
  );
};
