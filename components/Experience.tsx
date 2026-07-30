// components/Experience.tsx
"use client";

import React from "react";
import { useThemeLang } from "../context/ThemeLangContext";
import {
  FaShieldAlt,
  FaServer,
  FaGraduationCap,
  FaCalendarAlt,
  FaCrosshairs,
} from "react-icons/fa";

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export default function Experience() {
  const { content, lang } = useThemeLang();
  const timeline: TimelineItem[] = content.experienceTimeline || [];

  const getExperienceVisuals = (companyName: string, roleName: string, isCurrent?: boolean) => {
    const lowerComp = companyName.toLowerCase();
    const lowerRole = roleName.toLowerCase();

    // Destaque Red Team / Pentest para a ENQ SOLUÇÕES
    if (lowerComp.includes("enq") || lowerRole.includes("tester") || lowerRole.includes("consult")) {
      return {
        icon: <FaCrosshairs className="text-xl text-rose-500 dark:text-rose-400" />,
        badgeBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
        borderHover: "hover:border-rose-500/50",
        isCurrent: isCurrent || false,
      };
    }
    // Destaque AppSec / Guardsi
    if (lowerComp.includes("guardsi") || lowerRole.includes("ciber")) {
      return {
        icon: <FaShieldAlt className="text-xl text-emerald-500 dark:text-emerald-400" />,
        badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        borderHover: "hover:border-emerald-500/50",
        isCurrent: isCurrent || false,
      };
    }
    // Destaque Infraestrutura / CFQ
    if (lowerComp.includes("química") || lowerComp.includes("cfq") || lowerRole.includes("infra")) {
      return {
        icon: <FaServer className="text-xl text-blue-600 dark:text-blue-400" />,
        badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        borderHover: "hover:border-blue-500/50",
        isCurrent: isCurrent || false,
      };
    }
    // Destaque Acadêmico / CEUB
    return {
      icon: <FaGraduationCap className="text-xl text-indigo-600 dark:text-indigo-400" />,
      badgeBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      borderHover: "hover:border-indigo-500/50",
      isCurrent: isCurrent || false,
    };
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--cor-primaria)]/10 text-[var(--cor-primaria)] border border-[var(--cor-primaria)]/20 mb-3 inline-block">
          {content.experienceSectionBadge || (lang === "en" ? "PROFESSIONAL TRACK RECORD" : "TRAJETÓRIA PROFISSIONAL")}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--cor-texto)]">
          {content.experienceTitle}
        </h2>
        <p className="text-sm md:text-base text-[var(--cor-secundaria)] mt-3">
          {content.experienceSubtitle}
        </p>
      </div>

      {/* Container da Linha do Tempo */}
      <div className="relative border-l-2 border-[var(--cor-borda)] ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
        {timeline.map((item, index) => {
          const visuals = getExperienceVisuals(item.company, item.role, item.isCurrent);

          return (
            <div key={index} className="relative group">
              {/* Selo/Ícone Oficial (Crosshairs para ENQ, Escudo para Guardsi, etc.) */}
              <div className="absolute -left-[43px] md:-left-[61px] top-1.5 w-11 h-11 rounded-2xl bg-[var(--cor-card)] border-2 border-[var(--cor-borda)] group-hover:border-[var(--cor-primaria)] group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-md">
                {visuals.icon}
              </div>

              {/* Card da Experiência */}
              <div
                className={`bg-[var(--cor-card)] border border-[var(--cor-borda)] ${visuals.borderHover} p-7 md:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
              >
                {/* Topo: Nome da Empresa + Badge de "ATUAL/CURRENT" */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold uppercase tracking-wider text-[var(--cor-primaria)]">
                      {item.company}
                    </span>
                    {visuals.isCurrent && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {lang === "en" ? "Current" : "Atual"}
                      </span>
                    )}
                  </div>

                  {/* Período */}
                  <div
                    className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold border ${visuals.badgeBg}`}
                  >
                    <FaCalendarAlt className="text-xs opacity-75" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Cargo */}
                <h3 className="text-xl md:text-2xl font-bold text-[var(--cor-texto)] mb-4 leading-snug group-hover:text-[var(--cor-primaria)] transition-colors">
                  {item.role}
                </h3>

                {/* Descrição */}
                <p className="text-sm md:text-base text-[var(--cor-secundaria)] leading-relaxed text-justify md:text-left">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}