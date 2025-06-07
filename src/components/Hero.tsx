'use client';

export const Hero = () => {
  return (
    <section className="relative bg-senacBlue text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-background.png')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-700">
          Transforme seu futuro com os cursos do Senac RN
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-900">
          Qualificação profissional de verdade, com estrutura de ponta e professores experientes.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#inscricao" className="bg-orange-600 hover:bg-orange-300 transition px-6 py-3 rounded-lg font-semibold">
            Quero me inscrever
          </a>
          <a href="https://ava.rn.senac.br" target="_blank" rel="noopener noreferrer" className="border border-white hover:bg-white hover:text-Blue-600 transition px-6 py-3 rounded-lg font-semibold text-blue-800">
            Acessar plataforma
          </a>
        </div>
      </div>
    </section>
  );
};
