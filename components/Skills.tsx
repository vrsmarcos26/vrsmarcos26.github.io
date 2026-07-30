// components/Skills.tsx
"use client";

import React from "react";
import { useThemeLang } from "../context/ThemeLangContext";
import {
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaCloud,
  FaPalette,
} from "react-icons/fa";

export default function Skills() {
  const { content } = useThemeLang();
  const skillsObj = content.skills || {};
  const categories = Object.entries(skillsObj);

  const getCategoryConfig = (categoryName: string) => {
    const lower = categoryName.toLowerCase();
    if (lower.includes("ciber") || lower.includes("cyber")) {
      return {
        icon: <FaShieldAlt className="text-2xl text-emerald-500 dark:text-emerald-400" />,
        borderHover: "hover:border-emerald-500/50",
        tagBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      };
    }
    if (lower.includes("full-stack") || lower.includes("desenvolvimento")) {
      return {
        icon: <FaCode className="text-2xl text-blue-600 dark:text-blue-400" />,
        borderHover: "hover:border-blue-500/50",
        tagBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      };
    }
    if (lower.includes("banco") || lower.includes("data")) {
      return {
        icon: <FaDatabase className="text-2xl text-indigo-600 dark:text-indigo-400" />,
        borderHover: "hover:border-indigo-500/50",
        tagBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      };
    }
    if (lower.includes("devops") || lower.includes("infra")) {
      return {
        icon: <FaCloud className="text-2xl text-amber-600 dark:text-amber-400" />,
        borderHover: "hover:border-amber-500/50",
        tagBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      };
    }
    return {
      icon: <FaPalette className="text-2xl text-rose-600 dark:text-rose-400" />,
      borderHover: "hover:border-rose-500/50",
      tagBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    };
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--cor-primaria)]/10 text-[var(--cor-primaria)] border border-[var(--cor-primaria)]/20 mb-3 inline-block">
          ARSENAL TÉCNICO
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--cor-texto)]">
          {content.skillsTitle}
        </h2>
        <p className="text-sm md:text-base text-[var(--cor-secundaria)] mt-3">
          Tecnologias, ferramentas ofensivas e stacks utilizadas no dia a dia.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {categories.map(([category, skillsList]) => {
          const config = getCategoryConfig(category);

          return (
            <div
              key={category}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[var(--cor-card)] border border-[var(--cor-borda)] ${config.borderHover} p-7 rounded-3xl hover:-translate-y-1.5 transition-all duration-300 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[var(--cor-texto)]/5 border border-[var(--cor-borda)]">
                    {config.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--cor-texto)]">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {Array.isArray(skillsList) &&
                    skillsList.map((skill: string) => (
                      <span
                        key={skill}
                        className={`px-3.5 py-1.5 text-xs font-bold rounded-xl border ${config.tagBg} transition-transform hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}