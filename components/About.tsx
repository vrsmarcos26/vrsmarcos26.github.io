// components/About.tsx
"use client";

import React from "react";
import { useThemeLang } from "../context/ThemeLangContext";
import {
  FaShieldAlt,
  FaBug,
  FaCode,
  FaCrosshairs,
  FaCheckCircle,
} from "react-icons/fa";

interface Pillar {
  title: string;
  desc: string;
  badge: string;
}

export default function About() {
  const { content, lang } = useThemeLang();
  
  // Garantia de fallback seguro para nunca deixar a coluna da direita vazia
  const tacticalPillars: Pillar[] = content.tacticalPillars || [
    {
      title: lang === "en" ? "Red Team (Offensive)" : "Red Team (Ofensivo)",
      desc: lang === "en"
        ? "Web (OWASP Top 10), Mobile (Android), and Wireless Penetration Testing, identifying real-world flaws before they are exploited."
        : "Pentest Web (OWASP Top 10), Mobile (Android) e Redes Wireless, identificando falhas reais antes que sejam exploradas.",
      badge: lang === "en" ? "Exploitation" : "Exploração",
    },
    {
      title: lang === "en" ? "Blue Team (Defensive)" : "Blue Team (Defensivo)",
      desc: lang === "en"
        ? "Incident handling, continuous asset monitoring (Wazuh, Zabbix), and enterprise system hardening."
        : "Tratamento de incidentes, monitoramento contínuo de ativos (Wazuh, Zabbix) e Hardening de sistemas corporativos.",
      badge: lang === "en" ? "Protection" : "Proteção",
    },
    {
      title: "DevSecOps & Full-Stack",
      desc: lang === "en"
        ? "Building robust APIs (Python/Django/FastAPI and Go) with secure authentication (2FA), sanitization, and Docker."
        : "Desenvolvimento de APIs robustas (Python/Django/FastAPI e Go) com autenticação segura (2FA), sanitização e Docker.",
      badge: lang === "en" ? "Architecture" : "Arquitetura",
    },
  ];

  const getPillarIcon = (index: number) => {
    if (index === 0) return <FaBug className="text-2xl text-rose-500 dark:text-rose-400" />;
    if (index === 1) return <FaShieldAlt className="text-2xl text-emerald-500 dark:text-emerald-400" />;
    return <FaCode className="text-2xl text-blue-500 dark:text-blue-400" />;
  };

  const getPillarHover = (index: number) => {
    if (index === 0) return "hover:border-rose-500/50";
    if (index === 1) return "hover:border-emerald-500/50";
    return "hover:border-blue-500/50";
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--cor-primaria)]/10 text-[var(--cor-primaria)] border border-[var(--cor-primaria)]/20 mb-3 inline-block">
          {content.aboutSubtitle || (lang === "en" ? "STRATEGIC VISION" : "VISÃO ESTRATÉGICA")}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--cor-texto)]">
          {content.aboutTitle}
        </h2>
        <p className="text-sm md:text-base text-[var(--cor-secundaria)] mt-3">
          {content.aboutTagline ||
            (lang === "en"
              ? "Combining resilient system engineering with proactive vulnerability exploitation."
              : "Unindo a construção de sistemas resilientes com a exploração de suas vulnerabilidades.")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Esquerdo: Descrição Biográfica e Citação */}
        <div className="lg:col-span-7 space-y-8">
          <div className="text-[var(--cor-secundaria)] leading-relaxed text-base md:text-lg text-justify whitespace-pre-line">
            {content.aboutDescription}
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-[var(--cor-card)] border-l-4 border-l-[var(--cor-primaria)] border border-[var(--cor-borda)] shadow-sm">
            <div className="flex items-start gap-4">
              <FaCrosshairs className="text-2xl text-[var(--cor-primaria)] shrink-0 mt-1" />
              <div>
                <p className="text-sm md:text-base font-bold text-[var(--cor-texto)] italic">
                  &ldquo;
                  {content.aboutQuote ||
                    (lang === "en"
                      ? "It is not enough to just find the vulnerability. You must understand the root cause in the code to build truly resilient digital defenses."
                      : "Não basta apenas encontrar a vulnerabilidade. É preciso entender a causa raiz no código para construir defesas digitais verdadeiramente robustas.")}
                  &rdquo;
                </p>
                <span className="text-xs uppercase tracking-wider font-extrabold text-[var(--cor-primaria)] mt-2 block">
                  — {lang === "en" ? "Purple Team Mindset" : "Mentalidade Purple Team"}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--cor-borda)]">
            <div className="flex items-center gap-3 text-sm font-semibold text-[var(--cor-texto)]">
              <FaCheckCircle className="text-emerald-500 shrink-0" />
              <span>
                {content.aboutBadge1 ||
                  (lang === "en" ? "Focused on OWASP Top 10 & AppSec" : "Foco em OWASP Top 10 & AppSec")}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-[var(--cor-texto)]">
              <FaCheckCircle className="text-emerald-500 shrink-0" />
              <span>
                {content.aboutBadge2 ||
                  (lang === "en"
                    ? "B.S. in Computer Science (Undergraduate)"
                    : "Graduando em Ciência da Computação")}
              </span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Cards Táticos Dinâmicos */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-5">
          {tacticalPillars.map((pillar, index) => (
            <div
              key={index}
              className={`group bg-[var(--cor-card)] border border-[var(--cor-borda)] ${getPillarHover(
                index
              )} p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-[var(--cor-texto)]/5 border border-[var(--cor-borda)]">
                  {getPillarIcon(index)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--cor-texto)]/5 text-[var(--cor-secundaria)] border border-[var(--cor-borda)]">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--cor-texto)] mb-2 group-hover:text-[var(--cor-primaria)] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-[var(--cor-secundaria)] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}