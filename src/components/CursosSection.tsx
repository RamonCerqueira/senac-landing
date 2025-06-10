'use client'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Curso {
  nome: string;
  slug: string;
  descricao: string;
  imagem: string;
  detalhes: string;
}

const cursos = [
  {
    nome: "Programador Web",
    slug: "devWeb",
    descricao: "HTML, CSS, JavaScript, React e mais.",
    detalhes: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    imagem: "/cursos/1.jpg",
  },
  {
    nome: "Design Gráfico",
    slug: "DGrafico",
    descricao: "Criação visual, Photoshop, Illustrator.",
    detalhes: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    imagem: "/cursos/5.jpg",
  },
  {
    nome: "Gastronomia",
    slug: "gastronomia",
    descricao: "Cozinha prática e profissional.",
    detalhes: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    imagem: "/cursos/3.jpg",
  },
  {
    nome: "Atendente de Farmácia",
    slug: "atFarma",
    descricao: "Treinamento técnico e humanizado.",
    detalhes: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    imagem: "/cursos/7.jpg",
  },
  {
    nome: "Auxiliar Administrativo",
    slug: "auxAdm",
    descricao: "Organização, rotinas e gestão.",
    detalhes: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    imagem: "/cursos/8.jpg",
  },
  {
    nome: "Manutenção de Computadores",
    slug: "ManPC",
    descricao: "Hardware, software e redes básicas.",
    detalhes: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    imagem: "/cursos/4.jpg",
  },
  {
    nome: "Logística",
    slug: "log",
    descricao: "Gestão de estoque e transportes.",
    detalhes: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    imagem: "/cursos/2.jpg",
  },
  {
    nome: "Marketing Digital",
    slug: "MktDig",
    descricao: "Redes sociais, tráfego e vendas.",
    detalhes: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    imagem: "/cursos/6.jpg",
  },
];

const CursosSection = () => {

  const [cursoSelecionado, setCursoSelecionado] = useState<Curso | null>(null);
  const [abrirInscricao, setAbrirInscricao] = useState(false);

  const abrirModalCurso = (curso: Curso) => setCursoSelecionado(curso);
  const fecharModalCurso = () => setCursoSelecionado(null);

  const abrirModalInscricao = () => {
    fecharModalCurso();
    setAbrirInscricao(true);
  };

  const fecharModalInscricao = () => setAbrirInscricao(false);
  const router = useRouter();


  return (
    <section id="cursos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-14">
          Cursos em Destaque
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cursos.map((curso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <Image
                src={curso.imagem}
                alt={curso.nome}
                width={400}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-700 mb-2">
                  {curso.nome}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{curso.descricao}</p>
                <button
                  onClick={() => abrirModalCurso(curso)}
                  className="text-orange-700 font-semibold text-sm hover:underline"
                >
                  Saiba mais
                </button>
                <button
                  onClick={() => router.push(`/cursos/${curso.slug}`)}
                  className="text-blue-600 px-4 text-sm mt-2 hover:underline"
                >
                  Página do curso
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes */}
      {cursoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
            <button
              onClick={fecharModalCurso}
              className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-Blue-600 mb-3">
              {cursoSelecionado.nome}
            </h3>
            <Image
              src={cursoSelecionado.imagem}
              alt={cursoSelecionado.nome}
              width={400}
              height={200}
              className="rounded-md mb-4"
            />
            <p className="text-gray-700 text-sm mb-6">{cursoSelecionado.detalhes}</p>
            <button
              onClick={abrirModalInscricao}
              className="bg-orange-700 text-white py-2 px-4 rounded-md hover:bg-orange-300 transition"
            >
              Fazer inscrição
            </button>
            
            <button
              onClick={() => router.push(`/cursos/${cursoSelecionado?.slug}`)}
              className="ml-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-300 transition"
            >
              Ver página do curso
            </button>
            
          </div>
        </div>
      )}

      {/* Modal de Inscrição */}
      {abrirInscricao && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
            <button
              onClick={fecharModalInscricao}
              className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-Blue-600 mb-4">
              Inscreva-se no curso
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 font-semibold mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 font-semibold mb-1">
                  Curso selecionado
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 bg-gray-100"
                  value={cursoSelecionado?.nome || ""}
                  readOnly
                />
              </div>

              <button
                type="submit"
                className="w-full bg-Orange-700 text-white py-2 rounded hover:bg-orange-300 transition"
              >
                Enviar inscrição
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CursosSection;
