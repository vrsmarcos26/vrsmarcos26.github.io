// components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useThemeLang } from "../context/ThemeLangContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, content } = useThemeLang();

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 bg-[var(--cor-fundo)] shadow-md z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo só em texto limpo */}
        <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl font-extrabold tracking-tight text-[var(--cor-texto)] group-hover:text-[var(--cor-primaria)] transition-colors">
                {content.navLogo}
            </span>
        </Link>

        {/* Links de Navegação */}
        <ul className="flex gap-8 font-semibold">
          <li>
            <Link href="/" className="hover:text-[var(--cor-primaria)] transition-colors">
              {content.navLinks.home}
            </Link>
          </li>
          <li>
            <Link href="/projetos" className="hover:text-[var(--cor-primaria)] transition-colors">
              {content.navLinks.projetos}
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-[var(--cor-primaria)] transition-colors">
              {content.navLinks.contato}
            </Link>
          </li>
        </ul>

        {/* Botões de Tema e Idioma */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="text-xl text-[var(--cor-secundaria)] hover:text-[var(--cor-primaria)] transition-transform hover:scale-110 cursor-pointer"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <div className="flex items-center gap-1 font-semibold text-[var(--cor-secundaria)]">
            <button
              onClick={() => setLang("pt_br")}
              className={`cursor-pointer transition-colors ${
                lang === "pt_br" ? "text-[var(--cor-primaria)] font-bold" : ""
              }`}
            >
              PT
            </button>
            <span>/</span>
            <button
              onClick={() => setLang("en")}
              className={`cursor-pointer transition-colors ${
                lang === "en" ? "text-[var(--cor-primaria)] font-bold" : ""
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}