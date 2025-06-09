'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import clsx from "clsx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Senac_logo.png"
            alt="Senac RN"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <button onClick={() => scrollTo("cursos")} className="hover:text-senacOrange transition-colors">Cursos</button>
          <button onClick={() => scrollTo("inscricao")} className="hover:text-senacOrange transition-colors">Inscreva-se</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-senacOrange transition-colors">FAQ</button>
          <button onClick={() => scrollTo("contato")} className="hover:text-senacOrange transition-colors">Contato</button>

          {/* Botão AVA */}
          <Link
            href="/ModalLogin"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-orange-600 transition-colors"
          >
            Entrar no AVA
          </Link>
        </nav>

        {/* Botão Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-blue-700">
          <button onClick={() => scrollTo("cursos")} className="block w-full text-left py-2">Cursos</button>
          <button onClick={() => scrollTo("inscricao")} className="block w-full text-left py-2">Inscreva-se</button>
          <button onClick={() => scrollTo("faq")} className="block w-full text-left py-2">FAQ</button>
          <button onClick={() => scrollTo("contato")} className="block w-full text-left py-2">Contato</button>

          {/* Botão AVA Mobile */}
          <Link
            href="/ModalLogin"
            className="block w-full text-center py-2 text-white bg-orange-600 rounded mt-2"
          >
            Entrar no AVA
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
