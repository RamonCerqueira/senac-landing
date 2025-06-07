import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";


export const ContatoSection = () => {
  return (
    <section className="bg-orange-400 text-white py-20 px-6" id="contato">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Fale com a gente</h2>

        <div className="flex flex-col gap-4 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" /> atendimento@rn.senac.br
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> (84) 4005-1000
          </p>
          <p className="flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" /> (84) 98888-7777
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Av. Sen. Salgado Filho, Natal - RN
          </p>
        </div>

        <a
          href="https://wa.me/5584988887777"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold"
        >
          Fale agora no WhatsApp
        </a>
      </div>
    </section>
  );
};
