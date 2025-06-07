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

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <Hero />
      <CursosSection />
      <InscricaoForm />
      <DepoimentosSection />
      <FaqSection />
      <ContatoSection />
      <Footer />
      <WhatsappButton />
      <ModalLogin />
      <ThemeToggle />
    </main>
  );
}