// components/Footer.tsx
"use client";

import React from "react";
import { useThemeLang } from "../context/ThemeLangContext";
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { content } = useThemeLang();
  const social = content.socialLinks;

  return (
    <footer className="text-center py-16 px-6 border-t border-gray-800 mt-20">
      <h2 className="text-2xl font-bold text-[var(--cor-primaria)] mb-4">
        {content.footerTitle}
      </h2>
      <p className="max-w-xl mx-auto text-[var(--cor-secundaria)] mb-8">
        {content.footerDescription}
      </p>

      {/* Ícones de Redes Sociais */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href={social.email}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-[var(--cor-secundaria)] flex items-center justify-center text-xl text-[var(--cor-secundaria)] hover:text-[var(--cor-primaria)] hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-[var(--cor-secundaria)] flex items-center justify-center text-xl text-[var(--cor-secundaria)] hover:text-[var(--cor-primaria)] hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-[var(--cor-secundaria)] flex items-center justify-center text-xl text-[var(--cor-secundaria)] hover:text-[var(--cor-primaria)] hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={social.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-[var(--cor-secundaria)] flex items-center justify-center text-xl text-[var(--cor-secundaria)] hover:text-[var(--cor-primaria)] hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-[var(--cor-secundaria)] flex items-center justify-center text-xl text-[var(--cor-secundaria)] hover:text-[var(--cor-primaria)] hover:border-[var(--cor-primaria)] hover:-translate-y-1 transition-all"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="text-sm text-[var(--cor-secundaria)]">
        {content.footerCopyright}
      </p>
    </footer>
  );
}