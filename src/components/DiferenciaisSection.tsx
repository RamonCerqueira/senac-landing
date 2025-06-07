export const DiferenciaisSection = () => {
    const itens = [
      {
        titulo: "Tradição e Qualidade",
        texto: "Mais de 70 anos formando profissionais em todo o Brasil com excelência.",
      },
      {
        titulo: "Certificação Reconhecida",
        texto: "Diploma com aceitação nacional, valorizado no mercado de trabalho.",
      },
      {
        titulo: "Professores Especialistas",
        texto: "Aulas com quem realmente entende do assunto e atua na área.",
      },
      {
        titulo: "Infraestrutura Completa",
        texto: "Ambientes modernos, laboratórios atualizados e tecnologia de ponta.",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-20 px-6" id="diferenciais">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-senacBlue mb-12">Por que escolher o Senac RN?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itens.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold text-senacOrange mb-2">{item.titulo}</h3>
                <p className="text-gray-700 text-sm">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  