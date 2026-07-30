// app/contato/page.tsx
"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useThemeLang } from "../../context/ThemeLangContext";
import {
  FaEnvelope,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

export default function ContatoPage() {
  const { content } = useThemeLang();
  const social = content.socialLinks;

  const contactCards = [
    {
      name: "E-mail Direto",
      value: social.email.replace("mailto:", ""),
      href: social.email,
      icon: <FaEnvelope className="text-3xl text-emerald-500" />,
      borderHover: "hover:border-emerald-500/80",
      bgHover: "hover:shadow-emerald-500/10",
      desc: "Contato corporativo para orçamentos e projetos.",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/vrsmarcos26",
      href: social.linkedin,
      icon: <FaLinkedin className="text-3xl text-blue-600 dark:text-blue-400" />,
      borderHover: "hover:border-blue-500/80",
      bgHover: "hover:shadow-blue-500/10",
      desc: "Conecte-se para networking e histórico profissional.",
    },
    {
      name: "Discord",
      value: "Comunidade & Tech",
      href: social.discord,
      icon: <FaDiscord className="text-3xl text-indigo-500" />,
      borderHover: "hover:border-indigo-500/80",
      bgHover: "hover:shadow-indigo-500/10",
      desc: "Canal aberto para troca de ideias técnicas e laboratórios.",
    },
    {
      name: "Instagram",
      value: "@_marcos.vrs",
      href: social.instagram,
      icon: <FaInstagram className="text-3xl text-rose-500" />,
      borderHover: "hover:border-rose-500/80",
      bgHover: "hover:shadow-rose-500/10",
      desc: "Acompanhe projetos pessoais, bastidores e novidades.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Luz difusa de fundo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--cor-primaria)]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-[var(--cor-primaria)]/10 text-[var(--cor-primaria)] border border-[var(--cor-primaria)]/20 mb-3 inline-block">
            VAMOS CONVERSAR
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--cor-texto)]">
            {content.contactPageTitle}
          </h1>
          <p className="text-base md:text-lg text-[var(--cor-secundaria)] mt-4 leading-relaxed max-w-xl mx-auto whitespace-pre-line">
            {content.contactPageDescription}
          </p>
        </div>

        {/* Grid dos Cards de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-[var(--cor-card)] border border-[var(--cor-borda)] ${card.borderHover} p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${card.bgHover} flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[var(--cor-texto)]/5 border border-[var(--cor-borda)]">
                  {card.icon}
                </div>
                <div className="p-3 rounded-xl bg-[var(--cor-texto)]/5 text-[var(--cor-secundaria)] group-hover:bg-[var(--cor-primaria)] group-hover:text-white transition-colors">
                  <FaArrowRight className="text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--cor-texto)] mb-1 group-hover:text-[var(--cor-primaria)] transition-colors">
                  {card.name}
                </h3>
                <p className="text-sm font-semibold text-[var(--cor-primaria)] mb-3">
                  {card.value}
                </p>
                <p className="text-sm text-[var(--cor-secundaria)] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}