import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/hero-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay escuro para destacar texto */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="max-w-3xl z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transforme seu futuro <br />
          com o <span className="text-senacOrange">Senac RN</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Cursos profissionais, tecnologia e inovação ao seu alcance.
        </p>
        <a
          href="#inscricao"
          className="bg-senacOrange hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
        >
          Inscreva-se agora
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
