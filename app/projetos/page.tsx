// app/projetos/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useThemeLang } from "../../context/ThemeLangContext";
import { config } from "../../data/config";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFilter,
  FaCodeBranch,
} from "react-icons/fa";

interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics: string[];
}

export default function ProjetosPage() {
  const { lang, content } = useThemeLang();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Lista de filtros vinda do seu config.ts
  const definedFilters: string[] = content.projectFilters || [];

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${config.username}/repos`
        );
        const data = await response.json();

        // Filtra apenas repositórios com o tópico "portfolio"
        const filteredRepos = Array.isArray(data)
          ? data.filter((repo: Project) => repo.topics?.includes("portfolio"))
          : [];

        setProjects(filteredRepos);
      } catch (error) {
        console.error("Falha ao buscar projetos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const formatTopic = (topic: string) => {
    if (topic === "ia") return "IA";
    if (topic === "portfolio-lab") return "Laboratórios";
    return topic
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const displayedProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.topics?.includes(filter));

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex-1">
        {/* Luz difusa de fundo cibernética */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--cor-primaria)]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Cabeçalho da Página */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-[var(--cor-primaria)]/10 text-[var(--cor-primaria)] border border-[var(--cor-primaria)]/20 mb-3 inline-block">
            SHOWCASE TÉCNICO
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--cor-texto)]">
            {content.projectsTitle}
          </h1>
          <p className="text-base md:text-lg text-[var(--cor-secundaria)] mt-3">
            Exploração ofensiva, sistemas full-stack, automações em Python/Go e laboratórios práticos.
          </p>
        </div>

        {/* Aviso para leitores em inglês */}
        {lang === "en" && content.projectsNoticeEN && (
          <div className="max-w-xl mx-auto mb-10 p-4 rounded-2xl bg-[var(--cor-card)] border border-[var(--cor-borda)] text-[var(--cor-secundaria)] text-center italic text-sm shadow-sm">
            <p>{content.projectsNoticeEN}</p>
          </div>
        )}

        {/* Barra de Filtros Interativos */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <div className="flex items-center gap-2 mr-2 text-xs font-extrabold uppercase tracking-wider text-[var(--cor-secundaria)]">
            <FaFilter className="text-sm text-[var(--cor-primaria)]" />
            <span>Filtrar:</span>
          </div>

          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-2xl border font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              filter === "all"
                ? "bg-[var(--cor-primaria)] border-[var(--cor-primaria)] text-white shadow-md shadow-[var(--cor-primaria)]/20 scale-105"
                : "bg-[var(--cor-card)] border-[var(--cor-borda)] text-[var(--cor-secundaria)] hover:border-[var(--cor-primaria)] hover:text-[var(--cor-primaria)]"
            }`}
          >
            Todos ({projects.length})
          </button>

          {definedFilters.map((topic) => {
            const hasProject = projects.some((p) => p.topics?.includes(topic));
            if (!hasProject) return null;

            return (
              <button
                key={topic}
                onClick={() => setFilter(topic)}
                className={`px-5 py-2.5 rounded-2xl border font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                  filter === topic
                    ? "bg-[var(--cor-primaria)] border-[var(--cor-primaria)] text-white shadow-md shadow-[var(--cor-primaria)]/20 scale-105"
                    : "bg-[var(--cor-card)] border-[var(--cor-borda)] text-[var(--cor-secundaria)] hover:border-[var(--cor-primaria)] hover:text-[var(--cor-primaria)]"
                }`}
              >
                {formatTopic(topic)}
              </button>
            );
          })}
        </div>

        {/* Grade de Projetos */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-[var(--cor-secundaria)]">
            <div className="w-10 h-10 border-4 border-[var(--cor-primaria)] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="font-semibold">Carregando repositórios do GitHub...</p>
          </div>
        ) : displayedProjects.length === 0 ? (
          <div className="text-center py-20 bg-[var(--cor-card)] border border-[var(--cor-borda)] rounded-3xl max-w-lg mx-auto">
            <FaCodeBranch className="text-4xl text-[var(--cor-secundaria)]/40 mx-auto mb-3" />
            <p className="text-[var(--cor-secundaria)] font-medium">
              Nenhum projeto encontrado nesta categoria no momento.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.name}
                className="group bg-[var(--cor-card)] border border-[var(--cor-borda)] hover:border-[var(--cor-primaria)]/80 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[var(--cor-primaria)]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Topo do Card: Nome + Ações Rápidas */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-[var(--cor-texto)] group-hover:text-[var(--cor-primaria)] transition-colors leading-snug">
                      {project.name.replace(/[-_]/g, " ")}
                    </h3>

                    <div className="flex items-center gap-3 text-lg shrink-0">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[var(--cor-texto)]/5 hover:bg-[var(--cor-primaria)] hover:text-white text-[var(--cor-secundaria)] transition-colors"
                        title="Repositório no GitHub"
                      >
                        <FaGithub />
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[var(--cor-texto)]/5 hover:bg-[var(--cor-primaria)] hover:text-white text-[var(--cor-secundaria)] transition-colors"
                          title="Ver Aplicação Online"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-sm md:text-base text-[var(--cor-secundaria)] mb-8 leading-relaxed line-clamp-3">
                    {project.description || "Sem descrição informada no repositório."}
                  </p>
                </div>

                {/* Rodapé do Card: Tags de Tecnologias */}
                <div className="pt-6 border-t border-[var(--cor-borda)]">
                  <div className="flex flex-wrap gap-2">
                    {project.topics
                      .filter((t) => t !== "portfolio")
                      .map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 text-xs font-bold rounded-xl bg-[var(--cor-primaria)]/10 text-[var(--cor-primaria)] border border-[var(--cor-primaria)]/20"
                        >
                          {topic}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}