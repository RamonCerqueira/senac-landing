'use client'
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Map,
  Navigation,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

export const ContatoSection = () => {
  const endereco = "Av. Sen. Salgado Filho, Natal - RN";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
  const uberUrl = `https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=${encodeURIComponent(endereco)}`;

  const embedMapUrl =
    "https://www.google.com/maps?q=Av.+Sen.+Salgado+Filho,+Natal+-+RN&output=embed";

  return (
    <section className="bg-orange-400 text-white py-16 px-6" id="contato">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Fale com a gente</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Esquerda: Mapa */}
          <div className="w-full h-64 md:h-72 rounded-md overflow-hidden shadow-md">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-none"
            ></iframe>
          </div>

          {/* Direita: Contatos + QR */}
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> atendimento@rn.senac.br
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> (84) 4005-1000
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> (84) 98888-7777
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {endereco}
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href={mapsUrl}
                target="_blank"
                className="bg-white text-orange-500 px-4 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-orange-100"
              >
                <Navigation className="w-4 h-4" /> Ver no Maps
              </a>
              <a
                href={uberUrl}
                target="_blank"
                className="bg-white text-orange-500 px-4 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-orange-100"
              >
                <Map className="w-4 h-4" /> Chamar Uber
              </a>
            </div>

            {/* QR Code sem fundo branco */}
            {/* <div className="mt-6 p-2 rounded-lg w-fit mx-auto shadow-md">
              <p className="text-center font-semibold mb-2">Escaneie para abrir no Uber</p>
              <QRCodeCanvas
                value={uberUrl}
                size={128}
                bgColor="transparent"
                fgColor="#ffffff"
                includeMargin={true}
              />
            </div> */}

            <a
              href="https://wa.me/5584988887777"
              target="_blank"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold"
            >
              Fale agora no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};