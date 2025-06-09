import Header from "@/components/Header";
import CursosSection from "@/components/CursosSection";
import { FaqSection } from "@/components/FaqSection";
import { ContatoSection } from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import ModalLogin from "@/components/ModalLogin";
import ThemeToggle from "@/components/ThemeToggle";
import { InscricaoForm } from "@/components/Inscricao";
import { Hero } from "@/components/Hero";
import { DepoimentosSection } from "@/components/Depoimento";
import { DiferenciaisSection } from "@/components/DiferenciaisSection";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Header />
      <Hero />
      <CursosSection />
      <InscricaoForm />
      <DiferenciaisSection />
      <DepoimentosSection />
      <FaqSection />
      <ContatoSection />
      <Footer />
      <WhatsappButton />
      <ModalLogin />
      {/* <ThemeToggle /> */}
    </main>
  );
}