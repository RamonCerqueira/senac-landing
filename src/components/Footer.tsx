// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold">Senac RN</h2>
          <p className="text-sm mt-2">
            Transformando vidas através da educação profissional.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Links úteis</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li><a href="#cursos" className="hover:underline">Cursos</a></li>
            <li><a href="#inscricao" className="hover:underline">Inscreva-se</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Redes sociais</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">WhatsApp</a>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-sm opacity-80">© 2025 Senac RN. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;