// components/Hero.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useThemeLang } from "../context/ThemeLangContext";
import { FaLinkedin, FaGithub, FaTerminal, FaShieldAlt, FaDownload } from "react-icons/fa";
import CyberCube3D from "./CyberCube3D";

export default function Hero() {
  const { content, lang } = useThemeLang();
  const subtitles: string[] = content.heroTypingSubtitles || [];

  const [currentText, setCurrentText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subtitles.length === 0) return;

    const currentSubtitle = subtitles[subtitleIndex];
    const typingSpeed = isDeleting ? 45 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentSubtitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentSubtitle.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setCurrentText(currentSubtitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, subtitleIndex, subtitles]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Fundo Cibernético 3D Interativo */}
      <CyberCube3D />

      {/* Luz difusa de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--cor-primaria)]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="text-center md:text-left max-w-2xl flex-1">
          {/* Legenda de Status / Perfil */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--cor-primaria)]/10 text-[var(--cor-primaria)] border border-[var(--cor-primaria)]/25 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--cor-primaria)] animate-pulse" />
            <FaTerminal className="text-sm" />
            <span>PURPLE TEAM & FULL-STACK DEV</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-[var(--cor-texto)]">
            {lang === "en" ? "Hi, I'm" : "Olá, sou"} <br className="hidden sm:block" />
            <span className="text-[var(--cor-primaria)] drop-shadow-sm">
              Marcos Vinícius
            </span>
          </h1>

          {/* Efeito Máquina de Escrever */}
          <div className="text-xl sm:text-2xl md:text-3xl font-bold min-h-[2.5rem] mb-6 text-[var(--cor-texto)]/90 flex items-center justify-center md:justify-start gap-1">
            <span>{currentText}</span>
            <span className="inline-block w-2 h-6 bg-[var(--cor-primaria)] animate-pulse" />
          </div>

          <p className="text-base sm:text-lg text-[var(--cor-secundaria)] leading-relaxed mb-10 max-w-xl">
            {content.heroDescription}
          </p>

          {/* Ações e Botões */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="/contato"
              className="px-8 py-4 rounded-xl bg-[var(--cor-primaria)] text-white font-bold text-base shadow-lg shadow-[var(--cor-primaria)]/25 hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
            >
              {content.heroButtonContact}
            </Link>

            {/* Botão de Download de CV (Com Dropdown para Cibersegurança e Dev) */}
            <div className="relative group inline-block">
              <button
                type="button"
                className="px-7 py-4 rounded-xl border-2 border-[var(--cor-borda)] bg-[var(--cor-card)]/50 hover:border-[var(--cor-primaria)] hover:text-[var(--cor-primaria)] text-[var(--cor-texto)] font-bold text-base flex items-center gap-2.5 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <FaDownload className="text-lg" />
                <span>{content.heroButtonCV || (lang === "en" ? "Download Resume" : "Baixar CV")}</span>
              </button>

              <div className="absolute left-0 mt-2 w-64 p-2 rounded-2xl bg-[var(--cor-card)] border border-[var(--cor-borda)] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col gap-1">
                <a
                  href={content?.cvLinks?.cyber || "/Cyber (PT).pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[var(--cor-texto)] hover:bg-[var(--cor-primaria)]/10 hover:text-[var(--cor-primaria)] transition-colors text-left block"
                >
                  {lang === "en" ? "CV - Cybersecurity / Purple Team" : "CV - Cibersegurança / Purple Team"}
                </a>
                <a
                  href={content?.cvLinks?.dev || "/Dev (PT).pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[var(--cor-texto)] hover:bg-[var(--cor-primaria)]/10 hover:text-[var(--cor-primaria)] transition-colors text-left block"
                >
                  {lang === "en" ? "CV - Full-Stack Developer" : "CV - Desenvolvedor Full-Stack"}
                </a>
              </div>
            </div>

            <a
              href={content.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl border-2 border-[var(--cor-borda)] bg-[var(--cor-card)]/50 hover:border-[var(--cor-primaria)] hover:text-[var(--cor-primaria)] text-[var(--cor-texto)] font-bold text-base flex items-center gap-2.5 transition-all duration-300 backdrop-blur-sm"
            >
              <FaLinkedin className="text-xl" />
              <span>{content.heroButtonLinkedin}</span>
            </a>

            <a
              href={content.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border-2 border-[var(--cor-borda)] bg-[var(--cor-card)]/50 hover:border-[var(--cor-primaria)] hover:text-[var(--cor-primaria)] text-[var(--cor-texto)] transition-all duration-300 backdrop-blur-sm"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>

        {/* Moldura de Perfil */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--cor-primaria)] to-transparent opacity-30 blur-md scale-105 animate-pulse" />

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-[var(--cor-primaria)]/80 p-2 shadow-2xl bg-[var(--cor-card)]/40 backdrop-blur-sm">
            <img
              src="/assets/img/marcos_perfil.jpg"
              alt="Foto de perfil de Marcos Vinícius"
              className="w-full h-full object-cover rounded-full"
            />

            <div className="absolute bottom-3 right-3 bg-[var(--cor-card)] border border-[var(--cor-primaria)]/50 text-[var(--cor-primaria)] p-3 rounded-2xl shadow-xl backdrop-blur-md">
              <FaShieldAlt className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}