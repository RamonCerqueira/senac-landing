"use client";

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

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-senacBlue dark:text-white">
          <button onClick={() => scrollTo("cursos")} className="hover:text-senacYellow transition-colors">Cursos</button>
          <button onClick={() => scrollTo("inscricao")} className="hover:text-senacYellow transition-colors">Inscreva-se</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-senacYellow transition-colors">FAQ</button>
          <button onClick={() => scrollTo("contato")} className="hover:text-senacYellow transition-colors">Contato</button>
        </nav>

        {/* Botão mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2 text-senacBlue dark:text-white">
          <button onClick={() => scrollTo("cursos")} className="block w-full text-left py-2">Cursos</button>
          <button onClick={() => scrollTo("inscricao")} className="block w-full text-left py-2">Inscreva-se</button>
          <button onClick={() => scrollTo("faq")} className="block w-full text-left py-2">FAQ</button>
          <button onClick={() => scrollTo("contato")} className="block w-full text-left py-2">Contato</button>
        </div>
      )}
    </header>
  );
};

export default Header;
